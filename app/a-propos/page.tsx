import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À Propos de Maison Monnier | Sébastien Monnier, Expert du Luxe',
  description: "Maison Monnier est née d'une conviction simple : une résidence d'exception mérite une attention de chaque instant.",
}

const B = 'https://framerusercontent.com'
// About page assets confirmed:
// Hero video: vwu37J3mBgdhp5OYHzudXV1GOg.mp4 (Côte d'Azur bay/port aerial)
// About image: 0Lq4clAgeelM90FaumXfJwF8tY.jpg (woman on yacht, Côte d'Azur)
// Quote bg: pC6d92bq8OO8PPkBbhoyi2ZseE.jpg (aerial sea)
// Partner logos bg: S43Pm0MjAbXMg34lbncSw7aEXE.png

const partners = [
  { name: 'Mandarin Oriental', sub: 'Exceptional Homes' },
  { name: 'Four Seasons', sub: 'Hotels and Resorts' },
  { name: 'Global Luxury', sub: 'Properties' },
  { name: 'Bramble Ski', sub: 'Luxury Ski Chalets' },
  { name: 'Ski Armadillo', sub: 'Luxury Ski Chalets' },
  { name: 'Monidello', sub: 'Private Estates' },
]

export default function APropos() {
  return (
    <main style={{ background: '#08101e', color: '#f5f0e8' }}>
      <Nav lang="fr" />

      {/* Hero — Côte d'Azur bay video */}
      <section className="relative flex flex-col justify-end overflow-hidden" style={{ height: '100vh', minHeight: '560px' }}>
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover" style={{ opacity: 0.38 }}>
            <source src={`${B}/assets/vwu37J3mBgdhp5OYHzudXV1GOg.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom,#08101e 0%,rgba(8,16,30,.1) 50%,#08101e 100%)' }} />
        </div>
        <div className="relative z-10" style={{ padding: '0 clamp(24px,6vw,80px) clamp(48px,6vw,80px)' }}>
          <p className="eyebrow" style={{ marginBottom: '16px' }}>À propos de Maison Monnier</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(40px,6.5vw,82px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 0.95, color: '#f5f0e8' }}>
            Á propos de<br />Maison Monnier
          </h1>
        </div>
      </section>

      {/* About content — cream background like original */}
      <section style={{ background: '#f5f0e8', padding: 'clamp(56px,7vw,88px) clamp(24px,6vw,80px)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <p className="sans" style={{ fontSize: '13px', lineHeight: 2, color: 'rgba(8,16,30,0.62)', marginBottom: '20px' }}>
              Maison Monnier est née d'une conviction simple : une résidence d'exception mérite une attention de chaque instant, portée avec exigence, chaleur et simplicité.
            </p>
            <p className="sans" style={{ fontSize: '13px', lineHeight: 2, color: 'rgba(8,16,30,0.62)', marginBottom: '20px' }}>
              Après plus de 15 années consacrées au service de familles UHNW, au sein de villas prestigieuses, de chalets alpins, de yachts privés et auprès de maisons emblématiques telles que Mandarin Oriental Hotel Group et Four Seasons Hotels and Resorts, Sébastien Monnier a souhaité créer une maison à son image.
            </p>
            <p className="sans" style={{ fontSize: '13px', lineHeight: 2, color: 'rgba(8,16,30,0.62)', marginBottom: '20px' }}>
              Une maison fondée sur la confiance, la discrétion et le sens du service, où l'excellence s'exprime avec naturel et où chaque client se sent immédiatement compris, accompagné et serein.
            </p>
            <p className="sans" style={{ fontSize: '13px', lineHeight: 2, color: 'rgba(8,16,30,0.62)', marginBottom: '36px' }}>
              Au-delà de la rigueur opérationnelle, Maison Monnier place l'humain au cœur de son approche : une présence attentive, chaleureuse et discrète, pensée pour simplifier le quotidien et offrir une véritable tranquillité d'esprit.
            </p>
            <Link href="/contact" className="btn-dark">Nous contacter</Link>
          </div>
          {/* Woman on yacht — exact image from original */}
          <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
            <img src={`${B}/images/0Lq4clAgeelM90FaumXfJwF8tY.jpg`} alt="Maison Monnier — Côte d'Azur" className="w-full h-full object-cover" style={{ opacity: 0.92 }} />
          </div>
        </div>
      </section>

      {/* Quote — sea aerial background */}
      <section className="relative overflow-hidden" style={{ borderTop: '.5px solid rgba(245,240,232,0.05)' }}>
        <div className="absolute inset-0">
          <img src={`${B}/images/pC6d92bq8OO8PPkBbhoyi2ZseE.jpg`} alt="" className="w-full h-full object-cover" style={{ opacity: 0.18 }} />
          <div className="absolute inset-0" style={{ background: 'rgba(8,16,30,0.82)' }} />
        </div>
        <div className="relative z-10" style={{ padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,80px)', textAlign: 'center' }}>
          <div style={{ width: '30px', height: '.5px', background: 'rgba(245,240,232,0.2)', margin: '0 auto 28px' }} />
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(20px,3vw,32px)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(245,240,232,0.72)', maxWidth: '680px', margin: '0 auto 16px', lineHeight: 1.65 }}>
            Parce que le véritable luxe réside aussi dans la simplicité des choses parfaitement orchestrées.
          </p>
          <p className="sans" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.3)' }}>Sébastien Monnier, Founder</p>
        </div>
      </section>

      {/* Partners */}
      <section style={{ background: '#0c1420', padding: 'clamp(48px,6vw,72px) clamp(24px,6vw,80px)', borderBottom: '.5px solid rgba(245,240,232,0.05)' }}>
        <p className="eyebrow" style={{ textAlign: 'center', marginBottom: '44px' }}>Références & partenaires</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px 48px' }}>
          {partners.map((p, i) => (
            <div key={i} style={{ textAlign: 'center', opacity: 0.38, minWidth: '120px' }}>
              <p className="sans" style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f5f0e8', fontWeight: 500, marginBottom: '4px' }}>{p.name}</p>
              <p className="sans" style={{ fontSize: '9px', color: 'rgba(245,240,232,0.55)', letterSpacing: '0.05em' }}>{p.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#f5f0e8', padding: 'clamp(56px,7vw,80px) clamp(24px,6vw,80px)', textAlign: 'center' }}>
        <p className="eyebrow-dark" style={{ marginBottom: '16px' }}>Nous Contacter</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(30px,5vw,52px)', fontWeight: 300, fontStyle: 'italic', color: '#08101e', marginBottom: '28px' }}>Orchestrons votre expérience.</h2>
        <Link href="/contact" className="btn-dark">Prendre rendez-vous</Link>
      </section>

      <Footer lang="fr" />
    </main>
  )
}
