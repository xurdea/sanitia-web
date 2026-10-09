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

Orden actual de la Home (`src/pages/index.astro`; textos en `src/data/home.ts`):

1. Hero (§8.1)
2. Aplicaciones (§8.7)
3. Formación: dos cursos y formación a medida (§8.5)
4. Continuidad: seguimiento de seis meses en Discord (§8.5)
5. Perfiles (§8.2)
6. Credibilidad (§8.8)
7. Método SanitIA (§8.6)
8. Organizaciones (§8.9)
9. CTA final (§8.11)

Los apartados §8.3, §8.4 y §8.10 no se muestran hoy como secciones propias; cada uno indica dónde se recoge su mensaje o por qué está oculto. Si se cambia la estructura de la Home, actualizar esta lista y el apartado correspondiente a la vez.

### 8.1 Hero

H1 aprobado por el propietario (octubre de 2026; sustituye al anterior «Inteligencia Artificial aplicada al sector sanitario», que no debe restaurarse como H1):
**Inteligencia artificial aplicada al trabajo real en sanidad**

«trabajo real» va subrayado en turquesa (la línea de verificación).

El descriptor de marca «Inteligencia Artificial aplicada al sector sanitario» (§2) se mantiene como descriptor (`site.descriptor`, título por defecto y textos institucionales); no es el H1 de la Home.

Texto (entradilla):
**Cursos prácticos para médicos, visita médica y equipos sanitarios. Tareas reales, resultados contrastados y tu criterio profesional al mando.**

Apoyo visual o textual:
**Asistencia · Gestión · Farmacia · Industria · Investigación · Tecnología**

CTA principal:
**Ver cursos** (a `/formacion`)

CTA secundario:
**Formación para organizaciones** (a `/empresas`)

Columna visual: tarjeta «Ejemplo de tarea» (ilustrativa, no es un dato real). Mientras no haya fotografía real del Hero, se muestra un panel editorial terminado con los ámbitos del sector y la tarjeta integrada; nunca un rótulo de «fotografía pendiente».

Fuente de los textos: `hero` en `src/data/home.ts`.

Objetivo: explicar SanitIA en menos de cinco segundos.

No usar herramientas como ChatGPT, Claude o Perplexity en el hero.

### 8.2 Ecosistema sanitario — sección «Perfiles»

En la Home se resuelve con la sección **Perfiles** (`profiles` en `home.ts`) y con los ámbitos del panel del Hero (§8.1).

Título actual:
**Una formación pensada para diferentes perfiles del sector sanitario**

Perfiles mostrados: Medicina, Enfermería, Farmacia, Visita médica, Gestión sanitaria y Personal no asistencial, cada uno con una línea sobre sus tareas. Nota final: además de los dos cursos, se diseña formación a medida para estos perfiles.

El mapa completo de áreas (Asistencia, Gestión, Industria, Investigación, Tecnología) vive en `ecosystem` (`src/data/content.ts`) y se usa en otras páginas.

Debe quedar claro que cualquier perfil profesional del sector salud puede encajar en SanitIA.

### 8.3 Diferenciación

**No se muestra como sección propia en la Home actual.** Su mensaje («no enseñamos herramientas, enseñamos a aplicarlas al trabajo») se recoge en la entradilla del Método (§8.6) y en la sección Continuidad (§8.5). Se conserva como referencia de mensaje:

Título de referencia:
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

**No se muestra como sección propia en la Home actual.** Las líneas de actividad se recogen así: formación para profesionales y para organizaciones en la sección Formación (§8.5) y en Organizaciones (§8.9); el conocimiento SanitIA, en `/recursos` (§8.10). Se conserva como referencia de mensaje:

Título de referencia:
**Convertimos la IA en una herramienta de trabajo**

Tres líneas:

1. **Formación para profesionales**
   Programas prácticos adaptados a funciones y perfiles concretos del ámbito sanitario.

2. **Formación para organizaciones**
   Programas diseñados para equipos, departamentos y organizaciones según sus necesidades.

3. **Conocimiento SanitIA**
   Guías, casos prácticos y contenidos sobre aplicaciones reales de IA en salud.

Evitar un diseño de “tres cards genéricas” si puede resolverse de forma editorial y más premium.

### 8.5 Formación — dos cursos y formación a medida

La Home presenta **dos programas** al mismo nivel, más la formación a medida (componente `FeaturedCourse`; textos en `training` de `home.ts` y en `medicalCourse` / `featuredCourse` de `content.ts`).

Etiqueta: **FORMACIÓN**

Título:
**Dos cursos disponibles y formación a medida**

Tarjetas de curso (mismo formato, cada una con `CourseFacts` y CTA **Ver programa**):

1. **IA para médicos: información clínica y productividad** (`/formacion/ia-para-medicos`). Etiqueta «Para médicos». Información clínica, verificación de fuentes, Excel y datos, presentaciones.
2. **IA aplicada a la visita médica** (`/formacion/ia-aplicada-visita-medica`). Etiqueta «Para visita médica». Detalle a continuación.

Datos comunes de los dos cursos (`CourseFacts`, fuente única para Hero, Home y `/formacion`): **10 horas · 5 sesiones de 2 horas · Online en directo · 6 meses de tutoría en Discord**.

Bloque **Formación a medida**: adaptación del Método SanitIA a enfermería, farmacia, gestión y personal no asistencial, con programas de 10 horas en 5 sesiones online en directo. CTA **Cuéntanos qué necesitas** (a `/contacto`).

Tras esta sección va **Continuidad** (`Continuity.astro`): «La IA cambia. Tu forma de trabajar también puede hacerlo.», con los seis meses de tutoría en Discord y CTA **Explorar cursos**.

