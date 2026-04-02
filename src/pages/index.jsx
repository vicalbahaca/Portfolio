import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HomeLanding from '../components/HomeLanding'
import { siteConfig } from '../data/content'
import { useLanguage } from '../lib/i18n'

export default function Home() {
  const { copy } = useLanguage()
  const pageTitle = `${siteConfig.name} | ${copy.site.role}`
  const pageDescription = `${copy.home.aboutSummaryPrefix} ${copy.home.aboutSummaryAccent}${copy.home.aboutSummarySuffix}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={siteConfig.avatar.src || siteConfig.avatar} />
      </Head>

      <Layout shellClassName="page-shell--home">
        <Hero />
        <HomeLanding />
      </Layout>
    </>
  )
}
