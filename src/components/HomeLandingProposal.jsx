import Image from 'next/image'
import Link from 'next/link'
import { caseStudies, conceptDesigns, featuredArticles, northSection, siteConfig } from '../data/content'
import { localizeArticle, localizeProject, useLanguage } from '../lib/i18n'
import { ArrowUpRightIcon } from './Icons'

export default function HomeLandingProposal() {
  const { copy, cvHref, lang } = useLanguage()
  const mainProjects = caseStudies.slice(0, 4).map((entry) => localizeProject(entry, lang))
  const northProjects = northSection.projects.slice(0, 3).map((entry) => localizeProject(entry, lang))
  const secondaryProjects = conceptDesigns.slice(0, 3).map((entry) => localizeProject(entry, lang))
  const articles = featuredArticles.slice(0, 3).map((entry) => localizeArticle(entry, lang))
  const heroStatement = copy.hero.statementLines.join(' ')
  const getText = (value) => {
    if (typeof value === 'string') return value
    if (value && typeof value === 'object') return value[lang] || value.es || value.en || ''
    return ''
  }
  const northSummary = getText(northSection.summary)

  return (
    <div className="proposal-home">
      <section className="proposal-hero" id="top" aria-labelledby="proposal-title">
        <div className="proposal-container proposal-hero__grid">
          <div className="proposal-hero__copy">
            <p className="proposal-role">{copy.site.role}</p>
            <h1 id="proposal-title">Victor Saiz</h1>
            <p className="proposal-hero__statement">{heroStatement}</p>
            <div className="proposal-actions">
              <a className="proposal-button proposal-button--primary" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              <a
                className="proposal-button"
                href={cvHref}
                download={lang === 'en' ? 'VictorSaiz_CV_EN.pdf' : 'VictorSaiz_CV_ES.pdf'}
              >
                {lang === 'en' ? copy.home.downloadCvEn : copy.home.downloadCvEs}
              </a>
            </div>
          </div>

          <div className="proposal-hero__media" aria-hidden="true">
            <Image src={siteConfig.avatar} alt="" fill sizes="(max-width: 760px) 80vw, 34vw" priority quality={95} />
          </div>
        </div>
      </section>

      <section className="proposal-section proposal-principles" aria-label={lang === 'en' ? 'Work principles' : 'Principios de trabajo'}>
        <div className="proposal-container proposal-principles__grid">
          <article>
            <h2>{lang === 'en' ? 'Product' : 'Producto'}</h2>
            <p>{lang === 'en' ? 'Business context, priorities, and viable scope before interface volume.' : 'Contexto de negocio, prioridades y alcance viable antes de generar volumen de interfaz.'}</p>
          </article>
          <article>
            <h2>{lang === 'en' ? 'Interface' : 'Interfaz'}</h2>
            <p>{lang === 'en' ? 'Clear flows, direct hierarchy, accessible states, and fewer ornamental decisions.' : 'Flujos claros, jerarquia directa, estados accesibles y menos decisiones ornamentales.'}</p>
          </article>
          <article>
            <h2>{lang === 'en' ? 'Build' : 'Construccion'}</h2>
            <p>{lang === 'en' ? 'Design decisions close enough to code to ship without losing intent.' : 'Decisiones de diseño suficientemente cerca del codigo para salir sin perder intencion.'}</p>
          </article>
        </div>
      </section>

      <section id="projects-north" className="proposal-section proposal-north" aria-labelledby="proposal-north-title">
        <div className="proposal-container proposal-split">
          <div className="proposal-section__intro">
            <h2 id="proposal-north-title">{copy.home.northTitle}</h2>
            <p>{northSummary}</p>
            <Link className="proposal-text-link" href="/projects-north">
              {copy.home.northCta}
              <ArrowUpRightIcon />
            </Link>
          </div>

          <div className="proposal-project-list">
            {northProjects.map((project) => (
              <Link key={project.slug} href={`/projects-north/${project.slug}`} className="proposal-project-row">
                <span>{getText(project.title)}</span>
                <p>{getText(project.headline || project.summary)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="proposal-section" aria-labelledby="proposal-work-title">
        <div className="proposal-container">
          <div className="proposal-section__intro proposal-section__intro--wide">
            <h2 id="proposal-work-title">{copy.home.featuredTitle}</h2>
            <p>{copy.home.aboutBody[1]}</p>
          </div>

          <div className="proposal-work-grid">
            {mainProjects.map((project) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="proposal-work-item">
                <div className="proposal-work-item__media">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 860px) 100vw, 50vw" />
                </div>
                <div className="proposal-work-item__copy">
                  <span>{getText(project.role)}</span>
                  <h3>{getText(project.title)}</h3>
                  <p>{getText(project.subtitle)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="other-projects" className="proposal-section" aria-labelledby="proposal-other-title">
        <div className="proposal-container proposal-split">
          <div className="proposal-section__intro">
            <h2 id="proposal-other-title">{copy.home.secondaryTitle}</h2>
            <p>{copy.home.secondaryCaption}</p>
          </div>

          <div className="proposal-compact-list">
            {secondaryProjects.map((project) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="proposal-compact-row">
                <span>{getText(project.title)}</span>
                <p>{getText(project.summary)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="proposal-section proposal-about" aria-labelledby="proposal-about-title">
        <div className="proposal-container proposal-about__grid">
          <div className="proposal-section__intro">
            <h2 id="proposal-about-title">{copy.home.aboutTitle}</h2>
            <p className="proposal-about__lede">
              {copy.home.aboutSummaryPrefix} {copy.home.aboutSummaryAccent}
              {copy.home.aboutSummarySuffix}
            </p>
          </div>

          <div className="proposal-about__body">
            {copy.home.aboutBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="proposal-experience" aria-labelledby="proposal-experience-title">
            <h3 id="proposal-experience-title">{copy.home.experienceTitle}</h3>
            {copy.home.experienceItems.slice(0, 5).map((item) => (
              <article key={`${item.company}-${item.role}`} className="proposal-experience__item">
                <div>
                  <h4>{item.company}</h4>
                  <p>{item.role}</p>
                </div>
                <time>{item.period}</time>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="proposal-section" aria-labelledby="proposal-articles-title">
        <div className="proposal-container proposal-split">
          <div className="proposal-section__intro">
            <h2 id="proposal-articles-title">{copy.home.articlesTitle}</h2>
            <p>{copy.home.articlesCaption}</p>
            <Link className="proposal-text-link" href="/articles">
              {copy.home.allArticles}
              <ArrowUpRightIcon />
            </Link>
          </div>

          <div className="proposal-compact-list">
            {articles.map((article) => (
              <a key={article.slug} href={article.externalUrl} target="_blank" rel="noreferrer" className="proposal-compact-row">
                <span>{article.title}</span>
                <p>{article.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="proposal-contact" aria-labelledby="proposal-contact-title">
        <div className="proposal-container proposal-contact__inner">
          <h2 id="proposal-contact-title">{copy.home.contactTitle}</h2>
          <p>{copy.home.contactCaption}</p>
          <a className="proposal-button proposal-button--primary" href={`mailto:${siteConfig.email}`}>
            {copy.home.contactCta}
          </a>
        </div>
      </section>
    </div>
  )
}
