# Design QA · InOne · versión 06

## Alcance

Una única síntesis editorial del caso InOne:

- Ruta: `/inone-case/sintesis/`
- Objetivo: conservar el hero del caso original y ordenar el contenido seleccionado de las cinco exploraciones en una narración vertical, sin solapamientos ni grids de contenido enfrentados.

## Fuentes visuales

- Hero original renderizado: `tmp/design-qa/inone/v6-source-original.png`
- Versión 03 renderizada: `tmp/design-qa/inone/v6-source-system.png`
- Recorte de decisiones y producto de la versión 03: `tmp/design-qa/inone/v6-source-system-product-crop.png`
- Pantallas públicas: `public/portfolio-north/inone-public/app-store-02.jpg` a `app-store-05.jpg`
- Reglas editoriales: `docs/rag/north-casos-exito-y-formatos.md`
- Estándares y límites de publicación: `docs/rag/portfolio-estandares-y-buenas-practicas.md`
- Evidencia pública: `docs/rag/north-evidencias-y-metricas.md`

## Implementación renderizada

### Evidencia previa

- Viewport: 1440 × 1000 CSS px.
- DPR: 1.
- Ancho útil del documento: 1425 CSS px.
- Captura completa: `tmp/design-qa/inone/v6-implementation-full-02.png`.
- Dimensiones de la captura: 1425 × 10860 px.
- Hero: `tmp/design-qa/inone/v6-hero-1440.png`.
- Producto final: `tmp/design-qa/inone/v6-product-1440.png`.

### Mobile

- Viewport: 390 × 844 CSS px.
- Ancho útil del documento: 375 CSS px.
- Captura completa: `tmp/design-qa/inone/v6-mobile-full-01.png`.
- Dimensiones de la captura: 375 × 12257 px.
- Hero: `tmp/design-qa/inone/v6-mobile-hero-01.png`.
- Desbordamiento horizontal del documento: ninguno.

## Comparación conjunta

Referencia e implementación aparecen juntas en:

- Hero: `tmp/design-qa/inone/v6-comparisons/v6-hero-comparison.jpg`
- Estructura completa: `tmp/design-qa/inone/v6-comparisons/v6-full-comparison.jpg`
- Producto final y pantallas: `tmp/design-qa/inone/v6-comparisons/v6-product-comparison.jpg`

La comparación se normalizó por ancho y DPR. La versión 6 es más larga que la referencia 03 porque desarrolla tres retos completos; mantiene sus patrones editoriales y elimina sus composiciones en columnas enfrentadas.

## Superficies de fidelidad

- **Tipografía:** hero sans de gran escala alineado con el original; cuerpo editorial con serif para títulos y lectura jerárquica. No hay cortes ni truncados.
- **Espaciado:** una sola columna narrativa, secciones separadas por reglas y suficiente espacio vertical. Los carriles se reservan para pasos, criterios, Design System y producto.
- **Color:** negro para hero y resultados de cada reto, papel cálido para el cuerpo y rojo únicamente para numeración y señalización.
- **Imágenes:** cuatro pantallas oficiales de App Store, completas, alineadas y sin recursos rotos. En mobile funcionan como carrusel horizontal.
- **Copy:** contexto breve, rol sin primera persona y tres retos con `problema / proceso y decisiones / resultado`. No aparecen tags ni una sección genérica de IA.

## Contenido y seguridad

- IKEA Visa, MediaMarkt Visa y Visa FNAC se citan como ejemplos públicos.
- Una fuente oficial de 2021 documenta la existencia de apps específicas para esos productos.
- Fuentes oficiales actuales muestran su gestión mediante InOne.
- La convergencia se presenta como contexto del proyecto, sin describir migraciones técnicas ni datos internos.
- La IA aparece únicamente dentro del proceso de documentación accesible y siempre con revisión humana.
- Solo se muestran métricas públicas actuales; no se atribuye causalidad exclusiva al trabajo de diseño.

## Interacción y runtime

- Un único `h1`.
- Enlace “Volver a proyectos” presente y operativo.
- Carriles horizontales disponibles en tablet y mobile.
- Enlaces públicos abren en una pestaña nueva.
- Cuatro imágenes cargadas y cero recursos rotos.
- Consola del navegador: 0 errores y 0 warnings.
- Ruta renderizada correctamente en desktop y mobile.

## Historial

- Primer intento de navegación: la nueva ruta devolvió 404 porque el servidor de desarrollo conservaba el listado anterior de rutas estáticas.
- Corrección de runtime: reinicio del servidor para regenerar `getStaticPaths`.
- Este incidente no produjo una corrección visual y no cuenta como iteración de diseño.
- Primera comparación visual conjunta: sin diferencias P0, P1 o P2 accionables.
- Iteración de anotaciones (23/07/2026):
  - hero con mayor separación entre título, subtítulo y metadatos;
  - descripciones auxiliares de contexto y rol eliminadas;
  - texto editorial de contexto y rol reducido;
  - encabezados ampliados para evitar saltos en desktop;
  - los tres retos contenidos en un único marco editorial;
  - resultados de cada reto a ancho completo;
  - criterios, Design System y decisiones de producto convertidos en listas de lectura, dejando el carril secuencial solo para procesos;
  - pantallas públicas alineadas desde su borde superior;
  - bloque final renombrado a “Resultados” y alcance simplificado a descargas públicas de Google Play.

## Hallazgos de la iteración actual

- [P0] Sin hallazgos de compilación. `npm run build` completó correctamente y la ruta estática de síntesis se genera.
- [P1] Verificación visual del navegador bloqueada. El navegador integrado inyecta `body { display: none; }` en las pestañas de `localhost`, por lo que las capturas nuevas quedan en blanco aunque el DOM y los estilos estén presentes. No es un estilo del proyecto.
- [P2] Pendiente de confirmación visual directa en desktop y mobile antes de declarar que esta segunda iteración está cerrada.
- [P3] El carril de procesos continúa desplazándose horizontalmente en tablet y móvil de forma intencional.

final result: blocked
