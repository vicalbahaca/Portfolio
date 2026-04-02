import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { getWorkEntryBySlug, siteConfig, workEntries } from '../../data/content'
import { localizeProject, useLanguage } from '../../lib/i18n'

export default function WorkDetailPage({ entry }) {
  const { copy, lang } = useLanguage()
  const localizedEntry = entry ? localizeProject(entry, lang) : null

  if (!localizedEntry) {
    return (
      <Layout>
        <section className="page-hero">
          <div className="container empty-state">
            <h1 className="page-title">{copy.work.notFound}</h1>
          </div>
        </section>
      </Layout>
    )
  }

  return (
    <>
      <Head>
        <title>{`${localizedEntry.title} | ${siteConfig.name}`}</title>
        <meta
          name="description"
          content={localizedEntry.description || localizedEntry.summary || localizedEntry.headline || copy.work.metaDescriptionFallback}
        />
        <meta property="og:image" content={localizedEntry.image} />
      </Head>

      <Layout>
        <section className="page-hero page-hero--work-detail" aria-labelledby="work-page-title">
          <div className="container page-hero__panel page-hero__panel--work-detail">
            <Link href="/#work" className="back-link">
              {copy.work.back}
            </Link>
            <span className="section-kicker">{localizedEntry.category}</span>
            <h1 id="work-page-title" className="page-title">
              {localizedEntry.title}
            </h1>
            <p className="section-copy">{localizedEntry.headline || localizedEntry.summary}</p>
            <div className="page-hero__actions page-hero__actions--work-detail">
              {localizedEntry.websiteUrl ? (
                <a
                  className="btn btn--primary"
                  href={localizedEntry.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${copy.work.visitWebsite}: ${localizedEntry.title}`}
                >
                  {copy.work.visitWebsite}
                </a>
              ) : null}
            </div>
          </div>
        </section>

        <section className="page-section page-section--work-detail" style={{ paddingTop: 20 }}>
          <div className="container work-detail">
            <article className="work-detail__cover">
              {localizedEntry.videoUrl ? (
                <video
                  className="work-detail__video"
                  src={localizedEntry.videoUrl}
                  poster={localizedEntry.videoPoster || localizedEntry.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  aria-label={localizedEntry.title}
                />
              ) : (
                <Image src={localizedEntry.image} alt={localizedEntry.title} fill sizes="(max-width: 960px) 100vw, 58vw" />
              )}
            </article>

            <div className="work-detail__lead">
              <aside className="work-detail__meta-column">
                <div className="meta-list">
                  {(localizedEntry.facts || []).map((fact) => (
                    <div key={`${localizedEntry.slug}-${fact.label}`}>
                      <span>{fact.label}</span>
                      <p>{fact.value}</p>
                    </div>
                  ))}
                </div>
                {localizedEntry.highlights?.length ? (
                  <div className="work-detail__highlight-list">
                    {localizedEntry.highlights.map((item) => (
                      <p key={item} className="work-detail__highlight-pill">
                        {item}
                      </p>
                    ))}
                  </div>
                ) : null}
              </aside>

              <div className="work-detail__overview">
                <p className="detail-copy detail-copy--lead">{localizedEntry.summary}</p>
                <p className="detail-copy">{localizedEntry.description}</p>
              </div>
            </div>

            {localizedEntry.visualDeck?.length ? (
              <div
                className={`work-detail__visual-deck work-detail__visual-deck--${
                  localizedEntry.visualDeckLayout || Math.min(localizedEntry.visualDeck.length, 3)
                }`}
              >
                {localizedEntry.visualDeck.map((media, index) => (
                  <figure
                    key={`${localizedEntry.slug}-deck-${index}`}
                    className="work-detail__visual-figure"
                    style={{ '--media-ratio': media.ratio || '16 / 10' }}
                  >
                    <div className="work-detail__visual-media">
                      <Image src={media.src} alt={media.alt || localizedEntry.title} fill sizes="(max-width: 960px) 100vw, 33vw" />
                    </div>
                    {media.caption ? <figcaption>{media.caption}</figcaption> : null}
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {(localizedEntry.detailSections || []).map((section, sectionIndex) => (
          <section
            key={`${localizedEntry.slug}-${section.title}`}
            className={`page-section work-story-block${section.tone === 'blue' ? ' work-story-block--blue' : ''}`}
            aria-labelledby={`${localizedEntry.slug}-section-${sectionIndex}`}
          >
            <div className="container work-story-block__container">
              <div className="work-story-block__copy">
                <p className="section-kicker">{section.eyebrow || String(sectionIndex + 1).padStart(2, '0')}</p>
                <h2 id={`${localizedEntry.slug}-section-${sectionIndex}`} className="section-heading">
                  {section.title}
                </h2>
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
                <div
                  className={`work-story-block__gallery work-story-block__gallery--${
                    section.galleryLayout || Math.min(section.gallery.length, 3)
                  }`}
                >
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
