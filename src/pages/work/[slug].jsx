import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon } from '../../components/Icons'
import Layout from '../../components/Layout'
import { getWorkEntryBySlug, siteConfig, workEntries } from '../../data/content'
import { localizeProject, useLanguage } from '../../lib/i18n'

function getStorySections(entry) {
  if (!entry?.detailSections?.length) return []

  return entry.detailSections.map((section, index) => ({
    ...section,
    anchorId: `work-section-${index + 1}`,
  }))
}

export default function WorkDetailPage({ entry }) {
  const { copy, lang } = useLanguage()
  const localizedEntry = entry ? localizeProject(entry, lang) : null
  const storySections = getStorySections(localizedEntry)
  const [lightboxMedia, setLightboxMedia] = useState(null)
  const closeLightbox = () => setLightboxMedia(null)

  useEffect(() => {
    if (!lightboxMedia) return undefined

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox()
      }
    }

    document.body.style.overflow = 'hidden'
    document.body.classList.add('lightbox-open')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.classList.remove('lightbox-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxMedia])

  if (!localizedEntry) {
    return (
      <Layout shellClassName="page-shell--work">
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
        <section className="work-case-hero" aria-labelledby="work-page-title">
          <div className="container work-case-hero__inner">
            <Link href="/#work" className="back-link back-link--light">
              <span className="back-link__icon" aria-hidden="true">
                <ArrowLeftIcon />
              </span>
              {copy.work.back}
            </Link>

            <div className="work-case-hero__copy">
              <span className="section-kicker section-kicker--light">{localizedEntry.category}</span>
              <h1 id="work-page-title" className="work-case-hero__title">
                {localizedEntry.title}
              </h1>
              <p className="work-case-hero__headline">{localizedEntry.headline || localizedEntry.summary}</p>
            </div>

            {(localizedEntry.facts || []).length ? (
              <dl className="work-case-hero__facts">
                {localizedEntry.facts.map((fact) => (
                  <div key={`${localizedEntry.slug}-${fact.label}`} className="work-case-hero__fact">
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            <div className="work-case-hero__actions">
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

            <article className="work-case-hero__feature">
              {localizedEntry.videoUrl ? (
                <video
                  className="work-case-hero__feature-video"
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
                <button
                  type="button"
                  className="work-case-media-button work-case-media-button--feature"
                  onClick={() =>
                    setLightboxMedia({
                      src: localizedEntry.image,
                      alt: localizedEntry.title,
                    })
                  }
                  aria-label={`${copy.work.expandImage}: ${localizedEntry.title}`}
                >
                  <div className="work-case-hero__feature-media">
                    <Image src={localizedEntry.image} alt={localizedEntry.title} fill priority sizes="100vw" />
                  </div>
                </button>
              )}
            </article>
          </div>
        </section>

        <section className="page-section work-case-intro" aria-labelledby="work-intro-title">
          <div className="container work-case-intro__inner">
            <div className="work-case-intro__copy">
              <h2 id="work-intro-title" className="section-heading">
                {localizedEntry.summary}
              </h2>
              {localizedEntry.description ? <p className="detail-copy detail-copy--lead">{localizedEntry.description}</p> : null}
            </div>
          </div>

          <div className="container">
            {localizedEntry.visualDeck?.length ? (
              <div
                className={`work-case-deck work-case-deck--${
                  localizedEntry.visualDeckLayout || Math.min(localizedEntry.visualDeck.length, 3)
                }`}
              >
                {localizedEntry.visualDeck.map((media, index) => (
                  <figure
                    key={`${localizedEntry.slug}-deck-${index}`}
                    className="work-case-deck__figure"
                    style={{ '--media-ratio': media.ratio || '16 / 10' }}
                  >
                    <button
                      type="button"
                      className="work-case-media-button"
                      onClick={() =>
                        setLightboxMedia({
                          src: media.src,
                          alt: media.alt || localizedEntry.title,
                          caption: media.caption,
                        })
                      }
                      aria-label={`${copy.work.expandImage}: ${media.alt || localizedEntry.title}`}
                    >
                      <div className="work-case-deck__media">
                        <Image src={media.src} alt={media.alt || localizedEntry.title} fill sizes="(max-width: 960px) 100vw, 33vw" />
                      </div>
                    </button>
                    {media.caption ? <figcaption>{media.caption}</figcaption> : null}
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {storySections.map((section, sectionIndex) => (
          <section
            key={`${localizedEntry.slug}-${section.anchorId}`}
            className={`page-section work-case-section${section.tone === 'blue' ? ' work-case-section--blue' : ''}`}
            aria-labelledby={section.anchorId}
          >
            <div className="container work-case-section__inner">
              <div className="work-case-section__header">
                <p className="work-case-section__index">{String(sectionIndex + 1).padStart(2, '0')}</p>
                <div className="work-case-section__headline">
                  <h2 id={section.anchorId} className="section-heading">
                    {section.title}
                  </h2>
                  {section.body ? <p className="detail-copy detail-copy--lead">{section.body}</p> : null}
                </div>
              </div>

              <div className="work-case-section__body">
                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p key={`${section.title}-paragraph-${paragraphIndex}`} className="detail-copy">
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.points?.length ? (
                <ul className="work-case-section__points">
                  {section.points.map((point, pointIndex) => (
                    <li key={`${section.title}-point-${pointIndex}`}>{point}</li>
                  ))}
                </ul>
              ) : null}

              {section.gallery?.length ? (
                <div
                  className={`work-case-section__gallery work-case-section__gallery--${
                    section.galleryLayout || Math.min(section.gallery.length, 3)
                  }`}
                >
                  {section.gallery.map((media, mediaIndex) => (
                    <figure
                      key={`${section.title}-gallery-${mediaIndex}`}
                      className="work-case-section__figure"
                      style={{ '--media-ratio': media.ratio || '16 / 10' }}
                    >
                      <button
                        type="button"
                        className="work-case-media-button"
                        onClick={() =>
                          setLightboxMedia({
                            src: media.src,
                            alt: media.alt || section.title,
                            caption: media.caption,
                          })
                        }
                        aria-label={`${copy.work.expandImage}: ${media.alt || section.title}`}
                      >
                        <div className="work-case-section__figure-media">
                          <Image src={media.src} alt={media.alt || section.title} fill sizes="(max-width: 960px) 100vw, 50vw" />
                        </div>
                      </button>
                      {media.caption ? <figcaption>{media.caption}</figcaption> : null}
                    </figure>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ))}

        {lightboxMedia ? (
          <div
            className="work-case-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={lightboxMedia.alt || localizedEntry.title}
            onClick={closeLightbox}
          >
            <button
              type="button"
              className="work-case-lightbox__close"
              onClick={(event) => {
                event.stopPropagation()
                closeLightbox()
              }}
              onMouseDown={(event) => event.stopPropagation()}
              aria-label={copy.work.closeImage}
            >
              {copy.work.closeImage}
            </button>

            <figure className="work-case-lightbox__figure" onClick={(event) => event.stopPropagation()}>
              <Image
                className="work-case-lightbox__image"
                src={lightboxMedia.src}
                alt={lightboxMedia.alt || localizedEntry.title}
                width={1600}
                height={1200}
                sizes="100vw"
              />
              {lightboxMedia.caption ? <figcaption className="work-case-lightbox__caption">{lightboxMedia.caption}</figcaption> : null}
            </figure>
          </div>
        ) : null}
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
