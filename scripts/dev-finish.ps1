# TERMINAR de trabajar: commit de lo pendiente y push a GitHub (main).
#
#   powershell -ExecutionPolicy Bypass -File scripts/dev-finish.ps1
#   (o la tarea de VS Code "SANITIA-web - TERMINAR trabajo")
#
# Se trabaja desde dos ordenadores y GitHub es la fuente de verdad: lo que no
# se sube aquí no existe en el otro ordenador.
#
# Garantías: NUNCA hace force push, reset, clean, stash, merge, rebase ni borra
# nada. Si GitHub tiene commits que este ordenador no tiene (del otro
# ordenador), hace el commit en local (el trabajo queda a salvo) pero NO sube:
# te enseña cómo revisar el estado antes de integrar a mano.
#
# Antes del commit se para si entre los cambios hay algo con pinta de secreto
# (.env, claves, certificados, tokens de npm o Netlify…), aunque .gitignore ya
# debería excluirlo.
#
# Subir a main NO publica la web: el despliegue se lanza a mano en el servidor
# (ver DESPLIEGUE.md).

# Los errores se comprueban con $LASTEXITCODE: con 'Stop', Windows PowerShell
# tomaría por fallo el progreso que git escribe en stderr.
$ErrorActionPreference = 'Continue'

function Fail([string]$msg) {
  Write-Host ''
  Write-Host "ERROR: $msg" -ForegroundColor Red
  exit 1
}
function Step([string]$msg) {
  Write-Host ''
  Write-Host "==> $msg" -ForegroundColor Cyan
}

# GitHub tiene commits que aquí no están y aquí hay trabajo que allí no está.
# No se integra nada automáticamente (ni rebase, ni merge, ni reset): primero
# hay que ver qué hay en cada lado.
function Show-Diverged([int]$ahead, [int]$behind) {
  Write-Host ''
  Write-Host 'NO se ha subido nada a GitHub.' -ForegroundColor Yellow
  Write-Host "GitHub (origin/main) tiene $behind commit(s) que este ordenador no tiene: cambios" -ForegroundColor Yellow
  Write-Host "hechos desde el otro ordenador. Aquí hay $ahead commit(s) tuyos que GitHub no tiene." -ForegroundColor Yellow
  Write-Host 'Tu trabajo está a salvo en commits locales; no se ha tocado nada más.'
  Write-Host ''
  Write-Host 'Antes de integrar origin/main a mano, revisa el estado con:'
  Write-Host '  git status -sb'
  Write-Host '  git log --oneline --graph --decorate --all -10'
  Write-Host ''
  Write-Host 'Cuando lo tengas claro, integra tú origin/main y vuelve a lanzar TERMINAR.'
  exit 1
}

# Sube main a GitHub y comprueba que ha quedado sincronizado.
function Push-Main {
  Step 'Subiendo a GitHub (git push origin main)'
  git push origin main
  if ($LASTEXITCODE -ne 0) {
    Fail 'git push falló. Tu commit está a salvo en este ordenador; revisa la conexión y vuelve a lanzar TERMINAR.'
  }
  Step 'Estado'
  git status -sb
  $ahead = git rev-list --count origin/main..main
  $behind = git rev-list --count main..origin/main
  if ([int]$ahead -ne 0 -or [int]$behind -ne 0) {
    Fail "main no ha quedado igual que GitHub ($ahead por subir, $behind por traer)."
  }
  Write-Host ''
  Write-Host 'Listo: tu trabajo está sincronizado con GitHub.' -ForegroundColor Green
  Write-Host 'La web del servidor NO cambia hasta desplegar allí: bash /opt/sanitia_web/scripts/deploy.sh'
  exit 0
}

# --- ¿Repositorio Git y rama main? -------------------------------------------
$top = git rev-parse --show-toplevel 2>$null
if ($LASTEXITCODE -ne 0 -or -not $top) {
  Fail 'Esto no es un repositorio Git. Abre la carpeta de la web de SanitIA y vuelve a lanzarlo.'
}
Set-Location -LiteralPath $top

$branch = git rev-parse --abbrev-ref HEAD
if ($branch -ne 'main') {
  Fail "Estás en la rama '$branch', no en main. Este flujo trabaja solo sobre main; cámbiate tú o termina esa rama a mano."
}

Step 'Estado actual (git status)'
git status

