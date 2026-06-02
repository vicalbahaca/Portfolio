import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon } from '../../components/Icons'
import Layout from '../../components/Layout'
import { getNorthProjectBySlug, northSection, siteConfig } from '../../data/content'
import { useLanguage } from '../../lib/i18n'

function readLocalized(value, lang) {
  if (value && typeof value === 'object' && !Array.isArray(value) && ('es' in value || 'en' in value)) {
    return value[lang] || value.es || value.en || ''
  }

  return value
}

function localizeMediaItems(items, lang) {
  if (!Array.isArray(items)) return []

  return items.map((item) => ({
    ...item,
    alt: readLocalized(item.alt, lang) || item.alt || '',
    caption: readLocalized(item.caption, lang) || item.caption || '',
  }))
}

function localizeNorthProject(project, lang) {
  if (!project) return null

  return {
    ...project,
    summary: readLocalized(project.summary, lang),
    description: readLocalized(project.description, lang),
    detail: readLocalized(project.detail, lang),
    headline: readLocalized(project.headline, lang),
    role: readLocalized(project.role, lang),
    industry: readLocalized(project.industry, lang),
    scope: readLocalized(project.scope, lang),
    focus: readLocalized(project.focus, lang) || [],
    visualDeck: localizeMediaItems(project.visualDeck, lang),
    detailSections: (project.detailSections || []).map((section) => ({
      ...section,
      title: readLocalized(section.title, lang),
      body: readLocalized(section.body, lang),
      paragraphs: readLocalized(section.paragraphs, lang) || [],
      points: readLocalized(section.points, lang) || [],
      gallery: localizeMediaItems(section.gallery, lang),
    })),
  }
}

function getNorthStorySections(entry) {
  if (!entry?.detailSections?.length) return []

  return entry.detailSections.map((section, index) => ({
    ...section,
    anchorId: `north-section-${index + 1}`,
  }))
}

function getHeroTheme() {
  return {
    accent: '#ffffff',
    ink: '#091427',
    muted: 'rgba(13, 23, 38, 0.82)',
    subtle: 'rgba(13, 23, 38, 0.62)',
    border: 'rgba(13, 23, 38, 0.16)',
    panel: 'rgba(13, 23, 38, 0.04)',
    ctaBg: '#091427',
    ctaText: '#ffffff',
    ctaHover: 'rgba(9, 20, 39, 0.92)',
  }
}

function getMediaDimensions(ratio, fallbackWidth = 1600, fallbackHeight = 1000) {
  if (typeof ratio !== 'string') {
    return { width: fallbackWidth, height: fallbackHeight }
  }

  const [rawWidth, rawHeight] = ratio.split('/').map((value) => Number.parseFloat(value.trim()))

  if (!Number.isFinite(rawWidth) || !Number.isFinite(rawHeight) || rawWidth <= 0 || rawHeight <= 0) {
    return { width: fallbackWidth, height: fallbackHeight }
  }

  const needsScaling = rawWidth <= 20 && rawHeight <= 20
  const scale = needsScaling ? 100 : 1

  return {
    width: Math.round(rawWidth * scale),
    height: Math.round(rawHeight * scale),
  }
}

