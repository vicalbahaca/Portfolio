import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { ArrowLeftIcon } from '../../components/Icons'
import { getWorkProjectBySlug, recentProjects, siteConfig } from '../../data/siteContent'

const externalWebsiteProjects = new Set(['aaaquest', 'coubber', 'mycoach'])

export default function WorkProjectPage({ project }) {
  if (!project) {
    return (
      <Layout>
        <main className="page-hero">
          <div className="container page-hero__panel">
            <h1 className="page-title">Proyecto no encontrado</h1>
          </div>
        </main>
      </Layout>
    )
  }

  return (
    <>
      <Head>
        <title>{`${project.title} | ${siteConfig.name}`}</title>
        <meta name="description" content={project.subtitle} />
        <meta property="og:image" content={project.image} />
      </Head>

      <Layout>
        <main className="work-case-page work-case-page--recent" style={{ '--recent-accent': project.accent || '#0a0a0a' }}>
          <section className="work-case-hero" aria-labelledby="work-project-title">
            <div className="container work-case-hero__inner">
              <Link href="/#projects-north" className="back-link back-link--light">
                <span className="back-link__icon" aria-hidden="true">
                  <ArrowLeftIcon />
                </span>
                Volver
              </Link>

              <div className="work-case-hero__copy">
                <p className="work-case-hero__eyebrow">{project.role}</p>
                <h1 id="work-project-title" className="work-case-hero__title">
                  {project.title}
                </h1>
                <p className="work-case-hero__headline">{project.headline || project.subtitle}</p>
                {project.websiteUrl ? (
                  <p className="work-case-hero__action">
                    <a
                      className={`btn ${externalWebsiteProjects.has(project.slug) ? 'btn--brand work-case-hero__external-cta' : 'btn--primary'}`}
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {externalWebsiteProjects.has(project.slug) ? 'Visitar página web' : 'Visitar proyecto'}
                    </a>
                  </p>
                ) : null}
              </div>

            </div>
          </section>

          {project.detailSections?.length ? (
            <>
              <section className="page-section work-case-section" aria-labelledby="work-project-intro">
                <div className="container work-case-section__inner">
                  <div className="work-case-section__header">
                    <p className="work-case-section__index">01</p>
                    <div className="work-case-section__headline">
                      <h2 id="work-project-intro" className="section-heading">
                        Problema detectado
                      </h2>
                      {project.problemStatement ? <p className="work-case-problem__statement">{project.problemStatement}</p> : null}
                      {project.description ? (
                        <div className="work-case-problem__solution">
                          <p className="work-case-problem__label">¿Cómo lo soluciona?</p>
                          <p className="detail-copy detail-copy--lead">{project.description}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {project.highlights?.length ? (
                    <ul className="work-case-section__points">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  ) : null}

                  {project.visualDeck?.length ? (
                    <div className={`work-case-deck work-case-deck--${project.visualDeckLayout || Math.min(project.visualDeck.length, 3)}`}>
                      {project.visualDeck.map((media, mediaIndex) => (
                        <figure key={media.src} className="work-case-deck__figure">
                          <div className="work-case-deck__media" style={{ '--media-ratio': media.ratio || '16 / 10' }}>
                            <Image
                              className="work-case-media-image"
                              src={media.src}
                              alt={media.alt || project.title}
                              width={1600}
                              height={1000}
                              sizes="(max-width: 960px) 100vw, 33vw"
                            />
                          </div>
                          {!media.hideCaption ? (
                            <figcaption>
                              <span>{String(mediaIndex + 1).padStart(2, '0')}</span>
                              {media.caption || media.alt}
                            </figcaption>
                          ) : null}
                        </figure>
                      ))}
                    </div>
                  ) : null}
                </div>
              </section>

              {project.detailSections.map((section, index) => (
                <section key={section.title} className="page-section work-case-section" aria-labelledby={`work-section-${index + 2}`}>
                  <div className="container work-case-section__inner">
                    <div className="work-case-section__header">
                      <p className="work-case-section__index">{String(index + 2).padStart(2, '0')}</p>
                      <div className="work-case-section__headline">
                        <h2 id={`work-section-${index + 2}`} className="section-heading">
                          {section.title}
                        </h2>
                        {section.body ? <p className="detail-copy detail-copy--lead">{section.body}</p> : null}
                      </div>
                    </div>

                    {section.paragraphs?.length ? (
                      <div className="work-case-section__body">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="detail-copy">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : null}

                    {section.points?.length ? (
                      <ul className="work-case-section__points">
                        {section.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : null}

                    {section.gallery?.length ? (
                      <div className={`work-case-section__gallery work-case-section__gallery--${section.galleryLayout || Math.min(section.gallery.length, 3)}`}>
                        {section.gallery.map((media, mediaIndex) => (
                          <figure key={media.src} className="work-case-section__figure">
                            <div className="work-case-section__figure-media" style={{ '--media-ratio': media.ratio || '16 / 10' }}>
                              <Image
                                className="work-case-media-image"
                                src={media.src}
                                alt={media.alt || section.title}
                                width={1600}
                                height={1000}
                                sizes="(max-width: 960px) 100vw, 50vw"
                              />
                            </div>
                            {!media.hideCaption ? (
                              <figcaption>
                                <span>{String(mediaIndex + 1).padStart(2, '0')}</span>
                                {media.caption || media.alt}
                              </figcaption>
                            ) : null}
                          </figure>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </section>
              ))}
            </>
          ) : null}

        </main>
      </Layout>
    </>
  )
}

export function getStaticPaths() {
  return {
    paths: recentProjects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  return {
    props: {
      project: getWorkProjectBySlug(params.slug),
    },
  }
}
