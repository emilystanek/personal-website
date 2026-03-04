interface HeroProps {
  effectsEnabled: boolean;
}

export default function Hero({ effectsEnabled }: HeroProps) {
  const stars = [
    { top: '15%', left: '10%', size: 3, glow: 12, delay: 0, wander: true, wanderX: 100, wanderY: -50 },
    { top: '25%', left: '15%', size: 2.5, glow: 10, delay: 3, wander: true, wanderX: -70, wanderY: 65 },
    { top: '35%', left: '8%', size: 4, glow: 15, delay: 1, wander: true, wanderX: -80, wanderY: 60 },
    { top: '45%', left: '12%', size: 2, glow: 8, delay: 1.5, wander: true, wanderX: 95, wanderY: -45 },
    { top: '20%', left: '85%', size: 3, glow: 12, delay: 2, wander: true, wanderX: -120, wanderY: 80 },
    { top: '30%', left: '90%', size: 2.5, glow: 10, delay: 2.5, wander: true, wanderX: 85, wanderY: -60 },
    { top: '40%', left: '82%', size: 3.5, glow: 14, delay: 3, wander: true, wanderX: -100, wanderY: 70 },
    { top: '50%', left: '88%', size: 2, glow: 8, delay: 3.5, wander: true, wanderX: 90, wanderY: -70 },
    { top: '18%', left: '45%', size: 2.5, glow: 10, delay: 0.8, wander: true, wanderX: -65, wanderY: 55 },
    { top: '22%', left: '55%', size: 2, glow: 8, delay: 1.3, wander: true, wanderX: 75, wanderY: -50 },
    { top: '28%', left: '50%', size: 3, glow: 12, delay: 1.8, wander: true, wanderX: -60, wanderY: 90 },
    { top: '70%', left: '20%', size: 2.5, glow: 10, delay: 2.3, wander: true, wanderX: 105, wanderY: -65 },
    { top: '75%', left: '30%', size: 3, glow: 12, delay: 2.8, wander: true, wanderX: -90, wanderY: 50 },
    { top: '80%', left: '25%', size: 2, glow: 8, delay: 3.3, wander: true, wanderX: 110, wanderY: -40 },
    { top: '72%', left: '75%', size: 4, glow: 15, delay: 0.3, wander: true, wanderX: -115, wanderY: 75 },
    { top: '78%', left: '80%', size: 2.5, glow: 10, delay: 3, wander: true, wanderX: 80, wanderY: -55 },
    { top: '85%', left: '70%', size: 2, glow: 8, delay: 1.2, wander: true, wanderX: -95, wanderY: 45 },
    { top: '60%', left: '50%', size: 2.5, glow: 10, delay: 1.7, wander: true, wanderX: -90, wanderY: -55 },
    { top: '65%', left: '55%', size: 2, glow: 8, delay: 2.2, wander: true, wanderX: 70, wanderY: 60 },
    { top: '55%', left: '48%', size: 3, glow: 12, delay: 2.7, wander: true, wanderX: -85, wanderY: -70 },
    { top: '12%', left: '35%', size: 2, glow: 9, delay: 0.5, wander: true, wanderX: 80, wanderY: 55 },
    { top: '32%', left: '25%', size: 3, glow: 11, delay: 1.2, wander: true, wanderX: -75, wanderY: -60 },
    { top: '48%', left: '18%', size: 2.5, glow: 10, delay: 2.1, wander: true, wanderX: 90, wanderY: 65 },
    { top: '58%', left: '12%', size: 2, glow: 8, delay: 2.9, wander: true, wanderX: -70, wanderY: 50 },
    { top: '15%', left: '68%', size: 3, glow: 12, delay: 0.6, wander: true, wanderX: 95, wanderY: -75 },
    { top: '38%', left: '65%', size: 2.5, glow: 10, delay: 1.9, wander: true, wanderX: -85, wanderY: 70 },
    { top: '52%', left: '72%', size: 2, glow: 8, delay: 2.6, wander: true, wanderX: 100, wanderY: -50 },
    { top: '68%', left: '45%', size: 3, glow: 11, delay: 3.2, wander: true, wanderX: -80, wanderY: 60 },
    { top: '82%', left: '50%', size: 2.5, glow: 10, delay: 1.4, wander: true, wanderX: 85, wanderY: -65 },
    { top: '90%', left: '40%', size: 2, glow: 9, delay: 2.4, wander: true, wanderX: -90, wanderY: 45 },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      aria-label="Hero section"
    >
      {/* Night Sky Stars */}
      {effectsEnabled && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {stars.map((star, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: `0 0 ${star.glow}px rgba(255, 255, 255, 0.8), 0 0 ${star.glow * 2}px rgba(255, 255, 255, 0.4)`,
                animation: star.wander
                  ? `wander 30s ease-in-out ${star.delay}s infinite`
                  : `twinkle 25s ease-in-out ${star.delay}s infinite`,
                ['--wander-x' as any]: star.wander ? `${star.wanderX}px` : '0px',
                ['--wander-y' as any]: star.wander ? `${star.wanderY}px` : '0px',
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-2 text-slate-900 dark:text-white tracking-tight leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {['E', 'm', 'i', 'l', 'y', ' ', 'S', 't', 'a', 'n', 'e', 'k'].map((letter, index) => (
              letter === ' ' ? (
                <span key={index} className="inline-block mx-2 sm:mx-4"></span>
              ) : (
                <span key={index} className="inline-block hover:scale-110 hover:rotate-3 transition-transform duration-200">
                  {letter}
                </span>
              )
            ))}
          </h1>
        </div>
        <div className="relative inline-block mb-8 px-4">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold cosmic-gradient flex items-center justify-center gap-3">
            <span className="md:hidden text-xl" aria-hidden="true">✨</span>
            <span>Senior Software Developer</span>
            <span className="md:hidden text-xl" aria-hidden="true">🌙</span>
          </p>
          <div className="hidden md:block absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" aria-hidden="true" />
        </div>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed px-4">
          Crafting delightful digital experiences with creativity and code
        </p>

        {/* Mobile scroll down arrow */}
        <a
          href="#about"
          className="mt-8 sm:hidden flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 animate-bounce"
          aria-label="Scroll down to About section"
        >
          <span className="text-xs font-medium uppercase tracking-wide">Scroll</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>

        {/* Desktop floating scroll indicator */}
        <div className="absolute mt-12 sm:mt-16 md:mt-20 left-1/2 -translate-x-1/2 hidden sm:block" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
