import { Link, useLocation } from 'react-router-dom'
import { Home, Moon, Sun } from 'lucide-react'
import './Navigation.css'

const Navigation = ({ isDark, toggleTheme }) => {
  const location = useLocation()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-home">
          <Home size={24} />
        </Link>
        
        <div className="nav-links">
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>
          <Link 
            to="/expertise" 
            className={location.pathname === '/expertise' ? 'active' : ''}
          >
            Expertise
          </Link>
          <Link 
            to="/projects" 
            className={location.pathname === '/projects' ? 'active' : ''}
          >
            Projects
          </Link>
        </div>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  )
}

export default Navigation
