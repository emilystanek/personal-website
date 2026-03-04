export default function Work() {
  return (
    <section id="work" className="py-16 sm:py-24 md:py-32 px-6 bg-slate-50 dark:bg-slate-900/50" aria-labelledby="work-heading">
      <div className="max-w-5xl mx-auto">
        <h2 id="work-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-slate-900 dark:text-white">
          Work <span className="text-indigo-500" aria-hidden="true">⚡</span>
        </h2>
        <div className="space-y-8 sm:space-y-12" role="list" aria-label="Work experience">
          <article className="group relative" role="listitem">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full group-hover:w-2 transition-all duration-300" aria-hidden="true" />
            <div className="pl-8 sm:pl-12 hover:translate-x-2 sm:hover:translate-x-4 transition-transform duration-300">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                Current Position
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Senior Software Developer @ HelloFresh
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Led frontend architecture for high-volume e-commerce platforms, improving performance and reliability across teams. Championed AI-assisted development workflows and accessibility initiatives while mentoring developers and establishing architectural patterns across the organization.
              </p>
            </div>
          </article>

          <article className="group relative" role="listitem">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 rounded-full group-hover:w-2 transition-all duration-300" aria-hidden="true" />
            <div className="pl-8 sm:pl-12 hover:translate-x-2 sm:hover:translate-x-4 transition-transform duration-300">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                Previous Role
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Full-Stack Developer @ Ackroo
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Built high-performance user interfaces with Angular and React while developing a custom component library that reduced UI development time by 50%. Won Engineering Awards for accessibility and tooling contributions, including compliance improvements and design enhancements across products.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Want to see my complete work history?
          </p>
          <a
            href="#footer-heading"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-300 hover:underline"
          >
            View my LinkedIn profile
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
