'use client';

interface NavigationProps {
  setCursorVariant: (variant: string) => void;
}

export default function Navigation({ setCursorVariant }: NavigationProps) {
  return (
    <nav
      className="fixed top-0 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md z-40 border-b border-slate-200/50 dark:border-slate-800/50"
      aria-label="Main navigation"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white hover:scale-110 transition-transform duration-200 inline-block focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
            aria-label="Emily Stanek - Home"
          >
            ES ✦
          </a>
          <div className="flex gap-3 sm:gap-6" role="list">
            {['About', 'Work', 'Evolution'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs sm:text-sm relative group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded px-1 sm:px-2 py-1"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                role="listitem"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full group-focus:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
