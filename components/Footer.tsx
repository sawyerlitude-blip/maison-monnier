import Link from 'next/link'

const Footer = ({ lang = 'fr' }: { lang?: string }) => {
  const links = lang === 'fr'
    ? [
        { label: 'Nos Services', href: '/services' },
        { label: 'Nos Propriétés', href: '/proprietes' },
        { label: 'À Propos', href: '/a-propos' },
        { label: 'Nous Contacter', href: '/contact' },
      ]
    : [
        { label: 'Services', href: '/en/services' },
        { label: 'Properties', href: '/en/properties' },
        { label: 'About', href: '/en/about' },
        { label: 'Contact', href: '/en/contact' },
      ]

  return (
    <footer className="bg-[#040a10] border-t border-cream/5">
      {/* Main footer */}
      <div className="px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 border border-cream/35 flex items-center justify-center text-cream font-light text-base font-serif">M</div>
            <span className="sans text-[9px] tracking-[0.35em] uppercase text-cream/40">Maison Monnier</span>
          </div>
          <p className="sans text-[11px] text-cream/30 leading-relaxed max-w-xs">
            {lang === 'fr'
              ? 'Conciergerie privée, gestion de résidence et butler de luxe sur la Côte d\'Azur.'
              : 'Private concierge, residence management and luxury butler service on the Côte d\'Azur.'}
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://www.instagram.com/maison.monnier" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 border border-cream/15 flex items-center justify-center hover:border-cream/40 transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cream/50">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="http://linkedin.com/in/sébastien-monnier-davaille-6b697a46" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 border border-cream/15 flex items-center justify-center hover:border-cream/40 transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cream/50">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <p className="sans text-[9px] tracking-[0.35em] uppercase text-cream/25 mb-6">{lang === 'fr' ? 'Navigation' : 'Navigation'}</p>
          <div className="flex flex-col gap-4">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="sans text-[10px] tracking-[0.2em] uppercase text-cream/40 hover:text-cream/70 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <p className="sans text-[9px] tracking-[0.35em] uppercase text-cream/25 mb-6">{lang === 'fr' ? 'Contact' : 'Contact'}</p>
          <div className="flex flex-col gap-4">
            <a href="mailto:contact@maisonmonnier.fr" className="sans text-[10px] text-cream/40 hover:text-cream/70 transition-colors flex items-center gap-3">
              <span className="text-cream/20">—</span> contact@maisonmonnier.fr
            </a>
            <a href="tel:" className="sans text-[10px] text-cream/40 hover:text-cream/70 transition-colors flex items-center gap-3">
              <span className="text-cream/20">—</span> {lang === 'fr' ? 'Par téléphone' : 'By phone'}
            </a>
            <Link href={lang === 'fr' ? '/contact' : '/en/contact'} className="btn-ghost mt-2 text-[9px]">
              {lang === 'fr' ? 'Prendre rendez-vous' : 'Book a consultation'}
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/5 px-8 md:px-16 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="sans text-[8px] tracking-[0.2em] uppercase text-cream/20">© 2026 Maison Monnier. All rights reserved.</p>
        <p className="sans text-[8px] text-cream/15">A CC Agency Creation</p>
        <div className="flex gap-6">
          <Link href={lang === 'fr' ? '/mentions-legales' : '/en/legal'} className="sans text-[8px] tracking-[0.15em] uppercase text-cream/20 hover:text-cream/40 transition-colors">
            {lang === 'fr' ? 'Mentions légales' : 'Legal'}
          </Link>
          <Link href={lang === 'fr' ? '/confidentialite' : '/en/privacy'} className="sans text-[8px] tracking-[0.15em] uppercase text-cream/20 hover:text-cream/40 transition-colors">
            {lang === 'fr' ? 'Confidentialité' : 'Privacy'}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
