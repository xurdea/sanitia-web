import { getCollection } from 'astro:content';

/** Recursos publicados (sin borradores), ordenados del más reciente al más antiguo. */
export async function getPublishedResources() {
  const entries = await getCollection('recursos', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
