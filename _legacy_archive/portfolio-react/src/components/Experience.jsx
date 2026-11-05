import { useEffect, useRef } from 'react'
import { experience, education } from '../data'
import './Experience.css'

export default function Experience() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add('visible'),
      { threshold: 0.08 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-label">Journey</div>
        <h2 className="section-title" style={{ marginBottom: 48 }}>Experience &amp; Education</h2>

        <div className="exp-edu-grid fade-up" ref={ref}>

          {/* Experience */}
          <div>
            <div className="exp-column-label">
              <i className="fas fa-briefcase" /> Experience
            </div>
            <div className="timeline">
              {experience.map(e => (
                <div className="timeline-item" key={e.role}>
                  <div className="timeline-left">
                    <div className="timeline-dot" />
                    <div className="timeline-line" />
                  </div>
                  <div className="timeline-card">
                    <div className="tc-header">
                      <span className="tc-role">{e.role}</span>
                      <span className="tc-period">{e.period}</span>
                    </div>
                    <div className="tc-company">{e.company} · {e.type}</div>
                    <p className="tc-desc">{e.desc}</p>
                    <div className="tc-tags">
                      {e.tags.map(t => <span className="chip" key={t}>{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="exp-column-label">
              <i className="fas fa-graduation-cap" /> Education
            </div>
            <div className="timeline">
              {education.map(ed => (
                <div className="timeline-item" key={ed.degree}>
                  <div className="timeline-left">
                    <div className="timeline-dot" />
                    <div className="timeline-line" />
                  </div>
                  <div className="timeline-card">
                    <div className="tc-header">
                      <span className="tc-role">{ed.degree}</span>
                      <span className="tc-period">{ed.period}</span>
                    </div>
                    <div className="tc-company">{ed.school}</div>
                    <p className="tc-desc">{ed.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
