import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import { siteConfig } from '../data/content'

export default function DoodlebobPage() {
  return (
    <>
      <Head>
        <title>{`Doodlebob | ${siteConfig.name}`}</title>
        <meta
          name="description"
          content="Playful corner of the portfolio preserved as a local easter egg inside the coded version of the site."
        />
      </Head>

      <Layout>
        <section className="page-hero">
          <div className="container page-hero__panel">
            <span className="section-kicker">Easter Egg</span>
            <h1 className="page-title">ME HOY MINOY!</h1>
            <p className="section-copy">
              La versión local del portfolio mantiene a Doodlebob en el hero para conservar el lado más juguetón y menos
              corporativo de la web.
            </p>
          </div>
        </section>

        <section className="page-section" style={{ paddingTop: 24 }}>
          <div className="container detail-grid">
            <article className="surface-card detail-hero">
              <Image src={siteConfig.doodlebobArtwork} alt="Doodlebob sticker" fill sizes="(max-width: 960px) 100vw, 58vw" />
            </article>

            <aside className="detail-sidebar">
              <article className="surface-card detail-card">
                <div className="detail-card__body">
                  <span className="pill pill--light">Por qué existe</span>
                  <p className="detail-copy">
                    Las referencias a Bob Esponja forman parte del lenguaje visual de Victor, y ayudan a que la marca se sienta
                    menos corporativa y más personal.
                  </p>
                  <p className="detail-copy">
                    También explican la mezcla de color, humor y formas más exageradas que recorre el resto de la web.
                  </p>
                  <Link className="btn btn--outline" href="/">
                    Volver al inicio
                  </Link>
                </div>
              </article>
            </aside>
          </div>
        </section>
      </Layout>
    </>
  )
}
