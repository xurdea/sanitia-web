# SanitIA — Guía maestra del proyecto web

## 1. Objetivo del proyecto

Construir la web corporativa de **SanitIA**, una marca profesional especializada en **Inteligencia Artificial aplicada al sector sanitario**.

La web es la cara visible de la empresa. Debe transmitir solvencia, conocimiento del sector salud, rigor tecnológico, utilidad práctica y capacidad para trabajar con profesionales, equipos y organizaciones.

SanitIA **no es una academia genérica de herramientas de IA**. La marca debe representar la aplicación real de la IA al trabajo de cualquier perfil del ecosistema sanitario.

## 2. Posicionamiento de marca

### Descriptor principal
**Inteligencia Artificial aplicada al sector sanitario**

### Propuesta de valor
SanitIA ayuda a profesionales, equipos y organizaciones del ámbito de la salud a comprender, aplicar e integrar la inteligencia artificial en su actividad diaria mediante formación práctica, casos de uso reales y programas adaptados a cada perfil.

### Alcance
La marca debe abarcar todo el ecosistema sanitario, incluyendo entre otros:

- Medicina
- Enfermería
- Farmacia
- Técnicos sanitarios
- Gestión sanitaria
- Administración y personal no asistencial
- Dirección
- Calidad
- Recursos Humanos
- Investigación y docencia
- Industria farmacéutica
- Medical Affairs
- Market Access
- Visita médica
- Tecnología sanitaria
- Sistemas de información
- Datos e interoperabilidad
- Innovación

La especialización de SanitIA es **la salud**, no una profesión concreta.

## 3. Personalidad de marca

La marca debe percibirse como:

- Profesional
- Rigurosa
- Innovadora
- Práctica
- Cercana
- Tecnológica
- Especializada en salud

Evitar una estética de academia online, startup futurista o producto genérico de IA.

## 4. Principios visuales

### Dirección estética
**HealthTech institucional premium + componente humano**.

La tecnología debe ser protagonista del mensaje, pero las personas deben ser protagonistas de las imágenes.

### Paleta inicial
Usar como base, pendiente de ajuste visual:

- Azul corporativo: `#123B6D`
- Azul profundo: `#08284A`
- Turquesa SanitIA: `#27C7C9`
- Cian claro: `#A8EEF0`
- Fondo principal: `#F7FAFC`
- Texto principal: `#17212B`
- Texto secundario: `#64748B`

Mantener buen contraste WCAG. No abusar de degradados.

### Tipografías
- Títulos: **Manrope**
- Texto e interfaz: **Inter**

Cargar las fuentes de forma eficiente. Si se utilizan Google Fonts, minimizar variantes y pesos.

### Iconografía
- Lineal
- Minimalista
- Coherente en toda la web
- Una única familia de iconos
- Sin emojis como parte de la interfaz principal

### Fotografía
Mostrar profesionales reales de diferentes áreas del ecosistema sanitario.

Incluir diversidad de contextos:
- asistencia clínica
- farmacia
- gestión
- industria farmacéutica
- investigación
- tecnología
- reuniones de equipos
- profesionales trabajando con documentación y ordenador

Evitar:
- robots humanoides
- cerebros digitales genéricos
- hologramas médicos imposibles
- manos tocando interfaces futuristas
- estética Matrix
- exceso de neón azul/morado
- clichés de IA generativa

## 5. Arquitectura técnica

### Stack
- Astro
- TypeScript
- Tailwind CSS
- JavaScript mínimo
- GitHub para control de versiones
- Netlify para despliegue

### Filosofía técnica
- Sitio predominantemente estático
- Excelente rendimiento
- SEO técnico correcto
- Accesibilidad
- Responsive real
- Componentes reutilizables
- Mantenimiento sencillo
- Dependencias mínimas

No introducir React u otros frameworks salvo que exista una necesidad funcional real.

No añadir backend, base de datos o CMS en la primera versión.

## 6. Estructura prevista del sitio

