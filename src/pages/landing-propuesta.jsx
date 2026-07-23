import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function RemovedLandingProposalPage() {
  useEffect(() => {
    window.location.replace('/')
  }, [])

  return (
    <>
      <Head>
        <title>Portfolio de Victor Saiz</title>
        <meta httpEquiv="refresh" content="0;url=/" />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="/" />
      </Head>
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px' }}>
        <Link href="/">Abrir portfolio</Link>
      </main>
    </>
  )
}
