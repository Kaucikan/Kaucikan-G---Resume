import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  ExternalLink,
  Award
} from 'lucide-react';

import { PERSONAL_INFO, SKILLS, EXPERIENCES, EDUCATION } from './constants';
import SectionHeading from './components/SectionHeading';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center font-bold text-xl">
              K
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              Kaucikan<span className="text-blue-500">.dev</span>
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="px-4 py-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/30 transition-all">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Architecting the <br />
          <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-indigo-500 bg-clip-text text-transparent">
            Backbone of the Web
          </span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          I'm a passionate Computer Science student specializing in building robust backend systems.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href={PERSONAL_INFO.github} target="_blank" className="px-8 py-4 bg-white text-slate-950 rounded-2xl font-bold flex items-center gap-2">
            <Github /> Github
          </a>
          <a href="#contact" className="px-8 py-4 bg-slate-900 border border-slate-800 rounded-2xl font-bold flex items-center gap-2">
            Contact <ChevronRight />
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Tech Arsenal" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800">
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-slate-800 text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-24 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

          <div>
            <SectionHeading title="Education" />
            <h3 className="text-2xl font-bold">{EDUCATION.degree}</h3>
            <p className="text-slate-400">{EDUCATION.institution}</p>
            <div className="mt-4 flex items-center gap-2 text-emerald-400">
              <Award /> CGPA: {EDUCATION.cgpa}
            </div>
          </div>

          <div id="experience">
            <SectionHeading title="Experience" />
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 mb-6">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-blue-400">{exp.company}</p>
                <ul className="mt-3 text-sm text-slate-400 space-y-2">
                  {exp.details.map((d, j) => (
                    <li key={j}>• {d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ✅ UPDATED PROJECT SECTION (ONLY CHANGE) */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Featured Works" 
            subtitle="Deep dives into my engineering projects."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* PPE */}
            <div className="group relative rounded-[2.5rem] bg-slate-900 border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform">
                🦺
              </div>

              <div className="p-10">
                <div className="flex gap-2 mb-6 flex-wrap">
                  {["Python", "YOLOv8", "OpenCV", "Deep Learning"].map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-4">PPE Violation Detection System</h3>

                <p className="text-slate-400 text-sm mb-6">
                  AI system detecting helmet & safety violations using YOLOv8 in real-time.
                </p>

                <button className="flex items-center gap-2 text-sm font-bold hover:text-blue-400">
                  View Details <ExternalLink />
                </button>
              </div>
            </div>

            {/* Eco Shield */}
            <div className="group relative rounded-[2.5rem] bg-slate-900 border border-slate-800 overflow-hidden hover:border-emerald-500/50 transition-all">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform">
                🌱
              </div>

              <div className="p-10">
                <div className="flex gap-2 mb-6 flex-wrap">
                  {["ESP32", "IoT", "Sensors", "Cloud"].map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-4">Eco Shield</h3>

                <p className="text-slate-400 text-sm mb-6">
                  Smart IoT system for monitoring environmental conditions with real-time analytics.
                </p>

                <button className="flex items-center gap-2 text-sm font-bold hover:text-emerald-400">
                  View Details <ExternalLink />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 text-center">
        <SectionHeading title="Let's Connect" />

        <div className="flex justify-center gap-8 mt-10">
          <a href={`mailto:${PERSONAL_INFO.email}`}><Mail /></a>
          <a href={PERSONAL_INFO.linkedin}><Linkedin /></a>
          <a href={`tel:${PERSONAL_INFO.phone}`}><Phone /></a>
          <MapPin />
        </div>
      </section>

      <footer className="py-10 text-center text-slate-500">
        © {new Date().getFullYear()} Kaucikan G
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;