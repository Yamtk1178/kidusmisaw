import { useEffect, useRef } from 'react'
import { personal } from '../data'
import './About.css'

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add('visible'),
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid fade-up" ref={ref}>

          {/* Photo */}
          <div className="about-photo-wrap">
            <img src={personal.photo} alt={personal.name} className="about-photo" />
            <div className="about-badge">
              <i className="fas fa-graduation-cap" />
              <div>
                <div className="about-badge-text">Debre Birhan University</div>
                <div className="about-badge-sub">4th Year · Software Engineering</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text">
            <div className="section-label">About Me</div>
            <h2 className="section-title">A Software Engineer<br />Who Gets Things Done</h2>
            <p className="about-body">{personal.about}</p>

            <div className="about-meta">
              <div className="meta-item">
                <i className="fas fa-user" />
                <div>
                  <div className="meta-label">Full Name</div>
                  <div className="meta-val">{personal.name}</div>
                </div>
              </div>
              <div className="meta-item">
                <i className="fas fa-envelope" />
                <div>
                  <div className="meta-label">Email</div>
                  <div className="meta-val">{personal.email}</div>
                </div>
              </div>
              <div className="meta-item">
                <i className="fas fa-map-marker-alt" />
                <div>
                  <div className="meta-label">Location</div>
                  <div className="meta-val">{personal.location}</div>
                </div>
              </div>
              <div className="meta-item">
                <i className="fab fa-github" />
                <div>
                  <div className="meta-label">GitHub</div>
                  <div className="meta-val">Yamtk1178</div>
                </div>
              </div>
            </div>

            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <a href="#contact" className="btn-primary">
                <i className="fas fa-paper-plane" /> Hire Me
              </a>
            <a href="/resume.html" target="_blank" rel="noreferrer" className="btn-outline">
                <i className="fas fa-file-alt" /> View CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
