# Despliegue en docker-server

La web de SanitIA es **estática**: un único contenedor nginx sirve el build de Astro.
No hay base de datos, API ni secretos. Convive con Padel School en el mismo servidor
sin tocarlo (proyecto de Compose propio: `sanitia_web`).

| | |
| --- | --- |
| Carpeta en el servidor | `/opt/sanitia_web` |
| Proyecto Docker | `sanitia_web` |
| Puerto por defecto | `127.0.0.1:8090` (Padel usa 8080 y 8081) |
| Configuración | `.env` (copiado de `.env.example`) |

---

## 1. Primera vez

### Requisitos

- El código en un repositorio de GitHub (privado), igual que Padel.
- Docker Engine con `docker compose` (ya instalado en docker-server).

### Clonar y configurar

```bash
sudo git clone https://github.com/<usuario>/sanitia-web.git /opt/sanitia_web
sudo chown -R jorge:jorge /opt/sanitia_web
cd /opt/sanitia_web
cp .env.example .env
nano .env
```

En `.env`:

- `SITE_URL`: la URL con la que se va a entrar (ver «Cómo se accede», abajo).
- `WEB_PORT`: dónde escucha el contenedor.
- `SITE_NOINDEX=true` mientras la web tenga contenido provisional.

### Arrancar

```bash
docker compose up -d --build
docker compose ps          # web debe salir "healthy"
curl -I http://127.0.0.1:8090/
```

La primera vez tarda unos minutos (instala dependencias y compila).

---

## 2. Cómo se accede

Por defecto el contenedor solo escucha en `127.0.0.1:8090`: los puertos que publica
Docker **se saltan `ufw`**, así que nunca se expone directamente a la red.

### Opción A — Solo por Tailscale (revisión privada)

Como la preproducción de Padel. En `.env`:

```bash
WEB_PORT=100.66.67.103:8090        # IP del servidor en la tailnet
SITE_URL=http://100.66.67.103:8090
```

```bash
docker compose up -d --build     # --build porque cambió SITE_URL
```

Desde cualquier dispositivo con Tailscale: `http://100.66.67.103:8090`.

### Opción B — Pública con ngrok

Deja `WEB_PORT=127.0.0.1:8090` y apunta un túnel a `localhost:8090`. Como Padel ya
tiene su servicio `ngrok`, este sería un **segundo túnel**: revisa si tu plan de ngrok
lo permite (endpoints simultáneos y dominio estático). Con la URL que te dé:

```bash
SITE_URL=https://<tu-dominio-ngrok>
docker compose up -d --build
```

### Opción C — Dominio propio con HTTPS

Para la web definitiva. Requiere el dominio apuntando a la IP pública y los puertos
80/443 abiertos. Si Padel también pasa a usar Caddy, **un único Caddy** debe servir
ambos dominios (dos Caddy no pueden compartir el 80/443). Se prepara cuando exista el
dominio.

---

## 3. Actualizar tras cambios

Desde tu PC, sube los cambios a `main` en GitHub. En el servidor:

```bash
bash /opt/sanitia_web/scripts/deploy.sh
```

Trae `main`, reconstruye, comprueba que la web responde y, si algo falla, te da el
comando para volver al commit anterior. Al ser estática, volver atrás es siempre
seguro.

---

## 4. Operación

```bash
cd /opt/sanitia_web
docker compose ps                 # estado
docker compose logs -f web        # logs de nginx
docker compose up -d --build      # reconstruir (tras cambiar .env o el código)
docker compose down               # parar (no hay datos que perder)
```

> `docker compose restart` **no relee el `.env`** ni reconstruye: tras cambiar
> `SITE_URL`, `SITE_NOINDEX` o `WEB_PORT`, usa siempre `docker compose up -d --build`.

---

## Problemas frecuentes

| Síntoma | Causa / solución |
| --- | --- |
| `port is already allocated` | Otro servicio usa ese puerto. Cambia `WEB_PORT` en `.env`. |
| Los enlaces canónicos o el sitemap apuntan a otra URL | `SITE_URL` no coincide con la URL real. Corrígela y reconstruye con `--build`. |
| `npm ci` falla con `ECONNRESET` durante el build | Red inestable: vuelve a lanzar el build (ya tiene reintentos). |
| No se llega desde otro equipo | Esperado con `127.0.0.1`: usa Tailscale, ngrok o Caddy (sección 2). |
