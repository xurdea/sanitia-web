/**
 * Datos globales de SanitIA.
 * Los valores marcados como PENDIENTE deben sustituirse por datos reales
 * antes de publicar en producción. No inventar información legal.
 */

export const site = {
  name: 'SanitIA',
  descriptor: 'Inteligencia Artificial aplicada al sector sanitario',
  defaultTitle: 'SanitIA | Inteligencia Artificial aplicada al sector sanitario',
  defaultDescription:
    'Formación práctica en inteligencia artificial para profesionales, equipos y organizaciones del sector sanitario. Aprende a aplicar la IA a situaciones y procesos de trabajo reales.',
  locale: 'es_ES',
  lang: 'es',
  year: 2026,
  /** PENDIENTE: dirección de correo de contacto definitiva. */
  contactEmail: null as string | null,
  social: {
    /** PENDIENTE: URL del perfil de LinkedIn. */
    linkedin: null as string | null,
    /** PENDIENTE: invitación a Discord cuando proceda. */
    discord: null as string | null,
  },
  /** PENDIENTE: datos legales del titular. No inventar. */
  legal: {
    owner: '[PENDIENTE: nombre o razón social del titular]',
    taxId: '[PENDIENTE: NIF/CIF]',
    address: '[PENDIENTE: domicilio]',
    email: '[PENDIENTE: correo electrónico de contacto]',
    registry: '[PENDIENTE: datos registrales, si aplican]',
  },
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: 'Formación', href: '/formacion' },
  { label: 'Empresas', href: '/empresas' },
  { label: 'Método SanitIA', href: '/metodo-sanitia' },
  { label: 'Recursos', href: '/recursos' },
  { label: 'Sobre SanitIA', href: '/sobre-sanitia' },
  { label: 'Contacto', href: '/contacto' },
];

export const legalNav: NavItem[] = [
  { label: 'Aviso legal', href: '/aviso-legal' },
  { label: 'Privacidad', href: '/privacidad' },
  { label: 'Cookies', href: '/cookies' },
];

export const areas = ['Asistencia', 'Gestión', 'Farmacia', 'Industria', 'Investigación', 'Tecnología'];
