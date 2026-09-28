/**
 * Ruta limpia de la página actual.
 * Con `build.format: 'file'` Astro expone `/empresas.html` durante el build;
 * se normaliza a `/empresas` para canonical y navegación activa.
 */
export function cleanPath(pathname: string): string {
  const path = pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '');
  return path === '' ? '/' : path;
}
