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
  /** Correo público de contacto (contacto, pie y páginas legales). */
  contactEmail: 'info@sanitia.es',
  social: {
    linkedin: 'https://www.linkedin.com/company/sanitia/' as string | null,
    /** PENDIENTE: invitación a Discord cuando proceda. */
    discord: null as string | null,
  },
  /** Datos legales del titular, confirmados por el titular. No inventar información legal. */
  legal: {
    owner: 'Jorge Álvarez Rodríguez',
    ownerType: 'Persona física',
    taxId: '11438705T',
    address: 'Calle Pintor El Greco, s/n, 03110 Mutxamiel (Alicante)',
    email: 'info@sanitia.es',
    domain: 'www.sanitia.es',
    hosting: 'Netlify',
    hostingPrivacyUrl: 'https://www.netlify.com/gdpr-ccpa/',
    emailProvider: 'IONOS',
    emailProviderPrivacyUrl: 'https://www.ionos.es/ayuda/proteccion-de-datos/',
    /** Plazo de conservación de consultas que no dan lugar a contratación. */
    retention: '12 meses desde el último contacto',
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
