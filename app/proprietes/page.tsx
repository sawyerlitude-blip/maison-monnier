import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Propriétés d'Exception Côte d'Azur | Gestion de Villa | Maison Monnier",
  description: "Une sélection de résidences supervisées ou opérées par Maison Monnier.",
}

const B = 'https://framerusercontent.com'

// EXACT mapping confirmed from live site screenshots:
// France banner = DPiiJxC8j3XNPzRQpeZkcLX3Ugs.jpg (Nice/Cannes coastline aerial)
// Palais des Lilas = OyZT2ZKbsssTkzPUfAgpvbo9p8M.jpg (white villa, pool, palms, Cannes)
// Chalet Insane = 30l2XVxgSYtbV7NDMS9Y5bvkMI.png (snowy alpine chalet, Megève)
// Chalet Céleste = Ugy6xK10pf32eZ7gJStQ7dGdoI.png (stone farmhouse, La Clusaz)
// Italie banner = 45aSRPKSFTJGXRn2QzKYcDCYI3I.jpg (Cinque Terre/Vernazza)
// El Castello = 2fy057qpWj0X6tDIQgeFIvn4XI.png (medieval stone castle, Ombrie)
// Laponie banner = teUQOb6WFLimLE92eHojmmpltM.png (arctic landscape, sunset)
// Chalet Utasu = 08QDDgqaB3nCL7h14Q5j1rBoQE.png (snow-covered nordic lodge)

const sections = [
  {
    id: 'france',
    label: 'France',
    bannerImg: `${B}/images/DPiiJxC8j3XNPzRQpeZkcLX3Ugs.jpg`,
    bannerAlt: 'Côte d\'Azur, France',
    bg: '#08101e',
    properties: [
      {
        name: 'PALAIS DES LILAS',
        location: 'Cannes, French Riviera',
        img: `${B}/images/OyZT2ZKbsssTkzPUfAgpvbo9p8M.jpg`,
        imgAlt: 'Palais des Lilas — villa méditerranéenne, Cannes',
        desc: "Le Palais des Lilas est une propriété méditerranéenne raffinée où l'élégance se conjugue à des dimensions exceptionnelles, offrant un équilibre rare entre intimité, confort et présence architecturale. Situé sur un vaste domaine avec vue sur la mer, le domaine comprend une somptueuse résidence principale, une maison d'hôtes et des équipements de loisirs haut de gamme conçus pour la détente et les réceptions.",
      },
      {
        name: 'CHALET INSANE',
        location: 'Megève, French Alps',
        img: `${B}/images/30l2XVxgSYtbV7NDMS9Y5bvkMI.png`,
        imgAlt: 'Chalet Insane — chalet de luxe Megève',
        desc: "Idéalement situé à seulement une heure de route de l'aéroport de Genève et à 5 minutes du centre de Megève, le chalet offre un accès direct aux pistes de ski. Avec tous les services d'un hôtel 5 étoiles, c'est le lieu idéal pour une escapade de luxe dans les Alpes françaises.",
      },
      {
        name: 'CHALET CÉLESTE',
        location: 'La Clusaz, French Alps',
        img: `${B}/images/Ugy6xK10pf32eZ7gJStQ7dGdoI.png`,
        imgAlt: 'Chalet Céleste — ferme de 1784, La Clusaz',
        desc: "Cette magnifique ferme de 1784, restaurée avec soin, s'étend sur 680 m² et allie charme d'antan, confort et un emplacement exceptionnel. Pouvant accueillir jusqu'à 14 personnes, elle offre des intérieurs raffinés, une vue panoramique sur les monts Aravis.",
      },
    ],
  },
  {
    id: 'italie',
    label: 'Italie',
    bannerImg: `${B}/images/45aSRPKSFTJGXRn2QzKYcDCYI3I.jpg`,
    bannerAlt: 'Italie — Cinque Terre',
    bg: '#0c1420',
    properties: [
      {
        name: 'EL CASTELLO',
        location: 'Italie',
        img: `${B}/images/2fy057qpWj0X6tDIQgeFIvn4XI.png`,
        imgAlt: 'El Castello — château médiéval, Ombrie, Italie',
        desc: "El Castello est un havre de paix raffiné et immersif, niché au cœur de la campagne ombrienne. Dominant la vallée et offrant une vue imprenable sur le Tibre et les collines environnantes, le domaine propose un équilibre unique entre patrimoine, confort et nature. Conçu pour la détente et les moments de partage, le Castello invite ses hôtes à ralentir le rythme, à se ressourcer et à s'imprégner pleinement de la dolce vita à l'italienne.",
      },
    ],
  },
  {
    id: 'laponie',
    label: 'Laponie',
    bannerImg: `${B}/images/teUQOb6WFLimLE92eHojmmpltM.png`,
    bannerAlt: 'Laponie — paysage arctique',
    bg: '#08101e',
    properties: [
      {
        name: 'CHALET UTASU',
        location: 'Lapland',
        img: `${B}/images/08QDDgqaB3nCL7h14Q5j1rBoQE.png`,
        imgAlt: 'Chalet Utasu — lodge arctique, Laponie',
        desc: "Chalet Utasu est né de notre vision commune, franco-finlandaise, partenaires dans la vie comme au travail. Notre passion pour l'hospitalité nous a réunis en 2022, lors de la création d'AR Lifestyle. Depuis, le désir de créer des expériences authentiques et personnalisées guide chacune de nos étapes.",
      },
    ],
  },
]

