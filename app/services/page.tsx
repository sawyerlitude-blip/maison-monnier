import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services de Conciergerie, Gestion de Villa & Butler | Maison Monnier',
  description: "Maison Monnier prend en charge l'ensemble de la gestion de votre résidence avec le plus haut niveau d'exigence.",
}

const BASE = 'https://framerusercontent.com'

// Exact assets from maisonmonnier.fr/services:
// Hero video: OqinUGjrszQf1ygB7PHtf8i1lm8.mp4 (expériences d'exception)
// Service 01 - Gestion Opérationnelle: mTOcPdtU0I4QhHcXTrAVxzQgdc.jpg (villa pool aerial)
// Service 02 - Conciergerie Privée: hNXYSRVrddhhk6x3M6cDkgVpgQ.jpg (bell/concierge)
// Service 03 - Placement Personnel: ZW62CxjPafzsmkVcpOeOBiXw.jpg (housekeeper)  
// Service 04 - Gestion Projets: qkKNecKbDWAfXGMh4Rj2sXq1IE.jpg (desk/planning)

const services = [
  {
    num: '01', name: 'Gestion Opérationnelle',
    tag: "NOUS PRENONS EN CHARGE L'INTÉGRALITÉ DES ASPECTS TECHNIQUES ET STRUCTURELS",
    img: `${BASE}/images/mTOcPdtU0I4QhHcXTrAVxzQgdc.jpg`,
    headline: 'Une présence discrète, une organisation irréprochable',
    body: "Chaque séjour se doit d'avoir une organisation sans faille. Maison Monnier prend en charge la gestion opérationnelle complète de votre résidence : préparation des lieux, coordination des équipes, conciergerie privée, suivi des demandes sur mesure et supervision après le départ.",
    role: "Vous offrir la sérénité d'une propriété parfaitement gérée, en toute discrétion.",
  },
  {
    num: '02', name: 'Conciergerie Privée',
    tag: "UNE CONCIERGERIE ULTRA-DISCRÈTE DÉDIÉE AUX PROPRIÉTAIRES ET VOYAGEURS",
    img: `${BASE}/images/hNXYSRVrddhhk6x3M6cDkgVpgQ.jpg`,
    headline: "L'art d'anticiper chacun de vos besoins",
    body: "Maison Monnier met à votre disposition un service de conciergerie privée pensé pour répondre à chacune de vos attentes, avec réactivité, discrétion et sens du détail. Réservations de restaurants, transferts, expériences sur mesure, organisation de séjours, demandes de dernière minute ou assistance quotidienne : chaque besoin est pris en charge avec la plus grande attention.",
    role: "Vous permettre de profiter pleinement de votre temps, en toute sérénité.",
  },
  {
    num: '03', name: 'Placement Personnel de Maison',
    tag: "RECRUTEMENT, FORMATION, SUPERVISION",
    img: `${BASE}/images/ZW62CxjPafzsmkVcpOeOBiXw.jpg`,
    headline: "Des talents d'exception, au service de votre résidence",
    body: "Maison Monnier identifie, sélectionne et met en place un personnel de maison en parfaite adéquation avec votre style de vie, vos exigences et vos habitudes. Majordome, gouvernante, chef privé, chauffeur, personnel de service ou équipes saisonnières : chaque profil est choisi avec la plus grande rigueur.",
    role: "Vous offrir une équipe de confiance, formée à nos standards d'excellence et capable d'anticiper vos besoins avec justesse et discrétion.",
  },
  {
    num: '04', name: 'Gestion de Projets',
    tag: "COORDINATION, OPTIMISATION ET EXCELLENCE À CHAQUE ÉTAPE",
    img: `${BASE}/images/qkKNecKbDWAfXGMh4Rj2sXq1IE.jpg`,
    headline: "De l'idée à la réalisation, une coordination sans compromis",
    body: "Maison Monnier vous accompagne dans la conduite et la coordination de vos projets liés à votre résidence et à votre art de vivre. Travaux, aménagements, rénovation, préparation saisonnière, organisation d'événements privés ou mise en place de nouveaux services : nous pilotons chaque étape avec rigueur et discrétion.",
    role: "Sélection des intervenants, suivi opérationnel, contrôle de l'avancement et respect de vos standards.",
  },
]

