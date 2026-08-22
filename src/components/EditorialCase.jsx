import Link from 'next/link'
import Image from 'next/image'
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

export default function EditorialCase({ caseStudy }) {
  const { editorialCase: content } = caseStudy
  const challengesTitle = content.challengesTitle ?? 'Tres retos de la unificación'
  const challengesDescription =
    content.challengesDescription ??
    'Los frentes que concentraron el análisis, la definición del modelo y la preparación de la primera fase.'
  const modelTitle = content.modelTitle ?? 'Una dirección común, entregable por fases'
  const modelDescription =
    content.modelDescription ??
    'El plan no buscaba homogeneizar por completo el servicio, sino definir qué debía ser común y qué requería una variante explícita.'
  const resultsTitle = content.resultsTitle ?? 'Entrega y resultado'
  const resultsDescription =
    content.resultsDescription ??
    'El resultado del trabajo fue una base de decisión y ejecución; no se presentan métricas de ahorro, conversión o cumplimiento sin una medición validada.'
  const hasResults = Boolean(content.results?.length)
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
            <h1>{caseStudy.title}</h1>
            <p>{caseStudy.headline}</p>
            {caseStudy.externalLink ? (
              <a
                className={styles.finalHeroExternalLink}
                href={caseStudy.externalLink.href}
                target="_blank"
                rel="noreferrer"
              >
                {caseStudy.externalLink.label}
              </a>
            ) : null}
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
          {content.contextMedia ? (
            <figure className={styles.finalContextMedia}>
              <Image
                src={content.contextMedia.src}
                alt={content.contextMedia.alt}
                width={2048}
                height={1196}
                sizes="(max-width: 800px) 100vw, 1400px"
              />
              {content.contextMedia.caption ? <figcaption>{content.contextMedia.caption}</figcaption> : null}
            </figure>
          ) : null}
        </section>

        <section className={`${styles.finalSection} ${styles.finalRole}`}>
          <SectionHeader number="02" title={content.roleTitle || 'Retos'} />
          {content.role.lead ? (
            <p className={styles.finalRoleLead}>
              <RichText text={content.role.lead} />
            </p>
          ) : null}
          {content.role.bullets?.length ? (
            <ul className={styles.finalRoleList}>
              {content.role.bullets.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        <section className={`${styles.finalSection} ${styles.finalChallenges}`}>
          <SectionHeader
            number="03"
            title={challengesTitle}
            description={challengesDescription}
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

        {content.model?.length ? (
          <section className={`${styles.finalSection} ${styles.finalProduct}`}>
            <SectionHeader
              number="04"
              title={modelTitle}
              description={modelDescription}
            />

            <ol className={styles.finalProductDecisionList}>
              {content.model.map((item, index) => (
                <li key={item.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>
                    <RichText text={item.description} />
                  </p>
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        {hasResults ? (
          <section className={`${styles.finalSection} ${styles.finalResults}`}>
            <SectionHeader
              number="05"
              title={resultsTitle}
              description={resultsDescription}
            />

            <ul className={styles.finalResultList}>
              {content.results.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>

            {content.learning ? <p className={styles.finalRoleLead}>{content.learning}</p> : null}

            {content.resultVideo ? (
              <figure className={styles.finalResultVideo}>
                <video controls playsInline preload="metadata">
                  <source src={content.resultVideo.src} type="video/mp4" />
                  Tu navegador no permite reproducir este vídeo.
                </video>
                <figcaption>{content.resultVideo.caption}</figcaption>
              </figure>
            ) : null}
          </section>
        ) : null}
      </div>

    </main>
  )
}
