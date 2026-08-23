import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { portfolioSection } from '../data/portfolioNorth'

export default function NorthProjectsGrid({ className = '', trackId, trackRef }) {
  const projects = portfolioSection.projects.map((project) => ({
    ...project,
    cardImage: project.cardImage || project.image,
    cardImageMode: project.cardImageMode || 'contain',
    cardTag: project.cardTag || project.scope || project.role,
    cardDescription: project.cardDescription || project.summary,
  }))

  return (
    <div id={trackId} ref={trackRef} className={`home-work__grid home-work__grid--north ${className}`.trim()}>
      {projects.map((project, index) => (
        <div key={project.slug} className={`home-project-slot home-project-slot--north home-project-slot--north-${index + 1}`}>
          <motion.article
            className="home-project home-project--north"
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              '--project-accent': project.accent || '#159BFE',
              '--project-image-fit': project.cardImageMode,
              '--thumb-backdrop-opacity': project.cardUseBackdrop === false ? 0 : 1,
            }}
          >
            <Link
              href={`/projects-north/${project.slug}`}
              className="home-project__link"
              aria-label={`${project.cardTag}. ${project.title}. ${project.cardDescription}`}
            >
              <div className="home-project__media" style={{ '--thumb-bg-image': `url("${project.cardImage}")` }}>
                <Image src={project.cardImage} alt={project.title} fill sizes="(max-width: 960px) 100vw, 50vw" />
              </div>
              <div className="home-project__copy">
                <h3>{project.title}</h3>
                <p className="home-project__subtitle">{project.cardDescription}</p>
              </div>
            </Link>
          </motion.article>
        </div>
      ))}
    </div>
  )
}
