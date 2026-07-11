'use client'
import { useEffect, useRef, useState } from 'react'

const destinations = [
  { id: 0, name: 'Palais des Lilas', country: 'France · Cannes', desc: 'Résidence méditerranéenne raffinée avec vue panoramique sur la mer.', lon: 7.017, lat: 43.55, active: true, soon: false, num: '01' },
  { id: 1, name: 'Villa Toscana', country: 'Italie · Toscane', desc: 'Domaine privé niché au coeur des collines toscanes.', lon: 11.255, lat: 43.77, active: true, soon: false, num: '02' },
  { id: 2, name: 'Arctic Lodge', country: 'Laponie · Finlande', desc: 'Lodge exclusif au coeur de la nature arctique finlandaise.', lon: 26.97, lat: 68.9, active: true, soon: false, num: '03' },
  { id: 3, name: 'Villa Adriatica', country: 'Croatie · Dubrovnik', desc: 'Villa vue mer sur les rives de la côte dalmate. Ouverture 2026.', lon: 18.09, lat: 42.65, active: false, soon: true, num: '04' },
]

export default function WorldMap({ lang = 'fr' }: { lang?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(-1)
  const [active, setActive] = useState(0)
  const [tooltip, setTooltip] = useState({ x: 0, y: 0, visible: false, idx: -1 })
  const animRef = useRef<number | undefined>(undefined)
  const tRef = useRef(0)

  const floatingNodes = useRef(Array.from({ length: 25 }, () => ({
    x: Math.random(), y: Math.random(),
    vx: (Math.random() - 0.5) * 0.0003,
    vy: (Math.random() - 0.5) * 0.0003,
    r: Math.random() * 1.5 + 0.3,
    a: Math.random() * 0.2 + 0.05,
  })))

  const stars = useRef(Array.from({ length: 100 }, () => ({
    x: Math.random(), y: Math.random(),
    r: Math.random() * 1.2 + 0.2,
    a: Math.random() * 0.3 + 0.05,
    phase: Math.random() * Math.PI * 2,
  })))

  function project(lon: number, lat: number, W: number, H: number) {
    const cx = W * 0.52; const cy = H * 0.48
    const scale = W / 7.2
    return {
      x: cx + (lon - 10) * (scale / 57.3),
      y: cy - (lat - 20) * (scale / 57.3) * 0.82,
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const ctx = canvas.getContext('2d')!
    let W = wrap.offsetWidth, H = wrap.offsetHeight

    const resize = () => {
      W = wrap.offsetWidth; H = wrap.offsetHeight
      canvas.width = W; canvas.height = H
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      tRef.current += 0.008
      const t = tRef.current
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#0a0f1a'
      ctx.fillRect(0, 0, W, H)

      // stars
      stars.current.forEach(s => {
        const alpha = s.a + Math.sin(t * 2 + s.phase) * 0.12
        ctx.beginPath()
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245,240,232,${Math.max(0.03, alpha)})`
        ctx.fill()
      })

      // floating nodes
      const fn = floatingNodes.current
      fn.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > 1) n.vx *= -1
        if (n.y < 0 || n.y > 1) n.vy *= -1
      })
      fn.forEach((n, i) => {
        fn.forEach((m, j) => {
          if (j <= i) return
          const dx = (n.x - m.x) * W, dy = (n.y - m.y) * H
          const d = Math.hypot(dx, dy)
          if (d < 130) {
            ctx.beginPath()
            ctx.moveTo(n.x * W, n.y * H)
            ctx.lineTo(m.x * W, m.y * H)
            ctx.strokeStyle = `rgba(245,240,232,${0.05 * (1 - d / 130)})`
            ctx.lineWidth = 0.4
            ctx.stroke()
          }
          ctx.beginPath()
          ctx.arc(n.x * W, n.y * H, n.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(245,240,232,${n.a * 0.4})`
          ctx.fill()
        })
      })

      // continent outline (Europe suggestion)
      ctx.save()
      const continentPath = [
        [0.12, 0.22], [0.2, 0.18], [0.32, 0.15], [0.42, 0.16], [0.52, 0.14],
        [0.63, 0.15], [0.72, 0.18], [0.82, 0.22], [0.9, 0.28], [0.92, 0.36],
        [0.88, 0.44], [0.82, 0.52], [0.75, 0.58], [0.65, 0.63], [0.55, 0.66],
        [0.45, 0.64], [0.35, 0.6], [0.25, 0.55], [0.16, 0.48], [0.11, 0.4],
        [0.1, 0.32], [0.12, 0.22]
      ]
      ctx.beginPath()
      continentPath.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x * W, y * H) : ctx.lineTo(x * W, y * H))
      ctx.closePath()
      ctx.fillStyle = 'rgba(245,240,232,0.015)'
      ctx.fill()
      ctx.strokeStyle = 'rgba(245,240,232,0.05)'
      ctx.lineWidth = 0.5
      ctx.stroke()
      ctx.restore()

      // connection lines
      const pts = destinations.map(d => project(d.lon, d.lat, W, H))
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const isH = hovered === i || hovered === j
          const isA = active === i || active === j
          const alpha = isH ? 0.5 : isA ? 0.2 : 0.07
          const mx = (pts[i].x + pts[j].x) / 2
          const my = (pts[i].y + pts[j].y) / 2 - 20
          const g = ctx.createLinearGradient(pts[i].x, pts[i].y, pts[j].x, pts[j].y)
          g.addColorStop(0, `rgba(245,240,232,${alpha})`)
          g.addColorStop(0.5, `rgba(245,240,232,${alpha * 0.4})`)
          g.addColorStop(1, `rgba(245,240,232,${alpha})`)
          ctx.beginPath()
          ctx.moveTo(pts[i].x, pts[i].y)
          ctx.quadraticCurveTo(mx, my, pts[j].x, pts[j].y)
          ctx.strokeStyle = g
          ctx.lineWidth = isH ? 1 : 0.5
          ctx.setLineDash(destinations[i].soon || destinations[j].soon ? [4, 4] : [])
          ctx.stroke()
          ctx.setLineDash([])
        }
      }

      // nodes
      destinations.forEach((d, i) => {
        const p = pts[i]
        const isH = hovered === i
        const isA = active === i
        const pulse = Math.sin(t * 2.5 + i * 1.8) * 0.4 + 0.6
        const col = d.soon ? 'rgba(200,170,100,' : 'rgba(245,240,232,'
        const outerR = isH ? 20 : isA ? 15 : 11
        const innerR = isH ? 5 : 3.5

        // glow
        const glowR = outerR + 8 * pulse
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR)
        grd.addColorStop(0, col + (d.soon ? '0.18' : '0.12') + ')')
        grd.addColorStop(1, 'rgba(10,15,26,0)')
        ctx.beginPath(); ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2)
        ctx.fillStyle = grd; ctx.fill()

        // outer ring
        ctx.beginPath(); ctx.arc(p.x, p.y, outerR, 0, Math.PI * 2)
        ctx.strokeStyle = col + (isH ? '0.7' : '0.25') + ')'
        ctx.lineWidth = 0.5
        if (d.soon) ctx.setLineDash([3, 3])
        ctx.stroke(); ctx.setLineDash([])

        // inner dot
        ctx.beginPath(); ctx.arc(p.x, p.y, innerR, 0, Math.PI * 2)
        ctx.fillStyle = col + (isH ? '1' : isA ? '0.9' : '0.65') + ')'; ctx.fill()

        // label
        ctx.save()
        ctx.font = '500 8px Montserrat,sans-serif'
        const lbl = d.name.toUpperCase()
        const lw = ctx.measureText(lbl).width
        const lx = p.x - lw / 2, ly = p.y - outerR - 10
        ctx.fillStyle = d.soon ? `rgba(200,170,100,${isH ? 0.9 : 0.55})` : `rgba(245,240,232,${isH ? 0.9 : 0.45})`
        ctx.fillText(lbl, lx, ly)
        if (d.soon) {
          ctx.font = '7px Montserrat,sans-serif'
          const sl = lang === 'fr' ? 'BIENTÔT' : 'COMING SOON'
          ctx.fillStyle = 'rgba(200,170,100,0.5)'
          ctx.fillText(sl, p.x - ctx.measureText(sl).width / 2, ly - 14)
        }
        ctx.restore()
      })

      animRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      window.removeEventListener('resize', resize)
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [hovered, active, lang])

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const rect = canvas.getBoundingClientRect()
    const W = wrap.offsetWidth, H = wrap.offsetHeight
    const mx = (e.clientX - rect.left) * (W / rect.width)
    const my = (e.clientY - rect.top) * (H / rect.height)
    let found = -1
    destinations.forEach((d, i) => {
      const p = project(d.lon, d.lat, W, H)
      if (Math.hypot(mx - p.x, my - p.y) < 22) found = i
    })
    setHovered(found)
    if (found >= 0) {
      const p = project(destinations[found].lon, destinations[found].lat, W, H)
      setTooltip({ x: p.x / W * rect.width + 20, y: p.y / H * rect.height - 60, visible: true, idx: found })
    } else {
      setTooltip(prev => ({ ...prev, visible: false, idx: -1 }))
    }
  }

  return (
    <section className="bg-navy py-16">
      <div className="px-8 md:px-16 mb-8">
        <p className="eyebrow mb-3">{lang === 'fr' ? 'Nos destinations' : 'Our destinations'}</p>
        <h2 className="font-serif font-light italic text-5xl text-cream leading-none mb-1">{lang === 'fr' ? 'Une présence' : 'A global'}</h2>
        <h2 className="font-serif font-light text-5xl text-cream/8 leading-none">{lang === 'fr' ? 'mondiale' : 'presence'}</h2>
      </div>

      <div ref={wrapRef} className="relative w-full h-[420px] md:h-[500px] cursor-crosshair">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { setHovered(-1); setTooltip(prev => ({ ...prev, visible: false })) }}
          onClick={() => { if (hovered >= 0) setActive(hovered) }}
        />

        {/* Tooltip */}
        {tooltip.visible && tooltip.idx >= 0 && (
          <div className="absolute z-20 pointer-events-none bg-navy/95 border border-cream/20 p-4 min-w-[180px] backdrop-blur-sm"
            style={{ left: Math.min(tooltip.x, 400), top: Math.max(tooltip.y, 8) }}>
            <p className="sans text-[8px] tracking-[0.3em] uppercase text-cream/35 mb-2">{destinations[tooltip.idx].country}</p>
            <p className="font-serif font-light italic text-xl text-cream mb-2">{destinations[tooltip.idx].name}</p>
            <p className="sans text-[10px] text-cream/45 leading-relaxed mb-3">{destinations[tooltip.idx].desc}</p>
            <span className={`sans text-[7px] tracking-[0.2em] uppercase px-2 py-1 border ${destinations[tooltip.idx].soon ? 'border-gold/40 text-gold/70' : 'border-cream/20 text-cream/45'}`}>
              {destinations[tooltip.idx].soon ? (lang === 'fr' ? 'Bientôt disponible' : 'Coming soon') : (lang === 'fr' ? 'Disponible' : 'Available')}
            </span>
          </div>
        )}

        {/* Legend */}
        <div className="absolute bottom-6 left-8 flex gap-5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cream/70 shadow-[0_0_6px_rgba(245,240,232,0.4)]"></div>
            <span className="sans text-[8px] tracking-[0.2em] uppercase text-cream/30">{lang === 'fr' ? 'Actif' : 'Active'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold/60 shadow-[0_0_6px_rgba(200,170,100,0.3)]"></div>
            <span className="sans text-[8px] tracking-[0.2em] uppercase text-cream/30">{lang === 'fr' ? 'Bientôt' : 'Coming soon'}</span>
          </div>
        </div>
        <div className="absolute bottom-6 right-8 sans text-[8px] tracking-[0.2em] uppercase text-cream/20">
          {lang === 'fr' ? 'Survolez les destinations' : 'Hover destinations'}
        </div>
      </div>

      {/* Destination cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 mt-1 border-t border-cream/[0.06]">
        {destinations.map((d, i) => (
          <div key={d.id}
            className={`px-8 py-6 border-r border-cream/[0.06] cursor-pointer transition-all duration-300 ${active === i ? 'border-t-2 border-t-cream/40' : 'border-t-2 border-t-transparent'} ${d.soon ? 'opacity-50' : 'hover:bg-cream/[0.02]'}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(-1)}
            onClick={() => setActive(i)}>
            <p className="sans text-[9px] tracking-[0.2em] text-cream/20 mb-2">{d.num}</p>
            <p className="font-serif font-light italic text-xl text-cream mb-1">{d.name}</p>
            <p className="sans text-[8px] tracking-[0.2em] uppercase text-cream/30 mb-3">{d.country}</p>
            <span className={`sans text-[7px] tracking-[0.2em] uppercase px-2 py-1 border inline-block ${d.soon ? 'border-gold/30 text-gold/60' : 'border-cream/15 text-cream/35'}`}>
              {d.soon ? (lang === 'fr' ? 'Bientôt' : 'Coming soon') : (lang === 'fr' ? 'Disponible' : 'Available')}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
