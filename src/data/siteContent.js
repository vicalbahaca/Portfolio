import { workEntries as originalWorkEntries } from './content'

export const siteConfig = {
  name: 'Victor Saiz',
  role: 'Product Designer',
  email: 'victor.saiz@thenorthstudio.com',
  phone: '+34 633 371 552',
  location: 'Barcelona, España',
  avatar: '/victor.jpg',
  doodlebobArtwork: 'https://framerusercontent.com/images/gU23Vjgm2jxHRENcEgQkkiYqJaM.png',
  social: {
    linkedin: 'https://www.linkedin.com/in/victorsaizalfageme/',
    behance: 'https://www.behance.net/victorsaiz',
  },
  extras: {
    mentorship: 'https://calendly.com/victorsaizalfageme/mentoria-privada',
    coffee: 'https://buymeacoffee.com/victorsaiz',
    cv: '/VictorSaiz_CV_ES.pdf',
    cvEs: '/VictorSaiz_CV_ES.pdf',
  },
}

export const articles = [
  {
    slug: 'en-north-estamos-impulsando-un-cambio-radical',
    title: 'En North estamos impulsando un cambio radical',
    excerpt:
      'Una mirada breve a la evolución del producto, con foco en dirección, ejecución y aprendizaje continuo.',
    description:
      'Post sobre evolución de producto, cambio de enfoque y trabajo transversal entre diseño, negocio y entrega.',
    externalUrl:
      'https://www.linkedin.com/posts/victorsaizalfageme_en-north-estamos-impulsando-un-cambio-radical-activity-7440803920211267584-9E7Z',
    source: 'linkedin',
    topic: 'Producto',
  },
  {
    slug: 'trabajar-fuera-de-casa-yo-tengo-una-rutina',
    title: 'Trabajar fuera de casa: la rutina que me funciona',
    excerpt:
      'Una nota corta sobre hábitos, foco y energía cuando trabajas fuera de casa y quieres mantener criterio y continuidad.',
    description:
      'Reflexión sobre rutina personal, concentración y entorno de trabajo para sostener un ritmo creativo y analítico.',
    externalUrl:
      'https://www.linkedin.com/posts/victorsaizalfageme_trabajar-fuera-de-casa-yo-tengo-una-rutina-activity-7443648194065874944-SXmO',
    source: 'linkedin',
    topic: 'Rutina',
  },
  {
    slug: 'sabado-que-suma-dos-cafes-dos-portatiles',
    title: 'Sábado que suma',
    excerpt:
      'Una publicación corta sobre energía compartida, foco y la importancia de rodearte de personas con ambición tranquila y consistente.',
    description:
      'Post personal sobre ritmo de trabajo, proyectos en paralelo y el valor de construir al lado de gente con buena energía.',
    externalUrl:
      'https://www.linkedin.com/posts/victorsaizalfageme_s%C3%A1bado-que-suma-dos-caf%C3%A9s-dos-port%C3%A1tiles-activity-7433572626150612992-e8t0',
    source: 'linkedin',
    topic: 'Carrera',
  },
  {
    slug: 'opinion-rapida-sobre-como-va-a-evolucionar-un-equipo-de-producto',
    title: 'Cómo creo que va a evolucionar un equipo de producto',
    excerpt:
      'Una opinión breve sobre equipos más pequeños, perfiles más transversales y una práctica de producto cada vez más apoyada en IA.',
    description:
      'Post sobre evolución de equipos de producto y cambios en la relación entre diseño, estrategia y ejecución.',
    externalUrl:
      'https://www.linkedin.com/posts/victorsaizalfageme_opini%C3%B3n-r%C3%A1pida-sobre-c%C3%B3mo-creo-que-va-a-evolucionar-activity-7424580998237138946-avn3',
    source: 'linkedin',
    topic: 'Producto',
  },
  {
    slug: 'accesibilidad-wcag-aria',
    title: 'Accesibilidad, WCAG y ARIA',
    excerpt:
      'Accesibilidad web, criterios WCAG y uso de ARIA como parte estructural del trabajo de producto y UI.',
    description:
      'Nota sobre accesibilidad digital, estándares WCAG y buenas prácticas de implementación en interfaces y sistemas.',
    externalUrl:
      'https://www.linkedin.com/posts/victorsaizalfageme_accesibilidad-wcag-aria-activity-7403705040600969217-rOD0',
    source: 'linkedin',
    topic: 'Accesibilidad',
  },
  {
    slug: 'os-presento-un-nuevo-agente-de-chatgpt',
    title: 'Os presento un nuevo agente de ChatGPT',
    excerpt:
      'Un agente orientado a acelerar tareas de diseño y producto, con foco en utilidad real y experimentación.',
    description:
      'Presentación de un agente de ChatGPT aplicado a flujos de diseño, documentación y apoyo a producto.',
    externalUrl:
      'https://www.linkedin.com/posts/victorsaizalfageme_os-presento-un-nuevo-agente-de-chatgpt-de-activity-7394662385124290560-09FT',
    source: 'linkedin',
    topic: 'IA',
  },
]

export const featuredArticles = articles

