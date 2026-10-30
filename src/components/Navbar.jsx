import React, { useState, useEffect } from 'react';

/**
 * Navbar Component
 * Floating frosted-glass navigation bar fixed at the top with:
 * - Brand logo: 'Harshitha G' with cyber accent
 * - Clean navigation links: About, Projects, Skills, Campus Life, Contact
 * - Dynamic scroll-reactive border & shadow
 * - Mobile hamburger menu with cyber drawer
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#0d1117]/85 backdrop-blur-xl border-emerald-500/25 shadow-[0_8px_30px_rgb(0,0,0,0.6)] shadow-emerald-950/20 py-3 px-5 sm:px-7'
            : 'bg-[#0d1117]/65 backdrop-blur-md border-emerald-500/15 py-4 px-5 sm:px-7'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => setActiveLink('Home')}
          >
            {/* Cyber Emblem */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#161b22] border border-emerald-500/40 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-lime-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="font-mono font-bold text-sm text-emerald-400 group-hover:text-lime-300 transition-colors tracking-tighter">
                &lt;HG/&gt;
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  Harshitha G
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-lime-400 animate-pulse" />
              </div>
              <span className="font-mono text-[11px] text-emerald-400/70 tracking-wider">
                PORTFOLIO.DEV
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#161b22]/70 p-1.5 rounded-xl border border-emerald-500/15">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`relative px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-300 bg-emerald-500/10 shadow-[inset_0_1px_1px_rgba(16,185,129,0.3)]'
                      : 'text-zinc-300 hover:text-white hover:bg-[#21262d]/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action / Quick Terminal Trigger (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#161b22] border border-emerald-500/20 text-xs font-mono text-emerald-400/90">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>v2.6 // AIML</span>
            </div>

            <a
              href="#contact"
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-semibold tracking-wide uppercase font-mono text-[#0d1117] bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.35)] hover:shadow-[0_0_22px_rgba(163,230,53,0.5)] transform hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Connect</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#161b22] border border-emerald-500/30 text-emerald-400 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-emerald-500/20 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                  activeLink === link.name
                    ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                    : 'text-zinc-300 hover:bg-[#161b22] hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-emerald-500/50">→</span>
              </a>
            ))}

            <div className="pt-3 mt-1 border-t border-emerald-500/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>AIML @ KSIT</span>
              </div>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg text-xs font-mono font-bold text-[#0d1117] bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
              >
                Connect // Reach Out
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

