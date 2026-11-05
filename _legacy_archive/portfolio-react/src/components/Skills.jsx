import { useEffect, useRef } from 'react'
import { skills } from '../data'
import './Skills.css'

function useFadeUp(ref) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add('visible'),
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
}

export default function Skills() {
  const ref = useRef(null)
  useFadeUp(ref)

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <div className="section-label">Technical Arsenal</div>
          <h2 className="section-title">Leveraging Modern Tools for Unique Solutions</h2>
        </div>

        <div className="skills-grid fade-up" ref={ref}>

          {/* Languages */}
          <div className="skill-group">
            <div className="skill-group-title"><i className="fas fa-code" /> Languages</div>
            <div className="skill-chips">
              {skills.languages.map(s => <span className="chip" key={s.name}>{s.name}</span>)}
            </div>
          </div>

          {/* Web Dev */}
          <div className="skill-group">
            <div className="skill-group-title"><i className="fas fa-globe" /> Web Development</div>
            <div className="skill-chips">
              {skills.web.map(s => <span className="chip" key={s.name}>{s.name}</span>)}
            </div>
          </div>

          {/* Infrastructure */}
          <div className="skill-group">
            <div className="skill-group-title"><i className="fas fa-server" /> IT Infrastructure</div>
            <div className="skill-chips">
              {skills.infrastructure.map(s => <span className="chip" key={s.name}>{s.name}</span>)}
            </div>
          </div>

          {/* Tools full-width */}
          <div className="skill-group full">
            <div className="skill-group-title"><i className="fas fa-tools" /> Tools &amp; QA</div>
            <div className="tools-grid">
              {skills.tools.map(t => (
                <div className="tool-card" key={t.name}>
                  <i className={t.icon} />
                  <span>{t.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
