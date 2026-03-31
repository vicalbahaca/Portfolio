import Head from 'next/head'
import Layout from '../../components/Layout'
import Articles from '../../components/Articles'
import { articles, siteConfig } from '../../data/content'

export default function ArticlesPage() {
  return (
    <>
      <Head>
        <title>{`Publicaciones | ${siteConfig.name}`}</title>
        <meta name="description" content="Archivo curado de publicaciones públicas de LinkedIn sobre producto, UX/UI y accesibilidad." />
      </Head>

      <Layout>
        <section className="page-hero">
          <div className="container page-hero__panel">
            <span className="section-kicker">Archivo</span>
            <h1 className="page-title">Publicaciones</h1>
            <p className="section-copy">
              Archivo completo de artículos, notas y posts sobre producto, UX/UI, accesibilidad y herramientas.
            </p>
          </div>
        </section>
        <Articles
          items={articles}
          showArchiveLink={false}
          showSectionHead={false}
          sectionId="articles-archive"
        />
      </Layout>
    </>
  )
}
