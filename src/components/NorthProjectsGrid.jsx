import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { northSection } from '../data/content'
import { useLanguage } from '../lib/i18n'

export default function NorthProjectsGrid({ className = '' }) {
  const { lang, copy } = useLanguage()
  const projects = northSection.projects.map((project) => ({
    ...project,
    cardImage: project.cardImage || project.image,
    cardImageMode: project.cardImageMode || 'cover',
    summary: project.summary[lang],
    detail: project.detail[lang],
    role: project.role?.[lang] || project.role,
    industry: project.industry?.[lang] || project.industry,
  }))

  return (
    <div className={`home-work__grid home-work__grid--north ${className}`.trim()}>
      {projects.map((project, index) => (
        <div key={project.slug} className={`home-project-slot home-project-slot--north home-project-slot--north-${index + 1}`}>
          <motion.article
            className="home-project home-project--north"
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              '--project-accent': project.accent || '#159BFE',
              '--project-image-fit': project.cardImageMode,
            }}
          >
            <Link
              href={`/projects-north/${project.slug}`}
              className="home-project__link"
              aria-label={`${project.title}. ${project.metric}`}
            >
              <Image src={project.cardImage} alt={project.title} fill sizes="(max-width: 960px) 100vw, 50vw" />

              <div className="home-project__content">
                <span className="home-project__index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{project.title}</h3>
              </div>
            </Link>
          </motion.article>
        </div>
      ))}
    </div>
  )
}
