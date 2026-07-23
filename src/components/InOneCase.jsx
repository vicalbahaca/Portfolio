/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { ArrowLeftIcon } from './Icons'
import styles from '../styles/InOneExploration.module.css'

function SectionHeader({ number, title, description }) {
  return (
    <header className={styles.finalSectionHeader}>
      <span>{number}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  )
}

function ProcessRail({ items }) {
  return (
    <ol className={styles.finalProcessRail}>
      {items.map((item, index) => (
        <li key={item.title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </li>
      ))}
    </ol>
  )
}

function PublicScreens({ caseStudy }) {
  return (
    <div className={styles.publicScreenPlate}>
      {caseStudy.publicScreens.slice(1, 5).map((screen, index) => (
        <figure key={screen.src}>
          <img src={screen.src} alt={screen.alt} width="600" height="1300" loading="lazy" />
          <figcaption>
            <span>{String(index + 1).padStart(2, '0')}</span>
            {screen.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

function StoreMetrics({ caseStudy }) {
  return (
    <aside className={styles.storeMetrics}>
      <p className={styles.storeMetricsLabel}>Resultados públicos actuales</p>
      <div>
        {caseStudy.storeMetrics.map((metric) => (
          <article key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.detail}</p>
          </article>
        ))}
      </div>
      <small>{caseStudy.resultContext}</small>
    </aside>
  )
}

export default function InOneCase({ caseStudy }) {
  const content = caseStudy.finalVersion

  return (
    <main className={`${styles.casePage} ${styles.finalCase}`}>
      <a className="skip-link" href="#case-content">
        Ir al contenido
      </a>

      <header className={styles.finalHero}>
        <div className={styles.finalHeroInner}>
          <Link href="/#projects-north" className={styles.finalBackLink}>
            <span aria-hidden="true">
              <ArrowLeftIcon />
            </span>
            Volver
          </Link>

          <div className={styles.finalHeroCopy}>
            <h1>InOne: evolución de la app</h1>
            <p>
              Evolución post-lanzamiento de una aplicación financiera para unificar productos, mejorar su
              accesibilidad y construir una experiencia preparada para crecer.
            </p>
            <a
              className={styles.finalHeroExternalLink}
              href="https://www.caixabankpc.com/es/appinone"
              target="_blank"
              rel="noreferrer"
            >
              Visitar InOne
            </a>
          </div>

        </div>
      </header>

      <div id="case-content" className={styles.finalContent}>
        <section className={styles.finalSection}>
          <SectionHeader number="01" title="Contexto" />
          <div className={styles.finalProse}>
            {content.context.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className={`${styles.finalSection} ${styles.finalRole}`}>
          <SectionHeader number="02" title="Desafío" />
          <p className={styles.finalRoleLead}>{content.role.lead}</p>
          <ul className={styles.finalRoleList}>
            {content.role.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={`${styles.finalSection} ${styles.finalChallenges}`}>
          <SectionHeader
            number="03"
            title="Tres retos de evolución"
            description="Los tres frentes que concentraron el análisis, la definición y el delivery del producto."
          />

          <div className={styles.finalChallengeList}>
            {content.challenges.map((challenge) => (
              <article key={challenge.number} className={styles.finalChallenge}>
                <header>
                  <span>{challenge.number}</span>
                  <h3>{challenge.title}</h3>
                </header>

                <div className={styles.finalChallengeProblem}>
                  <p className={styles.finalMicroLabel}>Qué había que resolver</p>
                  <p>{challenge.problem}</p>
                </div>

                <div className={styles.finalChallengeProcess}>
                  <p className={styles.finalMicroLabel}>Proceso y decisiones</p>
                  <ProcessRail items={challenge.process} />
                </div>

                {challenge.number === '02' ? (
                  <div className={styles.finalChallengeDetail}>
                    <p className={styles.finalMicroLabel}>Criterios incorporados al producto</p>
                    <ol className={styles.finalCriteriaList}>
                      {caseStudy.accessibilityCriteria.map((criterion, index) => (
                        <li key={criterion.title}>
                          <span>{String(index + 1).padStart(2, '0')}</span>
                          <h4>{criterion.title}</h4>
                          <p>{criterion.description}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                ) : null}

                {challenge.stakeholderDecisions ? (
                  <div className={styles.finalChallengeDetail}>
                    <p className={styles.finalMicroLabel}>Cómo se cerraron decisiones con cada área</p>
                    <div className={styles.finalStakeholderRows}>
                      {challenge.stakeholderDecisions.map((item) => (
                        <article key={item.title}>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                ) : null}

                {challenge.number === '03' ? (
                  <div className={styles.finalChallengeDetail}>
                    <div className={styles.finalDetailHeading}>
                      <p className={styles.finalMicroLabel}>Design System</p>
                      <h4>Una base construida para escalar</h4>
                    </div>
                    <ol className={styles.finalSystemRows}>
                      {content.system.map((item, index) => (
                        <li key={item.title}>
                          <span>{String(index + 1).padStart(2, '0')}</span>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                ) : null}

                <div className={styles.finalChallengeResult}>
                  <p className={styles.finalMicroLabel}>Resultado</p>
                  <p>{challenge.result}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.finalSection} ${styles.finalProduct}`}>
          <SectionHeader
            number="04"
            title="Versión final del producto"
            description="Patrones familiares, una navegación más directa y las operativas relevantes en primer nivel."
          />

          <ol className={styles.finalProductDecisionList}>
            {content.productDecisions.map((decision, index) => (
              <li key={decision.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{decision.title}</h3>
                <p>{decision.description}</p>
              </li>
            ))}
          </ol>

          <PublicScreens caseStudy={caseStudy} />
          <p className={styles.publicAssetNote}>Pantallas de la ficha pública actual de InOne en App Store.</p>
        </section>

        <section className={`${styles.finalSection} ${styles.finalResults}`}>
          <SectionHeader
            number="05"
            title="Resultados"
            description="Capacidades consolidadas durante la evolución y métricas públicas actuales del producto."
          />

          <ul className={styles.finalResultList}>
            {content.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>

          <StoreMetrics caseStudy={caseStudy} />
        </section>
      </div>

    </main>
  )
}
