import { useEffect } from 'react'
import Head from 'next/head'
import { articles, getArticleBySlug } from '../../data/content'
import { localizeArticle, useLanguage } from '../../lib/i18n'

export default function ArticleRedirectPage({ article }) {
  const { copy, lang } = useLanguage()
  const localizedArticle = article ? localizeArticle(article, lang) : null

  useEffect(() => {
    if (localizedArticle?.externalUrl) {
      window.location.replace(localizedArticle.externalUrl)
    }
  }, [localizedArticle])

  if (!localizedArticle) {
    return null
  }

  return (
    <>
      <Head>
        <title>{localizedArticle.title}</title>
        <meta httpEquiv="refresh" content={`0;url=${localizedArticle.externalUrl}`} />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={localizedArticle.externalUrl} />
      </Head>
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px' }}>
        <a href={localizedArticle.externalUrl} target="_blank" rel="noreferrer">
          {copy.articles.opening}
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
