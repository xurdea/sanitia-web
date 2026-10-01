import type { IconName } from '../lib/icons';
import { methodSteps } from './content';

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
  eyebrow: 'Formación en IA para profesionales y organizaciones sanitarias',
  text: 'Dos cursos prácticos para médicos y visita médica, y formación a medida para otros equipos sanitarios. Aprende a incorporar la IA con criterio y mantente al día después del curso con seis meses de tutoría en la comunidad SanitIA.',
  primary: { label: 'Ver formación', href: '/formacion' },
  secondary: { label: 'Formación para organizaciones', href: '/empresas' },
  approach: ['Casos de uso reales', 'Verificación de resultados', 'Uso responsable'],
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
    badge: 'Programa disponible',
    description:
      'Formación práctica para incorporar herramientas de IA a la preparación de visitas, búsqueda y análisis de información, presentaciones, documentación y trabajo con datos.',
    facts: ['10 horas', '5 sesiones de 2 horas', 'Online en directo'],
    cta: 'Ver programa',
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
export const method = {
  title: 'Cómo aprenderás a aplicar la IA en tu trabajo',
  /** Misma secuencia y definiciones que la página del método (content.ts). */
  steps: methodSteps.map((step) => ({ name: step.name, text: step.summary })),
  cta: { label: 'Conocer el Método SanitIA', href: '/metodo-sanitia' },
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
