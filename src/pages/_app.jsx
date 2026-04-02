import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { LanguageProvider } from '../lib/i18n'
import { useLanguage } from '../lib/i18n'

const ACCESS_STORAGE_KEY = 'victor-saiz-portfolio-access'
const ACCESS_PASSWORD = 'recruiter'

function AccessGate({ children }) {
  const { copy, isReady } = useLanguage()
  const [password, setPassword] = useState('')
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isChecking, setIsChecking] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const hasAccess = typeof window !== 'undefined' && window.localStorage.getItem(ACCESS_STORAGE_KEY) === 'granted'
    setIsAuthorized(hasAccess)
    setIsChecking(false)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (password === ACCESS_PASSWORD) {
      window.localStorage.setItem(ACCESS_STORAGE_KEY, 'granted')
      setIsAuthorized(true)
      setError('')
      return
    }

    setError(copy.access.error)
  }

  if (!isReady || isChecking) {
    return (
      <div className="access-shell" aria-hidden="true">
        <div className="access-panel" />
      </div>
    )
  }

  if (!isAuthorized) {
    return (
      <div className="access-shell">
        <main className="access-panel" aria-labelledby="access-title">
          <h1 id="access-title" className="access-title">
            {copy.access.title}
          </h1>
          <p className="access-description">{copy.access.description}</p>

          <form className="access-form" onSubmit={handleSubmit}>
            <label className="access-label" htmlFor="portfolio-password">
              {copy.access.label}
            </label>
            <div className="access-field">
              <input
                id="portfolio-password"
                className="access-input"
                type="password"
                value={password}
                placeholder={copy.access.placeholder}
                autoComplete="current-password"
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? 'portfolio-password-error' : undefined}
                onChange={(event) => {
                  setPassword(event.target.value)
                  if (error) setError('')
                }}
              />
              <p id="portfolio-password-error" className="access-error" aria-live="assertive" role="alert">
                {error}
              </p>
            </div>
            <button className="btn btn--brand access-submit" type="submit">
              {copy.access.submit}
            </button>
          </form>
        </main>
      </div>
    )
  }

  return children
}

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <AccessGate>
        <Component {...pageProps} />
      </AccessGate>
    </LanguageProvider>
  )
}
