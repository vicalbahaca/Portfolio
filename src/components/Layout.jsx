import Navbar from './Navbar'
import Footer from './Footer'
import { useLanguage } from '../lib/i18n'
import { useRouter } from 'next/router'

export default function Layout({ children, shellClassName = '', hideContactBand = false }) {
  const { copy } = useLanguage()
  const router = useRouter()
  const isHome = router.pathname === '/'

  return (
    <div className={`page-shell ${shellClassName}`.trim()}>
      <a className="skip-link" href="#main-content">
        {copy.site.skipToContent}
      </a>
      <Navbar />
      <main id="main-content" className="site-main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
