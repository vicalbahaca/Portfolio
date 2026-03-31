import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HomeLanding from '../components/HomeLanding'
import { siteConfig } from '../data/content'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${siteConfig.name} | ${siteConfig.role}`}</title>
        <meta name="description" content={siteConfig.description} />
        <meta property="og:title" content={`${siteConfig.name} | ${siteConfig.role}`} />
        <meta property="og:description" content={siteConfig.description} />
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
