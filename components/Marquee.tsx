const Marquee = ({ lang = 'fr' }: { lang?: string }) => {
  const items = lang === 'fr'
    ? ['Gestion Opérationnelle', 'Conciergerie Privée', 'Placement de Personnel', 'Gestion de Projets', 'Discrétion Absolue', 'Excellence à Chaque Étape', 'Côte d\'Azur', 'UHNW']
    : ['Operational Management', 'Private Concierge', 'Staff Placement', 'Project Management', 'Absolute Discretion', 'Excellence at Every Step', 'Côte d\'Azur', 'UHNW']
  const doubled = [...items, ...items]
  return (
    <div className="bg-cream border-y border-navy/10 py-3.5 overflow-hidden">
      <div className="flex gap-12 marquee-track whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="sans text-[9px] tracking-[0.4em] uppercase text-navy/50">{item}</span>
            <span className="w-1 h-1 bg-navy/20 rounded-full inline-block flex-shrink-0"></span>
          </span>
        ))}
      </div>
    </div>
  )
}
export default Marquee
