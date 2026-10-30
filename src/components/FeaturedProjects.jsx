import React, { useState, useRef } from 'react';

/**
 * FeaturedProjects Component
 * Features:
 * - Responsive 3-column grid with 3 student project cards.
 * - Interactive 3D perspective tilt effect based on mouse cursor position.
 * - Dynamic sheen/glare overlay following the mouse.
 * - Smooth hover lift (-6px) and soft emerald edge glow.
 * - Filter pill row ('All', 'Web Apps', 'AI / ML', 'Mini-Projects').
 * - Preserves the dark carbon (#0d1117) and emerald (#10b981) palette with no blue gradients.
 */

const projectsData = [
  {
    id: 'campus-event-finder',
    title: 'Campus Event Finder',
    category: 'Web Apps',
    categoryTag: 'WEB APPS',
    badge: 'LIVE // v1.4',
    badgeColor: 'text-emerald-400 bg-emerald-950/70 border-emerald-500/30',
    description:
      'Eliminates campus communication gaps by consolidating university hackathons, workshops, and club activities into a real-time calendar. Features automated seat reservations, QR check-ins, and direct Google Calendar synchronization.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Leaflet Maps'],
    metrics: '98% Student Reach',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'smart-attendance-tracker',
    title: 'Smart Attendance Tracker',
    category: 'AI / ML',
    categoryTag: 'AI / ML',
    badge: 'ACCURACY // 99.2%',
    badgeColor: 'text-lime-400 bg-lime-950/70 border-lime-500/30',
    description:
      'Replaces tedious manual roll-calls with an automated facial recognition vision pipeline that verifies entire lecture halls in seconds. Incorporates anti-spoofing liveness detection, real-time logging, and instant automated student attendance reports.',
    tags: ['Python', 'OpenCV', 'FastAPI', 'Deep Learning'],
    metrics: '< 150ms Inference',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'student-notes-marketplace',
    title: 'Student Notes Marketplace',
    category: 'Web Apps',
    subCategory: 'Mini-Projects',
    categoryTag: 'MINI-PROJECTS',
    badge: '1.2K+ DOWNLOADS',
    badgeColor: 'text-emerald-300 bg-emerald-950/70 border-emerald-500/30',
    description:
      'A peer-to-peer resource exchange where engineering students upload, peer-review, and discover curated semester study guides and solved papers. Built with full-text syllabus search, subject-wise VTU tagging, and verified student contributor rewards.',
    tags: ['Tailwind', 'Node.js', 'Express', 'MongoDB'],
    metrics: 'VTU Syllabus Aligned',
    liveUrl: '#',
    githubUrl: '#',
  },
];

// Individual 3D Tilt Card Component
function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
    transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease',
  });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate subtle rotation angles (-7deg to +7deg)
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`,
      transition: 'transform 0.1s ease-out, box-shadow 0.2s ease',
    });

    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease',
    });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className={`group relative rounded-2xl bg-[#161b22]/80 backdrop-blur-md border border-emerald-500/20 p-6 flex flex-col justify-between overflow-hidden cursor-default ${
        isHovered
          ? 'border-emerald-400/50 shadow-[0_12px_35px_-5px_rgba(16,185,129,0.32)] shadow-emerald-950/40'
          : 'shadow-[0_8px_24px_rgba(0,0,0,0.5)]'
      }`}
    >
      {/* Sleek Interactive Glare / Shine Overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(16, 185, 129, 0.16), transparent 75%)`,
        }}
      />

      {/* Top Ambient Card Glow Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent group-hover:via-emerald-400 transition-all duration-300" />

      {/* Card Header: Category & Metrics */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400/90 bg-[#0d1117]/80 px-2.5 py-1 rounded-md border border-emerald-500/25">
            {project.categoryTag}
          </span>
          <span className={`font-mono text-[11px] font-medium px-2 py-0.5 rounded-full border ${project.badgeColor}`}>
            {project.badge}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-emerald-300 transition-colors">
          {project.title}
        </h3>

        {/* 2-Sentence Project Description */}
        <p className="text-zinc-300/90 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      {/* Card Footer: Tech Badges & Interactive Buttons */}
      <div>
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-emerald-300/90 bg-[#0d1117]/70 border border-emerald-500/15 group-hover:border-emerald-500/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Clickable Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-emerald-500/15">
          {/* Live Demo Button */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold text-[#0d1117] bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 shadow-[0_0_12px_rgba(16,185,129,0.3)] hover:shadow-[0_0_18px_rgba(163,230,53,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Live Demo</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {/* GitHub Code Button */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-mono font-semibold text-emerald-300 hover:text-white bg-[#0d1117]/80 hover:bg-[#161b22] border border-emerald-500/30 hover:border-emerald-400 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {/* GitHub SVG */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Web Apps') return project.category === 'Web Apps';
    if (activeFilter === 'AI / ML') return project.category === 'AI / ML';
    if (activeFilter === 'Mini-Projects')
      return project.categoryTag === 'MINI-PROJECTS' || project.subCategory === 'Mini-Projects';
    return true;
  });

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b22] border border-emerald-500/25 text-emerald-400 font-mono text-xs mb-3 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          <span>PORTFOLIO SHOWCASE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Featured{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
          Hands-on software, machine learning prototypes, and full-stack applications engineered to solve student life and institutional challenges.
        </p>

        {/* Filter Pill Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#161b22]/90 rounded-2xl border border-emerald-500/20 backdrop-blur-md shadow-lg">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500/25 to-lime-500/25 text-emerald-300 border border-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                    : 'text-zinc-400 hover:text-white hover:bg-[#21262d]/50 border border-transparent'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Responsive 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Grid Footnote / GitHub Prompt */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-emerald-300 transition-colors group"
        >
          <span>Explore 15+ more repositories on GitHub</span>
          <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
}

