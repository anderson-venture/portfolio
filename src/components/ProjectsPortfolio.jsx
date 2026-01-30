import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { projectsData } from '../data/projectsData'
import './ProjectsPortfolio.css'

const ProjectsPortfolio = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Projects')
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All Projects' || project.category.includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section className="projects-portfolio" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects portfolio</h2>
        
        <p className="section-description">
          Search projects by title or filter by category
        </p>

        <div className="search-filter">
          <div className="search-box">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search Projects"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            <option>All Projects</option>
            <option>Artificial Intelligence</option>
            <option>Data Analysis</option>
            <option>Data Warehouse</option>
          </select>
        </div>

        <div className="projects-grid">
          {displayedProjects.map(project => (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`}
              className="project-card"
            >
              <div className="project-image">
                {project.logo && (
                  <div className="project-logo">
                    <div className="logo-shape"></div>
                  </div>
                )}
                <div className="project-overlay">
                  {project.title}
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length > 6 && (
          <div className="more-projects">
            <button 
              className="more-projects-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'More Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectsPortfolio
