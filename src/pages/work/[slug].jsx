import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { getWorkEntryBySlug, siteConfig, workEntries } from '../../data/content'

export default function WorkDetailPage({ entry }) {
  if (!entry) {
    return (
      <Layout>
        <section className="page-hero">
          <div className="container empty-state">
            <h1 className="page-title">Project not found</h1>
          </div>
        </section>
      </Layout>
    )
  }

  return (
    <>
      <Head>
        <title>{`${entry.title} | ${siteConfig.name}`}</title>
        <meta name="description" content={entry.description || entry.summary || entry.headline} />
        <meta property="og:image" content={entry.image} />
      </Head>

      <Layout>
        <section className="page-hero page-hero--work-detail">
          <div className="container page-hero__panel page-hero__panel--work-detail">
            <Link href="/#work" className="back-link">
              ← Volver a proyectos
            </Link>
            <span className="section-kicker">{entry.category}</span>
            <h1 className="page-title">{entry.title}</h1>
            <p className="section-copy">{entry.headline || entry.summary}</p>
            <div className="page-hero__actions page-hero__actions--work-detail">
              {entry.websiteUrl ? (
                <a className="btn btn--primary" href={entry.websiteUrl} target="_blank" rel="noreferrer">
                  Visitar web
                </a>
              ) : null}
            </div>
          </div>
        </section>

        <section className="page-section page-section--work-detail" style={{ paddingTop: 20 }}>
          <div className="container work-detail">
            <article className="work-detail__cover">
              {entry.videoUrl ? (
                <video
                  className="work-detail__video"
                  src={entry.videoUrl}
                  poster={entry.videoPoster || entry.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              ) : (
                <Image src={entry.image} alt={entry.title} fill sizes="(max-width: 960px) 100vw, 58vw" />
              )}
            </article>

            <div className="work-detail__lead">
              <aside className="work-detail__meta-column">
                <div className="meta-list">
                  {(entry.facts || []).map((fact) => (
                    <div key={`${entry.slug}-${fact.label}`}>
                      <span>{fact.label}</span>
                      <p>{fact.value}</p>
                    </div>
                  ))}
                </div>
                {entry.highlights?.length ? (
                  <div className="work-detail__highlight-list">
                    {entry.highlights.map((item) => (
                      <p key={item} className="work-detail__highlight-pill">
                        {item}
                      </p>
                    ))}
                  </div>
                ) : null}
              </aside>

              <div className="work-detail__overview">
                <p className="detail-copy detail-copy--lead">{entry.summary}</p>
                <p className="detail-copy">{entry.description}</p>
              </div>
            </div>

            {entry.visualDeck?.length ? (
              <div className={`work-detail__visual-deck work-detail__visual-deck--${Math.min(entry.visualDeck.length, 3)}`}>
                {entry.visualDeck.map((media, index) => (
                  <figure
                    key={`${entry.slug}-deck-${index}`}
                    className="work-detail__visual-figure"
                    style={{ '--media-ratio': media.ratio || '16 / 10' }}
                  >
                    <div className="work-detail__visual-media">
                      <Image src={media.src} alt={media.alt || entry.title} fill sizes="(max-width: 960px) 100vw, 33vw" />
                    </div>
                    {media.caption ? <figcaption>{media.caption}</figcaption> : null}
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {(entry.detailSections || []).map((section) => (
          <section
            key={`${entry.slug}-${section.title}`}
            className={`page-section work-story-block${section.tone === 'blue' ? ' work-story-block--blue' : ''}`}
          >
            <div className="container work-story-block__container">
              <div className="work-story-block__copy">
                <p className="section-kicker">{section.eyebrow || section.title}</p>
                <h2 className="section-heading">{section.title}</h2>
                {section.body ? <p className="detail-copy detail-copy--lead">{section.body}</p> : null}
                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p key={`${section.title}-paragraph-${paragraphIndex}`} className="detail-copy">
                    {paragraph}
                  </p>
                ))}
                {section.points?.length ? (
                  <div className="work-detail__points">
                    {section.points.map((point, pointIndex) => (
                      <p key={`${section.title}-point-${pointIndex}`}>{point}</p>
                    ))}
                  </div>
                ) : null}
              </div>

              {section.gallery?.length ? (
                <div className={`work-story-block__gallery work-story-block__gallery--${Math.min(section.gallery.length, 3)}`}>
                  {section.gallery.map((media, mediaIndex) => (
                    <figure
                      key={`${section.title}-gallery-${mediaIndex}`}
                      className="work-story-block__figure"
                      style={{ '--media-ratio': media.ratio || '16 / 10' }}
                    >
                      <div className="work-story-block__figure-media">
                        <Image src={media.src} alt={media.alt || section.title} fill sizes="(max-width: 960px) 100vw, 50vw" />
                      </div>
                      {media.caption ? <figcaption>{media.caption}</figcaption> : null}
                    </figure>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ))}
      </Layout>
    </>
  )
}

export function getStaticPaths() {
  return {
    paths: workEntries.map((entry) => ({ params: { slug: entry.slug } })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  return {
    props: {
      entry: getWorkEntryBySlug(params.slug) || null,
    },
  }
}
