import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon } from '../../components/Icons'
import EditorialCase from '../../components/EditorialCase'
import Layout from '../../components/Layout'
import InOneCase from '../../components/InOneCase'
import { siteConfig } from '../../data/siteContent'
import { inoneCase } from '../../data/inoneCaseExplorations'
import { getPortfolioProjectBySlug, portfolioSection } from '../../data/portfolioNorth'
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
    metric: readLocalized(project.metric, lang),
    role: readLocalized(project.role, lang),
    industry: readLocalized(project.industry, lang),
    scope: readLocalized(project.scope, lang),
    focus: readLocalized(project.focus, lang) || [],
    visualDeck: localizeMediaItems(project.visualDeck, lang),
    sources: project.sources || [],
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
    accent: '#000000',
    ink: '#ffffff',
    muted: 'rgba(255, 255, 255, 0.82)',
    subtle: 'rgba(255, 255, 255, 0.62)',
    border: 'rgba(255, 255, 255, 0.18)',
    panel: 'rgba(255, 255, 255, 0.08)',
    ctaBg: '#ffffff',
    ctaText: '#091427',
    ctaHover: 'rgba(255, 255, 255, 0.9)',
  }
}

export default function NorthProjectDetailPage({ project }) {
  const { copy, lang } = useLanguage()
  const localizedProject = project ? localizeNorthProject(project, lang) : null
  const storySections = getNorthStorySections(localizedProject)
  const [lightboxMedia, setLightboxMedia] = useState(null)
  const closeLightbox = () => setLightboxMedia(null)
  const heroTheme = getHeroTheme()

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

  if (localizedProject?.slug === 'inone') {
    return (
      <>
        <Head>
          <title>InOne: evolución de la app | North | {siteConfig.name}</title>
          <meta name="description" content={inoneCase.summary} />
          <meta property="og:image" content={localizedProject.image} />
        </Head>
        <Layout hideFooter>
          <InOneCase caseStudy={inoneCase} />
        </Layout>
      </>
    )
  }

  if (localizedProject?.editorialCase) {
    return (
      <>
        <Head>
          <title>{`${localizedProject.title} | ${copy.north.title} | ${siteConfig.name}`}</title>
          <meta name="description" content={localizedProject.description || localizedProject.summary} />
          <meta property="og:image" content={localizedProject.image} />
        </Head>
        <Layout hideFooter>
          <EditorialCase caseStudy={localizedProject} />
        </Layout>
      </>
    )
  }

  if (!localizedProject) {
    return (
      <Layout hideFooter>
        <section className="page-hero">
          <div className="container page-hero__panel">
            <h1 className="page-title">{copy.work.notFound}</h1>
          </div>
        </section>
      </Layout>
    )
  }

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

      <Layout hideFooter>
        <div className={`work-case-page work-case-page--${localizedProject.slug}`}>
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

          {localizedProject.sources?.length ? (
            <section className="page-section work-case-sources" aria-labelledby="north-sources-title">
              <div className="container work-case-section__inner">
                <div className="work-case-section__header">
                  <div className="work-case-section__headline">
                    <h2 id="north-sources-title" className="section-heading">
                      Fuentes públicas de contexto
                    </h2>
                    <p className="detail-copy detail-copy--lead">
                      Referencias externas utilizadas para limitar el caso a información pública y verificable.
                    </p>
                  </div>
                </div>
                <ul className="work-case-sources__list">
                  {localizedProject.sources.map((source) => (
                    <li key={source.href}>
                      <a href={source.href} target="_blank" rel="noreferrer">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}
        </div>

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
    paths: portfolioSection.projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  return {
    props: {
      project: getPortfolioProjectBySlug(params.slug) || null,
    },
  }
}
