import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useLanguage } from '../../lib/i18n'

export default function ProjectsRedirectPage() {
  const { copy } = useLanguage()

  useEffect(() => {
    window.location.replace('/#projects-north')
  }, [])

  return (
    <>
      <Head>
        <title>{copy.redirects.projectsTitle}</title>
        <meta httpEquiv="refresh" content="0;url=/#projects-north" />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="/#projects-north" />
      </Head>
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px' }}>
        <Link href="/#projects-north">{copy.redirects.openingWork}</Link>
      </main>
    </>
  )
}
