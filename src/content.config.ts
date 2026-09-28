import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Recursos SanitIA: guías, casos prácticos y artículos.
 * Cada archivo .md en src/content/recursos/ genera /recursos/[slug] (slug = nombre del archivo).
 */
const recursos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recursos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(220),
      category: z.enum(['Investigación', 'Gestión del conocimiento', 'Visita médica', 'Productividad', 'Datos']),
      date: z.coerce.date(),
      /** Minutos estimados de lectura. */
      readingTime: z.number().int().positive(),
      /** Imagen opcional en src/assets/recursos/. Sin imagen se muestra un placeholder. */
      image: image().optional(),
      imageAlt: z.string().optional(),
      /** Descripción de la imagen pendiente, usada en el placeholder. */
      imagePlaceholder: z.string().optional(),
      /** Marca el recurso como contenido inicial de demostración, editable. */
      demo: z.boolean().default(false),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    }),
});

export const collections = { recursos };
