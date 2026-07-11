import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import WorldMap from '@/components/WorldMap'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maison Monnier | Luxury Concierge & Private Butler — Côte d\'Azur',
  description: 'Private concierge, residence management and luxury butler service on the Côte d\'Azur. Maison Monnier serves exceptional owners and travellers with absolute discretion and excellence.',
  alternates: { canonical: 'https://www.maisonmonnier.fr/en' },
}

export default function HomeEn() {
  return (
    <main className="bg-navy min-h-screen">
      <Nav lang="en" />
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-20">
            <source src="https://framerusercontent.com/assets/BDKEnBWuXKuffhGnLfbAohK4nLs.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/30 to-navy"></div>
        </div>
        <div className="relative z-10 px-8 md:px-16 pb-16 md:pb-24">
          <p className="eyebrow mb-5">Private Concierge · Côte d'Azur</p>
          <h1 className="font-serif font-light italic leading-none mb-2">
            <span className="block text-[clamp(52px,8vw,96px)] text-cream">The Art of</span>
            <span className="block text-[clamp(52px,8vw,96px)] text-cream ml-[clamp(20px,4vw,80px)]">the Perfect</span>
            <span className="block text-[clamp(52px,8vw,96px)] text-cream/10 ml-[clamp(10px,2vw,40px)]">Home</span>
          </h1>
          <div className="flex items-center gap-5 mt-8 mb-10">
            <div className="w-10 h-px bg-cream/30"></div>
            <p className="sans text-[9px] tracking-[0.4em] uppercase text-cream/35">Trained at Four Seasons & Mandarin Oriental · UHNW Families</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/en/services" className="btn-primary">Discover our services</Link>
            <Link href="/en/contact" className="btn-ghost">Book a consultation <span>→</span></Link>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 z-10 flex items-center gap-3">
          <span className="sans text-[9px] tracking-[0.2em] text-cream/55">EN</span>
          <span className="text-cream/15 text-xs">/</span>
          <Link href="/" className="sans text-[9px] tracking-[0.2em] text-cream/25 hover:text-cream/50 transition-colors">FR</Link>
        </div>
      </section>
      <Marquee lang="en" />
      <section className="bg-navy-light py-20 md:py-28">
        <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-6">About Maison Monnier</p>
            <h2 className="font-serif font-light italic text-[clamp(32px,4vw,52px)] text-cream leading-tight mb-8">A house built on trust, <span className="text-cream/20">discretion</span> and service.</h2>
            <p className="sans text-[11px] leading-[1.95] text-cream/45 mb-5">At Maison Monnier, we serve exceptional owners and travellers through impeccable residence management, personal staff supervision and a concierge service of absolute discretion.</p>
            <p className="sans text-[11px] leading-[1.95] text-cream/45 mb-10">Trained at Four Seasons and Mandarin Oriental standards and with international experience serving UHNW families, Sébastien Monnier provides total management: operations, maintenance, staff, stay preparation and day-to-day luxury residential management.</p>
            <Link href="/en/about" className="btn-ghost">About Maison Monnier <span>→</span></Link>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img src="https://framerusercontent.com/images/T8gA0CqG7jRqTKwP4Z969SaJk4.jpg" alt="Maison Monnier" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-cream py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif italic text-[220px] text-navy/[0.035] leading-none pointer-events-none">"</div>
        <div className="relative px-8 md:px-16 max-w-3xl mx-auto text-center">
          <div className="w-10 h-px bg-navy/20 mx-auto mb-10"></div>
          <blockquote className="font-serif font-light italic text-[clamp(22px,3vw,36px)] text-navy leading-relaxed mb-8">
            "True luxury is not what you own, but how you are served."
          </blockquote>
          <p className="sans text-[9px] tracking-[0.4em] uppercase text-navy/35">— Maison Monnier</p>
        </div>
      </section>
      <WorldMap lang="en" />
      <section className="bg-navy py-20 md:py-28 relative overflow-hidden border-t border-cream/[0.06]">
        <div className="absolute bottom-0 left-8 font-serif italic text-[160px] text-cream/[0.025] leading-none pointer-events-none whitespace-nowrap">Orchestrate.</div>
        <div className="relative px-8 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <p className="eyebrow mb-5">Contact Us</p>
            <h2 className="font-serif font-light italic text-[clamp(36px,5vw,60px)] text-cream leading-tight mb-3">Let us orchestrate<br />your experience.</h2>
            <p className="sans text-[11px] text-cream/35 leading-relaxed">Private consultation · Available 7/7<br />Absolute discretion guaranteed</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/en/contact" className="btn-primary">Book a consultation</Link>
            <a href="mailto:contact@maisonmonnier.fr" className="btn-ghost">By email <span>→</span></a>
          </div>
        </div>
      </section>
      <Footer lang="en" />
    </main>
  )
}
