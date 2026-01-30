import { Github, Send, Phone, MessageCircle, Settings } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contract me</h2>
        
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Telegram">
            <Send size={24} />
          </a>
          <a href="https://skype.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Skype">
            <Phone size={24} />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Discord">
            <MessageCircle size={24} />
          </a>
          <a href="#" className="social-icon" aria-label="More">
            <Settings size={24} />
          </a>
        </div>

        <footer className="footer">
          <p>© 2026 AI & Data Engineer Portfolio</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
