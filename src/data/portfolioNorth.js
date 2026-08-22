export const portfolioSection = {
  title: 'Proyectos seleccionados',
  summary:
    'Cinco casos de producto financiero, comercio electrónico, accesibilidad y operaciones de diseño. El contenido está redactado para explicar mi responsabilidad sin exponer clientes, datos internos ni interfaces sujetas a confidencialidad.',
  projects: [
    {
      slug: 'inone',
      title: 'InOne: evolución de la app',
      image: '/portfolio-north/covers/inone-revamp.png',
      cardImage: '/portfolio-north/covers/inone-revamp.png',
      cardImageMode: 'cover',
      cardUseBackdrop: false,
      accent: '#1d56f0',
      client: 'Producto financiero de consumo',
      industry: 'Fintech - App nativa',
      role: 'Principal Product Designer',
      scope: 'Rediseño end-to-end, sistema de diseño y despliegue progresivo',
      cardTag: 'Evolución de producto',
      cardDescription:
        'Evolución a largo plazo de un ecosistema financiero: unificación de productos, accesibilidad, Design System y mejora progresiva de la experiencia.',
      metric: 'Nueva experiencia - Design System - entrega progresiva',
      headline:
        'Rediseño de una aplicación financiera para integrar pagos, tarjetas y financiación en una experiencia más clara, consistente y escalable.',
      summary:
        'Una evolución end-to-end de la experiencia privada web y app, abordada sin interrumpir la operativa existente.',
      description:
        'La ficha pública actual del producto muestra una propuesta que reúne gestión de pagos, tarjetas y financiación. Mi trabajo se centró en ordenar esa complejidad, redefinir la arquitectura y preparar una evolución progresiva junto a producto y tecnología.',
      detailSections: [
        {
          title: 'El reto',
          body:
            'Reducir complejidad acumulada sin convertir el rediseño en una ruptura para personas que ya utilizaban el producto.',
          paragraphs: [
            'El punto de partida era una experiencia con múltiples productos, operativas frecuentes y patrones heredados. Antes de diseñar pantallas, ordené journeys, dependencias y decisiones que afectaban a todo el sistema.',
          ],
          points: [
            'Mapeo de operativas críticas y escenarios de mayor frecuencia.',
            'Priorización compartida con producto, negocio y tecnología.',
            'Separación entre mejoras estructurales y cambios que podían entregarse de forma incremental.',
          ],
        },
        {
          title: 'Dirección de producto',
          body:
            'La nueva arquitectura debía explicar mejor el estado de cada producto y acercar las acciones importantes al momento en que se necesitan.',
          paragraphs: [
            'Trabajé la navegación, la jerarquía de información y los patrones transversales antes de profundizar en cada flujo. Esto permitió diseñar una base común para consultas, gestión de pagos, movimientos y financiación.',
          ],
          points: [
            'Arquitectura más predecible y consistente entre operativas.',
            'Patrones reutilizables para estados, acciones y confirmaciones.',
            'Contenido funcional revisado para reducir ambigüedad en decisiones financieras.',
          ],
        },
        {
          title: 'Validación y sistema',
          body:
            'El rediseño se apoyó en test de usabilidad, revisión de los journeys clave y un sistema preparado para web y app.',
          paragraphs: [
            'Además del trabajo de interfaz, estructuré componentes, variables, estados y criterios de accesibilidad para que diseño y tecnología compartieran una misma referencia.',
          ],
          points: [
            'Prototipos y test de usabilidad sobre operativas prioritarias.',
            'Design System conectado con los requisitos reales del producto.',
            'Documentación de estados, edge cases y comportamiento accesible.',
          ],
        },
        {
          title: 'Entrega',
          body:
            'La solución se planteó como una evolución por etapas, con suficiente trazabilidad para aprender de cada entrega antes de continuar.',
          paragraphs: [
            'El valor no estuvo solo en proponer una nueva interfaz, sino en convertirla en una secuencia viable de decisiones, dependencias y entregables compartidos con tecnología.',
          ],
          points: [
            'Roadmap de entregas alineado con impacto y complejidad.',
            'Handoff continuo con criterios funcionales y de QA.',
            'Base preparada para incorporar nuevos productos y capacidades.',
          ],
        },
      ],
      sources: [
        {
          label: 'Ficha pública de InOne en App Store',
          href: 'https://apps.apple.com/es/app/inone-financia-y-paga-a-plazos/id6502599330',
        },
      ],
    },
    {
      slug: 'accessibility-program',
      title: 'Accesibilidad y cumplimiento',
      image: '/portfolio-north/covers/accessibility-program.png',
      cardImage: '/portfolio-north/covers/accessibility-program.png',
      cardImageMode: 'cover',
      cardUseBackdrop: false,
      accent: '#2962ff',
      client: 'Ecosistema financiero',
      industry: 'Fintech - Web y app nativa',
      role: 'Accessibility Lead - Product Designer',
      scope: 'Auditoría, backlog, documentación, entrega y QA',
      cardTag: 'Ownership de accesibilidad',
      cardDescription:
        'De auditorías externas a una forma de trabajo compartida para productos web, Android e iOS.',
      metric: '5 activos - 3 webs - 2 aplicaciones nativas',
      headline:
        'Convertir auditorías externas de accesibilidad en una forma de delivery compartida para cinco productos digitales.',
      summary:
        'Responsabilidad transversal de accesibilidad sobre cinco productos digitales y diferentes plataformas.',
      description:
        'El caso se presenta sin pantallas ni información operativa interna. Explica el sistema de trabajo, no el detalle de los productos auditados.',
      editorialCase: {
        contextLabel: 'Servicios financieros regulados',
        productLabel: '5 activos - 3 webs - 2 aplicaciones nativas',
        context: [
          'La entrada en aplicación del Acta Europea de Accesibilidad situó la accesibilidad como una responsabilidad de producto continua. En servicios financieros, esto afecta a la comprensión, los formularios, la identificación, los pagos y las confirmaciones de operaciones sensibles.',
          'Un workshop común ayudó a alinear a los equipos sobre los principios WCAG: una interfaz debe ser perceptible, operable, comprensible y robusta. El reto real era llevar esos principios a decisiones concretas y repetibles en productos distintos.',
        ],
        role: {
          lead:
            'Coordiné la conversión de auditorías externas en una forma de trabajo común para diseño y tecnología, sin tratar la accesibilidad como una revisión al final del proyecto.',
          bullets: [
            'Normalizar los hallazgos de cinco activos con barreras y prioridades diferentes.',
            'Crear el backlog y los criterios de aceptación que conectaban evidencia, diseño, desarrollo y validación.',
            'Documentar en Figma los requisitos visuales y técnicos: foco, orden de lectura, semántica, estados, etiquetas y contraste.',
            'Facilitar workshops de aprendizaje y alinear el handoff con equipos tecnológicos diferentes.',
            'Acompañar QA con teclado y tecnologías de asistencia en web, macOS, iOS y Android.',
          ],
        },
        challengesTitle: 'De auditoría a QA',
        challengesDescription:
          'Un proceso compartido de cinco fases para que los hallazgos no quedaran aislados entre productos, equipos o plataformas.',
        challenges: [
          {
            number: '01',
            title: 'Convertir hallazgos distintos en un sistema de entrega',
            problem:
              'Una empresa externa auditó cinco activos: tres webs y dos aplicaciones nativas. Todos presentaban barreras, aunque de naturaleza y gravedad diferentes. El riesgo era resolver incidencias aisladas sin cambiar la forma de diseñar, implementar y verificar.',
            process: [
              {
                title: 'Auditoría externa',
                description: 'Recoger evidencia y barreras de cada activo.',
              },
              {
                title: 'Análisis y backlog',
                description: 'Normalizar, priorizar y convertir hallazgos en trabajo trazable.',
              },
              {
                title: 'Documentación y workshops',
                description: 'Acordar criterios visuales y técnicos desde Figma.',
              },
              {
                title: 'Entrega',
                description: 'Alinear el handoff con los equipos de tecnología responsables.',
              },
              {
                title: 'QA',
                description: 'Verificar teclado, lectores de pantalla, estructura y contraste.',
              },
            ],
            result:
              'Los equipos compartieron un backlog, una documentación y una secuencia de validación comunes, adaptables a cada plataforma sin perder trazabilidad.',
          },
        ],
        modelTitle: 'Criterios que se hicieron entregables',
        modelDescription:
          'La documentación no se limitó a señalar errores: dejó claro cómo debía comportarse cada interfaz y cómo comprobar su implementación.',
        model: [
          {
            title: 'Diseño accesible',
            description: 'Contraste, foco, contenido no textual, uso de color y estados visibles.',
          },
          {
            title: 'Estructura y semántica',
            description: 'Encabezados, landmarks, enlaces, botones, formularios y mensajes de error.',
          },
          {
            title: 'Lectura y navegación',
            description: 'Orden de lectura, navegación por teclado y nombres accesibles en cada flujo.',
          },
          {
            title: 'Validación',
            description: 'QA con NVDA y VoiceOver, además de comprobaciones de teclado y contraste.',
          },
        ],
        resultsTitle: 'Una práctica común para el equipo',
        resultsDescription:
          'El resultado fue una base compartida de trabajo y verificación. No se publican porcentajes de cumplimiento ni incidencias cerradas sin una medición validada.',
        results: [
          'Cinco activos abordados con el mismo marco de auditoría, priorización, entrega y QA.',
          'Documentación en Figma que conectó decisiones visuales, comportamiento y requisitos técnicos.',
          'Equipos de diseño y tecnología con un lenguaje común para aplicar y revisar criterios de accesibilidad.',
        ],
      },
      detailSections: [
        {
          title: 'Por qué ahora',
          body:
            'La Ley 11/2023 trasladó al ordenamiento español el Acta Europea de Accesibilidad y fijó su aplicación efectiva para determinados productos y servicios desde el 28 de junio de 2025.',
          paragraphs: [
            'El alcance incluye servicios bancarios para consumidores y comercio electrónico. Para los equipos de producto, esto convirtió la accesibilidad en una responsabilidad continua sobre flujos, contenido, componentes y tecnología, no en una revisión final.',
          ],
          points: [
            'Criterios funcionales para que la experiencia sea perceptible, operable, comprensible y robusta.',
            'Nivel AA de WCAG como referencia de trabajo para las interfaces digitales.',
            'Atención especial a identificación, seguridad, formularios y pagos.',
          ],
        },
        {
          title: 'Cobertura del programa',
          body:
            'El trabajo abarcó canales públicos y privados, tanto web como aplicaciones nativas para Android e iOS.',
          paragraphs: [
            'Cada plataforma exigía adaptar el criterio: semántica y teclado en web, tecnologías de asistencia y componentes nativos en mobile, y especial cuidado con validaciones, errores y confirmaciones en operativas financieras.',
          ],
          points: [
            'Web pública: captación, información y contratación.',
            'Web privada: consulta y gestión de productos.',
            'Apps nativas: navegación, estados, foco, lectura y acciones críticas.',
          ],
        },
        {
          title: 'De la auditoría al roadmap',
          body:
            'Las auditorías externas se transformaron en un inventario único, priorizado y conectado con los equipos responsables.',
          paragraphs: [
            'Normalicé los hallazgos para evitar duplicidades, los agrupé por patrón y severidad y los traduje a iniciativas y user stories. Así, cada incidencia podía seguirse desde la evidencia inicial hasta diseño, desarrollo, QA y cierre.',
          ],
          points: [
            'Clasificación por impacto, recurrencia, plataforma y dependencia.',
            'Roadmaps diferenciados entre correcciones sistémicas y casos de producto.',
            'Criterios de aceptación verificables para producto y tecnología.',
          ],
        },
        {
          title: 'Documentación y adopción',
          body:
            'La solución solo escalaba si las decisiones quedaban integradas en la forma habitual de diseñar y entregar.',
          paragraphs: [
            'Preparé documentación en Figma con comportamiento, semántica, estados y orden de lectura; además, facilité sesiones para que diseño y desarrollo pudieran aplicar los criterios desde el inicio.',
          ],
          points: [
            'Handoffs accesibles con anotaciones funcionales y casos límite.',
            'Criterios incorporados a componentes y patrones reutilizables.',
            'Workshops prácticos sobre WCAG, HTML semántico y atributos ARIA.',
          ],
        },
      ],
      sources: [
        {
          label: 'Ley 11/2023 en el BOE',
          href: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-11022',
        },
        {
          label: 'European Accessibility Act',
          href: 'https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en',
        },
        {
          label: 'WCAG 2.2 - W3C',
          href: 'https://www.w3.org/TR/WCAG22/',
        },
      ],
    },
    {
      slug: 'channel-unification',
      title: 'Canales de prescripción',
      image: '/portfolio-north/covers/channel-unification.png',
      cardImage: '/portfolio-north/covers/channel-unification.png',
      cardImageMode: 'cover',
      cardUseBackdrop: false,
      accent: '#315cf4',
      client: 'Producto financiero B2B2C',
      industry: 'Fintech - Captación y contratación',
      role: 'Principal Product Designer',
      scope: 'Service design, arquitectura y modelo operativo',
      cardTag: 'Service design y arquitectura',
      cardDescription:
        'Un plan de unificación para hacer sostenible la captación de financiación y pagos al consumo a través de prescriptores.',
      metric: 'Canales fragmentados → dirección de producto compartida',
      headline:
        'Unificar canales de prescripción para convertir una red fragmentada de captación en un servicio más coherente y mantenible.',
      summary:
        'Un proyecto de service design para ordenar canales de captación, acordar un modelo común y preparar una primera fase de unificación.',
      description:
        'La información se presenta de forma deliberadamente general: sin marcas, pantallas, reglas de financiación ni detalles operativos. El valor del caso está en cómo se estructuró el problema y se alinearon decisiones entre áreas.',
      editorialCase: {
        contextLabel: 'Canales de captación B2B2C',
        productLabel: 'Pagos al consumo y financiación',
        context: [
          'Los canales de prescripción conectan a potenciales clientes con productos de pagos al consumo y financiación a través de compañías que mantienen un acuerdo con la entidad bancaria. Son una vía principal de captación y reúnen contextos online, presenciales, B2B, B2C y B2B2C.',
          'Con el tiempo, la respuesta a necesidades de prescriptores, servicios y productos concretos había creado varios activos. Compartían parte de la propuesta, pero diferían en rango de financiación, tipo de producto, relación previa con el cliente y operativa. Mantenerlos de forma aislada multiplicaba el esfuerzo de evolución, los cambios normativos y la dificultad para entender el rendimiento conjunto.',
        ],
        role: {
          lead:
            'El equipo de North identificó un número elevado de canales de captación, con capacidades solapadas y un esfuerzo de mantenimiento creciente. A partir de un análisis alineado con negocio, se planteó la unificación progresiva como una iniciativa de servicio priorizable.',
          bullets: [
            'Inventariar los activos, sus capacidades, públicos, productos y particularidades operativas.',
            'Identificar patrones compartidos, solapamientos y excepciones que no podían resolverse con una única interfaz.',
            'Traducir el análisis en un modelo común comprensible para negocio, producto, diseño y tecnología.',
            'Definir una propuesta de fases que tuviera en cuenta capacidad disponible, riesgo de transición y necesidades normativas.',
            'Presentar el plan de unificación y acompañar el inicio de la primera fase sobre un conjunto acotado de activos.',
          ],
        },
        challenges: [
          {
            number: '01',
            title: 'Entender un servicio que se había repartido entre muchos activos',
            problem:
              'El elevado número de canales no era solo una cuestión visual. Cada uno había evolucionado con prioridades, vocabulario y reglas propias, por lo que antes de decidir qué unificar había que delimitar qué partes respondían realmente al mismo servicio.',
            process: [
              { title: 'Inventariar', description: 'Recoger activos, productos, capacidades, actores y dependencias.' },
              { title: 'Comparar', description: 'Distinguir recorridos repetidos de diferencias con valor real.' },
              { title: 'Mapear', description: 'Relacionar tipo de cliente, contexto de contratación y nivel de servicio.' },
              { title: 'Enmarcar', description: 'Convertir el diagnóstico en una oportunidad concreta para negocio.' },
            ],
            result:
              'Una visión compartida del ecosistema, sus solapamientos y las decisiones que requerían una respuesta transversal en lugar de mejoras aisladas.',
          },
          {
            number: '02',
            title: 'Definir lo común sin borrar diferencias necesarias',
            problem:
              'Los canales debían poder compartir una base de producto, pero no todos atendían al mismo usuario, producto o contexto. Simplificar sin criterio podía eliminar condiciones necesarias para cada prescriptor o tipo de contratación.',
            process: [
              { title: 'Separar', description: 'Diferenciar el núcleo de captación de las variantes por producto o perfil.' },
              { title: 'Normalizar', description: 'Crear un vocabulario y unas capacidades comunes para discutir el servicio.' },
              { title: 'Modelar', description: 'Plantear una arquitectura que admitiera excepciones explícitas y trazables.' },
              { title: 'Priorizar', description: 'Ordenar el alcance según valor, recurrencia, riesgo y capacidad de entrega.' },
            ],
            result:
              'Un modelo de producto que permite reutilizar capacidades compartidas y mantener visibles las variantes que sí requieren un tratamiento específico.',
          },
          {
            number: '03',
            title: 'Convertir el diagnóstico en una transición viable',
            problem:
              'Los cambios normativos debían aplicarse en varios activos y los equipos de diseño y tecnología no tenían capacidad para mantenerlos todos al mismo ritmo. El plan necesitaba reducir carga sin prometer una sustitución inmediata de todo el ecosistema.',
            process: [
              { title: 'Contrastar', description: 'Aterrizar dependencias, capacidad disponible y condiciones de transición.' },
              { title: 'Fasear', description: 'Seleccionar un primer conjunto de activos con una lógica de unificación viable.' },
              { title: 'Acordar', description: 'Cerrar prioridades, responsables y criterios para avanzar con negocio.' },
              { title: 'Preparar', description: 'Dejar una secuencia replicable para las siguientes oleadas.' },
            ],
            result:
              'Un plan presentado a negocio y el inicio de la primera fase de consolidación de varios activos en una experiencia común.',
          },
        ],
        results: [
          'Análisis transversal de canales, actores, productos, capacidades y diferencias relevantes.',
          'Modelo común para alinear a negocio, producto, diseño y tecnología sobre la misma dirección.',
          'Plan de unificación presentado a negocio con fases, prioridades y dependencias identificadas.',
          'Inicio de la primera fase para consolidar varios activos bajo una experiencia compartida.',
        ],
      },
      detailSections: [
        {
          title: 'Un ecosistema de canales sobredimensionado',
          body:
            'El equipo de North identificó un número elevado de canales creados en momentos distintos, con necesidades similares resueltas mediante lógicas, vocabulario y niveles de servicio diferentes.',
          paragraphs: [
            'Antes de unificar interfaces era necesario entender qué tareas, actores, reglas y dependencias pertenecían realmente al mismo servicio.',
          ],
          points: [
            'Inventario de canales, capacidades y solapamientos.',
            'Mapa de actores internos y externos.',
            'Identificación de momentos críticos y rupturas entre canales.',
          ],
        },
        {
          title: 'Modelo común',
          body:
            'La propuesta se construyó alrededor de capacidades compartidas, no alrededor de las limitaciones de cada canal heredado.',
          paragraphs: [
            'Se definió una arquitectura funcional y un vocabulario común para que producto, negocio y tecnología pudieran discutir la misma experiencia sin depender de una pantalla concreta.',
          ],
          points: [
            'Principios y reglas comunes para los principales journeys.',
            'Arquitectura escalable para distintos perfiles y contextos.',
            'Separación clara entre núcleo compartido y necesidades específicas.',
          ],
        },
        {
          title: 'Alineación y decisiones',
          body:
            'La facilitación fue clave para convertir posiciones de área en decisiones trazables de producto.',
          paragraphs: [
            'Los workshops se utilizaron para validar hipótesis, resolver contradicciones y cerrar acuerdos sobre prioridades, ownership y secuencia de entrega.',
          ],
          points: [
            'Sesiones de co-definición con negocio, operaciones y tecnología.',
            'Matriz de decisiones, dependencias y responsables.',
            'Roadmap progresivo para reducir riesgo de transición.',
          ],
        },
      ],
    },
    {
      slug: 'facilitea-ecommerce',
      title: 'Facilitea: evolución del e-commerce',
      image: '/portfolio-north/covers/facilitea-ecommerce.svg',
      cardImage: '/portfolio-north/covers/facilitea-ecommerce.svg',
      cardImageMode: 'cover',
      cardUseBackdrop: false,
      accent: '#f20505',
      client: 'E-commerce retail vinculado a CaixaBank',
      industry: 'Retail - E-commerce - Financiación',
      role: 'Product Design Owner',
      scope: 'Oficinas, financiación, checkout y posventa',
      cardTag: 'Evolución de la plataforma',
      cardDescription:
        'Evolución a largo plazo de una plataforma retail: beneficios, financiación, checkout y posventa en una experiencia conectada.',
      metric: 'E-commerce - Financiación - Posventa',
      headline:
        'Evolucionar un e-commerce retail para conectar catálogo, contratación y posventa sin perder coherencia entre canales.',
      summary:
        'Una evolución de producto sobre Facilitea.com y el servicio que permite a las oficinas acompañar operaciones de e-commerce.',
      description:
        'El caso evita reglas comerciales, condiciones de financiación, datos operativos y pantallas internas. Se centra en las decisiones de producto que conectan beneficios, checkout, financiación y posventa.',
      externalLink: {
        label: 'Visitar Facilitea',
        href: 'https://www.facilitea.com/',
      },
      editorialCase: {
        roleTitle: 'Desafío',
        context: [
          'Facilitea es la plataforma de comercio electrónico de CaixaBank. Reúne productos y servicios de tecnología, movilidad, hogar y viajes, además de propuestas especializadas de coche y vivienda.',
          'La evolución se centró en Facilitea.com y en el servicio interno que permite a las oficinas acompañar operaciones de e-commerce. El alcance conectó catálogo, financiación, checkout y posventa para responder a nuevas necesidades de mercado y negocio.',
        ],
        contextMedia: {
          src: '/portfolio-north/facilitea-context.png',
          alt: 'Página principal de Facilitea con navegación, campaña destacada y catálogo de productos.',
        },
        role: {
          lead:
            'Responsabilidad de consultoría y diseño para convertir necesidades de negocio y señales del mercado en decisiones ejecutables que hicieran evolucionar el e-commerce.',
          bullets: [
            'Asumir el ownership de la herramienta para oficinas y de los journeys de financiación, checkout y posventa de Facilitea.com.',
            'Definir necesidades junto a negocio, operaciones, legal, seguridad y tecnología antes de diseñar cada evolución.',
            'Diseñar y documentar journeys, reglas de interfaz, estados y casos límite para desarrollo.',
            'Acompañar handoff, QA y las iteraciones posteriores a cada entrada en producción.',
          ],
        },
        challengesTitle: 'Dos retos de evolución',
        challengesDescription:
          'Los frentes que conectaron propuesta comercial, contratación y servicio posterior en una experiencia de producto coherente.',
        challenges: [
          {
            number: '01',
            title: 'Llevar la financiación al momento de compra',
            problem:
              'La financiación debía responder a distintas condiciones de producto y contratación. El reto era que pudiera entenderse y gestionarse desde el checkout, sin obligar a cambiar de canal ni a interpretar información dispersa.',
            process: [
              { title: 'Mapear oferta', description: 'Recoger escenarios de compra, posibilidades de financiación y restricciones relevantes.' },
              { title: 'Priorizar journeys', description: 'Distinguir los recorridos que requieren una decisión de financiación dentro de la compra.' },
              { title: 'Diseñar contratación', description: 'Aterrizar una experiencia que mantenga la compra y la contratación en un mismo recorrido.' },
              { title: 'Alinear viabilidad', description: 'Validar contenido, estados y dependencias con negocio, legal y tecnología.' },
            ],
            result:
              'Una base de contratación integrada en checkout, preparada para presentar opciones de financiación sin añadir fricción innecesaria.',
          },
          {
            number: '02',
            title: 'Convertir la posventa en parte del producto',
            problem:
              'El área privada no reunía de forma clara la gestión de pedidos, pagos, facturas, logística, suscripciones y renting. Había que rediseñar la posventa con el nuevo sistema de diseño y cubrir sus distintas casuísticas de forma accesible.',
            process: [
              { title: 'Inventariar servicio', description: 'Ordenar necesidades posteriores a la compra, desde envíos e incidencias hasta cobros y documentación.' },
              { title: 'Área privada y posventa', description: 'Rediseñar una estructura común para compras, suscripciones y renting.' },
              { title: 'Validar el servicio', description: 'Contrastar todas las funcionalidades con tecnología, operaciones, empresas externas y logística.' },
              { title: 'Documentar y entregar', description: 'Cubrir casos de uso, handoff y QA con los equipos responsables.' },
            ],
            result:
              'Un área privada alineada con la nueva marca de Facilitea y una posventa para que todas las personas puedan consultar información y realizar gestiones sobre compras, renting y suscripciones.',
          },
        ],
      },
    },
    {
      slug: 'figma-documentation-plugin',
      title: 'Plugin para extracción de textos',
      image: '/portfolio-north/covers/design-plugin.png',
      cardImage: '/portfolio-north/covers/design-plugin.png',
      cardImageMode: 'cover',
      cardUseBackdrop: false,
      accent: '#2558e8',
      client: 'Equipo de diseño de producto',
      industry: 'DesignOps - Herramientas internas',
      role: 'Product Designer - Product Maker',
      scope: 'Detección, diseño, desarrollo y adopción interna',
      cardTag: 'DesignOps',
      cardDescription:
        'Extraer textos de Figma, eliminar duplicados y preparar su revisión de accesibilidad y traducción desde un único flujo.',
      metric: '1-2 h → ~3 min por extracción',
      headline:
        'Convertir la revisión de textos de Figma en un flujo de tres minutos, listo para accesibilidad, traducción y entrega.',
      summary:
        'Un plugin interno de Figma que reúne textos, detecta duplicados y genera un Excel accionable para diseño, producto y desarrollo.',
      description:
        'Caso anonimizado. Explica el flujo y el resultado operativo sin mostrar archivos de trabajo, textos de producto ni reglas internas.',
      editorialCase: {
        contextLabel: 'Calidad de contenido y accesibilidad',
        productLabel: 'Plugin interno de Figma',
        context: [
          'En cada nuevo desarrollo y antes de cada subida a producción, diseñadores y PMs deben revisar los nuevos textos de la plataforma: legales, mensajes funcionales y contenido plano. El objetivo es validar su nivel de comprensión, preparar sus traducciones y entregar una base única a desarrollo.',
          'El proceso obligaba a recorrer manualmente archivos de Figma de distintos flujos y verticales, recuperar cada literal, detectar duplicados y pasar el resultado por herramientas separadas. Una extracción completa podía ocupar entre una y dos horas y convertía un control recurrente en una tarea pesada y propensa a omisiones.',
        ],
        role: {
          lead:
            'Identifiqué una fricción repetida en el flujo de entrega y construí una herramienta interna para transformar la extracción, validación y documentación de textos en un paso breve y reutilizable.',
          bullets: [
            'Delimitar el problema junto a PMs y diseño: qué textos debían extraerse, cuándo y con qué resultado útil para cada equipo.',
            'Diseñar el flujo dentro de Figma para que partiera de una selección explícita y no requiriera preparar archivos aparte.',
            'Integrar deduplicación, detección de B2 y propuestas de mejora con la licencia gratuita de legible.es.',
            'Definir un Excel de salida que sirviera a la vez para revisar contenido, traducirlo y entregarlo a desarrollo.',
            'Acompañar su adopción como control previo a la entrega y como apoyo a PMs y diseñadores de las distintas verticales.',
          ],
        },
        challengesTitle: 'Tres fricciones que había que eliminar',
        challengesDescription: 'El objetivo era reducir trabajo manual sin esconder el criterio que seguía requiriendo una revisión humana.',
        modelTitle: 'Un flujo breve dentro de Figma',
        modelDescription: 'La herramienta parte de la selección de diseño y devuelve un documento preparado para continuar el trabajo de contenido, traducción y entrega.',
        resultsTitle: 'Entrega y resultado',
        resultsDescription: 'La comparación de tiempo está declarada por el equipo y se refiere a una extracción completa equivalente; no se presenta como una métrica de producto externa.',
        challenges: [
          {
            number: '01',
            title: 'Extraer todo el contenido sin recorrer pantalla a pantalla',
            problem:
              'Los textos relevantes estaban repartidos entre muchos archivos, flujos y verticales. Recuperarlos de forma manual exigía inspeccionar cada pantalla y mantenía el riesgo de pasar por alto mensajes, legales o variantes.',
            process: [
              { title: 'Seleccionar', description: 'Elegir en Figma los elementos o pantallas que forman parte de la extracción.' },
              { title: 'Recorrer', description: 'Leer los textos del alcance seleccionado sin copiar contenido uno a uno.' },
              { title: 'Agrupar', description: 'Preparar un inventario único para trabajar sobre el contenido completo.' },
            ],
            result: 'La extracción de un Figma completo pasa de una revisión manual de una o dos horas a un proceso de alrededor de tres minutos.',
          },
          {
            number: '02',
            title: 'Detectar duplicados y nivel B2 en el mismo paso',
            problem:
              'Una vez recogidos los textos, el equipo aún debía localizar repeticiones y comprobar si el contenido era comprensible. Hacerlo en herramientas independientes añadía pasos y dificultaba mantener una referencia única.',
            process: [
              { title: 'Deduplicar', description: 'Filtrar los textos repetidos antes de preparar la entrega.' },
              { title: 'Analizar', description: 'Usar legible.es para detectar el cumplimiento de B2 en cada literal.' },
              { title: 'Proponer', description: 'Devolver alternativas para los textos que no alcanzan el nivel esperado.' },
            ],
            result: 'La revisión de comprensión deja de ser una comprobación posterior: queda disponible mientras se prepara el mismo listado de textos.',
          },
          {
            number: '03',
            title: 'Convertir la revisión en un entregable para todos los equipos',
            problem:
              'El valor no estaba solo en listar textos. PMs, diseño y desarrollo necesitaban un resultado que evitara nuevas copias, aclaraciones y traducciones hechas sobre versiones distintas.',
            process: [
              { title: 'Exportar', description: 'Generar un Excel único con los literales ya filtrados.' },
              { title: 'Completar', description: 'Incluir las propuestas B2 y las traducciones al catalán e inglés.' },
              { title: 'Revisar', description: 'Usarlo antes de entregar y como referencia compartida para la implementación.' },
            ],
            result: 'Cada extracción produce una base lista para revisión de contenido, traducción y coordinación con desarrollo.',
          },
        ],
        model: [
          { title: 'Selección dentro de Figma', description: 'El equipo marca el alcance real de la revisión sin salir del archivo de diseño.' },
          { title: 'Inventario sin duplicados', description: 'Los literales se reúnen en un listado único para evitar el trabajo de limpieza posterior.' },
          { title: 'Análisis B2 y propuestas', description: 'La herramienta identifica los textos a revisar y propone alternativas para los que no cumplen el nivel esperado.' },
          { title: 'Excel listo para continuar', description: 'El resultado incorpora textos, propuestas y traducciones al catalán e inglés en una única entrega.' },
        ],
        results: [
          'Extracción, deduplicación y análisis B2 reunidos en un único flujo de Figma.',
          'Excel sin textos repetidos, con propuestas de mejora y traducciones al catalán e inglés.',
          'Control de calidad disponible antes del handoff, no solo al final de la entrega.',
          'Uso interno extendido a PMs y diseñadores de las distintas verticales de Facilitea.',
        ],
        resultVideo: {
          src: '/portfolio-north/plugin-workflow.mp4',
          caption: 'Recorrido del plugin: selección, análisis de textos y generación del entregable.',
        },
      },
    },
  ],
}

