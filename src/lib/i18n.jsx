import { createContext, useContext, useEffect, useState } from 'react'
import { localizeArticleContent, localizeProjectContent } from './contentI18n'

const LANGUAGE_STORAGE_KEY = 'victor-saiz-portfolio-language'

const LanguageContext = createContext(null)

const translations = {
  es: {
    langCode: 'ES',
    langLabel: 'Español',
    site: {
      role: 'Product Designer',
      location: 'Barcelona, España',
      skipToContent: 'Saltar al contenido',
    },
    nav: {
      work: 'Proyectos',
      workNorth: 'North',
      workMain: 'Principales',
      workOther: 'Otros proyectos',
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
      subtitle: 'Product Designer',
      cta: 'Ir a LinkedIn',
      statementLines: [
        'Product Designer con más de 6 años en Fintech, Startups y SaaS.',
        'Trabajo end-to-end de forma transversal, desde negocio, producto, diseño y tech.',
      ],
      personalEmailAria: 'Correo personal',
      copyEmail: 'Copiar correo electrónico',
      copiedEmail: 'Copiado en portapapeles',
      closeToast: 'Cerrar aviso',
      scroll: 'Navega hacia abajo',
    },
    home: {
      northLabel: 'North studio',
      northTitle: 'Proyectos recientes en North studio',
      northCaption:
        'Revisa los proyectos más relevantes que he realizado como Principal product designer, para clientes reales con mayor impacto. En los proyectos no hay información sensible ni proceso detallado al completo por NDA con North.',
      northCta: 'Ver proyectos en North',
      featuredLabel: 'Casos principales',
      featuredTitle: 'Proyectos recientes',
      secondaryLabel: 'Archivo secundario',
      secondaryTitle: 'Otros proyectos',
      secondaryCaption: 'Conceptos y piezas más rápidas que completan el archivo de trabajo.',
      aboutLabel: 'Sobre mí',
      aboutTitle: 'Product Designer',
      aboutSummaryPrefix: 'Product Designer con mindset de',
      aboutSummaryAccent: 'Product Maker',
      aboutSummarySuffix: '.',
      aboutBody: [
        'Trabajo entre diseño, producto y ejecución. Mi punto fuerte está en bajar problemas complejos a decisiones claras de interfaz, flujo y sistema, con una mirada muy cercana a negocio, métricas y viabilidad.',
        'He trabajado en productos como Lowerton, AAAQuest, Coubber, Closy o MyCoach, moviéndome entre concepto, MVP, sistema visual, narrativa de producto y decisiones de interfaz pensadas para salir bien a mercado.',
        'Ahora estoy mucho más enfocado en inteligencia artificial, actuando como AI Product Designer y también como Product Maker en productos propios y colaboraciones donde la velocidad, la documentación y la claridad del flujo importan tanto como la UI.',
      ],
      experienceLabel: 'Experiencia',
      experienceTitle: 'Trayectoria laboral',
      experienceCaption:
        'He combinado diseño de producto, lógica de negocio y ejecución técnica en consultoría, startups, servicios digitales y proyectos de producto con mucho peso de interfaz.',
      experienceItems: [
        {
          role: 'Product & Engineering · Colaborador',
          company: 'Coubber (Startup) · Tiempo parcial (Barcelona)',
          period: 'Ene 2026 — actualidad',
          summary: 'Desarrollo y diseño de producto en startup enfocada en generación de informes deportivos a partir de dispositivos de medición.',
          highlights: [
            'Creación de backlog, diseño de producto e implantación de código.',
            'Integración de modelos de IA para interpretar datos y generar valor accionable.',
          ],
        },
        {
          role: 'Senior Product Designer · Senior AI Product Designer',
          company: 'North · Tiempo completo (Barcelona)',
          period: 'Nov 2024 — actualidad',
          moves: [
            {
              role: 'Senior AI Product Designer',
              period: 'Ene 2026 — actualidad',
              summary:
                'Principal AI Product Designer en una squad interna de IA: exploración y filtrado de herramientas, automatizaciones para acelerar squads (prototipos, documentación, QA y soporte de research).',
              highlights: [
                'Diseño y lanzamiento de proyectos impulsados por IA para grandes clientes.',
                'Continuidad de proyectos en sector bancario y retail.',
              ],
            },
            {
              role: 'Mid-Senior Product Designer',
              period: 'Oct 2024 — ene 2026',
              summary:
                'Lead designer en cuatro productos fintech (web y mobile) centrados en contratación financiera, onboarding y herramientas de gestión B2B, B2C y B2B2C.',
              highlights: [
                'Owner de financiación y checkout eCommerce en uno de los principales bancos de España.',
                'Accessibility Lead: handoffs accesibles para web y apps nativas.',
                'Trabajo cercano con POs, PMs, Devs y negocio para validar flujos y requisitos regulatorios.',
              ],
            },
          ],
        },
        {
          role: 'Product Designer Lead',
          company: 'Lowerton (Startup) · Tiempo completo (Remoto)',
          period: 'Mar 2024 — oct 2024',
          summary: 'Definición y diseño de producto digital desde cero.',
          highlights: [
            'Trabajo en proyectos con requisitos complejos, incluyendo concursos públicos, con foco en documentación y alineación con negocio.',
            'Participación en concursos públicos y generación de documentación técnica/legal mediante IA.',
          ],
        },
        {
          role: 'UX/UI Freelance',
          company: 'Freelance',
          period: 'Ago 2023 — jun 2024',
          summary: 'Diseño de productos digitales y landings orientadas a conversión (empresas de marketing, portfolios y ecommerce).',
          highlights: ['Mejora de flujos y experiencia de usuario en distintos proyectos.'],
        },
        {
          role: 'Full Stack Developer · UX Designer · QA',
          company: 'Deusto SEIDOR S.A · Tiempo completo (Vitoria)',
          period: 'Mar 2021 — ago 2023',
          moves: [
            {
              role: 'Full Stack Developer · UX Designer · QA',
              period: 'Jun 2022 — ago 2023',
              highlights: [
                'Diseño y desarrollo de funcionalidades combinando visión técnica y de producto.',
                'Mejora de UX, mejora continua de producto, investigación con usuarios y QA.',
                'Lideré un equipo de cinco especialistas para refinar flujos y crear funcionalidades centradas en el usuario.',
              ],
            },
            {
              role: 'Full Stack Developer',
              period: 'Jun 2021 — jun 2022',
              highlights: [
                'Participación en decisiones técnicas y estructuración de soluciones.',
                'Acercamiento entre desarrollo y producto, aportando criterio más allá de código.',
                'Implementación de funcionalidades y comprensión de la lógica de negocio desde el lado técnico.',
              ],
            },
            {
              role: 'Full Stack Developer · Intern',
              period: 'Mar 2021 — jun 2021',
              highlights: [
                'Desarrollo de soluciones tecnológicas desde cero.',
                'Participación en software de digitalización documental utilizando .NET, Python, Angular y C#.',
              ],
            },
          ],
        },
        {
          role: 'Técnico informático · Intern',
          company: 'NSM Educational Center · Tiempo completo (Vitoria)',
          period: 'Mar 2019 — jun 2019',
          highlights: [
            'Rediseño y desarrollo de un sistema en WordPress para gestionar recursos educativos y mejorar la eficiencia diaria.',
            'Pruebas de la nueva plataforma con profesorado y alumnado, recogida de feedback e iteraciones de mejora.',
          ],
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
      downloadCv: 'Descargar CV',
      downloadCvEs: 'Descargar CV ES',
      downloadCvEn: 'Descargar CV EN',
      articlesLabel: 'Archivo editorial',
      articlesTitle: 'Publicaciones',
      articlesCaption: 'Artículos y notas publicados en la versión actual del portfolio.',
      allArticles: 'Ver todas las publicaciones',
      contactTitle: 'Contacta conmigo',
      contactCaption:
        'Si tienes una posición abierta en tu equipo, necesitas una colaboración puntual o simplemente quieres hablar de producto y de como está cambiando el mundo, puedes enviarme un correo y te responderé lo antes posible.',
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
    },
    articles: {
      back: 'Volver',
      kicker: 'Archivo',
      title: 'Publicaciones',
      description: 'Archivo completo de artículos, notas y publicaciones sobre producto, UX/UI, accesibilidad y herramientas.',
      sectionKicker: 'Publicaciones',
      archiveDescription: 'Archivo completo de artículos y notas publicados en el portfolio.',
      allArticles: 'Ver todas las publicaciones',
      metaDescription: 'Archivo curado de publicaciones públicas de LinkedIn sobre producto, UX/UI y accesibilidad.',
      opening: 'Abriendo publicación...',
    },
    north: {
      kicker: 'North studio',
      title: 'Proyectos en North',
      description:
        'Revisa los proyectos más relevantes que he realizado como Principal product designer, para clientes reales con mayor impacto. En los proyectos no hay información sensible ni proceso detallado al completo por NDA con North.',
      back: 'Volver',
      summaryTitle: 'Resumen',
      detailTitle: 'Aportación',
      focusTitle: 'Enfoque',
      impactLabel: 'Impacto',
      roleLabel: 'Rol',
      clientLabel: 'Cliente',
      industryLabel: 'Sector',
      scopeLabel: 'Alcance',
      ndaTitle: 'Nota de alcance',
      ndaBody:
        'Estas páginas resumen contexto, impacto y decisiones visibles. No incluyen información sensible ni el proceso completo por restricciones de NDA con North.',
      allProjects: 'Ver todos los proyectos de North',
    },
    work: {
      notFound: 'Proyecto no encontrado',
      back: 'Volver',
      visitWebsite: 'Visitar web',
      metaDescriptionFallback: 'Caso de estudio de producto, UX/UI y sistemas diseñado por Victor Saiz.',
      expandImage: 'Ampliar imagen',
      closeImage: 'Cerrar imagen',
    },
    redirects: {
      workTitle: 'Proyectos',
      aboutTitle: 'Sobre mí',
      projectsTitle: 'Proyectos',
      northTitle: 'Proyectos en North',
      openingWork: 'Abriendo la sección de proyectos...',
      openingAbout: 'Abriendo la sección Sobre mí...',
      openingNorth: 'Abriendo la sección de proyectos en North...',
    },
    access: {
      title: 'Acceso privado',
      description: 'Introduce la contraseña para acceder al portfolio.',
      label: 'Contraseña',
      placeholder: 'Escribe la contraseña',
      submit: 'Entrar',
      error: 'La contraseña no es correcta.',
    },
    doodlebob: {
      title: 'ME HOY MINOY!',
      kicker: 'Easter egg',
      description:
        'La versión local del portfolio mantiene a Doodlebob para conservar el lado más juguetón y menos corporativo de la web.',
      reason: 'Por qué existe',
      bodyOne:
        'Las referencias a Bob Esponja forman parte del lenguaje visual de Victor y ayudan a que la marca se sienta menos corporativa y más personal.',
      bodyTwo:
        'También explican la mezcla de humor, color y formas exageradas que aparece en otros puntos del portfolio.',
      back: 'Volver al inicio',
      metaDescription: 'Rincón lúdico del portfolio, preservado como pequeño easter egg dentro de la versión en código.',
    },
    marquee: {
      label: 'Highlights',
    },
    contactLegacy: {
      kicker: 'Contacto',
      title: 'Si el producto necesita criterio visual y alguien que entienda a ingeniería, hablemos.',
      linkedin: 'LinkedIn',
      mentorship: 'Mentorías',
      downloadCv: 'Descargar CV',
    },
  },
  en: {
    langCode: 'EN',
    langLabel: 'English',
    site: {
      role: 'Product Designer',
      location: 'Barcelona, Spain',
      skipToContent: 'Skip to content',
    },
    nav: {
      work: 'Work',
      workNorth: 'North',
      workMain: 'Main projects',
      workOther: 'Other projects',
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
      subtitle: 'Product Designer',
      cta: 'Go to LinkedIn',
      statementLines: [
        'Product Designer with more than 6 years of experience in Fintech, Startups, and SaaS.',
        'I work end-to-end across business, product, design, and tech.',
      ],
      personalEmailAria: 'Personal email',
      copyEmail: 'Copy email address',
      copiedEmail: 'Copied to clipboard',
      closeToast: 'Close notice',
      scroll: 'Navigate down',
    },
    home: {
      northLabel: 'North studio',
      northTitle: 'Recent projects at North studio',
      northCaption:
        'Review the most relevant projects I worked on as Principal Product Designer, for real clients with significant impact. These pages do not include sensitive information or the full detailed process due to NDA constraints with North.',
      northCta: 'View North projects',
      featuredLabel: 'Selected cases',
      featuredTitle: 'Recent projects',
      secondaryLabel: 'Secondary archive',
      secondaryTitle: 'Other projects',
      secondaryCaption: 'Faster concepts and smaller pieces that complete the body of work.',
      aboutLabel: 'About',
      aboutTitle: 'Product Designer',
      aboutSummaryPrefix: 'Product Designer with a',
      aboutSummaryAccent: 'Product Maker',
      aboutSummarySuffix: ' mindset.',
      aboutBody: [
        'I work across design, product, and execution. My strength is turning complex problems into clear interface, workflow, and system decisions, always with business impact, metrics, and feasibility in mind.',
        'I have worked on products such as Lowerton, AAAQuest, Coubber, Closy, and MyCoach, moving between concept work, MVP definition, visual systems, product narrative, and UI decisions designed to ship well.',
        'Right now my focus is much stronger on artificial intelligence, acting as an AI Product Designer and also as a Product Maker across personal products and collaborations where speed, documentation, and flow clarity matter as much as interface quality.',
      ],
      experienceLabel: 'Experience',
      experienceTitle: 'Career path',
      experienceCaption:
        'I have combined product design, business logic, and technical execution across consulting, startups, digital services, and product work with a strong UI focus.',
      experienceItems: [
        {
          role: 'Product & Engineering · Contributor',
          company: 'Coubber (Startup) · Part-time (Barcelona)',
          period: 'Jan 2026 — present',
          summary: 'Product development and design in a startup focused on sports reporting from measurement devices.',
          highlights: [
            'Backlog creation, product design, and code implementation.',
            'Integration of AI models to interpret data and generate actionable value.',
          ],
        },
        {
          role: 'Senior Product Designer · Senior AI Product Designer',
          company: 'North · Full-time (Barcelona)',
          period: 'Nov 2024 — present',
          moves: [
            {
              role: 'Senior AI Product Designer',
              period: 'Jan 2026 — present',
              summary:
                'Principal AI Product Designer in an internal AI squad: tool exploration and filtering, plus automations to accelerate squads (prototypes, documentation, QA, and research support).',
              highlights: [
                'Design and launch of AI-driven projects for enterprise clients.',
                'Continuity of projects in banking and retail.',
              ],
            },
            {
              role: 'Mid-Senior Product Designer',
              period: 'Oct 2024 — Jan 2026',
              summary:
                'Lead designer in four fintech products (web and mobile) focused on financial contracting, onboarding, and management tools for B2B, B2C, and B2B2C.',
              highlights: [
                'Owner of financing and eCommerce checkout in one of Spain’s main banks.',
                'Accessibility Lead: accessible handoffs for web and native apps.',
                'Close collaboration with POs, PMs, Devs, and business stakeholders to validate flows and regulatory requirements.',
              ],
            },
          ],
        },
        {
          role: 'Product Designer Lead',
          company: 'Lowerton (Startup) · Full-time (Remote)',
          period: 'Mar 2024 — Oct 2024',
          summary: 'Definition and design of a digital product from scratch.',
          highlights: [
            'Work on projects with complex requirements, including public tenders, with a strong focus on documentation and business alignment.',
            'Participation in public tenders and generation of technical/legal documentation using AI.',
          ],
        },
        {
          role: 'UX/UI Freelance',
          company: 'Freelance',
          period: 'Aug 2023 — Jun 2024',
          summary: 'Design of digital products and conversion-focused landing pages (marketing companies, portfolios, and ecommerce).',
          highlights: ['Improvement of flows and user experience across different projects.'],
        },
        {
          role: 'Full Stack Developer · UX Designer · QA',
          company: 'Deusto SEIDOR S.A · Full-time (Vitoria)',
          period: 'Mar 2021 — Aug 2023',
          moves: [
            {
              role: 'Full Stack Developer · UX Designer · QA',
              period: 'Jun 2022 — Aug 2023',
              highlights: [
                'Feature design and development combining technical and product vision.',
                'UX improvements, continuous product improvement, user research, and QA.',
                'Led a team of five specialists to refine flows and deliver user-centered features.',
              ],
            },
            {
              role: 'Full Stack Developer',
              period: 'Jun 2021 — Jun 2022',
              highlights: [
                'Participation in technical decisions and solution structuring.',
                'Closer connection between development and product, adding judgement beyond code.',
                'Feature implementation and business logic understanding from the technical side.',
              ],
            },
            {
              role: 'Full Stack Developer · Intern',
              period: 'Mar 2021 — Jun 2021',
              highlights: [
                'Development of technological solutions from scratch.',
                'Participation in document digitisation software using .NET, Python, Angular, and C#.',
              ],
            },
          ],
        },
        {
          role: 'IT Technician · Intern',
          company: 'NSM Educational Center · Full-time (Vitoria)',
          period: 'Mar 2019 — Jun 2019',
          highlights: [
            'Redesign and development of a WordPress system to manage educational resources and improve day-to-day efficiency.',
            'Testing of the new platform with teachers and students, gathering feedback, and iterative improvements.',
          ],
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
      downloadCv: 'Download CV',
      downloadCvEs: 'Download CV ES',
      downloadCvEn: 'Download CV EN',
      articlesLabel: 'Editorial archive',
      articlesTitle: 'Writing',
      articlesCaption: 'Articles and short posts published in the current portfolio.',
      allArticles: 'See all posts',
      contactTitle: 'Get in touch',
      contactCaption:
        'If you have an open role in your team, need focused collaboration, or simply want to talk about product and how the world is changing, send me an email and I will get back to you as soon as possible.',
      contactCta: 'Contact',
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
      back: 'Back',
      kicker: 'Archive',
      title: 'Articles',
      description: 'Full archive of articles, notes, and posts about product, UX/UI, accessibility, and tools.',
      sectionKicker: 'Articles',
      archiveDescription: 'Complete archive of articles and notes published in the portfolio.',
      allArticles: 'See all posts',
      metaDescription: 'Curated archive of public LinkedIn posts about product, UX/UI, and accessibility.',
      opening: 'Opening post...',
    },
    north: {
      kicker: 'North studio',
      title: 'Projects at North',
      description:
        'Review the most relevant projects I worked on as Principal Product Designer, for real clients with significant impact. These pages do not include sensitive information or the full detailed process due to NDA constraints with North.',
      back: 'Back',
      summaryTitle: 'Overview',
      detailTitle: 'Contribution',
      focusTitle: 'Focus',
      impactLabel: 'Impact',
      roleLabel: 'Role',
      clientLabel: 'Client',
      industryLabel: 'Industry',
      scopeLabel: 'Scope',
      ndaTitle: 'Scope note',
      ndaBody:
        'These pages summarise context, impact, and visible decisions. They do not include sensitive information or the full process because of NDA restrictions with North.',
      allProjects: 'See all North projects',
    },
    work: {
      notFound: 'Project not found',
      back: 'Back',
      visitWebsite: 'Visit website',
      metaDescriptionFallback: 'Product, UX/UI, and systems case study designed by Victor Saiz.',
      expandImage: 'Expand image',
      closeImage: 'Close image',
    },
    redirects: {
      workTitle: 'Work',
      aboutTitle: 'About',
      projectsTitle: 'Projects',
      northTitle: 'Projects at North',
      openingWork: 'Opening Work section...',
      openingAbout: 'Opening About section...',
      openingNorth: 'Opening North projects section...',
    },
    access: {
      title: 'Private access',
      description: 'Enter the password to access the portfolio.',
      label: 'Password',
      placeholder: 'Enter the password',
      submit: 'Enter',
      error: 'The password is not correct.',
    },
    doodlebob: {
      title: 'ME HOY MINOY!',
      kicker: 'Easter egg',
      description: 'The local version of the portfolio keeps Doodlebob to preserve the more playful and less corporate side of the site.',
      reason: 'Why it exists',
      bodyOne:
        'SpongeBob references are part of Victor’s visual language and help the brand feel less corporate and more personal.',
      bodyTwo:
        'They also explain the mix of humour, colour, and exaggerated shapes that appears in other parts of the portfolio.',
      back: 'Back to home',
      metaDescription: 'Playful corner of the portfolio preserved as a small easter egg inside the coded version of the site.',
    },
    marquee: {
      label: 'Highlights',
    },
    contactLegacy: {
      kicker: 'Contact',
      title: 'If the product needs visual judgement and someone who understands engineering, let’s talk.',
      linkedin: 'LinkedIn',
      mentorship: 'Mentoring',
      downloadCv: 'Download CV',
    },
  },
}

const caOverrides = {
  langCode: 'CA',
  langLabel: 'Català',
  site: { location: 'Barcelona, Espanya', skipToContent: 'Salta al contingut' },
  nav: {
    work: 'Projectes',
    workMain: 'Principals',
    workOther: 'Altres projectes',
    about: 'Sobre mi',
    articles: 'Articles',
    openMenu: 'Obre el menú',
    closeMenu: 'Tanca el menú',
    primary: 'Navegació principal',
    mobile: 'Navegació mòbil',
    language: 'Idioma',
  },
  hero: {
    cta: 'Anar a LinkedIn',
    copiedEmail: 'Copiat al porta-retalls',
    closeToast: 'Tanca l’avís',
    scroll: 'Navega cap avall',
  },
  home: {
    northTitle: 'Projectes recents a North studio',
    featuredTitle: 'Projectes recents',
    secondaryTitle: 'Altres projectes',
    articlesTitle: 'Publicacions',
    allArticles: 'Veure totes les publicacions',
    contactTitle: 'Contacta amb mi',
    contactCaption:
      'Si tens una posició oberta al teu equip, necessites una col·laboració puntual o simplement vols parlar de producte i de com està canviant el món, envia’m un correu i et respondré tan aviat com pugui.',
    contactCta: 'Contactar',
    carouselPrevNorth: 'Projecte anterior a North Studio',
    carouselNextNorth: 'Projecte següent a North Studio',
    carouselPrevFeatured: 'Projecte anterior a projectes recents',
    carouselNextFeatured: 'Projecte següent a projectes recents',
    carouselPrevSecondary: 'Projecte anterior',
    carouselNextSecondary: 'Projecte següent',
    highlightsLabel: 'Punts destacats de',
    rolesLabel: 'Rols de',
    downloadCv: 'Descarregar CV',
  },
  footer: {
    work: 'Projectes',
    about: 'Sobre mi',
    articles: 'Articles',
    contact: 'Contacte',
    email: 'Correu',
    navigation: 'Navegació del peu',
    contactLinkedin: 'Contactar via LinkedIn',
  },
  articles: {
    back: 'Tornar',
    kicker: 'Arxiu',
    title: 'Publicacions',
    description: 'Arxiu complet d’articles, notes i publicacions sobre producte, UX/UI, accessibilitat i eines.',
    sectionKicker: 'Publicacions',
    archiveDescription: 'Arxiu complet d’articles i notes publicades al portfolio.',
    allArticles: 'Veure totes les publicacions',
    metaDescription: 'Arxiu curat de publicacions públiques de LinkedIn sobre producte, UX/UI i accessibilitat.',
    opening: 'Obrint publicació...',
  },
  north: {
    kicker: 'North studio',
    title: 'Projectes a North',
    description:
      'Revisa els projectes més rellevants que he realitzat com a Principal Product Designer, per a clients reals amb gran impacte. No s’hi inclou informació sensible ni el procés complet per NDA amb North.',
    back: 'Tornar',
    summaryTitle: 'Resum',
    detailTitle: 'Aportació',
    focusTitle: 'Enfocament',
    impactLabel: 'Impacte',
    roleLabel: 'Rol',
    clientLabel: 'Client',
    industryLabel: 'Sector',
    scopeLabel: 'Abast',
    ndaTitle: 'Nota d’abast',
    ndaBody: 'Aquestes pàgines resumeixen context, impacte i decisions visibles. No inclouen informació sensible ni el procés complet per restriccions de NDA amb North.',
    allProjects: 'Veure tots els projectes de North',
  },
  work: {
    notFound: 'Projecte no trobat',
    back: 'Tornar',
    visitWebsite: 'Visitar web',
    metaDescriptionFallback: 'Cas d’estudi de producte, UX/UI i sistemes dissenyat per Victor Saiz.',
    expandImage: 'Ampliar imatge',
    closeImage: 'Tancar imatge',
  },
  redirects: {
    workTitle: 'Projectes',
    aboutTitle: 'Sobre mi',
    projectsTitle: 'Projectes',
    northTitle: 'Projectes a North',
    openingWork: 'Obrint la secció de projectes...',
    openingAbout: 'Obrint la secció Sobre mi...',
    openingNorth: 'Obrint la secció de projectes a North...',
  },
  access: {
    title: 'Accés privat',
    description: 'Introdueix la contrasenya per accedir al portfolio.',
    label: 'Contrasenya',
    placeholder: 'Escriu la contrasenya',
    submit: 'Entrar',
    error: 'La contrasenya no és correcta.',
  },
}

const euOverrides = {
  langCode: 'EU',
  langLabel: 'Euskara',
  site: { location: 'Bartzelona, Espainia', skipToContent: 'Joan edukira' },
  nav: {
    work: 'Proiektuak',
    workMain: 'Nagusiak',
    workOther: 'Beste proiektuak',
    about: 'Niri buruz',
    articles: 'Artikuluak',
    openMenu: 'Ireki menua',
    closeMenu: 'Itxi menua',
    primary: 'Nabigazio nagusia',
    mobile: 'Mugikorreko nabigazioa',
    language: 'Hizkuntza',
  },
  hero: {
    cta: 'Joan LinkedIn-era',
    copiedEmail: 'Arbelean kopiatuta',
    closeToast: 'Itxi oharra',
    scroll: 'Nabigatu behera',
  },
  home: {
    northTitle: 'Azken proiektuak North studio-n',
    featuredTitle: 'Azken proiektuak',
    secondaryTitle: 'Beste proiektuak',
    articlesTitle: 'Argitalpenak',
    allArticles: 'Ikusi argitalpen guztiak',
    contactTitle: 'Jarri nirekin harremanetan',
    contactCaption:
      'Zure taldean lanpostu bat baduzu, lankidetza puntual bat behar baduzu edo produktuaz eta mundua nola aldatzen ari den hitz egin nahi baduzu, bidali email bat eta ahalik eta azkarren erantzungo dizut.',
    contactCta: 'Kontaktatu',
    carouselPrevNorth: 'Aurreko proiektua North Studio-n',
    carouselNextNorth: 'Hurrengo proiektua North Studio-n',
    carouselPrevFeatured: 'Aurreko proiektua azken proiektuetan',
    carouselNextFeatured: 'Hurrengo proiektua azken proiektuetan',
    carouselPrevSecondary: 'Aurreko proiektua',
    carouselNextSecondary: 'Hurrengo proiektua',
    highlightsLabel: 'Nabarmenduak',
    rolesLabel: 'Rolak',
    downloadCv: 'Deskargatu CVa',
  },
  footer: {
    work: 'Proiektuak',
    about: 'Niri buruz',
    articles: 'Artikuluak',
    contact: 'Kontaktua',
    email: 'Posta',
    navigation: 'Orri-oinaren nabigazioa',
    contactLinkedin: 'Kontaktatu LinkedIn bidez',
  },
  articles: {
    back: 'Itzuli',
    kicker: 'Artxiboa',
    title: 'Argitalpenak',
    description: 'Produktu, UX/UI, irisgarritasun eta tresnei buruzko artikulu, ohar eta argitalpenen artxibo osoa.',
    sectionKicker: 'Argitalpenak',
    archiveDescription: 'Portfolioan argitaratutako artikulu eta oharren artxibo osoa.',
    allArticles: 'Ikusi argitalpen guztiak',
    metaDescription: 'LinkedIn-eko produktu, UX/UI eta irisgarritasunari buruzko argitalpen publikoen artxibo kuratua.',
    opening: 'Argitalpena irekitzen...',
  },
  north: {
    kicker: 'North studio',
    title: 'North-eko proiektuak',
    description:
      'Begiratu Principal Product Designer gisa egin ditudan proiektu garrantzitsuenak, benetako bezeroentzat eta eragin handiarekin. Ez da informazio sentikorrik ezta prozesu osoa ere erakusten, North-ekin NDA dela eta.',
    back: 'Itzuli',
    summaryTitle: 'Laburpena',
    detailTitle: 'Ekarpena',
    focusTitle: 'Fokua',
    impactLabel: 'Eragina',
    roleLabel: 'Rola',
    clientLabel: 'Bezeroa',
    industryLabel: 'Sektorea',
    scopeLabel: 'Irismena',
    ndaTitle: 'Irismen-oharra',
    ndaBody: 'Orrialde hauek testuingurua, eragina eta ikus daitezkeen erabakiak laburbiltzen dituzte. Ez dute informazio sentikorrik edo prozesu osoa jasotzen, North-eko NDA murrizketengatik.',
    allProjects: 'Ikusi North-eko proiektu guztiak',
  },
  work: {
    notFound: 'Proiektua ez da aurkitu',
    back: 'Itzuli',
    visitWebsite: 'Webgunea bisitatu',
    metaDescriptionFallback: 'Victor Saizek diseinatutako produktu, UX/UI eta sistemen kasu-azterketa.',
    expandImage: 'Irudia handitu',
    closeImage: 'Irudia itxi',
  },
  redirects: {
    workTitle: 'Proiektuak',
    aboutTitle: 'Niri buruz',
    projectsTitle: 'Proiektuak',
    northTitle: 'North-eko proiektuak',
    openingWork: 'Proiektuen atala irekitzen...',
    openingAbout: 'Niri buruz atala irekitzen...',
    openingNorth: 'North-eko proiektuen atala irekitzen...',
  },
  access: {
    title: 'Sarbide pribatua',
    description: 'Sartu pasahitza portfolioa ikusteko.',
    label: 'Pasahitza',
    placeholder: 'Idatzi pasahitza',
    submit: 'Sartu',
    error: 'Pasahitza ez da zuzena.',
  },
}

function deepMerge(base, override) {
  const out = { ...base }
  Object.entries(override).forEach(([k, v]) => {
    if (v && typeof v === 'object' && !Array.isArray(v) && base[k] && typeof base[k] === 'object' && !Array.isArray(base[k])) {
      out[k] = deepMerge(base[k], v)
    } else {
      out[k] = v
    }
  })
  return out
}

translations.es.home.carouselPrevNorth = 'Proyecto anterior en North Studio'
translations.es.home.carouselNextNorth = 'Proyecto siguiente en North Studio'
translations.es.home.carouselPrevFeatured = 'Proyecto anterior en proyectos recientes'
translations.es.home.carouselNextFeatured = 'Proyecto siguiente en proyectos recientes'
translations.es.home.carouselPrevSecondary = 'Proyecto anterior'
translations.es.home.carouselNextSecondary = 'Proyecto siguiente'
translations.es.home.highlightsLabel = 'Puntos destacados de'
translations.es.home.rolesLabel = 'Roles de'
translations.es.footer.contactLinkedin = 'Contactar vía LinkedIn'
translations.en.home.carouselPrevNorth = 'Previous project in North Studio'
translations.en.home.carouselNextNorth = 'Next project in North Studio'
translations.en.home.carouselPrevFeatured = 'Previous recent project'
translations.en.home.carouselNextFeatured = 'Next recent project'
translations.en.home.carouselPrevSecondary = 'Previous project'
translations.en.home.carouselNextSecondary = 'Next project'
translations.en.home.highlightsLabel = 'Highlights for'
translations.en.home.rolesLabel = 'Roles at'
translations.en.footer.contactLinkedin = 'Contact via LinkedIn'
translations.ca = deepMerge(translations.es, caOverrides)
translations.eu = deepMerge(translations.es, euOverrides)

function normalizeLanguageCode(value = '') {
  return value.toLowerCase().trim()
}

export function detectPreferredLanguage(source) {
  const values = Array.isArray(source) ? source : [source]

  for (const value of values) {
    const code = normalizeLanguageCode(value)
    if (!code) continue

    if (code.startsWith('es') || code.startsWith('val')) {
      return 'es'
    }
    if (code.startsWith('ca')) return 'ca'
    if (code.startsWith('eu') || code.startsWith('eus')) return 'eu'
    if (code.startsWith('en')) return 'en'
  }

  return 'en'
}

export function localizeProject(entry, lang) {
  return localizeProjectContent(entry, lang)
}

export function localizeArticle(entry, lang) {
  return localizeArticleContent(entry, lang)
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en')
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(LANGUAGE_STORAGE_KEY) : null
    const nextLang = ['es', 'en', 'ca', 'eu'].includes(stored) ? stored : detectPreferredLanguage(window.navigator.languages)
    setLangState(nextLang)
    document.documentElement.lang = nextLang
    setIsReady(true)
  }, [])

  const setLang = (nextLang) => {
    if (!['es', 'en', 'ca', 'eu'].includes(nextLang)) return
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
    cvHref: lang === 'en' ? '/VictorSaiz_CV_EN.pdf' : '/VictorSaiz_CV_ES.pdf',
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
