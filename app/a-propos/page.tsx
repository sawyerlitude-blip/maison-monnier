import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À Propos de Maison Monnier | Sébastien Monnier, Expert du Luxe',
  description: 'Après plus de 15 années consacrées au service de familles UHNW, Sébastien Monnier a créé Maison Monnier — une conciergerie privée fondée sur la confiance, la discrétion et l\'excellence.',
}

const partners = ['Mandarin Oriental', 'Four Seasons', 'Global Luxury Properties', 'Bramble Ski', 'Ski Armadillo', 'Monidello']

export default function APropos() {
  return (
    <main style={{ background: '#08101e', color: '#f5f0e8' }}>
      <Nav lang="fr" />

      {/* Hero */}
      <section className="relative flex flex-col justify-end overflow-hidden" style={{ height: '100vh', minHeight: '560px' }}>
        <div className="absolute inset-0">
          <img src="https://framerusercontent.com/images/EiAonMC4JhuW4zETmljLJLXzJnk.jpg" alt="À propos Maison Monnier" className="w-full h-full object-cover" style={{ opacity: 0.2 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #08101e 0%, rgba(8,16,30,0.15) 50%, #08101e 100%)' }} />
        </div>
        <div className="relative z-10" style={{ padding: '0 clamp(24px,6vw,80px) clamp(48px,6vw,80px)' }}>
          <p className="eyebrow" style={{ marginBottom: '16px' }}>À propos de Maison Monnier</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(40px,6.5vw,82px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 0.95, color: '#f5f0e8' }}>
            Á propos de<br />Maison Monnier
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#0c1420', padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,80px)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="sans" style={{ fontSize: '12px', lineHeight: 2, color: 'rgba(245,240,232,0.5)', marginBottom: '20px' }}>
              Après plus de 15 années consacrées au service de familles UHNW, au sein de villas prestigieuses, de chalets alpins, de yachts privés et auprès de maisons emblématiques telles que Mandarin Oriental Hotel Group et Four Seasons Hotels and Resorts, Sébastien Monnier a souhaité créer une maison à son image.
            </p>
            <p className="sans" style={{ fontSize: '12px', lineHeight: 2, color: 'rgba(245,240,232,0.5)', marginBottom: '36px' }}>
              Une maison fondée sur la confiance, la discrétion et le sens du service, où l'excellence s'exprime avec naturel et où chaque client se sent immédiatement compris, accompagné et serein.
            </p>
            <Link href="/contact" className="btn-ghost">Nous contacter →</Link>
          </div>
          <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
            <img src="https://framerusercontent.com/images/T8gA0CqG7jRqTKwP4Z969SaJk4.jpg" alt="Sébastien Monnier" className="w-full h-full object-cover" style={{ opacity: 0.72 }} />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative overflow-hidden" style={{ background: '#08101e', padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,80px)', textAlign: 'center', borderTop: '0.5px solid rgba(245,240,232,0.05)', borderBottom: '0.5px solid rgba(245,240,232,0.05)' }}>
        <div className="absolute pointer-events-none select-none" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: "'Cormorant Garamond',serif", fontSize: '220px', color: 'rgba(245,240,232,0.025)', lineHeight: 1 }}>"</div>
        <div style={{ width: '28px', height: '0.5px', background: 'rgba(245,240,232,0.18)', margin: '0 auto 28px' }} />
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(20px,3vw,32px)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(245,240,232,0.7)', maxWidth: '620px', margin: '0 auto 16px', lineHeight: 1.6 }}>
          Parce que le véritable luxe réside aussi dans la simplicité des choses parfaitement orchestrées.
        </p>
        <p className="sans" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.22)' }}>Sébastien Monnier, Founder</p>
      </section>

      {/* Partners */}
      <section style={{ background: '#0c1420', padding: 'clamp(48px,6vw,72px) clamp(24px,6vw,80px)', borderBottom: '0.5px solid rgba(245,240,232,0.05)' }}>
        <p className="eyebrow" style={{ textAlign: 'center', marginBottom: '40px' }}>Références & partenaires</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {partners.map((p, i) => (
            <div key={i} style={{ textAlign: 'center', opacity: 0.35, padding: '12px' }}>
              <p className="sans" style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f5f0e8', fontWeight: 500 }}>{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f5f0e8', padding: 'clamp(56px,7vw,80px) clamp(24px,6vw,80px)', textAlign: 'center' }}>
        <p className="eyebrow-dark" style={{ marginBottom: '16px' }}>Nous Contacter</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(32px,5vw,56px)', fontWeight: 300, fontStyle: 'italic', color: '#08101e', marginBottom: '32px' }}>Orchestrons votre expérience.</h2>
        <Link href="/contact" className="btn-dark">Prendre rendez-vous</Link>
      </section>

      <Footer lang="fr" />
    </main>
  )
}
