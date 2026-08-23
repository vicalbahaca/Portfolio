import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import { ArrowLeftIcon } from '../components/Icons'
import { siteConfig } from '../data/siteContent'
import { workshopsPage } from '../data/portfolioNorth'

export default function WorkshopsPage() {
  return (
    <>
      <Head>
        <title>{`${workshopsPage.title} | ${siteConfig.name}`}</title>
        <meta name="description" content={workshopsPage.description} />
        <meta property="og:title" content={`${workshopsPage.title} | ${siteConfig.name}`} />
        <meta property="og:description" content={workshopsPage.description} />
        <meta property="og:image" content={workshopsPage.image} />
      </Head>

      <Layout>
        <article className="workshops-page">
          <header className="workshops-hero">
            <div className="container workshops-hero__inner">
              <Link href="/#workshops" className="back-link">
                <span className="back-link__icon" aria-hidden="true">
                  <ArrowLeftIcon />
                </span>
                Volver
              </Link>
              <div className="workshops-hero__copy">
                <h1>{workshopsPage.title}</h1>
                <p>{workshopsPage.description}</p>
              </div>
              <figure className="workshops-hero__figure">
                <div className="workshops-hero__media">
                  <Image
                    src={workshopsPage.image}
                    alt="Personas participando en una sesión de facilitación de producto"
                    fill
                    sizes="(max-width: 620px) 280px, 50vw"
                    priority
                  />
                </div>
                <figcaption>Imagen de referencia. No corresponde a un workshop real.</figcaption>
              </figure>
            </div>
          </header>

          <section className="page-section workshops-principles" aria-labelledby="workshops-principles-title">
            <div className="container">
              <div className="workshops-section-heading">
                <span className="workshops-section-heading__index">01</span>
                <h2 id="workshops-principles-title">Objetivo</h2>
              </div>
              <div className="workshops-principles__grid">
                {workshopsPage.principles.map((principle, index) => (
                  <article key={principle.title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="page-section workshops-program" aria-labelledby="workshops-program-title">
            <div className="container">
              <div className="workshops-section-heading">
                <span className="workshops-section-heading__index">02</span>
                <h2 id="workshops-program-title">Líneas de trabajo</h2>
                <p>
                  Temas y prácticas que se adaptan a las necesidades de cada equipo.
                </p>
              </div>

              <div className="workshops-program__list">
                {workshopsPage.tracks.map((track, index) => (
                  <article key={track.title} className="workshops-track">
                    <div className="workshops-track__index">{String(index + 1).padStart(2, '0')}</div>
                    <div className="workshops-track__body">
                      <div className="workshops-track__title">
                        <h3>{track.title}</h3>
                      </div>
                      <p>{track.summary}</p>
                      <ul>
                        {track.outcomes.map((outcome) => (
                          <li key={outcome}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

        </article>
      </Layout>
    </>
  )
}
