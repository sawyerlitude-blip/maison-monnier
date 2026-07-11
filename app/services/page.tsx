import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services de Conciergerie, Gestion de Villa & Butler | Maison Monnier',
  description: 'Maison Monnier prend en charge l\'ensemble de la gestion de votre résidence : supervision du personnel, coordination technique, préparation des séjours et services de conciergerie privée.',
  keywords: ['conciergerie luxe côte d\'azur', 'gestion villa france', 'butler privé', 'placement personnel maison', 'gestion résidence UHNW'],
}

const services = [
  {
    num: '01', name: 'Gestion Opérationnelle', tag: 'Résidences',
    hero: 'NOUS PRENONS EN CHARGE L\'INTÉGRALITÉ DES ASPECTS TECHNIQUES ET STRUCTURELS',
    body: 'Chaque séjour se doit d\'avoir une organisation sans faille. Maison Monnier prend en charge la gestion opérationnelle complète de votre résidence : préparation des lieux, coordination des équipes, conciergerie privée, suivi des demandes sur mesure et supervision après le départ.',
    role: 'Notre rôle est d\'anticiper vos besoins avant même que vous ne les exprimiez.',
    img: 'https://framerusercontent.com/images/T8gA0CqG7jRqTKwP4Z969SaJk4.jpg',
  },
  {
    num: '02', name: 'Conciergerie Privée', tag: 'Sur mesure',
    hero: 'UN SERVICE ENTIÈREMENT PERSONNALISÉ, D\'UNE DISCRÉTION ABSOLUE',
    body: 'De la réservation de tables dans les meilleurs restaurants à l\'organisation de transferts privés, notre conciergerie anticipe chaque désir. Nous gérons chaque demande avec la même attention, qu\'il s\'agisse d\'un bouquet de fleurs ou d\'un yacht privé.',
    role: 'Sélection des intervenants, suivi opérationnel, contrôle de l\'avancement et respect de vos préférences.',
    img: 'https://framerusercontent.com/images/EiAonMC4JhuW4zETmljLJLXzJnk.jpg',
  },
  {
    num: '03', name: 'Placement de Personnel', tag: 'Maison de maître',
    hero: 'SÉLECTION ET SUPERVISION AUX MEILLEURS STANDARDS INTERNATIONAUX',
    body: 'Le personnel de maison est le reflet de votre résidence. Maison Monnier sélectionne, forme et supervise chaque membre du personnel selon des critères d\'excellence rigoureux, issus de notre expérience auprès des plus grandes maisons internationales.',
    role: 'Majordomes, gouvernantes, chefs privés, agents de sécurité — chaque profil sélectionné avec discernement.',
    img: 'https://framerusercontent.com/images/T8gA0CqG7jRqTKwP4Z969SaJk4.jpg',
  },
  {
    num: '04', name: 'Gestion de Projets', tag: 'Rénovation & Événements',
    hero: 'COORDINATION, OPTIMISATION ET EXCELLENCE À CHAQUE ÉTAPE',
    body: 'Travaux, aménagements, rénovation, préparation saisonnière, organisation d\'événements privés ou mise en place de nouveaux services : nous pilotons chaque étape avec rigueur et discrétion. Sélection des intervenants, suivi opérationnel, contrôle de l\'avancement et respect de vos budgets.',
    role: 'De la conception à la livraison, une gestion de projet irréprochable.',
    img: 'https://framerusercontent.com/images/EiAonMC4JhuW4zETmljLJLXzJnk.jpg',
  },
]

export default function Services() {
  return (
    <main className="bg-navy min-h-screen">
      <Nav lang="fr" />

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://framerusercontent.com/images/EiAonMC4JhuW4zETmljLJLXzJnk.jpg" alt="Services Maison Monnier" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/20 to-navy"></div>
        </div>
        <div className="relative z-10 px-8 md:px-16 pb-16">
          <p className="eyebrow mb-5">Nos services</p>
          <h1 className="font-serif font-light italic text-[clamp(40px,7vw,88px)] text-cream leading-none mb-4">Expériences<br />d'exception</h1>
          <div className="flex items-center gap-5 mt-6">
            <div className="w-10 h-px bg-cream/30"></div>
            <p className="sans text-[9px] tracking-[0.35em] uppercase text-cream/30">Une gestion d'exception, pensée pour votre tranquillité</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-16 md:py-24 px-8 md:px-16">
        <div className="max-w-3xl">
          <p className="eyebrow text-navy/30 mb-6">UNE GESTION D'EXCEPTION, PENSÉE POUR VOTRE TRANQUILLITÉ</p>
          <p className="sans text-[12px] leading-[2] text-navy/65 mb-5">
            Maison Monnier prend en charge l'ensemble de la gestion de votre résidence avec le plus haut niveau d'exigence : supervision du personnel, coordination technique, préparation des séjours et services de conciergerie privée.
          </p>
          <p className="sans text-[12px] leading-[2] text-navy/65">
            Grâce à une expérience acquise auprès d'établissements de renom tels que Four Seasons Hotels and Resorts et Mandarin Oriental Exceptional Homes, ainsi qu'auprès d'une clientèle internationale UHNW, Maison Monnier garantit une organisation fluide, discrète et entièrement personnalisée.
          </p>
        </div>
      </section>

      <Marquee lang="fr" />

      {/* Quote */}
      <section className="bg-navy-mid py-16 px-8 md:px-16 text-center border-y border-cream/[0.06]">
        <p className="font-serif font-light italic text-[clamp(18px,3vw,28px)] text-cream/70 max-w-2xl mx-auto">
          « Le vrai luxe, ce n'est pas ce que l'on possède, mais la manière dont on est servi. »
        </p>
        <p className="sans text-[9px] tracking-[0.35em] uppercase text-cream/25 mt-5">— Maison Monnier</p>
      </section>

      {/* Services detail */}
      {services.map((svc, i) => (
        <section key={i} className={`py-16 md:py-24 ${i % 2 === 0 ? 'bg-navy' : 'bg-navy-light'}`}>
          <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <p className="sans text-[9px] tracking-[0.3em] text-cream/20 mb-4">{svc.num}</p>
              <h2 className="font-serif font-light italic text-[clamp(28px,4vw,44px)] text-cream mb-6 leading-tight">{svc.name}</h2>
              <p className="sans text-[8px] tracking-[0.3em] uppercase text-cream/30 mb-8 border border-cream/10 inline-block px-3 py-1.5">{svc.hero}</p>
              <p className="sans text-[11px] leading-[1.95] text-cream/45 mb-4">{svc.body}</p>
              <p className="sans text-[11px] leading-[1.95] text-cream/30 mb-8 italic">{svc.role}</p>
              <Link href="/contact" className="btn-ghost">Nous contacter <span>→</span></Link>
            </div>
            <div className={`relative ${i % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={svc.img} alt={svc.name} className="w-full h-full object-cover opacity-70 hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-2/3 h-1/2 border border-cream/8 -z-10"></div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-cream py-20 px-8 md:px-16 text-center">
        <p className="eyebrow text-navy/30 mb-6">Nous Contacter</p>
        <h2 className="font-serif font-light italic text-[clamp(32px,5vw,56px)] text-navy mb-8">Orchestrons votre expérience.</h2>
        <Link href="/contact" className="btn-primary">Prendre rendez-vous</Link>
      </section>

      <Footer lang="fr" />
    </main>
  )
}