```text
/
/formacion
/formacion/ia-aplicada-visita-medica
/empresas
/metodo-sanitia
/recursos
/recursos/[slug]
/sobre-sanitia
/contacto
/aviso-legal
/privacidad
/cookies
```

Preparar la arquitectura para futuras áreas sin implementarlas todavía:

- Consultoría
- Eventos
- Masterclasses
- Comunidad
- Certificaciones

## 7. Navegación principal

Header inicial:

- Formación
- Empresas
- Método SanitIA
- Recursos
- Sobre SanitIA
- Contacto

CTA destacado en header:
**Explorar formación** o **Contactar**, según encaje visual.

El header debe ser limpio, responsive y preferiblemente sticky con comportamiento discreto.

## 8. Home — estructura obligatoria

### 8.1 Hero

H1:
**Inteligencia Artificial aplicada al sector sanitario**

Texto:
**Formación práctica para profesionales, equipos y organizaciones que quieren incorporar la IA a su trabajo real.**

Apoyo visual o textual:
**Asistencia · Gestión · Farmacia · Industria · Investigación · Tecnología**

CTA principal:
**Explorar formación**

CTA secundario:
**Formación para empresas**

Objetivo: explicar SanitIA en menos de cinco segundos.

No usar herramientas como ChatGPT, Claude o Perplexity en el hero.

### 8.2 Ecosistema sanitario

Título:
**La IA puede aportar valor en todo el ecosistema de la salud**

Texto:
SanitIA trabaja con profesionales de diferentes ámbitos y funciones, adaptando la aplicación de la inteligencia artificial a las necesidades reales de cada actividad.

Áreas visuales sugeridas:
- Asistencia
- Gestión
- Industria
- Investigación
- Tecnología

Debe quedar claro que cualquier perfil profesional del sector salud puede encajar en SanitIA.

### 8.3 Diferenciación

Título:
**Aprender IA no consiste en aprender herramientas**

Texto base:
Las herramientas evolucionan constantemente. Lo importante es comprender cómo aplicar la inteligencia artificial de forma útil, eficiente y responsable al trabajo cotidiano.

Representar visualmente:

```text
INTELIGENCIA ARTIFICIAL
+
CONOCIMIENTO DEL SECTOR
+
CASOS DE USO REALES
=
APLICACIÓN PRÁCTICA
```

Cierre:
**Ese es el enfoque SanitIA.**

### 8.4 Qué hacemos

Título:
**Convertimos la IA en una herramienta de trabajo**

Tres líneas:

1. **Formación para profesionales**
   Programas prácticos adaptados a funciones y perfiles concretos del ámbito sanitario.

2. **Formación para organizaciones**
   Programas diseñados para equipos, departamentos y organizaciones según sus necesidades.

3. **Conocimiento SanitIA**
   Guías, casos prácticos y contenidos sobre aplicaciones reales de IA en salud.

Evitar un diseño de “tres cards genéricas” si puede resolverse de forma editorial y más premium.

### 8.5 Formación destacada

Etiqueta:
**FORMACIÓN DESTACADA**

Título:
**IA aplicada a la visita médica**

Texto:
Programa práctico para incorporar inteligencia artificial a las principales tareas de la actividad del visitador médico.

Aplicaciones:
- Preparación de visitas
- Investigación
- Análisis de información
- Presentaciones
- Gestión del conocimiento
- Productividad

Características:
- Online en directo
- Tutorías personalizadas
- Comunidad SanitIA
- Contenido práctico
- Grabaciones disponibles durante un periodo definido en cada edición

CTA:
**Ver programa completo**

Las herramientas concretas pueden mostrarse como herramientas utilizadas, nunca como la propuesta principal de valor.

### 8.6 Método SanitIA

Título:
**Aprender. Aplicar. Integrar.**

Fases iniciales:

1. **Descubrir**
   Comprender qué puede aportar realmente la IA.

2. **Aplicar**
   Identificar casos de uso relacionados con el trabajo cotidiano.

3. **Practicar**
   Trabajar con situaciones, información y problemas reales.

4. **Integrar**
   Incorporar la IA de forma sostenible al flujo de trabajo.

