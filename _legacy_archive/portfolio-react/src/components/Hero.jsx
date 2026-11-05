import { useEffect, useRef } from 'react'
import { personal, stats } from '../data'
import './Hero.css'

const roles = [
  'Software Engineering Student',
  'Web Developer',
  'Network Enthusiast',
  'QA Automation Learner',
]

export default function Hero() {
  const typingRef = useRef(null)

  useEffect(() => {
    let ti = 0, ci = 0, del = false
    const tick = () => {
      const el = typingRef.current
      if (!el) return
      const cur = roles[ti]
      del ? el.textContent = cur.slice(0, --ci)
           : el.textContent = cur.slice(0, ++ci)
      if (!del && ci === cur.length) { del = true; setTimeout(tick, 1600); return }
      if (del && ci === 0) { del = false; ti = (ti + 1) % roles.length }
      setTimeout(tick, del ? 55 : 95)
    }
    tick()
  }, [])

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-inner">

          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-overline">
              <span className="hero-overline-dot" />
              Available for Internships &amp; Collaboration
            </div>

            <h1 className="hero-title">
              Hi, I'm{' '}
              <span className="hero-title-grad">Kidus Misaw</span>
            </h1>

            <p className="hero-typing">
              <span ref={typingRef} />
              <span className="cursor">|</span>
            </p>

            <p className="hero-desc">{personal.subtagline}</p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                <i className="fas fa-rocket" /> View Projects
              </a>
              <a href="/resume.html" target="_blank" rel="noreferrer" className="btn-outline">
                <i className="fas fa-file-alt" /> View CV
              </a>
            </div>

            <div className="hero-socials">
              <a href={personal.github} target="_blank" rel="noreferrer" title="GitHub">
                <i className="fab fa-github" />
              </a>
              <a href={`mailto:${personal.email}`} title="Email">
                <i className="fas fa-envelope" />
              </a>
              <a href={`tel:${personal.phone}`} title="Phone">
                <i className="fas fa-phone" />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <div className="hero-photo-wrap">
              <div className="hero-photo-ring" />
              <div className="hero-photo-bg" />
              <img src={personal.photo} alt={personal.name} className="hero-photo" />
            </div>

            <div className="hero-stats">
              {stats.map(s => (
                <div className="stat-card" key={s.label}>
                  <div className="stat-icon"><i className={s.icon} /></div>
                  <div className="stat-text">
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <a href="#about" className="scroll-hint">
        <i className="fas fa-chevron-down" />
      </a>
    </section>
  )
}
