import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import { siteConfig } from '../data/content'
import { useLanguage } from '../lib/i18n'

export default function DoodlebobPage() {
  const { copy } = useLanguage()

  return (
    <>
      <Head>
        <title>{`Doodlebob | ${siteConfig.name}`}</title>
        <meta name="description" content={copy.doodlebob.metaDescription} />
      </Head>

      <Layout>
        <section className="page-hero">
          <div className="container page-hero__panel">
            <h1 className="page-title">{copy.doodlebob.title}</h1>
            <p className="section-copy">{copy.doodlebob.description}</p>
          </div>
        </section>

        <section className="page-section" style={{ paddingTop: 24 }}>
          <div className="container detail-grid">
            <article className="surface-card detail-hero">
              <Image src={siteConfig.doodlebobArtwork} alt="Doodlebob sticker" fill sizes="(max-width: 960px) 100vw, 58vw" />
            </article>

            <div className="detail-sidebar">
              <article className="surface-card detail-card">
                <div className="detail-card__body">
                  <span className="pill pill--light">{copy.doodlebob.reason}</span>
                  <p className="detail-copy">{copy.doodlebob.bodyOne}</p>
                  <p className="detail-copy">{copy.doodlebob.bodyTwo}</p>
                  <Link className="btn btn--outline" href="/">
                    {copy.doodlebob.back}
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
