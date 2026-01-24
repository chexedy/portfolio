import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, Briefcase } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Where Is NJ Transit?",
      description: "Full-stack live train tracking application serving 2,500+ unique visitors with real-time NJ Transit location visualization. Automated 1,440+ daily data ingestions maintaining 60-second location accuracy across the entire rail network.",
      tech: ["JavaScript", "Cloudflare Workers", "SQL", "REST APIs"],
      image: "images/transit.png",
      link: "https://transit.chexedy.com/"
    },
    {
      title: "Money In DC",
      description: "WIP - A visual and educational overview of campaign finance and lobbying activity. By bridging official records with a transparent classification engine, it aims to make complex financial data accessible and understandable to everyone.",
      tech: ["Python", "TypeScript", "React", "SQL"],
      image: "images/moneyindc.png",
      link: "https://moneyindc.chexedy.com/"
    },
    {
      title: "RU Water Fountains",
      description: "Campus resource tool achieving sub-100ms response times with TypeScript-based React frontend deployed on Cloudflare Workers. Features scalable crowdsourced data pipeline and mobile-first responsive UI for students navigating between campuses.",
      tech: ["TypeScript", "React", "SQL", "Cloudflare Workers"],
      image: "images/fountains.png",
      link: "https://fountains.chexedy.com/"
    }
  ];

  const skills = {
    languages: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
    frameworks: ["React", "Node.js", "Git", "AWS", "Cloudflare Workers", "SQLite", "REST APIs"],
    focus: ["Full-Stack Development", "Real-Time Systems", "Databases", "UI/UX Implementation"]
  };

  const experience = [
    {
      role: "Developer",
      org: "Rutgers Minecraft Server",
      date: "September 2025 – Present",
      points: [
        "Architected high-availability REST API with full CRUD support for 1,000+ player community",
        "Engineered real-time event processing system handling 1,000+ daily game events",
        "Optimized data retrieval reducing API response latency by 30% during peak traffic",
        "Improved system reliability ensuring 99.9% uptime during server-wide events"
      ]
    },
    {
      role: "Project Mentor",
      org: "Creation of Games Society (COGS)",
      date: "January 2026 – Present",
      points: [
        "Mentoring student teams on game architecture using Godot, Unity, and Unreal Engine",
        "Streamlining project workflows by establishing structured debugging and version control practices",
        "Partnering with executive board to design technical workshops and incentives"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans overflow-x-hidden">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black" />

        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(30, 30, 40, 0.8) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(20, 20, 30, 0.6) 0%, transparent 50%)'
          }}
        />

        <div
          className="absolute bottom-0 w-full h-96"
        >
          <div className="absolute bottom-0 left-0 w-32 h-64 bg-zinc-900 opacity-60" style={{ clipPath: 'polygon(10% 0%, 90% 0%, 85% 100%, 15% 100%)' }} />
          <div className="absolute bottom-0 left-24 w-24 h-48 bg-zinc-900 opacity-50" style={{ clipPath: 'polygon(5% 0%, 95% 0%, 90% 100%, 10% 100%)' }} />
          <div className="absolute bottom-0 left-40 w-40 h-72 bg-zinc-900 opacity-70" style={{ clipPath: 'polygon(8% 0%, 92% 0%, 88% 100%, 12% 100%)' }} />
          <div className="absolute bottom-0 left-72 w-28 h-56 bg-zinc-900 opacity-55" style={{ clipPath: 'polygon(12% 0%, 88% 0%, 85% 100%, 15% 100%)' }} />
        </div>

        <div
          className="absolute bottom-0 w-full h-screen"
        >
          <div className="absolute bottom-0 right-96 w-48 h-96 bg-zinc-800 opacity-80 shadow-2xl" style={{ clipPath: 'polygon(5% 0%, 95% 0%, 92% 100%, 8% 100%)' }}>
            <div className="absolute top-10 left-4 w-2 h-2 bg-amber-400 opacity-60 animate-pulse" />
            <div className="absolute top-20 left-8 w-2 h-2 bg-amber-400 opacity-50" />
            <div className="absolute top-32 left-6 w-2 h-2 bg-amber-400 opacity-70 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          <div className="absolute bottom-0 right-52 w-56 h-128 bg-zinc-800 opacity-90 shadow-2xl" style={{ clipPath: 'polygon(8% 0%, 92% 0%, 90% 100%, 10% 100%)' }}>
            <div className="absolute top-16 left-8 w-2 h-2 bg-amber-300 opacity-70 animate-pulse" />
            <div className="absolute top-28 left-12 w-2 h-2 bg-amber-300 opacity-60" />
            <div className="absolute top-40 left-10 w-2 h-2 bg-amber-300 opacity-80 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-56 left-14 w-2 h-2 bg-red-500 opacity-60 animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>

          <div className="absolute bottom-0 right-0 w-64 h-full bg-zinc-800 opacity-85 shadow-2xl" style={{ clipPath: 'polygon(10% 0%, 90% 0%, 88% 100%, 12% 100%)' }}>
            <div className="absolute top-24 left-12 w-2 h-2 bg-amber-400 opacity-60" />
            <div className="absolute top-40 left-16 w-2 h-2 bg-amber-400 opacity-70 animate-pulse" style={{ animationDelay: '0.7s' }} />
            <div className="absolute top-64 left-14 w-2 h-2 bg-red-600 opacity-80 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="absolute top-80 left-18 w-2 h-2 bg-amber-300 opacity-60" />
          </div>
        </div>

        <div
          className="absolute bottom-0 w-full h-screen"
        >
          <div className="absolute bottom-0 left-1/4 w-72 h-screen bg-zinc-900 shadow-2xl" style={{ clipPath: 'polygon(12% 0%, 88% 0%, 85% 100%, 15% 100%)' }}>
            <div className="absolute top-32 left-16 w-3 h-3 bg-amber-500 opacity-80 animate-pulse" />
            <div className="absolute top-48 left-20 w-3 h-3 bg-amber-500 opacity-60" />
            <div className="absolute top-72 left-18 w-3 h-3 bg-red-500 opacity-70 animate-pulse" style={{ animationDelay: '0.4s' }} />
            <div className="absolute top-96 left-22 w-3 h-3 bg-amber-500 opacity-80" />
          </div>
        </div>

        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(200, 200, 220, 0.15), transparent 70%)`
          }}
        />

        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60" />
      </div>

      <div className="relative z-10">
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="max-w-7xl mx-auto w-full">
            <div className="mb-8 text-zinc-500 lowercase tracking-[0.4em] text-xs font-semibold">CS Student • Software Developer</div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 sm:mb-8 tracking-tighter leading-none">
              <span className="bg-gradient-to-b from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
                AYAAN M
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 mb-10 sm:mb-12 md:mb-16 leading-relaxed max-w-4xl font-light">
              Building scalable systems and applications with real-world impact. Looking for an internship to gain hands-on experience and advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <a href="#projects" className="px-8 sm:px-10 py-4 sm:py-5 bg-zinc-100 text-black hover:bg-zinc-300 transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-2xl text-center">
                View Projects
              </a>
              <a href="#contact" className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-zinc-100 hover:bg-zinc-100 hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-bold text-center">
                Contact
              </a>
            </div>
          </div>
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-zinc-600" />
          </div>
        </section>

        <section id="about" className="min-h-screen py-20 sm:py-24 md:py-32 px-6 bg-black/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 sm:mb-16 md:mb-20 tracking-tighter">
              <span className="text-zinc-700 font-mono">01.</span> ABOUT
            </h2>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
              <div className="space-y-6 md:space-y-8">
                <p className="text-zinc-400 text-base md:text-lg lg:text-xl leading-relaxed font-light">
                  Computer Science student at Rutgers University focused on systems, data, and practical software.
                </p>
                <p className="text-zinc-400 text-base md:text-lg lg:text-xl leading-relaxed font-light">
                  I build full-stack projects, experiment with real-time systems, and learn by shipping.
                </p>

                <div className="flex flex-col gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Code2 className="w-6 h-6 text-zinc-600" />
                    <span className="text-zinc-500 font-mono text-sm">Rutgers University – B.S. in Computer Science</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-zinc-600" />
                    <span className="text-zinc-500 font-mono text-sm">Open to Internships & Opportunities</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-8 text-zinc-300 tracking-tight">TECHNICAL SKILLS</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-500 mb-3 tracking-wider">LANGUAGES</h4>
                    <div className="flex flex-wrap gap-3">
                      {skills.languages.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-zinc-900/80 border border-zinc-700 hover:border-zinc-400 hover:bg-zinc-800/80 transition-all text-sm font-mono backdrop-blur-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-zinc-500 mb-3 tracking-wider">FRAMEWORKS & TOOLS</h4>
                    <div className="flex flex-wrap gap-3">
                      {skills.frameworks.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-zinc-900/80 border border-zinc-700 hover:border-zinc-400 hover:bg-zinc-800/80 transition-all text-sm font-mono backdrop-blur-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 sm:py-24 md:py-32 px-6 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 sm:mb-16 md:mb-20 tracking-tighter">
              <span className="text-zinc-700 font-mono">02.</span> EXPERIENCE
            </h2>
            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="border-l-2 border-zinc-800 pl-8 hover:border-zinc-500 transition-colors"
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-zinc-200 mb-2">{exp.role}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-zinc-500">
                      <span className="font-semibold">{exp.org}</span>
                      <span className="hidden md:block">•</span>
                      <span className="text-sm font-mono">{exp.date}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((point, pidx) => (
                      <li key={pidx} className="text-zinc-400 leading-relaxed flex gap-3">
                        <span className="text-zinc-700 mt-1.5">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen py-20 sm:py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 sm:mb-16 md:mb-20 tracking-tighter">
              <span className="text-zinc-700 font-mono">03.</span> PROJECTS
            </h2>
            <div className="space-y-16">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group border-2 border-zinc-800 hover:border-zinc-400 bg-black/80 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-0 md:items-center">
                    <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top opacity-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>

                    <div className="p-10 flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-3xl font-black text-zinc-100 group-hover:text-zinc-300 transition-colors tracking-tight">
                          {project.title}
                        </h3>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 ml-4"
                        >
                          <ExternalLink className="w-7 h-7 text-zinc-700 group-hover:text-zinc-300 transition-colors" />
                        </a>
                      </div>
                      <p className="text-zinc-400 text-lg mb-8 leading-relaxed font-light">{project.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-xs px-4 py-2 bg-zinc-900 text-zinc-400 border border-zinc-800 font-mono uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen py-20 sm:py-24 md:py-32 px-6 flex items-center bg-black/60 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto w-full text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 sm:mb-10 md:mb-12 tracking-tighter">
              <span className="text-zinc-700 font-mono">04.</span> CONTACT
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-12 sm:mb-14 md:mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Looking for internships, collaborations, or just want to connect? Let's build something together.
            </p>
            <div className="flex gap-6 justify-center mb-16">
              {[
                { Icon: Github, href: "https://github.com/chexedy", label: "Github" },
                { Icon: Linkedin, href: "https://linkedin.com/in/ayaan7m", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:am3990@rutgers.edu", label: "Email" }
              ].map(({ Icon, href, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 border-2 border-zinc-700 hover:border-zinc-300 hover:bg-zinc-900/50 flex items-center justify-center transition-all backdrop-blur-sm group"
                  aria-label={label}
                >
                  <Icon className="w-7 h-7 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                </a>
              ))}
            </div>
            <a
              href="mailto:am3990@rutgers.edu"
              className="inline-block text-xl text-zinc-500 hover:text-zinc-300 transition-colors font-mono"
            >
              am3990@rutgers.edu
            </a>
          </div>
        </section>

        <footer className="border-t border-zinc-900 py-12 px-6 text-center text-zinc-700 bg-black/80 backdrop-blur-sm">
          <p className="text-sm font-mono tracking-wider">© 2026 chexedy incorporated (Real) | Built with React, TypeScript & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

export default App;