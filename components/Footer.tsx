import Link from 'next/link'

export default function Footer({ lang = 'fr' }: { lang?: string }) {
  return (
    <footer style={{ background: '#060d14' }}>
      <div style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,6vw,80px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '34px', height: '34px', border: '0.5px solid rgba(245,240,232,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond',serif", fontSize: '16px', fontWeight: 300, color: '#f5f0e8' }}>M</div>
            <span style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.35)' }}>Maison Monnier</span>
          </div>
          <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '11px', color: 'rgba(245,240,232,0.28)', lineHeight: 1.8, maxWidth: '240px' }}>
            {lang === 'fr' ? "Conciergerie privée, gestion de résidence et butler de luxe sur la Côte d'Azur." : "Private concierge, residence management and luxury butler service on the Côte d'Azur."}
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <a href="https://www.instagram.com/maison.monnier" target="_blank" rel="noopener noreferrer" style={{ width: '32px', height: '32px', border: '0.5px solid rgba(245,240,232,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(245,240,232,0.45)" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="http://linkedin.com/in/sébastien-monnier-davaille-6b697a46" target="_blank" rel="noopener noreferrer" style={{ width: '32px', height: '32px', border: '0.5px solid rgba(245,240,232,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(245,240,232,0.45)" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
        <div>
          <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.22)', marginBottom: '20px' }}>Navigation</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(lang === 'fr'
              ? [{ label: 'Nos Services', href: '/services' }, { label: 'Nos Propriétés', href: '/proprietes' }, { label: 'À Propos', href: '/a-propos' }, { label: 'Nous Contacter', href: '/contact' }]
              : [{ label: 'Services', href: '/en/services' }, { label: 'Properties', href: '/en/properties' }, { label: 'About', href: '/en/about' }, { label: 'Contact', href: '/en/contact' }]
            ).map(l => (
              <Link key={l.href} href={l.href} style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}>{l.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.22)', marginBottom: '20px' }}>Contact</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="mailto:contact@maisonmonnier.fr" style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '10px', color: 'rgba(245,240,232,0.35)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'rgba(245,240,232,0.18)' }}>—</span> par email
            </a>
            <a href="tel:" style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '10px', color: 'rgba(245,240,232,0.35)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'rgba(245,240,232,0.18)' }}>—</span> par téléphone
            </a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '0.5px solid rgba(245,240,232,0.05)', padding: '18px clamp(24px,6vw,80px)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
        <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.15)' }}>© 2026 Maison Monnier. All rights reserved.</p>
        <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '9px', color: 'rgba(245,240,232,0.12)' }}>A CC Agency Creation</p>
      </div>
    </footer>
  )
}
