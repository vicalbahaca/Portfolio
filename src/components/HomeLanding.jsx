import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { caseStudies, conceptDesigns, featuredArticles, siteConfig } from '../data/content'
import { ArrowUpRightIcon } from './Icons'
import { localizeArticle, localizeProject, useLanguage } from '../lib/i18n'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function HomeLanding() {
  const landingRef = useRef(null)
  const { copy, cvHref, lang } = useLanguage()
  const highlightedProjects = caseStudies.map((entry) => localizeProject(entry, lang))
  const secondaryProjects = conceptDesigns.slice(0, 4).map((entry) => localizeProject(entry, lang))
  const latestArticles = featuredArticles.map((entry) => localizeArticle(entry, lang))
  const articleDateFormatter = new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  useGSAP(
    () => {
      const revealBlock = (target, y = 34) => {
        gsap.from(target, {
          y,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: target,
            start: 'top 82%',
            once: true,
          },
        })
      }

      revealBlock('.home-work__top > *', 28)
      revealBlock('.home-secondary__top > *', 28)
      revealBlock('.home-profile__intro > *', 28)
      revealBlock('.home-profile__workflow > *', 24)
      revealBlock('.home-notes__intro > *', 28)
      revealBlock('.home-contact-band__inner > *', 28)

      gsap.from('.home-project-slot', {
        y: 54,
        opacity: 0,
        duration: 0.95,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.home-work__grid',
          start: 'top 78%',
          once: true,
        },
      })

      gsap.from('.home-project__link img', {
        scale: 1.08,
        duration: 1.4,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.home-work__grid',
          start: 'top 78%',
          once: true,
        },
      })

      ScrollTrigger.batch('.home-secondary-item, .home-point, .home-note, .home-profile__story > p', {
        start: 'top 84%',
        once: true,
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.72,
              ease: 'power3.out',
              stagger: 0.1,
              overwrite: true,
            }
          )
        },
      })

      gsap.to('.home-profile__visual', {
        yPercent: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: '.home-profile',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    },
    { scope: landingRef }
  )

  return (
    <div ref={landingRef} className="home-flow">
      <section id="work" className="home-section home-work" aria-labelledby="home-work-title">
        <div className="container home-block">
          <div className="home-work__top">
            <p className="home-label">{copy.home.featuredLabel}</p>
            <h2 id="home-work-title" className="home-title">
              {copy.home.featuredTitle}
            </h2>
          </div>

          <div className="home-work__grid">
            {highlightedProjects.map((project, index) => (
              <div key={project.slug} className={`home-project-slot home-project-slot--${index + 1}`}>
                <motion.article
                  className="home-project"
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  style={{ '--project-accent': project.accent }}
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="home-project__link"
                    aria-label={`${project.title}. ${project.subtitle}`}
                  >
                    <Image src={project.image} alt={project.title} fill sizes="(max-width: 960px) 100vw, 50vw" />

                    <div className="home-project__content">
                      <span className="home-project__index">0{index + 1}</span>
                      <p className="home-project__meta">{project.role}</p>
                      <h3>{project.title}</h3>
                      <p className="home-project__subtitle">{project.subtitle}</p>
                    </div>
                  </Link>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-secondary" aria-labelledby="home-secondary-title">
        <div className="container home-secondary__block">
          <div className="home-secondary__top">
            <p className="home-label">{copy.home.secondaryLabel}</p>
            <h2 id="home-secondary-title" className="home-title home-title--compact">
              {copy.home.secondaryTitle}
            </h2>
            <p className="home-caption">{copy.home.secondaryCaption}</p>
          </div>

          <div className="home-secondary__list">
            {secondaryProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="home-secondary-item"
                aria-label={`${project.title}. ${project.subtitle}`}
              >
                <div className="home-secondary-item__media">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 960px) 100vw, 150px" />
                </div>

                <div className="home-secondary-item__body">
                  <span className="home-secondary-item__label">{project.subtitle}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>

                <span className="home-secondary-item__arrow" aria-hidden="true">
                  <ArrowUpRightIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="home-section home-profile" aria-labelledby="home-about-title">
        <div className="container">
          <div className="home-profile__panel">
            <div className="home-profile__content">
              <div className="home-profile__intro">
                <p className="home-label">{copy.home.aboutLabel}</p>
                <h2 id="home-about-title" className="home-title">
                  {copy.home.aboutTitle}
                </h2>
                <p className="home-profile__lede">
                  {copy.home.aboutSummaryPrefix}{' '}
                  <span className="home-profile__lede-nowrap">{copy.home.aboutSummaryAccent}</span>
                  {copy.home.aboutSummarySuffix}
                </p>
              </div>

              <div className="home-profile__story">
                {copy.home.aboutBody.map((paragraph) => (
                  <p key={paragraph} className="home-profile__text">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="home-profile__experience" aria-labelledby="home-experience-title">
                <p className="home-label">{copy.home.experienceLabel}</p>
                <h3 id="home-experience-title" className="home-profile__workflow-title">
                  {copy.home.experienceTitle}
                </h3>
                <p className="home-profile__workflow-caption">{copy.home.experienceCaption}</p>

                <div className="home-experience__list">
                  {copy.home.experienceItems.map((item) => (
                    <article key={`${item.company}-${item.role}`} className="home-experience__item">
                      <div className="home-experience__head">
                        <div className="home-experience__title-group">
                          <h4>{item.company}</h4>
                          <p>{item.role}</p>
                        </div>
                        <span className="home-experience__period">{item.period}</span>
                      </div>
                      <p className="home-experience__summary">{item.summary}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="home-profile__workflow" aria-labelledby="home-workflow-title">
                <p className="home-label">{copy.home.workflowLabel}</p>
                <h3 id="home-workflow-title" className="home-profile__workflow-title">
                  {copy.home.workflowTitle}
                </h3>
                <p className="home-profile__workflow-caption">{copy.home.workflowCaption}</p>

                <ol className="home-profile__workflow-list">
                  {copy.home.workflowSteps.map((step) => (
                    <li key={step} className="home-profile__workflow-step">
                      <span className="home-profile__workflow-step-marker" aria-hidden="true" />
                      <span className="home-profile__workflow-step-copy">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <aside className="home-profile__aside">
              <div className="home-profile__visual">
                <Image src={siteConfig.avatar} alt={siteConfig.name} fill sizes="(max-width: 960px) 72vw, 24vw" />
              </div>
              <a
                className="btn btn--brand home-profile__aside-cta"
                href={cvHref}
                download={lang === 'en' ? 'CV_Victor Saiz_EN.pdf' : 'CV_Victor Saiz_ES.pdf'}
                aria-label={lang === 'en' ? copy.home.downloadCvEn : copy.home.downloadCvEs}
              >
                {lang === 'en' ? copy.home.downloadCvEn : copy.home.downloadCvEs}
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section id="articles" className="home-section home-notes" aria-labelledby="home-articles-title">
        <div className="container home-notes__block">
          <div className="home-notes__intro">
            <p className="home-label">{copy.home.articlesLabel}</p>
            <h2 id="home-articles-title" className="home-title home-title--compact">
              {copy.home.articlesTitle}
            </h2>
            <p className="home-caption">{copy.home.articlesCaption}</p>
          </div>

          <div className="home-notes__list">
            {latestArticles.map((article) => (
              <a
                key={article.slug}
                href={article.externalUrl}
                target="_blank"
                rel="noreferrer"
                className={`home-note${article.image ? '' : ' home-note--no-media'}`}
                aria-label={article.title}
              >
                {article.image ? (
                  <div className="home-note__media">
                    <Image src={article.image} alt={article.title} fill sizes="(max-width: 720px) 100vw, 132px" />
                  </div>
                ) : null}
                <div className="home-note__body">
                  <span className="home-note__meta">{article.topic}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  {article.publishedAt ? (
                    <span className="home-note__date">{articleDateFormatter.format(new Date(article.publishedAt))}</span>
                  ) : null}
                </div>
                <span className="home-note__arrow" aria-hidden="true">
                  <ArrowUpRightIcon />
                </span>
              </a>
            ))}
          </div>

          <Link href="/articles" className="inline-link">
            {copy.home.allArticles}
          </Link>
        </div>
      </section>

      <section id="contact" className="home-section home-contact-band" aria-labelledby="home-contact-title">
        <div className="container home-contact-band__inner">
          <h2 id="home-contact-title" className="home-title home-title--compact">
            {copy.home.contactTitle}
          </h2>
          <p className="home-caption">{copy.home.contactCaption}</p>

          <a className="btn btn--primary home-contact-band__cta" href={`mailto:${siteConfig.email}`} aria-label={copy.home.contactCta}>
            {copy.home.contactCta}
          </a>
        </div>
      </section>
    </div>
  )
}
