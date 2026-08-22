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
          'La entrada en aplicación del **Acta Europea de Accesibilidad** convirtió la accesibilidad en una responsabilidad continua para los productos financieros digitales.',
          'En verano de 2025, varios partners auditaron **cinco productos digitales: tres webs y dos aplicaciones nativas**. Todos presentaban barreras, aunque con diferente gravedad y naturaleza.',
        ],
        role: {
          bullets: [
            'Convertí las auditorías en un **backlog común**, con prioridades y fechas de entrega.',
            'Documenté en Figma los cambios visuales, de comportamiento y semántica necesarios.',
            'Acompañé el handoff y el **QA con teclado y tecnologías de asistencia**.',
          ],
        },
        challengesTitle: 'Proceso',
        challengesDescription: '',
        challenges: [
          {
            number: '01',
            title: 'Documentación de accesibilidad',
            problem:
              'Cada auditoría utilizaba evidencias y niveles de detalle diferentes. El reto era convertir los hallazgos en **decisiones claras, trazables y verificables** para diseño y tecnología.',
            process: [
              {
                title: 'Analizar',
                description: 'Revisar cada auditoría, los criterios afectados y las pantallas implicadas.',
              },
              {
                title: 'Planificar',
                description: 'Crear el backlog y las **fechas de entrega** de documentación y ajustes visuales.',
              },
              {
                title: 'Documentar y formar',
                description: 'Actualizar los archivos de Figma e impartir workshops prácticos al equipo.',
              },
              {
                title: 'Entregar',
                description: 'Compartir la documentación con equipos tecnológicos internos y externos.',
              },
              {
                title: 'QA',
                description: 'Validar con teclado, lectores de pantalla y otras tecnologías de asistencia.',
              },
            ],
            result:
              'Una documentación trazable para cada producto y una validación compartida entre diseño y tecnología.',
          },
        ],
      },
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
      client: 'Producto financiero B2C y B2B2C',
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
        contextLabel: 'Canales de captación B2C y B2B2C',
        productLabel: 'Pagos al consumo y financiación',
        context: [
          'Los canales de prescripción permiten contratar productos de pagos al consumo y financiación en entornos **B2C y B2B2C**.',
          'Había tres modalidades: **presencial**, desde comercios asociados; **online**, con redirección desde el checkout del comercio; e **híbrida**, iniciando el proceso de forma presencial y terminándolo online.',
          'Los activos se habían creado ad hoc para diferentes clientes y momentos. Esto generó duplicidades y diferencias en los datos solicitados para contratar un mismo producto.',
        ],
        role: {
          lead:
            'El objetivo fue ordenar un número elevado de canales de captación y preparar una **propuesta de unificación** alineada con negocio.',
          bullets: [
            'Inventarié activos, productos, propiedades, datos solicitados y dependencias.',
            'Comparé casos de uso para detectar duplicidades y diferencias necesarias.',
            'Preparé una propuesta común para reducir mantenimiento y costes de evolución.',
          ],
        },
        challengesTitle: 'Dos retos de la unificación',
        challengesDescription: 'Análisis del ecosistema y definición de una experiencia común para los canales online.',
        challenges: [
          {
            number: '01',
            title: 'Inventariar y analizar los canales actuales',
            problem:
              'El elevado número de canales no era solo una diferencia visual. Cada activo pedía datos y resolvía la contratación de forma distinta, aunque ofreciera líneas de crédito o préstamos similares.',
            process: [
              { title: 'Recoger', description: 'Inventariar **activos, productos, propiedades y dependencias**.' },
              { title: 'Comparar', description: 'Revisar en qué casos se utilizaba cada canal y qué datos pedía.' },
              { title: 'Diagnosticar', description: 'Separar duplicidades de diferencias necesarias por producto o usuario.' },
            ],
            result:
              'Un diagnóstico compartido del ecosistema, sus duplicidades y las decisiones que requerían una solución común.',
          },
          {
            number: '02',
            title: 'Definir la unificación de los canales online',
            problem:
              'La mayor duplicidad estaba en los canales online. Para unificarlos había que saber qué datos eran obligatorios por normativa, cuáles interesaban a CaixaBank y qué dependencias cambiaban entre clientes y no clientes.',
            process: [
              { title: 'Revisar', description: 'Validar uno a uno los canales online y la información solicitada.' },
              { title: 'Definir datos', description: 'Separar requisitos normativos de datos útiles para el alta y la contratación.' },
              { title: 'Resolver dependencias', description: 'Distinguir recorridos para **clientes CaixaBank y no clientes**.' },
              { title: 'Proponer', description: 'Diseñar una experiencia común para reducir activos y mantenimiento.' },
            ],
            result:
              'La propuesta de unificación se entregó a dirección y está actualmente en evaluación por parte de negocio.',
          },
        ],
      },
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
          bullets: [
            'Diseñador principal de la implementación de **cross-selling de seguros y financiación** en el checkout.',
            'Evolución y mantenimiento del software utilizado por los **gestores de oficinas**.',
            'Mejora continua de los journeys de **financiación, checkout y posventa** de Facilitea.com.',
          ],
        },
        challengesTitle: 'Dos retos de evolución',
        challengesDescription:
          'Los frentes que conectaron propuesta comercial, contratación y servicio posterior en una experiencia de producto coherente.',
        challenges: [
          {
            number: '01',
            title: 'Llevar seguros y financiación al checkout',
            problem:
              'Las versiones anteriores de Facilitea.com no incorporaban cross-selling de seguros para las distintas tipologías de producto ni una financiación integrada mediante **CaixaBank Payments & Consumer**. El reto era incluir ambas opciones en el momento de compra sin romper el checkout.',
            process: [
              { title: 'Benchmark', description: 'Comparar cómo otros e-commerce nacionales e internacionales integraban seguros y financiación.' },
              { title: 'Analizar journeys', description: 'Revisar usuarios, productos y decisiones de financiación con apoyo de analítica.' },
              { title: 'Diseñar seguros', description: 'Definir propuestas de cross-selling según la tipología de producto.' },
              { title: 'Integrar FinOnline', description: 'Incorporar la solicitud de préstamo dentro del checkout de Facilitea.' },
              { title: 'Validar', description: 'Contrastar la solución con negocio, legal y tecnología antes del handoff.' },
            ],
            result:
              'Una experiencia de compra preparada para ofrecer **seguros y financiación** dentro del checkout.',
          },
          {
            number: '02',
            title: 'Evolucionar la posventa de Facilitea.com',
            problem:
              'El área privada no mostraba toda la información necesaria sobre **pedidos, pagos, facturas, logística, envíos, incidencias y cancelaciones**. Para completar la experiencia era esencial mejorar el tracking, las comunicaciones por correo y las gestiones posteriores a la compra.',
            process: [
              { title: 'Inventariar', description: 'Ordenar las casuísticas de posventa para cada tipo de producto.' },
              { title: 'Rediseñar', description: 'Actualizar área privada y posventa según la nueva marca de Facilitea.' },
              { title: 'Documentar', description: 'Definir comunicaciones, pantallas, estados y especificaciones para tecnología.' },
              { title: 'Entregar', description: 'Alinear el handoff con los equipos responsables de cada producto.' },
              { title: 'QA', description: 'Validar las casuísticas antes y durante la subida a producción.' },
            ],
            result:
              'Un área privada alineada con la marca Facilitea y una posventa con mayor visibilidad sobre el pedido y sus gestiones.',
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
          'Los textos de los diferentes canales estaban repartidos entre **varios archivos de Figma**. Antes de cada entrega había que recopilarlos, revisar su comprensión y preparar sus traducciones.',
          'Diseñadores y PMs realizaban este trabajo de forma manual. El objetivo fue convertirlo en un flujo rápido, repetible y revisable desde el propio archivo de diseño.',
        ],
        role: {
          lead:
            'Se detectó una fricción repetida: el equipo necesitaba **exportar textos con rapidez**, pero desarrollo no podía prepararlos dentro de los timings requeridos.',
        },
        challengesTitle: 'La fricción que había que eliminar',
        challengesDescription: '',
        modelTitle: 'Cómo funciona el plugin',
        modelDescription: 'La herramienta parte de una selección en Figma y genera un documento preparado para revisión, traducción y entrega.',
        resultsTitle: 'Resultado',
        resultsDescription: '',
        challenges: [
          {
            number: '01',
            title: 'Automatizar la extracción y revisión de textos',
            problem:
              'Recuperar manualmente los textos de cada pantalla, ordenarlos en Excel, revisar su nivel B2 y preparar traducciones consumía tiempo de diseñadores y PMs y aumentaba el riesgo de omisiones.',
            process: [
              { title: 'Analizar el flujo', description: 'Entender cómo diseño y producto extraían textos y los organizaban en Excel.' },
              { title: 'Crear el MVP', description: 'Usar **IA** para construir una primera extracción desde una selección de Figma.' },
              { title: 'Evolucionar', description: 'Procesar más contenido, detectar nivel B2 y generar traducciones simultáneamente.' },
            ],
            result: 'Un único flujo para extraer, revisar y preparar textos, manteniendo siempre una **revisión humana** antes de la entrega.',
          },
        ],
        model: [
          { title: 'Seleccionar', description: 'El equipo marca en Figma las pantallas que quiere revisar.' },
          { title: 'Extraer', description: 'El plugin reúne los textos y elimina duplicados.' },
          { title: 'Revisar', description: 'La herramienta detecta el nivel B2 y propone los textos que requieren cambios.' },
          { title: 'Exportar', description: 'El Excel incorpora los textos y sus traducciones al catalán e inglés.' },
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
    'Sesiones prácticas para convertir problemas reales en decisiones y formas de trabajo útiles para el equipo.',
  image: '/portfolio-north/covers/workshops.png',
  principles: [
    {
      title: 'Partir de un problema real',
      text:
        'Empezamos por un problema, una fricción o una oportunidad concreta. Elegimos el formato adecuado para entenderlo y definir el siguiente paso.',
    },
    {
      title: 'Hacer para aprender',
      text:
        'Usamos ejercicios y casos reales para detectar problemas, compartir puntos de vista y probar soluciones.',
    },
    {
      title: 'Aprendizaje constante',
      text:
        'Recogemos lo aprendido y lo aplicamos al trabajo diario del equipo.',
    },
  ],
  tracks: [
    {
      title: 'Accesibilidad aplicada',
      summary:
        'WCAG, HTML semántico y documentación para convertir auditorías en decisiones de producto.',
      outcomes: [
        'Detectar barreras frecuentes desde diseño.',
        'Documentar comportamiento, semántica y estados.',
        'Preparar entregables claros para desarrollo y QA.',
      ],
    },
    {
      title: 'IA para diseño y producto',
      summary:
        'Uso práctico de IA para investigar, sintetizar, prototipar y documentar.',
      outcomes: [
        'Elegir herramientas según el problema.',
        'Prototipar y explorar soluciones.',
        'Valorar velocidad, calidad, privacidad y utilidad antes de usarlas.',
      ],
    },
    {
      title: 'Design chapters y Figma',
      summary:
        'Sesiones para compartir novedades de Figma, IA y formas de trabajo.',
      outcomes: [
        'Revisar actualizaciones y nuevas formas de colaborar.',
        'Convertir temas comunes en sesiones de aprendizaje.',
        'Combinar crítica de diseño, prototipado y revisión entre pares.',
      ],
    },
    {
      title: 'Prototipado con nuevas herramientas',
      summary:
        'Prueba de herramientas para elegir las que encajan con el Design System y el trabajo diario.',
      outcomes: [
        'Crear un prototipo con una herramienta distinta.',
        'Comparar rapidez, integración y reutilización.',
        'Compartir aprendizajes antes de adoptar nuevas prácticas.',
      ],
    },
    {
      title: 'DesignOps y calidad de entrega',
      summary:
        'Mejora de onboarding, documentación y entregables entre diseño, producto y tecnología.',
      outcomes: [
        'Mejorar el onboarding de nuevas personas.',
        'Documentar entregables, nomenclaturas y recorridos comunes.',
        'Definir recorridos claros para las distintas áreas.',
      ],
    },
  ],
}

export function getPortfolioProjectBySlug(slug) {
  return portfolioSection.projects.find((project) => project.slug === slug)
}