const S = {
  section: (bg: string) => ({ background: bg, padding: 'clamp(56px,7vw,88px) clamp(24px,6vw,80px)' }),
  h1: { fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(20px,2.5vw,32px)', fontWeight: 300, letterSpacing: '0.12em', color: '#f5f0e8', marginBottom: '8px' },
  loc: { fontFamily: 'Montserrat,sans-serif', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: 'rgba(245,240,232,0.35)', marginBottom: '24px' },
  body: { fontFamily: 'Montserrat,sans-serif', fontSize: '12px', lineHeight: 1.95, color: 'rgba(245,240,232,0.44)', marginBottom: '32px' },
}

export default function Proprietes() {
  return (
    <main style={{ background: '#08101e', color: '#f5f0e8' }}>
      <Nav lang="fr" />

      {/* Hero — ski chalet video */}
      <section className="relative flex flex-col justify-end overflow-hidden" style={{ height: '100vh', minHeight: '560px' }}>
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover" style={{ opacity: 0.38 }}>
            <source src={`${B}/assets/Xa38urlwIUqezc9HGiKmcZ3dA.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom,#08101e 0%,rgba(8,16,30,.12) 50%,#08101e 100%)' }} />
        </div>
        <div className="relative z-10" style={{ padding: '0 clamp(24px,6vw,80px) clamp(48px,6vw,80px)' }}>
          <p className="eyebrow" style={{ marginBottom: '16px' }}>Nos propriétés</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(44px,7vw,92px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 0.95, color: '#f5f0e8' }}>
            Nos destinations
          </h1>
        </div>
      </section>

      {/* Propriétés selector */}
      <section style={{ background: '#0c1420', padding: 'clamp(48px,6vw,72px) clamp(24px,6vw,80px)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(32px,5vw,56px)', fontWeight: 300, fontStyle: 'italic', color: '#f5f0e8', marginBottom: '16px' }}>Propriétés</h2>
        <p className="sans" style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.3)', marginBottom: '6px' }}>
          Une sélection de résidences supervisées ou opérées par Maison Monnier
        </p>
        <p className="sans" style={{ fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.18)', marginBottom: '40px' }}>
          (Photos non contractuelles · Discrétion absolue · Localisations volontairement laissées imprécises)
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(18px,2.2vw,24px)', fontWeight: 300, fontStyle: 'italic', color: '#f5f0e8', padding: '14px 36px', border: '.5px solid rgba(245,240,232,0.3)', textDecoration: 'none', transition: 'all .2s', display: 'inline-block' }}>
              {s.label}
            </a>
          ))}
        </div>
      </section>

      {/* Each country section */}
      {sections.map((section) => (
        <div key={section.id} id={section.id}>
          {/* Country full-width banner */}
          <div className="relative overflow-hidden" style={{ height: 'clamp(300px,40vw,500px)' }}>
            <img src={section.bannerImg} alt={section.bannerAlt} className="w-full h-full object-cover" style={{ opacity: 0.7 }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom,rgba(8,16,30,.35) 0%,transparent 40%,rgba(8,16,30,.55) 100%)' }} />
            <div className="absolute" style={{ bottom: '32px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(40px,7vw,80px)', fontWeight: 300, fontStyle: 'italic', color: '#f5f0e8' }}>{section.label}</h2>
            </div>
          </div>

          {/* Properties in this country */}
          {section.properties.map((prop, pi) => (
            <section key={pi} style={{ ...S.section(pi % 2 === 0 ? section.bg : (section.bg === '#08101e' ? '#0c1420' : '#08101e')) }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
                <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img src={prop.img} alt={prop.imgAlt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" style={{ opacity: 0.85 }} />
                </div>
                <div style={{ paddingTop: '8px' }}>
                  <h3 style={S.h1}>{prop.name}</h3>
                  <p style={S.loc}>{prop.location}</p>
                  <p style={S.body}>{prop.desc}</p>
                  <Link href="/contact" className="btn-ghost">En savoir plus →</Link>
                </div>
              </div>
            </section>
          ))}
        </div>
      ))}

      {/* Approach section */}
      <section style={{ background: '#0c1420', padding: 'clamp(56px,7vw,88px) clamp(24px,6vw,80px)', textAlign: 'center', borderTop: '.5px solid rgba(245,240,232,0.05)' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 300, fontStyle: 'italic', color: '#f5f0e8', marginBottom: '20px' }}>
          Une approche sur-mesure, pensée dans les moindres détails
        </h2>
        <p className="sans" style={{ fontSize: '12px', lineHeight: 1.95, color: 'rgba(245,240,232,0.44)', maxWidth: '640px', margin: '0 auto 36px' }}>
          Chaque bien que nous présentons est sélectionné avec exigence. Au-delà des critères, nous privilégions l'équilibre, l'emplacement, la lumière et le potentiel d'un lieu. Nous accompagnons chaque projet avec discrétion, précision et une attention particulière portée à vos attentes.
        </p>
        <Link href="/contact" className="btn-ghost">Entrer en contact →</Link>
      </section>

      <Footer lang="fr" />
    </main>
  )
}
