'use client'
import { useEffect, useRef, useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const dests = [
  {
    num:'01', name:'Palais des Lilas', loc:'France · Cannes',
    coords:"43°33'N · 007°01'E", soon:false,
    desc:'Résidence méditerranéenne raffinée avec vue panoramique sur la mer. Un équilibre rare entre intimité, confort et présence architecturale.',
    body:'Résidence méditerranéenne raffinée où l\'élégance se conjugue à des dimensions exceptionnelles. Situé sur un vaste domaine avec vue sur la mer, le domaine comprend une piscine à débordement, un hélipad et un personnel de maison permanent.',
    tags:['Piscine privée','Vue mer','Personnel inclus','Hélipad','12 chambres'],
    img:'https://framerusercontent.com/images/T8gA0CqG7jRqTKwP4Z969SaJk4.jpg',
    lon:7.017, lat:43.55
  },
  {
    num:'02', name:'Villa Toscana', loc:'Italie · Toscane',
    coords:"43°46'N · 011°15'E", soon:false,
    desc:'Domaine privé niché au coeur des collines toscanes, entre vignobles et oliviers centenaires. Une retraite d\'exception.',
    body:'Domaine privé niché au coeur des collines toscanes, entre vignobles et oliviers centenaires. La villa offre une vue panoramique sur les vallées environnantes, avec cave privée, chef sur demande et service de butler permanent.',
    tags:['Vignoble privé','Chef privé','Piscine à débordement','Cave à vins','8 chambres'],
    img:'https://framerusercontent.com/images/EiAonMC4JhuW4zETmljLJLXzJnk.jpg',
    lon:11.255, lat:43.77
  },
  {
    num:'03', name:'Arctic Lodge', loc:'Laponie · Finlande',
    coords:"68°54'N · 026°58'E", soon:false,
    desc:'Lodge exclusif au coeur de la nature arctique finlandaise. Aurores boréales, sauna nordique et silence absolu.',
    body:'Lodge exclusif au coeur de la nature arctique finlandaise. Aurores boréales garanties en saison, rennes, sauna traditionnel et expéditions guidées sur mesure. Une expérience immersive sans équivalent.',
    tags:['Aurores boréales','Sauna traditionnel','Expéditions guidées','Isolation totale','6 suites'],
    img:'https://framerusercontent.com/images/T8gA0CqG7jRqTKwP4Z969SaJk4.jpg',
    lon:26.97, lat:68.9
  },
  {
    num:'04', name:'Villa Adriatica', loc:'Croatie · Dubrovnik',
    coords:"42°39'N · 018°05'E", soon:true,
    desc:'Villa d\'exception sur les rives de la côte dalmate. Face aux eaux cristallines de l\'Adriatique. Ouverture 2026.',
    body:'Villa d\'exception sur les rives de la côte dalmate, face aux eaux cristallines de l\'Adriatique. Embarcadère privé, plage exclusive et vue imprenable sur les îles environnantes. Ouverture 2026.',
    tags:['Vue Adriatique','Embarcadère privé','Plage privée','Ouverture 2026'],
    img:'https://framerusercontent.com/images/EiAonMC4JhuW4zETmljLJLXzJnk.jpg',
    lon:18.09, lat:42.65
  }
]

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number | undefined>(undefined)
  const tRef = useRef(0)
  const [active, setActive] = useState(0)
  const activeRef = useRef(0)

  const stars = useRef(Array.from({length:80},()=>({x:Math.random(),y:Math.random(),r:Math.random()*.9+.15,a:Math.random()*.15+.04,ph:Math.random()*Math.PI*2})))
  const fnodes = useRef(Array.from({length:20},()=>({x:Math.random(),y:Math.random(),vx:(Math.random()-.5)*.00022,vy:(Math.random()-.5)*.00022,r:Math.random()*.9+.3,a:Math.random()*.1+.03})))

  function proj(lon: number, lat: number, W: number, H: number) {
    return { x: W*.5+(lon-12)*(W/6.6/57.3), y: H*.5-(lat-18)*(W/6.6/57.3)*.82 }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const hero = heroRef.current
    if (!canvas || !hero) return
    const ctx = canvas.getContext('2d')!
    let W = hero.offsetWidth, H = hero.offsetHeight

    const resize = () => { W=hero.offsetWidth; H=hero.offsetHeight; canvas.width=W; canvas.height=H }
    resize()
    window.addEventListener('resize', resize)

    function drawBg() {
      const bg = ctx.createLinearGradient(0,0,W,H)
      bg.addColorStop(0,'#07101c'); bg.addColorStop(.5,'#091525'); bg.addColorStop(1,'#081220')
      ctx.fillStyle=bg; ctx.fillRect(0,0,W,H)
      const cx=W*.46, cy=H*.54
      for(let r=45;r<Math.max(W,H)*1.2;r+=34){
        ctx.beginPath(); ctx.ellipse(cx,cy,r*1.3,r*.82,-.12,0,Math.PI*2)
        ctx.strokeStyle=`rgba(160,200,230,${.018*(1-r/(Math.max(W,H)*1.2))+.006})`; ctx.lineWidth=.5; ctx.stroke()
      }
      ctx.strokeStyle='rgba(160,200,230,0.03)'; ctx.lineWidth=.4
      for(let x=0;x<W;x+=W/10){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke()}
      for(let y=0;y<H;y+=H/7){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}
      const rx=W*.08,ry=H*.82,rr=Math.min(W,H)*.042
      ctx.save(); ctx.translate(rx,ry)
      ctx.beginPath(); ctx.arc(0,0,rr,0,Math.PI*2); ctx.strokeStyle='rgba(160,200,230,0.07)'; ctx.lineWidth=.5; ctx.stroke()
      const compassPts: Array<[number,number]> = [[0,-rr],[0,rr],[rr,0],[-rr,0]]
      compassPts.forEach(([x,y])=>{ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(x*.7,y*.7);ctx.strokeStyle='rgba(160,200,230,0.1)';ctx.lineWidth=.4;ctx.stroke()})
      ctx.font='500 6px Montserrat,sans-serif'; ctx.fillStyle='rgba(160,200,230,0.2)'; ctx.fillText('N',-2.5,-rr-4)
      ctx.restore()
      const soundingPts: Array<[number,number,string]> = [[.18,.28,'142m'],[.32,.16,'89m'],[.66,.2,'234m'],[.8,.38,'178m'],[.44,.54,'56m'],[.72,.7,'312m']]
      soundingPts.forEach(([x,y,v])=>{
        ctx.font='5px Montserrat,sans-serif'; ctx.fillStyle='rgba(160,200,230,0.09)'; ctx.fillText(v,x*W,y*H)
      })
      const land: [number,number][] = [[.08,.2],[.16,.14],[.28,.1],[.42,.09],[.54,.1],[.64,.12],[.74,.16],[.83,.2],[.89,.28],[.91,.38],[.87,.48],[.78,.56],[.66,.62],[.53,.66],[.41,.63],[.3,.57],[.2,.5],[.12,.42],[.08,.3],[.08,.2]]
      ctx.beginPath(); land.forEach(([x,y],i)=>i?ctx.lineTo(x*W,y*H):ctx.moveTo(x*W,y*H))
      ctx.closePath(); ctx.fillStyle='rgba(10,20,36,0.55)'; ctx.fill()
      ctx.strokeStyle='rgba(160,200,230,0.07)'; ctx.lineWidth=.6; ctx.stroke()
      const sx=W*.73,sy=H*.92,sl=W*.09
      ctx.strokeStyle='rgba(160,200,230,0.16)'; ctx.lineWidth=.5
      ctx.beginPath();ctx.moveTo(sx,sy);ctx.lineTo(sx+sl,sy);ctx.stroke()
      ctx.beginPath();ctx.moveTo(sx,sy-2.5);ctx.lineTo(sx,sy+2.5);ctx.stroke()
      ctx.beginPath();ctx.moveTo(sx+sl,sy-2.5);ctx.lineTo(sx+sl,sy+2.5);ctx.stroke()
      ctx.font='5.5px Montserrat,sans-serif'; ctx.fillStyle='rgba(160,200,230,0.16)'; ctx.fillText('500 nm',sx+sl/2-10,sy-5)
    }

    function draw() {
      tRef.current += .006
      const t = tRef.current
      ctx.clearRect(0,0,W,H); drawBg()
      stars.current.forEach(s=>{
        ctx.beginPath();ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2)
        ctx.fillStyle=`rgba(245,240,232,${Math.max(.02,s.a+Math.sin(t*1.5+s.ph)*.05)})`; ctx.fill()
      })
      fnodes.current.forEach(n=>{n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>1)n.vx*=-1;if(n.y<0||n.y>1)n.vy*=-1})
      fnodes.current.forEach((n,i)=>fnodes.current.forEach((m,j)=>{
        if(j<=i)return; const dx=(n.x-m.x)*W,dy=(n.y-m.y)*H,d=Math.hypot(dx,dy)
        if(d<100){ctx.beginPath();ctx.moveTo(n.x*W,n.y*H);ctx.lineTo(m.x*W,m.y*H);ctx.strokeStyle=`rgba(160,200,230,${.022*(1-d/100)})`;ctx.lineWidth=.3;ctx.stroke()}
      }))
      const ai = activeRef.current
      const pts = dests.map(d=>proj(d.lon,d.lat,W,H))
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
        const isA=ai===i||ai===j
        const mx=(pts[i].x+pts[j].x)/2, my=(pts[i].y+pts[j].y)/2-22
        const g=ctx.createLinearGradient(pts[i].x,pts[i].y,pts[j].x,pts[j].y)
        const a=isA?.28:.08; g.addColorStop(0,`rgba(245,240,232,${a})`); g.addColorStop(.5,`rgba(245,240,232,${a*.3})`); g.addColorStop(1,`rgba(245,240,232,${a})`)
        ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.quadraticCurveTo(mx,my,pts[j].x,pts[j].y)
        ctx.strokeStyle=g; ctx.lineWidth=isA?.8:.4
        if(dests[i].soon||dests[j].soon) ctx.setLineDash([4,5]); ctx.stroke(); ctx.setLineDash([])
      }
      dests.forEach((d,i)=>{
        const p=pts[i], isA=ai===i, pulse=Math.sin(t*2.2+i*1.6)*.3+.7
        const col=d.soon?'rgba(200,170,100,':'rgba(245,240,232,'
        const outerR=isA?18:11
        const gr=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,outerR+8*pulse)
        gr.addColorStop(0,col+(d.soon?.16:.12)+')'); gr.addColorStop(1,'rgba(7,16,28,0)')
        ctx.beginPath();ctx.arc(p.x,p.y,outerR+8*pulse,0,Math.PI*2);ctx.fillStyle=gr;ctx.fill()
        ctx.beginPath();ctx.arc(p.x,p.y,outerR,0,Math.PI*2)
        ctx.strokeStyle=col+(isA?.72:.25)+')'; ctx.lineWidth=.5
        if(d.soon) ctx.setLineDash([3,3]); ctx.stroke(); ctx.setLineDash([])
        if(isA){ctx.beginPath();ctx.arc(p.x,p.y,outerR+5,0,Math.PI*2);ctx.strokeStyle='rgba(245,240,232,0.08)';ctx.lineWidth=.4;ctx.stroke()}
        ctx.beginPath();ctx.arc(p.x,p.y,isA?5:3.5,0,Math.PI*2);ctx.fillStyle=col+(isA?'1':'.55')+')';ctx.fill()
        ctx.save()
        ctx.font=(isA?'500 9px':'8px')+' Montserrat,sans-serif'
        const lbl=d.name.toUpperCase(), lw=ctx.measureText(lbl).width
        ctx.fillStyle=d.soon?`rgba(200,170,100,${isA?.9:.48})`:`rgba(245,240,232,${isA?.82:.38})`
        ctx.fillText(lbl,p.x-lw/2,p.y-outerR-10)
        if(isA){ctx.font='6px Montserrat,sans-serif';ctx.fillStyle='rgba(245,240,232,0.25)';const clw=ctx.measureText(d.coords).width;ctx.fillText(d.coords,p.x-clw/2,p.y-outerR-20)}
        if(d.soon){ctx.font='6px Montserrat,sans-serif';const sl='BIENTÔT',slw=ctx.measureText(sl).width;ctx.fillStyle='rgba(200,170,100,0.36)';ctx.fillText(sl,p.x-slw/2,p.y-outerR-(isA?32:18))}
        ctx.restore()
      })
      animRef.current = requestAnimationFrame(draw)
    }
    draw()

    const handleClick = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      const mx=(e.clientX-r.left)*(W/r.width), my=(e.clientY-r.top)*(H/r.height)
      dests.forEach((d,i)=>{const p=proj(d.lon,d.lat,W,H);if(Math.hypot(mx-p.x,my-p.y)<24){activeRef.current=i;setActive(i)}})
    }
    canvas.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('click', handleClick)
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  const d = dests[active]

  return (
    <main className="bg-[#08101e] min-h-screen" style={{fontFamily:"'Cormorant Garamond',Georgia,serif",color:'#f5f0e8'}}>
      <Nav lang="fr" />

      {/* HERO MAP */}
      <div ref={heroRef} className="relative w-full overflow-hidden" style={{height:'100vh',minHeight:'560px',cursor:'crosshair'}}>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" style={{opacity:.18}}>
          <source src="https://framerusercontent.com/assets/BDKEnBWuXKuffhGnLfbAohK4nLs.mp4" type="video/mp4" />
        </video>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* ghost title */}
        <div className="absolute z-10 text-center pointer-events-none" style={{top:'32%',left:'50%',transform:'translateX(-50%)'}}>
          <h1 style={{fontSize:'clamp(22px,3.5vw,42px)',fontWeight:300,fontStyle:'italic',color:'rgba(245,240,232,0.055)',whiteSpace:'nowrap',letterSpacing:'1px'}}>Maison Monnier</h1>
          <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'6.5px',letterSpacing:'5px',textTransform:'uppercase',color:'rgba(245,240,232,0.1)',marginTop:'8px'}}>Conciergerie Privée · Côte d'Azur</p>
        </div>

        {/* dots nav */}
        <div className="absolute z-20 flex flex-col" style={{right:'28px',top:'50%',transform:'translateY(-50%)',gap:'20px'}}>
          {dests.map((dest, i) => (
            <div key={i} className="flex items-center cursor-pointer" style={{gap:'8px',flexDirection:'row-reverse'}} onClick={()=>{activeRef.current=i;setActive(i)}}>
              <span style={{fontFamily:'Montserrat,sans-serif',fontSize:'6.5px',letterSpacing:'2px',textTransform:'uppercase',color:active===i?'rgba(245,240,232,0.55)':'rgba(245,240,232,0.18)',textAlign:'right',transition:'color .25s'}} className="hidden md:block">{dest.name.split(' ')[0]}</span>
              <div style={{width:'7px',height:'7px',borderRadius:'50%',border:`.5px solid ${dest.soon?'rgba(200,170,100,0.45)':'rgba(245,240,232,0.25)'}`,background:active===i?(dest.soon?'rgba(200,170,100,0.7)':'#f5f0e8'):'transparent',boxShadow:active===i?(dest.soon?'0 0 8px rgba(200,170,100,0.3)':'0 0 8px rgba(245,240,232,0.3)'):'none',transition:'all .3s',flexShrink:0}} />
            </div>
          ))}
        </div>

        {/* info panel */}
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{background:'linear-gradient(to top,rgba(6,10,20,0.97) 50%,rgba(6,10,20,0.6) 75%,transparent)',padding:'clamp(28px,5vw,48px) clamp(20px,5vw,48px) clamp(20px,4vw,32px)'}}>
          <div className="flex justify-between items-center mb-2">
            <span style={{fontFamily:'Montserrat,sans-serif',fontSize:'6.5px',letterSpacing:'2px',color:'rgba(245,240,232,0.2)'}}>{d.coords}</span>
            <span style={{fontFamily:'Montserrat,sans-serif',fontSize:'6.5px',letterSpacing:'2px',textTransform:'uppercase',padding:'3px 8px',border:`.5px solid ${d.soon?'rgba(200,170,100,0.3)':'rgba(245,240,232,0.15)'}`,color:d.soon?'rgba(200,170,100,0.65)':'rgba(245,240,232,0.3)'}}>{d.soon?'Bientôt':'Disponible'}</span>
          </div>
          <div style={{fontSize:'clamp(28px,5vw,52px)',fontWeight:300,fontStyle:'italic',lineHeight:1,marginBottom:'4px'}}>{d.name}</div>
          <div style={{fontFamily:'Montserrat,sans-serif',fontSize:'7.5px',letterSpacing:'4px',textTransform:'uppercase',color:'rgba(245,240,232,0.3)',marginBottom:'8px'}}>{d.loc}</div>
          <div className="hidden md:block" style={{fontFamily:'Montserrat,sans-serif',fontSize:'9.5px',color:'rgba(245,240,232,0.38)',lineHeight:'1.85',maxWidth:'420px',marginBottom:'14px'}}>{d.desc}</div>
          <a href="#location-detail" style={{fontFamily:'Montserrat,sans-serif',fontSize:'7px',letterSpacing:'2px',textTransform:'uppercase',color:'rgba(245,240,232,0.55)',borderBottom:'.5px solid rgba(245,240,232,0.22)',paddingBottom:'2px',display:'inline-flex',alignItems:'center',gap:'6px',cursor:'pointer'}}>
            {d.soon?'Ouverture 2026 →':'Découvrir cette propriété →'}
          </a>
        </div>
      </div>

      {/* MARQUEE */}
      <div style={{background:'#f5f0e8',padding:'11px 0',overflow:'hidden'}}>
        <div className="flex whitespace-nowrap marquee-track" style={{gap:0}}>
          {['Gestion Opérationnelle','Conciergerie Privée','Placement de Personnel','Gestion de Projets','Discrétion Absolue','UHNW · Four Seasons · Mandarin Oriental',
            'Gestion Opérationnelle','Conciergerie Privée','Placement de Personnel','Gestion de Projets','Discrétion Absolue','UHNW · Four Seasons · Mandarin Oriental'].map((item,i)=>(
            <span key={i} className="flex items-center" style={{fontFamily:'Montserrat,sans-serif',fontSize:'7px',letterSpacing:'4px',textTransform:'uppercase',color:'rgba(10,15,26,0.38)',padding:'0 36px',gap:'36px'}}>
              {item}<span style={{width:'2px',height:'2px',background:'rgba(10,15,26,0.2)',borderRadius:'50%',display:'inline-block'}}></span>
            </span>
          ))}
        </div>
      </div>

      {/* LOCATION DETAIL */}
      <section id="location-detail" className="py-16 md:py-24 px-6 md:px-12" style={{background:'#0a0f1a'}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="overflow-hidden" style={{aspectRatio:'4/3',background:'#0d1a2a'}}>
            <img key={active} src={d.img} alt={d.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" style={{opacity:.7}} />
          </div>
          <div>
            <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'7px',letterSpacing:'3px',color:'rgba(245,240,232,0.15)',marginBottom:'14px'}}>{d.num}</p>
            <h2 style={{fontSize:'clamp(26px,4vw,40px)',fontWeight:300,fontStyle:'italic',marginBottom:'6px',lineHeight:1}}>{d.name}</h2>
            <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'7.5px',letterSpacing:'3px',textTransform:'uppercase',color:'rgba(245,240,232,0.28)',marginBottom:'20px'}}>{d.loc}</p>
            <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'9.5px',color:'rgba(245,240,232,0.4)',lineHeight:'1.95',marginBottom:'20px'}}>{d.body}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {d.tags.map((tag,i)=>(
                <span key={i} style={{fontFamily:'Montserrat,sans-serif',fontSize:'6.5px',letterSpacing:'1.5px',textTransform:'uppercase',border:'.5px solid rgba(245,240,232,0.12)',color:'rgba(245,240,232,0.3)',padding:'4px 10px'}}>{tag}</span>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              {d.soon
                ? <Link href="/contact" style={{fontFamily:'Montserrat,sans-serif',fontSize:'7.5px',letterSpacing:'2px',textTransform:'uppercase',background:'rgba(200,170,100,0.15)',color:'rgba(200,170,100,0.8)',border:'.5px solid rgba(200,170,100,0.3)',padding:'12px 22px',display:'inline-block'}}>Registre d'intérêt</Link>
                : <Link href="/contact" style={{fontFamily:'Montserrat,sans-serif',fontSize:'7.5px',letterSpacing:'2px',textTransform:'uppercase',background:'#f5f0e8',color:'#0a0f1a',padding:'12px 22px',display:'inline-block'}}>Demander des informations</Link>
              }
              <Link href="/proprietes" style={{fontFamily:'Montserrat,sans-serif',fontSize:'7.5px',letterSpacing:'2px',textTransform:'uppercase',color:'rgba(245,240,232,0.45)',border:'.5px solid rgba(245,240,232,0.15)',padding:'12px 22px',display:'inline-block'}}>En savoir plus</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24 px-6 md:px-12" style={{background:'#0c1420'}}>
        <div className="flex items-center gap-4 mb-8" style={{marginBottom:'32px'}}>
          <span style={{fontFamily:'Montserrat,sans-serif',fontSize:'7px',letterSpacing:'5px',textTransform:'uppercase',color:'rgba(245,240,232,0.18)'}}>Nos services</span>
          <div style={{flex:1,height:'.5px',background:'rgba(245,240,232,0.05)'}}></div>
        </div>
        <div>
          {[
            {num:'01',name:'Gestion Opérationnelle',tag:'Résidences'},
            {num:'02',name:'Conciergerie Privée',tag:'Sur mesure'},
            {num:'03',name:'Placement de Personnel',tag:'Maison de maître'},
            {num:'04',name:'Gestion de Projets',tag:'Rénovation & Événements'},
          ].map((svc,i)=>(
            <Link key={i} href="/services" className="flex items-center justify-between group" style={{padding:'18px 0',borderBottom:'.5px solid rgba(245,240,232,0.06)',textDecoration:'none'}}>
              <div className="flex items-center" style={{gap:'18px'}}>
                <span style={{fontFamily:'Montserrat,sans-serif',fontSize:'7px',letterSpacing:'2px',color:'rgba(245,240,232,0.18)',minWidth:'20px'}}>{svc.num}</span>
                <span style={{fontSize:'clamp(18px,2.5vw,24px)',fontWeight:300,fontStyle:'italic',color:'rgba(245,240,232,0.65)',transition:'color .2s'}} className="group-hover:text-cream">{svc.name}</span>
              </div>
              <div className="flex items-center" style={{gap:'10px'}}>
                <span className="hidden sm:block" style={{fontFamily:'Montserrat,sans-serif',fontSize:'6.5px',letterSpacing:'1.5px',textTransform:'uppercase',color:'rgba(245,240,232,0.22)',border:'.5px solid rgba(245,240,232,0.1)',padding:'3px 8px'}}>{svc.tag}</span>
                <span style={{color:'rgba(245,240,232,0.2)',fontSize:'13px',transition:'all .25s',opacity:0}} className="group-hover:opacity-100">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{background:'#08101e'}}>
        <div style={{minHeight:'380px',backgroundImage:"url('https://framerusercontent.com/images/T8gA0CqG7jRqTKwP4Z969SaJk4.jpg')",backgroundSize:'cover',backgroundPosition:'center',opacity:.55}}></div>
        <div className="flex flex-col justify-center" style={{padding:'clamp(40px,6vw,72px) clamp(24px,5vw,48px)'}}>
          <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'7px',letterSpacing:'5px',textTransform:'uppercase',color:'rgba(245,240,232,0.18)',marginBottom:'18px'}}>À propos de Maison Monnier</p>
          <h2 style={{fontSize:'clamp(24px,3vw,34px)',fontWeight:300,fontStyle:'italic',lineHeight:1.2,marginBottom:'18px'}}>Une maison fondée sur la confiance et la discrétion.</h2>
          <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'9.5px',lineHeight:2,color:'rgba(245,240,232,0.36)',marginBottom:'28px'}}>Après plus de 15 années consacrées au service de familles UHNW, Sébastien Monnier a créé une maison à son image — où l'excellence s'exprime avec naturel et où chaque client se sent immédiatement compris, accompagné et serein.</p>
          <Link href="/a-propos" style={{fontFamily:'Montserrat,sans-serif',fontSize:'7px',letterSpacing:'2px',textTransform:'uppercase',color:'rgba(245,240,232,0.45)',borderBottom:'.5px solid rgba(245,240,232,0.22)',paddingBottom:'3px',display:'inline-flex',alignItems:'center',gap:'6px'}}>À propos de Sébastien Monnier →</Link>
        </div>
      </section>

      {/* QUOTE */}
      <section className="text-center relative overflow-hidden" style={{padding:'clamp(56px,8vw,88px) clamp(24px,5vw,52px)',background:'#0a0f1a',borderTop:'.5px solid rgba(245,240,232,0.04)',borderBottom:'.5px solid rgba(245,240,232,0.04)'}}>
        <div className="absolute pointer-events-none" style={{top:'50%',left:'50%',transform:'translate(-50%,-50%)',fontSize:'220px',fontWeight:300,fontStyle:'italic',color:'rgba(245,240,232,0.016)',lineHeight:1}}>"</div>
        <div style={{width:'26px',height:'.5px',background:'rgba(245,240,232,0.18)',margin:'0 auto 26px'}}></div>
        <blockquote style={{fontSize:'clamp(18px,2.5vw,26px)',fontWeight:300,fontStyle:'italic',color:'rgba(245,240,232,0.68)',maxWidth:'440px',margin:'0 auto 16px',lineHeight:1.65}}>
          « Le vrai luxe, ce n'est pas ce que l'on possède, mais la manière dont on est servi. »
        </blockquote>
        <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'6.5px',letterSpacing:'4px',textTransform:'uppercase',color:'rgba(245,240,232,0.18)'}}>— Maison Monnier</p>
      </section>

      {/* CONTACT */}
      <section className="flex flex-wrap justify-between items-end gap-8" style={{padding:'clamp(48px,8vw,80px) clamp(24px,5vw,48px)',background:'#060d14',borderTop:'.5px solid rgba(245,240,232,0.04)'}}>
        <div>
          <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'7px',letterSpacing:'5px',textTransform:'uppercase',color:'rgba(245,240,232,0.18)',marginBottom:'14px'}}>Nous Contacter</p>
          <h2 style={{fontSize:'clamp(28px,4.5vw,48px)',fontWeight:300,fontStyle:'italic',lineHeight:1.1,marginBottom:'8px'}}>Orchestrons<br/>votre expérience.</h2>
          <p style={{fontFamily:'Montserrat,sans-serif',fontSize:'9px',color:'rgba(245,240,232,0.22)',lineHeight:1.9}}>Consultation privée · Disponible 7j/7<br/>Discrétion absolue garantie</p>
        </div>
        <div className="flex flex-col" style={{gap:'10px'}}>
          <Link href="/contact" style={{fontFamily:'Montserrat,sans-serif',fontSize:'7.5px',letterSpacing:'2px',textTransform:'uppercase',background:'#f5f0e8',color:'#08101e',padding:'13px 24px',display:'inline-block'}}>Prendre rendez-vous</Link>
          <a href="mailto:contact@maisonmonnier.fr" style={{fontFamily:'Montserrat,sans-serif',fontSize:'7.5px',letterSpacing:'2px',textTransform:'uppercase',color:'rgba(245,240,232,0.4)',border:'.5px solid rgba(245,240,232,0.12)',padding:'12px 24px',display:'inline-flex',alignItems:'center',gap:'7px'}}>✉ Par email</a>
          <a href="tel:" style={{fontFamily:'Montserrat,sans-serif',fontSize:'7.5px',letterSpacing:'2px',textTransform:'uppercase',color:'rgba(245,240,232,0.4)',border:'.5px solid rgba(245,240,232,0.12)',padding:'12px 24px',display:'inline-flex',alignItems:'center',gap:'7px'}}>✆ Par téléphone</a>
        </div>
      </section>

      <Footer lang="fr" />
    </main>
  )
}
