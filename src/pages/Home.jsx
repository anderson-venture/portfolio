import Hero from '../components/Hero'
import ProjectsPortfolio from '../components/ProjectsPortfolio'
import Expertise from '../components/Expertise'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ProjectsPortfolio />
      <Expertise />
    </div>
  )
}

export default Home
