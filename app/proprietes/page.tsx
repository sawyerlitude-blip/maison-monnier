import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Propriétés d'Exception Côte d'Azur | Gestion de Villa | Maison Monnier",
  description: "Une sélection de résidences supervisées ou opérées par Maison Monnier. Villas de luxe en France et Italie.",
}

const properties = [
  {
    num: '01', name: 'Palais des Lilas', location: 'Cannes, French Riviera', country: 'France',
    desc: 'Le Palais des Lilas est une propriété méditerranéenne raffinée où l\'élégance se conjugue à des dimensions exceptionnelles, offrant un équilibre rare entre intimité, confort et présence architecturale. Situé sur un vaste domaine avec vue sur la mer.',
    tags: ['Piscine privée', 'Vue mer', 'Personnel inclus', 'Hélipad'],
    img: 'https://framerusercontent.com/images/T8gA0CqG7jRqTKwP4Z969SaJk4.jpg',
  },
  {
    num: '02', name: 'Villa Toscana', location: 'Toscane, Italie', country: 'Italie',
    desc: 'Domaine privé niché au cœur des collines toscanes, entre vignobles et oliviers centenaires. Une retraite d\'exception alliant authenticité italienne et service de butler de haut vol.',
    tags: ['Vignoble privé', 'Chef privé', 'Piscine à débordement', 'Cave à vins'],
    img: 'https://framerusercontent.com/images/EiAonMC4JhuW4zETmljLJLXzJnk.jpg',
  },
  {
    num: '03', name: 'Arctic Lodge', location: 'Laponie, Finlande', country: 'Laponie',
    desc: 'Lodge exclusif au cœur de la nature arctique finlandaise. Aurores boréales, rennes, sauna nordique et silence absolu. Une expérience immersive sans équivalent, supervisée en permanence par notre équipe.',
    tags: ['Aurores boréales', 'Sauna traditionnel', 'Expéditions guidées', 'Isolation totale'],
    img: 'https://framerusercontent.com/images/T8gA0CqG7jRqTKwP4Z969SaJk4.jpg',
  },
]

export default function Proprietes() {
  return (
    <main style={{ background: '#08101e', color: '#f5f0e8' }}>
      <Nav lang="fr" />

      {/* Hero */}
      <section className="relative flex flex-col justify-end overflow-hidden" style={{ height: '100vh', minHeight: '560px' }}>
        <div className="absolute inset-0">
          <img src="https://framerusercontent.com/images/EiAonMC4JhuW4zETmljLJLXzJnk.jpg" alt="Propriétés Maison Monnier" className="w-full h-full object-cover" style={{ opacity: 0.22 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #08101e 0%, rgba(8,16,30,0.15) 50%, #08101e 100%)' }} />
        </div>
        <div className="relative z-10" style={{ padding: '0 clamp(24px,6vw,80px) clamp(48px,6vw,80px)' }}>
          <p className="eyebrow" style={{ marginBottom: '16px' }}>Nos propriétés</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(42px,7vw,88px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 0.95, marginBottom: '24px', color: '#f5f0e8' }}>Nos<br />destinations</h1>
        </div>
      </section>

      {/* Disclaimer */}
      <div style={{ background: '#0c1420', borderBottom: '0.5px solid rgba(245,240,232,0.06)', padding: '14px clamp(24px,6vw,80px)', textAlign: 'center' }}>
        <p className="sans" style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.22)' }}>
          Photos non contractuelles · Discrétion absolue · Localisations volontairement laissées imprécises
        </p>
      </div>

      {/* Properties */}
      {properties.map((p, i) => (
        <section key={i} style={{ background: i % 2 === 0 ? '#08101e' : '#0c1420', padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,80px)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <p className="sans" style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(245,240,232,0.2)', marginBottom: '8px' }}>{p.num}</p>
              <p className="sans" style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.28)', marginBottom: '10px' }}>{p.country} · {p.location}</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300, fontStyle: 'italic', color: '#f5f0e8', lineHeight: 1.1, marginBottom: '20px' }}>{p.name}</h2>
              <p className="sans" style={{ fontSize: '12px', lineHeight: 1.95, color: 'rgba(245,240,232,0.45)', marginBottom: '24px' }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
                {p.tags.map((tag, j) => <span key={j} className="prop-tag">{tag}</span>)}
              </div>
              <Link href="/contact" className="btn-ghost">Demander des informations →</Link>
            </div>
            <div className={`relative ${i % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img src={p.img} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" style={{ opacity: 0.72 }} />
              </div>
            </div>
          </div>
        </section>
      ))}

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
