import { featuredCourse, medicalCourse, methodSteps } from './content';

/**
 * EXPERIMENTO A/B (rama design/apple-experiment). Contenido común de las variantes
 * /experiment/a y /experiment/b: las dos deben mostrar exactamente estos textos.
 * No forma parte de la web publicada.
 */

/* ---------- Hero ---------- */
export const experimentHero = {
  kicker: 'Formación en IA para el sector sanitario',
  title: 'Inteligencia artificial aplicada al trabajo real en sanidad',
  /** Fragmento del título que puede recibir énfasis visual. */
  titleEmphasis: 'trabajo real',
  lead: 'Cursos prácticos para médicos, visita médica y equipos sanitarios. Tareas reales, resultados contrastados y tu criterio profesional al mando.',
  primary: { label: 'Ver cursos', href: '/formacion' },
  secondary: { label: 'Formación para organizaciones', href: '/empresas' },
  /** Enlace discreto a los dos cursos, sin repetir sus datos (ya están en la sección Formación). */
  courses: [
    { label: 'IA para médicos', href: medicalCourse.href },
    { label: featuredCourse.title, href: featuredCourse.href },
  ],
  /**
   * Fotografía pendiente. Hasta tenerla se muestra un hueco reservado claramente identificado.
   * Descripción de la foto que debe ir aquí:
   */
  photoBrief: 'Fotografía real: profesional sanitario revisando un documento en el ordenador',
  photoAlt: 'Profesional sanitario revisando documentación en el ordenador',
  /**
   * Ejemplo ilustrativo de una tarea trabajada con el método (no es un dato ni un resultado real).
   * Se muestra como "Ejemplo" sobre la fotografía.
   */
  example: {
    label: 'Ejemplo de tarea',
    task: 'Resumir una guía clínica para una sesión de servicio',
    checks: [
      { text: 'Fuente original localizada', done: true },
      { text: 'Resumen generado con IA', done: true },
      { text: 'Contrastado con el documento', done: true },
      { text: 'Revisión profesional', done: false },
    ],
  },
};

/* ---------- Método ---------- */
export const experimentMethod = {
  kicker: 'Método SanitIA',
  title: 'Del problema real al resultado verificado',
  intro:
    'No enseñamos herramientas. Partimos de una necesidad de tu trabajo y terminamos en un resultado que puedes revisar, explicar y utilizar.',
  /** Recorrido de una tarea: es la "línea de verificación". */
  flow: [
    {
      name: 'Necesidad real',
      text: 'Una tarea concreta de tu actividad: preparar una sesión, revisar documentación o analizar datos.',
    },
    { name: 'Aplicación de IA', text: 'Eliges la herramienta y las fuentes adecuadas para esa tarea.' },
    {
      name: 'Contraste y verificación',
      text: 'Comparas el resultado con las fuentes y detectas errores, omisiones o datos inventados.',
    },
    { name: 'Criterio profesional', text: 'Decides qué se utiliza, qué se corrige y qué se descarta.' },
    { name: 'Resultado', text: 'Un trabajo útil, revisado y aplicable a tu actividad.' },
  ],
  /** Las cuatro fases oficiales (fuente única: methodSteps en content.ts). */
  phasesLabel: 'Las cuatro fases del Método SanitIA',
  phases: methodSteps.map((step) => ({ name: step.name, text: step.summary })),
  cta: { label: 'Conocer el Método SanitIA', href: '/metodo-sanitia' },
};
