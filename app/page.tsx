'use client'
import { useEffect, useRef, useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const dests = [
  {
    num: '01', name: 'Palais des Lilas', loc: 'France · Cannes',
    coords: "43°33'N · 007°01'E", soon: false,
    desc: 'Résidence méditerranéenne raffinée avec vue panoramique sur la mer.',
    body: "Résidence méditerranéenne raffinée où l'élégance se conjugue à des dimensions exceptionnelles. Situé sur un vaste domaine avec vue sur la mer, le domaine comprend une piscine à débordement, un hélipad et un personnel de maison permanent.",
    tags: ['Piscine privée', 'Vue mer', 'Personnel inclus', 'Hélipad', '12 chambres'],
    img: 'https://framerusercontent.com/images/T8gA0CqG7jRqTKwP4Z969SaJk4.jpg',
    lon: 7.017, lat: 43.55,
  },
  {
    num: '02', name: 'Villa Toscana', loc: 'Italie · Toscane',
    coords: "43°46'N · 011°15'E", soon: false,
    desc: 'Domaine privé niché au cœur des collines toscanes, entre vignobles et oliviers centenaires.',
    body: "Domaine privé niché au cœur des collines toscanes, entre vignobles et oliviers centenaires. La villa offre une vue panoramique sur les vallées environnantes, avec cave privée, chef sur demande et service de butler permanent.",
    tags: ['Vignoble privé', 'Chef privé', 'Piscine à débordement', 'Cave à vins', '8 chambres'],
    img: 'https://framerusercontent.com/images/EiAonMC4JhuW4zETmljLJLXzJnk.jpg',
    lon: 11.255, lat: 43.77,
  },
  {
    num: '03', name: 'Arctic Lodge', loc: 'Laponie · Finlande',
    coords: "68°54'N · 026°58'E", soon: false,
    desc: 'Lodge exclusif au cœur de la nature arctique finlandaise. Aurores boréales et silence absolu.',
    body: "Lodge exclusif au cœur de la nature arctique finlandaise. Aurores boréales garanties en saison, sauna traditionnel, bain nordique et expéditions guidées sur mesure. Une expérience immersive sans équivalent.",
    tags: ['Aurores boréales', 'Sauna traditionnel', 'Expéditions guidées', 'Isolation totale', '6 suites'],
    img: 'https://framerusercontent.com/images/T8gA0CqG7jRqTKwP4Z969SaJk4.jpg',
    lon: 26.97, lat: 68.9,
  },
  {
    num: '04', name: 'Villa Adriatica', loc: 'Croatie · Dubrovnik',
    coords: "42°39'N · 018°05'E", soon: true,
    desc: "Villa d'exception sur les rives de la côte dalmate. Ouverture 2026.",
    body: "Villa d'exception sur les rives de la côte dalmate, face aux eaux cristallines de l'Adriatique. Embarcadère privé, plage exclusive et vue imprenable sur les îles environnantes. Ouverture prévue 2026.",
    tags: ['Vue Adriatique', 'Embarcadère privé', 'Plage privée', 'Ouverture 2026'],
    img: 'https://framerusercontent.com/images/EiAonMC4JhuW4zETmljLJLXzJnk.jpg',
    lon: 18.09, lat: 42.65,
  },
]

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number | undefined>(undefined)
  const tRef = useRef(0)
  const [active, setActive] = useState(0)
  const activeRef = useRef(0)

  const stars = useRef(Array.from({ length: 80 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 0.9 + 0.15, a: Math.random() * 0.15 + 0.04, ph: Math.random() * Math.PI * 2 })))
  const fnodes = useRef(Array.from({ length: 20 }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.00022, vy: (Math.random() - 0.5) * 0.00022, r: Math.random() * 0.9 + 0.3, a: Math.random() * 0.1 + 0.03 })))

  function proj(lon: number, lat: number, W: number, H: number) {
    return { x: W * 0.5 + (lon - 12) * (W / 6.6 / 57.3), y: H * 0.5 - (lat - 18) * (W / 6.6 / 57.3) * 0.82 }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const hero = heroRef.current
    if (!canvas || !hero) return
    const ctx = canvas.getContext('2d')!
    let W = hero.offsetWidth, H = hero.offsetHeight

    const resize = () => { W = hero.offsetWidth; H = hero.offsetHeight; canvas.width = W; canvas.height = H }
    resize()
    window.addEventListener('resize', resize)

    function drawBg() {
      const bg = ctx.createLinearGradient(0, 0, W, H)
      bg.addColorStop(0, '#07101c'); bg.addColorStop(0.5, '#091525'); bg.addColorStop(1, '#081220')
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H)
      const cx = W * 0.46, cy = H * 0.54
      for (let r = 45; r < Math.max(W, H) * 1.2; r += 34) {
        ctx.beginPath(); ctx.ellipse(cx, cy, r * 1.3, r * 0.82, -0.12, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(160,200,230,${0.018 * (1 - r / (Math.max(W, H) * 1.2)) + 0.006})`; ctx.lineWidth = 0.5; ctx.stroke()
      }
      ctx.strokeStyle = 'rgba(160,200,230,0.03)'; ctx.lineWidth = 0.4
      for (let x = 0; x < W; x += W / 10) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke() }
      for (let y = 0; y < H; y += H / 7) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke() }
      const rx = W * 0.08, ry = H * 0.82, rr = Math.min(W, H) * 0.042
      ctx.save(); ctx.translate(rx, ry)
      ctx.beginPath(); ctx.arc(0, 0, rr, 0, Math.PI * 2); ctx.strokeStyle = 'rgba(160,200,230,0.07)'; ctx.lineWidth = 0.5; ctx.stroke()
      const compassPts: [number, number][] = [[0, -rr], [0, rr], [rr, 0], [-rr, 0]]
      compassPts.forEach(([x, y]) => { ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(x * 0.7, y * 0.7); ctx.strokeStyle = 'rgba(160,200,230,0.1)'; ctx.lineWidth = 0.4; ctx.stroke() })
      ctx.font = '500 7px Montserrat,sans-serif'; ctx.fillStyle = 'rgba(160,200,230,0.2)'; ctx.fillText('N', -2.5, -rr - 4)
      ctx.restore()
      const soundings: [number, number, string][] = [[0.18, 0.28, '142m'], [0.32, 0.16, '89m'], [0.66, 0.2, '234m'], [0.8, 0.38, '178m'], [0.44, 0.54, '56m'], [0.72, 0.7, '312m']]
      soundings.forEach(([x, y, v]) => { ctx.font = '6px Montserrat,sans-serif'; ctx.fillStyle = 'rgba(160,200,230,0.1)'; ctx.fillText(v, x * W, y * H) })
      const land: [number, number][] = [[0.08, 0.2], [0.16, 0.14], [0.28, 0.1], [0.42, 0.09], [0.54, 0.1], [0.64, 0.12], [0.74, 0.16], [0.83, 0.2], [0.89, 0.28], [0.91, 0.38], [0.87, 0.48], [0.78, 0.56], [0.66, 0.62], [0.53, 0.66], [0.41, 0.63], [0.3, 0.57], [0.2, 0.5], [0.12, 0.42], [0.08, 0.3], [0.08, 0.2]]
      ctx.beginPath(); land.forEach(([x, y], i) => i ? ctx.lineTo(x * W, y * H) : ctx.moveTo(x * W, y * H))
      ctx.closePath(); ctx.fillStyle = 'rgba(10,20,36,0.55)'; ctx.fill()
      ctx.strokeStyle = 'rgba(160,200,230,0.07)'; ctx.lineWidth = 0.6; ctx.stroke()
      const sx = W * 0.73, sy = H * 0.92, sl = W * 0.09
      ctx.strokeStyle = 'rgba(160,200,230,0.16)'; ctx.lineWidth = 0.5
      ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx + sl, sy); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(sx, sy - 2.5); ctx.lineTo(sx, sy + 2.5); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(sx + sl, sy - 2.5); ctx.lineTo(sx + sl, sy + 2.5); ctx.stroke()
      ctx.font = '6px Montserrat,sans-serif'; ctx.fillStyle = 'rgba(160,200,230,0.16)'; ctx.fillText('500 nm', sx + sl / 2 - 12, sy - 5)
    }

    function draw() {
      tRef.current += 0.006
      const t = tRef.current
      ctx.clearRect(0, 0, W, H); drawBg()
      stars.current.forEach(s => {
        ctx.beginPath(); ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245,240,232,${Math.max(0.02, s.a + Math.sin(t * 1.5 + s.ph) * 0.05)})`; ctx.fill()
      })
      fnodes.current.forEach(n => { n.x += n.vx; n.y += n.vy; if (n.x < 0 || n.x > 1) n.vx *= -1; if (n.y < 0 || n.y > 1) n.vy *= -1 })
      fnodes.current.forEach((n, i) => fnodes.current.forEach((m, j) => {
        if (j <= i) return; const dx = (n.x - m.x) * W, dy = (n.y - m.y) * H, d = Math.hypot(dx, dy)
        if (d < 100) { ctx.beginPath(); ctx.moveTo(n.x * W, n.y * H); ctx.lineTo(m.x * W, m.y * H); ctx.strokeStyle = `rgba(160,200,230,${0.022 * (1 - d / 100)})`; ctx.lineWidth = 0.3; ctx.stroke() }
      }))
      const ai = activeRef.current
      const pts = dests.map(d => proj(d.lon, d.lat, W, H))
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const isA = ai === i || ai === j
        const mx = (pts[i].x + pts[j].x) / 2, my = (pts[i].y + pts[j].y) / 2 - 22
        ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.quadraticCurveTo(mx, my, pts[j].x, pts[j].y)
        ctx.strokeStyle = isA ? 'rgba(245,240,232,0.28)' : 'rgba(160,200,230,0.09)'; ctx.lineWidth = isA ? 0.8 : 0.4
        if (dests[i].soon || dests[j].soon) ctx.setLineDash([4, 5]); ctx.stroke(); ctx.setLineDash([])
      }
      dests.forEach((d, i) => {
        const p = pts[i], isA = ai === i, pulse = Math.sin(t * 2.2 + i * 1.6) * 0.3 + 0.7
        const col = d.soon ? 'rgba(200,170,100,' : 'rgba(245,240,232,'
        const outerR = isA ? 18 : 11
        const gr = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, outerR + 8 * pulse)
        gr.addColorStop(0, col + (d.soon ? '0.16' : '0.12') + ')'); gr.addColorStop(1, 'rgba(7,16,28,0)')
        ctx.beginPath(); ctx.arc(p.x, p.y, outerR + 8 * pulse, 0, Math.PI * 2); ctx.fillStyle = gr; ctx.fill()
        ctx.beginPath(); ctx.arc(p.x, p.y, outerR, 0, Math.PI * 2)
        ctx.strokeStyle = col + (isA ? '0.72' : '0.25') + ')'; ctx.lineWidth = 0.5
        if (d.soon) ctx.setLineDash([3, 3]); ctx.stroke(); ctx.setLineDash([])
        if (isA) { ctx.beginPath(); ctx.arc(p.x, p.y, outerR + 5, 0, Math.PI * 2); ctx.strokeStyle = 'rgba(245,240,232,0.08)'; ctx.lineWidth = 0.4; ctx.stroke() }
        ctx.beginPath(); ctx.arc(p.x, p.y, isA ? 5 : 3.5, 0, Math.PI * 2); ctx.fillStyle = col + (isA ? '1' : '0.55') + ')'; ctx.fill()
        ctx.save()
        ctx.font = (isA ? '500 10px' : '9px') + ' Montserrat,sans-serif'
        const lbl = d.name.toUpperCase(), lw = ctx.measureText(lbl).width
        ctx.fillStyle = d.soon ? `rgba(200,170,100,${isA ? 0.9 : 0.48})` : `rgba(245,240,232,${isA ? 0.85 : 0.4})`
        ctx.fillText(lbl, p.x - lw / 2, p.y - outerR - 10)
        if (isA) { ctx.font = '7px Montserrat,sans-serif'; ctx.fillStyle = 'rgba(245,240,232,0.28)'; const clw = ctx.measureText(d.coords).width; ctx.fillText(d.coords, p.x - clw / 2, p.y - outerR - 22) }
        if (d.soon) { ctx.font = '7px Montserrat,sans-serif'; const sl = 'BIENTÔT', slw = ctx.measureText(sl).width; ctx.fillStyle = 'rgba(200,170,100,0.4)'; ctx.fillText(sl, p.x - slw / 2, p.y - outerR - (isA ? 34 : 20)) }
        ctx.restore()
      })
      animRef.current = requestAnimationFrame(draw)
    }
    draw()

    const handleClick = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      const mx = (e.clientX - r.left) * (W / r.width), my = (e.clientY - r.top) * (H / r.height)
      dests.forEach((d, i) => {
        const p = proj(d.lon, d.lat, W, H)
        if (Math.hypot(mx - p.x, my - p.y) < 24) { activeRef.current = i; setActive(i) }
      })
    }
    canvas.addEventListener('click', handleClick)
    return () => { window.removeEventListener('resize', resize); canvas.removeEventListener('click', handleClick); if (animRef.current) cancelAnimationFrame(animRef.current) }
  }, [])

  const d = dests[active]

  return (
    <main style={{ background: '#08101e', color: '#f5f0e8', fontFamily: "'Cormorant Garamond',Georgia,serif" }}>
      <Nav lang="fr" />

      {/* ── HERO MAP ── */}
      <div ref={heroRef} className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: '600px', cursor: 'crosshair' }}>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.18 }}>
          <source src="https://framerusercontent.com/assets/BDKEnBWuXKuffhGnLfbAohK4nLs.mp4" type="video/mp4" />
        </video>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Ghost title */}
        <div className="absolute z-10 text-center pointer-events-none" style={{ top: '30%', left: '50%', transform: 'translateX(-50%)' }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(245,240,232,0.055)', whiteSpace: 'nowrap' }}>Maison Monnier</h1>
          <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '10px', letterSpacing: '0.45em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.1)', marginTop: '10px' }}>Conciergerie Privée · Côte d'Azur</p>
        </div>

        {/* Destination dots */}
        <div className="absolute z-20 flex flex-col" style={{ right: '32px', top: '50%', transform: 'translateY(-50%)', gap: '22px' }}>
          {dests.map((dest, i) => (
            <div key={i} className="flex items-center cursor-pointer" style={{ gap: '10px', flexDirection: 'row-reverse' }} onClick={() => { activeRef.current = i; setActive(i) }}>
              <span className="hidden md:block" style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: active === i ? 'rgba(245,240,232,0.6)' : 'rgba(245,240,232,0.2)', textAlign: 'right', transition: 'color 0.25s' }}>
                {dest.name.split(' ')[0]}
              </span>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: `0.5px solid ${dest.soon ? 'rgba(200,170,100,0.45)' : 'rgba(245,240,232,0.3)'}`, background: active === i ? (dest.soon ? 'rgba(200,170,100,0.7)' : '#f5f0e8') : 'transparent', boxShadow: active === i ? (dest.soon ? '0 0 10px rgba(200,170,100,0.3)' : '0 0 10px rgba(245,240,232,0.3)') : 'none', transition: 'all 0.3s', flexShrink: 0 }} />
            </div>
          ))}
        </div>

        {/* Info panel */}
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ background: 'linear-gradient(to top,rgba(6,10,20,0.97) 50%,rgba(6,10,20,0.6) 78%,transparent)', padding: 'clamp(32px,5vw,56px) clamp(24px,5vw,56px) clamp(28px,4vw,40px)' }}>
          <div className="flex justify-between items-center mb-3">
            <span style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.22)' }}>{d.coords}</span>
            <span style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 12px', border: `0.5px solid ${d.soon ? 'rgba(200,170,100,0.3)' : 'rgba(245,240,232,0.15)'}`, color: d.soon ? 'rgba(200,170,100,0.7)' : 'rgba(245,240,232,0.35)' }}>
              {d.soon ? 'Bientôt' : 'Disponible'}
            </span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(32px,5.5vw,60px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1, marginBottom: '6px' }}>{d.name}</h2>
          <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.32)', marginBottom: '10px' }}>{d.loc}</p>
          <p className="hidden md:block" style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '12px', color: 'rgba(245,240,232,0.4)', lineHeight: 1.8, maxWidth: '440px', marginBottom: '18px' }}>{d.desc}</p>
          <a href="#location-detail" style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.6)', borderBottom: '0.5px solid rgba(245,240,232,0.25)', paddingBottom: '3px', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', textDecoration: 'none' }}>
            {d.soon ? 'Ouverture 2026 →' : 'Découvrir cette propriété →'}
          </a>
        </div>
      </div>

      {/* ── MARQUEE ── */}
      <div style={{ background: '#f5f0e8', padding: '13px 0', overflow: 'hidden' }}>
        <div className="flex whitespace-nowrap marquee-track" style={{ gap: 0 }}>
          {['Gestion Opérationnelle', 'Conciergerie Privée', 'Placement de Personnel', 'Gestion de Projets', 'Discrétion Absolue', 'UHNW · Four Seasons · Mandarin Oriental',
            'Gestion Opérationnelle', 'Conciergerie Privée', 'Placement de Personnel', 'Gestion de Projets', 'Discrétion Absolue', 'UHNW · Four Seasons · Mandarin Oriental'].map((item, i) => (
            <span key={i} className="inline-flex items-center" style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(10,15,26,0.4)', padding: '0 40px', gap: '40px' }}>
              {item}<span style={{ width: '3px', height: '3px', background: 'rgba(10,15,26,0.2)', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }}></span>
            </span>
          ))}
        </div>
      </div>

      {/* ── LOCATION DETAIL ── */}
      <section id="location-detail" style={{ padding: 'clamp(60px,8vw,96px) clamp(24px,6vw,64px)', background: '#0a0f1a' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="overflow-hidden" style={{ aspectRatio: '4/3', background: '#0d1a2a' }}>
            <img key={active} src={d.img} alt={d.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" style={{ opacity: 0.75 }} />
          </div>
          <div>
            <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(245,240,232,0.18)', marginBottom: '16px' }}>{d.num}</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 300, fontStyle: 'italic', marginBottom: '8px', lineHeight: 1.05 }}>{d.name}</h2>
            <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.3)', marginBottom: '24px' }}>{d.loc}</p>
            <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '12px', color: 'rgba(245,240,232,0.42)', lineHeight: 1.9, marginBottom: '24px' }}>{d.body}</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {d.tags.map((tag, i) => <span key={i} className="prop-tag">{tag}</span>)}
            </div>
            <div className="flex flex-wrap gap-3">
              {d.soon
                ? <Link href="/contact" className="btn-gold">Registre d'intérêt</Link>
                : <Link href="/contact" className="btn-primary">Demander des informations</Link>
              }
              <Link href="/proprietes" className="btn-ghost">En savoir plus →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: 'clamp(60px,8vw,96px) clamp(24px,6vw,64px)', background: '#0c1420' }}>
        <div className="sec-divider">
          <span className="eyebrow">Nos services</span>
        </div>
        <div>
          {[
            { num: '01', name: 'Gestion Opérationnelle', tag: 'Résidences', href: '/services' },
            { num: '02', name: 'Conciergerie Privée', tag: 'Sur mesure', href: '/services' },
            { num: '03', name: 'Placement de Personnel', tag: 'Maison de maître', href: '/services' },
            { num: '04', name: 'Gestion de Projets', tag: 'Rénovation & Événements', href: '/services' },
          ].map((svc, i) => (
            <Link key={i} href={svc.href} className="svc-row">
              <div className="flex items-center gap-6">
                <span style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.2)', minWidth: '24px' }}>{svc.num}</span>
                <span className="svc-title">{svc.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden sm:block" style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.22)', border: '0.5px solid rgba(245,240,232,0.1)', padding: '4px 10px' }}>{svc.tag}</span>
                <span className="svc-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: '48px' }}>
          <Link href="/services" className="btn-ghost">Voir tous nos services →</Link>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ background: '#08101e' }}>
        <div style={{ minHeight: '420px', backgroundImage: "url('https://framerusercontent.com/images/T8gA0CqG7jRqTKwP4Z969SaJk4.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.55 }} />
        <div className="flex flex-col justify-center" style={{ padding: 'clamp(48px,7vw,80px) clamp(28px,6vw,64px)' }}>
          <p className="eyebrow" style={{ marginBottom: '20px' }}>À propos de Maison Monnier</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.25, marginBottom: '20px' }}>
            Une maison fondée sur la confiance et la discrétion.
          </h2>
          <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '12px', lineHeight: 1.95, color: 'rgba(245,240,232,0.38)', marginBottom: '32px' }}>
            Après plus de 15 années consacrées au service de familles UHNW, Sébastien Monnier a créé une maison à son image — où l'excellence s'exprime avec naturel et où chaque client se sent immédiatement compris, accompagné et serein.
          </p>
          <Link href="/a-propos" className="btn-ghost" style={{ width: 'fit-content' }}>À propos de Sébastien Monnier →</Link>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="text-center relative overflow-hidden" style={{ padding: 'clamp(64px,9vw,100px) clamp(24px,6vw,64px)', background: '#f5f0e8', borderTop: '0.5px solid rgba(10,15,26,0.06)' }}>
        <div className="absolute pointer-events-none select-none" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: "'Cormorant Garamond',serif", fontSize: '260px', fontWeight: 300, fontStyle: 'italic', color: 'rgba(10,15,26,0.03)', lineHeight: 1 }}>"</div>
        <div style={{ width: '32px', height: '0.5px', background: 'rgba(10,15,26,0.2)', margin: '0 auto 32px' }} />
        <blockquote style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(20px,3vw,30px)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(10,15,26,0.75)', maxWidth: '520px', margin: '0 auto 20px', lineHeight: 1.65 }}>
          « Le vrai luxe, ce n'est pas ce que l'on possède, mais la manière dont on est servi. »
        </blockquote>
        <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(10,15,26,0.3)' }}>— Maison Monnier</p>
      </section>

      {/* ── CONTACT ── */}
      <section className="flex flex-wrap justify-between items-end gap-10" style={{ padding: 'clamp(60px,8vw,96px) clamp(24px,6vw,64px)', background: '#060d14', borderTop: '0.5px solid rgba(245,240,232,0.04)' }}>
        <div>
          <p className="eyebrow" style={{ marginBottom: '18px' }}>Nous Contacter</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(32px,5vw,54px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1, marginBottom: '12px' }}>
            Orchestrons<br />votre expérience.
          </h2>
          <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '12px', color: 'rgba(245,240,232,0.28)', lineHeight: 1.85 }}>
            Consultation privée · Disponible 7j/7<br />Discrétion absolue garantie
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="/contact" className="btn-primary">Prendre rendez-vous</Link>
          <a href="mailto:contact@maisonmonnier.fr" className="btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Par email
          </a>
          <a href="tel:" className="btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Par téléphone
          </a>
        </div>
      </section>

      <Footer lang="fr" />
    </main>
  )
}
