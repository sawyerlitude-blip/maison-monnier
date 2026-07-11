import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WorldMap from '@/components/WorldMap'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Propriétés d\'Exception Côte d\'Azur | Gestion de Villa | Maison Monnier',
  description: 'Une sélection de résidences supervisées ou opérées par Maison Monnier. Villas de luxe en France, Italie et Laponie. Croatie bientôt disponible.',
  keywords: ['villa luxe côte d\'azur', 'résidence exception france', 'location villa cannes', 'villa toscane', 'lodge laponie'],
}

const properties = [
  {
    num: '01', name: 'Palais des Lilas', location: 'Cannes, French Riviera', country: 'France',
    desc: 'Le Palais des Lilas est une propriété méditerranéenne raffinée où l\'élégance se conjugue à des dimensions exceptionnelles, offrant un équilibre rare entre intimité, confort et présence architecturale. Situé sur un vaste domaine avec vue sur la mer.',
    tags: ['Piscine privée', 'Vue mer', 'Personnel inclus', 'Hélipad'],
    status: 'available',
    img: 'https://framerusercontent.com/images/T8gA0CqG7jRqTKwP4Z969SaJk4.jpg',
  },
  {
    num: '02', name: 'Villa Toscana', location: 'Toscane, Italie', country: 'Italie',
    desc: 'Domaine privé niché au coeur des collines toscanes, entre vignobles et oliviers centenaires. Une retraite d\'exception alliant authenticité italienne et service de butler de haut vol.',
    tags: ['Vignoble privé', 'Chef privé', 'Piscine à débordement', 'Salle de sport'],
    status: 'available',
    img: 'https://framerusercontent.com/images/EiAonMC4JhuW4zETmljLJLXzJnk.jpg',
  },
  {
    num: '03', name: 'Arctic Lodge', location: 'Laponie, Finlande', country: 'Laponie',
    desc: 'Lodge exclusif au coeur de la nature arctique finlandaise. Aurores boréales, rennes, spa nordique et silence absolu. Une expérience immersive sans équivalent, supervisée en permanence par notre équipe.',
    tags: ['Aurores boréales', 'Sauna traditionnel', 'Expéditions guidées', 'Isolation totale'],
    status: 'available',
    img: 'https://framerusercontent.com/images/T8gA0CqG7jRqTKwP4Z969SaJk4.jpg',
  },
  {
    num: '04', name: 'Villa Adriatica', location: 'Dubrovnik, Croatie', country: 'Croatie',
    desc: 'Villa d\'exception sur les rives de la côte dalmate, face aux eaux cristallines de l\'Adriatique. Un cadre incomparable entre falaises de calcaire et mer turquoise. Ouverture prévue pour la saison estivale 2026.',
    tags: ['Vue Adriatique', 'Embarcadère privé', 'Plage privée', 'Ouverture 2026'],
    status: 'soon',
    img: 'https://framerusercontent.com/images/EiAonMC4JhuW4zETmljLJLXzJnk.jpg',
  },
]

export default function Proprietes() {
  return (
    <main className="bg-navy min-h-screen">
      <Nav lang="fr" />

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://framerusercontent.com/images/EiAonMC4JhuW4zETmljLJLXzJnk.jpg" alt="Propriétés Maison Monnier" className="w-full h-full object-cover opacity-22" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/15 to-navy"></div>
        </div>
        <div className="relative z-10 px-8 md:px-16 pb-16">
          <p className="eyebrow mb-5">Nos propriétés</p>
          <h1 className="font-serif font-light italic text-[clamp(40px,7vw,88px)] text-cream leading-none mb-4">Nos<br />destinations</h1>
          <div className="flex items-center gap-5 mt-6">
            <div className="w-10 h-px bg-cream/30"></div>
            <p className="sans text-[9px] tracking-[0.35em] uppercase text-cream/30">Une sélection de résidences supervisées ou opérées par Maison Monnier</p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-navy-light border-y border-cream/[0.06] px-8 md:px-16 py-4">
        <p className="sans text-[9px] tracking-[0.2em] uppercase text-cream/20 text-center">
          Photos non contractuelles · Discrétion absolue · Localisations volontairement laissées imprécises
        </p>
      </div>

      {/* Properties */}
      {properties.map((p, i) => (
        <section key={i} className={`py-16 md:py-24 ${i % 2 === 0 ? 'bg-navy' : 'bg-navy-light'} ${p.status === 'soon' ? 'opacity-80' : ''}`}>
          <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <div className="flex items-center gap-4 mb-6">
                <p className="sans text-[9px] tracking-[0.3em] text-cream/20">{p.num}</p>
                {p.status === 'soon' && (
                  <span className="sans text-[7px] tracking-[0.2em] uppercase px-2 py-1 border border-gold/30 text-gold/60">Bientôt disponible</span>
                )}
              </div>
              <p className="sans text-[9px] tracking-[0.3em] uppercase text-cream/25 mb-3">{p.country} · {p.location}</p>
              <h2 className="font-serif font-light italic text-[clamp(28px,4vw,48px)] text-cream mb-6 leading-tight">{p.name}</h2>
              <p className="sans text-[11px] leading-[1.95] text-cream/45 mb-8">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-10">
                {p.tags.map((tag, j) => (
                  <span key={j} className="sans text-[8px] tracking-[0.15em] uppercase text-cream/30 border border-cream/10 px-3 py-1.5">{tag}</span>
                ))}
              </div>
              {p.status === 'available' ? (
                <Link href="/contact" className="btn-ghost">Demander des informations <span>→</span></Link>
              ) : (
                <span className="btn-ghost opacity-50 cursor-default">Disponible en 2026 <span>→</span></span>
              )}
            </div>
            <div className={`relative ${i % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className={`w-full h-full object-cover hover:scale-105 transition-transform duration-700 ${p.status === 'soon' ? 'opacity-50 grayscale-[30%]' : 'opacity-75'}`} />
              </div>
              {p.status === 'soon' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-navy/60 border border-gold/20 px-6 py-4 text-center">
                    <p className="sans text-[8px] tracking-[0.35em] uppercase text-gold/70">Ouverture 2026</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <WorldMap lang="fr" />

      <Footer lang="fr" />
    </main>
  )
}
