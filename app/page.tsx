'use client';

import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Evolution from '@/components/Evolution';
import Footer from '@/components/Footer';
import EffectsToggle from '@/components/EffectsToggle';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [scrollY, setScrollY] = useState(0);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [sparkles, setSparkles] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [effectsEnabled, setEffectsEnabled] = useState(true);
  const trailIdRef = useRef(0);
  const sparkleIdRef = useRef(0);

  // Load preference from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('effectsEnabled');
    if (saved !== null) {
      setEffectsEnabled(saved === 'true');
    }
  }, []);

  // Toggle effects and save preference
  const toggleEffects = () => {
    const newValue = !effectsEnabled;
    setEffectsEnabled(newValue);
    localStorage.setItem('effectsEnabled', String(newValue));
  };

  useEffect(() => {
    let moveCount = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Only add effects if enabled
      if (!effectsEnabled) return;

      // Add trail effect
      const newTrail = { x: e.clientX, y: e.clientY, id: trailIdRef.current++ };
      setTrail((prev) => [...prev, newTrail].slice(-15));

      // Add sparkle effect every 5 mouse movements
      moveCount++;
      if (moveCount % 5 === 0) {
        const offsetX = (Math.random() - 0.5) * 40;
        const offsetY = (Math.random() - 0.5) * 40;
        const newSparkle = {
          x: e.clientX + offsetX,
          y: e.clientY + offsetY,
          id: sparkleIdRef.current++,
        };
        setSparkles((prev) => [...prev, newSparkle].slice(-8));
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [effectsEnabled]);

  // Clear effects when disabled
  useEffect(() => {
    if (!effectsEnabled) {
      setTrail([]);
      setSparkles([]);
    }
  }, [effectsEnabled]);

  // Clean up old trail elements
  useEffect(() => {
    const timer = setInterval(() => {
      setTrail((prev) => prev.slice(1));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Clean up old sparkles
  useEffect(() => {
    const timer = setInterval(() => {
      setSparkles((prev) => prev.slice(1));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <main id="main-content" className={`min-h-screen overflow-x-hidden ${!effectsEnabled ? 'no-animations' : ''}`}>
        {/* Effects Toggle */}
        <EffectsToggle effectsEnabled={effectsEnabled} onToggle={toggleEffects} />

        {/* Custom Cursor - MySpace Style */}
        {effectsEnabled && (
          <>
            <div
              className="pointer-events-none fixed z-[60] transition-all duration-200"
              style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
                transform: 'translate(-50%, -50%)',
                width: cursorVariant === 'hover' ? '30px' : '24px',
                height: cursorVariant === 'hover' ? '30px' : '24px',
              }}
            >
              <div className="relative w-full h-full">
                {/* Outer ring on hover */}
                {cursorVariant === 'hover' && (
                  <div
                    className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping"
                    style={{
                      boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)',
                    }}
                  />
                )}
              </div>
            </div>

            {/* Cursor Trail - Sparkle effect */}
            {trail.map((point, index) => (
              <div
                key={point.id}
                className="pointer-events-none fixed z-[59]"
                style={{
                  left: `${point.x}px`,
                  top: `${point.y}px`,
                  transform: 'translate(-50%, -50%)',
                  opacity: (index + 1) / trail.length * 0.6,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, #a78bfa, #ec4899)`,
                    boxShadow: '0 0 6px rgba(167, 139, 250, 0.8)',
                  }}
                />
              </div>
            ))}

            {/* Sparkles - MySpace style stars */}
            {sparkles.map((sparkle, index) => (
              <div
                key={sparkle.id}
                className="pointer-events-none fixed z-[59] animate-bounce-in"
                style={{
                  left: `${sparkle.x}px`,
                  top: `${sparkle.y}px`,
                  transform: 'translate(-50%, -50%)',
                  opacity: 1 - (index / sparkles.length) * 0.5,
                }}
              >
                <div className="text-yellow-300 text-xl animate-pulse">✨</div>
              </div>
            ))}

            {/* Ambient Cursor Glow */}
            <div
              className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.08), transparent 80%)`,
              }}
            />
          </>
        )}

      {/* Navigation */}
      <Navigation setCursorVariant={setCursorVariant} />

      {/* Hero Section */}
      <Hero effectsEnabled={effectsEnabled} />

      {/* About Section */}
      <About />

      {/* Work Section */}
      <Work />

      {/* Evolution Section */}
      <Evolution />

      {/* Footer */}
      <Footer />
      </main>
    </>
  );
}