Mostrar como proceso visual claro. Evitar presentarlo como metodología académica rígida.

### 8.7 Casos de uso

Título:
**¿Qué puedes hacer con IA?**

Casos iniciales:

- Investigar mejor
- Trabajar con documentación
- Analizar información y datos
- Crear contenidos
- Automatizar tareas
- Gestionar conocimiento

Explicar beneficios, no herramientas.

### 8.8 Credibilidad

Título:
**Tecnología sanitaria, IA y experiencia profesional**

Texto base:
SanitIA nace de la experiencia profesional en tecnología sanitaria, sistemas de información y transformación digital, combinada con la aplicación práctica de herramientas de inteligencia artificial en entornos profesionales.

Incluir un bloque breve de fundador:

**Jorge Álvarez**
Ingeniero informático y consultor especializado en tecnología sanitaria e inteligencia artificial aplicada.

No convertir la marca en una web personal.

No inventar cifras, clientes, testimonios o métricas.

Dejar el componente preparado para añadir en el futuro:
- alumnos formados
- ediciones realizadas
- horas de formación
- valoraciones
- testimonios

### 8.9 SanitIA para organizaciones

Título:
**Lleva la IA a tu equipo**

Texto:
Diseñamos programas de formación adaptados al perfil de los participantes, sus procesos de trabajo, nivel de conocimiento y objetivos de la organización.

Servicios iniciales:
- Formación para equipos
- Programas personalizados
- Talleres
- Sesiones prácticas

CTA principal:
**Solicitar una propuesta**

CTA secundario:
**Hablar con SanitIA**

### 8.10 Recursos

Título:
**Conocimiento para aplicar IA a la salud**

Mostrar tres recursos destacados.

Ejemplos de temas futuros:
- Perplexity para investigación científica
- NotebookLM para gestión del conocimiento
- IA aplicada a la preparación de una visita médica

Cada recurso deberá soportar:
- imagen
- categoría
- título
- resumen
- fecha
- tiempo estimado de lectura
- slug

Usar Astro Content Collections para esta parte si encaja con la versión estable utilizada.

### 8.11 CTA final

Título:
**La IA ya forma parte del trabajo**

Subtítulo:
**La diferencia está en saber utilizarla.**

Texto:
SanitIA te ayuda a convertir la inteligencia artificial en una herramienta útil para tu actividad profesional.

CTA:
- Explorar formación
- Contactar con SanitIA

## 9. Footer

Incluir:

- Logo SanitIA
- Formación
- Empresas
- Método SanitIA
- Recursos
- Sobre SanitIA
- Contacto
- LinkedIn
- Discord, cuando proceda
- Aviso legal
- Privacidad
- Cookies

Texto:
`© 2026 SanitIA`

No inventar razón social, CIF, dirección o datos legales. Usar placeholders claros hasta recibir los datos definitivos.

## 10. Componentes esperados

Crear componentes reutilizables cuando exista reutilización real:

- `Header`
- `Footer`
- `Container`
- `SectionHeading`
- `Button`
- `Hero`
- `AudienceArea`
- `ServiceBlock`
- `FeaturedCourse`
- `MethodStep`
- `UseCase`
- `ResourceCard`
- `CTASection`

No fragmentar excesivamente la UI en microcomponentes innecesarios.

## 11. Responsive

Diseñar mobile-first.

Breakpoints razonables para:
- móvil
- tablet
- portátil
- escritorio grande

Requisitos:
- sin scroll horizontal
- tipografía fluida cuando aporte valor
- botones cómodos en móvil
- navegación accesible
- layouts que no dependan únicamente de hover
- imágenes bien recortadas con `object-fit`

## 12. Accesibilidad

Objetivo mínimo: buenas prácticas WCAG 2.2 AA.

- HTML semántico
- un único H1 por página
- jerarquía correcta de headings
- contraste suficiente
- foco visible
- navegación por teclado
- `aria-*` solo cuando sea necesario
- `alt` significativo en imágenes informativas
- iconos decorativos ocultos a tecnologías asistivas
- respetar `prefers-reduced-motion`

## 13. Rendimiento

