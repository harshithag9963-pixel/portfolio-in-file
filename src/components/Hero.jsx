import React from 'react';
import MatrixGridCanvas from './MatrixGridCanvas';

/**
 * Hero Component
 * Opening screen featuring:
 * - Animated Matrix Grid Canvas background
 * - Blinking Radar status pill: '🟢 Student Developer // Open for Internships'
 * - Main Headline: 'Hey, I am Harshitha G — Building the Future of Tech.'
 * - Bio: 'BE in AIML & K S Institute of Technology passionate about web development, AI, and building real-world projects.'
 * - Glowing Emerald Primary Button: 'View My Projects' (lifts on hover)
 * - Outline Secondary Button: 'Download Resume / CV'
 * - Cyber-Emerald aesthetics with deep matte carbon background (#0d1117)
 */
export default function Hero() {
  const techPills = [
    { label: 'AIML', icon: '⚡' },
    { label: 'Python', icon: '🐍' },
    { label: 'React.js', icon: '⚛️' },
    { label: 'Tailwind CSS', icon: '🎨' },
    { label: 'Machine Learning', icon: '🧠' },
    { label: 'Next.js', icon: '▲' },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0d1117]">
      {/* 1. Subtle Animated Matrix-Dot Grid on HTML5 Canvas */}
      <MatrixGridCanvas />

      {/* 2. Cyber Ambient Lighting & Vignette (Strictly Emerald/Lime to Carbon, Zero Blue) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-center soft emerald aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-gradient-to-b from-emerald-500/12 via-lime-500/5 to-transparent blur-3xl rounded-full" />
        {/* Bottom subtle radial vignette keeping text ultra-sharp */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0d1117]/60 to-[#0d1117]" />
      </div>

      {/* 3. Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* STATUS BADGE: Blinking Radar Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#161b22]/90 border border-emerald-500/30 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md mb-8 hover:border-emerald-400/60 transition-colors duration-300">
          <span className="relative flex h-2.5 w-2.5">
            {/* Blinking / Ping radar wave */}
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            {/* Solid glowing center dot */}
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#10b981]" />
          </span>
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-wide text-emerald-300/90">
            Student Developer <span className="text-lime-400/80">//</span> Open for Internships
          </span>
        </div>

        {/* MAIN HEADLINE */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
          Hey, I am{' '}
          <span className="relative inline-block whitespace-nowrap">
            {/* Gradient text: Crisp Neon Emerald to Cyber Lime */}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(16,185,129,0.4)]">
              Harshitha G
            </span>
            {/* Subtle glow underscore bar */}
            <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-400/0 via-emerald-400 to-lime-400/0 rounded-full opacity-70" />
          </span>{' '}
          <span className="block mt-2 text-3xl sm:text-5xl md:text-6xl text-zinc-100 font-bold">
            — Building the Future of Tech.
          </span>
        </h1>

        {/* STUDENT BIO */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-lg sm:text-xl text-zinc-300/95 font-normal leading-relaxed">
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#161b22] border border-emerald-500/25 text-emerald-300 font-medium font-mono text-base mr-1.5 shadow-sm">
              BE in AIML
            </span>
            at{' '}
            <span className="text-white font-semibold underline decoration-emerald-500/50 decoration-2 underline-offset-4">
              K S Institute of Technology
            </span>{' '}
            passionate about <span className="text-emerald-300 font-medium">web development</span>,{' '}
            <span className="text-lime-300 font-medium">AI</span>, and building real-world projects that solve meaningful problems.
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mb-14">
          {/* Primary Action Button: Glowing Emerald Button (Lifts on hover) */}
          <a
            href="#projects"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold font-mono text-[#0d1117] bg-gradient-to-r from-emerald-400 via-emerald-500 to-lime-400 hover:from-emerald-300 hover:to-lime-300 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_12px_32px_-4px_rgba(16,185,129,0.7)] hover:-translate-y-1 active:translate-y-0"
          >
            <span>View My Projects</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Secondary Action Button: Outline Secondary Button */}
          <a
            href="#resume"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold font-mono text-emerald-400 hover:text-white bg-[#161b22]/70 hover:bg-[#161b22] border border-emerald-500/35 hover:border-emerald-400 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg
              className="w-4 h-4 text-emerald-400 group-hover:text-lime-300 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download Resume / CV</span>
          </a>
        </div>

        {/* 4. Student Terminal / Cyber Highlights Footer */}
        <div className="w-full max-w-3xl pt-8 border-t border-emerald-500/15">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-1">Stack //</span>
              {techPills.map((tech) => (
                <div
                  key={tech.label}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#161b22]/80 border border-emerald-500/20 text-xs font-mono text-zinc-300 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors"
                >
                  <span className="text-xs">{tech.icon}</span>
                  <span>{tech.label}</span>
                </div>
              ))}
            </div>

            {/* Quick Location / Terminal Node Pill */}
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400/80 bg-[#161b22]/50 px-3 py-1.5 rounded-lg border border-emerald-500/15">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
              <span>Bengaluru, IN</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400">KSIT '26</span>
            </div>
          </div>
        </div>

      </div>

      {/* 5. Scroll Down Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-500 hover:text-emerald-400 transition-colors cursor-pointer">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-emerald-500/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-emerald-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

