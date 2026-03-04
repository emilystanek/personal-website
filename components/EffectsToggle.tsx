'use client';

import { useState, useEffect } from 'react';

interface EffectsToggleProps {
  effectsEnabled: boolean;
  onToggle: () => void;
}

export default function EffectsToggle({ effectsEnabled, onToggle }: EffectsToggleProps) {
  const [showToast, setShowToast] = useState(false);

  const handleToggle = () => {
    onToggle();

    // Show toast notification
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // Keyboard shortcut: Ctrl/Cmd + E to toggle effects
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        handleToggle();
      }
    };

    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onToggle]);

  return (
    <>
      {/* Effects Toggle Button */}
      <button
        onClick={handleToggle}
        role="switch"
        aria-checked={effectsEnabled}
        aria-label="Toggle animations and cursor effects"
        title={`${effectsEnabled ? 'Disable' : 'Enable'} effects (⌘+E or Ctrl+E)`}
        className="effects-toggle group fixed bottom-4 right-4 md:top-20 md:bottom-auto md:right-6 z-50 px-4 py-3 bg-white dark:bg-slate-800 rounded-full border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transition-colors duration-200"
      >
        <span className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden="true">
            {effectsEnabled ? '✨' : '🌑'}
          </span>
          <span className="sr-only">
            {effectsEnabled ? 'Effects enabled. Click to disable animations and cursor effects. Keyboard shortcut: Control or Command plus E.' : 'Effects disabled. Click to enable animations and cursor effects. Keyboard shortcut: Control or Command plus E.'}
          </span>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300" aria-hidden="true">
            {effectsEnabled ? 'ON' : 'OFF'}
          </span>
        </span>
      </button>

      {/* Toast Notification for Effects Toggle */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={`effects-toggle fixed bottom-20 right-4 md:top-32 md:bottom-auto md:right-6 z-50 px-4 py-3 bg-indigo-600 text-white rounded-lg shadow-lg transition-all duration-300 ${
          showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 md:-translate-y-2 pointer-events-none'
        }`}
      >
        <span className="flex items-center gap-2 text-sm font-medium">
          <span aria-hidden="true">{effectsEnabled ? '✨' : '🌑'}</span>
          <span>Effects {effectsEnabled ? 'enabled' : 'disabled'}</span>
        </span>
      </div>
    </>
  );
}
