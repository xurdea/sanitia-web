import type { IconName } from '../lib/icons';
import { featuredCourse, medicalCourse } from './content';

/**
 * Textos específicos de la Home.
 * Separados de los datos compartidos (content.ts, credibility.ts, site.ts)
 * para poder iterar el mensaje de la Home sin afectar a otras páginas.
 */

export const homeSeo = {
  /** BaseLayout compone "título | SanitIA". */
  title: 'Cursos de IA para profesionales sanitarios',
  description:
    'Cursos prácticos de IA para médicos y visita médica, y formación a medida para equipos sanitarios. 10 horas, 5 sesiones y 6 meses de tutoría en Discord.',
};

/* ---------- 1. Hero ---------- */
export const hero = {
  eyebrow: 'Formación en IA para el sector sanitario',
  title: 'Inteligencia artificial aplicada al trabajo real en sanidad',
  /** Fragmento del título que se subraya (debe aparecer literalmente en `title`). */
  titleEmphasis: 'trabajo real',
  lead: 'Cursos prácticos para médicos, visita médica y equipos sanitarios. Tareas reales, resultados contrastados y tu criterio profesional al mando.',
  primary: { label: 'Ver cursos', href: '/formacion' },
  secondary: { label: 'Formación para organizaciones', href: '/empresas' },
  /** Enlace discreto a los dos cursos, sin repetir sus datos (ya están en la sección Formación). */
  courses: [
    { label: 'IA para médicos', href: medicalCourse.href },
    { label: featuredCourse.title, href: featuredCourse.href },
  ],
  /** Fotografía pendiente: hasta tenerla se muestra un hueco reservado con esta descripción. */
  photoBrief: 'Fotografía real: profesional sanitario revisando un documento en el ordenador',
  photoAlt: 'Profesional sanitario revisando documentación en el ordenador',
  /** Ejemplo ilustrativo de una tarea trabajada con el método (no es un dato ni un resultado real). */
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

/* ---------- 2. Aplicaciones ---------- */
export const applications = {
  title: 'IA aplicada a tareas concretas de tu trabajo',
  intro:
    'La formación parte de actividades profesionales reales y utiliza la IA como herramienta de apoyo, manteniendo siempre la revisión y el criterio profesional.',
  items: [
    { title: 'Búsqueda y contraste de información', icon: 'search' },
    { title: 'Análisis y resumen de documentación', icon: 'file-text' },
    { title: 'Presentaciones y materiales profesionales', icon: 'presentation' },
    { title: 'Datos y Excel', icon: 'chart' },
    { title: 'Organización del conocimiento', icon: 'book' },
    { title: 'Automatización de tareas profesionales', icon: 'workflow' },
  ] satisfies { title: string; icon: IconName }[],
};

/* ---------- 3. Formación ---------- */
export const training = {
  title: 'Dos cursos disponibles y formación a medida',
  featured: {
    description:
      'Formación práctica para incorporar herramientas de IA a la preparación de visitas, búsqueda y análisis de información, presentaciones, documentación y trabajo con datos.',
  },
  custom: {
    title: 'Formación a medida',
    text: 'Adaptamos el Método SanitIA a enfermería, farmacia, gestión y personal no asistencial. Partimos de sus tareas reales y diseñamos un programa de 10 horas en 5 sesiones online en directo.',
    cta: { label: 'Cuéntanos qué necesitas', href: '/contacto' },
  },
};

/* ---------- 4. Perfiles ---------- */
export const profiles = {
  title: 'Una formación pensada para diferentes perfiles del sector sanitario',
  note: 'Además de los cursos para médicos y visita médica, diseñamos formación a medida de 10 horas en 5 sesiones para estos perfiles, siguiendo el Método SanitIA.',
  items: [
    { name: 'Medicina', text: 'Información científica, documentación, sesiones y tareas profesionales.' },
    { name: 'Enfermería', text: 'Protocolos, materiales educativos y organización de información.' },
    { name: 'Farmacia', text: 'Información de medicamentos, documentación y fuentes oficiales.' },
    { name: 'Visita médica', text: 'Preparación de visitas, información autorizada y materiales.' },
    { name: 'Gestión sanitaria', text: 'Informes, documentación, análisis y organización de información.' },
    { name: 'Personal no asistencial', text: 'Comunicaciones, documentación y productividad profesional.' },
  ],
};

/* ---------- 5. Credibilidad / fundador ---------- */
export const credibility = {
  title: 'Experiencia sanitaria aplicada a la formación en IA',
  founderName: 'Jorge Álvarez Rodríguez',
  founderRole: 'Fundador de SanitIA',
  founderInitials: 'JA',
  paragraphs: [
    'Ingeniero Informático y consultor especializado en tecnología sanitaria, transformación digital e Inteligencia Artificial aplicada al sector salud. Cuenta con más de 20 años de experiencia profesional en proyectos de tecnología sanitaria, sistemas de información e imagen médica digital.',
    'En SanitIA traslada esa experiencia al ámbito formativo con un objetivo concreto: ayudar a profesionales y organizaciones sanitarias a incorporar la IA de forma práctica, responsable y aplicable a su trabajo real.',
  ],
  highlights: [
    { value: '20+ años', label: 'Tecnología sanitaria' },
    { value: 'Sector salud', label: 'Experiencia en proyectos reales' },
    { value: 'IA aplicada', label: 'Formación especializada en sanidad' },
  ],
};

/* ---------- 6. Método ---------- */
/** Papel de un paso del recorrido. Sin `kind`, es un paso normal. */
export type FlowKind = 'verify' | 'result';

export interface FlowStep {
  name: string;
  text: string;
  /** 'verify' = paso de contraste (único protagonista); 'result' = cierre neutro. */
  kind?: FlowKind;
}

/**
 * La Home muestra el recorrido de una tarea (la "línea de verificación") y enlaza a las
 * cuatro fases oficiales, que viven en /metodo-sanitia (fuente única: methodSteps en content.ts).
 */
export const method = {
  eyebrow: 'Método SanitIA',
  title: 'Del problema real al resultado verificado',
  intro:
    'No enseñamos herramientas. Partimos de una necesidad de tu trabajo y terminamos en un resultado que puedes revisar, explicar y utilizar.',
  flow: <FlowStep[]>[
    {
      name: 'Necesidad real',
      text: 'Una tarea concreta de tu actividad: preparar una sesión, revisar documentación o analizar datos.',
    },
    { name: 'Aplicación de IA', text: 'Eliges la herramienta y las fuentes adecuadas para esa tarea.' },
    {
      name: 'Contraste y verificación',
      text: 'Comparas el resultado con las fuentes y detectas errores, omisiones o datos inventados.',
      kind: 'verify',
    },
    { name: 'Criterio profesional', text: 'Decides qué se utiliza, qué se corrige y qué se descarta.' },
    { name: 'Resultado', text: 'Un trabajo útil, revisado y aplicable a tu actividad.', kind: 'result' },
  ],
  cta: { label: 'Conocer el Método SanitIA', href: '/metodo-sanitia' },
  phasesLink: { label: 'Conoce las fases completas del Método SanitIA', href: '/metodo-sanitia' },
};

/* ---------- 7. Organizaciones ---------- */
export const organizations = {
  title: 'Formación en IA para organizaciones sanitarias',
  text: 'Diseñamos programas de 10 horas en 5 sesiones, adaptados a las funciones y necesidades del equipo. El aprendizaje sigue con seis meses de tutoría y actualizaciones a través de la comunidad SanitIA en Discord.',
  types: [
    { label: 'Hospitales', icon: 'building' },
    { label: 'Colegios profesionales', icon: 'shield' },
    { label: 'Asociaciones', icon: 'users' },
    { label: 'Industria farmacéutica', icon: 'pill' },
    { label: 'Entidades sanitarias', icon: 'stethoscope' },
    { label: 'Equipos profesionales', icon: 'briefcase' },
  ] satisfies { label: string; icon: IconName }[],
  cta: { label: 'Formación para mi organización', href: '/empresas' },
};

/* ---------- 8. CTA final ---------- */
export const finalCta = {
  title: '¿Hablamos sobre formación en IA?',
  text: 'Cuéntanos tu perfil o las necesidades de tu organización y estudiaremos qué tipo de formación puede encajar mejor.',
  primary: { label: 'Contactar con SanitIA', href: '/contacto' },
};
