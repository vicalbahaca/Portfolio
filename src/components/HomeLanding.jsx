import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { aboutIntro, aboutPanels, caseStudies, conceptDesigns, experience, featuredArticles, siteConfig } from '../data/content'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function HomeLanding() {
  const landingRef = useRef(null)
  const highlightedProjects = caseStudies
  const secondaryProjects = conceptDesigns.slice(0, 4)
  const latestArticles = featuredArticles
  const currentRole = experience[0]

  useGSAP(
    () => {
      const revealBlock = (target, y = 34) => {
        gsap.from(target, {
          y,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: target,
            start: 'top 82%',
            once: true,
          },
        })
      }

      revealBlock('.home-work__top > *', 28)
      revealBlock('.home-secondary__top > *', 28)
      revealBlock('.home-profile__intro > *', 28)
      revealBlock('.home-notes__intro > *', 28)
      revealBlock('.home-contact-band__inner > *', 28)

      gsap.from('.home-project-slot', {
        y: 54,
        opacity: 0,
        duration: 0.95,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.home-work__grid',
          start: 'top 78%',
          once: true,
        },
      })

      gsap.from('.home-project__link img', {
        scale: 1.08,
        duration: 1.4,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.home-work__grid',
          start: 'top 78%',
          once: true,
        },
      })

      ScrollTrigger.batch('.home-secondary-item, .home-point, .home-note, .home-profile__story > p, .home-profile__badge', {
        start: 'top 84%',
        once: true,
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.72,
              ease: 'power3.out',
              stagger: 0.1,
              overwrite: true,
            }
          )
        },
      })

      gsap.to('.home-profile__visual', {
        yPercent: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: '.home-profile',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    },
    { scope: landingRef }
  )

  return (
    <div ref={landingRef} className="home-flow">
      <section id="work" className="home-section home-work">
        <div className="container home-block">
          <div className="home-work__top">
            <p className="home-label">Casos principales</p>
            <h2 className="home-title">Proyectos recientes</h2>
          </div>

          <div className="home-work__grid">
            {highlightedProjects.map((project, index) => (
              <div key={project.slug} className={`home-project-slot home-project-slot--${index + 1}`}>
                <motion.article
                  className="home-project"
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  style={{ '--project-accent': project.accent }}
                >
                  <Link href={`/work/${project.slug}`} className="home-project__link">
                    <Image src={project.image} alt={project.title} fill sizes="(max-width: 960px) 100vw, 50vw" />

                    <div className="home-project__content">
                      <span className="home-project__index">0{index + 1}</span>
                      <p className="home-project__meta">{project.role}</p>
                      <h3>{project.title}</h3>
                      <p className="home-project__subtitle">{project.subtitle}</p>
                    </div>
                  </Link>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-secondary">
        <div className="container home-secondary__block">
          <div className="home-secondary__top">
            <p className="home-label">Archivo secundario</p>
            <h2 className="home-title home-title--compact">Otros proyectos</h2>
            <p className="home-caption">Concepts y piezas más rápidas que completan el archivo de trabajo.</p>
          </div>

          <div className="home-secondary__list">
            {secondaryProjects.map((project) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="home-secondary-item">
                <div className="home-secondary-item__media">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 960px) 100vw, 150px" />
                </div>

                <div className="home-secondary-item__body">
                  <span className="home-secondary-item__label">{project.subtitle}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>

                <span className="home-secondary-item__arrow">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="home-section home-profile">
        <div className="container">
          <div className="home-profile__panel">
            <div className="home-profile__content">
              <div className="home-profile__intro">
                <p className="home-label">Sobre mí</p>
                <h2 className="home-title">{aboutIntro.title}</h2>
                <p className="home-profile__lede">{aboutIntro.summary}</p>
              </div>

              <div className="home-profile__story">
                {aboutIntro.body.map((paragraph) => (
                  <p key={paragraph} className="home-profile__text">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="home-profile__points">
                {aboutPanels.map((point) => (
                  <article key={point.title} className="home-point">
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </article>
                ))}
              </div>

              <div className="home-profile__actions">
                <div className="home-profile__downloads">
                  <a className="btn btn--brand" href={siteConfig.extras.cvEs} download="CV_Victor Saiz_ES.pdf">
                    Descargar CV ES
                  </a>
                  <a className="btn btn--outline" href={siteConfig.extras.cvEn} download="CV_Victor Saiz_EN.pdf">
                    Download CV EN
                  </a>
                </div>

                <a className="inline-link" href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
                  Ir a LinkedIn
                </a>
              </div>
            </div>

            <aside className="home-profile__aside">
              <div className="home-profile__visual">
                <Image src={siteConfig.avatar} alt={siteConfig.name} fill sizes="(max-width: 960px) 72vw, 24vw" />
              </div>

              <div className="home-profile__badge">
                <strong>{currentRole.role}</strong>
                <span>{currentRole.company}</span>
                <p>Banca, retail, producto digital y foco creciente en IA aplicada a producto.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="articles" className="home-section home-notes">
        <div className="container home-notes__block">
          <div className="home-notes__intro">
            <p className="home-label">Archivo editorial</p>
            <h2 className="home-title home-title--compact">Publicaciones</h2>
            <p className="home-caption">Artículos y notas publicados en la versión actual del portfolio.</p>
          </div>

          <div className="home-notes__list">
            {latestArticles.map((article) => (
              <a
                key={article.slug}
                href={article.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="home-note"
              >
                {article.image ? (
                  <div className="home-note__media">
                    <Image src={article.image} alt={article.title} fill sizes="(max-width: 720px) 100vw, 132px" />
                  </div>
                ) : null}
                <div className="home-note__body">
                  <span className="home-note__meta">{article.topic}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
                <span className="home-note__arrow">↗</span>
              </a>
            ))}
          </div>

          <Link href="/articles" className="inline-link">
            Ver todas las publicaciones
          </Link>
        </div>
      </section>

      <section id="contact" className="home-section home-contact-band">
        <div className="container home-contact-band__inner">
          <h2 className="home-title home-title--compact">Contacto</h2>
          <p className="home-caption">Si quieres hablar de producto, diseño o una colaboración puntual, escríbeme.</p>

          <a className="btn btn--primary home-contact-band__cta" href={`mailto:${siteConfig.email}`}>
            Contáctame
          </a>
        </div>
      </section>
    </div>
  )
}
