'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', dates: '', projet: '', type: '' })
  const [sent, setSent] = useState(false)
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true) }

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '0.5px solid rgba(8,16,30,0.2)',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '13px',
    color: '#08101e',
    padding: '10px 0',
    outline: 'none',
    transition: 'border-color 0.2s',
  }
  const labelStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '9px',
    letterSpacing: '0.3em',
    textTransform: 'uppercase' as const,
    color: 'rgba(8,16,30,0.45)',
    display: 'block',
    marginBottom: '6px',
  }

  return (
    <main style={{ background: '#08101e', color: '#f5f0e8' }}>
      <Nav lang="fr" />

      <section style={{ paddingTop: 'clamp(100px,12vw,140px)', paddingBottom: 'clamp(60px,8vw,96px)', paddingLeft: 'clamp(24px,6vw,80px)', paddingRight: 'clamp(24px,6vw,80px)' }}>
        <p className="eyebrow" style={{ marginBottom: '16px' }}>Nous Contacter</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(36px,6vw,72px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1, marginBottom: '56px', color: '#f5f0e8' }}>
          Orchestrons<br />votre expérience.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Form */}
          <div className="md:col-span-3" style={{ background: '#f5f0e8', padding: 'clamp(28px,4vw,48px)', borderRadius: '2px' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: '32px', height: '0.5px', background: 'rgba(8,16,30,0.2)', margin: '0 auto 28px' }} />
                <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '32px', fontWeight: 300, fontStyle: 'italic', color: '#08101e', marginBottom: '12px' }}>Merci.</h2>
                <p className="sans" style={{ fontSize: '12px', color: 'rgba(8,16,30,0.5)', lineHeight: 1.8 }}>Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais avec la discrétion qui vous est due.</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div>
                    <label style={labelStyle}>Nom, prénom *</label>
                    <input type="text" name="nom" required value={form.nom} onChange={handle} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={handle} style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div>
                    <label style={labelStyle}>Téléphone</label>
                    <input type="tel" name="telephone" value={form.telephone} onChange={handle} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Dates souhaitées du séjour</label>
                    <input type="text" name="dates" value={form.dates} onChange={handle} placeholder="Ex: Juillet 2026" style={{ ...inputStyle, color: form.dates ? '#08101e' : 'rgba(8,16,30,0.35)' }} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Type de demande</label>
                  <select name="type" value={form.type} onChange={handle} style={{ ...inputStyle, background: 'transparent', cursor: 'pointer' }}>
                    <option value="">Sélectionner...</option>
                    <option value="gestion">Gestion Opérationnelle</option>
                    <option value="concierge">Conciergerie Privée</option>
                    <option value="personnel">Placement de Personnel</option>
                    <option value="projet">Gestion de Projets</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Parlez-nous de votre projet</label>
                  <textarea name="projet" value={form.projet} onChange={handle} rows={5}
                    placeholder="Type de séjour, nombre de personnes, préférences, attentes particulières..."
                    style={{ ...inputStyle, resize: 'none' }} />
                </div>
                <button type="submit" className="btn-dark" style={{ alignSelf: 'flex-start' }}>Être contacté →</button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div style={{ border: '0.5px solid rgba(245,240,232,0.1)', padding: '32px' }}>
              <p className="eyebrow" style={{ marginBottom: '12px' }}>Consultation privée</p>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontStyle: 'italic', fontWeight: 300, marginBottom: '12px' }}>Ou prenez directement rendez-vous</p>
              <p className="sans" style={{ fontSize: '11px', color: 'rgba(245,240,232,0.4)', lineHeight: 1.8, marginBottom: '20px' }}>Pour une consultation privée et laissez-nous orchestrer votre expérience.</p>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>
                Prendre rendez-vous
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="mailto:contact@maisonmonnier.fr" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <div style={{ width: '36px', height: '36px', border: '0.5px solid rgba(245,240,232,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(245,240,232,0.4)" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span className="sans" style={{ fontSize: '11px', color: 'rgba(245,240,232,0.45)' }}>par email</span>
              </a>
              <a href="tel:" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <div style={{ width: '36px', height: '36px', border: '0.5px solid rgba(245,240,232,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(245,240,232,0.4)" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <span className="sans" style={{ fontSize: '11px', color: 'rgba(245,240,232,0.45)' }}>par téléphone</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer lang="fr" />
    </main>
  )
}
