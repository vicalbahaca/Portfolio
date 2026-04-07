import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeftIcon } from '../../components/Icons'
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
        <section className="page-hero articles-page-hero" aria-labelledby="articles-page-title">
          <div className="container writing-layout articles-page-hero__panel">
            <Link href="/" className="back-link">
              <span className="back-link__icon" aria-hidden="true">
                <ArrowLeftIcon />
              </span>
              {copy.articles.back}
            </Link>
            <h1 id="articles-page-title" className="page-title">
              {copy.articles.title}
            </h1>
            <p className="section-copy articles-page-hero__copy">{copy.articles.description}</p>
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
