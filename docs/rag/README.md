# Base RAG del portfolio

## Propósito

Esta carpeta contiene el contexto reutilizable para redactar, revisar y estructurar la home y los casos de proyecto del portfolio de Victor Saiz. Debe consultarse antes de modificar textos de North, crear nuevos casos o atribuir resultados.

## Orden de consulta

1. `portfolio-estandares-y-buenas-practicas.md`: reglas globales de estructura, voz, seguridad, marcas y métricas.
2. `north-casos-exito-y-formatos.md`: guía corporativa, formatos visuales, copys y datos extraídos de las slides de North compartidas por Victor.
3. `north-evidencias-y-metricas.md`: hechos, fuentes, datos públicos y límites de publicación para los cinco proyectos actuales de North.
4. `../research/portfolio-referencias-payments-service-design.md`: benchmark externo y patrones que se pueden estudiar, no copiar.
5. `../../src/data/portfolioNorth.js`: contenido publicado actualmente en la aplicación.

## Regla de mantenimiento

No sobrescribir una evidencia con una inferencia. Si cambia una métrica pública, una marca, el alcance real del trabajo o el estado de un proyecto, actualizar primero la ficha de evidencias y después el texto de producto.

## Estados de evidencia

- `verificada-publica`: aparece en una fuente pública enlazada y fechada.
- `fuente-empresa`: aparece en una presentación o documento corporativo proporcionado por Victor, pero no implica aprobación para uso externo.
- `declarada-por-victor`: dato aportado por Victor, pendiente de fuente pública o validación explícita.
- `inferida`: cálculo derivado de datos disponibles; publicar solo si la base y el cálculo son defendibles.
- `pendiente`: falta confirmar antes de usarlo como hecho.
- `no-publicar`: dato sensible, interno, confidencial o no atribuible con seguridad.