export default function NorthProjectDetailPage({ project }) {
  const { copy, lang } = useLanguage()
  const localizedProject = project ? localizeNorthProject(project, lang) : null
  const storySections = getNorthStorySections(localizedProject)
  const [lightboxMedia, setLightboxMedia] = useState(null)
  const closeLightbox = () => setLightboxMedia(null)
  const heroMediaDimensions = getMediaDimensions(localizedProject?.heroRatio || localizedProject?.imageRatio)
  const heroTheme = getHeroTheme(localizedProject?.accent)

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

  if (!localizedProject) {
    return (
      <Layout>
        <section className="page-hero">
          <div className="container page-hero__panel">
            <h1 className="page-title">{copy.work.notFound}</h1>
          </div>
        </section>
      </Layout>
    )
  }

  const heroFacts = [
    { label: copy.north.clientLabel, value: localizedProject.client },
    { label: copy.north.roleLabel, value: localizedProject.role },
    { label: copy.north.industryLabel, value: localizedProject.industry },
    { label: copy.north.scopeLabel, value: localizedProject.scope },
    { label: copy.north.impactLabel, value: localizedProject.metric },
  ].filter((item) => item.value)

  return (
    <>
      <Head>
        <title>{`${localizedProject.title} | ${copy.north.title} | ${siteConfig.name}`}</title>
        <meta
          name="description"
          content={localizedProject.description || localizedProject.summary || localizedProject.headline || copy.work.metaDescriptionFallback}
        />
        <meta property="og:image" content={localizedProject.image} />
      </Head>

      <Layout>
        <section
          className="work-case-hero"
          aria-labelledby="north-project-title"
          style={{
            '--work-accent': heroTheme.accent,
            '--work-hero-ink': heroTheme.ink,
            '--work-hero-muted': heroTheme.muted,
            '--work-hero-subtle': heroTheme.subtle,
            '--work-hero-border': heroTheme.border,
            '--work-hero-panel': heroTheme.panel,
            '--work-hero-cta-bg': heroTheme.ctaBg,
            '--work-hero-cta-text': heroTheme.ctaText,
            '--work-hero-cta-hover': heroTheme.ctaHover,
          }}
        >
          <div className="container work-case-hero__inner">
            <Link href="/#projects-north" className="back-link back-link--light">
              <span className="back-link__icon" aria-hidden="true">
                <ArrowLeftIcon />
              </span>
              {copy.north.back}
            </Link>

            <div className="work-case-hero__copy">
              <h1 id="north-project-title" className="work-case-hero__title">
                {localizedProject.title}
              </h1>
              <p className="work-case-hero__headline">{localizedProject.headline || localizedProject.summary}</p>
            </div>

            {heroFacts.length ? (
              <dl className="work-case-hero__facts">
                {heroFacts.map((fact) => (
                  <div key={`${localizedProject.slug}-${fact.label}`} className="work-case-hero__fact">
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            <article className="work-case-hero__feature">
              <button
                type="button"
                className="work-case-media-button work-case-media-button--feature"
                onClick={() =>
                  setLightboxMedia({
                    src: localizedProject.image,
                    alt: localizedProject.title,
                  })
                }
                aria-label={`${copy.work.expandImage}: ${localizedProject.title}`}
              >
                <div className="work-case-hero__feature-media">
                  <Image
                    className="work-case-media-image"
                    src={localizedProject.image}
                    alt={localizedProject.title}
                    width={heroMediaDimensions.width}
                    height={heroMediaDimensions.height}
                    priority
                    sizes="100vw"
                  />
                </div>
              </button>
            </article>
          </div>
        </section>

        <section className="page-section work-case-intro" aria-labelledby="north-intro-title">
          <div className="container work-case-intro__inner">
            <div className="work-case-intro__copy">
              <h2 id="north-intro-title" className="section-heading">
                {localizedProject.summary}
              </h2>
              {localizedProject.description ? <p className="detail-copy detail-copy--lead">{localizedProject.description}</p> : null}
            </div>
          </div>

          <div className="container">
            {localizedProject.visualDeck?.length ? (
              <div className={`work-case-deck work-case-deck--${Math.min(localizedProject.visualDeck.length, 3)}`}>
                {localizedProject.visualDeck.map((media, index) => (
                  <figure key={`${localizedProject.slug}-deck-${index}`} className="work-case-deck__figure">
                    <button
                      type="button"
                      className="work-case-media-button"
                      onClick={() =>
                        setLightboxMedia({
                          src: media.src,
                          alt: media.alt || localizedProject.title,
                          caption: media.caption,
                        })
                      }
                      aria-label={`${copy.work.expandImage}: ${media.alt || localizedProject.title}`}
                    >
                      <div className="work-case-deck__media">
                        <Image
                          className="work-case-media-image"
                          src={media.src}
                          alt={media.alt || localizedProject.title}
                          width={1600}
                          height={1000}
                          sizes="(max-width: 960px) 100vw, 33vw"
                        />
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
            key={`${localizedProject.slug}-${section.anchorId}`}
            className="page-section work-case-section"
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
                <div className={`work-case-section__gallery work-case-section__gallery--${section.galleryLayout || Math.min(section.gallery.length, 3)}`}>
                  {section.gallery.map((media, mediaIndex) => (
                    <figure key={`${section.title}-gallery-${mediaIndex}`} className="work-case-section__figure">
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
                          <Image
                            className="work-case-media-image"
                            src={media.src}
                            alt={media.alt || section.title}
                            width={media.width || 1600}
                            height={media.height || 1000}
                            sizes="(max-width: 960px) 100vw, 50vw"
                          />
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
            aria-label={lightboxMedia.alt || localizedProject.title}
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
                alt={lightboxMedia.alt || localizedProject.title}
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
    paths: northSection.projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  return {
    props: {
      project: getNorthProjectBySlug(params.slug) || null,
    },
  }
}
