export default function Evolution() {
  return (
    <section id="evolution" className="py-16 sm:py-24 md:py-32 px-6 relative" aria-labelledby="evolution-heading">
      <div className="max-w-5xl mx-auto">
        <h2 id="evolution-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-slate-900 dark:text-white">
          Evolution <span className="text-indigo-500" aria-hidden="true">🚀</span>
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-7 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" aria-hidden="true" />

          <div className="space-y-8 sm:space-y-10 md:space-y-12" role="list" aria-label="Education timeline">
            {[
              {
                year: '2017 - 2019',
                title: 'Software Development Diploma',
                description:
                  'Developed strong foundations in programming, web technologies, and software engineering principles.',
                icon: '💻',
                color: 'from-indigo-500 to-purple-500',
              },
              {
                year: '2014 - 2017',
                title: 'Graphic Design Advanced Diploma',
                description:
                  'Cultivated creative problem-solving skills and design thinking, learning to craft visually compelling user experiences.',
                icon: '🎨',
                color: 'from-purple-500 to-pink-500',
              },
              {
                year: '2013',
                title: 'Environmental Science',
                description:
                  'Explored scientific methodologies and analytical thinking, developing a systematic approach to complex problems.',
                icon: '🌱',
                color: 'from-pink-500 to-rose-500',
              },
            ].map((item, index) => (
              <article
                key={index}
                className="relative pl-16 sm:pl-20 md:pl-24 group"
                style={{
                  animation: `slide-up 0.6s ease-out ${index * 0.2}s both`,
                }}
                role="listitem"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 flex items-center justify-center" aria-hidden="true">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-200 dark:border-slate-700 flex items-center justify-center text-xl sm:text-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    {item.icon}
                  </div>
                </div>

                {/* Content card */}
                <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
                  <div
                    className={`inline-block px-2 sm:px-3 py-1 bg-gradient-to-r ${item.color} text-white text-xs sm:text-sm font-medium rounded-full mb-2 sm:mb-3`}
                  >
                    {item.year}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
