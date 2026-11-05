import { useEffect, useRef } from 'react'
import { projects, personal } from '../data'
import './Projects.css'

export default function Projects() {
  const cardsRef = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    cardsRef.current.forEach(c => c && obs.observe(c))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <div className="projects-top">
          <div>
            <div className="section-label">Featured Works</div>
            <h2 className="section-title">Things I&apos;ve built</h2>
          </div>
          <a href={personal.github} target="_blank" rel="noreferrer" className="btn-outline">
            Explore All Projects <i className="fas fa-arrow-right" />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="project-card fade-up"
              ref={el => cardsRef.current[i] = el}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Visual header */}
              <div className={`project-visual ${p.color}`}>
                <div className="project-visual-badge">
                  <i className={p.icon} />
                </div>
                <i className={`${p.icon} project-visual-icon`} />
                {p.github
                  ? <a href={p.github} target="_blank" rel="noreferrer" className="project-github-link" title="View on GitHub">
                      <i className="fab fa-github" />
                    </a>
                  : <span className="coming-soon" style={{ position:'absolute', top:16, right:16 }}>Coming Soon</span>
                }
              </div>

              {/* Body */}
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span className="chip" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <a href={personal.github} target="_blank" rel="noreferrer" className="btn-primary">
            <i className="fab fa-github" /> View All on GitHub
          </a>
        </div>

      </div>
    </section>
  )
}
