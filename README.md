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

## Despliegue público en Netlify

`netlify.toml` define build (`npm run build`), directorio (`dist`) y Node 22. La URL canónica y el sitemap usan
`https://www.sanitia.es` por defecto; `SITE_URL` permite cambiarla explícitamente.

El formulario de `/contacto` utiliza Netlify Forms. Antes de probarlo, activar **Forms > Enable form detection** en el
sitio de Netlify y desplegar esta versión. Después, en **Forms > Submission notifications**, añadir una notificación
por correo para el formulario `contacto` dirigida a `info@sanitia.es`. Hacer un envío de prueba desde la URL de Netlify,
comprobar que aparece en **Forms** y que llega el aviso al buzón; revisar también la carpeta de correo no deseado.
El formulario no procesa envíos en `astro preview` ni en el contenedor Docker, que sirven solo para previsualizarlo.

La oferta formativa anuncia seis meses de seguimiento y tutoría en un canal de Discord. Antes de publicar esa
promesa, preparar el servidor y el canal privado, definir cómo se invita y se retira el acceso al cumplir seis meses,
quién responderá las consultas y con qué frecuencia se compartirán novedades. No publicar una invitación abierta.
Revisar la información sobre Discord en `/privacidad` antes del lanzamiento.

Las consultas sin contratación deben borrarse a los 12 meses del último contacto, tanto del correo como del panel de
Netlify. La casilla de novedades del formulario es opcional: no añadir a envíos comerciales a quienes no la hayan
marcado o no hayan dado autorización expresa por otro medio.

## SEO al publicar

- Configurar `www.sanitia.es` como dominio principal en Netlify y comprobar que la otra variante redirige a él.
- Confirmar que la versión pública no lleva `SITE_NOINDEX=true`, que `robots.txt` permite el rastreo y que las URL
  canónicas y `sitemap-index.xml` usan `https://www.sanitia.es`.
- Verificar el dominio en Google Search Console y enviar `https://www.sanitia.es/sitemap-index.xml`.
- Inspeccionar la portada, `/formacion` y las dos fichas de curso en Search Console tras el despliegue.
- Revisar mensualmente consultas, impresiones, clics y contactos procedentes de búsqueda; ampliar el contenido según
  las necesidades reales de médicos y otros perfiles. No publicar fichas de cursos ni acreditaciones no confirmadas.

## Pendiente de información real

Ver comentarios `PENDIENTE` en el código (`grep -r PENDIENTE src`).
