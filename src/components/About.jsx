import './About.css'

const About = () => {
  const testimonials = [
    {
      id: 1,
      text: "Most important is that he covers our professional needs, which are pretty extensive. His ability to work independently and come up with constructive alternative solutions, understandable for a layperson, has reduced the stress and concerns.",
      name: "Montezuma Sound",
      position: "Owner"
    },
    {
      id: 2,
      text: "His efforts significantly reduced maintenance costs and potential penalties. He worked smoothly, mapping out a clear scope and building out a solid platform. His knowledge of technology and development skill were highly impressive.",
      name: "Lambda Vision",
      position: "CTO"
    },
    {
      id: 3,
      text: "We are so grateful for the exceptional expertise and dedication of our data engineers in collecting and analyzing 10 years' worth of data for our business in just one week. His technical skills, strategic thinking, meticulous insight and unwavering determination have played a vital role in our success, and I would like to acknowledge his skills and contributions.",
      name: "Asad Yusov",
      position: "Sales Manager"
    },
    {
      id: 4,
      text: "We're excited to be working with him to leverage his technical expertise and experience in automating our business. He has demonstrated his high-tech skills and unique business acumen to make us a leader in real estate research.",
      name: "Holistic Estate Solutions",
      position: "CO-Founder"
    }
  ]

  return (
    <section className="about" id="about">
      {/* Hero Section with Profile */}
      <div className="about-hero">
        <div className="about-container">
          <div className="profile-section">
            <div className="profile-image">
              <img src="/profile.jpg" alt="Profile" />
            </div>
            <div className="profile-content">
              <h1 className="about-title">
                I am passinate about engineering your ideas with <span className="highlight">Tech Excellence</span>
              </h1>
              <p className="about-description">
                I deliver excellent technological design, build and scale products that help you gain insight and improve 
                your business. My tech excellence comes from my 7-year experience in various projects for startups, 
                scaleups & enterprises.
              </p>
              <div className="tech-excellence-box">
                <p className="tech-excellence-title">
                  <span className="highlight">Tech Excellence</span> is not just a goal – it's my standard.
                </p>
                <p className="tech-excellence-text">
                  I am a firm believer in tech excellence. For me, this commitment goes beyond a mere catchphrase; it's 
                  my guiding principle in everything I do.
                </p>
                <p className="tech-excellence-text">
                  I understand that true excellence in technology requires unwavering attention to detail, a steadfast 
                  commitment to delivering solutions on time, and a continuous dedication to staying at the forefront of 
                  the ever-evolving tech landscape.
                </p>
                <p className="tech-excellence-text">
                  My passion for innovation and my thirst for knowledge drive me to provide my clients with cutting-edge 
                  solutions that not only meet my needs today but also position them for success in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialization Section */}
      <div className="specialization-section">
        <div className="about-container">
          <h2 className="section-title-yellow">What I specialize in?</h2>
          
          <div className="specialization-item">
            <div className="spec-content">
              <h3 className="spec-title">Artificial Intelligence Project</h3>
              <p className="spec-text">
                Over the past 6 years, I've honed my expertise through a multitude of cutting-edge AI 
                techniques, each one expanding my understanding and ability. I serve an array of clients as a 
                reliable source of technologic solutions and innovation. My pursuit of novel techniques helps me 
                acquire unique insights and abilities, ensuring that I stay ahead of the curve.
              </p>
            </div>
            <div className="spec-image">
              <img src="/ai-project.jpg" alt="AI Project" />
            </div>
          </div>

          <div className="specialization-item reverse">
            <div className="spec-image">
              <img src="/data-engineering.jpg" alt="Data Engineering" />
            </div>
            <div className="spec-content">
              <h3 className="spec-title">Data Engineering</h3>
              <p className="spec-text">
                This is what i am most confident in and enjoy the most. I enjoy working with the more complex 
                and larger data sets. With a focus on handling complex and large data sets, I provide my clients 
                with robust database solutions, efficient ETL processes and fast, accurate analysis. My data 
                processing pipelines help clients gain insight into their data and find solutions for their 
                business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="about-container">
          <h2 className="section-title-dark">What do my clients say?</h2>
          
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
