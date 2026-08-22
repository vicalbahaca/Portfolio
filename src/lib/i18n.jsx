import { createContext, useContext } from 'react'

const LanguageContext = createContext(null)

const spanishCopy = {
  site: {
    role: 'Product Designer',
    location: 'Barcelona, España',
    skipToContent: 'Saltar al contenido',
  },
  nav: {
    work: 'Proyectos',
    about: 'Sobre mí',
    articles: 'Publicaciones',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    primary: 'Navegación principal',
    mobile: 'Navegación móvil',
    linkedinLabel: 'LinkedIn',
  },
  hero: {
    cta: 'Ir a LinkedIn',
    statementLines: [
      'Principal Product Designer especializado en servicios financieros, retail y productos regulados.',
      'Conecto negocio, experiencia y tecnología para llevar problemas complejos hasta producción.',
    ],
    personalEmailAria: 'Correo personal',
    copyEmail: 'Copiar correo electrónico',
    copiedEmail: 'Copiado en portapapeles',
    closeToast: 'Cerrar aviso',
    scroll: 'Navega hacia abajo',
  },
  home: {
    northTitle: 'Proyectos en North studio',
    northCaption:
      'En los proyectos no hay información sensible ni datos privados: únicamente información pública y procesos de trabajo.',
    aboutTitle: 'Sobre mí',
    aboutSubtitle: 'Principal Product Designer',
    aboutBody: [
      'Mi experiencia combina diseño de producto, tecnología y negocio para abordar problemas complejos de servicios digitales. Trabajo con autonomía para ordenar necesidades, construir una dirección clara y acompañar la solución hasta su puesta en producción.',
      'Trabajo con stakeholders para entender el problema, contrastar necesidades y proponer la solución más adecuada para usuario, negocio y tecnología. Mantengo una mirada activa sobre referentes, herramientas y prácticas del sector para aplicarlas al día a día cuando aportan valor real.',
      'Acostumbrado a trabajar con autonomía en contextos regulados, he participado en productos financieros y proyectos de sector público para canales B2B, B2C y B2B2C. Desarrollo producto de principio a fin, desde sistemas de diseño y prototipos hasta accesibilidad, QA y validación.',
    ],
    experienceTitle: 'Trayectoria laboral',
    experienceItems: [
      {
        role: 'Principal Product Designer',
        company: 'North · Tiempo completo (Barcelona)',
        period: 'Oct 2024 — Actualmente',
        summary:
          'Diseñador end-to-end de los principales canales de captación y contratación de financiación y pagos al consumo de una entidad financiera líder en España, en entornos B2B, B2C y B2B2C.',
        highlights: [
          'Trabajo transversal sobre productos de financiación y pagos, incluyendo canales de captación y áreas privadas (web y app).',
          'Diseño y evolución continua de una aplicación de gestión de productos de financiación con más de 600k usuarios únicos activos.',
          'Trabajo en el rediseño end-to-end del área privada web y app para la gestión de productos de financiación: nueva experiencia, Design System y despliegue progresivo a producción junto a tecnología.',
          'Diseñador principal de la experiencia de financiación integrada en el checkout (e-commerce) de un activo de retail de una entidad financiera líder, orientada a mejorar conversión y contratación.',
          'Diseño de accesibilidad en más de cinco productos financieros, preparándolos para el cumplimiento de normativa europea.',
          'Impulso aprendizaje mediante workshops internos sobre nuevas herramientas, IA aplicada, accesibilidad y diseño de producto.',
        ],
      },
      {
        role: 'Product & Engineering · Advisor',
        company: 'Coubber (Startup) · Tiempo parcial (Barcelona)',
        period: 'Ene 2026 — Jun 2026',
        summary:
          'Asesoramiento a tiempo parcial en una startup enfocada en generación de informes deportivos a partir de dispositivos de medición.',
        highlights: [
          'Asesoramiento sobre la experiencia y lógica de pagos en la plataforma vía API de Stripe: planes, permisos, suscripciones, facturación y cancelaciones.',
          'IA aplicada al producto para transformar datos de dispositivos en informes de valor para el usuario.',
        ],
      },
      {
        role: 'Product Designer Lead',
        company: 'Lowerton (Startup) · Tiempo completo (Remoto)',
        period: 'Mar 2024 — Oct 2024',
        summary: 'Lideré la conceptualización y diseño de producto en fase early stage, contribuyendo a la entrada del proyecto en Lanzadera, aceleradora de empresas impulsada por Juan Roig.',
        highlights: [
          'Definición de un Design System escalable para acelerar la construcción y evolución del producto.',
          'Definición de soluciones digitales para contextos complejos, con foco en requisitos, negocio y trazabilidad documental.',
        ],
      },
      {
        role: 'UX/UI Freelance',
        company: 'Freelance · Autónomo',
        period: 'Ago 2023 — Jun 2024',
        summary:
          'Diseño de productos digitales y landings orientadas a conversión para empresas de marketing, portfolios y e-commerce.',
        highlights: ['Colaboración en diferentes proyectos como experto en usabilidad y patrones de usuario.'],
      },
      {
        role: 'Full Stack Developer & UX Designer & QA',
        company: 'Deusto SEIDOR S.A · Tiempo completo (Vitoria)',
        period: 'Mar 2021 — Ago 2023',
        moves: [
          {
            role: 'Full Stack Developer & UX Designer & QA',
            period: 'Jun 2022 — Ago 2023',
            highlights: [
              'Diseño y desarrollo de funcionalidades combinando visión técnica, UX y producto.',
              'Mejora continua mediante investigación, validación de flujos y QA funcional.',
              'Responsable de un equipo de tres desarrolladores en varios proyectos end-to-end.',
            ],
          },
          {
            role: 'Full Stack Developer',
            period: 'Jun 2021 — Jun 2022',
            highlights: [
              'Participación en decisiones técnicas y estructuración de soluciones.',
              'Conexión entre desarrollo y producto, aportando criterio de negocio más allá de la implementación.',
            ],
          },
          {
            role: 'Full Stack Developer - Intern',
            period: 'Mar 2021 — Jun 2021',
            highlights: [
              'Participación en software de digitalización documental con .NET, Python, Angular y C#.',
            ],
          },
        ],
      },
      {
        role: 'Técnico informático - Intern',
        company: 'NSM Educational Center · Tiempo completo (Vitoria)',
        period: 'Mar 2019 — Jun 2019',
        highlights: [
          'Rediseño y desarrollo de un sistema en WordPress para gestionar recursos educativos y mejorar la eficiencia diaria.',
          'Pruebas de la nueva plataforma con profesorado y alumnado. Recogida de feedback e iteraciones de mejora.',
        ],
      },
    ],
    downloadCv: 'Descargar CV',
    articlesTitle: 'Publicaciones',
    articlesCaption: 'Artículos y notas públicas sobre producto, accesibilidad, herramientas y carrera.',
    allArticles: 'Ver todas las publicaciones',
    highlightsLabel: 'Aportaciones en',
    rolesLabel: 'Evolución en',
    contactTitle: 'Contacta conmigo',
    contactCaption:
      'Si tienes un proyecto interesante o solamente quieres hablar de producto y tecnología, puedes escribirme por LinkedIn.',
    contactCta: 'Contactar',
  },
  footer: {
    work: 'Proyectos',
    about: 'Sobre mí',
    articles: 'Artículos',
    contact: 'Contacto',
    email: 'Correo',
    navigation: 'Navegación del pie',
    linkedinLabel: 'LinkedIn',
    contactLinkedin: 'Contactar por LinkedIn',
  },
  articles: {
    back: 'Volver',
    title: 'Publicaciones',
    description:
      'Archivo de artículos y notas públicas sobre producto, UX/UI, accesibilidad y herramientas.',
    archiveDescription: 'Archivo de publicaciones públicas del portfolio.',
    allArticles: 'Ver todas las publicaciones',
    metaDescription:
      'Publicaciones de Victor Saiz sobre producto, UX/UI, accesibilidad y herramientas.',
    opening: 'Abriendo publicación...',
  },
  north: {
    title: 'Proyectos de producto',
    back: 'Volver a proyectos',
    impactLabel: 'Resultado',
    roleLabel: 'Rol',
    clientLabel: 'Contexto',
    industryLabel: 'Sector',
    scopeLabel: 'Alcance',
  },
  work: {
    notFound: 'Proyecto no encontrado',
    metaDescriptionFallback:
      'Caso de estudio de producto, UX/UI, accesibilidad y sistemas diseñado por Victor Saiz.',
    expandImage: 'Ampliar imagen',
    closeImage: 'Cerrar imagen',
  },
  redirects: {
    workTitle: 'Proyectos',
    aboutTitle: 'Sobre mí',
    projectsTitle: 'Proyectos',
    northTitle: 'Proyectos',
    openingWork: 'Abriendo la sección de proyectos...',
    openingAbout: 'Abriendo la sección Sobre mí...',
    openingNorth: 'Abriendo la sección de proyectos...',
  },
  doodlebob: {
    title: 'ME HOY MINOY!',
    description: 'Un pequeño rincón más lúdico dentro del portfolio.',
    reason: 'Por qué existe',
    bodyOne:
      'Las referencias a Bob Esponja forman parte del lenguaje visual de Victor y ayudan a que la marca se sienta menos corporativa y más personal.',
    bodyTwo:
      'También explican la mezcla de humor, color y formas exageradas que aparece en otros puntos del portfolio.',
    back: 'Volver al inicio',
    metaDescription: 'Easter egg del portfolio de Victor Saiz.',
  },
  marquee: {
    label: 'Áreas de trabajo',
  },
  contactLegacy: {
    title: 'Si el producto necesita criterio visual y alguien que entienda a ingeniería, hablemos.',
    linkedin: 'LinkedIn',
    mentorship: 'Mentorías',
    downloadCv: 'Descargar CV',
  },
}

export function localizeProject(entry) {
  return entry
}

export function localizeArticle(entry) {
  return entry
}

export function LanguageProvider({ children }) {
  const value = {
    lang: 'es',
    isReady: true,
    copy: spanishCopy,
    cvHref: '/VictorSaiz_CV_ES.pdf',
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage debe utilizarse dentro de LanguageProvider')
  }

  return context
}
