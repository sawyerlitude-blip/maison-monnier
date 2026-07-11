import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Propriétés d'Exception Côte d'Azur | Gestion de Villa | Maison Monnier",
  description: "Une sélection de résidences supervisées ou opérées par Maison Monnier. Villas de luxe en France, Italie et Laponie.",
}

const BASE = 'https://framerusercontent.com'

// Exact assets from maisonmonnier.fr/properties:
// Hero video: Xa38urlwIUqezc9HGiKmcZ3dA.mp4 (ski chalet / destinations)
// France banner: DPiiJxC8j3XNPzRQpeZkcLX3Ugs.jpg (Nice coastline aerial)
// Palais des Lilas: OyZT2ZKbsssTkzPUfAgpvbo9p8M.jpg (stone villa with gardens)
// Italy banner: 45aSRPKSFTJGXRn2QzKYcDCYI3I.jpg (Cinque Terre / Vernazza)
// El Castello Italy: 2fy057qpWj0X6tDIQgeFIvn4XI.png (medieval castle at dusk)
// Laponie banner: teUQOb6WFLimLE92eHojmmpltM.png (arctic landscape sunset)
// Arctic Lodge: 08QDDgqaB3nCL7h14Q5j1rBoQE.png (snowy chalet)

const properties = [
  {
    country: 'France',
    bannerImg: `${BASE}/images/DPiiJxC8j3XNPzRQpeZkcLX3Ugs.jpg`,
    bannerAlt: 'Côte d\'Azur, France',
    name: 'Palais des Lilas',
    location: 'Cannes, French Riviera',
    img: `${BASE}/images/OyZT2ZKbsssTkzPUfAgpvbo9p8M.jpg`,
    desc: "Le Palais des Lilas est une propriété méditerranéenne raffinée où l'élégance se conjugue à des dimensions exceptionnelles, offrant un équilibre rare entre intimité, confort et présence architecturale. Situé sur un vaste domaine avec vue sur la mer, le domaine comprend une somptueuse résidence principale, une maison d'hôtes et des équipements de loisirs haut de gamme conçus pour la détente et les réceptions.",
  },
  {
    country: 'Italie',
    bannerImg: `${BASE}/images/45aSRPKSFTJGXRn2QzKYcDCYI3I.jpg`,
    bannerAlt: 'Italie',
    name: 'El Castello',
    location: 'Italie',
    img: `${BASE}/images/2fy057qpWj0X6tDIQgeFIvn4XI.png`,
    desc: "El Castello est un havre de paix raffiné et immersif, niché au cœur de la campagne ombrienne. Dominant la vallée et offrant une vue imprenable sur le Tibre et les collines environnantes, le domaine propose un équilibre unique entre patrimoine, confort et nature. Conçu pour la détente et les moments de partage, le Castello invite ses hôtes à ralentir le rythme, à se ressourcer et à s'imprégner pleinement de la dolce vita à l'italienne.",
  },
  {
    country: 'Laponie',
    bannerImg: `${BASE}/images/teUQOb6WFLimLE92eHojmmpltM.png`,
    bannerAlt: 'Laponie',
    name: 'Arctic Lodge',
    location: 'Laponie',
    img: `${BASE}/images/08QDDgqaB3nCL7h14Q5j1rBoQE.png`,
    desc: "Un lodge d'exception au cœur de la Laponie, où la magie de la nature arctique se conjugue à un confort absolu. Aurores boréales, forêts enneigées et silence envoûtant composent un cadre unique pour une expérience immersive et ressourçante, sublimée par un service de butler privé et des expéditions sur mesure.",
  },
]

