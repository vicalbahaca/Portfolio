import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function WorkRedirectPage() {
  useEffect(() => {
    window.location.replace('/#work')
  }, [])

  return (
    <>
      <Head>
        <title>Work</title>
        <meta httpEquiv="refresh" content="0;url=/#work" />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="/#work" />
      </Head>
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px' }}>
        <Link href="/#work">Abriendo la sección Work...</Link>
      </main>
    </>
  )
}
