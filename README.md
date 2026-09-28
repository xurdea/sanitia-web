# SanitIA — Web corporativa

Web de **SanitIA**, Inteligencia Artificial aplicada al sector sanitario.
Requisitos de marca, contenido y arquitectura: ver [`CLAUDE.md`](CLAUDE.md).

## Stack

- [Astro 7](https://astro.build) (sitio estático) + TypeScript estricto
- Tailwind CSS 4 (plugin de Vite)
- Fuentes autoalojadas con Fontsource (Manrope + Inter, variables), sin peticiones a Google
- `@astrojs/sitemap`
- Sin frameworks de UI. JavaScript de cliente mínimo e inline (menú móvil y aparición progresiva)

## Requisitos

- Node.js ≥ 22.12

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # desarrollo en http://localhost:4321
npm run build      # build de producción en dist/
npm run preview    # previsualizar el build
npm run check      # diagnóstico de tipos y plantillas
```

> Red corporativa con inspección TLS: si `npm install` falla con `UNABLE_TO_GET_ISSUER_CERT_LOCALLY`,
> ejecutar con `NODE_USE_SYSTEM_CA=1` para usar el almacén de certificados del sistema.
> Si el build tarda en terminar, desactivar la telemetría: `ASTRO_TELEMETRY_DISABLED=1`.

## Estructura

```text
src/
├── components/        Componentes reutilizables (Header, Footer, Button, Icon, MediaFrame…)
│   └── home/          Secciones de la Home
├── content/recursos/  Recursos en Markdown (Content Collections)
├── content.config.ts  Esquema de la colección de recursos
├── data/
│   ├── site.ts        Datos globales, navegación y datos legales (PENDIENTES)
│   ├── content.ts     Ecosistema, método, casos de uso y formación destacada
│   └── credibility.ts Fundador, métricas y testimonios (vacíos hasta tener datos reales)
├── layouts/           BaseLayout (SEO) y LegalLayout
├── lib/               Utilidades (iconos, fechas, consulta de recursos)
├── pages/             Rutas del sitio
└── styles/global.css  Design tokens y utilidades de marca
public/                favicon, apple-touch-icon, imagen Open Graph
```

## Tareas de contenido habituales

### Sustituir una imagen

Todas las imágenes se muestran con `MediaFrame`. Sin `src` muestra un placeholder con la descripción de la foto que falta.

1. Guardar la fotografía en `src/assets/` (p. ej. `src/assets/home/hero.jpg`).
2. Importarla en el componente y pasarla como `src`:

```astro
---
import heroImage from '../../assets/home/hero.jpg';
---
<MediaFrame src={heroImage} alt="Descripción significativa" … />
```

Astro genera versiones optimizadas (WebP, varios tamaños) automáticamente.

### Añadir un recurso

Crear `src/content/recursos/mi-recurso.md` (el nombre del archivo es el slug):

```yaml
---
title: 'Título'
summary: 'Resumen de hasta 220 caracteres.'
category: 'Investigación' # Investigación | Gestión del conocimiento | Visita médica | Productividad | Datos
date: 2026-10-01
readingTime: 5
image: '../../assets/recursos/mi-recurso.jpg' # opcional
imageAlt: 'Descripción' # opcional
featured: false
draft: false
---
```

### Añadir métricas o testimonios

Editar `src/data/credibility.ts`. Los bloques solo aparecen en la Home cuando las listas contienen datos. **Solo datos reales.**

### Logotipo

`src/components/Logo.astro` combina el símbolo (`src/assets/brand/sanitia-symbol.png`) con el nombre en
texto. El símbolo se extrajo del icono facilitado (`sanitia-icon-original.jpg`, 249×231 px); conviene
sustituirlo por el original en SVG o PNG de alta resolución. Favicons e imagen Open Graph en `public/`
se generan a partir del mismo símbolo.

## Despliegue en docker-server

Contenedor nginx con el build estático (`Dockerfile`, `docker-compose.yml`, `docker/`).
Guía completa: [`DESPLIEGUE.md`](DESPLIEGUE.md).

## Despliegue en Netlify (alternativa)

`netlify.toml` define build (`npm run build`), directorio (`dist`) y Node 22. La URL canónica y el sitemap usan la variable
`URL` que Netlify inyecta en el build. Cuando exista dominio definitivo puede fijarse `SITE_URL`.

## Pendiente de información real

Ver comentarios `PENDIENTE` en el código (`grep -r PENDIENTE src`).
