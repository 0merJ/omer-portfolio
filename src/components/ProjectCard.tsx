import { useState } from 'react'
import type { Project } from '../types'
import { MediaPlaceholder } from './MediaPlaceholder'
import { SystemOverview } from './SystemOverview'

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const [expanded, setExpanded] = useState(featured)
  return (
    <article className={`project-card ${featured ? 'project-card--featured' : ''} reveal`} id={project.id}>
      <div className="project-card__media">
        <MediaPlaceholder media={project.media[0]} featured={featured} />
        {project.metric && <div className="metric"><strong>{project.metric.value}</strong><span>{project.metric.label}</span></div>}
      </div>
      <div className="project-card__content">
        <div className="project-card__topline"><span className="project-number">{project.number}</span><span className={`status status--${project.status === 'Completed' ? 'complete' : 'progress'}`}>{project.status}</span></div>
        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>
        <p className="project-institution">{project.institution}</p>
        <p className="project-summary">{project.summary}</p>
        <div className="tag-list">{project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>
        <button className="text-button" type="button" aria-expanded={expanded} onClick={() => setExpanded((value) => !value)}>{expanded ? 'Collapse case study' : 'Open case study'} <span aria-hidden="true">↗</span></button>
        {expanded && <div className="project-detail">
          {project.caseStudy?.map((item) => <div className="case-study-row" key={item.label}><strong>{item.label}</strong><p>{item.text}</p></div>)}
          {project.id === 'autonomous-drone' && <SystemOverview />}
          <div className="case-study-row"><strong>My contribution</strong><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="case-study-row"><strong>Role</strong><p>{project.role}</p></div>
          <div className="media-gallery">{project.media.slice(1).map((media) => <MediaPlaceholder media={media} key={media.src} />)}</div>
        </div>}
      </div>
    </article>
  )
}