export const workshopsPage = {
  title: 'Workshops',
  description:
    'Sesiones diseñadas para convertir conocimiento complejo en decisiones, prácticas compartidas y formas de trabajo que el equipo puede aplicar al día siguiente.',
  image: '/portfolio-north/covers/workshops.png',
  principles: [
    {
      title: 'Partir de un problema real',
      text:
        'Todo empieza con una detección: un problema, una fricción o una oportunidad concreta. A partir de ahí decidimos si hace falta un design chapter, un workshop u otro espacio de trabajo para entenderlo mejor y convertirlo en aprendizaje útil.',
    },
    {
      title: 'Hacer para aprender',
      text:
        'Combinamos textos, ejercicios, juegos y casos reales para que todo el mundo pueda detectar los problemas, discutirlos y participar en la construcción de una solución.',
    },
    {
      title: 'Aprendizaje constante',
      text:
        'Cada persona aprende desde su contexto y el grupo comparte lo aprendido para trabajar mejor, crecer como profesionales y construir relaciones más horizontales dentro del equipo.',
    },
  ],
  tracks: [
    {
      title: 'Accesibilidad aplicada',
      summary:
        'Fundamentos WCAG, HTML semántico, documentación accesible y traducción de auditorías a decisiones de producto.',
      outcomes: [
        'Identificar barreras frecuentes desde diseño.',
        'Documentar comportamiento, semántica y estados.',
        'Preparar entregables verificables para desarrollo y QA.',
      ],
    },
    {
      title: 'IA para diseño y producto',
      summary:
        'Exploración práctica de herramientas de IA para elegir mejor cómo investigar, sintetizar, prototipar y documentar según cada problema.',
      outcomes: [
        'Elegir herramientas según el problema y no por novedad.',
        'Construir prototipos y explorar soluciones con distintos niveles de fidelidad.',
        'Comparar velocidad, calidad, privacidad y utilidad antes de incorporar una herramienta.',
      ],
    },
    {
      title: 'Design chapters y Figma',
      summary:
        'Workshops recurrentes para mantenernos al día de Figma, IA y prácticas compartidas que afectan al trabajo diario del equipo.',
      outcomes: [
        'Explorar actualizaciones como branches, Figma Make y nuevas formas de colaborar.',
        'Detectar temas comunes y convertirlos en sesiones de aprendizaje compartido.',
        'Combinar design critiques, prototipado rápido y revisión entre pares.',
      ],
    },
    {
      title: 'Prototipado con nuevas herramientas',
      summary:
        'Un espacio para probar herramientas distintas y comprobar cuál se adapta mejor al Design System, a la velocidad del equipo y a sus necesidades cotidianas.',
      outcomes: [
        'Construir un prototipo individual con una herramienta diferente.',
        'Comparar rapidez, calidad de integración y capacidad de reutilización.',
        'Compartir aprendizajes antes de incorporar nuevas prácticas al equipo.',
      ],
    },
    {
      title: 'DesignOps y calidad de entrega',
      summary:
        'Sesiones para mejorar el onboarding, la documentación, la nomenclatura y los happy paths entre equipos multidisciplinares sin añadir esfuerzo innecesario al día a día.',
      outcomes: [
        'Mejorar el onboarding de nuevas personas dentro del equipo.',
        'Documentar entregables, nomenclaturas y recorridos compartidos.',
        'Crear happy paths para distintas áreas sin aumentar la carga operativa.',
      ],
    },
  ],
}

export function getPortfolioProjectBySlug(slug) {
  return portfolioSection.projects.find((project) => project.slug === slug)
}