export const recentProjects = [
  {
    slug: 'aaaquest',
    title: 'AAAQuest',
    role: 'Diseño de producto y MVP',
    subtitle: 'IA para accesibilidad y documentación de producto',
    summary:
      'Una herramienta enfocada en detectar problemas de accesibilidad, generar documentación lista para desarrollo y acelerar el handoff desde una captura o un diseño.',
    description:
      'AAAQuest combina análisis visual, criterios WCAG y generación asistida por IA para que equipos de diseño puedan documentar accesibilidad en segundos, aprender mejores prácticas y compartir entregables más claros.',
    problemStatement:
      'La accesibilidad suele detectarse tarde y documentarse de forma dispersa, cuando corregirla ya cuesta más.',
    accent: '#03875A',
    image: '/thumbs/recent/aaaquest.jpg',
    href: '/work/aaaquest/',
    websiteUrl: 'https://aaaquest.com',
  },
  {
    slug: 'coubber',
    title: 'Coubber',
    role: 'Diseño de producto',
    subtitle: 'Plataforma sportstech para análisis y reporting',
    summary:
      'Una plataforma que automatiza el análisis de datos deportivos y convierte procesos de valoración muy manuales en informes claros y accionables en segundos.',
    description:
      'Coubber Data Studio integra múltiples dispositivos, centraliza métricas y usa IA para ayudar a preparadores físicos, fisioterapeutas y clubes a decidir con más rapidez y menos fricción operativa.',
    problemStatement:
      'Los datos de rendimiento crecen más rápido que la capacidad de convertirlos en decisiones útiles.',
    accent: '#1052FE',
    image: '/thumbs/recent/coubber.jpg',
    href: '/work/coubber/',
    websiteUrl: 'https://coubber.com',
  },
  {
    slug: 'lowerton',
    title: 'Lowerton',
    role: 'Diseño UX/UI y producto',
    subtitle: 'Plataforma de innovación asistida por IA',
    summary:
      'Una plataforma para ordenar procesos de innovación, conectar con partners y convertir objetivos estratégicos en flujos accionables.',
    description:
      'Lowerton centraliza la definición de proyectos, la relación con proveedores y el seguimiento de KPIs dentro de una experiencia pensada para equipos de innovación.',
    problemStatement:
      'La innovación se dispersa entre necesidades, colaboradores y proyectos sin una visión operativa común.',
    accent: '#573FE6',
    image: '/thumbs/recent/lowerton.jpg',
    href: '/work/lowerton/',
  },
  {
    slug: 'closy',
    title: 'Closy',
    role: 'Diseño UX/UI',
    subtitle: 'App de bienestar relacional',
    summary:
      'Una app enfocada en reconectar con otras personas y transformar pequeñas acciones cotidianas en relaciones más sanas y significativas.',
    description:
      'Closy es un proyecto end-to-end que une branding, UX/UI y tono de producto para hablar de vínculos humanos desde un lenguaje más cercano.',
    problemStatement:
      'Conectar con más gente no resuelve la dificultad de cuidar las relaciones que ya importan.',
    accent: '#40732E',
    image: '/thumbs/recent/closy.jpg',
    href: '/work/closy/',
  },
  {
    slug: 'mycoach',
    title: 'MyCoach',
    role: 'Diseño de producto y MVP',
    subtitle: 'Plataforma para rutinas y mesociclos personalizados',
    summary:
      'Una plataforma para generar rutinas personalizadas de musculación, Hyrox y CrossFit a partir de análisis físico, contexto real y un proceso guiado orientado a progresión.',
    description:
      'MyCoach combina análisis previo, formulario dinámico y exportación a Excel para construir mesociclos editables que evolucionan según el feedback, la fatiga y el material disponible.',
    problemStatement:
      'Una rutina genérica no responde a la fatiga, el contexto ni la progresión real de cada atleta.',
    accent: '#0944A9',
    image: '/thumbs/recent/mycoach.jpg',
    href: '/work/mycoach/',
    websiteUrl: 'https://mycoach-27z4.onrender.com/',
  },
  {
    slug: 'vworld',
    title: 'VWorld',
    role: 'Diseño UX/UI y producto',
    subtitle: 'Red social con retos diarios',
    summary:
      'Un concepto social que recupera espontaneidad, juego y conexión real a través de retos diarios compartidos con todo el mundo.',
    description:
      'VWorld explora una alternativa a las redes hiperproducidas: más autenticidad, más juego y menos fricción para participar.',
    problemStatement:
      'Las redes sociales premian contenido producido, pero dejan poco espacio para la espontaneidad compartida.',
    accent: '#C3A51B',
    image: '/thumbs/recent/vworld.jpg',
    href: '/work/vworld/',
  },
]

const originalProjectMedia = {
  aaaquest: [
    {
      src: '/recent-covers/source/aaaquest.png',
      alt: 'Landing de AAAQuest para documentar accesibilidad desde una captura',
      hideCaption: true,
      ratio: '1906 / 990',
    },
  ],
  coubber: [
    {
      src: '/recent-covers/source/coubber.png',
      alt: 'Interfaz de Coubber Data Studio aplicada al análisis deportivo',
      hideCaption: true,
      ratio: '16 / 9',
    },
  ],
  lowerton: [],
  closy: [],
  mycoach: [],
  vworld: [],
}

export const homeHighlights = [
  'Product Design',
  'Service Design',
  'Accessibility',
  'DesignOps',
  'Design + Code',
  'Applied AI',
]

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug)
}

export function getWorkProjectBySlug(slug) {
  const project = recentProjects.find((entry) => entry.slug === slug)

  if (!project) return null

  const originalProject = originalWorkEntries.find((entry) => entry.slug === slug) || {}

  return {
    ...originalProject,
    ...project,
    headline: originalProject.headline || project.subtitle,
    facts: originalProject.facts || [],
    highlights: originalProject.highlights || [],
    visualDeck: ['lowerton', 'mycoach'].includes(slug) ? [] : [...(originalProjectMedia[slug] || []), ...(originalProject.visualDeck || [])],
    detailSections: originalProject.detailSections || [],
  }
}
