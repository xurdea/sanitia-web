import type { ImageMetadata } from 'astro';

/**
 * Indicadores y testimonios de credibilidad.
 * Vacíos intencionadamente: añadir SOLO datos reales y verificables.
 * Los componentes no muestran nada mientras las listas estén vacías.
 */

export interface Metric {
  /** Valor ya formateado, p. ej. "120". */
  value: string;
  /** Descripción, p. ej. "alumnos formados". */
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/** Ejemplos futuros: alumnos formados, ediciones realizadas, horas de formación, valoración media. */
export const metrics: Metric[] = [];

export const testimonials: Testimonial[] = [];

export const founder = {
  name: 'Jorge Álvarez',
  role: 'Ingeniero informático y consultor especializado en tecnología sanitaria e inteligencia artificial aplicada.',
  /** PENDIENTE: fotografía profesional del fundador (src/assets/). */
  photo: undefined as ImageMetadata | undefined,
};
