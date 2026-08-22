import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { recentProjects } from '../data/siteContent'
import { workshopsPage } from '../data/portfolioNorth'
import NorthProjectsGrid from './NorthProjectsGrid'
import { useLanguage } from '../lib/i18n'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const cvEmphasis = [
  'Diseñador principal de la experiencia de financiación integrada en el checkout (e-commerce)',
  'Diseño de productos digitales y landings orientadas a conversión',
  'Rediseño y desarrollo de un sistema en WordPress',
  'Diseñador end-to-end',
  'Responsable de un equipo de tres desarrolladores',
  'problemas complejos de servicios digitales',
  'referentes, herramientas y prácticas del sector',
  'Asesoramiento sobre la experiencia y lógica de pagos',
  'más de 600k usuarios únicos activos',
  'Definición de un Design System',
  'Lanzadera',
  'B2B, B2C y B2B2C',
  'Desarrollo producto de principio a fin',
  'proponer la solución más adecuada',
  'visión técnica, UX y producto',
  'Diseño de accesibilidad',
  'workshops internos',
  'IA aplicada al producto',
  'productos financieros',
].sort((left, right) => right.length - left.length)

const cvEmphasisPattern = new RegExp(
  `(${cvEmphasis.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
  'g'
)

function renderCvText(text) {
  return text.split(cvEmphasisPattern).map((fragment, index) =>
    cvEmphasis.includes(fragment) ? <strong key={`${fragment}-${index}`}>{fragment}</strong> : fragment
  )
}

function getCarouselState(list) {
  const maxLeft = Math.max(0, list.scrollWidth - list.clientWidth)

  return {
    atStart: list.scrollLeft <= 4,
    atEnd: list.scrollLeft >= maxLeft - 4,
  }
}

export default function HomeLanding() {
  const landingRef = useRef(null)
  const northCarouselRef = useRef(null)
  const recentCarouselRef = useRef(null)
  const [carouselState, setCarouselState] = useState({ atStart: true, atEnd: false })
  const [recentCarouselState, setRecentCarouselState] = useState({ atStart: true, atEnd: false })
  const { copy, cvHref } = useLanguage()

  const updateCarouselState = (list, setState) => {
    if (!list) return
    setState(getCarouselState(list))
  }

  const scrollCarousel = (carouselRef, direction) => {
    const list = carouselRef.current
    if (!list) return
    const firstItem = list.querySelector('.home-project-slot')
    const step = firstItem ? firstItem.getBoundingClientRect().width + 32 : list.clientWidth
    list.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  useEffect(() => {
    const carousels = [
      { list: northCarouselRef.current, setState: setCarouselState },
      { list: recentCarouselRef.current, setState: setRecentCarouselState },
    ].filter((carousel) => carousel.list)

    const updateAllCarouselStates = () => {
      carousels.forEach(({ list, setState }) => updateCarouselState(list, setState))
    }

    updateAllCarouselStates()
    carousels.forEach(({ list }) => list.addEventListener('scroll', updateAllCarouselStates, { passive: true }))
    window.addEventListener('resize', updateAllCarouselStates)

    return () => {
      carousels.forEach(({ list }) => list.removeEventListener('scroll', updateAllCarouselStates))
      window.removeEventListener('resize', updateAllCarouselStates)
    }
  }, [])

  useGSAP(
    () => {
      const revealTargets = [
        '.home-north__banner > *',
        '.home-workshops__copy > *',
        '.proposal-about__grid > *',
        '.home-notes__intro > *',
      ]

      revealTargets.forEach((target) => {
        if (!gsap.utils.toArray(target).length) return
        gsap.from(target, {
          y: 28,
          opacity: 0,
          duration: 0.76,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: target,
            start: 'top 84%',
            once: true,
          },
        })
      })

      if (gsap.utils.toArray('.home-project-slot--north').length) {
        gsap.from('.home-project-slot--north', {
          y: 44,
          opacity: 0,
          duration: 0.86,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.home-work__grid--north',
            start: 'top 82%',
            once: true,
          },
        })
      }
    },
    { scope: landingRef }
  )

  return (
    <div ref={landingRef} className="home-flow">
      <section id="projects-north" className="home-section home-north" aria-labelledby="home-north-title">
        <div className="container home-block">
          <div className="home-north__banner">
            <div className="home-north__intro">
              <h2 id="home-north-title" className="home-title">
                {copy.home.northTitle}
              </h2>
              <p className="home-caption">{copy.home.northCaption}</p>
            </div>
          </div>

          <div className="home-mobile-carousel">
            <NorthProjectsGrid
              className="home-mobile-carousel__track"
              trackId="north-carousel-track"
              trackRef={northCarouselRef}
            />
            <button
              type="button"
              className="home-secondary__nav home-secondary__nav--prev"
              onClick={() => scrollCarousel(northCarouselRef, -1)}
              aria-label="Ver proyecto anterior"
              aria-controls="north-carousel-track"
              disabled={carouselState.atStart}
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              className="home-secondary__nav home-secondary__nav--next"
              onClick={() => scrollCarousel(northCarouselRef, 1)}
              aria-label="Ver proyecto siguiente"
              aria-controls="north-carousel-track"
              disabled={carouselState.atEnd}
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      </section>

      <section id="recent-projects" className="home-section home-recent" aria-labelledby="home-recent-title">
        <div className="container home-block">
          <div className="home-work__top">
            <h2 id="home-recent-title" className="home-title">
              Otros proyectos
            </h2>
          </div>

          <div className="home-mobile-carousel home-mobile-carousel--recent">
            <div id="recent-carousel-track" ref={recentCarouselRef} className="home-work__grid home-work__grid--recent">
              {recentProjects.map((project, index) => (
                <div key={project.title} className="home-project-slot">
                  <article className={`home-project home-project--recent home-project--recent-${index + 1}`}>
                    <Link
                      href={project.href}
                      className="home-project__link"
                      aria-label={`${project.role}. ${project.title}. ${project.subtitle}`}
                    >
                      <div className="home-project__media">
                        <Image src={project.image} alt={project.title} fill sizes="(max-width: 960px) 100vw, 50vw" />
                      </div>
                      <div className="home-project__copy">
                        <p className="home-project__meta">{project.role}</p>
                        <h3>{project.title}</h3>
                        <p className="home-project__subtitle">{project.subtitle}</p>
                      </div>
                    </Link>
                  </article>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="home-secondary__nav home-secondary__nav--prev"
              onClick={() => scrollCarousel(recentCarouselRef, -1)}
              aria-label="Ver proyecto anterior"
              aria-controls="recent-carousel-track"
              disabled={recentCarouselState.atStart}
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              className="home-secondary__nav home-secondary__nav--next"
              onClick={() => scrollCarousel(recentCarouselRef, 1)}
              aria-label="Ver proyecto siguiente"
              aria-controls="recent-carousel-track"
              disabled={recentCarouselState.atEnd}
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      </section>

      <section id="workshops" className="home-section home-workshops" aria-labelledby="home-workshops-title">
        <div className="container home-workshops__grid">
          <div className="home-workshops__copy">
            <h2 id="home-workshops-title" className="home-title">
              {workshopsPage.title}
            </h2>
            <p className="home-caption">{workshopsPage.description}</p>
            <Link href="/workshops" className="btn btn--primary home-workshops__cta">
              Ver programa de workshops
            </Link>
          </div>
          <figure className="home-workshops__figure">
            <div className="home-workshops__media">
              <Image
                src={workshopsPage.image}
                alt="Personas participando en un workshop de producto"
                fill
                sizes="280px"
              />
            </div>
            <figcaption>Imagen de referencia. No corresponde a un workshop real.</figcaption>
          </figure>
        </div>
      </section>

      <section id="about" className="home-section home-profile" aria-labelledby="home-about-title">
        <div className="container">
          <div className="proposal-about__grid">
            <div className="proposal-section__intro">
              <h2 id="home-about-title">{copy.home.aboutTitle}</h2>
              <p className="proposal-about__lede">{copy.home.aboutSubtitle}</p>
              <a className="btn btn--brand proposal-about__cv-cta" href={cvHref} download="VictorSaiz_CV_ES.pdf">
                {copy.home.downloadCv}
              </a>
            </div>

            <div className="proposal-about__body">
              {copy.home.aboutBody.map((paragraph) => (
                <p key={paragraph}>{renderCvText(paragraph)}</p>
              ))}
            </div>

            <div className="proposal-experience" aria-labelledby="home-experience-title">
              <h3 id="home-experience-title">{copy.home.experienceTitle}</h3>
              {copy.home.experienceItems.map((item) => (
                <details key={`${item.company}-${item.role}`} className="proposal-experience__item" open>
                  <summary className="proposal-experience__summary-head">
                    <h4 className="proposal-experience__role">{item.role}</h4>
                    <p className="proposal-experience__company">{item.company}</p>
                    <time className="proposal-experience__period">{item.period}</time>
                  </summary>
                  <div className="proposal-experience__content">
                    {item.summary || item.highlights?.length ? (
                      <ul className="proposal-experience__highlights" aria-label={`${copy.home.highlightsLabel} ${item.company}`}>
                        {item.summary ? <li>{renderCvText(item.summary)}</li> : null}
                        {(item.highlights || []).map((point) => (
                          <li key={`${item.company}-${point}`}>{renderCvText(point)}</li>
                        ))}
                      </ul>
                    ) : null}
                    {item.moves?.length ? (
                      <ul className="proposal-experience__moves" aria-label={`${copy.home.rolesLabel} ${item.company}`}>
                        {item.moves.map((move) => (
                          <li key={`${item.company}-${move.role}-${move.period}`} className="proposal-experience__move">
                            <div className="proposal-experience__move-head">
                              <span className="proposal-experience__move-role">{move.role}</span>
                              <span className="proposal-experience__move-period">{move.period}</span>
                            </div>
                            {move.summary || move.highlights?.length ? (
                              <ul className="proposal-experience__move-highlights" aria-label={`${copy.home.highlightsLabel} ${move.role}`}>
                                {move.summary ? <li>{renderCvText(move.summary)}</li> : null}
                                {(move.highlights || []).map((point) => (
                                  <li key={`${move.role}-${point}`}>{renderCvText(point)}</li>
                                ))}
                              </ul>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
