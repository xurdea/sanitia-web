# Imagen de la web de SanitIA: build estático de Astro servido por nginx.
#
#   docker compose up -d --build
#
# SITE_URL se fija en el BUILD: Astro escribe con ella las URL canónicas, el
# sitemap y robots.txt. Si cambia la URL pública, hay que reconstruir.

# ---------------------------------------------------------------------------
# Etapa 1: build de Astro
# ---------------------------------------------------------------------------
FROM node:24-slim AS builder

WORKDIR /app

# Reintentos amplios: en redes que cortan conexiones, un `npm ci` limpio puede
# caerse por un solo ECONNRESET.
COPY package.json package-lock.json ./
RUN npm config set fetch-retries 5 \
  && npm config set fetch-retry-mintimeout 20000 \
  && npm config set fetch-retry-maxtimeout 120000 \
  && npm config set fetch-timeout 600000 \
  && npm ci

COPY . .

ARG SITE_URL=http://localhost:8090
# true = robots.txt bloquea todo y cada página lleva meta noindex.
ARG SITE_NOINDEX=true
ENV SITE_URL=$SITE_URL \
    SITE_NOINDEX=$SITE_NOINDEX \
    ASTRO_TELEMETRY_DISABLED=1

RUN npm run build

# ---------------------------------------------------------------------------
# Etapa 2: servidor estático
# ---------------------------------------------------------------------------
FROM nginx:1.27-alpine AS runtime

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1
