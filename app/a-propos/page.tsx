import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À Propos de Maison Monnier | Sébastien Monnier, Expert du Luxe',
  description: 'Après plus de 15 années consacrées au service de familles UHNW, Sébastien Monnier a créé Maison Monnier — une conciergerie privée fondée sur la confiance, la discrétion et l\'excellence.',
  keywords: ['Sébastien Monnier', 'conciergerie luxe', 'butler privé', 'Four Seasons', 'Mandarin Oriental', 'UHNW services'],
}

const partners = [
  { name: 'Mandarin Oriental', desc: 'Exceptional Homes' },
  { name: 'Four Seasons', desc: 'Hotels and Resorts' },
  { name: 'Global Luxury', desc: 'Properties' },
  { name: 'Bramble Ski', desc: 'Luxury Ski Chalets' },
  { name: 'Ski Armadillo', desc: 'Luxury Ski Chalets' },
  { name: 'Monidello', desc: 'Private Estates' },
]

export default function APropos() {
  return (
    <main className="bg-navy min-h-screen">
      <Nav lang="fr" />

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://framerusercontent.com/images/EiAonMC4JhuW4zETmljLJLXzJnk.jpg" alt="À propos Maison Monnier" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/20 to-navy"></div>
        </div>
        <div className="relative z-10 px-8 md:px-16 pb-16">
          <p className="eyebrow mb-5">À propos de Maison Monnier</p>
          <h1 className="font-serif font-light italic text-[clamp(40px,7vw,88px)] text-cream leading-none">Á propos de<br />Maison Monnier</h1>
        </div>
      </section>

      {/* About content */}
      <section className="bg-navy-light py-20 md:py-28">
        <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="sans text-[11px] leading-[2] text-cream/50 mb-6">
              Après plus de 15 années consacrées au service de familles UHNW, au sein de villas prestigieuses, de chalets alpins, de yachts privés et auprès de maisons emblématiques telles que Mandarin Oriental Hotel Group et Four Seasons Hotels and Resorts, Sébastien Monnier a souhaité créer une maison à son image.
            </p>
            <p className="sans text-[11px] leading-[2] text-cream/50 mb-10">
              Une maison fondée sur la confiance, la discrétion et le sens du service, où l'excellence s'exprime avec naturel et où chaque client se sent immédiatement compris, accompagné et serein.
            </p>
            <Link href="/contact" className="btn-ghost">Nous contacter <span>→</span></Link>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img src="https://framerusercontent.com/images/T8gA0CqG7jRqTKwP4Z969SaJk4.jpg" alt="Sébastien Monnier" className="w-full h-full object-cover opacity-75" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-navy py-20 md:py-28 px-8 md:px-16 relative overflow-hidden border-y border-cream/[0.06]">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-serif italic text-[180px] text-cream/[0.025] leading-none select-none pointer-events-none">«</p>
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="font-serif font-light italic text-[clamp(20px,3vw,34px)] text-cream leading-relaxed mb-6">
            Parce que le véritable luxe réside aussi dans la simplicité des choses parfaitement orchestrées.
          </p>
          <p className="sans text-[9px] tracking-[0.4em] uppercase text-cream/30">Sébastien Monnier, Founder</p>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-navy-light py-16 px-8 md:px-16 border-b border-cream/[0.06]">
        <p className="eyebrow text-center mb-12">Références & partenaires</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {partners.map((p, i) => (
            <div key={i} className="text-center opacity-30 hover:opacity-60 transition-opacity">
              <p className="sans text-[9px] tracking-[0.15em] uppercase text-cream font-medium mb-1">{p.name}</p>
              <p className="sans text-[8px] text-cream/50">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

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
