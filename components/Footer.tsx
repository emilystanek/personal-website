export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 md:py-20 px-6 pb-20 sm:pb-16 md:pb-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50" aria-labelledby="footer-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 id="footer-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Let's create something amazing <span aria-hidden="true">✨</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            I'm always open to new opportunities and interesting projects
          </p>
        </div>

        <nav aria-label="Social media links">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
            {[
              { name: 'GitHub', url: 'https://github.com/emilystanek', icon: '🛸', label: 'Visit my GitHub profile' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/emilystanek/', icon: '👽', label: 'Connect with me on LinkedIn' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-slate-800 rounded-full border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 hover:scale-110 hover:-translate-y-1 focus:scale-110 focus:-translate-y-1 shadow-lg hover:shadow-2xl focus:shadow-2xl"
              >
                <span className="flex items-center justify-center gap-2 font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-focus:text-indigo-600 dark:group-focus:text-indigo-400">
                  <span className="text-xl group-hover:rotate-12 group-focus:rotate-12 transition-transform duration-200" aria-hidden="true">
                    {link.icon}
                  </span>
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </nav>

        <div className="text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Emily Stanek. Crafted with care and coffee ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
