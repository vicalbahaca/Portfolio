/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { ArrowLeftIcon } from './Icons'
import RichText from './RichText'
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
          <p>
            <RichText text={item.description} />
          </p>
        </li>
      ))}
    </ol>
  )
}

function PublicScreens({ caseStudy }) {
  const screenIndexes = caseStudy.finalVersion.publicScreenIndexes || [1, 2, 3, 4]

  return (
    <div className={styles.publicScreenPlate}>
      {screenIndexes.map((screenIndex, index) => {
        const screen = caseStudy.publicScreens[screenIndex]

        return (
          <figure key={screen.src}>
            <img src={screen.src} alt={screen.alt} width="600" height="1300" loading="lazy" />
            <figcaption>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {screen.caption}
            </figcaption>
          </figure>
        )
      })}
    </div>
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
              <p key={paragraph}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
          {content.contextScreens?.length ? (
            <div className={styles.finalContextScreens}>
              {content.contextScreens.map((screen) => (
                <figure key={screen.src}>
                  <img src={screen.src} alt={screen.alt} width="230" height="499" loading="lazy" />
                </figure>
              ))}
            </div>
          ) : null}
        </section>

        <section className={`${styles.finalSection} ${styles.finalRole}`}>
          <SectionHeader number="02" title="Desafío" />
          <p className={styles.finalRoleLead}>
            <RichText text={content.role.lead} />
          </p>
          <ul className={styles.finalRoleList}>
            {content.role.bullets.map((item) => (
              <li key={item}>
                <RichText text={item} />
              </li>
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
                  <p>
                    <RichText text={challenge.problem} />
                  </p>
                </div>

                <div className={styles.finalChallengeProcess}>
                  <p className={styles.finalMicroLabel}>Proceso y decisiones</p>
                  <ProcessRail items={challenge.process} />
                </div>

                {challenge.stakeholderDecisions ? (
                  <div className={styles.finalChallengeDetail}>
                    <p className={styles.finalMicroLabel}>Cómo se cerraron decisiones con cada área</p>
                    <div className={styles.finalStakeholderRows}>
                      {challenge.stakeholderDecisions.map((item) => (
                        <article key={item.title}>
                          <h4>{item.title}</h4>
                          <p>
                            <RichText text={item.description} />
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>
                ) : null}

                {challenge.number === '03' ? (
                  <div className={styles.finalChallengeDetail}>
                    <div className={styles.finalDetailHeading}>
                      <h4>Design System</h4>
                    </div>
                    <ol className={styles.finalSystemRows}>
                      {content.system.map((item, index) => (
                        <li key={item.title}>
                          <span>{String(index + 1).padStart(2, '0')}</span>
                          <h4>{item.title}</h4>
                          <p>
                            <RichText text={item.description} />
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                ) : null}

                <div className={styles.finalChallengeResult}>
                  <p className={styles.finalMicroLabel}>Resultado</p>
                  <p>
                    <RichText text={challenge.result} />
                  </p>
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
                <p>
                  <RichText text={decision.description} />
                </p>
              </li>
            ))}
          </ol>

          <PublicScreens caseStudy={caseStudy} />
          <p className={styles.publicAssetNote}>Pantallas de la ficha pública actual de InOne en App Store.</p>
        </section>

      </div>

    </main>
  )
}
