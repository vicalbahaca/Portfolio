# North: evidencias, métricas y límites de publicación

## Estado

Base de trabajo para los cinco proyectos actuales. Las métricas públicas se revisaron el 23 de julio de 2026. Las cifras aportadas por Victor que no tienen fuente pública quedan marcadas como `declarada-por-victor` hasta confirmación.

## 1. InOne: evolución de la app

### Hechos utilizables

- Nombre público: `InOne · Financia y paga a plazos`.
- Producto público de CaixaBank Payments & Consumer.
- La ficha pública describe pagos, tarjetas, financiación, aplazamiento, control de gastos y wallet digital.
- El caso actual habla de rediseño end-to-end, arquitectura, sistema de diseño, accesibilidad y despliegue progresivo.

### Datos públicos observados

| Dato | Valor observado | Estado | Uso recomendado |
|---|---:|---|---|
| App Store, valoración | 4,6/5 | `verificada-publica` | Sí, con fecha y enlace |
| App Store, valoraciones | 8,4 mil | `verificada-publica` | Usar `más de 8.000 valoraciones` |
| Google Play, valoración | 4,7/5 | `verificada-publica` | Sí, con fecha y enlace |
| Google Play, reseñas | 9,75 mil aproximadamente | `verificada-publica` | Usar `más de 9.500 reseñas` |
| Google Play, descargas | 500K+ | `verificada-publica` | Solo como alcance público del producto, no como impacto de diseño |
| Valoración anterior | 2,3 | `declarada-por-victor` | No publicar hasta aportar captura o histórico verificable |

### Redacción segura provisional

> La evolución de InOne se produjo sobre un producto financiero público que hoy reúne pagos, tarjetas y financiación en una única app. Como contexto observable del producto —no como atribución causal al rediseño—, la ficha pública consultada el 23/07/2026 muestra una valoración de 4,6/5 en App Store, con más de 8.000 valoraciones, y de 4,7/5 en Google Play, con más de 9.500 reseñas y 500K+ descargas.

No escribir `el rediseño elevó la valoración` sin datos internos de antes/después, periodo comparable y control de otros factores.

Fuentes: [App Store](https://apps.apple.com/es/app/inone-financia-y-paga-a-plazos/id6502599330), [reseñas de App Store](https://apps.apple.com/es/app/inone-financia-y-paga-a-plazos/id6502599330?platform=iphone&see-all=reviews), [Google Play](https://play.google.com/store/apps/details?gl=es&hl=en&id=com.caixabankpc.nowpay).

### Evidencia adicional en slides de North

- `100% acreditado · cumplimiento de criterios WCAG 2.2`: `fuente-empresa` y `pendiente`. No publicar como cumplimiento total de toda la app sin confirmar alcance, muestra, organismo, fecha y aprobación de Growth.
- La slide aporta una formulación útil del trabajo: plan de accesibilidad, roadmap, coordinación técnica, navegación y orden de lectura, alternativas textuales, semántica, contraste y entregables validados.
- La fuente y las reglas de reutilización están documentadas en `north-casos-exito-y-formatos.md`.

## 2. Accesibilidad en productos financieros

### Hechos utilizables

- Alcance actual: más de cinco productos financieros.
- Plataformas: web pública, web privada, Android e iOS.
- Trabajo: auditoría, normalización de hallazgos, priorización, roadmap, user stories, handoff, QA y workshops.
- Marco público de referencia: Ley 11/2023, European Accessibility Act y WCAG 2.2.

### Métricas

- `Más de cinco productos`: `declarada-por-victor`; publicable si se puede defender sin revelar clientes.
- No inventar porcentaje de cumplimiento, defectos cerrados o reducción de incidencias.

## 3. Unificación de canales digitales / canales prescriptores

### Hechos utilizables

- Proyecto de producto financiero B2B2C.
- Trabajo de service design, arquitectura y modelo operativo.
- Problema: canales fragmentados con lógicas, vocabulario y niveles de servicio diferentes.
- Solución: inventario de canales, actores y capacidades; modelo común; workshops; matriz de decisiones; roadmap progresivo.

### Métricas

- `Más de X canales`: `pendiente`. No publicar una cifra hasta confirmar el número exacto o seleccionar un umbral defendible.
- No usar `100% de las plataformas` salvo que se documente claramente qué conjunto cerrado representa ese 100%.

## 4. Plugin para calidad y documentación

### Hechos utilizables

- Herramienta interna de DesignOps centrada en extracción de textos y automatización de controles/documentación.
- Comparativa declarada: de unas tres horas a unos tres minutos.
- Cálculo: reducción aproximada del 98,33% del tiempo; comunicar como `aproximadamente 98%`.

### Redacción segura provisional

> Automatizamos la extracción de textos que antes requería unas tres horas de trabajo manual y la convertimos en un flujo de aproximadamente tres minutos: una reducción cercana al 98% del tiempo de ejecución.

Estado: `declarada-por-victor`. Confirmar que la comparación usa la misma tarea, volumen y condiciones antes de presentarla como resultado definitivo. No hablar de expansión de textos si el alcance real es únicamente extracción.

## 5. Asistente para contratación de tarjeta prepago

### Hechos utilizables

- Concepto previo a lanzamiento público.
- Sin métricas de producción disponibles.
- Valor del caso: arquitectura conversacional, límites entre orientación y decisión financiera, derivación, accesibilidad, privacidad, trazabilidad y plan de medición.

### Redacción segura

> Al tratarse de una exploración previa a lanzamiento, el resultado no se presenta como impacto de negocio. El caso muestra la hipótesis de producto, los límites de seguridad y accesibilidad y el plan necesario para validar comprensión, confianza, derivación y abandono.

Estado de métricas: `no-publicar` / `pendiente`; no fabricar números.

## 6. Checklist antes de publicar un caso

- ¿La estructura coincide con los demás casos?
- ¿Se entiende el cambio antes de ver las pantallas?
- ¿Está claro qué hizo Victor y qué hizo el equipo?
- ¿La marca es pública y segura de mencionar?
- ¿Cada métrica tiene fuente, fecha y estado?
- ¿Se ha separado alcance del producto de impacto atribuible al trabajo?
- ¿Se han eliminado nombres, reglas, cifras y capturas confidenciales?
- ¿El resultado distingue producción, validación, hipótesis y aprendizaje?
- ¿Los datos procedentes de slides corporativas tienen aprobación externa o una fuente pública equivalente?
