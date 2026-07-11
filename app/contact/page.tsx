'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', dates: '', projet: '', type: '' })
  const [sent, setSent] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="bg-navy min-h-screen">
      <Nav lang="fr" />
      <section className="pt-32 pb-20 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <p className="eyebrow mb-5">Nous Contacter</p>
          <h1 className="font-serif font-light italic text-[clamp(36px,6vw,72px)] text-cream leading-none mb-16">
            Orchestrons<br />votre expérience.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
            {/* Form */}
            <div className="md:col-span-3">
              {sent ? (
                <div className="border border-cream/10 p-12 text-center">
                  <div className="w-10 h-px bg-cream/30 mx-auto mb-8"></div>
                  <h2 className="font-serif font-light italic text-3xl text-cream mb-4">Merci.</h2>
                  <p className="sans text-[11px] text-cream/45 leading-relaxed">
                    Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais avec la discrétion qui vous est due.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="sans text-[8px] tracking-[0.3em] uppercase text-cream/30 mb-2 block">Nom, prénom *</label>
                      <input type="text" name="nom" required value={form.nom} onChange={handle}
                        className="w-full bg-transparent border border-cream/15 text-cream sans text-[11px] px-4 py-3 focus:outline-none focus:border-cream/40 transition-colors placeholder:text-cream/20" />
                    </div>
                    <div>
                      <label className="sans text-[8px] tracking-[0.3em] uppercase text-cream/30 mb-2 block">Email *</label>
                      <input type="email" name="email" required value={form.email} onChange={handle}
                        className="w-full bg-transparent border border-cream/15 text-cream sans text-[11px] px-4 py-3 focus:outline-none focus:border-cream/40 transition-colors placeholder:text-cream/20" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="sans text-[8px] tracking-[0.3em] uppercase text-cream/30 mb-2 block">Téléphone</label>
                      <input type="tel" name="telephone" value={form.telephone} onChange={handle}
                        className="w-full bg-transparent border border-cream/15 text-cream sans text-[11px] px-4 py-3 focus:outline-none focus:border-cream/40 transition-colors" />
                    </div>
                    <div>
                      <label className="sans text-[8px] tracking-[0.3em] uppercase text-cream/30 mb-2 block">Dates souhaitées du séjour</label>
                      <input type="text" name="dates" value={form.dates} onChange={handle} placeholder="Ex: Juillet 2026"
                        className="w-full bg-transparent border border-cream/15 text-cream sans text-[11px] px-4 py-3 focus:outline-none focus:border-cream/40 transition-colors placeholder:text-cream/20" />
                    </div>
                  </div>
                  <div>
                    <label className="sans text-[8px] tracking-[0.3em] uppercase text-cream/30 mb-2 block">Type de demande</label>
                    <select name="type" value={form.type} onChange={handle}
                      className="w-full bg-navy border border-cream/15 text-cream/60 sans text-[11px] px-4 py-3 focus:outline-none focus:border-cream/40 transition-colors">
                      <option value="">Sélectionner...</option>
                      <option value="gestion">Gestion Opérationnelle</option>
                      <option value="concierge">Conciergerie Privée</option>
                      <option value="personnel">Placement de Personnel</option>
                      <option value="projet">Gestion de Projets</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>
                  <div>
                    <label className="sans text-[8px] tracking-[0.3em] uppercase text-cream/30 mb-2 block">Parlez-nous de votre projet</label>
                    <textarea name="projet" value={form.projet} onChange={handle} rows={5}
                      placeholder="Type de séjour, nombre de personnes, préférences, attentes particulières..."
                      className="w-full bg-transparent border border-cream/15 text-cream sans text-[11px] px-4 py-3 focus:outline-none focus:border-cream/40 transition-colors resize-none placeholder:text-cream/20" />
                  </div>
                  <button type="submit" className="btn-primary self-start">Être contacté →</button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 flex flex-col gap-8">
              <div className="border border-cream/10 p-8">
                <p className="eyebrow mb-4">Consultation privée</p>
                <p className="font-serif font-light italic text-xl text-cream mb-4">Ou prenez directement rendez-vous</p>
                <p className="sans text-[11px] text-cream/40 leading-relaxed mb-6">
                  Pour une consultation privée et laissez-nous orchestrer votre expérience.
                </p>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn-primary block text-center">
                  Prendre rendez-vous
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <a href="mailto:contact@maisonmonnier.fr" className="flex items-center gap-4 group">
                  <div className="w-8 h-8 border border-cream/10 flex items-center justify-center group-hover:border-cream/30 transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cream/40"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <span className="sans text-[10px] text-cream/40 group-hover:text-cream/70 transition-colors">contact@maisonmonnier.fr</span>
                </a>
                <a href="https://www.instagram.com/maison.monnier" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-8 h-8 border border-cream/10 flex items-center justify-center group-hover:border-cream/30 transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cream/40"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </div>
                  <span className="sans text-[10px] text-cream/40 group-hover:text-cream/70 transition-colors">@maison.monnier</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer lang="fr" />
    </main>
  )
}