Priorizar rendimiento sobre efectos visuales.

- Imágenes optimizadas
- Formatos modernos cuando sea posible
- Lazy loading fuera del primer viewport
- Evitar bundles JS innecesarios
- Evitar librerías pesadas para animaciones simples
- Evitar vídeos automáticos pesados en el hero
- Minimizar CLS
- Optimizar LCP

## 14. SEO

Implementar desde la primera versión:

- títulos únicos
- meta descriptions
- canonical
- Open Graph
- Twitter/X cards si procede
- sitemap
- robots.txt
- favicon
- schema.org cuando exista información real suficiente

Base de título de Home:
**SanitIA | Inteligencia Artificial aplicada al sector sanitario**

Meta description inicial:
**Formación práctica en inteligencia artificial para profesionales, equipos y organizaciones del sector sanitario. Aprende a aplicar la IA a situaciones y procesos de trabajo reales.**

No hacer keyword stuffing.

## 15. Contenido

Reglas de copy:

- Español de España
- Profesional y directo
- Claro sin simplificar en exceso
- Evitar hype
- Evitar “revolucionario”, “disruptivo”, “líder” y similares salvo evidencia
- Evitar afirmaciones no demostrables
- Hablar de utilidad, aplicación y resultados
- Priorizar “sector sanitario”, “sector salud” y “ámbito de la salud” sobre “profesionales sanitarios” cuando queramos abarcar perfiles no asistenciales

## 16. Herramientas de IA

ChatGPT, Claude, Perplexity, Gamma, NotebookLM u otras herramientas pueden aparecer como ejemplos o herramientas utilizadas en cursos.

Nunca deben definir la identidad de SanitIA.

Principio:
**La marca debe sobrevivir al cambio de herramientas.**

## 17. Animaciones

Usar animaciones únicamente para mejorar la percepción de calidad y comprensión.

Permitido:
- fades suaves
- desplazamientos mínimos
- microinteracciones de botones
- transiciones de navegación
- aparición progresiva moderada

Evitar:
- parallax agresivo
- animaciones continuas
- partículas decorativas pesadas
- fondos de circuitos en movimiento
- textos que aparecen constantemente

## 18. Seguridad y privacidad

En la primera versión:
- no recopilar datos innecesarios
- no añadir trackers no solicitados
- no implementar formularios sin definir previamente su destino y tratamiento
- no incorporar cookies de marketing por defecto

Si se añade analítica o formularios, preparar la web para su correcta información y consentimiento cuando legalmente corresponda.

## 19. Netlify

El proyecto debe desplegar correctamente en Netlify.

Preparar:
- comando de build estándar de Astro
- directorio de salida correcto
- `netlify.toml` solo si es necesario
- redirecciones únicamente cuando aporten valor

La web se desarrollará inicialmente en una URL de prueba de Netlify. No modificar DNS ni el dominio de producción durante la fase inicial.

## 20. Forma de trabajar

Antes de realizar cambios grandes:
1. revisar la estructura existente
2. explicar brevemente el cambio propuesto
3. implementar de forma incremental
4. ejecutar build y validaciones
5. corregir errores antes de dar por terminada una tarea

No reescribir zonas no relacionadas con la tarea sin necesidad.

No eliminar contenido, assets o configuración existente sin justificarlo.

No introducir dependencias por comodidad si el mismo resultado puede conseguirse con Astro, CSS y JavaScript nativo.

## 21. Primera versión

La primera entrega debe conseguir:

- Home profesional y completa
- diseño responsive
- identidad visual consistente
- navegación funcional
- páginas secundarias estructuradas aunque algunas tengan contenido mínimo inicial
- formación destacada real
- sección de empresas
- base de recursos
- SEO técnico básico
- despliegue limpio en Netlify

No intentar implementar todas las ideas futuras en la primera iteración.

## 22. Principio final

Cada decisión debe responder a esta pregunta:

**¿Ayuda a que SanitIA parezca una empresa profesional y especializada en IA aplicada al sector sanitario?**

Si la respuesta es no, simplificar o descartar.
