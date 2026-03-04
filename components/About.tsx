'use client';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-6 relative" aria-labelledby="about-heading">
      <div className="max-w-5xl mx-auto">
        <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-slate-900 dark:text-white">
          About Me <span className="text-indigo-500" aria-hidden="true">✦</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          <div
            className="group bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:rotate-1 cursor-pointer"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
              🎨
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-900 dark:text-white">
              Creative Problem Solver
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              I love transforming complex challenges into elegant, intuitive solutions. Currently partnering with our design system team at HelloFresh to implement motion design that enhances user experiences across the platform. Adding delightful details and thoughtful interactions is what makes my work truly rewarding.
            </p>
          </div>

          <div
            className="group bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-rotate-1 cursor-pointer"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">
              ⚡
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-900 dark:text-white">
              Performance Focused
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Obsessed with creating fast, accessible experiences through observability and strong a11y practices. I've led accessibility compliance initiatives, driving WCAG standards and developer buy-in across teams. Clean code, optimal performance, and inclusive design aren't just goals—they're the foundation of everything I build.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 p-6 sm:p-8 rounded-2xl border border-indigo-200 dark:border-slate-700">
          <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-slate-900 dark:text-white">
            Technologies I Love <span aria-hidden="true">✨</span>
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start" role="list" aria-label="Technology skills">
            {[
              {
                name: 'React',
                color: 'from-cyan-400 to-blue-500',
                glow: 'rgba(34, 211, 238, 0.6)',
              },
              {
                name: 'Next.js',
                color: 'from-slate-600 to-slate-800',
                glow: 'rgba(71, 85, 105, 0.6)',
              },
              {
                name: 'TypeScript',
                color: 'from-blue-500 to-blue-700',
                glow: 'rgba(59, 130, 246, 0.6)',
              },
              {
                name: 'Node.js',
                color: 'from-green-500 to-green-700',
                glow: 'rgba(34, 197, 94, 0.6)',
              },
              {
                name: 'Tailwind CSS',
                color: 'from-teal-400 to-cyan-500',
                glow: 'rgba(20, 184, 166, 0.6)',
              },
              {
                name: 'GraphQL',
                color: 'from-pink-500 to-rose-600',
                glow: 'rgba(236, 72, 153, 0.6)',
              },
              {
                name: 'React Native',
                color: 'from-purple-500 to-indigo-600',
                glow: 'rgba(168, 85, 247, 0.6)',
              },
            ].map((tech) => (
              <span
                key={tech.name}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${tech.color} text-white rounded-full text-xs sm:text-sm font-medium
                  hover:scale-110 hover:rotate-3 transition-all duration-200 shadow-lg hover:shadow-xl`}
                style={{
                  boxShadow: `0 0 20px ${tech.glow}, 0 0 40px ${tech.glow}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${tech.glow}, 0 0 60px ${tech.glow}, 0 0 90px ${tech.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${tech.glow}, 0 0 40px ${tech.glow}`;
                }}
                role="listitem"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