export default function Proprietes() {
  return (
    <main style={{ background: '#08101e', color: '#f5f0e8' }}>
      <Nav lang="fr" />

      {/* Hero with ski chalet video */}
      <section className="relative flex flex-col justify-end overflow-hidden" style={{ height: '100vh', minHeight: '560px' }}>
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover" style={{ opacity: 0.35 }}>
            <source src={`${BASE}/assets/Xa38urlwIUqezc9HGiKmcZ3dA.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #08101e 0%, rgba(8,16,30,0.15) 50%, #08101e 100%)' }} />
        </div>
        <div className="relative z-10" style={{ padding: '0 clamp(24px,6vw,80px) clamp(48px,6vw,80px)' }}>
          <p className="eyebrow" style={{ marginBottom: '16px' }}>Nos propriétés</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(42px,7vw,88px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 0.95, color: '#f5f0e8', marginBottom: '24px' }}>Nos destinations</h1>
        </div>
      </section>

      {/* Selector */}
      <section style={{ background: '#0c1420', padding: 'clamp(48px,6vw,72px) clamp(24px,6vw,80px)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 300, fontStyle: 'italic', color: '#f5f0e8', marginBottom: '12px' }}>Propriétés</h2>
        <p className="sans" style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.28)', marginBottom: '6px' }}>Une sélection de résidences supervisées ou opérées par Maison Monnier</p>
        <p className="sans" style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.18)', marginBottom: '36px' }}>(Photos non contractuelles · Discrétion absolue · Localisations volontairement laissées imprécises)</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {properties.map((p, i) => (
            <a key={i} href={`#prop-${i}`} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '18px', fontWeight: 300, color: '#f5f0e8', padding: '12px 32px', border: '.5px solid rgba(245,240,232,0.25)', textDecoration: 'none', transition: 'all .2s' }}>{p.country}</a>
          ))}
        </div>
      </section>

      {/* Each property */}
      {properties.map((p, i) => (
        <div key={i} id={`prop-${i}`}>
          {/* Country banner */}
          <div className="relative overflow-hidden" style={{ height: 'clamp(280px,38vw,480px)' }}>
            <img src={p.bannerImg} alt={p.bannerAlt} className="w-full h-full object-cover" style={{ opacity: 0.65 }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(8,16,30,0.3) 0%, transparent 40%, rgba(8,16,30,0.5) 100%)' }} />
            <div className="absolute" style={{ bottom: '32px', left: '50%', transform: 'translateX(-50%)' }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(36px,6vw,72px)', fontWeight: 300, fontStyle: 'italic', color: '#f5f0e8', textAlign: 'center' }}>{p.country}</h2>
            </div>
          </div>

          {/* Property detail */}
          <section style={{ background: i % 2 === 0 ? '#08101e' : '#0c1420', padding: 'clamp(56px,7vw,88px) clamp(24px,6vw,80px)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
              <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img src={p.img} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" style={{ opacity: 0.82 }} />
              </div>
              <div style={{ paddingTop: '8px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 300, letterSpacing: '0.1em', color: '#f5f0e8', marginBottom: '8px', textTransform: 'uppercase' }}>{p.name}</h3>
                <p className="sans" style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.35)', marginBottom: '24px' }}>{p.location}</p>
                <p className="sans" style={{ fontSize: '12px', lineHeight: 1.95, color: 'rgba(245,240,232,0.45)', marginBottom: '32px' }}>{p.desc}</p>
                <Link href="/contact" className="btn-ghost">En savoir plus →</Link>
              </div>
            </div>
          </section>
        </div>
      ))}

      <section style={{ background: '#f5f0e8', padding: 'clamp(56px,7vw,80px) clamp(24px,6vw,80px)', textAlign: 'center' }}>
        <p className="eyebrow-dark" style={{ marginBottom: '16px' }}>Nous Contacter</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(30px,5vw,52px)', fontWeight: 300, fontStyle: 'italic', color: '#08101e', marginBottom: '28px' }}>Orchestrons votre expérience.</h2>
        <Link href="/contact" className="btn-dark">Prendre rendez-vous</Link>
      </section>

      <Footer lang="fr" />
    </main>
  )
}