#### Curso «IA aplicada a la visita médica»

Su ficha mantiene la etiqueta **FORMACIÓN DESTACADA**.

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
- Duración: 10 horas, en 5 sesiones de 2 horas
- Online en directo
- 6 meses de seguimiento y tutoría en el canal de Discord de SanitIA (bloque `FollowUp`)
- Novedades de IA en la comunidad SanitIA
- Contenido práctico
- Grabaciones disponibles durante un periodo definido en cada edición

CTA:
**Ver programa completo**

Duración y modalidad confirmadas por el propietario: 10 horas, 5 sesiones de 2 horas, online en directo. No inventar el reparto de los módulos entre sesiones, fechas ni precio hasta que se confirmen.

Las herramientas concretas pueden mostrarse como herramientas utilizadas, nunca como la propuesta principal de valor.

### 8.6 Método SanitIA

Título de la página del método:
**Comprender. Seleccionar. Practicar. Integrar.**

Fases vigentes, aprobadas por el propietario (sustituyen a la secuencia anterior Descubrir / Aplicar / Practicar / Integrar, que no debe restaurarse):

1. **Comprender**
   Conocer las capacidades, límites y riesgos de la IA.

2. **Seleccionar**
   Elegir la tarea, la herramienta y las fuentes adecuadas.

3. **Practicar**
   Trabajar con casos y revisar los resultados.

4. **Integrar**
   Aplicar lo aprendido de forma responsable en la actividad profesional.

Fuente única: `methodSteps` en `src/data/content.ts` (nombre, `summary` y `detail` de cada fase). Cualquier página que muestre las fases (`/metodo-sanitia`, fichas de curso…) debe leer de ahí; no duplicar ni redefinir las fases en otros archivos. Si cambian las definiciones, actualizar `methodSteps` y este apartado a la vez.

En la Home, la sección del Método no repite las cuatro fases: muestra el recorrido de una tarea (Necesidad real → Aplicación de IA → Contraste y verificación → Criterio profesional → Resultado; `method.flow` en `src/data/home.ts`) y enlaza a `/metodo-sanitia` para las fases completas. «Contraste y verificación» es el único paso destacado (`kind: 'verify'`). Aprobado por el propietario (octubre de 2026).

Mostrar como proceso visual claro. Evitar presentarlo como metodología académica rígida.

### 8.7 Casos de uso — sección «Aplicaciones»

Componente `UseCases`; textos en `applications` de `home.ts`. Va justo después del Hero.

Etiqueta: **APLICACIONES**

Título:
**IA aplicada a tareas concretas de tu trabajo**

Casos actuales:

- Búsqueda y contraste de información
- Análisis y resumen de documentación
- Presentaciones y materiales profesionales
- Datos y Excel
- Organización del conocimiento
- Automatización de tareas profesionales

Explicar beneficios, no herramientas.

### 8.8 Credibilidad

Componente `Credibility`; textos en `credibility` de `home.ts` (fundador y testimonios futuros en `src/data/credibility.ts`).

Etiqueta: **QUIÉN ESTÁ DETRÁS**

Título actual:
**Experiencia sanitaria aplicada a la formación en IA**

Bloque de fundador:

**Jorge Álvarez Rodríguez**, fundador de SanitIA.
Ingeniero informático y consultor especializado en tecnología sanitaria, transformación digital e inteligencia artificial aplicada al sector salud.

Destacados actuales: «20+ años · Tecnología sanitaria», «Sector salud · Experiencia en proyectos reales», «IA aplicada · Formación especializada en sanidad». Sin fotografía, se muestra un monograma con las iniciales.

No convertir la marca en una web personal.

No inventar cifras, clientes, testimonios o métricas.

Dejar el componente preparado para añadir en el futuro:
- alumnos formados
- ediciones realizadas
- horas de formación
- valoraciones
- testimonios

### 8.9 SanitIA para organizaciones

Componente `Organizations`; textos en `organizations` de `home.ts`. La propuesta completa para organizaciones está en `/empresas`.

Etiqueta: **ORGANIZACIONES**

Título actual:
**Formación en IA para organizaciones sanitarias**

Texto:
Programas de 10 horas en 5 sesiones, adaptados a las funciones y necesidades del equipo, con seis meses de tutoría y actualizaciones en la comunidad SanitIA en Discord.

Tipos de organización mostrados: Hospitales, Colegios profesionales, Asociaciones, Industria farmacéutica, Entidades sanitarias y Equipos profesionales.

CTA (único en la Home):
**Formación para mi organización** (a `/empresas`)

### 8.10 Recursos

**Oculta en la Home actual** (`Resources.astro` existe pero no se renderiza mientras los contenidos están en revisión editorial; ver comentario en `src/pages/index.astro`). La sección `/recursos` sigue publicada. Al reactivarla, seguir estas pautas:

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

Componente `CTASection`; textos en `finalCta` de `home.ts`.

Título actual:
**¿Hablamos sobre formación en IA?**

Texto:
Cuéntanos tu perfil o las necesidades de tu organización y estudiaremos qué tipo de formación puede encajar mejor.

CTA (único):
**Contactar con SanitIA** (a `/contacto`)

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

> **DECISIÓN PENDIENTE (octubre de 2026):** la Home publica hoy otro título y otra descripción (`homeSeo` en `src/data/home.ts`): «Cursos de IA para profesionales sanitarios | SanitIA» y «Cursos prácticos de IA para médicos y visita médica, y formación a medida para equipos sanitarios. 10 horas, 5 sesiones y 6 meses de tutoría en Discord.». El propietario debe decidir cuál es el vigente. Hasta entonces, no cambiar ni el código ni este apartado.

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
