import { personal } from '../data'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">Dev<span>&lt;Kidus/&gt;</span></span>
            <p>Passionate Software Engineering Student building the digital future.</p>
          </div>
          <div className="footer-links">
            {['Home','About','Skills','Experience','Projects','Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
            ))}
          </div>
          <div className="footer-socials">
            <a href={personal.github} target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
            <a href={`mailto:${personal.email}`}><i className="fas fa-envelope" /></a>
            <a href={`tel:${personal.phone}`}><i className="fas fa-phone" /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Kidus Misaw. All Rights Reserved.</span>
          <span>Built with <i className="fas fa-heart" /> using React &amp; Vite</span>
        </div>
      </div>
    </footer>
  )
}
