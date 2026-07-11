'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav({ lang = 'fr' }: { lang?: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = lang === 'fr'
    ? [
        { label: 'Nos Services', href: '/services' },
        { label: 'Nos Propriétés', href: '/proprietes' },
        { label: 'À Propos', href: '/a-propos' },
      ]
    : [
        { label: 'Our Services', href: '/en/services' },
        { label: 'Properties', href: '/en/properties' },
        { label: 'About', href: '/en/about' },
      ]

  const contactHref = lang === 'fr' ? '/contact' : '/en/contact'
  const altHref = lang === 'fr' ? '/en' : '/'
  const altLabel = lang === 'fr' ? 'EN' : 'FR'
  const currLabel = lang === 'fr' ? 'FR' : 'EN'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(8,16,30,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '0.5px solid rgba(245,240,232,0.06)' : 'none',
      }}
    >
      <div className="flex items-center justify-between px-8 md:px-12 py-5">
        {/* Logo */}
        <Link href={lang === 'fr' ? '/' : '/en'} className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
          <div
            className="flex items-center justify-center"
            style={{ width: '38px', height: '38px', border: '0.5px solid rgba(245,240,232,0.35)', fontFamily: "'Cormorant Garamond',serif", fontSize: '18px', fontWeight: 300, color: '#f5f0e8' }}
          >M</div>
          <span className="hidden sm:block" style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.45)' }}>
            Maison Monnier
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
          ))}
          <div className="flex items-center gap-2 ml-2">
            <Link href={altHref} style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.3)', textDecoration: 'none' }}>{altLabel}</Link>
            <span style={{ color: 'rgba(245,240,232,0.15)', fontSize: '11px' }}>/</span>
            <span style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.55)' }}>{currLabel}</span>
          </div>
          <Link href={contactHref} className="btn-primary" style={{ marginLeft: '8px', fontSize: '10px', padding: '10px 20px' }}>
            {lang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
          </Link>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className="block h-px bg-cream/60 transition-all" style={{ width: '22px', background: 'rgba(245,240,232,0.6)', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span className="block h-px" style={{ width: '22px', background: 'rgba(245,240,232,0.6)', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span className="block h-px bg-cream/60 transition-all" style={{ width: '22px', background: 'rgba(245,240,232,0.6)', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(8,16,30,0.98)', borderTop: '0.5px solid rgba(245,240,232,0.06)', padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link" style={{ fontSize: '13px' }} onClick={() => setMenuOpen(false)}>{l.label}</Link>
          ))}
          <Link href={contactHref} className="btn-primary" style={{ textAlign: 'center', marginTop: '8px' }} onClick={() => setMenuOpen(false)}>
            {lang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
          </Link>
        </div>
      )}
    </nav>
  )
}
