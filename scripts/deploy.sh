#!/usr/bin/env bash
#
# Despliega en el servidor la última versión de main de la web de SanitIA.
#
#   bash /opt/sanitia_web/scripts/deploy.sh
#
# Trae main, reconstruye la imagen, comprueba que nginx sirve la portada y, si
# algo falla, dice cómo volver al commit anterior. La web es estática: no hay
# base de datos ni migraciones, así que volver atrás es siempre seguro.
set -uo pipefail

APP_DIR="${APP_DIR:-$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)}"
BRANCH="${DEPLOY_BRANCH:-main}"
HEALTH_TIMEOUT="${HEALTH_TIMEOUT:-60}"

log() { echo "[$(date +%H:%M:%S)] $*"; }
die() {
  echo "ERROR: $*" >&2
  exit 1
}

[ -f "$APP_DIR/docker-compose.yml" ] || die "$APP_DIR no parece la web de SanitIA"
[ -d "$APP_DIR/.git" ] || die "$APP_DIR no es un clon de git: no habría forma de volver atrás"
[ -f "$APP_DIR/.env" ] || die "falta $APP_DIR/.env (cópialo de .env.example)"

DIRTY="$(git -C "$APP_DIR" status --porcelain)"
[ -z "$DIRTY" ] || die "hay cambios sin versionar en $APP_DIR:
$DIRTY"

log "Trayendo lo último de $BRANCH…"
git -C "$APP_DIR" fetch --quiet origin "$BRANCH" || die "no se pudo hacer fetch"

PREVIOUS="$(git -C "$APP_DIR" rev-parse HEAD)"
TARGET="$(git -C "$APP_DIR" rev-parse "origin/$BRANCH")"
log "Ahora: ${PREVIOUS:0:8} → pasará a: ${TARGET:0:8}  $(git -C "$APP_DIR" log -1 --format=%s "$TARGET")"

git -C "$APP_DIR" checkout --quiet --detach "$TARGET" || die "no se pudo cambiar de commit"

ROLLBACK="git -C $APP_DIR checkout --detach $PREVIOUS && cd $APP_DIR && docker compose up -d --build"

log "Construyendo y arrancando…"
if ! (cd "$APP_DIR" && docker compose up -d --build); then
  echo "Para volver atrás:"
  echo "  $ROLLBACK"
  die "el build o el arranque han fallado"
fi

log "Comprobando que responde (hasta ${HEALTH_TIMEOUT}s)…"
DEADLINE=$(($(date +%s) + HEALTH_TIMEOUT))
while [ "$(date +%s)" -lt "$DEADLINE" ]; do
  if (cd "$APP_DIR" && docker compose exec -T web wget -qO- http://127.0.0.1/ >/dev/null 2>&1); then
    log "Desplegado: ${TARGET:0:8}"
    exit 0
  fi
  sleep 3
done

echo "AVISO: la web no responde tras ${HEALTH_TIMEOUT}s."
echo "  cd $APP_DIR && docker compose logs --tail=50 web"
echo "Para volver atrás:"
echo "  $ROLLBACK"
exit 1