# Saber si GitHub tiene algo nuevo antes de decidir si se puede subir.
Step 'Comprobando GitHub (git fetch origin)'
git fetch origin
if ($LASTEXITCODE -ne 0) { Fail 'git fetch falló. ¿Hay conexión con GitHub? No se ha tocado nada.' }
$behind = [int](git rev-list --count main..origin/main)

$changes = @(git status --porcelain)

# --- Sin cambios: ¿quedó algo sin subir? ---------------------------------------
if ($changes.Count -eq 0) {
  $ahead = [int](git rev-list --count origin/main..main)
  if ($ahead -eq 0) {
    Write-Host ''
    if ($behind -gt 0) {
      Write-Host "No hay nada que subir. Ojo: GitHub tiene $behind commit(s) nuevos; tráelos con EMPEZAR." -ForegroundColor Yellow
    } else {
      Write-Host 'No hay cambios ni commits pendientes: ya estás sincronizado con GitHub.' -ForegroundColor Green
    }
    exit 0
  }
  if ($behind -gt 0) { Show-Diverged $ahead $behind }
  Write-Host ''
  Write-Host "No hay cambios nuevos, pero hay $ahead commit(s) sin subir." -ForegroundColor Yellow
  Push-Main
}

# --- Hay cambios: commit ---------------------------------------------------------
Write-Host ''
$msg = ''
while ([string]::IsNullOrWhiteSpace($msg)) {
  $msg = Read-Host 'Mensaje del commit (Ctrl+C para cancelar)'
  if ([string]::IsNullOrWhiteSpace($msg)) {
    Write-Host 'El mensaje no puede estar vacío.' -ForegroundColor Yellow
  }
}
$msg = $msg.Trim()

Step 'Preparando los cambios (git add -A)'
git add -A
if ($LASTEXITCODE -ne 0) { Fail 'git add falló. No se ha hecho ningún commit.' }

# Red de seguridad: nada con pinta de secreto. En esta web .env solo lleva
# configuración de despliegue, pero no debe versionarse; .npmrc puede llevar
# tokens del registro de npm y .netlify/ el estado de la CLI de Netlify.
$staged = @(git diff --cached --name-only)
$suspicious = @($staged | Where-Object {
    ($_ -match '(^|/)\.env($|\.)' -and $_ -notmatch '\.example$') -or
    $_ -match '(^|/)\.npmrc$' -or
    $_ -match '(^|/)\.netlify/' -or
    $_ -match '\.(key|pem|gpg|pfx|p12)$'
  })
if ($suspicious.Count -gt 0) {
  Write-Host ''
  Write-Host 'Entre los cambios hay ficheros que parecen secretos:' -ForegroundColor Red
  $suspicious | ForEach-Object { Write-Host "  $_" -ForegroundColor Red }
  Write-Host 'No hago commit. Quedan preparados (staged), sin perder nada; sácalos con:'
  Write-Host '  git restore --staged <fichero>'
  Write-Host 'y añádelos a .gitignore si no deben versionarse nunca.'
  exit 1
}

Step 'Esto es lo que va a entrar en el commit'
git status --short
git diff --cached --stat
Write-Host ''
Write-Host "Mensaje: $msg"
$answer = Read-Host '¿Hago el commit y lo subo a GitHub? (S/N)'
if ($answer -notmatch '^[sS]') {
  Write-Host ''
  Write-Host 'Cancelado. No se ha hecho commit; los cambios siguen en tu disco, preparados (staged).' -ForegroundColor Yellow
  Write-Host 'Para dejarlos como estaban: git restore --staged .'
  exit 1
}

# El mensaje va por fichero (-F), no por -m: Windows PowerShell 5.1 estropea
# los argumentos con comillas. UTF-8 sin BOM para que git guarde bien los acentos.
$msgFile = [System.IO.Path]::GetTempFileName()
try {
  [System.IO.File]::WriteAllText($msgFile, $msg + "`n", (New-Object System.Text.UTF8Encoding $false))
  Step 'Commit'
  git commit -F $msgFile
  $commitOk = ($LASTEXITCODE -eq 0)
} finally {
  Remove-Item -LiteralPath $msgFile -ErrorAction SilentlyContinue
}
if (-not $commitOk) { Fail 'git commit falló. Los cambios siguen preparados (staged); no se ha perdido nada.' }

if ($behind -gt 0) {
  Write-Host ''
  Write-Host 'Commit hecho en local.' -ForegroundColor Green
  Show-Diverged ([int](git rev-list --count origin/main..main)) $behind
}

Push-Main
