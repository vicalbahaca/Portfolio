import Head from 'next/head'
import Layout from '../components/Layout'
import HomeLandingProposal from '../components/HomeLandingProposal'
import { siteConfig } from '../data/content'
import { useLanguage } from '../lib/i18n'

export default function LandingProposalPage() {
  const { copy } = useLanguage()
  const pageTitle = `Propuesta landing | ${siteConfig.name}`
  const pageDescription = `${siteConfig.name}. ${copy.hero.statementLines.join(' ')}`

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

      <Layout shellClassName="page-shell--landing-proposal" hideContactBand>
        <HomeLandingProposal />
      </Layout>
    </>
  )
}
