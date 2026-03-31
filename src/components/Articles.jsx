import Image from 'next/image'
import Link from 'next/link'
import SectionReveal from './SectionReveal'
import { featuredArticles } from '../data/content'

export default function Articles({
  items = featuredArticles.slice(0, 4),
  title = 'Publicaciones',
  description = 'Archivo completo de artículos y notas publicados en el portfolio.',
  showArchiveLink = true,
  showSectionHead = true,
  sectionId = 'articles-archive',
}) {
  return (
    <section id={sectionId} className="page-section">
      <div className="container writing-layout">
        {showSectionHead ? (
          <SectionReveal className="section-head">
            <div>
              <p className="section-kicker">Publicaciones</p>
              <h2 className="section-heading">{title}</h2>
            </div>

            <p className="section-text">{description}</p>
          </SectionReveal>
        ) : null}

        <div className="writing-list">
          {items.map((article, index) => (
            <SectionReveal key={article.slug} delay={index * 0.04}>
              <a
                href={article.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="writing-item group"
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
                </div>
                <span className="writing-item__arrow">↗</span>
              </a>
            </SectionReveal>
          ))}
        </div>

        {showArchiveLink ? (
          <Link className="inline-link" href="/articles">
            Ver todas las publicaciones
          </Link>
        ) : null}
      </div>
    </section>
  )
}
