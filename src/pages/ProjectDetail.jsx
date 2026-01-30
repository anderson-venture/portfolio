import { useParams, Link } from 'react-router-dom'
import { Clock, Tag, ExternalLink } from 'lucide-react'
import { projectsData } from '../data/projectsData'
import Contact from '../components/Contact'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { projectId } = useParams()
  const project = projectsData.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project Not Found</h1>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </div>
    )
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        {/* Project Header */}
        <div className="project-header">
          <h1 className="project-detail-title">{project.title}</h1>
          
          <div className="project-meta">
            <div className="meta-item">
              <Clock size={18} />
              <span>{project.date}</span>
            </div>
            <div className="meta-item">
              <Tag size={18} />
              <span>{project.category}</span>
            </div>
            {project.link && project.link !== '#' && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="meta-item project-link"
              >
                <ExternalLink size={18} />
                <span>{project.link}</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Image and Description */}
        <div className="project-showcase">
          <div className="showcase-image">
            {project.logo && (
              <div className="showcase-logo">
                <div className="logo-shape"></div>
              </div>
            )}
            <div className="showcase-overlay">
              {project.title}
            </div>
          </div>
          
          <div className="showcase-description">
            <p>{project.description}</p>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="project-details-grid">
          {/* About Client */}
          <div className="detail-section">
            <h2 className="detail-title">About Client</h2>
            <p className="detail-text">{project.aboutClient}</p>
          </div>

          {/* Challenge */}
          <div className="detail-section">
            <h2 className="detail-title">Challenge</h2>
            <ul className="detail-list">
              {project.challenge.map((item, index) => (
                <li key={index}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="detail-section full-width">
          <h2 className="detail-title">Tools & Technologies</h2>
          <ul className="tools-list">
            {project.tools.map((tool, index) => (
              <li key={index}>- {tool}</li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div className="detail-section full-width">
          <h2 className="detail-title">Solutions</h2>
          <div className="solutions-content">
            {project.solutions.map((solution, index) => (
              <p key={index} className="solution-text">{solution}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  )
}

export default ProjectDetail
