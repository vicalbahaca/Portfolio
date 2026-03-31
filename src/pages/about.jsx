import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function AboutRedirectPage() {
  useEffect(() => {
    window.location.replace('/#about')
  }, [])

  return (
    <>
      <Head>
        <title>About</title>
        <meta httpEquiv="refresh" content="0;url=/#about" />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="/#about" />
      </Head>
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px' }}>
        <Link href="/#about">Abriendo la sección About...</Link>
      </main>
    </>
  )
}
