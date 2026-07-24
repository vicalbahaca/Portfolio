export const inoneCase = {
  title: 'InOne',
  role: 'Principal Product Designer',
  context: 'Evolución post-lanzamiento',
  product: 'App financiera · iOS y Android',
  scope: 'Estrategia, experiencia, sistema y delivery',
  client: 'CaixaBank Payments & Consumer',
  tags: ['UX/UI', 'DESIGN SYSTEM', 'ACCESIBILIDAD', 'DESIGN OPS'],
  confidentiality:
    'Caso construido con información pública y artefactos recreados. No muestra datos internos, arquitectura técnica ni reglas sensibles.',
  headline: 'De un MVP financiero a una experiencia coherente, accesible y escalable.',
  summary:
    'Evolución post-lanzamiento de una app de pagos, tarjetas y financiación, conectando evidencia, producto, diseño y delivery.',
  introduction:
    'InOne reúne pagos, tarjetas y financiación en una única aplicación. Tras su lanzamiento, el reto era profesionalizar la experiencia sin comprometer continuidad, seguridad ni viabilidad técnica.',
  challenge:
    'El reto no era rediseñar pantallas aisladas. Había que ordenar una experiencia recién lanzada, reducir fricción, integrar accesibilidad y convertir restricciones de negocio y tecnología en una evolución viable.',
  roleSummary:
    'Trabajé desde la consultoría y el diseño para convertir necesidades de negocio y señales del mercado en decisiones ejecutables que hicieran evolucionar la aplicación.',
  collaboration: [
    'Definí un diagnóstico combinando flujos, señales de uso, soporte y restricciones del servicio.',
    'Reorganicé la arquitectura para dar prioridad a las tareas financieras más frecuentes y reducir cambios de contexto.',
    'Convertí la auditoría de accesibilidad en backlog, criterios documentados y un roadmap viable junto a tecnología.',
    'Diseñé y documenté un Design System alineado con el ecosistema CaixaBank y preparado para evolucionar por etapas.',
    'Acompañé la validación con negocio, legal, seguridad y tecnología, además del handoff y el QA de implementación.',
  ],
  tensions: [
    {
      title: 'Arquitectura fragmentada',
      description: 'Patrones y rutas poco consistentes dificultaban orientarse y encontrar las acciones importantes.',
    },
    {
      title: 'Demasiados pasos',
      description: 'Operativas frecuentes acumulaban pantallas, cambios de contexto y carga cognitiva innecesaria.',
    },
    {
      title: 'Accesibilidad pendiente',
      description: 'La auditoría debía convertirse en prioridades, documentación y criterios verificables de entrega.',
    },
    {
      title: 'Restricciones de servicios',
      description: 'La evolución tenía que ser construible sobre un ecosistema técnico complejo y poco flexible.',
    },
  ],
  evidenceMatrix: [
    {
      signal: 'Arquitectura fragmentada',
      decision: 'Reorganizar la experiencia alrededor de tareas financieras.',
      validation: 'Flujos, wireframes y revisión con producto y tecnología.',
    },
    {
      signal: 'Acciones frecuentes poco visibles',
      decision: 'Priorizar tarjeta, movimientos, pagos y financiación.',
      validation: 'Señales de uso, soporte y comparación con el ecosistema.',
    },
    {
      signal: 'Barreras de accesibilidad',
      decision: 'Integrar criterios en componentes, contenido y entregables.',
      validation: 'Documentación técnica, handoff y QA continuo.',
    },
    {
      signal: 'Dependencias de servicio',
      decision: 'Secuenciar sistema y producto mediante entregas progresivas.',
      validation: 'Viabilidad técnica y revisión multidisciplinar.',
    },
  ],
  roleLayers: [
    {
      title: 'Servicio',
      description: 'Entender el contexto completo y el efecto de cada decisión más allá de la interfaz.',
    },
    {
      title: 'Producto',
      description: 'Priorizar problemas y oportunidades combinando valor para el usuario y para el negocio.',
    },
    {
      title: 'Sistema',
      description: 'Convertir restricciones y patrones dispersos en una base coherente, accesible y escalable.',
    },
    {
      title: 'Entrega',
      description: 'Acompañar validación, desarrollo, QA y despliegue progresivo para reducir riesgo.',
    },
  ],
  stakeholders: ['Producto', 'Negocio', 'Legal', 'Seguridad', 'Tecnología', 'Atención al cliente'],
  process: [
    {
      title: 'Brief y objetivos',
      description: 'Alinear alcance, prioridades y criterios de éxito.',
    },
    {
      title: 'Datos y diagnóstico',
      description: 'Revisar señales de uso, soporte y experiencia.',
    },
    {
      title: 'Arquitectura y flujos',
      description: 'Ordenar tareas, dependencias y puntos de fricción.',
    },
    {
      title: 'Benchmark',
      description: 'Contrastar patrones del ecosistema y del sector.',
    },
    {
      title: 'Roadmap por etapas',
      description: 'Secuenciar sistema, operativas y validaciones.',
    },
    {
      title: 'Wireframes y UI kit',
      description: 'Aterrizar soluciones y validar su viabilidad.',
    },
    {
      title: 'Design System',
      description: 'Documentar componentes, estados y accesibilidad.',
    },
    {
      title: 'Entrega y QA',
      description: 'Acompañar implementación, pruebas y evolución.',
    },
  ],
  decisions: [
    {
      title: 'Navegación más simple',
      description: 'Patrones contextuales y modales redujeron profundidad sin perder control ni seguridad.',
    },
    {
      title: 'Lo importante, primero',
      description: 'Datos de tarjeta, movimientos, pagos y financiación ganaron prioridad en la experiencia.',
    },
    {
      title: 'Patrones familiares',
      description: 'La interacción se acercó al ecosistema CaixaBank para reforzar consistencia y aprendizaje.',
    },
    {
      title: 'Accesibilidad desde el sistema',
      description: 'Contraste, foco, semántica, estados y contenido se integraron en componentes y entregables.',
    },
    {
      title: 'Evolución progresiva',
      description: 'El modo claro, el sistema y los flujos se desplegaron por etapas para controlar riesgo.',
    },
    {
      title: 'Soporte como parte del servicio',
      description: 'Un manual con happy paths, pasos y referencias ayudó a responder mejor a las personas.',
    },
  ],
  journeys: [
    {
      number: '01',
      title: 'Entender el producto',
      challenge: 'El producto reunía lenguaje y operativas financieras que necesitaban una entrada más clara.',
      response: 'Reorganicé la información esencial y simplifiqué la jerarquía para hacer visible el valor desde el inicio.',
    },
    {
      number: '02',
      title: 'Consultar tarjeta y movimientos',
      challenge: 'Los datos más consultados quedaban repartidos y exigían demasiada navegación.',
      response: 'Di prioridad a tarjeta, movimientos y acciones asociadas, con comparaciones y estados más comprensibles.',
    },
    {
      number: '03',
      title: 'Gestionar pagos y financiación',
      challenge: 'Operativas frecuentes acumulaban pasos y cambios de contexto.',
      response: 'Diseñé patrones más directos para pagar, fraccionar y gestionar productos sin perder trazabilidad.',
    },
    {
      number: '04',
      title: 'Resolver dudas',
      challenge: 'Soporte, contenido y accesibilidad no estaban suficientemente conectados con la experiencia.',
      response: 'Estructuré ayuda contextual, rutas de soporte y documentación para resolver necesidades habituales.',
    },
  ],
  contribution: [
    ['Detectar', 'Convertir señales dispersas en problemas accionables.'],
    ['Enmarcar', 'Hacer visibles trade-offs, restricciones y oportunidades.'],
    ['Alinear', 'Conectar áreas y cerrar decisiones construibles.'],
    ['Diseñar', 'Arquitectura, flujos, UI y contenido con foco en claridad.'],
    ['Sistematizar', 'Design System, accesibilidad, documentación y QA.'],
    ['Acompañar', 'Handoff, validación técnica y despliegue progresivo.'],
  ],
  ai:
    'IA aplicada para acelerar síntesis, ordenar documentación y comprobar consistencia. Las decisiones se mantuvieron bajo revisión humana.',
  accessibilityCriteria: [
    {
      title: 'Navegación y lectura',
      description: 'Secuencia, jerarquía, foco y orden de lectura documentados en contexto.',
    },
    {
      title: 'Semántica',
      description: 'Alternativas textuales, roles, estados y nombres accesibles para controles e iconografía.',
    },
    {
      title: 'Percepción',
      description: 'Contraste, uso de color, escalado y legibilidad integrados en componentes y pantallas.',
    },
    {
      title: 'Validación',
      description: 'Criterios técnicos compartidos, handoff verificable y QA continuo con diseño y desarrollo.',
    },
  ],
  deliverables: [
    'Arquitectura y journeys prioritarios.',
    'Design System, estados y casos de uso.',
    'Modelo de documentación accesible.',
    'Roadmap de entrega progresiva.',
    'Handoff, QA y manual de soporte.',
  ],
  learningLoop: [
    'Feedback contextual al abandonar operativas.',
    'Solicitud de valoración tras acciones significativas.',
    'Lectura conjunta de señales cualitativas y cuantitativas.',
    'Decisiones y mejoras incorporadas al siguiente ciclo.',
  ],
  outcomes: [
    'Flujos críticos más claros y directos.',
    'Priorización más comprensible para el equipo.',
    'Design System reutilizable y escalable.',
    'Entrega por etapas con menor riesgo.',
    'Documentación accesible y mantenible.',
    'Herramientas de soporte conectadas con el producto.',
  ],
  publicMetric: {
    value: '4,6–4,7/5',
    detail: 'Valoración pública en las stores consultadas',
    qualifier: 'Contexto público del producto consultado el 23/07/2026. No implica causalidad exclusiva del trabajo de diseño.',
  },
  storeMetrics: [
    {
      label: 'App Store',
      value: '4,6/5',
      detail: 'Más de 8.000 valoraciones',
    },
    {
      label: 'Google Play',
      value: '4,7/5',
      detail: 'Más de 9.500 reseñas',
    },
    {
      label: 'Descargas públicas',
      value: '500K+',
      detail: 'Google Play · App Store sin cifra pública comparable',
    },
  ],
  resultContext:
    'Datos públicos consultados el 23/07/2026. Se muestran como contexto actual del producto, no como impacto causado exclusivamente por el trabajo de diseño.',
  finalVersion: {
    context: [
      'InOne es la aplicación de CaixaBank Payments & Consumer para gestionar tarjetas, pagos y financiación desde un único entorno.',
      'El trabajo comenzó en una fase post-lanzamiento, con el producto en crecimiento y una transición progresiva desde experiencias específicas vinculadas a productos como IKEA Visa, MediaMarkt Visa y Visa FNAC. El objetivo era acompañar esa evolución sin perder capacidades relevantes para sus usuarios.',
    ],
    contextScreens: [
      {
        src: '/portfolio-north/inone-public/context-01.png',
        alt: 'Campaña pública de InOne para gestionar, fraccionar y financiar pagos.',
      },
      {
        src: '/portfolio-north/inone-public/context-02.png',
        alt: 'Pantalla pública de InOne con resumen de tarjeta, pagos y movimientos.',
      },
    ],
    role: {
      lead:
        'Responsabilidad de consultoría y diseño para convertir necesidades de negocio y señales del mercado en decisiones ejecutables que hicieran evolucionar la aplicación.',
      bullets: [
        'Definir un diagnóstico combinando analítica, flujos existentes, soporte y restricciones del servicio.',
        'Traducir hallazgos en prioridades, decisiones de producto y un roadmap de entregas progresivas.',
        'Diseñar y validar arquitectura, journeys, patrones de interacción y componentes reutilizables.',
        'Alinear decisiones con negocio, legal, seguridad, tecnología y atención al cliente.',
        'Acompañar documentación, handoff, QA y evolución después de cada entrega.',
      ],
    },
    challenges: [
      {
        number: '01',
        title: 'Unificar productos sin perder capacidades',
        problem:
          'La transición hacia InOne debía reunir usuarios y productos que venían de aplicaciones específicas. El riesgo era simplificar la operación a costa de perder funciones, expectativas o comportamientos ya consolidados.',
        process: [
          {
            title: 'Inventario',
            description: 'Mapear productos, aplicaciones de origen, operativas y particularidades.',
          },
          {
            title: 'Evidencia',
            description: 'Analizar uso, recorridos, soporte y funcionalidades de mayor valor.',
          },
          {
            title: 'Convergencia',
            description: 'Separar capacidades comunes de excepciones necesarias por producto.',
          },
          {
            title: 'Transición',
            description: 'Priorizar qué debía estar disponible y secuenciar la evolución.',
          },
        ],
        result:
          'Una base común para gestionar productos diferentes y un criterio claro para conservar, adaptar o replantear cada capacidad durante la transición.',
      },
      {
        number: '02',
        title: 'Convertir accesibilidad en un sistema de entrega',
        problem:
          'Una auditoría externa identificó barreras que debían convivir con nuevas iniciativas de negocio, requisitos legales y dependencias técnicas. Corregir pantallas de forma aislada no era suficiente.',
        process: [
          {
            title: 'Normalizar',
            description: 'Ordenar hallazgos por patrón, severidad, recurrencia y plataforma.',
          },
          {
            title: 'Priorizar',
            description: 'Separar correcciones sistémicas, componentes y casos específicos.',
          },
          {
            title: 'Documentar',
            description: 'Definir foco, lectura, semántica, contraste, estados y contenido accesible.',
          },
          {
            title: 'Acelerar con IA',
            description: 'Apoyar la primera síntesis y la consistencia documental con revisión humana.',
          },
          {
            title: 'Entregar y validar',
            description: 'Integrar criterios en el handoff, la implementación y el QA continuo.',
          },
        ],
        result:
          'La accesibilidad pasó a formar parte del Design System, la documentación de producto y el roadmap, con criterios trazables para diseño y tecnología.',
      },
      {
        number: '03',
        title: 'Rediseñar la experiencia de extremo a extremo',
        problem:
          'La navegación acumulaba pasos y cambios de contexto, mientras el producto debía incorporar nuevas operativas sobre servicios poco flexibles. La evolución necesitaba ser familiar, viable y progresiva.',
        process: [
          {
            title: 'Arquitectura',
            description: 'Reordenar tareas y simplificar recorridos con patrones más directos.',
          },
          {
            title: 'Prioridad',
            description: 'Dar visibilidad a tarjeta, movimientos, fraccionamiento, pagos y wallet.',
          },
          {
            title: 'Patrones',
            description: 'Alinear navegación y comportamientos con el ecosistema CaixaBank.',
          },
          {
            title: 'Sistema',
            description: 'Construir light mode, foundations, componentes y casos de uso.',
          },
          {
            title: 'Delivery',
            description: 'Fasear sistema y producto, validar viabilidad y acompañar el QA.',
          },
          {
            title: 'Aprendizaje',
            description: 'Recoger motivos de abandono y solicitar valoración tras acciones completas.',
          },
        ],
        stakeholderDecisions: [
          {
            title: 'Negocio',
            description: 'Priorizar operativas mediante señales de uso y valor para el producto.',
          },
          {
            title: 'Legal',
            description: 'Integrar requisitos e información obligatoria sin romper la comprensión.',
          },
          {
            title: 'Seguridad',
            description: 'Reducir fricción respetando autenticación, control y protección del usuario.',
          },
          {
            title: 'Tecnología',
            description: 'Ajustar propuestas a servicios existentes y secuenciar cambios construibles.',
          },
          {
            title: 'Atención al cliente',
            description: 'Documentar happy paths y conectar soporte, dudas y señales de abandono.',
          },
        ],
        result:
          'Una navegación más simple, patrones familiares, un sistema visual preparado para crecer y un ciclo de aprendizaje conectado con el uso real del producto.',
      },
    ],
    system: [
      {
        title: 'Fundamentos',
        description: 'Color, tipografía, espaciado, iconografía y modo claro.',
      },
      {
        title: 'Componentes',
        description: 'Patrones reutilizables, variantes, estados y comportamiento.',
      },
      {
        title: 'Accesibilidad',
        description: 'Foco, lectura, semántica, contraste y contenido integrados.',
      },
      {
        title: 'Implementación y QA',
        description: 'Casos de uso, handoff, validación técnica y seguimiento.',
      },
    ],
    productDecisions: [
      {
        title: 'Patrones familiares',
        description: 'Una interacción alineada con el ecosistema para reducir aprendizaje.',
      },
      {
        title: 'Navegación más simple',
        description: 'Menos profundidad, pasos más directos y contexto visible.',
      },
      {
        title: 'Operativas prioritarias',
        description: 'Tarjeta, movimientos, fraccionamiento y pagos en primer nivel.',
      },
      {
        title: 'Sistema preparado para crecer',
        description: 'Modo claro, componentes reutilizables y entrega progresiva.',
      },
    ],
    results: [
      'Convergencia progresiva de productos y capacidades en una experiencia común.',
      'Accesibilidad integrada en decisiones, componentes, documentación y QA.',
      'Arquitectura y navegación más coherentes con el ecosistema.',
      'Design System reutilizable y preparado para nuevas evoluciones.',
      'Señales de abandono y valoración conectadas con el ciclo de mejora.',
    ],
  },
  publicScreens: [
    {
      src: '/portfolio-north/inone-public/app-store-01.jpg',
      alt: 'Presentación pública de InOne con la gestión de pagos y movimientos.',
      caption: 'Propuesta pública del producto',
    },
    {
      src: '/portfolio-north/inone-public/app-store-02.jpg',
      alt: 'Pantalla pública de InOne con balance, movimientos y accesos financieros.',
      caption: 'Información y acciones prioritarias',
    },
    {
      src: '/portfolio-north/inone-public/app-store-03.jpg',
      alt: 'Pantalla pública de InOne para seleccionar movimientos que se pueden fraccionar.',
      caption: 'Fraccionamiento de movimientos',
    },
    {
      src: '/portfolio-north/inone-public/app-store-04.jpg',
      alt: 'Pantalla pública de InOne para elegir una modalidad de pago.',
      caption: 'Elección de modalidad de pago',
    },
    {
      src: '/portfolio-north/inone-public/app-store-05.jpg',
      alt: 'Pantalla pública de InOne para pasar dinero a una cuenta.',
      caption: 'Transferencia a cuenta',
    },
    {
      src: '/portfolio-north/inone-public/app-store-06.jpg',
      alt: 'Pantalla pública de InOne para modificar la fecha de pago.',
      caption: 'Gestión de fecha de pago',
    },
  ],
  sources: [
    {
      label: 'InOne en App Store',
      href: 'https://apps.apple.com/es/app/inone-financia-y-paga-a-plazos/id6502599330',
    },
    {
      label: 'InOne en Google Play',
      href: 'https://play.google.com/store/apps/details?gl=es&hl=es&id=com.caixabankpc.nowpay',
    },
    {
      label: 'Tarjetas para comercios · CaixaBank Payments & Consumer',
      href: 'https://www.caixabankpc.com/es/comercios/tarjetas',
    },
    {
      label: 'Apps específicas de IKEA Visa, FNAC Credit y MediaMarkt Club · 2021',
      href: 'https://www.caixabankpc.com/documents/444417/480762/Bases%2Blegales%2BSorteo%2BDescarga%2BApp.%2BSorteo%2Bmo%CC%81viles.pdf/672c2144-c135-5771-39b2-a10886dd18dc?t=1673364014643',
    },
  ],
}
