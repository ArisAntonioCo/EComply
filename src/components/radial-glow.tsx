
interface RadialGlowProps {
  className?: string
}

export default function RadialGlow({ className = "" }: RadialGlowProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Layered radial glow effect - very subtle alternating slate-950 and blue tones - oblong shape */}
      
      {/* Outer slate layer */}
      <div className="absolute -top-48 left-1/2 transform -translate-x-1/2 w-[48rem] h-[20rem] bg-slate-950/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Blue layer */}
      <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[36rem] h-[15rem] bg-blue-900/5 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Slate layer */}
      <div className="absolute -top-36 left-1/2 transform -translate-x-1/2 w-[30rem] h-[12rem] bg-slate-950/8 rounded-full blur-2xl pointer-events-none"></div>
      
      {/* Blue layer */}
      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[24rem] h-[10rem] bg-blue-800/4 rounded-full blur-2xl pointer-events-none"></div>
      
      {/* Slate layer */}
      <div className="absolute -top-28 left-1/2 transform -translate-x-1/2 w-[18rem] h-[8rem] bg-slate-950/6 rounded-full blur-xl pointer-events-none"></div>
      
      {/* Blue layer */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[12rem] h-[6rem] bg-blue-600/5 rounded-full blur-xl pointer-events-none"></div>
      
      {/* Large slate center core */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[8rem] h-[4rem] bg-slate-950/8 rounded-full blur-lg pointer-events-none"></div>
    </div>
  )
}
