import React from 'react';

/**
 * EducationJourney Component
 * Features:
 * - Clean vertical timeline connected by an illuminated emerald line with glowing nodal dots.
 * - 3 Milestones:
 *   - 2026: Current Milestone, 2nd year degree (BE in AIML @ KSIT)
 *   - 2025: Began degree & Core Technical Club Member
 *   - 2024: Starting Milestone, completed PU & learnt foundation languages
 * - Compact 2x2 Achievement Badges grid with hover highlights:
 *   - 🏆 1st Place - University Hackathon
 *   - ⚡ 150+ LeetCode Problems Solved
 *   - 👥 Tech Club Organizer
 *   - 📜 Full-Stack Certified
 */

const milestones = [
  {
    year: '2026',
    status: 'CURRENT MILESTONE',
    isCurrent: true,
    title: '2nd Year BE in AIML @ K S Institute of Technology',
    note: 'Deepening specialization in artificial intelligence, neural networks, and scalable full-stack web engineering while seeking summer internship roles.',
    tag: 'B.E. UNDERGRADUATE',
  },
  {
    year: '2025',
    status: 'CAMPUS INVOLVEMENT',
    isCurrent: false,
    title: 'Began Degree & Joined Core Technical Clubs',
    note: 'Transitioned to university engineering, joined departmental tech clubs, and collaborated on real-world team projects and hackathon prototypes.',
    tag: 'CLUB MEMBER & DEV',
  },
  {
    year: '2024',
    status: 'STARTING MILESTONE',
    isCurrent: false,
    title: 'Completed Pre-University (PU) & Learnt First Languages',
    note: 'Graduated Pre-University with top academic standing, wrote first programs in C++ and Python, and developed a strong passion for software.',
    tag: 'FOUNDATION & PU',
  },
];

const achievements = [
  {
    icon: '🏆',
    title: '1st Place',
    subtitle: 'University Hackathon',
    description: 'Awarded top honors for an innovative campus tech utility prototype.',
    tag: 'HACKATHON',
  },
  {
    icon: '⚡',
    title: '150+ Solved',
    subtitle: 'LeetCode Problems',
    description: 'Consistent problem solver focused on Data Structures & Algorithms.',
    tag: 'DSA / CODING',
  },
  {
    icon: '👥',
    title: 'Tech Club',
    subtitle: 'Active Organizer',
    description: 'Helped coordinate departmental coding bootcamps and tech events.',
    tag: 'LEADERSHIP',
  },
  {
    icon: '📜',
    title: 'Full-Stack',
    subtitle: 'Certified Developer',
    description: 'Completed comprehensive modern web development & API coursework.',
    tag: 'CREDENTIAL',
  },
];

export default function EducationJourney() {
  return (
    <section id="campus-life" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t border-emerald-500/15">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b22] border border-emerald-500/25 text-emerald-400 font-mono text-xs mb-3 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          <span>ACADEMIC & CAMPUS ROOTS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Education & <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent">Campus Journey</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
          Milestones from early programming foundations to active engineering student life, hackathon wins, and technical community building at KSIT.
        </p>
      </div>

      {/* Main Grid: Left Timeline + Right Achievement Badges */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

        {/* LEFT COLUMN: Vertical Illuminated Timeline (7 cols on desktop) */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-emerald-500/15">
            <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              // Student Timeline
            </span>
            <span className="font-mono text-xs text-zinc-500">2024 → Present</span>
          </div>

          <div className="relative pl-2 sm:pl-3">
            {/* Illuminated Emerald Vertical Line */}
            <div className="absolute left-[23px] sm:left-[27px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500/70 to-lime-400/50 shadow-[0_0_12px_rgba(16,185,129,0.5)]" />

            <div className="space-y-8">
              {milestones.map((item) => (
                <div key={item.year} className="relative flex items-start group">
                  {/* Glowing Nodal Dot / Icon */}
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0d1117] border border-emerald-500/40 group-hover:border-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.35)] transition-all duration-300">
                    {item.isCurrent ? (
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                      </span>
                    ) : (
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 group-hover:bg-lime-400 transition-colors" />
                    )}
                  </div>

                  {/* Milestone Content Card */}
                  <div className="ml-5 sm:ml-6 flex-1 p-5 sm:p-6 rounded-2xl bg-[#161b22]/75 backdrop-blur-md border border-emerald-500/20 group-hover:border-emerald-500/40 group-hover:shadow-[0_8px_30px_rgba(16,185,129,0.18)] transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#0d1117] bg-gradient-to-r from-emerald-400 to-lime-400 px-2.5 py-0.5 rounded-md shadow-sm">
                          {item.year}
                        </span>
                        <span className="font-mono text-[10px] text-emerald-400 tracking-wider">
                          {item.status}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-zinc-500 bg-[#0d1117] px-2 py-0.5 rounded border border-emerald-500/15">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-300/90 text-xs sm:text-sm leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Achievement Badges 2x2 Grid (5 cols on desktop) */}
        <div className="lg:col-span-5">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-emerald-500/15">
            <span className="font-mono text-xs font-semibold tracking-wider text-lime-400 uppercase">
              // Key Achievements
            </span>
            <span className="font-mono text-xs text-zinc-500">Verified Highlights</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((badge) => (
              <div
                key={badge.title}
                className="group relative p-5 rounded-2xl bg-[#161b22]/80 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_12px_28px_-6px_rgba(16,185,129,0.28)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Subtle Glow */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent group-hover:via-emerald-400 transition-all duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{badge.icon}</span>
                    <span className="font-mono text-[10px] text-emerald-400/80 bg-[#0d1117] px-2 py-0.5 rounded border border-emerald-500/20">
                      {badge.tag}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {badge.title}
                  </h4>
                  <div className="text-xs font-mono text-emerald-400/90 mb-2">
                    {badge.subtitle}
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {badge.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>verified</span>
                  <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform">✓</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Institutional Callout Pill */}
          <div className="mt-6 p-4 rounded-xl bg-[#161b22]/50 border border-emerald-500/15 flex items-center gap-3">
            <span className="flex-shrink-0 text-xl">🏛️</span>
            <div className="text-xs text-zinc-300">
              <span className="text-white font-semibold block">K S Institute of Technology</span>
              Affiliated with VTU • Department of AIML • Bengaluru, India
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

