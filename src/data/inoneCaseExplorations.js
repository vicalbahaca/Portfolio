export const inoneCase = {
  title: 'InOne',
  role: 'Principal Product Designer',
  context: 'Evolución post-lanzamiento',
  product: 'App financiera - iOS y Android',
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
    value: '4,6-4,7/5',
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
      detail: 'Google Play - App Store sin cifra pública comparable',
    },
  ],
  resultContext:
    'Datos públicos consultados el 23/07/2026. Se muestran como contexto actual del producto, no como impacto causado exclusivamente por el trabajo de diseño.',
  finalVersion: {
    context: [
      '**InOne** es la aplicación de CaixaBank Payments & Consumer para gestionar **tarjetas, pagos y financiación** desde un único entorno.',
      'El proyecto partió de una transición progresiva desde aplicaciones específicas como **IKEA Visa**, **MediaMarkt Visa** y **Visa FNAC**. El objetivo era unificar la experiencia sin perder las capacidades relevantes de cada producto.',
    ],
    role: {
      lead:
        'El desafío era evolucionar el producto con un **plazo fijo y corto**, limitaciones del **backoffice técnico** y dependencias que afectaban directamente a la experiencia.',
      bullets: [
        'Definí una evolución viable dentro de las **restricciones técnicas** existentes.',
        'Alineé prioridades y nuevas operativas con **negocio, tecnología y atención al cliente**.',
        'Organicé un **faseado** para abordar primero las funcionalidades con mayor impacto.',
      ],
    },
    challenges: [
      {
        number: '01',
        title: 'Unificar productos sin perder capacidades',
        problem:
          'InOne debía reunir aplicaciones de marca blanca y productos de comercios asociados. Antes de definir la nueva experiencia era necesario entender sus diferencias y decidir qué capacidades debían mantenerse.',
        process: [
          {
            title: 'Inventariar',
            description: 'Recoger **productos, aplicaciones y funcionalidades** existentes.',
          },
          {
            title: 'Comparar',
            description: 'Detectar diferencias entre operativas y capacidades de cada aplicación.',
          },
          {
            title: 'Validar',
            description: 'Acordar con stakeholders qué funcionalidades conservar y cuáles retirar.',
          },
          {
            title: 'Fasear',
            description: 'Definir un **MVP común** y priorizar el resto en un backlog progresivo.',
          },
        ],
        result:
          'Una base común para unificar los activos y un backlog acordado para incorporar el resto de capacidades por fases.',
      },
      {
        number: '02',
        title: 'Hacer la aplicación accesible',
        problem:
          'Antes de unificar los activos, la aplicación general pasó por una **auditoría externa de accesibilidad**. Sus hallazgos se utilizaron desde el inicio del rediseño para aplicar los criterios WCAG en producto y delivery.',
        process: [
          {
            title: 'Identificar y resolver',
            description: 'Revisar dónde aplicaba cada criterio y definir una solución consistente.',
          },
          {
            title: 'Documentar',
            description: 'Incorporar accesibilidad al **Design System** y a las pantallas preparadas para handoff.',
          },
          {
            title: 'Handoff y QA',
            description: 'Acompañar a desarrollo y validar de forma continua la implementación.',
          },
        ],
        result:
          'La accesibilidad quedó integrada en el sistema, la documentación y el QA del producto.',
      },
      {
        number: '03',
        title: 'Rediseñar la experiencia de extremo a extremo',
        problem:
          'Tras un año en el mercado, negocio priorizó una evolución visual y funcional alineada con el ecosistema CaixaBank. InOne se había lanzado como una aplicación diferenciada y necesitaba acercarse a los patrones de **CaixaBankNow**.',
        process: [
          {
            title: 'Analizar el ecosistema',
            description: 'Revisar CaixaBankNow y los patrones compartidos entre productos.',
          },
          {
            title: 'Alinear la experiencia',
            description: 'Acercar navegación, light mode y usabilidad a **CaixaBankNow**.',
          },
          {
            title: 'Priorizar',
            description: 'Rediseñar primero las funcionalidades con mayor impacto para negocio y usuarios.',
          },
          {
            title: 'Delivery y QA',
            description: 'Entregar por fases y acompañar a tecnología hasta la subida a producción.',
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
            description: 'Conectar soporte, dudas y señales de abandono con la evolución del producto.',
          },
        ],
        result:
          'Una experiencia más cercana a CaixaBankNow, con navegación más clara y una evolución preparada para llegar a producción por fases.',
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
        title: 'Navegación familiar',
        description: 'Patrones alineados con CaixaBankNow para facilitar el uso desde el primer acceso.',
      },
      {
        title: 'Operativas prioritarias',
        description: '**Tarjetas, movimientos y pagos** visibles en los primeros niveles.',
      },
      {
        title: 'Gestión de pagos',
        description: 'Acciones directas para consultar, aplazar y gestionar pagos sin perder contexto.',
      },
    ],
    publicScreenIndexes: [1, 3, 4],
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
      caption: 'Navegación y operativas prioritarias',
    },
    {
      src: '/portfolio-north/inone-public/app-store-03.jpg',
      alt: 'Pantalla pública de InOne para seleccionar movimientos que se pueden fraccionar.',
      caption: 'Fraccionamiento de movimientos',
    },
    {
      src: '/portfolio-north/inone-public/app-store-04.jpg',
      alt: 'Pantalla pública de InOne para elegir una modalidad de pago.',
      caption: 'Opciones para gestionar pagos',
    },
    {
      src: '/portfolio-north/inone-public/app-store-05.jpg',
      alt: 'Pantalla pública de InOne para pasar dinero a una cuenta.',
      caption: 'Gestión directa del dinero disponible',
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
      label: 'Tarjetas para comercios - CaixaBank Payments & Consumer',
      href: 'https://www.caixabankpc.com/es/comercios/tarjetas',
    },
    {
      label: 'Apps específicas de IKEA Visa, FNAC Credit y MediaMarkt Club - 2021',
      href: 'https://www.caixabankpc.com/documents/444417/480762/Bases%2Blegales%2BSorteo%2BDescarga%2BApp.%2BSorteo%2Bmo%CC%81viles.pdf/672c2144-c135-5771-39b2-a10886dd18dc?t=1673364014643',
    },
  ],
}
