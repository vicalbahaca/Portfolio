import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var key='victor-saiz-portfolio-language';var stored=window.localStorage.getItem(key);var list=window.navigator.languages||[window.navigator.language||''];var lang=(stored==='es'||stored==='en')?stored:(list.some(function(v){var code=(v||'').toLowerCase().trim();return code.indexOf('es')===0||code.indexOf('ca')===0||code.indexOf('eu')===0||code.indexOf('val')===0;})?'es':'en');document.documentElement.lang=lang;}catch(e){}})();`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
