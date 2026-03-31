import Navbar from './Navbar'
import Footer from './Footer'
import HomeAtmosphere from './HomeAtmosphere'

export default function Layout({ children, shellClassName = '' }) {
  const isHomeShell = shellClassName.includes('page-shell--home')

  return (
    <div className={`page-shell ${shellClassName}`.trim()}>
      {isHomeShell ? <HomeAtmosphere /> : null}
      <Navbar />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  )
}
