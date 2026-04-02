function isPlainObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function deepMerge(base, override) {
  if (override === undefined) return base
  if (Array.isArray(override)) return override
  if (!isPlainObject(base) || !isPlainObject(override)) return override

  const result = { ...base }

  Object.keys(override).forEach((key) => {
    result[key] = deepMerge(base?.[key], override[key])
  })

  return result
}

const articleTopicTranslations = {
  Producto: { en: 'Product' },
  Rutina: { en: 'Routine' },
  Carrera: { en: 'Career' },
  'Opinión': { en: 'Opinion' },
  Opinion: { en: 'Opinion' },
  Accesibilidad: { en: 'Accessibility' },
  IA: { en: 'AI' },
  Ideacion: { en: 'Ideation' },
  Ideación: { en: 'Ideation' },
  Plugins: { en: 'Plugins' },
  Herramientas: { en: 'Tools' },
  Cultura: { en: 'Culture' },
  Creatividad: { en: 'Creativity' },
  UI: { en: 'UI' },
  Psicologia: { en: 'Psychology' },
  Psicología: { en: 'Psychology' },
  Frontend: { en: 'Frontend' },
  Aprendizaje: { en: 'Learning' },
  Figma: { en: 'Figma' },
}

export const articleTranslations = {
  'en-north-estamos-impulsando-un-cambio-radical': {
    en: {
      title: 'At North we are driving a radical change',
      excerpt:
        'A short look at the product shift being driven at North, focused on direction, execution, and continuous learning.',
      description:
        'A post about product evolution at North, changing direction, and cross-functional work between design, business, and delivery.',
    },
  },
  'trabajar-fuera-de-casa-yo-tengo-una-rutina': {
    en: {
      title: 'Working outside home: the routine that works for me',
      excerpt:
        'A short note on habits, focus, and energy when you work outside home and want to keep clarity and continuity.',
      description:
        'A reflection on personal routine, concentration, and work environment to sustain a creative and analytical rhythm.',
    },
  },
  'sabado-que-suma-dos-cafes-dos-portatiles': {
    en: {
      title: 'A Saturday that adds up',
      excerpt:
        'A short post about shared energy, focus, and the importance of surrounding yourself with people who are quietly and consistently ambitious.',
      description:
        'A personal post about work rhythm, parallel projects, and the value of building next to people with good energy.',
    },
  },
  'cada-dia-veo-en-linkedin-3-4-publicaciones': {
    en: {
      title: 'Every day I see 3 or 4 posts on LinkedIn',
      excerpt:
        'A direct observation about the kind of content that circulates on LinkedIn and how to separate real signal from noise and repetition.',
      description:
        'A reflection on content, judgement, and saturation on LinkedIn from a product and learning perspective.',
    },
  },
  'opinion-rapida-sobre-como-va-a-evolucionar-un-equipo-de-producto': {
    en: {
      title: 'How I think a product team will evolve',
      excerpt:
        'A short opinion on smaller teams, more transversal profiles, and a product practice increasingly supported by AI.',
      description:
        'A post about the evolution of product teams, new hybrid profiles, and changes in the relationship between design, strategy, and execution.',
    },
  },
  'accesibilidad-wcag-aria': {
    en: {
      title: 'Accessibility, WCAG, and ARIA',
      excerpt:
        'A post focused on web accessibility, WCAG criteria, and the use of ARIA as a structural part of product and UI work.',
      description:
        'A note on digital accessibility, WCAG standards, and implementation best practices in interfaces and systems.',
    },
  },
  'os-presento-un-nuevo-agente-de-chatgpt': {
    en: {
      title: 'Introducing a new ChatGPT agent',
      excerpt:
        'A post about an agent designed to speed up design and product tasks, focused on real usefulness and experimentation.',
      description:
        'An introduction to a new ChatGPT agent applied to design flows, documentation, and product support.',
    },
  },
  '10-tecnicas-de-ideacion-en-diseno-ux': {
    en: {
      title: '10 UX ideation techniques',
      excerpt:
        'Ten techniques to unlock ideation, collaborate better, and turn creative sessions into more useful product decisions.',
      description:
        'Discover 10 effective ideation techniques for UX design. Victor Saiz shares practical methods to improve creative and collaborative work in product teams.',
    },
  },
  'te-molestan-los-decimales-de-figma-necesitas-este-plugin': {
    en: {
      title: 'The fix for decimals in Figma',
      excerpt:
        'A simple plugin to clean decimals, speed up decisions, and keep Figma files much more organized.',
      description:
        'A practical plugin for managing decimals in Figma. Simplify the file and keep the focus on design instead of cleanup.',
    },
  },
  'mis-7-plugins-favoritos': {
    en: {
      title: 'My 7 essential UX/UI plugins',
      excerpt:
        'A selection of plugins that help iterate faster, automate repetitive work, and keep a stronger visual judgement.',
      description:
        'A curated list of seven plugins that make a practical difference in day-to-day UX/UI work.',
    },
  },
  'la-evolucion-hacia-el-profesional-t-shaped': {
    en: {
      title: 'The evolution towards the T-shaped professional',
      excerpt:
        'Why widening your perspective without losing depth remains a real advantage when moving between product, UX/UI, and development.',
      description:
        'A reflection on evolving into a T-shaped profile and why it matters in digital product work.',
    },
  },
  'como-la-ia-potencia-el-diseno-de-soluciones-tecnologicas': {
    en: {
      title: 'How AI enhances the design of technology solutions',
      excerpt:
        'A practical look at how AI can help think, produce, and validate digital solutions without replacing judgement.',
      description:
        'Explore how AI can support the design of technology solutions through faster research, iteration, and clearer delivery.',
    },
  },
  'no-te-enamores-de-una-herramienta-el-valor-de-aprender-a-usarlas': {
    en: {
      title: 'Do not fall in love with one tool',
      excerpt:
        'Being comfortable with several tools improves judgement, adaptability, and speed when the project context changes.',
      description:
        'A reminder that mastering different tools gives more flexibility and better decision-making across design work.',
    },
  },
  'cultura-deportiva-en-el-mundo-tecnologico': {
    en: {
      title: 'Sports culture in the tech world',
      excerpt:
        'A reflection on discipline, competitive mindset, and how some sports habits carry into digital work.',
      description:
        'A short piece about how sports culture can shape work ethic, resilience, and team dynamics in technology.',
    },
  },
  'inspirate-en-dibujos-animados-para-un-buen-diseno-ux': {
    en: {
      title: 'Get inspired by cartoons for better UX design',
      excerpt:
        'Less obvious visual references that can help create interfaces that feel more expressive, memorable, and easy to understand.',
      description:
        'A piece on how cartoons can inspire stronger, more memorable user experiences.',
    },
  },
  'por-que-la-ia-no-puede-reemplazar-la-magia-de-la-ui': {
    en: {
      title: 'Why AI cannot replace the magic of UI',
      excerpt:
        'AI helps produce faster, but visual judgement and interface sensitivity still make the difference.',
      description:
        'A reflection on why human visual judgement remains essential in interface design despite AI acceleration.',
    },
  },
  'accesibilidad-y-sistemas-de-diseno-en-ux': {
    en: {
      title: 'Accessibility and design systems in UX',
      excerpt:
        'How to integrate accessibility into the system itself instead of treating it as an extra layer or a late review.',
      description:
        'A note on integrating accessibility into design systems so it becomes part of the product structure from the start.',
    },
  },
  'la-psicologia-detras-de-un-buen-ux-design': {
    en: {
      title: 'The psychology behind good UX design',
      excerpt:
        'Behaviour and perception principles that help create experiences that feel more intuitive and useful.',
      description:
        'A practical look at how psychology improves UX by shaping clearer and more satisfying experiences.',
    },
  },
  'autolayout-y-flexbox-como-figma-revoluciona-el-frontend': {
    en: {
      title: 'AutoLayout and Flexbox: how Figma reshapes frontend work',
      excerpt:
        'A clear connection between layout systems in design and their real translation into responsive code.',
      description:
        'A technical article about how AutoLayout and Flexbox bring design structure closer to real frontend implementation.',
    },
  },
  'el-duolingo-del-ux-ui': {
    en: {
      title: 'Learn UX/UI the Duolingo way with Uxcel',
      excerpt:
        'A recommendation for a more dynamic way to improve fundamentals and keep practicing with consistency.',
      description:
        'A piece about Uxcel as a practical and engaging way to learn UX/UI over time.',
    },
  },
}

