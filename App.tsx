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

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center font-bold text-xl">
              K
            </div>
            <span className="font-bold text-xl hidden sm:block">
              Kaucikan<span className="text-blue-500">.dev</span>
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-slate-400">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="px-4 py-2 bg-blue-600/10 text-blue-400 rounded-full border border-blue-500/30">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Architecting the <br />
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Backbone of the Web
          </span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          Backend developer focused on building scalable systems using Python, Node.js and databases.
        </p>

        <div className="flex justify-center gap-4">
          <a href={PERSONAL_INFO.github} target="_blank" className="px-6 py-3 bg-white text-black rounded-xl flex items-center gap-2">
            <Github /> Github
          </a>
          <a href="#contact" className="px-6 py-3 border border-slate-700 rounded-xl flex items-center gap-2">
            Contact <ChevronRight />
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Tech Arsenal" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SKILLS.map((skill, i) => (
              <div key={i} className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                <h3 className="font-bold mb-3">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <span key={j} className="text-xs bg-slate-800 px-2 py-1 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education + Experience */}
      <section className="py-20 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <SectionHeading title="Education" />
            <h3 className="text-xl font-bold">{EDUCATION.degree}</h3>
            <p className="text-slate-400">{EDUCATION.institution}</p>
            <div className="mt-4 flex items-center gap-2 text-green-400">
              <Award /> CGPA: {EDUCATION.cgpa}
            </div>
          </div>

          <div id="experience">
            <SectionHeading title="Experience" />
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="mb-6 p-6 bg-slate-900 rounded-xl border border-slate-800">
                <h3 className="font-bold">{exp.role}</h3>
                <p className="text-blue-400">{exp.company}</p>
                <ul className="text-sm mt-2 text-slate-400 list-disc pl-5">
                  {exp.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ✅ Updated Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Projects" />

          <div className="grid md:grid-cols-2 gap-8">

            {/* PPE */}
            <div className="p-8 bg-slate-900 rounded-xl border border-slate-800">
              <h3 className="text-xl font-bold mb-4">PPE Violation Detection</h3>

              <p className="text-slate-400 mb-4">
                AI-based system to detect safety violations like missing helmets and vests using computer vision.
              </p>

              <div className="flex gap-2 flex-wrap mb-4">
                {["Python", "YOLOv8", "OpenCV"].map((t, i) => (
                  <span key={i} className="text-xs bg-blue-500/10 px-2 py-1 rounded text-blue-400">
                    {t}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-blue-400">
                View Details <ExternalLink size={16} />
              </button>
            </div>

            {/* Eco Shield */}
            <div className="p-8 bg-slate-900 rounded-xl border border-slate-800">
              <h3 className="text-xl font-bold mb-4">Eco Shield</h3>

              <p className="text-slate-400 mb-4">
                IoT-based environmental monitoring system using sensors to track air quality and climate conditions.
              </p>

              <div className="flex gap-2 flex-wrap mb-4">
                {["ESP32", "IoT", "Sensors"].map((t, i) => (
                  <span key={i} className="text-xs bg-green-500/10 px-2 py-1 rounded text-green-400">
                    {t}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-green-400">
                View Details <ExternalLink size={16} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <SectionHeading title="Contact" />

        <div className="flex justify-center gap-6 mt-6">
          <a href={`mailto:${PERSONAL_INFO.email}`}><Mail /></a>
          <a href={PERSONAL_INFO.linkedin}><Linkedin /></a>
          <a href={`tel:${PERSONAL_INFO.phone}`}><Phone /></a>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Kaucikan G
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;