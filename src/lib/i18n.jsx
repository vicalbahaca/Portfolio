import { createContext, useContext, useEffect, useState } from 'react'

const LANGUAGE_STORAGE_KEY = 'victor-saiz-portfolio-language'

const LanguageContext = createContext(null)

const projectTranslations = {
  aaaquest: {
    en: {
      subtitle: 'AI for accessibility and product documentation',
      summary:
        'A tool designed to detect accessibility issues, generate development-ready documentation, and speed up handoff from a screenshot or a design.',
      description:
        'AAAQuest combines visual analysis, WCAG criteria, and AI-assisted generation so design teams can document accessibility in seconds, learn best practices, and share clearer deliverables.',
      headline:
        'A product that turns accessibility review and documentation into a faster, clearer workflow for design teams.',
    },
  },
  coubber: {
    en: {
      subtitle: 'Sports tech platform for analysis and reporting',
      summary:
        'A platform that automates sports performance analysis and turns highly manual assessment workflows into clear, actionable reports in seconds.',
      description:
        'Coubber Data Studio connects multiple devices, centralises metrics, and uses AI to help coaches, physiotherapists, and clubs make decisions faster with less operational friction.',
      headline:
        'A B2B product focused on making performance data easier to read, compare, and act on across technical teams.',
    },
  },
  lowerton: {
    en: {
      subtitle: 'AI-assisted innovation management platform',
      summary:
        'A platform to structure innovation processes, connect with partners, and turn strategic goals into actionable workflows.',
      description:
        'Lowerton brings project definition, supplier relationships, and KPI tracking into one experience designed for innovation teams.',
      headline:
        'A platform that gives innovation teams one place to structure initiatives, coordinate partners, and track progress with clarity.',
    },
  },
  closy: {
    en: {
      subtitle: 'Relationship wellbeing app',
      summary:
        'An app focused on reconnecting people and turning small everyday actions into healthier, more meaningful relationships.',
      description:
        'Closy is an end-to-end product that combines branding, UX/UI, and product tone to talk about human connection through a more approachable experience.',
      headline:
        'A concept that combines product, brand, and interface decisions to make emotional wellbeing feel close, calm, and actionable.',
    },
  },
  mycoach: {
    en: {
      subtitle: 'Platform for personalised routines and mesocycles',
      summary:
        'A platform for creating personalised training plans for hypertrophy, Hyrox, and CrossFit through physical analysis, real context, and a guided progression flow.',
      description:
        'MyCoach combines previous analysis, a dynamic questionnaire, and Excel export so coaches can build editable mesocycles that evolve with feedback, fatigue, and available equipment.',
      headline:
        'A training product built around context-aware planning instead of generic templates, with room for iteration and performance tracking.',
    },
  },
  vworld: {
    en: {
      subtitle: 'Social network built around daily challenges',
      summary:
        'A social concept that brings back spontaneity, play, and real connection through daily challenges shared with everyone.',
      description:
        'VWorld explores an alternative to over-produced social platforms: more authenticity, more play, and less friction to participate.',
      headline:
        'A social product concept designed to reduce performance pressure and bring back everyday participation.',
    },
  },
  'meeting-room-booking-app': {
    en: {
      subtitle: 'Prototype',
      summary:
        'A clearer workflow for booking meeting rooms in large offices without wasting time between availability, proximity, and reservation management.',
    },
  },
  'inventory-screen-pixel-art-game': {
    en: {
      subtitle: 'Feature concept design',
      summary:
        'An inventory experience for a mobile pixel-art game with crafting, rarity, and trading, designed to stay readable even with dense information.',
    },
  },
  'joining-made-simple-private-group': {
    en: {
      subtitle: 'Webpage concept design',
      summary:
        'A landing concept published on Behance that simplifies the onboarding into private groups with a more direct and friendly message.',
    },
  },
  'local-flower-shop': {
    en: {
      subtitle: 'Webpage concept design',
      summary:
        'An editorial landing page for a local flower shop with a warmer, more expressive brand-led direction.',
    },
  },
}

