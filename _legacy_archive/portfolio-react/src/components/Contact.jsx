import { useState, useRef, useEffect } from 'react'
import { personal } from '../data'
import './Contact.css'

export default function Contact() {
  const [form, setForm]       = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus]   = useState({ text:'', type:'' })
  const [sending, setSending] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add('visible'),
      { threshold: 0.08 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ text: 'Please fill in all required fields.', type: 'err' })
      return
    }
    setSending(true)
    setTimeout(() => {
      setStatus({ text: "Message sent! I'll get back to you soon 🙌", type: 'ok' })
      setForm({ name:'', email:'', subject:'', message:'' })
      setSending(false)
    }, 1500)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid fade-up" ref={ref}>

          {/* Info side */}
          <div className="contact-info">
            <div className="section-label">Let&apos;s Connect</div>
            <h2 className="section-title">Open to work —<br />let&apos;s talk.</h2>
            <p className="contact-lead">
              I&apos;m open to internship opportunities, project collaborations,
              and freelance work. Feel free to reach out — I&apos;d love to connect!
            </p>

            <div className="contact-list">
              <div className="contact-row">
                <div className="contact-row-icon"><i className="fas fa-envelope" /></div>
                <div>
                  <div className="contact-row-label">Email</div>
                  <div className="contact-row-val">{personal.email}</div>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-row-icon"><i className="fas fa-phone" /></div>
                <div>
                  <div className="contact-row-label">Phone</div>
                  <div className="contact-row-val">{personal.phone}</div>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-row-icon"><i className="fas fa-map-marker-alt" /></div>
                <div>
                  <div className="contact-row-label">Location</div>
                  <div className="contact-row-val">{personal.location}</div>
                </div>
              </div>
            </div>

            <div className="contact-socials">
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

          {/* Form card */}
          <div className="contact-form-card">
            <h3>Send a Message</h3>
            <form onSubmit={submit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input name="name" value={form.name} onChange={set} placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={set} placeholder="you@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input name="subject" value={form.subject} onChange={set} placeholder="What's this about?" />
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea name="message" value={form.message} onChange={set} placeholder="Tell me about your project..." required />
              </div>
              <button type="submit" className="btn-primary btn-submit" disabled={sending}>
                {sending
                  ? <><i className="fas fa-spinner fa-spin" /> Sending...</>
                  : <><i className="fas fa-paper-plane" /> Send Message</>
                }
              </button>
              {status.text && <p className={`form-status ${status.type}`}>{status.text}</p>}
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
