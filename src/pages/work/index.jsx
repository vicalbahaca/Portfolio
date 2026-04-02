import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useLanguage } from '../../lib/i18n'

export default function WorkRedirectPage() {
  const { copy } = useLanguage()

  useEffect(() => {
    window.location.replace('/#work')
  }, [])

  return (
    <>
      <Head>
        <title>{copy.redirects.workTitle}</title>
        <meta httpEquiv="refresh" content="0;url=/#work" />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="/#work" />
      </Head>
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px' }}>
        <Link href="/#work">{copy.redirects.openingWork}</Link>
      </main>
    </>
  )
}