const translations = {
  es: {
    langCode: 'ES',
    langLabel: 'Español',
    site: {
      role: 'Senior Product Designer',
      location: 'Barcelona, España',
      skipToContent: 'Saltar al contenido',
    },
    nav: {
      work: 'Proyectos',
      about: 'Sobre mí',
      articles: 'Artículos',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      openEmail: 'Abrir email',
      primary: 'Navegación principal',
      mobile: 'Navegación móvil',
      language: 'Idioma',
      linkedinLabel: 'LinkedIn',
      behanceLabel: 'Behance',
    },
    hero: {
      subtitle: 'Diseñador de Producto Senior',
      cta: 'Ir a LinkedIn',
      scroll: 'Ver proyectos',
    },
    home: {
      northLabel: 'North',
      northTitle: 'Proyectos en North',
      northCaption: 'Trabajo reciente en producto digital con foco en negocio, métricas, accesibilidad y calidad de interfaz.',
      northCta: 'Ver North',
      featuredLabel: 'Casos principales',
      featuredTitle: 'Proyectos recientes',
      secondaryLabel: 'Archivo secundario',
      secondaryTitle: 'Otros proyectos',
      secondaryCaption: 'Conceptos y piezas más rápidas que completan el archivo de trabajo.',
      aboutLabel: 'Sobre mí',
      aboutTitle: 'Diseñador de Producto Senior',
      aboutSummaryPrefix: 'Product Designer con mindset de',
      aboutSummaryAccent: 'Product Maker',
      aboutSummarySuffix: '.',
      aboutBody: [
        'Trabajo entre diseño, producto y ejecución. Mi punto fuerte está en bajar problemas complejos a decisiones claras de interfaz, flujo y sistema, con una mirada muy cercana a negocio, métricas y viabilidad.',
        'He trabajado en productos como Lowerton, AAAQuest, Coubber, Closy o MyCoach, moviéndome entre concepto, MVP, sistema visual, narrativa de producto y decisiones de interfaz pensadas para salir bien a mercado.',
        'Ahora estoy mucho más enfocado en inteligencia artificial, actuando como AI Product Designer y también como Product Maker en productos propios y colaboraciones donde la velocidad, la documentación y la claridad del flujo importan tanto como la UI.',
      ],
      experienceLabel: 'Experiencia',
      experienceTitle: 'Trayectoria',
      experienceCaption:
        'He combinado diseño de producto, lógica de negocio y ejecución técnica en consultoría, startups, servicios digitales y proyectos de producto con mucho peso de interfaz.',
      experienceItems: [
        {
          role: 'AI Product Designer · Product Maker',
          company: 'Coubber',
          period: 'Actualidad',
          summary:
            'Trabajo en una plataforma sportstech orientada a análisis, reporting y lectura de rendimiento. Mi foco está en producto, claridad del flujo, narrativa de datos y una UI capaz de traducir información compleja en decisiones útiles.',
        },
        {
          role: 'Product Design Lead',
          company: 'North',
          period: 'Oct 2024 — Actualidad',
          summary:
            'Lidero diseño en productos fintech y retail, definiendo estructura, accesibilidad, criterios de interfaz y decisiones que conectan negocio, operativa, regulación y capacidad real de entrega.',
        },
        {
          role: 'Freelancer',
          company: 'Independent',
          period: 'Ago 2023 — Actualidad',
          summary:
            'He trabajado en webs, conceptos de producto, identidad digital y MVPs con foco en velocidad, claridad y salida a mercado. Esta etapa también ha reforzado mi perfil como Product Maker en proyectos propios.',
        },
        {
          role: 'Product Designer',
          company: 'Lowerton',
          period: 'Mar 2024 — Oct 2024',
          summary:
            'Diseñé un producto desde cero, articulando marca, sistema visual, arquitectura y primeros flujos para construir un MVP claro y presentable a mercado desde etapas tempranas.',
        },
        {
          role: 'Full Stack Developer · Full Stack + UX',
          company: 'Deusto SEIDOR',
          period: 'Mar 2021 — Ago 2023',
          summary:
            'Los dos primeros años trabajé específicamente como full stack. En el último año la posición evolucionó hacia un rol híbrido entre full stack y UX, acercando más el trabajo de interfaz, flujo y decisión de producto al desarrollo.',
        },
        {
          role: 'Web & IT Support',
          company: 'Mercedarias',
          period: 'Mar 2019 — Jun 2019',
          summary:
            'Participé en soporte técnico y evolución web en un entorno educativo, colaborando en estructura de contenidos, mantenimiento y mejoras prácticas para el uso diario de la plataforma.',
        },
      ],
      workflowLabel: 'Flujo de trabajo',
      workflowTitle: 'El mundo está cambiando y mi forma de trabajar también',
      workflowCaption:
        'Hay que saber priorizar, diseñar y validar para cualquier tipo de proyecto. Este workflow depende del contexto, los tiempos y el presupuesto, pero suele moverse entre estas etapas.',
      workflowSteps: [
        'Priorización y roadmap con negocio.',
        'Lectura de analítica actual, si existe, junto con research y benchmark.',
        'Revisión de arquitectura, posibles flujos de usuario y casuísticas.',
        'Validación de esta arquitectura con negocio y con tech.',
        'Primeros diseños validados con usuarios reales o perfiles simulados con IA para testear casos y usabilidad.',
        'Validación e iteración técnica y de negocio.',
        'Diseño de todo el flujo o de la pantalla trabajada.',
        'Validación del flujo o de la pantalla antes de cerrar la solución.',
        'Documentación automatizada para preparar el handoff.',
        'Handoff con contexto suficiente para desarrollo.',
        'Revisión de la analítica y comparación con la analítica anterior.',
        'Si aplica, planteamiento de A/B test o experimento para seguir iterando.',
      ],
      downloadCvEs: 'Descargar CV ES',
      downloadCvEn: 'Descargar CV EN',
      articlesLabel: 'Archivo editorial',
      articlesTitle: 'Publicaciones',
      articlesCaption: 'Artículos y notas publicados en la versión actual del portfolio.',
      allArticles: 'Ver todas las publicaciones',
      contactTitle: 'Contacto',
      contactCaption: 'Si quieres hablar de producto, diseño o una colaboración puntual, escríbeme.',
      contactCta: 'Contáctame',
    },
    footer: {
      work: 'Proyectos',
      about: 'Sobre mí',
      articles: 'Artículos',
      contact: 'Contacto',
      email: 'Correo',
      navigation: 'Navegación del pie',
      linkedinLabel: 'LinkedIn',
    },
    articles: {
      kicker: 'Archivo',
      title: 'Publicaciones',
      description: 'Archivo completo de artículos, notas y publicaciones sobre producto, UX/UI, accesibilidad y herramientas.',
      sectionKicker: 'Publicaciones',
      archiveDescription: 'Archivo completo de artículos y notas publicados en el portfolio.',
      allArticles: 'Ver todas las publicaciones',
      metaDescription: 'Archivo curado de publicaciones públicas de LinkedIn sobre producto, UX/UI y accesibilidad.',
      opening: 'Abriendo publicación...',
    },
    work: {
      notFound: 'Proyecto no encontrado',
      back: '← Volver a proyectos',
      visitWebsite: 'Visitar web',
      metaDescriptionFallback: 'Caso de estudio de producto, UX/UI y sistemas diseñado por Victor Saiz.',
    },
    redirects: {
      workTitle: 'Proyectos',
      aboutTitle: 'Sobre mí',
      projectsTitle: 'Proyectos',
      openingWork: 'Abriendo la sección de proyectos...',
      openingAbout: 'Abriendo la sección Sobre mí...',
    },
    access: {
      title: 'Acceso privado',
      description: 'Introduce la contraseña para acceder al portfolio.',
      label: 'Contraseña',
      placeholder: 'Escribe la contraseña',
      submit: 'Entrar',
      error: 'La contraseña no es correcta.',
    },
  },
  en: {
    langCode: 'EN',
    langLabel: 'English',
    site: {
      role: 'Senior Product Designer',
      location: 'Barcelona, Spain',
      skipToContent: 'Skip to content',
    },
    nav: {
      work: 'Work',
      about: 'About',
      articles: 'Articles',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      openEmail: 'Open email',
      primary: 'Primary navigation',
      mobile: 'Mobile navigation',
      language: 'Language',
      linkedinLabel: 'LinkedIn',
      behanceLabel: 'Behance',
    },
    hero: {
      subtitle: 'Senior Product Designer',
      cta: 'Go to LinkedIn',
      scroll: 'Scroll Down',
    },
    home: {
      northLabel: 'North',
      northTitle: 'Projects at North',
      northCaption: 'Recent digital product work focused on business logic, metrics, accessibility, and interface quality.',
      northCta: 'Visit North',
      featuredLabel: 'Selected cases',
      featuredTitle: 'Recent projects',
      secondaryLabel: 'Secondary archive',
      secondaryTitle: 'Other projects',
      secondaryCaption: 'Faster concepts and smaller pieces that complete the body of work.',
      aboutLabel: 'About',
      aboutTitle: 'Senior Product Designer',
      aboutSummaryPrefix: 'Product Designer with a',
      aboutSummaryAccent: 'Product Maker',
      aboutSummarySuffix: ' mindset.',
      aboutBody: [
        'I work across design, product, and execution. My strength is turning complex problems into clear interface, workflow, and system decisions, always with business impact, metrics, and feasibility in mind.',
        'I have worked on products such as Lowerton, AAAQuest, Coubber, Closy, and MyCoach, moving between concept work, MVP definition, visual systems, product narrative, and UI decisions designed to ship well.',
        'Right now my focus is much stronger on artificial intelligence, acting as an AI Product Designer and also as a Product Maker across personal products and collaborations where speed, documentation, and flow clarity matter as much as interface quality.',
      ],
      experienceLabel: 'Experience',
      experienceTitle: 'Trajectory',
      experienceCaption:
        'I have combined product design, business logic, and technical execution across consulting, startups, digital services, and product work with a strong UI focus.',
      experienceItems: [
        {
          role: 'AI Product Designer · Product Maker',
          company: 'Coubber',
          period: 'Present',
          summary:
            'I work on a sportstech platform focused on analysis, reporting, and performance reading. My focus is product, flow clarity, data storytelling, and a UI able to translate complex information into useful decisions.',
        },
        {
          role: 'Product Design Lead',
          company: 'North',
          period: 'Oct 2024 — Present',
          summary:
            'I lead design across fintech and retail products, defining structure, accessibility, interface criteria, and product decisions that connect business, operations, regulation, and delivery reality.',
        },
        {
          role: 'Freelancer',
          company: 'Independent',
          period: 'Aug 2023 — Present',
          summary:
            'I have worked on websites, product concepts, digital identity, and MVPs focused on speed, clarity, and launch readiness. This stage also strengthened my profile as a Product Maker on personal products.',
        },
        {
          role: 'Product Designer',
          company: 'Lowerton',
          period: 'Mar 2024 — Oct 2024',
          summary:
            'I designed a product from scratch, connecting brand, visual system, architecture, and first workflows to shape an MVP that felt clear and presentable from an early stage.',
        },
        {
          role: 'Full Stack Developer · Full Stack + UX',
          company: 'Deusto SEIDOR',
          period: 'Mar 2021 — Aug 2023',
          summary:
            'For the first two years I worked specifically as a full stack developer. In the last year the role evolved into a hybrid position between full stack and UX, bringing interface, flow, and product decisions closer to development.',
        },
        {
          role: 'Web & IT Support',
          company: 'Mercedarias',
          period: 'Mar 2019 — Jun 2019',
          summary:
            'I contributed to technical support and website evolution in an educational environment, working on content structure, maintenance, and practical improvements for everyday platform use.',
        },
      ],
      workflowLabel: 'Workflow',
      workflowTitle: 'The world is changing and the way I work is changing too',
      workflowCaption:
        'You need to know how to prioritise, design, and validate for any kind of project. This workflow depends on context, timelines, and budget, but it usually moves through these stages.',
      workflowSteps: [
        'Prioritisation and roadmap alignment with business.',
        'Review of current analytics, when available, together with research and benchmark work.',
        'Review of architecture, possible user flows, and edge cases.',
        'Validation of that architecture with business and tech.',
        'First designs validated with real users or AI-simulated profiles to test cases and usability.',
        'Validation and iteration from both technical and business perspectives.',
        'Design of the full flow or the full screen being worked on.',
        'Validation of the flow or screen before closing the solution.',
        'Automated documentation to prepare handoff.',
        'Handoff with enough context for development.',
        'Analytics review and comparison against previous performance.',
        'If it makes sense, definition of an A/B test or experiment to keep iterating.',
      ],
      downloadCvEs: 'Download CV ES',
      downloadCvEn: 'Download CV EN',
      articlesLabel: 'Editorial archive',
      articlesTitle: 'Writing',
      articlesCaption: 'Articles and short posts published in the current portfolio.',
      allArticles: 'See all posts',
      contactTitle: 'Contact',
      contactCaption: 'If you want to talk about product, design, or a focused collaboration, send me an email.',
      contactCta: 'Contact me',
    },
    footer: {
      work: 'Work',
      about: 'About',
      articles: 'Articles',
      contact: 'Contact',
      email: 'Email',
      navigation: 'Footer navigation',
      linkedinLabel: 'LinkedIn',
    },
    articles: {
      kicker: 'Archive',
      title: 'Articles',
      description: 'Full archive of articles, notes, and posts about product, UX/UI, accessibility, and tools.',
      sectionKicker: 'Articles',
      archiveDescription: 'Complete archive of articles and notes published in the portfolio.',
      allArticles: 'See all posts',
      metaDescription: 'Curated archive of public LinkedIn posts about product, UX/UI, and accessibility.',
      opening: 'Opening post...',
    },
    work: {
      notFound: 'Project not found',
      back: '← Back to projects',
      visitWebsite: 'Visit website',
      metaDescriptionFallback: 'Product, UX/UI, and systems case study designed by Victor Saiz.',
    },
    redirects: {
      workTitle: 'Work',
      aboutTitle: 'About',
      projectsTitle: 'Projects',
      openingWork: 'Opening Work section...',
      openingAbout: 'Opening About section...',
    },
    access: {
      title: 'Private access',
      description: 'Enter the password to access the portfolio.',
      label: 'Password',
      placeholder: 'Enter the password',
      submit: 'Enter',
      error: 'The password is not correct.',
    },
  },
}

