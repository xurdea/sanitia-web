/**
 * `SITE_NOINDEX=true` en el build: el sitio entero no se indexa
 * (robots.txt bloquea y cada página lleva meta noindex).
 * Se usa en despliegues de previsualización mientras la web no es definitiva.
 */
export const siteNoindex = process.env.SITE_NOINDEX === 'true';
