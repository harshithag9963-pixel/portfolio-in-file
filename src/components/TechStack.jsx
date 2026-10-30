import React from 'react';

/**
 * TechStack Component
 * Features:
 * - 3 clean categorized columns/cards:
 *   1. 'Languages' (C++, Python, JavaScript, Java, SQL, TypeScript)
 *   2. 'Frameworks & Tools' (React, Tailwind CSS, Node.js, Git/GitHub, Next.js, FastAPI, OpenCV)
 *   3. 'Core CS Concepts' (Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, ML Foundations)
 * - Interactive Pill Badges:
 *   - Sleek badge with official SVG logo/icon
 *   - Hover: scales up (scale-105), glows with emerald border & shadow
 *   - Tooltip indicating comfort level ('Proficient', 'Familiar', 'Currently Learning')
 */

const skillCategories = [
  {
    title: 'Languages',
    tag: 'SYNTAX & CORE',
    description: 'Foundational programming languages used for systems, scripting, and web applications.',
    skills: [
      {
        name: 'Python',
        level: 'Proficient',
        levelColor: 'bg-emerald-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M11.914 2c-3.138 0-4.947.382-5.914 1.344-.984.978-.984 2.222-.984 4.656h6.914v1H3.97C2.984 9 2.016 10.046 2.016 12.016c0 1.968.968 3.016 1.954 3.016h2.944v-2.032c0-1.782 1.484-3.048 3.048-3.048h4.984v-1.954c0-2.39-.016-3.672-.984-4.656C13.016 2.382 12.032 2 11.914 2z" fill="#38bdf8"/>
            <path d="M12.086 22c3.138 0 4.947-.382 5.914-1.344.984-.978.984-2.222.984-4.656h-6.914v-1h7.944c.986 0 1.954-1.048 1.954-3.016 0-1.97-.968-3.016-1.954-3.016h-2.944v2.032c0 1.782-1.484 3.048-3.048 3.048H9.042v1.954c0 2.39.016 3.672.984 4.656.954.962 1.938 1.344 2.06 1.344z" fill="#facc15"/>
          </svg>
        ),
      },
      {
        name: 'C++',
        level: 'Proficient',
        levelColor: 'bg-emerald-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M22.38 11.23h-1.61v-1.61h-1.61v1.61h-1.61v1.61h1.61v1.61h1.61v-1.61h1.61v-1.61zm-6.44 0h-1.61v-1.61h-1.61v1.61h-1.61v1.61h1.61v1.61h1.61v-1.61h1.61v-1.61zM10.82 4.5a7.51 7.51 0 00-6.52 3.77 7.5 7.5 0 000 7.46 7.51 7.51 0 006.52 3.77c2.4 0 4.54-1.12 5.92-2.88l-2.6-1.5a4.49 4.49 0 01-3.32 1.38 4.5 4.5 0 01-3.9-2.25 4.5 4.5 0 010-4.48 4.5 4.5 0 013.9-2.25c1.35 0 2.56.57 3.32 1.38l2.6-1.5A7.47 7.47 0 0010.82 4.5z" fill="#00599C"/>
          </svg>
        ),
      },
      {
        name: 'JavaScript',
        level: 'Proficient',
        levelColor: 'bg-emerald-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
            <path d="M6.5 18.5v-6.25h2.15v6.25c0 1.25-.65 1.75-1.65 1.75-.4 0-.85-.1-1.15-.2l.25-1.55c.2.1.45.15.65.15.45 0 .75-.2.75-.75zm6.15.25c.75 0 1.45-.35 1.85-.95l1.6 1.05c-.85 1.15-2.05 1.65-3.45 1.65-2.6 0-4.25-1.65-4.25-4.25s1.75-4.35 4.35-4.35c2.4 0 3.85 1.5 3.85 3.9v.7h-6.1c.1 1.35 1.05 2.25 2.15 2.25zm0-4.9c-.95 0-1.85.65-2.05 1.85h4.1c0-1.15-.9-1.85-2.05-1.85z" fill="#000000"/>
          </svg>
        ),
      },
      {
        name: 'Java',
        level: 'Familiar',
        levelColor: 'bg-lime-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M8.86 16.22s-.9 1.12 1.6 1.48c3.08.43 4.67-.32 4.67-.32s-1.84.97-4.8.97c-3.23 0-3.92-1.33-1.47-2.13zm-.74-2.85s-1.02.87 1.22 1.25c2.7.46 4.3-.2 4.3-.2s-1.53.7-4.28.7c-3.05 0-3.66-1.15-1.24-1.75zm3.8-6.15c.67.77-.38 2.22-1.32 3.12-.76.73-1.46.96-1.46.96s.52-.35.9-.66c.86-.71 1.26-1.57.86-2.13-.38-.53-1.43-.8-2.22-1.87-.71-.97-.24-2.12.87-3.05 0 0-.4 1.15.28 1.95.7.83 1.42 1.01 2.09 1.68zm5.2 6.55s.65-.45.65-.95c0-.98-1.58-1.32-1.58-1.32s.93.31.93.84c0 .48-.52.79-.8.95.42.23.8.48.8.48z" fill="#f89820"/>
            <path d="M12.44 20.2s-2.9.22-4.8-.4c0 0 1.2.55 3.3.67 2.12.12 4.3-.1 5.3-.65-1.02.26-2.32.38-3.8.38z" fill="#5382a1"/>
          </svg>
        ),
      },
      {
        name: 'SQL',
        level: 'Proficient',
        levelColor: 'bg-emerald-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        ),
      },
      {
        name: 'TypeScript',
        level: 'Currently Learning',
        levelColor: 'bg-cyan-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#3178C6"/>
            <path d="M12.2 12.8h-2.1v6.7H8.5v-6.7H6.4V11h5.8v1.8zm2.4 4.5c.5.4 1.2.6 1.9.6.8 0 1.3-.3 1.3-.8 0-.5-.4-.7-1.4-1-1.3-.4-2.2-.9-2.2-2.1 0-1.2 1-2.1 2.5-2.1 1 0 1.8.3 2.4.8l-.6 1.4c-.5-.4-1.1-.6-1.8-.6-.7 0-1.1.3-1.1.7 0 .4.4.6 1.3.9 1.4.5 2.3 1 2.3 2.2 0 1.3-1 2.2-2.7 2.2-1.1 0-2.1-.4-2.7-1l.7-1.2z" fill="#ffffff"/>
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Frameworks & Tools',
    tag: 'DEVELOPMENT & STACK',
    description: 'Modern libraries, runtimes, and developer tooling used to architect end-to-end applications.',
    skills: [
      {
        name: 'React',
        level: 'Proficient',
        levelColor: 'bg-emerald-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
          </svg>
        ),
      },
      {
        name: 'Tailwind CSS',
        level: 'Proficient',
        levelColor: 'bg-emerald-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#38BDF8">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
          </svg>
        ),
      },
      {
        name: 'Node.js',
        level: 'Familiar',
        levelColor: 'bg-lime-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#68A063">
            <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L4.8 8.4v7.2L12 19.7l7.2-4.1V8.4L12 4.3z" />
          </svg>
        ),
      },
      {
        name: 'Git / GitHub',
        level: 'Proficient',
        levelColor: 'bg-emerald-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#F05032">
            <path d="M21.6 10.9L13.1 2.4a1.7 1.7 0 00-2.4 0L8.3 4.8l3.1 3.1a2 2 0 012.5 2.5l3 3a2 2 0 11-1.2 1.2l-2.9-2.9v4.2a2 2 0 11-1.7 0v-4.6a2 2 0 01-1.1-2.6L8 5.7 2.4 11.3a1.7 1.7 0 000 2.4l8.5 8.5c.7.7 1.7.7 2.4 0l8.3-8.3a1.7 1.7 0 000-2.4z" />
          </svg>
        ),
      },
      {
        name: 'Next.js',
        level: 'Familiar',
        levelColor: 'bg-lime-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.093 14.887l-6.31-8.172v8.172H9.215V7.113h1.897l6.568 8.498v-8.498h1.568v9.774h-2.155z" />
          </svg>
        ),
      },
      {
        name: 'FastAPI',
        level: 'Familiar',
        levelColor: 'bg-lime-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#009688">
            <circle cx="12" cy="12" r="10" />
            <path d="M13 6l-5 8h4l-1 5 6-9h-4l1-4z" fill="#ffffff" />
          </svg>
        ),
      },
      {
        name: 'OpenCV',
        level: 'Currently Learning',
        levelColor: 'bg-cyan-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="7" r="4" fill="#5C3EE8" />
            <circle cx="7" cy="16" r="4" fill="#00BAFF" />
            <circle cx="17" cy="16" r="4" fill="#E23E57" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Core CS Concepts',
    tag: 'THEORY & ARCHITECTURE',
    description: 'Fundamental computer science and AI pillars powering software design, algorithms, and data modeling.',
    skills: [
      {
        name: 'Data Structures & Algorithms',
        level: 'Proficient',
        levelColor: 'bg-emerald-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="6" r="3" />
            <circle cx="12" cy="18" r="3" />
            <path d="M7.5 8.5L10.5 15.5M16.5 8.5L13.5 15.5" />
          </svg>
        ),
      },
      {
        name: 'Object-Oriented Programming (OOP)',
        level: 'Proficient',
        levelColor: 'bg-emerald-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="8.5" y="14" width="7" height="7" rx="1" />
            <path d="M6.5 10v2a2 2 0 002 2h4M17.5 10v2a2 2 0 01-2 2h-1" />
          </svg>
        ),
      },
      {
        name: 'Database Management (DBMS)',
        level: 'Proficient',
        levelColor: 'bg-emerald-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
            <ellipse cx="12" cy="6" rx="8" ry="3" />
            <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
            <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
          </svg>
        ),
      },
      {
        name: 'Operating Systems (OS)',
        level: 'Familiar',
        levelColor: 'bg-lime-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#84cc16" strokeWidth="2">
            <rect x="3" y="4" width="18" height="12" rx="2" />
            <path d="M7 20h10M12 16v4" />
          </svg>
        ),
      },
      {
        name: 'Computer Networks (CN)',
        level: 'Familiar',
        levelColor: 'bg-lime-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
          </svg>
        ),
      },
      {
        name: 'Machine Learning Fundamentals',
        level: 'Currently Learning',
        levelColor: 'bg-cyan-400',
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#bef264" strokeWidth="2">
            <path d="M12 2a4 4 0 00-4 4c0 1.09.43 2.08 1.13 2.8A7 7 0 003 15v1a4 4 0 004 4h10a4 4 0 004-4v-1a7 7 0 00-6.13-6.2A4 4 0 0012 2z" />
            <circle cx="9" cy="13" r="1" fill="#bef264" />
            <circle cx="15" cy="13" r="1" fill="#bef264" />
          </svg>
        ),
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t border-emerald-500/15">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b22] border border-emerald-500/25 text-emerald-400 font-mono text-xs mb-3 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>TECHNICAL ARSENAL</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Tech Stack & <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
          Core technologies, software frameworks, and academic computing foundations honed through engineering coursework and real-world development.
        </p>

        {/* Legend / Comfort level key */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 pt-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
            <span className="text-zinc-300">Proficient</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635]" />
            <span className="text-zinc-300">Familiar</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
            <span className="text-zinc-300">Currently Learning</span>
          </div>
        </div>
      </div>

      {/* 3-Column Categorized Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="group relative rounded-2xl bg-[#161b22]/75 backdrop-blur-md border border-emerald-500/20 p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:border-emerald-500/40 hover:shadow-[0_12px_32px_-5px_rgba(16,185,129,0.2)] transition-all duration-300"
          >
            {/* Top subtle highlight line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/35 to-transparent group-hover:via-emerald-400 transition-all duration-300" />

            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400/90 bg-[#0d1117] px-2.5 py-1 rounded-md border border-emerald-500/25">
                  {category.tag}
                </span>
                <span className="font-mono text-xs text-zinc-500">
                  {category.skills.length} skills
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                {category.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                {category.description}
              </p>

              {/* Badges List */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/badge relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d1117]/80 border border-emerald-500/20 text-zinc-200 hover:text-white hover:border-emerald-400 hover:bg-[#161b22] hover:shadow-[0_0_15px_rgba(16,185,129,0.35)] transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {/* Official / Vector Tech Icon */}
                    <span className="flex-shrink-0 flex items-center justify-center">
                      {skill.icon}
                    </span>

                    {/* Skill Label */}
                    <span className="font-mono text-xs font-medium tracking-tight">
                      {skill.name}
                    </span>

                    {/* Hover Tooltip (Comfort Level) */}
                    <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/badge:opacity-100 pointer-events-none transition-all duration-200 transform translate-y-1 group-hover/badge:translate-y-0 z-30 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0d1117] border border-emerald-500/40 text-[10px] font-mono text-emerald-300 shadow-[0_4px_16px_rgba(0,0,0,0.8),0_0_10px_rgba(16,185,129,0.3)]">
                        <span className={`w-1.5 h-1.5 rounded-full ${skill.levelColor}`} />
                        <span>{skill.level}</span>
                      </div>
                      {/* Downward pointer caret */}
                      <div className="w-2 h-2 bg-[#0d1117] border-r border-b border-emerald-500/40 transform rotate-45 mx-auto -mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Cyber Terminal Accent */}
            <div className="mt-8 pt-4 border-t border-emerald-500/10 flex items-center justify-between font-mono text-[11px] text-zinc-500">
              <span>status: verified</span>
              <span className="text-emerald-400/80">AIML @ KSIT</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

