
import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Terminal, 
  ChevronRight, 
  ExternalLink,
  Code2,
  Calendar,
  Award
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCES, EDUCATION } from './constants';
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
            <span className="font-bold text-xl tracking-tight hidden sm:block">Kaucikan<span className="text-blue-500">.dev</span></span>
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
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Abstract Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-600 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Internships
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Architecting the <br />
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-indigo-500 bg-clip-text text-transparent">
              Backbone of the Web
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm a passionate Computer Science student specializing in building robust, 
            high-performance backend systems with Python, Node.js, and SQL.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              className="px-8 py-4 bg-white text-slate-950 rounded-2xl font-bold hover:bg-slate-200 transition-all flex items-center gap-2 shadow-xl shadow-white/10"
            >
              <Github className="w-5 h-5" /> View Github
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-slate-900 border border-slate-800 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              Contact Me <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats/Highlight Strip */}
      <section className="py-12 px-6 border-y border-slate-900 bg-slate-900/30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">2027</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest">Graduation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">8.4</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest">CGPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">5+</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest">Core Tech Stack</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">2+</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest">Major Projects</div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Tech Arsenal" 
            subtitle="The tools and technologies I use to bring ideas to life."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all hover:bg-slate-900"
              >
                <div className="p-3 bg-slate-800 rounded-2xl w-fit mb-6 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-medium border border-slate-700">
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Education */}
          <div>
            <SectionHeading title="Education" />
            <div className="relative pl-8 border-l-2 border-slate-800 space-y-12">
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                <div className="text-blue-400 font-mono text-sm mb-2">Class of {EDUCATION.graduation}</div>
                <h3 className="text-2xl font-bold mb-2 leading-snug">{EDUCATION.degree}</h3>
                <p className="text-slate-400 mb-4">{EDUCATION.institution}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl font-bold">
                  <Award className="w-4 h-4" /> CGPA: {EDUCATION.cgpa}
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div id="experience">
            <SectionHeading title="Experience" />
            <div className="space-y-6">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:bg-slate-900 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {exp.details.map((detail, j) => (
                      <li key={j} className="flex gap-3 text-slate-400 text-sm">
                        <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Featured Works" 
            subtitle="Deep dives into my engineering projects."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <div key={i} className="group relative rounded-[2.5rem] bg-slate-900 border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all">
                <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform">
                  {project.icon}
                </div>
                <div className="p-10">
                  <div className="flex gap-2 mb-6">
                    {project.tech.map((t, j) => (
                      <span key={j} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <div className="space-y-3 mb-8">
                    {project.description.map((d, k) => (
                      <p key={k} className="text-slate-400 text-sm leading-relaxed">
                        {d}
                      </p>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors">
                    View Project Details <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-slate-900/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 filter blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SectionHeading title="Let's Connect" subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-1">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <div className="text-sm font-bold mb-1">Email Me</div>
              <div className="text-xs text-slate-500 truncate">{PERSONAL_INFO.email}</div>
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-1">
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <div className="text-sm font-bold mb-1">LinkedIn</div>
              <div className="text-xs text-slate-500 truncate">Kaucikan G</div>
            </a>
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-1">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <div className="text-sm font-bold mb-1">Location</div>
              <div className="text-xs text-slate-500 truncate">{PERSONAL_INFO.location}</div>
            </div>
          </div>

          <div className="p-12 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-left shadow-2xl shadow-blue-900/20">
            <h3 className="text-3xl font-bold mb-6">Ready to build something great?</h3>
            <p className="text-blue-100 text-lg mb-10 max-w-xl">
              Currently seeking an entry-level backend position or internship. 
              Feel free to reach out directly or chat with my AI assistant for more details!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PERSONAL_INFO.phone}`} className="px-8 py-4 bg-white text-blue-700 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-100 transition-all">
                <Phone className="w-5 h-5" /> {PERSONAL_INFO.phone}
              </a>
              <button className="px-8 py-4 bg-blue-800/40 border border-white/20 rounded-2xl font-bold backdrop-blur-sm hover:bg-blue-800/60 transition-all">
                Get Resume PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-900 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} Kaucikan G.</p>
        </div>
      </footer>

      {/* AI Chat Bot Component */}
      <ChatWidget />
    </div>
  );
};

export default App;