export const projectTranslations = {
  aaaquest: {
    es: {
      category: 'Caso de estudio',
      role: 'Diseño de producto y MVP',
    },
    en: {
      category: 'Case study',
      role: 'Product Design & MVP',
      subtitle: 'AI for accessibility and product documentation',
      summary:
        'A tool designed to detect accessibility issues, generate development-ready documentation, and speed up handoff from a screenshot or a design.',
      description:
        'AAAQuest combines visual analysis, WCAG criteria, and AI-assisted generation so design teams can document accessibility in seconds, learn best practices, and share clearer deliverables.',
      headline:
        'Document accessibility in seconds with a product that analyses screens, detects WCAG issues, and generates deliverables ready for product and engineering.',
      facts: [
        { label: 'Type', value: 'AI product for accessibility audits and documentation' },
        { label: 'Role', value: 'Product Design & MVP' },
        { label: 'Industry', value: 'Accessibility, design tooling, and AI product' },
        { label: 'Status', value: 'Public demo and open beta' },
        { label: 'Website', value: 'aaaquest.com' },
      ],
      detailSections: [
        {
          title: 'Context',
          paragraphs: [
            'AAAQuest starts from a very concrete friction in design and handoff: accessibility usually arrives too late, through slow audits, overly technical language, or scattered reviews across tools.',
            'The public promise of the product is straightforward: analyse screens, generate documentation, and speed up the design workflow through monthly credits and API access.',
            'On the current site it is positioned as an AI layer for product accessibility, focused on documenting faster and turning a screenshot or design into something understandable for design, product, and engineering.',
          ],
        },
        {
          title: 'Product proposition',
          paragraphs: [
            'The home page frames the value in one line: document accessibility in seconds. The tool detects issues according to WCAG criteria and generates documentation ready for development with AI support.',
            'That changes the output model: instead of a technical issue list, the product tries to produce context, severity, structure, and documentation that can be shared and exported directly.',
          ],
          points: [
            'Accessibility audit in seconds.',
            'Documentation ready for development.',
            'Multi-platform analysis for web, native mobile, and PDFs.',
            'Unified content to generate consistent documentation over time.',
          ],
        },
        {
          title: 'Main flow',
          body: 'The commercial experience is explained as a short three-step flow designed to reduce friction from the first use.',
          points: [
            'Upload a screen: screenshot, mockup, or Figma frame.',
            'AI analyses against WCAG: it detects issues, context, and severity in seconds.',
            'Share and export: it returns a documented screen ready to share as a PDF.',
          ],
        },
        {
          title: 'Product surfaces',
          paragraphs: [
            'AAAQuest is not presented as a simple checker. The product combines several layers to cover learning, practice, and documentation within the same ecosystem.',
            'In the public launch on LinkedIn, the beta was described as an AI-based learning and accessibility-audit tool, with study mode and automated documentation from screenshots.',
          ],
          points: [
            'Study mode with 10 foundational learning levels generated by AI.',
            'Quick accessibility tests with 20 questions.',
            'Accessibility detector to document a screenshot.',
            'Final certificate to visualise progress and share the experience.',
            'Figma plugin in preparation to document accessibility without leaving design.',
          ],
        },
        {
          title: 'Differentiation',
          paragraphs: [
            'The public product information insists on an important idea: tools like Axe, Wave, or Lighthouse are useful for scanning code, but they do not understand the visual context before implementation.',
            'AAAQuest tries to cover that gap by analysing the interface image first, helping teams document modals, tables, hierarchy, focus, states, and other components before the work reaches engineering.',
          ],
        },
        {
          title: 'Model and operations',
          paragraphs: [
            'The product already includes account, billing, and plan logic, with a free trial and a custom route for teams or more advanced operations.',
            'Current site messaging revolves around monthly quotas, available credits, and API-key usage for integrations, which suggests a clear direction toward a usable product rather than a technical demo.',
          ],
          points: [
            'Free trial with limited analyses to validate initial value.',
            'Custom plan for teams and higher usage volume.',
            'PDF export as the main handoff output.',
            'API key and account area for plans, billing, and invoicing.',
          ],
        },
      ],
    },
  },
  coubber: {
    es: {
      category: 'Caso de estudio',
      role: 'Diseño de producto',
    },
    en: {
      category: 'Case study',
      role: 'Product Design',
      subtitle: 'Sports tech platform for analysis and reporting',
      summary:
        'A platform that automates sports-performance analysis and turns highly manual assessment workflows into clear, actionable reports in seconds.',
      description:
        'Coubber Data Studio connects multiple devices, centralises metrics, and uses AI to help coaches, physiotherapists, and clubs make faster decisions with less operational friction.',
      headline:
        'Analyse data and generate reports in seconds with a platform that centralises devices, automates workflows, and supports decisions with AI.',
      facts: [
        { label: 'Type', value: 'B2B platform for sports-performance analysis and rehabilitation' },
        { label: 'Product', value: 'Coubber Data Studio' },
        { label: 'Role', value: 'Product Design' },
        { label: 'Industry', value: 'SportsTech, data analytics, and performance' },
        { label: 'Status', value: 'MVP under validation with sector professionals and preparing for commercial launch' },
      ],
      detailSections: [
        {
          title: 'Context',
          paragraphs: [
            'Coubber proposes a software layer for a very concrete problem in sportstech: there are more devices, more measurements, and more athletes than ever, but the time required to import, interpret, and turn that data into decisions is still too high.',
            'The public proposition is centred on automating sports-data analysis and injury rehabilitation so professionals and organisations can work with clearer, more visual, and more actionable information.',
            'According to public information shared on LinkedIn, the product is already developed and is in a validation phase with professionals while the team prepares the commercial launch.',
          ],
        },
        {
          title: 'Value proposition',
          paragraphs: [
            'The main promise of Coubber Data Studio is to drastically reduce the operational time required for a full sports assessment, moving from processes that could take up to 90 minutes to reports generated in seconds.',
            'The site positions the platform as a single place where multiple devices, advanced automations, and AI supported by science and objective data come together.',
          ],
          points: [
            'Up to 99% more efficiency in repetitive work, according to product messaging.',
            'Report generation in 30 seconds.',
            'Compatibility with more than 7 types of measurement devices.',
            'A catalogue of more than 45 tests for sports evaluation.',
          ],
        },
        {
          title: 'How it works',
          body:
            'The product architecture is explained as a continuous chain that moves from data input to professional interpretation and the resulting action.',
          points: [
            'Automatic data import through CSV, PDF, Excel, Sheets, or manual entry.',
            'Automatic extraction and analysis with proprietary algorithms.',
            'Visualisation through dashboards and dynamic charts.',
            'Interpretation supported either by AI or manual professional judgement.',
            'Automatic generation of descriptive, advanced, and customisable reports.',
            'Suggestions for planning, periodisation, and prescriptions based on objective data and current scientific literature.',
          ],
        },
        {
          title: 'Key capabilities',
          paragraphs: [
            'Beyond the main dashboard, the product is presented as a modular tool designed so professionals do not only read data, but also compare scenarios, standardise assessments, and build their own protocols.',
          ],
          points: [
            'Builder for tests, evaluations, and protocols.',
            'Comparison between metrics, sessions, or athletes.',
            'Access to Cubby, Coubber’s AI.',
            'Admin profiles for professionals and athletes.',
            'Readiness tracking.',
            'Load monitoring and follow-up.',
          ],
        },
        {
          title: 'Who it serves',
          paragraphs: [
            'Coubber’s communication is not limited to one user type. The platform is positioned as working infrastructure for strength coaches, rehabilitation specialists, physiotherapists, training centres, clubs, and also university or research contexts.',
            'That breadth makes sense because the main benefit is not only measuring better, but centralising information, reducing interpretation errors, and freeing time for higher-value work such as prescription, planning, and decision-making.',
          ],
        },
        {
          title: 'Market signal',
          paragraphs: [
            'The public presence of the project shows a startup still in an early stage but already very focused on sector validation. Its LinkedIn communication describes a clear vision: simplify, automate, and connect sports-performance analysis.',
            'They also explain that MVP tests are already happening with recognised performance and rehabilitation centres in Europe, that there is interest from reference sports clubs, and that the ambition is to become the data-analysis standard for performance professionals.',
          ],
        },
      ],
    },
  },
  lowerton: {
    es: {
      category: 'Caso de estudio',
      role: 'Diseño UX/UI y producto',
      subtitle: 'Plataforma de innovación asistida por IA',
      summary:
        'Una plataforma para ordenar procesos de innovación, conectar con partners y convertir objetivos estratégicos en flujos accionables.',
      description:
        'Lowerton centraliza la definición de proyectos, la relación con proveedores y el seguimiento de KPIs dentro de una experiencia pensada para equipos de innovación.',
      headline:
        'Optimiza transformación digital y sostenibilidad con IA, conectando empresas con startups y consultoras dentro de un mismo flujo de innovación.',
      facts: [
        { label: 'Tipo', value: 'Spin-off desarrollado para Lowerton, startup especializada en gestión de innovación' },
        { label: 'Rol', value: 'Diseño UX/UI y producto' },
        { label: 'Industria', value: 'Cloud computing, industria 4.0, transformación digital y sostenibilidad' },
      ],
      highlights: ['Sistema centralizado de ideación', 'Scouting de soluciones', 'Gestión de proyectos'],
      detailSections: [
        {
          title: 'El reto',
          paragraphs: [
            'Muchas empresas, especialmente pymes, están cada vez más presionadas para innovar, pero chocan con costes altos de consultoría y con procesos poco eficientes. Las grandes compañías suelen sufrir redundancias y lentitud en la gestión de innovación, mientras que las pequeñas no tienen herramientas para competir al mismo nivel.',
            'El reto era claro: necesitaban una forma de centralizar y automatizar su gestión de innovación, reduciendo costes y aumentando eficiencia.',
          ],
        },
        {
          title: 'La solución',
          paragraphs: [
            'Lowerton nació como una plataforma de innovación apoyada en IA, pensada para ayudar a empresas de distintos tamaños a ordenar todo su proceso de innovación.',
            'El producto centraliza desde la identificación de necesidades hasta la búsqueda de soluciones y la gestión de proyectos. Con apoyo de IA, la innovación se vuelve más accesible, más rentable y más escalable.',
          ],
        },
        {
          title: 'Research',
          paragraphs: [
            'La fase de research incluyó entrevistas con stakeholders de empresas españolas e internacionales. Esas conversaciones fueron clave para entender los problemas específicos que encuentran al gestionar innovación.',
            'Trabajamos de cerca con perfiles decisores y con potenciales clientes para iterar el concepto y ajustar el MVP a partir de su feedback. Ese proceso continuo nos permitió afinar el enfoque y asegurarnos de que la plataforma respondía a problemas reales.',
          ],
        },
        {
          title: 'Resultados del research',
          body:
            'Tres áreas funcionales se convirtieron en la base de la primera hoja de ruta y guiaron los wireframes iniciales usados para visualizar la interfaz.',
          points: [
            'Un portal donde empleados y stakeholders pueden proponer ideas y votar las más relevantes.',
            'Una herramienta para buscar startups y soluciones tecnológicas alineadas con necesidades de negocio.',
            'Un dashboard centralizado para seguir iniciativas, documentación, clientes y estados de proyecto en un solo lugar.',
            'Estas funciones dieron forma a la primera hoja de ruta y aportaron estructura a los wireframes iniciales.',
          ],
        },
        {
          title: 'Flujos de usuario',
          paragraphs: [
            'Antes de crear el prototipo fue clave definir flujos claros para los distintos roles dentro de Lowerton, asegurando que nada importante quedara fuera durante la fase de diseño.',
            'Los flujos garantizaron que cada rol pudiera navegar con facilidad, acceder a sus funciones relevantes y completar tareas sin fricción, manteniendo una experiencia intuitiva y coherente.',
            'Esa base permitió estructurar la plataforma para que fuera clara y eficiente para todos los perfiles implicados.',
          ],
          points: [
            'Innovation managers: crean y siguen proyectos, definen KPIs y gestionan proveedores.',
            'Vendors: envían propuestas, responden a RFPs y revisan estado de proyectos.',
            'Reviewers: evalúan ideas y propuestas, y aportan feedback según criterios definidos.',
          ],
        },
        {
          title: 'Wireframes y prototipos',
          paragraphs: [
            'El siguiente paso fue construir wireframes y convertirlos en prototipos interactivos. El foco estuvo en una interfaz minimalista, donde cada componente fuera funcional y fácil de usar sin saturar al usuario con complejidad innecesaria.',
          ],
        },
        {
          title: 'Iteración y testing',
          paragraphs: [
            'Una vez creados los primeros prototipos, entramos en varias rondas de iteración, validando diseño con clientes y con el propio equipo para asegurar viabilidad de MVP.',
            'Uno de los aprendizajes clave fue la necesidad de mostrar con claridad el progreso de proyectos mediante un sistema integrado de KPIs e hitos. Ajustamos dashboards y formularios hasta que cada funcionalidad resultó accesible, clara y coherente con el resto del MVP.',
          ],
        },
        {
          title: 'El MVP',
          tone: 'blue',
          paragraphs: [
            'La solución final de Lowerton es una plataforma integrada de gestión de innovación que permite a las empresas ordenar todo el ciclo de innovación de forma eficiente, accesible y escalable.',
            'Desde la identificación de necesidades hasta la implementación de soluciones, Lowerton acompaña cada etapa automatizando tareas clave y centralizando información en un único entorno.',
            'Esta versión es solo el inicio. Las siguientes iteraciones están preparadas para integrar más IA, machine learning y herramientas colaborativas que ayuden no solo a gestionar innovación, sino también a anticipar necesidades del mercado.',
            'Lowerton es más que una plataforma: es una herramienta pensada para ayudar a las empresas a liderar innovación, seguir siendo competitivas y adaptarse rápido al cambio tecnológico.',
          ],
          points: [
            'Dashboard centralizado con vista en tiempo real de progreso, KPIs y colaboración con startups y proveedores.',
            'Evaluación automatizada de ideas con IA según impacto y viabilidad.',
            'Scouting automatizado para encontrar soluciones y vendors alineados con la necesidad de la empresa.',
            'Creación de business needs para capturar oportunidades que luego se conviertan en proyectos.',
            'Gestión de proyecto end to end, desde documentación hasta comunicación y firma de contratos.',
          ],
        },
      ],
    },
  },
  closy: {
    es: {
      category: 'Caso de estudio',
      role: 'Diseño UX/UI',
      industry: 'Bienestar relacional',
      headline:
        'La capacidad humana de conectar se ve amenazada por la tecnología y el aislamiento, afectando relaciones realmente significativas.',
      facts: [
        { label: 'Tipo', value: 'App end to end + branding' },
        { label: 'Resumen', value: 'Un concepto de producto enfocado en mejorar relaciones cercanas en lugar de simplemente conectar a más personas.' },
        { label: 'Rol', value: 'Diseño UX/UI' },
        { label: 'Herramientas', value: 'Figma, FigJam, Notion, Tally, papel y lápiz' },
        { label: 'Duración', value: 'Q2 2024' },
      ],
      highlights: ['10 entrevistas y 150 respuestas', 'Value Proposition Canvas', 'Testing, revisiones y mejora de onboarding'],
      detailSections: [
        {
          title: 'El problema',
          paragraphs: [
            'Hoy enfrentarse a la soledad se ha convertido en un reto importante para muchas personas. Aunque vivimos en una era hiperconectada, mucha gente se siente más aislada que nunca, especialmente perfiles jóvenes.',
            'Ese sentimiento persistente no afecta solo al bienestar emocional. También tiene implicaciones serias para la salud física y la estabilidad personal.',
            'Por eso existe una necesidad clara de soluciones que fomenten relaciones significativas y respondan a la soledad paradójica de la era digital.',
          ],
        },
        {
          title: 'Cómo se aborda hoy',
          paragraphs: [
            'La mayoría de apps actuales intentan conectar gente nueva: Tinder, Bumble, Looplan, Meetup. Facilitan el encuentro, pero ahí suele terminar la experiencia.',
            'A menudo esas nuevas conexiones se pierden con el tiempo porque no reciben suficiente cuidado.',
            'Ahí aparece el hueco: las apps actuales están centradas en cantidad, no en ayudar a profundizar y cuidar los vínculos que ya existen.',
            'Closy se sitúa justo en esa oportunidad: ayudar a cultivar y mantener las relaciones más valiosas.',
          ],
        },
        {
          title: 'Plan de research e entrevistas',
          paragraphs: [
            'El proceso de entrevistas arrancó con un research plan que recogía contexto de proyecto, objetivos de investigación, preguntas, metodologías e hipótesis.',
            'Se exploró cómo percibe la gente la soledad, cómo la gestiona hoy, qué espera de nuevas soluciones y cómo influyen las dinámicas sociales en ese aislamiento.',
            'Las entrevistas se realizaron tanto en persona como por canales digitales durante una semana, y la información terminó condensada en un informe final.',
            'En total se realizaron 10 entrevistas en un tiempo muy corto.',
          ],
          points: ['Contexto del proyecto', 'Objetivos de research', 'Objetivos específicos', 'Preguntas de investigación', 'Metodologías', 'Hipótesis'],
        },
        {
          title: 'Cuestionario e insights clave',
          paragraphs: [
            'Se distribuyó un cuestionario a jóvenes de España y Latinoamérica y se obtuvieron 150 respuestas. Se eligió Tally por combinar buena visualización de datos con una experiencia de respuesta atractiva.',
            'Los resultados se volvieron clave tanto para el análisis como para la dirección del proyecto.',
          ],
          points: [
            'Los resultados confirman que muchas personas sufren soledad.',
            'Los hallazgos apoyan la idea de Robin Dunbar sobre un círculo cercano limitado, alrededor de cinco relaciones significativas.',
            'La gente tiende a aislarse, lo que dificulta mantener relaciones a largo plazo.',
            'Una mayoría relevante reconoce que se olvida de responder mensajes.',
            'Muchos usuarios no hacen seguimiento de los contactos con los que deberían hablar.',
            'Una parte importante siente culpa por no mantener contacto con personas cercanas.',
          ],
        },
        {
          title: 'Los 5 porqués y propuesta de valor',
          paragraphs: [
            'Tras aplicar la técnica de los 5 porqués y revisar entrevistas y encuestas, el descuido de las relaciones apareció como el problema principal detrás de la frustración de los usuarios.',
            'Ese hallazgo redirigió la solución hacia reforzar vínculos personales y facilitar el mantenimiento de relaciones de una forma práctica y sostenible.',
            'El Value Proposition Canvas ayudó después a definir la promesa central: ayudar a jóvenes que sienten soledad a mejorar sus relaciones profundizando en su círculo social cercano.',
          ],
        },
        {
          title: 'Site map, task flow y user flow',
          paragraphs: [
            'Antes de bajar la interfaz, el proyecto se organizó casi como un manual: site map, task flow, user flow y wireframes low-fi.',
            'El site map aclaró la organización de funcionalidades y fijó una estructura lógica y accesible, donde llegar a cada función requiriera el menor número posible de pasos.',
            'Los task flows definieron el camino exacto de inicio a fin en acciones clave, asegurando que existieran todas las pantallas necesarias antes de entrar en hi-fi.',
            'El user flow ayudó a colocar cada funcionalidad en el wireframe correcto y a mantener el sistema coherente desde el principio.',
            'Los wireframes low-fi comenzaron en papel y más tarde se trasladaron a Figma para afinar estructura, tamaño y funcionalidad antes del diseño final.',
          ],
          points: ['Site map', 'Task flow', 'User flow', 'Wireframes low-fi'],
        },
        {
          title: 'Moodboard, logo y wireframes hi-fi',
          tone: 'blue',
          paragraphs: [
            'El punto de cruce del doble diamante llegó cuando se juntaron research y creatividad: moodboard, logo, UI kit, wireframes hi-fi y prototipo v1.',
            'La dirección visual apostó por un jardín vivo, con verdes que transmiten paz y crecimiento sin caer en un tono infantil.',
            'La tipografía se articuló alrededor de Outfit, elegida por equilibrar alegría y seriedad y utilizada como parte del sistema completo de marca.',
            'La identidad visual evolucionó desde un concepto más abstracto hacia una metáfora vegetal, terminando en un naming y logo directamente conectados con esa idea.',
            'En hi-fi, cada detalle cobró vida a través de color, tipografía e interacción, manteniendo coherencia con el tono emocional del producto y sus restricciones mobile-first.',
          ],
        },
        {
          title: 'User testing',
          paragraphs: [
            'El testing se hizo mediante entrevistas presenciales uno a uno utilizando el prototipo móvil para revisar en profundidad cada funcionalidad diseñada.',
            'El objetivo era validar la intuición de navegación e interacción, con atención especial a posibles problemas de accesibilidad y a elementos que habían generado dudas durante el prototipado.',
          ],
          points: [
            'Participante 1: diseñadora de producto junior, 30 años, vive en Barcelona y es muy despistada con sus relaciones.',
            'Participante 2: diseñadora UX de 25 años, vive en Barcelona, círculo social pequeño y diagnóstico de autismo.',
            'Participante 3: diseñadora UX/UI de 30 años en Barcelona, condicionada por estrés laboral y encuentros sociales accidentales.',
          ],
        },
        {
          title: 'Insights y revisiones',
          paragraphs: [
            'Los usuarios valoraron mucho las ilustraciones y el diseño general de la app, especialmente su tono minimalista y armónico.',
            'Al mismo tiempo aparecieron dudas en algunos elementos, como las barras de las plantas, la mecánica de retos o el sistema de niveles, además de problemas de retención de información tras el onboarding.',
            'Esos hallazgos se tradujeron en revisiones concretas para clarificar interfaz y reducir fricción en los loops principales del producto.',
          ],
          points: [
            'Optimización del onboarding para mejorar claridad y retención.',
            'Clarificación de elementos y acciones confusas dentro de la app.',
            'Más opciones de personalización para cada planta.',
            'Actualización del onboarding al color principal de marca para una bienvenida más cálida y coherente.',
            'Eliminación de la barra de estado en la pantalla de planta, porque se confundía con un nivel.',
            'Rediseño del tutorial de riego para que la acción y su motivo fueran evidentes.',
            'Añadido de filtros por nivel, nombre, tipo y estado, además de un recuento semanal de acciones por planta en home.',
          ],
        },
      ],
    },
  },
  mycoach: {
    es: {
      category: 'Caso de estudio',
      role: 'Diseño de producto y MVP',
    },
    en: {
      category: 'Case study',
      role: 'Product Design & MVP',
      subtitle: 'Platform for personalised routines and mesocycles',
      summary:
        'A platform for creating personalised hypertrophy, Hyrox, and CrossFit routines through physical analysis, real context, and a guided progression flow.',
      description:
        'MyCoach combines prior analysis, a dynamic questionnaire, and Excel export so coaches can build editable mesocycles that evolve according to feedback, fatigue, and available equipment.',
      headline:
        'A platform that builds personalised routines and mesocycles from the athlete’s real context rather than from generic templates.',
      facts: [
        { label: 'Type', value: 'Personalised sports-planning platform' },
        { label: 'Role', value: 'Product Design & MVP' },
        { label: 'Industry', value: 'Fitness, digital coaching, and performance' },
        { label: 'Format', value: 'Landing page plus guided routine-creation flow' },
        { label: 'Website', value: 'mycoach-27z4.onrender.com' },
      ],
      detailSections: [
        {
          title: 'Context',
          paragraphs: [
            'MyCoach presents itself as a platform for creating personalised routines and exportable mesocycles, with a strong focus on hypertrophy, strength, and hybrid performance for disciplines such as CrossFit, Hyrox, and powerlifting.',
            'The proposition rejects the idea of a generic routine and argues that planning should come from the person’s real context: history, objective, feelings, fatigue, available equipment, and prior physical analysis.',
          ],
        },
        {
          title: 'Value proposition',
          paragraphs: [
            'The main promise is to design a personalised routine based on contextual analysis, clear tables, and editable Excel export to track progress.',
            'The landing positions the system as a way to train with elite logic, supported by three pillars: physical analysis, personalised routine, and an operational export of the plan.',
          ],
          points: [
            'Physical analysis using images or video to detect asymmetries, dominant patterns, and real priorities.',
            'Routine built from history, goal, sensations, available equipment, and current context.',
            'Excel export to record loads, reps, RIR, and mesocycle evolution.',
          ],
        },
        {
          title: 'Product flow',
          paragraphs: [
            'The public MyCoach experience is structured as a guided process. The landing summarises it in four moments: context, physical analysis, personalised questionnaire, and editable routine.',
            'The /plan route already shows a more concrete implementation of that flow as a six-step form that starts with personal and sport-related data.',
          ],
          points: [
            'Visible first step with gender, height, weight, and years of training.',
            'Preferences such as diet and main objective.',
            'Selection of disciplines such as bodybuilding, Hyrox, CrossFit, powerlifting, calisthenics, running, swimming, or pilates.',
            'A short and not overly technical form that can shape structure, volume, and exercise selection.',
          ],
        },
        {
          title: 'Mesocycle and follow-up',
          paragraphs: [
            'An important aspect of the product is that it is not sold as a one-off routine but as a full mesocycle: several weeks with real progression, clear goals, and block-by-block structure.',
            'The site itself explains that once the cycle ends, the user introduces context and feedback again to generate a new routine adapted to day-to-day evolution.',
            'That makes the Excel export an operational part of the system, not just a final deliverable.',
          ],
        },
        {
          title: 'Performance logic',
          paragraphs: [
            'The product narrative insists on advanced periodisation aimed at preventing fatigue from hurting hypertrophy gains while still improving cardiovascular output and hybrid capacity.',
            'That combination of body-composition and performance goals is what differentiates MyCoach from a simple exercise-table generator.',
          ],
        },
        {
          title: 'Product direction',
          paragraphs: [
            'From a positioning point of view, MyCoach tries to sound less like a gym template and more like a personalised decision-making tool for athletes. The brand, tone, and information structure all push that reading.',
            'The platform already combines a clear editorial landing with a functional builder, which shows an MVP direction with real intent of use rather than a purely visual demo.',
          ],
        },
      ],
    },
  },
  vworld: {
    es: {
      category: 'Caso de estudio',
      role: 'Diseño UX/UI y producto',
      facts: [
        { label: 'Tipo', value: 'Proyecto spin-off de aplicación social' },
        { label: 'Resumen', value: 'Como respuesta a la caída de BeReal, VWorld reactiva el interés global mediante retos diarios que conectan a usuarios de todo el mundo.' },
        { label: 'Rol', value: 'Diseño UX/UI y producto' },
        { label: 'Herramientas', value: 'Figma, FigJam, Tally, Canva, Notion, papel y lápiz' },
        { label: 'Duración', value: 'Q1 2024' },
      ],
      highlights: ['Datos clave de BeReal', 'Datos de validación', 'Crecimiento, retención y partnerships'],
      headline: 'La red social que transforma el panorama digital en un juego social.',
      detailSections: [
        {
          title: 'Resumen',
          paragraphs: [
            'Como respuesta al declive de BeReal, VWorld surge para reactivar el interés global y construir una comunidad fuerte a través de retos diarios que conectan a usuarios de todo el mundo.',
            'El concepto reinventa la interacción online promoviendo un juego social que redefine cómo se comporta la gente en redes.',
          ],
        },
        {
          title: 'El problema de BeReal',
          paragraphs: [
            'BeReal llamó la atención en 2022 al ofrecer una alternativa genuina y espontánea en un entorno saturado de contenido curado. Su mecánica principal, la ausencia de publicidad y el foco en comunidad la llevaron a 73,5 millones de usuarios activos en agosto de 2022.',
            'Sin embargo, desde principios de 2023 la app mostró signos de estancamiento y caída. Los usuarios activos bajaron hasta 18 millones en un año, un descenso del 75,51% respecto a su pico.',
            'Entre las causas estuvieron la aparición de funciones similares en Instagram y TikTok, la falta de novedades y un modelo de negocio poco consolidado.',
            'BeReal se enfrenta así a un reto crítico: adaptarse, innovar y definir un modelo capaz de sostener sus valores de autenticidad y comunidad.',
          ],
        },
        {
          title: 'La solución',
          tone: 'blue',
          paragraphs: [
            'VWorld se plantea como una extensión innovadora de BeReal, diseñada para aportar juego y conexión global entre usuarios mientras amplifica la autenticidad con un enfoque más lúdico y comunitario.',
            'La app convierte cada día en una aventura con retos aleatorios que se pueden vivir tanto individualmente como en grupo, generando una avalancha social que invita a más personas a participar.',
            'Invita a sumarse a retos diarios y persigue una energía colectiva parecida a la que hicieron memorables experiencias como Pokémon Go.',
            'El nombre “VWorld” mezcla “versus” y “world”, reflejando su esencia de reto global. También abre la puerta a creadores o marcas con audiencia que quieran ampliar alcance de una forma diferente.',
            'Pensada para que cualquiera pueda viralizarse llevando los retos al extremo, VWorld promueve creatividad e interacción auténtica, diferenciándose de otras plataformas.',
          ],
        },
        {
          title: 'Cuestionario y validación',
          paragraphs: [
            'Se diseñó y distribuyó un cuestionario a través de Tally, elegido tanto por su visualización de datos como por la facilidad de respuesta.',
            'Se obtuvieron 50 respuestas con una media de edad de 25 años, construyendo una muestra representativa del público objetivo.',
            'La encuesta validó la idea principal de gamificar la experiencia de BeReal y confirmó que mantener notificaciones aleatorias favorecería una participación espontánea en actividades diarias.',
          ],
        },
        {
          title: 'User persona',
          paragraphs: [
            'La user persona se creó combinando análisis de competencia con respuestas de la encuesta, generando un perfil guiado por datos y no una proto-persona puramente intuitiva.',
            'Eso ayudó a definir tanto motivaciones como necesidades del público objetivo, que después guiaron ideación y desarrollo.',
          ],
        },
        {
          title: 'How Might We...?',
          paragraphs: [
            'Desde el inicio del proyecto, la idea central fue gamificar BeReal para provocar una avalancha social mientras se generaba contenido y se reforzaba la comunidad.',
            'La estrategia HMW ayudó a explorar alternativas antes de decidir integrar el sistema de gamificación directamente dentro de la lógica de BeReal.',
            'Esa decisión encajaba con el objetivo de fomentar engagement continuo y significativo, evitando la superficialidad típica de las notificaciones convencionales.',
            'Los retos gamificados no se pensaron solo para entretener, sino también para promover interacciones más auténticas y apoyo mutuo dentro de la comunidad.',
          ],
        },
        {
          title: 'Site map y task flows',
          paragraphs: [
            'Tras un ejercicio de card sorting e ideación de funcionalidades, el site map se definió como columna vertebral de la app, organizando contenido y funciones en categorías intuitivas.',
            'La estructura aseguró una experiencia fluida y natural, promoviendo interacción orgánica y consistente.',
            'Después se crearon distintos task flows, incluyendo añadir un amigo y completar un reto, para asegurar que todas las pantallas y pasos existieran antes de entrar en hi-fi.',
            'Esos flujos fueron clave para guiar al usuario con eficiencia en las tareas más importantes y reducir fricción en los loops principales.',
          ],
          points: [
            'Flujo de añadir amigo definido antes del diseño visual.',
            'Flujo de completar reto diseñado de principio a fin.',
            'Arquitectura de información construida desde benchmarks de redes sociales y necesidades de usuario.',
          ],
        },
        {
          title: 'Prototipado',
          paragraphs: [
            'Para el moodboard se eligieron elementos que evocan acción y alerta, usando amarillos y naranjas típicos de la señalética. Eso diferenciaba la app del blanco y negro de BeReal manteniendo cierta familiaridad.',
            'En tipografía se decidió mantener Inter junto con la tipografía nativa de iOS para asegurar consistencia y legibilidad en dispositivos Apple.',
            'Inicialmente la app no estaba relacionada de forma directa con BeReal, pero tras profundizar en el análisis se decidió abrazar parte de su lenguaje de marca y su simplicidad para ganar reconocimiento.',
            'El logo evolucionó directamente desde la referencia visual de BeReal, sumando colores de alerta para comunicar que ambos productos pertenecían a una misma familia conceptual.',
            'Los wireframes hi-fi se centraron en home y amigos, manteniéndose cerca de BeReal mientras rediseñaban áreas concretas para mejorar experiencia y facilitar adopción a usuarios existentes.',
            'Siguiendo el modelo de BeReal, el producto se diseñó exclusivamente para móvil para aprovechar la inmediatez que requieren los retos y el comportamiento del feed.',
          ],
        },
        {
          title: 'Lanzamiento y marketing',
          paragraphs: [
            'Para que VWorld funcionara, igual que ocurrió con BeReal, sería necesaria una inversión relevante en marketing digital y estrategias sociales, primero enfocadas en atraer nuevos usuarios y generar efecto dominó.',
            'La comunicación debería presentar la app de un modo más pedagógico y atractivo, explicando que VWorld no va de validación superficial sino de creatividad, autenticidad y salir de la zona de confort.',
          ],
          points: [
            'Foco en invitaciones y boca a boca desde usuarios activos.',
            'Colaboraciones con perfiles cuya personalidad conecte con el público objetivo.',
            'Campañas orgánicas y de pago en Instagram y TikTok, más email marketing sobre bases existentes.',
            'Eventos y concursos para reforzar participación de la comunidad.',
            'Variedad de retos para perfiles introvertidos y extrovertidos.',
            'Funciones interactivas como chats para compartir retos con amigos.',
            'Reconocimiento y recompensas por participación activa.',
            'Leaderboards para activar competitividad y aumentar engagement.',
            'Partnerships con marcas para financiar el producto sin depender de publicidad convencional.',
          ],
        },
        {
          title: 'Feedback y mejora continua',
          paragraphs: [
            'La capa post-lanzamiento se planteó desde escucha e iteración constante, tratando el feedback de la comunidad como una parte del sistema de producto.',
          ],
          points: [
            'Encuestas in-app, dinámicas grupales y análisis de comentarios en stores.',
            'Seguimiento activo del feedback en redes sociales, donde los usuarios comparten experiencias y sugerencias de forma informal.',
            'Equipo dedicado a mejorar el producto a partir de sugerencias de usuario.',
            'Centro de ayuda online con respuestas a preguntas frecuentes y soporte.',
            'Campañas de reactivación mediante email y push notifications para usuarios inactivos.',
          ],
        },
      ],
    },
  },
  'meeting-room-booking-app': {
    es: {
      category: 'Diseño conceptual',
      role: 'Diseño conceptual UX/UI',
      subtitle: 'Prototipo',
      summary:
        'Un flujo claro para reservar salas en oficinas grandes sin perder tiempo entre disponibilidad, cercanía y gestión de reservas.',
      headline:
        'Meeting Room Booking App simplifica la reserva de salas en oficinas grandes mediante flujos rápidos, en tiempo real y fáciles de gestionar.',
      facts: [
        { label: 'Tipo', value: 'Prototipo' },
        { label: 'Rol', value: 'Diseño conceptual UX/UI' },
        { label: 'Entorno', value: 'Oficinas grandes con múltiples salas y reservas urgentes a corto plazo' },
      ],
      highlights: ['Disponibilidad en tiempo real', 'Atajo Quick Book', 'Gestión de reservas'],
      detailSections: [
        {
          title: 'Resumen',
          paragraphs: [
            'Este proyecto se centra en diseñar una app de reserva de salas para oficinas grandes, permitiendo comprobar disponibilidad en tiempo real y reservar espacios de forma rápida y eficiente.',
            'La app soporta tanto reservas urgentes como reservas a corto plazo, alrededor de 10 o 15 minutos, gestionando múltiples salas en distintas localizaciones.',
            'La flexibilidad y la simplicidad fueron centrales: se puede filtrar por disponibilidad, reservar al instante, gestionar reservas y revisar detalles como ubicación o salas alternativas.',
            'El MVP se diseñó para cubrir necesidades inmediatas de grandes organizaciones dejando margen para escalar después.',
          ],
        },
        {
          title: 'Bloqueo low-fi',
          body:
            'Antes de entrar en UI pulida, la estructura se planteó como un conjunto reducido de pantallas centradas en una promesa operativa: ver disponibilidad, reservar rápido y gestionar la reserva sin ambigüedad.',
          paragraphs: [
            'Los wireframes iniciales ya priorizaban lista de salas, cercanía, duración y reservas en curso. Eso mantuvo el alcance muy pegado a la presión real de la oficina, donde muchas reservas ocurren sobre la marcha y la velocidad pesa más que la exploración.',
            'Esta primera capa también ayudó a decidir qué debía vivir en home, qué debía ser progresivo y qué solo debía aparecer tras seleccionar una sala.',
          ],
        },
        {
          title: 'Site map',
          body:
            'El site map organiza el viaje desde encontrar una sala disponible hasta gestionar una reserva existente, haciendo visibles los caminos principales desde la primera pantalla.',
          points: [
            'Home: lista de salas con disponibilidad en tiempo real.',
            'Quick Book: atajo para reservar una sala al instante.',
            'My Bookings: vista y gestión de reservas actuales y pasadas.',
            'Reserve Room: selección de sala específica y duración.',
            'Cancel Reservation: cancelación de una reserva existente.',
            'Search Rooms: filtro por disponibilidad o equipamiento.',
            'Booking Details: información de sala y opciones para modificar la reserva.',
          ],
        },
        {
          title: 'Flujo de reserva rápida',
          paragraphs: [
            'La interacción central del producto es la velocidad. La acción principal de navegación está dedicada a reservar una sala cercana en la planta actual, reduciendo tiempo hasta la acción en situaciones urgentes o reuniones internas cortas.',
            'Desde la lista de salas, la persona pasa por una secuencia progresiva: sala seleccionada, duración, hora y confirmación. Esto descompone un proceso potencialmente pesado en decisiones ligeras y fáciles de escanear en móvil.',
            'El flujo también obliga a que las cards de sala hagan trabajo real: muestran ubicación, capacidad, equipamiento y estado de disponibilidad antes incluso de abrir el detalle.',
          ],
          points: [
            'Reservas próximas y salas disponibles ahora visibles desde la primera pantalla.',
            'Duración y hora separadas en dos decisiones consecutivas.',
            'CTA central estable a lo largo de toda la secuencia.',
            'Reservas urgentes posibles sin navegar el inventario completo.',
          ],
        },
        {
          title: 'Detalle de sala y gestión de reserva',
          paragraphs: [
            'Una vez confirmada la reserva, la vista de detalle se convierte en la capa operativa del producto. Responde a lo que importa después: dónde está la sala, qué equipamiento tiene, cuánto dura la reserva y qué se puede cambiar.',
            'Eso hace que la app sea útil también después del momento de reserva. No es solo un flujo de booking; también es una herramienta ligera de gestión para rutinas de oficina con poco tiempo.',
            'La combinación de imagen, facilities, ubicación y acciones explícitas reduce incertidumbre y da suficiente contexto para tomar decisiones rápidas si hace falta cambiar algo.',
          ],
          points: [
            'Foto de sala y capacidad visibles desde el primer vistazo.',
            'Facilities agrupadas en tarjetas de icono simples.',
            'Ubicación y contexto de uso reducen fricción de wayfinding.',
            'Cancelar o reprogramar se mantiene visible en lugar de ocultarse en menús.',
          ],
        },
        {
          title: 'Diseño final',
          tone: 'blue',
          paragraphs: [
            'El botón central de la navegación está dedicado a reservar rápidamente una sala cercana en la planta actual, reduciendo tiempo a la acción en situaciones urgentes.',
            'En home se ven reservas próximas, salas disponibles en ese momento y una lista completa de salas. Cada sala muestra ubicación, capacidad y equipamiento disponible.',
            'Para reservar, la persona elige duración, fecha y hora, y se envía un recordatorio 15 minutos antes de la reunión.',
            'Para gestionar la reserva, se puede cancelar con swipe o desde la ficha de la sala, y también modificar fecha y hora desde el mismo flujo.',
          ],
        },
      ],
    },
    en: {
      category: 'Concept design',
    },
  },
  'inventory-screen-pixel-art-game': {
    es: {
      category: 'Diseño conceptual',
      role: 'Diseño conceptual UX/UI',
      subtitle: 'Diseño conceptual de funcionalidad',
      summary:
        'Un inventario para un juego mobile pixel art con crafting, rarezas y trade entre amigos, diseñado para seguir siendo legible incluso con mucha densidad de información.',
      headline:
        'Un inventario mobile pixel art diseñado para ser intuitivo, escalable y legible incluso con mucha información en pantalla.',
      facts: [
        { label: 'Tipo', value: 'Diseño conceptual de funcionalidad' },
        { label: 'Rol', value: 'Diseño conceptual UX/UI' },
        { label: 'Formato', value: 'Mobile apaisado para un adventure platformer pixel art' },
      ],
      highlights: ['Crafting y filtros por rareza', 'Interacciones fluidas de inventario', 'Dirección pixel art con usabilidad actual'],
      detailSections: [
        {
          title: 'Resumen',
          paragraphs: [
            'Como parte de un reto UX, el objetivo era diseñar un sistema de inventario completo para un juego mobile en formato landscape, dentro de un platformer de aventura con estética pixel art.',
            'La meta era crear un inventario intuitivo y escalable que resolviera las necesidades inmediatas del juego pero siguiera siendo flexible para futuras expansiones.',
            'El diseño debía soportar distintos tipos de item, como cofres, fragmentos o caramelos, cada uno con interacciones propias como abrir, fusionar o compartir con amigos.',
            'La experiencia general se apoyó mucho en referencias indie para conservar nostalgia sin perder usabilidad actual.',
          ],
        },
        {
          title: 'Reto UX',
          paragraphs: [
            'El reto exigía un trabajo fino de experiencia de usuario, incluyendo user flows, wireframes y un diseño final de alta fidelidad que resolviera varios problemas de UX.',
            'La interfaz tenía que mantener fluidez, jerarquía clara y flexibilidad para acciones diferentes sin perder legibilidad cuando la densidad de información subía.',
          ],
          points: [
            'La pantalla debía seguir siendo legible pese a una alta densidad de información.',
            'Cada tab requería una lógica de interacción distinta dentro de un mismo shell.',
            'Crafting, apertura, equipamiento y compartir necesitaban affordances diferentes.',
            'La estética pixel art debía convivir con patrones de usabilidad contemporáneos.',
          ],
        },
        {
          title: 'Research',
          paragraphs: [
            'La fase de research incluyó análisis de varios juegos en PC, móvil y tablet para detectar buenas prácticas en sistemas de gestión de inventario.',
            'Ese benchmark ayudó a encontrar el equilibrio final entre fantasía de juego, legibilidad y patrones de UI escalables.',
          ],
        },
        {
          title: 'Arquitectura del inventario',
          paragraphs: [
            'La interfaz final se organiza como un shell estable con navegación persistente entre personaje, equipo, cofres, amigos y ajustes. Eso mantiene el modelo mental simple aunque cada tab resuelva una tarea distinta.',
            'Dentro de ese shell, cada estado está optimizado para una acción concreta: equipo pone el foco en el avatar y los slots activos, cofres en abrir y recoger, crafting en explicar combinaciones, y compartir en separar items propios de los transferidos.',
            'Esa separación ayuda a preservar claridad mientras hace que el sistema completo se sienta cohesionado y propio del juego.',
          ],
        },
        {
          title: 'UI final y lógica de interacción',
          tone: 'blue',
          paragraphs: [
            'La UI final mantiene referencias claras al imaginario fantasy, pero evita la sobrecarga ornamental. Cada acción tiene tamaño suficiente para leerse rápido, la jerarquía entre tabs e items es explícita y la tarea activa siempre se entiende.',
            'Ese equilibrio entre nostalgia y usabilidad es el valor principal del proyecto: el inventario se siente juguetón y propio del medio, pero se comporta como un sistema de producto estructurado.',
          ],
        },
      ],
    },
    en: {
      category: 'Concept design',
    },
  },
  'joining-made-simple-private-group': {
    es: {
      category: 'Diseño conceptual',
      role: 'Diseño conceptual UX/UI',
    },
    en: {
      category: 'Concept design',
      role: 'UX/UI Concept Design',
      headline: 'A landing concept that makes entering a private group feel clearer, friendlier, and more direct.',
      facts: [
        { label: 'Type', value: 'Webpage concept design' },
        { label: 'Role', value: 'UX/UI Concept Design' },
      ],
      detailSections: [
        {
          title: 'Goal',
          body:
            'Reduce the initial friction of a private-access flow and turn it into an experience that feels clearer, more trustworthy, and easier to understand.',
        },
        {
          title: 'Approach',
          body:
            'The concept prioritises short copy, strong hierarchy, and a direct visual sequence that explains the group value from the very top of the page.',
        },
        {
          title: 'Outcome',
          body:
            'The piece works as a lighter entry landing page with a warmer brand tone for an access flow that is usually perceived as too cold.',
        },
      ],
    },
  },
  'local-flower-shop': {
    es: {
      category: 'Diseño conceptual',
      role: 'Diseño conceptual UX/UI',
    },
    en: {
      category: 'Concept design',
      role: 'UX/UI Concept Design',
      headline: 'An editorial landing page for a local flower shop with more warmth, stronger brand presence, and a more expressive composition.',
      facts: [
        { label: 'Type', value: 'Webpage concept design' },
        { label: 'Role', value: 'UX/UI Concept Design' },
      ],
      detailSections: [
        {
          title: 'Goal',
          body:
            'Explore a warmer ecommerce landing page that feels less generic and relies more on visual tone than on standard store structures.',
        },
        {
          title: 'Approach',
          body:
            'The work focuses on editorial composition, colour, and visual rhythm to reinforce brand personality and turn the catalogue into a more memorable experience.',
        },
        {
          title: 'Outcome',
          body:
            'The concept establishes a clear direction for a local shop that needs visual presence, not only a functional product list.',
        },
      ],
    },
  },
}

export function localizeArticleContent(entry, lang) {
  if (!entry) return entry

  const localized = deepMerge(entry, articleTranslations[entry.slug]?.[lang])
  const topicTranslation = articleTopicTranslations[localized.topic]?.[lang]

  return topicTranslation
    ? {
        ...localized,
        topic: topicTranslation,
      }
    : localized
}

export function localizeProjectContent(entry, lang) {
  if (!entry) return entry
  return deepMerge(entry, projectTranslations[entry.slug]?.[lang])
}
