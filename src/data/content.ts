import type { IconName } from '../lib/icons';

/* ---------- Ecosistema sanitario ---------- */
export interface Area {
  name: string;
  icon: IconName;
  profiles: string[];
}

export const ecosystem: Area[] = [
  { name: 'Asistencia', icon: 'stethoscope', profiles: ['Medicina', 'Enfermería', 'Farmacia', 'Técnicos sanitarios'] },
  {
    name: 'Gestión',
    icon: 'briefcase',
    profiles: ['Gestión sanitaria', 'Dirección', 'Calidad', 'Recursos Humanos', 'Administración y personal no asistencial'],
  },
  { name: 'Industria', icon: 'pill', profiles: ['Industria farmacéutica', 'Medical Affairs', 'Market Access', 'Visita médica'] },
  { name: 'Investigación', icon: 'microscope', profiles: ['Investigación', 'Docencia'] },
  {
    name: 'Tecnología',
    icon: 'cpu',
    profiles: ['Tecnología sanitaria', 'Sistemas de información', 'Datos e interoperabilidad', 'Innovación'],
  },
];

/* ---------- Método SanitIA ---------- */
export interface MethodStep {
  name: string;
  summary: string;
  detail: string;
  icon: IconName;
}

export const methodSteps: MethodStep[] = [
  {
    name: 'Comprender',
    summary: 'Conocer las capacidades, límites y riesgos de la IA.',
    detail:
      'Partimos de una base común: qué puede hacer la inteligencia artificial, qué no, y cuáles son sus límites y riesgos en el ámbito de la salud.',
    icon: 'compass',
  },
  {
    name: 'Seleccionar',
    summary: 'Elegir la tarea, la herramienta y las fuentes adecuadas.',
    detail:
      'Analizamos las tareas de cada perfil para decidir en cuáles tiene sentido utilizar la IA, con qué herramienta y a partir de qué fuentes de información.',
    icon: 'target',
  },
  {
    name: 'Practicar',
    summary: 'Trabajar con casos y revisar los resultados.',
    detail:
      'Trabajamos con ejercicios basados en tareas profesionales y revisamos los resultados antes de darlos por buenos.',
    icon: 'pen',
  },
  {
    name: 'Integrar',
    summary: 'Aplicar lo aprendido de forma responsable en la actividad profesional.',
    detail:
      'El objetivo final es que la IA forme parte del trabajo habitual con criterio, de forma responsable y sostenible en el tiempo.',
    icon: 'layers',
  },
];

/* ---------- Casos de uso ---------- */
export interface UseCase {
  title: string;
  text: string;
  icon: IconName;
}

export const useCases: UseCase[] = [
  {
    title: 'Investigar mejor',
    text: 'Localizar, contrastar y sintetizar información relevante de forma más eficiente, sin perder el control sobre las fuentes.',
    icon: 'search',
  },
  {
    title: 'Trabajar con documentación',
    text: 'Resumir, comparar y extraer lo esencial de documentos extensos como protocolos, informes, guías o normativa.',
    icon: 'file-text',
  },
  {
    title: 'Analizar información y datos',
    text: 'Ordenar información, identificar tendencias y preparar análisis que faciliten la toma de decisiones.',
    icon: 'chart',
  },
  {
    title: 'Crear contenidos',
    text: 'Preparar presentaciones, materiales formativos y comunicaciones con más agilidad y coherencia.',
    icon: 'presentation',
  },
  {
    title: 'Automatizar tareas',
    text: 'Reducir el tiempo dedicado a tareas repetitivas y reservarlo para el trabajo que requiere criterio profesional.',
    icon: 'workflow',
  },
  {
    title: 'Gestionar conocimiento',
    text: 'Organizar la información de un equipo para que sea fácil de consultar, reutilizar y compartir.',
    icon: 'book',
  },
];

/* ---------- Formación destacada ---------- */
export const featuredCourse = {
  slug: 'ia-aplicada-visita-medica',
  href: '/formacion/ia-aplicada-visita-medica',
  title: 'IA aplicada a la visita médica',
  summary:
    'Programa práctico para incorporar inteligencia artificial a las principales tareas de la actividad del visitador médico.',
  applications: [
    'Preparación de visitas',
    'Investigación',
    'Análisis de información',
    'Presentaciones',
    'Gestión del conocimiento',
    'Productividad',
  ],
  features: [
    { label: 'Online en directo', icon: 'video' },
    { label: '6 meses de tutoría en Discord', icon: 'message' },
    { label: 'Novedades de IA en la comunidad SanitIA', icon: 'users' },
    { label: 'Contenido práctico', icon: 'pen' },
    { label: 'Grabaciones disponibles durante un periodo definido en cada edición', icon: 'play' },
  ] satisfies { label: string; icon: IconName }[],
  /**
   * Herramientas de ejemplo. PENDIENTE: confirmar el listado definitivo por edición.
   * Nunca deben presentarse como la propuesta principal de valor.
   */
  tools: ['ChatGPT', 'Claude', 'Perplexity', 'Gemini Notebook', 'Gamma'],
};

/** Programa para médicos confirmado por el titular: 10 horas, 5 sesiones online en directo. */
export const medicalCourse = {
  href: '/formacion/ia-para-medicos',
  title: 'IA para médicos: información clínica y productividad',
  summary:
    'Formación práctica para localizar y contrastar información clínica fiable y aplicar la IA al trabajo con Excel, documentación y presentaciones.',
  applications: ['Información clínica', 'Verificación de fuentes', 'Excel y datos', 'Presentaciones'],
  duration: '10 horas · 5 sesiones de 2 horas',
  modality: 'Online en directo',
} as const;