function normalizeLanguageCode(value = '') {
  return value.toLowerCase().trim()
}

export function detectPreferredLanguage(source) {
  const values = Array.isArray(source) ? source : [source]

  for (const value of values) {
    const code = normalizeLanguageCode(value)
    if (!code) continue

    if (code.startsWith('es') || code.startsWith('ca') || code.startsWith('eu') || code.startsWith('val')) {
      return 'es'
    }
  }

  return 'en'
}

export function localizeProject(entry, lang) {
  if (lang === 'es') return entry

  const localized = projectTranslations[entry.slug]?.en
  if (!localized) return entry

  return {
    ...entry,
    ...localized,
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('es')
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(LANGUAGE_STORAGE_KEY) : null
    const nextLang = stored === 'es' || stored === 'en' ? stored : detectPreferredLanguage(window.navigator.languages)
    setLangState(nextLang)
    document.documentElement.lang = nextLang
    setIsReady(true)
  }, [])

  const setLang = (nextLang) => {
    if (nextLang !== 'es' && nextLang !== 'en') return
    setLangState(nextLang)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLang)
    }
    document.documentElement.lang = nextLang
  }

  const value = {
    lang,
    setLang,
    isReady,
    copy: translations[lang],
    cvHref: lang === 'en' ? '/CV_Victor_Saiz_EN.pdf' : '/CV_Victor_Saiz_ES.pdf',
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
