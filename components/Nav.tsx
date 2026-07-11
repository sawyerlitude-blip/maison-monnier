'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Nav = ({ lang = 'fr' }: { lang?: string }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = lang === 'fr'
    ? [{ label: 'Nos Services', href: '/services' }, { label: 'Nos Propriétés', href: '/proprietes' }, { label: 'À Propos', href: '/a-propos' }]
    : [{ label: 'Our Services', href: '/en/services' }, { label: 'Properties', href: '/en/properties' }, { label: 'About', href: '/en/about' }]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-navy/95 backdrop-blur-sm border-b border-cream/5' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between px-8 md:px-12 py-5">
        <Link href={lang === 'fr' ? '/' : '/en'} className="flex items-center gap-3">
          <div className="w-9 h-9 border border-cream/40 flex items-center justify-center text-cream font-light text-base font-serif tracking-wider">M</div>
          <span className="sans text-[9px] tracking-[0.35em] uppercase text-cream/50 hidden sm:block">Maison Monnier</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="sans text-[9px] tracking-[0.25em] uppercase text-cream/55 hover:text-cream transition-colors duration-200">{l.label}</Link>
          ))}
          <div className="flex items-center gap-3 ml-4">
            <Link href={lang === 'fr' ? '/en' : '/'} className="sans text-[9px] tracking-[0.2em] text-cream/30 hover:text-cream/60 transition-colors">
              {lang === 'fr' ? 'EN' : 'FR'}
            </Link>
            <span className="text-cream/15 text-[10px]">/</span>
            <span className="sans text-[9px] tracking-[0.2em] text-cream/55">{lang === 'fr' ? 'FR' : 'EN'}</span>
          </div>
          <Link href={lang === 'fr' ? '/contact' : '/en/contact'} className="btn-primary text-[9px] ml-2">
            {lang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
          </Link>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`block w-5 h-px bg-cream/60 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-5 h-px bg-cream/60 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-px bg-cream/60 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy/98 border-t border-cream/5 px-8 py-8 flex flex-col gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="sans text-[11px] tracking-[0.3em] uppercase text-cream/70">{l.label}</Link>
          ))}
          <Link href={lang === 'fr' ? '/contact' : '/en/contact'} className="btn-primary text-center mt-4" onClick={() => setMenuOpen(false)}>
            {lang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Nav