export default function Services() {
  return (
    <main style={{ background: '#08101e', color: '#f5f0e8' }}>
      <Nav lang="fr" />

      {/* Hero with exact video */}
      <section className="relative flex flex-col justify-end overflow-hidden" style={{ height: '100vh', minHeight: '560px' }}>
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover" style={{ opacity: 0.35 }}>
            <source src={`${BASE}/assets/OqinUGjrszQf1ygB7PHtf8i1lm8.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #08101e 0%, rgba(8,16,30,0.15) 50%, #08101e 100%)' }} />
        </div>
        <div className="relative z-10" style={{ padding: '0 clamp(24px,6vw,80px) clamp(48px,6vw,80px)' }}>
          <p className="eyebrow" style={{ marginBottom: '16px' }}>Nos services</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(42px,7vw,88px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 0.95, color: '#f5f0e8' }}>
            Expériences<br />d'exception
          </h1>
        </div>
      </section>

      {/* Intro on cream */}
      <section style={{ background: '#f5f0e8', padding: 'clamp(56px,7vw,88px) clamp(24px,6vw,80px)' }}>
        <div style={{ maxWidth: '680px' }}>
          <p className="eyebrow-dark" style={{ marginBottom: '24px' }}>UNE GESTION D'EXCEPTION, PENSÉE POUR VOTRE TRANQUILLITÉ</p>
          <p className="sans" style={{ fontSize: '13px', lineHeight: 2, color: 'rgba(8,16,30,0.62)', marginBottom: '18px' }}>
            Maison Monnier prend en charge l'ensemble de la gestion de votre résidence avec le plus haut niveau d'exigence : supervision du personnel, coordination technique, préparation des séjours et services de conciergerie privée.
          </p>
          <p className="sans" style={{ fontSize: '13px', lineHeight: 2, color: 'rgba(8,16,30,0.62)' }}>
            Grâce à une expérience acquise auprès d'établissements de renom tels que Four Seasons Hotels and Resorts et Mandarin Oriental Exceptional Homes, ainsi qu'auprès d'une clientèle internationale UHNW, Maison Monnier garantit une organisation fluide, discrète et entièrement personnalisée.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: '#0c1420', padding: 'clamp(40px,5vw,64px) clamp(24px,6vw,80px)', textAlign: 'center', borderTop: '.5px solid rgba(245,240,232,0.05)', borderBottom: '.5px solid rgba(245,240,232,0.05)' }}>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(18px,2.5vw,26px)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(245,240,232,0.65)', maxWidth: '680px', margin: '0 auto 12px', lineHeight: 1.6 }}>
          « Le vrai luxe, ce n'est pas ce que l'on possède, mais la manière dont on est servi. »
        </p>
        <p className="sans" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.25)' }}>— Maison Monnier</p>
      </section>

      {/* Services 4-grid overview */}
      <section style={{ background: '#08101e', padding: 'clamp(56px,7vw,88px) clamp(24px,6vw,80px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1px', background: 'rgba(245,240,232,0.05)' }}>
          {services.map((s, i) => (
            <a key={i} href={`#svc-${i}`} style={{ background: '#08101e', padding: 'clamp(28px,3.5vw,44px)', display: 'block', textDecoration: 'none' }}>
              <div className="overflow-hidden" style={{ aspectRatio: '16/9', marginBottom: '20px' }}>
                <img src={s.img} alt={s.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" style={{ opacity: 0.72 }} />
              </div>
              <p className="sans" style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'rgba(245,240,232,0.2)', marginBottom: '8px' }}>{s.num}</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 300, fontStyle: 'italic', color: '#f5f0e8', marginBottom: '8px' }}>{s.name}</h2>
              <p className="sans" style={{ fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.25)', lineHeight: 1.5 }}>{s.tag}</p>
              <p className="sans" style={{ fontSize: '10px', color: 'rgba(245,240,232,0.38)', marginTop: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>En savoir plus →</p>
            </a>
          ))}
        </div>
      </section>

      {/* Each service detail */}
      {services.map((s, i) => (
        <section key={i} id={`svc-${i}`} style={{ background: i % 2 === 0 ? '#0c1420' : '#08101e', padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,80px)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <p className="sans" style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(245,240,232,0.2)', marginBottom: '14px' }}>{s.num}</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,4vw,46px)', fontWeight: 300, fontStyle: 'italic', color: '#f5f0e8', lineHeight: 1.1, marginBottom: '14px' }}>{s.name}</h2>
              <div style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.3)', border: '.5px solid rgba(245,240,232,0.08)', padding: '8px 14px', display: 'inline-block', marginBottom: '24px', lineHeight: 1.6 }}>{s.tag}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(245,240,232,0.78)', marginBottom: '14px', lineHeight: 1.3 }}>{s.headline}</h3>
              <p className="sans" style={{ fontSize: '12px', lineHeight: 1.95, color: 'rgba(245,240,232,0.44)', marginBottom: '14px' }}>{s.body}</p>
              <p className="sans" style={{ fontSize: '11px', lineHeight: 1.8, color: 'rgba(245,240,232,0.28)', fontStyle: 'italic', marginBottom: '32px' }}>Notre rôle : {s.role}</p>
              <Link href="/contact" className="btn-ghost">Nous contacter →</Link>
            </div>
            <div className={`relative ${i % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img src={s.img} alt={s.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" style={{ opacity: 0.78 }} />
              </div>
            </div>
          </div>
        </section>
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
