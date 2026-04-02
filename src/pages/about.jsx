import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useLanguage } from '../lib/i18n'

export default function AboutRedirectPage() {
  const { copy } = useLanguage()

  useEffect(() => {
    window.location.replace('/#about')
  }, [])

  return (
    <>
      <Head>
        <title>{copy.redirects.aboutTitle}</title>
        <meta httpEquiv="refresh" content="0;url=/#about" />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="/#about" />
      </Head>
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px' }}>
        <Link href="/#about">{copy.redirects.openingAbout}</Link>
      </main>
    </>
  )
}
