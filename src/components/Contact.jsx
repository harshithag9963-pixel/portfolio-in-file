import React, { useState, useRef } from 'react';

/**
 * Contact Component
 * Features:
 * - Headline: 'Let’s Collaborate & Build'
 * - Subtitle: 'Open for summer internships, open-source projects, or tech chats. Drop me a message!'
 * - Interactive Form:
 *   - Fields for Name, Email, and Message with pre-fills/placeholders
 *   - Animated Submit button with emerald loading spinner & 'Message Sent! 🚀' feedback
 * - Magnetic Hover Icon Buttons for GitHub, LinkedIn, and Email (harshithag9963@gmail.com)
 * - Footer: 'Designed & Engineered by Harshitha G • Class of 2nd year [GRADUATION YEAR:2029].'
 */

// Magnetic Button Helper Component
function MagneticButton({ href, label, icon, external = true }) {
  const btnRef = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    // Magnetic pull distance
    setTransform({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  return (
    <a
      ref={btnRef}
      href={href}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : ''}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: transform.x === 0 ? 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform 0.1s ease-out',
      }}
      className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#161b22]/90 border border-emerald-500/25 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] backdrop-blur-md transition-all duration-300"
    >
      <span className="text-xl text-emerald-400 group-hover:text-lime-300 transition-colors">
        {icon}
      </span>
      <span className="font-mono text-xs sm:text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">
        {label}
      </span>
      <span className="font-mono text-xs text-emerald-500/60 group-hover:translate-x-0.5 group-hover:text-emerald-400 transition-all">
        ↗
      </span>
    </a>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'sent'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === 'loading' || status === 'sent') return;

    setStatus('loading');

    // Simulate sending network request
    setTimeout(() => {
      setStatus('sent');
      // Reset after 4 seconds
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t border-emerald-500/15">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-t from-emerald-500/10 via-lime-500/5 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b22] border border-emerald-500/25 text-emerald-400 font-mono text-xs mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>COMMUNICATION CHANNEL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let’s Collaborate &{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent">
              Build
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-base sm:text-lg">
            Open for summer internships, open-source projects, or tech chats. Drop me a message!
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Direct Magnetic Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-[#161b22]/75 backdrop-blur-md border border-emerald-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 block mb-2">
                // DIRECT INBOX & NETWORKS
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Reach Out Directly
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                Prefer email or social channels? Feel free to connect across GitHub, LinkedIn, or send an email directly.
              </p>

              <div className="flex flex-col gap-3">
                {/* Email */}
                <MagneticButton
                  href="mailto:harshithag9963@gmail.com"
                  label="harshithag9963@gmail.com"
                  external={false}
                  icon={
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                />

                {/* GitHub */}
                <MagneticButton
                  href="https://github.com/harshithag9963-pixel"
                  label="github.com/harshithag9963-pixel"
                  icon={
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  }
                />

                {/* LinkedIn */}
                <MagneticButton
                  href="https://linkedin.com"
                  label="linkedin.com/in/harshitha-g"
                  icon={
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  }
                />
              </div>

              {/* Status Indicator */}
              <div className="mt-6 pt-4 border-t border-emerald-500/15 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Available for Summer Internships</span>
                </span>
                <span className="text-emerald-400">2026</span>
              </div>
            </div>
          </div>

          {/* Interactive Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-[#161b22]/85 backdrop-blur-md border border-emerald-500/25 p-7 sm:p-9 shadow-[0_12px_40px_rgba(0,0,0,0.65)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-semibold text-emerald-300 mb-2">
                    NAME //
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Harshitha G"
                    className="w-full px-4 py-3 rounded-xl bg-[#0d1117]/90 border border-emerald-500/20 text-white placeholder-zinc-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 text-sm font-sans transition-all"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-semibold text-emerald-300 mb-2">
                    EMAIL ADDRESS //
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="harshithag9963@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0d1117]/90 border border-emerald-500/20 text-white placeholder-zinc-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 text-sm font-sans transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-semibold text-emerald-300 mb-2">
                    YOUR MESSAGE //
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="im a engineer - Interested in discussing software development, AI projects, or internship opportunities!"
                    className="w-full px-4 py-3 rounded-xl bg-[#0d1117]/90 border border-emerald-500/20 text-white placeholder-zinc-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 text-sm font-sans resize-none transition-all"
                  />
                </div>

                {/* Submit Button with Loading & Sent States */}
                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`w-full relative group overflow-hidden py-4 px-6 rounded-xl font-mono text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    status === 'sent'
                      ? 'bg-emerald-500 text-[#0d1117] shadow-[0_0_25px_rgba(16,185,129,0.7)]'
                      : 'bg-gradient-to-r from-emerald-400 via-emerald-500 to-lime-400 text-[#0d1117] shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.65)] hover:-translate-y-0.5 active:translate-y-0'
                  }`}
                >
                  {status === 'idle' && (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}

                  {status === 'loading' && (
                    <>
                      {/* Emerald Loading Spinner */}
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#0d1117]" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Transmitting...</span>
                    </>
                  )}

                  {status === 'sent' && (
                    <span className="flex items-center gap-2 animate-bounce">
                      <span>Message Sent! 🚀</span>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="pt-10 border-t border-emerald-500/15 text-center">
          <p className="font-mono text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Designed & Engineered by <span className="text-emerald-400 font-semibold">Harshitha G</span> • Class of 2nd year <span className="text-lime-400">[GRADUATION YEAR: 2029]</span>.
          </p>
          <div className="flex items-center justify-center gap-3 mt-3 font-mono text-[11px] text-zinc-600">
            <span>React + Tailwind CSS</span>
            <span>•</span>
            <span>Cyber-Emerald v2.4</span>
            <span>•</span>
            <span className="text-emerald-500/70">Bengaluru, IN</span>
          </div>
        </footer>

      </div>
    </section>
  );
}
