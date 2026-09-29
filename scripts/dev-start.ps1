# EMPEZAR a trabajar: trae a main lo último de GitHub sin tocar trabajo local.
#
#   powershell -ExecutionPolicy Bypass -File scripts/dev-start.ps1
#   (o la tarea de VS Code "SANITIA-web - EMPEZAR trabajo")
#
# Se trabaja desde dos ordenadores y GitHub es la fuente de verdad: antes de
# tocar nada hay que partir de lo que hay allí.
#
# Garantías: NUNCA hace reset, clean, stash, merge ni rebase, ni borra nada. Si
# hay cambios locales sin commit, se para sin hacer pull y te deja decidir. El
# pull es --ff-only: si main local y GitHub se han separado, falla en vez de
# mezclar.

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

# --- ¿Repositorio Git? ------------------------------------------------------
$top = git rev-parse --show-toplevel 2>$null
if ($LASTEXITCODE -ne 0 -or -not $top) {
  Fail 'Esto no es un repositorio Git. Abre la carpeta de la web de SanitIA y vuelve a lanzarlo.'
}
Set-Location -LiteralPath $top

git remote get-url origin *> $null
if ($LASTEXITCODE -ne 0) { Fail 'El repositorio no tiene remoto "origin" (GitHub).' }

$branch = git rev-parse --abbrev-ref HEAD
Step "Rama actual: $branch"

# --- ¿Cambios locales? -------------------------------------------------------
# Incluye ficheros nuevos sin versionar: un pull o un cambio de rama podrían
# chocar con ellos.
$changes = @(git status --porcelain)
if ($changes.Count -gt 0) {
  Write-Host ''
  Write-Host 'Hay cambios locales sin commit:' -ForegroundColor Yellow
  git status --short
  Write-Host ''
  Write-Host 'No hago pull para no pisar ese trabajo. Opciones:' -ForegroundColor Yellow
  Write-Host '  - Si son buenos: súbelos con "SANITIA-web - TERMINAR trabajo" y vuelve a EMPEZAR.'
  Write-Host '  - Si no los quieres: descártalos tú a mano (este script no borra nada).'
  exit 1
}

# --- A main y al día ---------------------------------------------------------
if ($branch -ne 'main') {
  Step 'Cambiando a main'
  git switch main
  if ($LASTEXITCODE -ne 0) { Fail 'No se pudo cambiar a main.' }
}

Step 'Trayendo novedades de GitHub (git fetch origin)'
git fetch origin
if ($LASTEXITCODE -ne 0) { Fail 'git fetch falló. ¿Hay conexión con GitHub?' }

Step 'Actualizando main (git pull --ff-only origin main)'
# advice.diverging=false: si falla, git no propone merge ni rebase; aquí no se
# integra nada automáticamente, se revisa primero.
git -c advice.diverging=false pull --ff-only origin main
if ($LASTEXITCODE -ne 0) {
  $ahead = git rev-list --count origin/main..main
  $behind = git rev-list --count main..origin/main
  Write-Host ''
  Write-Host "main local y GitHub se han separado: $ahead commit(s) solo aquí y $behind solo en GitHub" -ForegroundColor Yellow
  Write-Host '(cambios hechos desde el otro ordenador). No se ha tocado nada.' -ForegroundColor Yellow
  Write-Host ''
  Write-Host 'Antes de integrar origin/main a mano, revisa el estado con:'
  Write-Host '  git status -sb'
  Write-Host '  git log --oneline --graph --decorate --all -10'
  Fail 'main no se ha podido actualizar.'
}

Step 'Estado'
git status -sb

# Commits de una sesión anterior que no llegaron a subirse.
$ahead = git rev-list --count origin/main..main
if ([int]$ahead -gt 0) {
  Write-Host ''
  Write-Host "Aviso: tienes $ahead commit(s) sin subir a GitHub. Súbelos con 'SANITIA-web - TERMINAR trabajo'." -ForegroundColor Yellow
}

Write-Host ''
Write-Host 'Listo: main está al día con GitHub. Ya puedes empezar a trabajar.' -ForegroundColor Green
exit 0
