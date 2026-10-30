import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStack from './components/TechStack';
import EducationJourney from './components/EducationJourney';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
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

        {/* 5. About Section */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-emerald-500/10">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-emerald-400 text-sm">01.</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">About Me</h2>
            <div className="flex-1 h-[1px] bg-emerald-500/20 ml-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-6 rounded-2xl bg-[#161b22]/70 border border-emerald-500/15 backdrop-blur-sm">
              <p className="text-zinc-300 leading-relaxed mb-4">
                Currently pursuing a Bachelor of Engineering (BE) in Artificial Intelligence & Machine Learning at{' '}
                <strong className="text-emerald-400 font-semibold">K S Institute of Technology</strong>, Bengaluru.
                My focus lies at the intersection of modern full-stack web engineering and intelligent systems.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                I enjoy transforming theoretical AI models into high-performance, human-centric web applications with snappy interfaces and responsive design systems.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#161b22]/70 border border-emerald-500/15 flex flex-col justify-center">
              <span className="font-mono text-xs text-emerald-400 mb-1">CURRENT STATUS</span>
              <span className="text-lg font-bold text-white mb-2">BE Student // AIML</span>
              <span className="font-mono text-xs text-zinc-400">CGPA: 8.8+ • KSIT Bengaluru</span>
            </div>
          </div>
        </section>

        {/* 6. Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-emerald-500/10 text-center">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block mb-3">02. Connect</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Get In Touch</h2>
          <p className="text-zinc-400 max-w-lg mx-auto mb-8 text-base">
            I am currently looking for summer/fall internships and student developer opportunities. Whether you have a question or just want to say hi, my inbox is open!
          </p>
          <a
            href="mailto:harshitha.g@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold font-mono text-[#0d1117] bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)]"
          >
            Say Hello // harshitha.g@example.com
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-emerald-500/15 bg-[#090d13]">
        <p className="text-xs font-mono text-zinc-500">
          Designed & Built by <span className="text-emerald-400">Harshitha G</span> • Crafted with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
