# Estándares editoriales y de casos del portfolio

> Documento base para el RAG del portfolio. Estas reglas tienen prioridad sobre preferencias estéticas puntuales o sobre la estructura de un portfolio de referencia.

## 1. Principio superior: consistencia entre páginas

Todas las páginas de proyecto deben compartir una arquitectura narrativa, una voz y un modelo de datos comunes. Pueden añadir apartados específicos cuando el proyecto lo necesite, pero no deben cambiar el orden ni el nivel de detalle sin una razón clara.

### Estructura común

1. **Titular de cambio**: verbo + producto o servicio + tensión/resulto.
2. **Resumen de contexto**: cliente o nivel de anonimización, industria, rol, equipo, periodo y alcance.
3. **El problema y las restricciones**: usuario, negocio, regulación, operaciones, datos, canal o tecnología.
4. **Responsabilidad y decisiones**: qué hizo Victor, qué decisiones tomó y con quién trabajó.
5. **Solución**: tres a cinco decisiones de producto explicadas con evidencia visual o diagramas.
6. **Entrega y resultado**: qué se validó, qué se construyó, qué llegó a producción y qué cambió.
7. **Aprendizaje**: una conclusión honesta sobre riesgo, colaboración, escalabilidad o calidad.
8. **Fuentes y confidencialidad**: solo cuando aporten trazabilidad o ayuden a entender los límites.

## 2. Voz y tono

- Español directo, sobrio y concreto.
- Voz en primera persona cuando se describa la responsabilidad: `definí`, `estructuré`, `coordiné`, `validé`.
- Usar primera persona plural solo para trabajo realmente colectivo: `con el equipo diseñamos`, `acordamos con tecnología`, `validamos con negocio`.
- No usar `lideré` si el alcance real fue participación o coordinación.
- Presentar diseño como trabajo de producto y delivery, no como una galería de pantallas.
- Explicar restricciones antes de enseñar la solución.
- Usar párrafos cortos y listas solo para decisiones, hechos o resultados.
- Evitar superlativos, lenguaje de marketing, promesas genéricas de IA y frases imposibles de demostrar.
- Mantener la misma profundidad en todos los casos: contexto, problema, decisiones, entrega y aprendizaje.

## 3. Seguridad, marcas y anonimización

### Cuándo sí decir una marca

- Cuando el nombre sea público en una fuente oficial y su uso no exponga información interna.
- Cuando ayude a entender el producto y el vínculo profesional pueda defenderse.
- En el caso InOne, se puede mencionar `InOne` y `CaixaBank Payments & Consumer` porque aparecen públicamente en App Store y Google Play.

### Cuándo no decir una marca

- Cuando el proyecto sea confidencial, esté sujeto a NDA o el nombre no sea público.
- Cuando nombrarla permita deducir reglas de negocio, volúmenes, proveedores, clientes o arquitectura interna.
- Usar descriptores como `producto financiero de consumo`, `producto financiero B2B2C` o `web pública de contratación`.

### Qué anonimizar siempre que sea necesario

- Cliente, marca, producto interno, nombres de equipos y proveedores.
- Pantallas, reglas, cifras, segmentos, contratos y datos operativos no públicos.
- Capturas con información personal, identificadores, URLs internas o documentación privada.

El caso puede mantener valor usando el problema, el tipo de servicio, las restricciones, las decisiones y el resultado operativo sin revelar la identidad del cliente.

## 4. Métricas y resultados

Cada número debe incluir estado de evidencia y fecha de consulta. Separar siempre:

- **Métrica del producto**: usuarios, descargas, valoraciones o reseñas públicas.
- **Métrica del trabajo de diseño**: tiempo ahorrado, adopción, errores evitados, conversión o calidad.
- **Contexto de alcance**: número de plataformas, productos, canales o equipos.

No presentar una métrica del producto como impacto causado por Victor salvo que exista evidencia interna que lo demuestre y pueda publicarse. Mejor redactar: `Durante el periodo de evolución del producto, la ficha pública muestra...` que `mi rediseño aumentó...`.

### Cálculos

Si una tarea pasa de tres horas a tres minutos:

```text
Tiempo inicial: 180 minutos
Tiempo final: 3 minutos
Ahorro: (180 - 3) / 180 = 98,33 %
```

La formulación segura es `reducción aproximada del 98% del tiempo` o `de unas tres horas a unos tres minutos`, si ambos valores están validados. No redondear a 95%.

## 5. Cómo incorporar IA

No crear una sección genérica de IA. Integrarla en el caso concreto y explicar:

- Qué tarea aceleró.
- Qué fuentes o límites tuvo.
- Qué revisión humana se mantuvo.
- Cómo se gestionaron errores, privacidad y trazabilidad.

## 6. Patrones trasladables del benchmark

- Abrir con el cambio conseguido, no con una lista de herramientas.
- Incluir `Client / Role / Timeline / Team` o su equivalente anonimizado.
- Hacer visibles regulación, riesgo, operaciones, integraciones y dependencia tecnológica.
- Mostrar journey maps, blueprints o workshops solo cuando expliquen una decisión o un cambio de delivery.
- Contar el recorrido hasta producción: validación, handoff, QA, adopción y siguiente decisión.
- Declarar la confidencialidad de forma explícita; un caso protegido o anonimizado sigue siendo válido.
- Tratar un producto financiero como sistema end-to-end: datos, reglas, interfaz, operaciones y soporte.

## 7. Formatos visuales de casos

Las slides corporativas de North compartidas por Victor se documentan en `north-casos-exito-y-formatos.md`. Sus reglas principales son:

- Mostrar pantallas completas y legibles, priorizando elementos UX con valor explicativo.
- Preferir composiciones planas; no añadir dispositivos si no ayudan a entender el producto.
- Evitar cortes arbitrarios y mockups puramente estéticos.
- Usar comparativas web/mobile para demostrar adaptación o coherencia, no como decoración.
- Mostrar un Design System a través del problema que resuelve, sus estados, accesibilidad, documentación y relación con delivery.
- Utilizar matrices de research solo cuando el mismo conjunto de criterios produzca una decisión.
- Reservar vídeo para interacción, secuencia o comportamiento que una captura no pueda demostrar.

## 8. Aprobación externa

La guía corporativa indica que los casos de éxito deben ser revisados por Growth antes de compartirse externamente. En el portfolio personal:

- Una slide proporcionada por Victor puede usarse como fuente de trabajo, pero no convierte automáticamente sus cifras, logos o pantallas en material publicable.
- Las métricas corporativas deben conservar fecha, definición y estado `fuente-empresa` hasta tener aprobación o fuente pública.
- Cuando no exista aprobación, recrear diagramas, anonimizar pantallas y mantener solo el aprendizaje o el tipo de decisión.
