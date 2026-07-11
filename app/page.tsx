'use client'
import { useEffect, useRef, useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

// ── EXACT assets from maisonmonnier.fr/home-page ──
// Hero video: BDKEnBWuXKuffhGnLfbAohK4nLs.mp4
// About image right: T8gA0CqG7jRqTKwP4Z969SaJk4.jpg (woman on yacht)
// Wide landscape: 1Hr5BSMAEm6TkmDG4u1J03bD8.jpg (aerial boats)
// Footer image: EiAonMC4JhuW4zETmljLJLXzJnk.jpg (aerial villa pool)

const BASE = 'https://framerusercontent.com'

const dests = [
  {
    num: '01', name: 'Palais des Lilas', loc: 'France · Cannes',
    coords: "43°33'N · 007°01'E", soon: false,
    desc: 'Résidence méditerranéenne raffinée avec vue panoramique sur la mer.',
    body: "Le Palais des Lilas est une propriété méditerranéenne raffinée où l'élégance se conjugue à des dimensions exceptionnelles, offrant un équilibre rare entre intimité, confort et présence architecturale. Situé sur un vaste domaine avec vue sur la mer.",
    tags: ['Piscine privée', 'Vue mer', 'Personnel inclus', 'Hélipad'],
    img: `${BASE}/images/DPiiJxC8j3XNPzRQpeZkcLX3Ugs.jpg`,
    lon: 7.017, lat: 43.55,
  },
  {
    num: '02', name: 'Villa Toscana', loc: 'Italie · Toscane',
    coords: "43°46'N · 011°15'E", soon: false,
    desc: 'Domaine privé niché au cœur des collines toscanes, entre vignobles et oliviers centenaires.',
    body: "El Castello est un havre de paix raffiné et immersif, niché au cœur de la campagne ombrienne. Dominant la vallée et offrant une vue imprenable sur le Tibre et les collines environnantes, le domaine propose un équilibre unique entre patrimoine, confort et nature.",
    tags: ['Vignoble privé', 'Chef privé', 'Piscine à débordement', 'Cave à vins'],
    img: `${BASE}/images/OyZT2ZKbsssTkzPUfAgpvbo9p8M.jpg`,
    lon: 11.255, lat: 43.77,
  },
  {
    num: '03', name: 'Arctic Lodge', loc: 'Laponie · Finlande',
    coords: "68°54'N · 026°58'E", soon: false,
    desc: 'Lodge exclusif au cœur de la nature arctique. Aurores boréales et silence absolu.',
    body: 'Lodge exclusif au cœur de la nature arctique finlandaise. Aurores boréales garanties en saison, sauna traditionnel, bain nordique et expéditions guidées sur mesure. Une expérience immersive sans équivalent.',
    tags: ['Aurores boréales', 'Sauna traditionnel', 'Expéditions guidées', '6 suites'],
    img: `${BASE}/images/45aSRPKSFTJGXRn2QzKYcDCYI3I.jpg`,
    lon: 26.97, lat: 68.9,
  },
]

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number | undefined>(undefined)
  const tRef = useRef(0)
  const [active, setActive] = useState(0)
  const activeRef = useRef(0)
  const stars = useRef(Array.from({length:80},()=>({x:Math.random(),y:Math.random(),r:Math.random()*.9+.15,a:Math.random()*.15+.04,ph:Math.random()*Math.PI*2})))
  const fn = useRef(Array.from({length:20},()=>({x:Math.random(),y:Math.random(),vx:(Math.random()-.5)*.00022,vy:(Math.random()-.5)*.00022,r:Math.random()*.9+.3,a:Math.random()*.1+.03})))

  function proj(lon:number,lat:number,W:number,H:number){return{x:W*.5+(lon-12)*(W/6.6/57.3),y:H*.5-(lat-18)*(W/6.6/57.3)*.82}}

  useEffect(()=>{
    const canvas=canvasRef.current,hero=heroRef.current
    if(!canvas||!hero)return
    const ctx=canvas.getContext('2d')!
    let W=hero.offsetWidth,H=hero.offsetHeight
    const resize=()=>{W=hero.offsetWidth;H=hero.offsetHeight;canvas.width=W;canvas.height=H}
    resize();window.addEventListener('resize',resize)

    function drawBg(){
      const bg=ctx.createLinearGradient(0,0,W,H)
      bg.addColorStop(0,'#07101c');bg.addColorStop(.5,'#091525');bg.addColorStop(1,'#081220')
      ctx.fillStyle=bg;ctx.fillRect(0,0,W,H)
      const cx=W*.46,cy=H*.54
      for(let r=45;r<Math.max(W,H)*1.2;r+=34){
        ctx.beginPath();ctx.ellipse(cx,cy,r*1.3,r*.82,-.12,0,Math.PI*2)
        ctx.strokeStyle=`rgba(160,200,230,${.018*(1-r/(Math.max(W,H)*1.2))+.006})`;ctx.lineWidth=.5;ctx.stroke()
      }
      ctx.strokeStyle='rgba(160,200,230,0.03)';ctx.lineWidth=.4
      for(let x=0;x<W;x+=W/10){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke()}
      for(let y=0;y<H;y+=H/7){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}
      const rx=W*.08,ry=H*.82,rr=Math.min(W,H)*.042
      ctx.save();ctx.translate(rx,ry)
      ctx.beginPath();ctx.arc(0,0,rr,0,Math.PI*2);ctx.strokeStyle='rgba(160,200,230,0.07)';ctx.lineWidth=.5;ctx.stroke()
      const cp:[number,number][]= [[0,-rr],[0,rr],[rr,0],[-rr,0]]
      cp.forEach(([x,y])=>{ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(x*.7,y*.7);ctx.strokeStyle='rgba(160,200,230,0.1)';ctx.lineWidth=.4;ctx.stroke()})
      ctx.font='500 7px Montserrat,sans-serif';ctx.fillStyle='rgba(160,200,230,0.2)';ctx.fillText('N',-2.5,-rr-4)
      ctx.restore()
      const sp:[number,number,string][]= [[.18,.28,'142m'],[.32,.16,'89m'],[.66,.2,'234m'],[.8,.38,'178m'],[.44,.54,'56m'],[.72,.7,'312m']]
      sp.forEach(([x,y,v])=>{ctx.font='6px Montserrat,sans-serif';ctx.fillStyle='rgba(160,200,230,0.1)';ctx.fillText(v,x*W,y*H)})
      const land:[number,number][]= [[.08,.2],[.16,.14],[.28,.1],[.42,.09],[.54,.1],[.64,.12],[.74,.16],[.83,.2],[.89,.28],[.91,.38],[.87,.48],[.78,.56],[.66,.62],[.53,.66],[.41,.63],[.3,.57],[.2,.5],[.12,.42],[.08,.3],[.08,.2]]
      ctx.beginPath();land.forEach(([x,y],i)=>i?ctx.lineTo(x*W,y*H):ctx.moveTo(x*W,y*H))
      ctx.closePath();ctx.fillStyle='rgba(10,20,36,0.55)';ctx.fill()
      ctx.strokeStyle='rgba(160,200,230,0.07)';ctx.lineWidth=.6;ctx.stroke()
      const sx=W*.73,sy=H*.92,sl=W*.09
      ctx.strokeStyle='rgba(160,200,230,0.16)';ctx.lineWidth=.5
      ctx.beginPath();ctx.moveTo(sx,sy);ctx.lineTo(sx+sl,sy);ctx.stroke()
      ctx.beginPath();ctx.moveTo(sx,sy-2.5);ctx.lineTo(sx,sy+2.5);ctx.stroke()
      ctx.beginPath();ctx.moveTo(sx+sl,sy-2.5);ctx.lineTo(sx+sl,sy+2.5);ctx.stroke()
      ctx.font='6px Montserrat,sans-serif';ctx.fillStyle='rgba(160,200,230,0.16)';ctx.fillText('500 nm',sx+sl/2-12,sy-5)
    }

    function draw(){
      tRef.current+=.006;const t=tRef.current
      ctx.clearRect(0,0,W,H);drawBg()
      stars.current.forEach(s=>{ctx.beginPath();ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2);ctx.fillStyle=`rgba(245,240,232,${Math.max(.02,s.a+Math.sin(t*1.5+s.ph)*.05)})`;ctx.fill()})
      fn.current.forEach(n=>{n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>1)n.vx*=-1;if(n.y<0||n.y>1)n.vy*=-1})
      fn.current.forEach((n,i)=>fn.current.forEach((m,j)=>{
        if(j<=i)return;const dx=(n.x-m.x)*W,dy=(n.y-m.y)*H,d=Math.hypot(dx,dy)
        if(d<100){ctx.beginPath();ctx.moveTo(n.x*W,n.y*H);ctx.lineTo(m.x*W,m.y*H);ctx.strokeStyle=`rgba(160,200,230,${.022*(1-d/100)})`;ctx.lineWidth=.3;ctx.stroke()}
      }))
      const ai=activeRef.current
      const pts=dests.map(d=>proj(d.lon,d.lat,W,H))
      for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
        const isA=ai===i||ai===j
        const mx=(pts[i].x+pts[j].x)/2,my=(pts[i].y+pts[j].y)/2-22
        ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.quadraticCurveTo(mx,my,pts[j].x,pts[j].y)
        ctx.strokeStyle=isA?'rgba(245,240,232,0.3)':'rgba(160,200,230,0.09)';ctx.lineWidth=isA?.8:.4;ctx.stroke()
      }
      dests.forEach((d,i)=>{
        const p=pts[i],isA=ai===i,pulse=Math.sin(t*2.2+i*1.6)*.3+.7
        const outerR=isA?20:12
        const gr=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,outerR+8*pulse)
        gr.addColorStop(0,'rgba(245,240,232,0.13)');gr.addColorStop(1,'rgba(7,16,28,0)')
        ctx.beginPath();ctx.arc(p.x,p.y,outerR+8*pulse,0,Math.PI*2);ctx.fillStyle=gr;ctx.fill()
        ctx.beginPath();ctx.arc(p.x,p.y,outerR,0,Math.PI*2);ctx.strokeStyle=`rgba(245,240,232,${isA?.75:.28})`;ctx.lineWidth=.5;ctx.stroke()
        if(isA){ctx.beginPath();ctx.arc(p.x,p.y,outerR+6,0,Math.PI*2);ctx.strokeStyle='rgba(245,240,232,0.08)';ctx.lineWidth=.4;ctx.stroke()}
        ctx.beginPath();ctx.arc(p.x,p.y,isA?5.5:3.8,0,Math.PI*2);ctx.fillStyle=`rgba(245,240,232,${isA?1:.6})`;ctx.fill()
        ctx.save()
        ctx.font=(isA?'500 10px':'9px')+' Montserrat,sans-serif'
        const lbl=d.name.toUpperCase(),lw=ctx.measureText(lbl).width
        ctx.fillStyle=`rgba(245,240,232,${isA?.88:.42})`;ctx.fillText(lbl,p.x-lw/2,p.y-outerR-11)
        if(isA){ctx.font='7px Montserrat,sans-serif';ctx.fillStyle='rgba(245,240,232,0.3)';const cw=ctx.measureText(d.coords).width;ctx.fillText(d.coords,p.x-cw/2,p.y-outerR-23)}
        ctx.restore()
      })
      animRef.current=requestAnimationFrame(draw)
    }
    draw()
    const onClick=(e:MouseEvent)=>{
      const r=canvas.getBoundingClientRect()
      const mx=(e.clientX-r.left)*(W/r.width),my=(e.clientY-r.top)*(H/r.height)
      dests.forEach((d,i)=>{const p=proj(d.lon,d.lat,W,H);if(Math.hypot(mx-p.x,my-p.y)<24){activeRef.current=i;setActive(i)}})
    }
    canvas.addEventListener('click',onClick)
    return()=>{window.removeEventListener('resize',resize);canvas.removeEventListener('click',onClick);if(animRef.current)cancelAnimationFrame(animRef.current)}
  },[])

  const d=dests[active]

  return (
    <main style={{background:'#08101e',color:'#f5f0e8',fontFamily:"'Cormorant Garamond',Georgia,serif"}}>
      <Nav lang="fr" />

      {/* ── HERO MAP ── */}
      <div ref={heroRef} className="relative w-full overflow-hidden" style={{height:'100vh',minHeight:'600px',cursor:'crosshair'}}>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" style={{opacity:.18}}>
          <source src={`${BASE}/assets/BDKEnBWuXKuffhGnLfbAohK4nLs.mp4`} type="video/mp4"/>
        </video>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"/>

        {/* Ghost title */}
        <div className="absolute z-10 text-center pointer-events-none" style={{top:'30%',left:'50%',transform:'translateX(-50%)'}}>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(26px,3.8vw,46px)',fontWeight:300,fontStyle:'italic',color:'rgba(245,240,232,0.055)',whiteSpace:'nowrap'}}>Maison Monnier</h1>
          <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'10px',letterSpacing:'0.45em',textTransform:'uppercase',color:'rgba(245,240,232,0.1)',marginTop:'10px'}}>Conciergerie Privée · Côte d'Azur</p>
        </div>

        {/* Destination dots */}
        <div className="absolute z-20 flex flex-col" style={{right:'32px',top:'50%',transform:'translateY(-50%)',gap:'22px'}}>
          {dests.map((dest,i)=>(
            <div key={i} className="flex items-center cursor-pointer" style={{gap:'10px',flexDirection:'row-reverse'}} onClick={()=>{activeRef.current=i;setActive(i)}}>
              <span className="hidden md:block" style={{fontFamily:'Montserrat,sans-serif',fontSize:'9px',letterSpacing:'0.2em',textTransform:'uppercase',color:active===i?'rgba(245,240,232,0.65)':'rgba(245,240,232,0.22)',textAlign:'right',transition:'color .25s'}}>{dest.name.split(' ')[0]}</span>
              <div style={{width:'8px',height:'8px',borderRadius:'50%',border:`.5px solid rgba(245,240,232,${active===i?.4:.2})`,background:active===i?'#f5f0e8':'transparent',boxShadow:active===i?'0 0 10px rgba(245,240,232,0.3)':'none',transition:'all .3s',flexShrink:0}}/>
            </div>
          ))}
        </div>

        {/* Info panel */}
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{background:'linear-gradient(to top,rgba(6,10,20,0.97) 50%,rgba(6,10,20,0.6) 78%,transparent)',padding:'clamp(32px,5vw,56px) clamp(24px,5vw,56px) clamp(28px,4vw,40px)'}}>
          <div className="flex justify-between items-center" style={{marginBottom:'10px'}}>
            <span style={{fontFamily:'Montserrat,sans-serif',fontSize:'10px',letterSpacing:'0.2em',color:'rgba(245,240,232,0.22)'}}>{d.coords}</span>
            <span style={{fontFamily:'Montserrat,sans-serif',fontSize:'10px',letterSpacing:'0.15em',textTransform:'uppercase',padding:'4px 12px',border:'.5px solid rgba(245,240,232,0.15)',color:'rgba(245,240,232,0.35)'}}>Disponible</span>
          </div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(32px,5.5vw,60px)',fontWeight:300,fontStyle:'italic',lineHeight:1,marginBottom:'6px'}}>{d.name}</h2>
          <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'11px',letterSpacing:'0.35em',textTransform:'uppercase',color:'rgba(245,240,232,0.32)',marginBottom:'10px'}}>{d.loc}</p>
          <p className="hidden md:block" style={{fontFamily:'Montserrat,sans-serif',fontSize:'12px',color:'rgba(245,240,232,0.4)',lineHeight:1.8,maxWidth:'420px',marginBottom:'18px'}}>{d.desc}</p>
          <a href="#location-detail" style={{fontFamily:'Montserrat,sans-serif',fontSize:'11px',letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(245,240,232,0.6)',borderBottom:'.5px solid rgba(245,240,232,0.25)',paddingBottom:'3px',display:'inline-flex',alignItems:'center',gap:'8px',cursor:'pointer',textDecoration:'none'}}>
            Découvrir cette propriété →
          </a>
        </div>
      </div>

      {/* ── MARQUEE ── */}
      <div style={{background:'#f5f0e8',padding:'13px 0',overflow:'hidden'}}>
        <div className="marquee-track">
          {['Gestion Opérationnelle','Conciergerie Privée','Placement de Personnel','Gestion de Projets','Discrétion Absolue','UHNW · Four Seasons · Mandarin Oriental',
            'Gestion Opérationnelle','Conciergerie Privée','Placement de Personnel','Gestion de Projets','Discrétion Absolue','UHNW · Four Seasons · Mandarin Oriental'].map((item,i)=>(
            <span key={i} className="inline-flex items-center" style={{fontFamily:'Montserrat,sans-serif',fontSize:'9px',letterSpacing:'0.35em',textTransform:'uppercase',color:'rgba(10,15,26,0.4)',padding:'0 40px',gap:'40px'}}>
              {item}<span style={{width:'3px',height:'3px',background:'rgba(10,15,26,0.2)',borderRadius:'50%',display:'inline-block',flexShrink:0}}/>
            </span>
          ))}
        </div>
      </div>

      {/* ── LOCATION DETAIL ── */}
      <section id="location-detail" style={{padding:'clamp(56px,7vw,88px) clamp(24px,6vw,80px)',background:'#0a0f1a'}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="overflow-hidden" style={{aspectRatio:'4/3',background:'#0d1a2a'}}>
            <img key={active} src={d.img} alt={d.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" style={{opacity:.82}}/>
          </div>
          <div style={{paddingTop:'8px'}}>
            <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'10px',letterSpacing:'0.3em',color:'rgba(245,240,232,0.2)',marginBottom:'12px'}}>{d.num}</p>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(26px,3.5vw,40px)',fontWeight:300,fontStyle:'italic',marginBottom:'6px',lineHeight:1.05}}>{d.name}</h2>
            <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'10px',letterSpacing:'0.3em',textTransform:'uppercase',color:'rgba(245,240,232,0.3)',marginBottom:'20px'}}>{d.loc}</p>
            <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'12px',color:'rgba(245,240,232,0.44)',lineHeight:1.9,marginBottom:'22px'}}>{d.body}</p>
            <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'32px'}}>
              {d.tags.map((tag,i)=><span key={i} className="prop-tag">{tag}</span>)}
            </div>
            <div style={{display:'flex',flexWrap:'wrap',gap:'12px'}}>
              <Link href="/contact" className="btn-primary">Demander des informations</Link>
              <Link href="/proprietes" className="btn-ghost">En savoir plus →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{background:'#0c1420',padding:'clamp(56px,7vw,88px) clamp(24px,6vw,80px)'}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="eyebrow" style={{marginBottom:'20px'}}>À propos de Maison Monnier</p>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(26px,3.5vw,40px)',fontWeight:300,fontStyle:'italic',lineHeight:1.2,marginBottom:'20px'}}>
              Une maison fondée sur la confiance et la discrétion.
            </h2>
            <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'12px',lineHeight:1.95,color:'rgba(245,240,232,0.42)',marginBottom:'16px'}}>
              Chez Maison Monnier, nous accompagnons propriétaires et voyageurs d'exception grâce à une gestion irréprochable de leurs résidences, une supervision humaine du personnel et une conciergerie privée d'une discrétion absolue.
            </p>
            <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'12px',lineHeight:1.95,color:'rgba(245,240,232,0.42)',marginBottom:'32px'}}>
              Formé aux standards Four Seasons et Mandarin Oriental et fort d'une expérience internationale auprès de familles UHNW, Sébastien Monnier assure une prise en charge totale : opérations, maintenance, staff, préparation des séjours et gestion du luxe résidentiel au quotidien.
            </p>
            <Link href="/a-propos" className="btn-ghost" style={{width:'fit-content'}}>À propos de Maison Monnier →</Link>
          </div>
          {/* Exact image from original: woman on yacht */}
          <div className="overflow-hidden" style={{aspectRatio:'3/4',background:'#0d1a2a'}}>
            <img src={`${BASE}/images/T8gA0CqG7jRqTKwP4Z969SaJk4.jpg`} alt="Maison Monnier" className="w-full h-full object-cover" style={{opacity:.78}}/>
          </div>
        </div>
      </section>

      {/* ── WIDE IMAGE (boats aerial) ── */}
      <div style={{position:'relative',height:'38vw',minHeight:'260px',maxHeight:'440px',overflow:'hidden'}}>
        <img src={`${BASE}/images/1Hr5BSMAEm6TkmDG4u1J03bD8.jpg`} alt="Côte d'Azur" className="w-full h-full object-cover" style={{opacity:.65}}/>
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,#0c1420 0%,transparent 30%,transparent 70%,#060d14 100%)'}}/>
      </div>

      {/* ── QUOTE ── */}
      <section className="text-center relative overflow-hidden" style={{padding:'clamp(56px,7vw,88px) clamp(24px,6vw,80px)',background:'#f5f0e8'}}>
        <div className="absolute pointer-events-none select-none" style={{top:'50%',left:'50%',transform:'translate(-50%,-50%)',fontFamily:"'Cormorant Garamond',serif",fontSize:'240px',fontWeight:300,fontStyle:'italic',color:'rgba(10,15,26,0.03)',lineHeight:1}}>"</div>
        <div style={{width:'30px',height:'.5px',background:'rgba(10,15,26,0.18)',margin:'0 auto 28px'}}/>
        <blockquote style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(20px,2.8vw,30px)',fontWeight:300,fontStyle:'italic',color:'rgba(10,15,26,0.72)',maxWidth:'520px',margin:'0 auto 18px',lineHeight:1.65}}>
          « Le vrai luxe, ce n'est pas ce que l'on possède, mais la manière dont on est servi. »
        </blockquote>
        <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'10px',letterSpacing:'0.4em',textTransform:'uppercase',color:'rgba(10,15,26,0.3)'}}>— Maison Monnier</p>
      </section>

      {/* ── SERVICES ── */}
      <section style={{padding:'clamp(56px,7vw,88px) clamp(24px,6vw,80px)',background:'#0a0f1a'}}>
        <div className="sec-divider"><span className="eyebrow">Nos services</span></div>
        {[
          {num:'01',name:'Gestion Opérationnelle',tag:'Résidences',href:'/services'},
          {num:'02',name:'Conciergerie Privée',tag:'Sur mesure',href:'/services'},
          {num:'03',name:'Placement de Personnel',tag:'Maison de maître',href:'/services'},
          {num:'04',name:'Gestion de Projets',tag:'Rénovation & Événements',href:'/services'},
        ].map((svc,i)=>(
          <Link key={i} href={svc.href} className="svc-row">
            <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
              <span style={{fontFamily:'Montserrat,sans-serif',fontSize:'10px',letterSpacing:'0.2em',color:'rgba(245,240,232,0.2)',minWidth:'24px'}}>{svc.num}</span>
              <span className="svc-name">{svc.name}</span>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
              <span className="hidden sm:block" style={{fontFamily:'Montserrat,sans-serif',fontSize:'9px',letterSpacing:'0.15em',textTransform:'uppercase',color:'rgba(245,240,232,0.22)',border:'.5px solid rgba(245,240,232,0.1)',padding:'4px 10px'}}>{svc.tag}</span>
              <span className="svc-arrow">→</span>
            </div>
          </Link>
        ))}
        <div style={{marginTop:'40px'}}>
          <Link href="/services" className="btn-ghost">Voir tous nos services →</Link>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section style={{padding:'clamp(56px,7vw,88px) clamp(24px,6vw,80px)',background:'#060d14',display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'flex-end',gap:'32px',borderTop:'.5px solid rgba(245,240,232,0.04)',position:'relative',overflow:'hidden'}}>
        <div className="absolute pointer-events-none select-none" style={{bottom:'-20px',left:'0',fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(80px,12vw,160px)',fontWeight:300,fontStyle:'italic',color:'rgba(245,240,232,0.025)',lineHeight:1,whiteSpace:'nowrap'}}>Orchestrons.</div>
        <div style={{position:'relative',zIndex:1}}>
          <p className="eyebrow" style={{marginBottom:'16px'}}>Nous Contacter</p>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(30px,4.5vw,52px)',fontWeight:300,fontStyle:'italic',lineHeight:1.1,marginBottom:'10px'}}>Orchestrons<br/>votre expérience.</h2>
          <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'12px',color:'rgba(245,240,232,0.28)',lineHeight:1.85}}>Consultation privée · Disponible 7j/7<br/>Discrétion absolue garantie</p>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'12px',position:'relative',zIndex:1}}>
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

      <Footer lang="fr"/>
    </main>
  )
}
