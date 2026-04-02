import Head from 'next/head'
import Layout from '../../components/Layout'
import Articles from '../../components/Articles'
import { articles, siteConfig } from '../../data/content'
import { useLanguage } from '../../lib/i18n'

export default function ArticlesPage() {
  const { copy } = useLanguage()

  return (
    <>
      <Head>
        <title>{`${copy.articles.title} | ${siteConfig.name}`}</title>
        <meta name="description" content={copy.articles.metaDescription} />
      </Head>

      <Layout>
        <section className="page-hero" aria-labelledby="articles-page-title">
          <div className="container page-hero__panel">
            <span className="section-kicker">{copy.articles.kicker}</span>
            <h1 id="articles-page-title" className="page-title">
              {copy.articles.title}
            </h1>
            <p className="section-copy">{copy.articles.description}</p>
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
