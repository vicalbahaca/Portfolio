import Image from 'next/image'
import Link from 'next/link'
import SectionReveal from './SectionReveal'
import { featuredArticles } from '../data/content'
import { useLanguage } from '../lib/i18n'

export default function Articles({
  items = featuredArticles.slice(0, 4),
  title,
  description,
  showArchiveLink = true,
  showSectionHead = true,
  sectionId = 'articles-archive',
}) {
  const { copy, lang } = useLanguage()
  const resolvedTitle = title || copy.articles.title
  const resolvedDescription = description || copy.articles.archiveDescription
  const headingId = `${sectionId}-title`
  const articleDateFormatter = new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <section id={sectionId} className="page-section" aria-labelledby={headingId}>
      <div className="container writing-layout">
        {showSectionHead ? (
          <SectionReveal className="section-head">
            <div>
              <p className="section-kicker">{copy.articles.sectionKicker}</p>
              <h2 id={headingId} className="section-heading">
                {resolvedTitle}
              </h2>
            </div>

            <p className="section-text">{resolvedDescription}</p>
          </SectionReveal>
        ) : null}

        <div className="writing-list">
          {items.map((article, index) => (
            <SectionReveal key={article.slug} delay={index * 0.04}>
              <a
                href={article.externalUrl}
                target="_blank"
                rel="noreferrer"
                className={`writing-item group${article.image ? '' : ' writing-item--no-media'}`}
                aria-label={article.title}
              >
                <span className="writing-item__index">0{index + 1}</span>
                {article.image ? (
                  <div className="writing-item__media">
                    <Image src={article.image} alt={article.title} fill sizes="(max-width: 960px) 100vw, 168px" />
                  </div>
                ) : null}
                <div className="writing-item__body">
                  <p className="writing-item__meta">{article.topic}</p>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  {article.publishedAt ? (
                    <span className="writing-item__date">{articleDateFormatter.format(new Date(article.publishedAt))}</span>
                  ) : null}
                </div>
                <span className="writing-item__arrow">↗</span>
              </a>
            </SectionReveal>
          ))}
        </div>

        {showArchiveLink ? (
          <Link className="inline-link" href="/articles">
            {copy.articles.allArticles}
          </Link>
        ) : null}
      </div>
    </section>
  )
}
