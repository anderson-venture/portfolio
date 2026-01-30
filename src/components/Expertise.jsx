import { Brain, Database, BarChart3, Image, Eye, Layers } from 'lucide-react'
import './Expertise.css'

const expertiseAreas = [
  {
    id: 1,
    title: 'Artificial Intelligence',
    icon: Brain
  },
  {
    id: 2,
    title: 'Data Warehouse/ETL',
    icon: Database
  },
  {
    id: 3,
    title: 'Data Analysis',
    icon: BarChart3
  },
  {
    id: 4,
    title: 'Data Visualization',
    icon: Image
  },
  {
    id: 5,
    title: 'Computer Vision',
    icon: Eye
  },
  {
    id: 6,
    title: 'Full Stack',
    icon: Layers
  }
]

const Expertise = () => {
  return (
    <section className="expertise" id="expertise">
      <div className="expertise-container">
        <h2 className="section-title expertise-title">My Areas of Expertise</h2>
        
        <div className="expertise-grid">
          {expertiseAreas.map(area => {
            const Icon = area.icon
            return (
              <div key={area.id} className="expertise-card">
                <div className="expertise-icon">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="expertise-name">{area.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Expertise
