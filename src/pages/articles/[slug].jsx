import { useEffect } from 'react'
import Head from 'next/head'
import { articles, getArticleBySlug } from '../../data/content'

export default function ArticleRedirectPage({ article }) {
  useEffect(() => {
    if (article?.externalUrl) {
      window.location.replace(article.externalUrl)
    }
  }, [article])

  if (!article) {
    return null
  }

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta httpEquiv="refresh" content={`0;url=${article.externalUrl}`} />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={article.externalUrl} />
      </Head>
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px' }}>
        <a href={article.externalUrl} target="_blank" rel="noreferrer">
          Abriendo publicación...
        </a>
      </main>
    </>
  )
}

export function getStaticPaths() {
  return {
    paths: articles.map((article) => ({ params: { slug: article.slug } })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      article,
    },
  }
}
