import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStack from './components/TechStack';
import EducationJourney from './components/EducationJourney';
import Contact from './components/Contact';
import CursorFollower from './components/CursorFollower';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-x-hidden">
      {/* Interactive Easter Egg: Custom Cursor Follower & Particle Spark Trail */}
      <CursorFollower />

      {/* Floating Frosted-Glass Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Intro Screen */}
        <Hero />

        {/* 2. Featured Projects Showcase */}
        <FeaturedProjects />

        {/* 3. Tech Stack & Skills Section */}
        <TechStack />

        {/* 4. Education & Campus Journey Section */}
        <EducationJourney />

        {/* 5. About Summary */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-emerald-500/10">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-emerald-400 text-sm">05.</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">About Harshitha</h2>
            <div className="flex-1 h-[1px] bg-emerald-500/20 ml-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-[#161b22]/70 border border-emerald-500/15 backdrop-blur-sm">
              <p className="text-zinc-300 leading-relaxed mb-4 text-sm sm:text-base">
                Currently pursuing a Bachelor of Engineering (BE) in Artificial Intelligence & Machine Learning at{' '}
                <strong className="text-emerald-400 font-semibold">K S Institute of Technology</strong>, Bengaluru.
                My focus lies at the intersection of modern full-stack web engineering and intelligent systems.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Passionate about turning theoretical AI/ML concepts into intuitive, high-performance web products. Experienced in React, Tailwind CSS, Python, OpenCV, and modern full-stack developer tooling.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#161b22]/70 border border-emerald-500/15 flex flex-col justify-center space-y-3">
              <div>
                <span className="font-mono text-xs text-emerald-400 block mb-1">PROGRAM OF STUDY</span>
                <span className="text-lg font-bold text-white block">BE in AIML</span>
                <span className="font-mono text-xs text-zinc-400">Class of 2029 • KSIT Bengaluru</span>
              </div>
              <div className="pt-3 border-t border-emerald-500/10">
                <span className="font-mono text-xs text-emerald-400 block mb-1">FOCUS AREAS</span>
                <span className="text-xs text-zinc-300 font-mono">Full-Stack Web • Computer Vision • AI</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Contact & Footer Section */}
        <Contact />
      </main>
    </div>
  );
}
