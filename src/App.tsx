import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, MessageSquare, ExternalLink, ChevronDown, Code2, University, Briefcase, Gamepad2, Trophy, Zap } from 'lucide-react';

/* You better not be looking for answers here... */

const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
  }));
};

const stars = generateStars(100);

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [helloText, setHelloText] = useState('');
  const [nameText, setNameText] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showFunky, setShowFunky] = useState(false);
  const [funkyPhase, setFunkyPhase] = useState(0);
  const [showBanana, setShowBanana] = useState(false);
  const [keyBuffer, setKeyBuffer] = useState('');

  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const gamesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sound1Ref = useRef<HTMLAudioElement | null>(null);
  const sound2Ref = useRef<HTMLAudioElement | null>(null);
  const sound3Ref = useRef<HTMLAudioElement | null>(null);
  const sound4Ref = useRef<HTMLAudioElement | null>(null);

  const [aboutVisible, setAboutVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [gamesVisible, setGamesVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    sound1Ref.current = new Audio('sounds/bahaha.mp3');
    sound2Ref.current = new Audio('sounds/alright.mp3');
    sound3Ref.current = new Audio('sounds/nya.mp3');
    sound4Ref.current = new Audio('sounds/yahaha.mp3');
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const newBuffer = (keyBuffer + key).slice(-6);
      setKeyBuffer(newBuffer);

      if (newBuffer.includes('funky') || newBuffer.includes('kong')) {
        setShowFunky(true);
        setFunkyPhase(1);
        sound1Ref.current?.play();
        setKeyBuffer('');
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [keyBuffer]);

  useEffect(() => {
    if (!showFunky) return;

    if (funkyPhase === 1) {
      const timer = setTimeout(() => {
        setFunkyPhase(2);
        sound2Ref.current?.play();
        setShowBanana(true);
      }, 3000);
      return () => clearTimeout(timer);
    }

    if (funkyPhase === 2) {
      const spinTimer = setTimeout(() => {
        setFunkyPhase(3);
        sound3Ref.current?.play();
      }, 1500);
      return () => clearTimeout(spinTimer);
    }

    if (funkyPhase === 3) {
      const continueTimer = setTimeout(() => {
        setFunkyPhase(4);
      }, 1000);
      return () => clearTimeout(continueTimer);
    }

    if (funkyPhase === 4) {
      const driveOffTimer = setTimeout(() => {
        setFunkyPhase(5);
        sound4Ref.current?.play();
      }, 1500);
      return () => clearTimeout(driveOffTimer);
    }

    if (funkyPhase === 5) {
      const timer = setTimeout(() => {
        setShowFunky(false);
        setShowBanana(false);
        setFunkyPhase(0);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [funkyPhase, showFunky]);

  const smoothScrollTo = (elementRef: React.RefObject<HTMLElement | null>) => {
    elementRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setShowScrollTop(currentScrollY > 500);
    };

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

  useEffect(() => {
    const helloFullText = "hey! my name is";
    const nameFullText = "AYAAN";
    let helloIndex = 0;
    let nameIndex = 0;

    const helloInterval = setInterval(() => {
      if (helloIndex < helloFullText.length) {
        setHelloText(helloFullText.slice(0, helloIndex + 1));
        helloIndex++;
      } else {
        clearInterval(helloInterval);
        const nameInterval = setInterval(() => {
          if (nameIndex < nameFullText.length) {
            setNameText(nameFullText.slice(0, nameIndex + 1));
            nameIndex++;
          } else {
            clearInterval(nameInterval);
            setDisplayName(nameFullText);
            setTimeout(() => setShowSubtitle(true), 200);
            setTimeout(() => setShowButtons(true), 400);
          }
        }, 100);
      }
    }, 80);

    return () => clearInterval(helloInterval);
  }, []);

  useEffect(() => {
    const names = ['AYAAN', 'CHEXEDY'];
    let currentIndex = 0;
    let rotationInterval: number | null = null;

    const glitchOnce = (finalName: string) => {
      setIsGlitching(true);

      let flickers = 0;
      const maxFlickers = 6;

      const glitchInterval = window.setInterval(() => {
        if (flickers < maxFlickers) {
          setDisplayName(names[Math.floor(Math.random() * names.length)]);
          flickers++;
        } else {
          clearInterval(glitchInterval);
          setDisplayName(finalName);
          setIsGlitching(false);
        }
      }, 50);
    };

    const initialTimeout = window.setTimeout(() => {
      glitchOnce('AYAAN');

      window.setTimeout(() => {
        rotationInterval = window.setInterval(() => {
          currentIndex = (currentIndex + 1) % names.length;
          glitchOnce(names[currentIndex]);
        }, 5000);
      }, 400);
    }, 3000);

    return () => {
      clearTimeout(initialTimeout);
      if (rotationInterval) clearInterval(rotationInterval);
    };
  }, []);

  useEffect(() => {
    const handleScrollAnimation = () => {
      const scrollPos = window.scrollY + window.innerHeight;

      if (aboutRef.current && scrollPos > aboutRef.current.offsetTop + 100) {
        setAboutVisible(true);
      }
      if (experienceRef.current && scrollPos > experienceRef.current.offsetTop + 100) {
        setExperienceVisible(true);
      }
      if (projectsRef.current && scrollPos > projectsRef.current.offsetTop + 100) {
        setProjectsVisible(true);
      }
      if (gamesRef.current && scrollPos > gamesRef.current.offsetTop + 100) {
        setGamesVisible(true);
      }
      if (contactRef.current && scrollPos > contactRef.current.offsetTop + 100) {
        setContactVisible(true);
      }
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();

    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  const experience = [
    {
      role: "Software Engineer Intern",
      org: "Auria Space",
      date: "June 2026 – Present",
      points: [
        "Working on scheduling software used by satellites to ensure proper accuracy and safety during critical missions"
      ]
    },
    {
      role: "Project Mentor",
      org: "Creation of Games Society (COGS)",
      date: "January 2026 – Present",
      points: [
        "Mentoring 3–4 student developers through early-stage game projects, guiding architecture decisions and core gameplay system design"
      ]
    },
    {
      role: "IT & AI Automation Extern",
      org: "Rutgers MSA & ICNA-NJ",
      date: "April 2026 – June 2026",
      points: [
        "Developing AI-powered workflows to scale Islamic awareness and community outreach on social media platforms during the 2026 FIFA World Cup"
      ]
    }
  ];

  const projects = [
    {
      title: "Where Is NJ Transit?",
      description: "A live NJ Transit rail map with real-time location visualization and station departure information. Automated 1,440+ daily data ingestions maintaining 60-second location accuracy across the entire rail network.",
      tech: ["JavaScript", "Cloudflare", "SQL", "REST APIs"],
      image: "projects/transit.png",
      link: "https://transit.chexedy.com/"
    },
    {
      title: "FoodLoop",
      description: "Winner of the Climate Track @ the Rutgers MTC Hackathon. A real-time food redistribution and prevention platform that ensures surplus food is used at its highest value before becoming waste.",
      tech: ["TypeScript", "React", "Python"],
      image: "projects/foodloop.png",
      link: "https://foodloop-foodloop.vercel.app/"
    },
    {
      title: "RU Water Fountains",
      description: "A map that displays water fountains across the Rutgers-New Brunswick campus. Rutgers students can use their ScarletMail to submit a location and description of a fountain that does not appear on the map, and the request will be reviewed and approved by a site admin. Existing foundations can be edited if they are inaccurate.",
      tech: ["TypeScript", "React", "SQL", "Cloudflare"],
      image: "projects/fountains.png",
      link: "https://fountains.chexedy.com/"
    },
    // {
    //   title: "Money In DC",
    //   description: "WIP - A visual and educational overview of campaign finance and lobbying activity. By bridging official records with a transparent classification engine, it aims to make complex financial data accessible and understandable to everyone.",
    //   tech: ["Python", "TypeScript", "React", "SQL"],
    //   image: "projects/moneyindc.png",
    //   link: "https://moneyindc.chexedy.com/"
    // },
  ];

  const games = [
    {
      title: "Fishing Frenzy",
      description: "A fast-paced two-player fishing battle where competitors race against a 60-second clock to catch the most fish. Originally developed for Rutgers COGS as a 2-4 player controller-based game, this custom version features has two-player gameplay with keyboard controls for head-to-head action.",
      status: "Complete",
      tech: ["Godot Engine", "GDScript", "Aseprite"],
      features: ["2D", "Action", "Two-Player Competitive", "Local Multiplayer"],
      image: "games/fishingfrenzy.png",
      link: "https://chexedy.itch.io/fishing-frenzy",
      progress: 100
    },
    {

      title: "The Dead Shall Feast",
      description: "A visual novel on eight people who are trapped in Hell and compete for a chance to live again. I did the coding with a few others and helped implement the UI. As of now only one ending is done, the rest are in development.",
      status: "WIP",
      tech: ["RenPy", "Python", "PhotoShop"],
      features: ["2D", "Visual Novel", "Choose Your Own Adventure"],
      image: "games/tdsf.png",
      link: "https://kapeepa.itch.io/the-dead-shall-feast",
      progress: 30
    }
  ];

  const skills = {
    languages: ["Java", "Python", "C", "C++", "C#", "Lua", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
    frameworks: ["React", "Node.js", "Next.js", "Django", "GitHub", "Docker", "AWS", "Cloudflare", "MongoDB", "Linux"],
    concepts: ["Full-Stack Development", "System Design", "Databases", "Machine Learning"]
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans overflow-x-hidden">
      {showFunky && (
        <>
          <style>{`
            @keyframes funky-phase1 {
              from {
                left: -10%;
              }
              to {
                left: 100%;
              }
            }
            
            @keyframes funky-phase2-first {
              from {
                left: 100%;
                top: 80%;
              }
              to {
                left: 50%;
                top: 55%;
              }
            }
            
            @keyframes funky-phase3-continue {
              from {
                left: 50%;
                top: 55%;
              }
              to {
                left: -10%;
                top: 30%;
              }
            }
            
            @keyframes funky-spin {
              from {
                transform: translate(-50%, -50%) rotate(0deg);
              }
              to {
                transform: translate(-50%, -50%) rotate(360deg);
              }
            }
            
            @keyframes funky-phase5 {
              from {
                left: -10%;
                top: 30%;
              }
              to {
                left: 130%;
                top: 30%;
              }
            }
            
            @keyframes banana-drop {
              from {
                top: -10%;
                opacity: 0;
              }
              25% {
                opacity: 1;
              }
              to {
                top: 55%;
                opacity: 1;
              }
            }
            
            @keyframes banana-fade {
              from {
                opacity: 1;
              }
              to {
                opacity: 0;
              }
            }
          `}</style>

          <div
            className="fixed z-[9999] pointer-events-none"
            style={{
              width: '200px',
              height: '200px',
              top: funkyPhase === 1 ? '80%' : funkyPhase === 2 ? '55%' : funkyPhase === 3 ? '55%' : '30%',
              left: funkyPhase === 1 ? '-10%' : funkyPhase === 2 ? '50%' : funkyPhase === 3 ? '50%' : funkyPhase === 4 ? '-10%' : '-10%',
              animation:
                funkyPhase === 1 ? 'funky-phase1 3s linear forwards' :
                  funkyPhase === 2 ? 'funky-phase2-first 1.5s linear forwards' :
                    funkyPhase === 3 ? 'funky-spin 1s linear forwards' :
                      funkyPhase === 4 ? 'funky-phase3-continue 1.5s linear forwards' :
                        funkyPhase === 5 ? 'funky-phase5 3s linear forwards' : 'none',
              transform: `translate(-50%, -50%) ${funkyPhase === 1 || funkyPhase === 5 ? 'scaleX(-1)' : ''}`,
            }}
          >
            <img
              src="assets/funky.png"
              alt="Funky Kong"
              className="w-full h-full object-contain"
            />
          </div>

          {showBanana && funkyPhase !== 4 && funkyPhase !== 5 && (
            <div
              className="fixed z-[9998] pointer-events-none"
              style={{
                width: '80px',
                height: '80px',
                left: '50%',
                top: funkyPhase === 2 ? '-10%' : '55%',
                animation: funkyPhase === 2 ? 'banana-drop 1.5s ease-out forwards' : funkyPhase === 3 ? 'banana-fade 3s ease-out forwards' : 'none',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <img
                src="assets/banana.png"
                alt="Banana"
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </>
      )}

      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black" />

        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              opacity: 0.4 + Math.random() * 0.4
            }}
          />
        ))}

        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(30, 30, 40, 0.8) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(20, 20, 30, 0.6) 0%, transparent 50%)'
          }}
        />

        <div className="absolute bottom-0 w-full h-96">
          <div className="absolute bottom-0 left-0 w-32 h-64 bg-zinc-900 opacity-60" style={{ clipPath: 'polygon(10% 0%, 90% 0%, 85% 100%, 15% 100%)' }} />
          <div className="absolute bottom-0 left-24 w-24 h-48 bg-zinc-900 opacity-50" style={{ clipPath: 'polygon(5% 0%, 95% 0%, 90% 100%, 10% 100%)' }} />
          <div className="absolute bottom-0 left-40 w-40 h-72 bg-zinc-900 opacity-70" style={{ clipPath: 'polygon(8% 0%, 92% 0%, 88% 100%, 12% 100%)' }} />
          <div className="absolute bottom-0 left-72 w-28 h-56 bg-zinc-900 opacity-55" style={{ clipPath: 'polygon(12% 0%, 88% 0%, 85% 100%, 15% 100%)' }} />
        </div>

        <div className="absolute bottom-0 w-full h-screen">
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

        <div className="absolute bottom-0 w-full h-screen">
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
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 leading-relaxed max-w-4xl font-light mb-2">
              {helloText}
              {helloText && helloText.length < "hello : ) i'm".length && <span className="animate-pulse">|</span>}
            </p>
            <h1
              onMouseEnter={() => setIsGlitching(false)}
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 sm:mb-8 tracking-tighter leading-none relative ${isGlitching ? 'glitch-active' : ''
                }`}
            >
              <style>{`
                .glitch-active {
                  animation: glitch-shake 0.3s infinite;
                }
                
                .glitch-active::before {
                  content: '${displayName}';
                  position: absolute;
                  top: 0;
                  left: 2px;
                  width: 100%;
                  height: 100%;
                  background: linear-gradient(to bottom, #ffffff, #888888);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  opacity: 0.8;
                  animation: glitch-left 0.15s infinite;
                }
                
                .glitch-active::after {
                  content: '${displayName}';
                  position: absolute;
                  top: 0;
                  left: -2px;
                  width: 100%;
                  height: 100%;
                  background: linear-gradient(to bottom, #ffffff, #888888);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  opacity: 0.8;
                  animation: glitch-right 0.15s infinite;
                }
                
                @keyframes glitch-shake {
                  0% { transform: translate(0); }
                  20% { transform: translate(-1px, 1px); }
                  40% { transform: translate(1px, -1px); }
                  60% { transform: translate(-1px, -1px); }
                  80% { transform: translate(1px, 1px); }
                  100% { transform: translate(0); }
                }
                
                @keyframes glitch-left {
                  0% { 
                    clip-path: inset(40% 0 61% 0);
                    transform: translate(-3px, 0);
                  }
                  20% {
                    clip-path: inset(92% 0 1% 0);
                    transform: translate(3px, 0);
                  }
                  40% {
                    clip-path: inset(43% 0 1% 0);
                    transform: translate(-3px, 0);
                  }
                  60% {
                    clip-path: inset(25% 0 58% 0);
                    transform: translate(3px, 0);
                  }
                  80% {
                    clip-path: inset(54% 0 7% 0);
                    transform: translate(-3px, 0);
                  }
                  100% {
                    clip-path: inset(58% 0 43% 0);
                    transform: translate(0);
                  }
                }
                
                @keyframes glitch-right {
                  0% { 
                    clip-path: inset(25% 0 58% 0);
                    transform: translate(3px, 0);
                  }
                  20% {
                    clip-path: inset(54% 0 7% 0);
                    transform: translate(-3px, 0);
                  }
                  40% {
                    clip-path: inset(58% 0 43% 0);
                    transform: translate(3px, 0);
                  }
                  60% {
                    clip-path: inset(40% 0 61% 0);
                    transform: translate(-3px, 0);
                  }
                  80% {
                    clip-path: inset(92% 0 1% 0);
                    transform: translate(3px, 0);
                  }
                  100% {
                    clip-path: inset(43% 0 1% 0);
                    transform: translate(0);
                  }
                }
              `}</style>
              <span className="bg-gradient-to-b from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
                {displayName || nameText}
                {nameText && nameText.length < "AYAAN".length && <span className="animate-pulse text-zinc-100">|</span>}
              </span>
            </h1>
            <div
              className={`mb-8 text-zinc-500 lowercase tracking-[0.4em] text-xs font-semibold transition-opacity duration-500 ${showSubtitle ? 'opacity-100' : 'opacity-0'}`}
            >
              CS Student • Software Developer • LeetCode Victim
            </div>
            <div className={`flex flex-col sm:flex-row gap-4 sm:gap-8 transition-opacity duration-500 ${showButtons ? 'opacity-100' : 'opacity-0'}`}>
              <button
                onClick={() => smoothScrollTo(experienceRef)}
                className="px-8 sm:px-10 py-4 sm:py-5 bg-zinc-100 text-black hover:bg-zinc-300 transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-2xl text-center cursor-pointer"
              >
                Experience
              </button>
              <button
                onClick={() => smoothScrollTo(projectsRef)}
                className="px-8 sm:px-10 py-4 sm:py-5 bg-zinc-100 text-black hover:bg-zinc-300 transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-2xl text-center cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => smoothScrollTo(contactRef)}
                className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-zinc-100 hover:bg-zinc-100 hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-bold text-center cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-zinc-600" />
          </div>
        </section>

        <section
          ref={aboutRef}
          id="about"
          className={`min-h-screen py-20 sm:py-24 md:py-32 px-6 bg-black/60 backdrop-blur-sm transition-all duration-1000 ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 sm:mb-16 md:mb-20 tracking-tighter">
              <span className="text-zinc-700 font-mono">01.</span> ABOUT
            </h2>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
              <div className="space-y-6 md:space-y-8">
                <p className="text-zinc-400 text-base md:text-lg lg:text-xl leading-relaxed font-light">
                  Undergraduate CS student building full-stack applications and data-driven tools with real-time functionality. Passionate about AI, machine learning, and intelligent systems to create smarter, more impactful applications. In my free time, I like playing around with game development and design.
                </p>

                <div className="flex flex-col gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <University className="w-6 h-6 text-zinc-600" />
                    <span className="text-zinc-500 font-mono text-sm">Rutgers University – New Brunswick</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code2 className="w-6 h-6 text-zinc-600" />
                    <span className="text-zinc-500 font-mono text-sm">Bachelor of Science in Computer Science</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-zinc-600" />
                    <span className="text-zinc-500 font-mono text-sm">Software Engineer Intern at Auria Space</span>
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
                    <h4 className="text-sm font-semibold text-zinc-500 mb-3 tracking-wider">FRAMEWORKS / TOOLS</h4>
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

                  <div>
                    <h4 className="text-sm font-semibold text-zinc-500 mb-3 tracking-wider">CONCEPTS</h4>
                    <div className="flex flex-wrap gap-3">
                      {skills.concepts.map((skill) => (
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

        <section
          ref={experienceRef}
          id="experience"
          className={`py-20 sm:py-24 md:py-32 px-6 bg-black/40 backdrop-blur-sm transition-all duration-1000 ${experienceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
        >
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

        <section
          ref={projectsRef}
          id="projects"
          className={`min-h-screen py-20 sm:py-24 md:py-32 px-6 transition-all duration-1000 ${projectsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
        >
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

        <section
          ref={gamesRef}
          id="games"
          className={`min-h-screen py-20 sm:py-24 md:py-32 px-6 transition-all duration-1000 ${gamesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 sm:mb-16 md:mb-20 tracking-tighter">
              <span className="text-zinc-700 font-mono">04.</span> GAMES
            </h2>

            {/* <p className="bg-black p-3 rounded-lg text-zinc-400 text-lg md:text-xl leading-relaxed font-light mb-12">
              I love working on games! Unfortunately, the industry is cooked : /
            </p> */}

            <div className="grid lg:grid-cols-2 gap-8">
              {games.map((game, idx) => (
                <a
                  key={idx}
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden block"
                  style={{
                    animationDelay: `${idx * 200}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/5 via-transparent to-zinc-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

                  <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-2 border-zinc-800 group-hover:border-zinc-500 backdrop-blur-sm transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-500/20 to-transparent animate-pulse" style={{ height: '200%', animation: 'scan 3s linear infinite' }} />
                    </div>

                    <style>{`
                      @keyframes scan {
                        0% { transform: translateY(-100%); }
                        100% { transform: translateY(100%); }
                      }
                    `}</style>

                    <div className="relative aspect-[16/9] overflow-hidden bg-black">
                      <div className="absolute via-transparent to-transparent z-10" />
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full group-hover:scale-110 transition-all duration-700"
                      />

                      <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-zinc-700">
                        <Zap className={`w-4 h-4 ${game.status === 'In Dev' ? 'text-yellow-500 animate-pulse' : 'text-yellow-500'}`} />
                        <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">{game.status}</span>
                      </div>
                    </div>

                    <div className="p-8 relative z-20">
                      <h3 className="text-2xl md:text-3xl font-black text-zinc-100 mb-3 group-hover:text-zinc-300 transition-colors tracking-tight">
                        {game.title}
                      </h3>

                      <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 font-light">
                        {game.description}
                      </p>

                      {game.progress > 0 && (
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Development Progress</span>
                            <span className="text-xs font-mono text-zinc-400">{game.progress}%</span>
                          </div>
                          <div className="h-2 bg-zinc-800 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-zinc-500 to-zinc-400 transition-all duration-1000"
                              style={{ width: `${game.progress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <div className="mb-6">
                        <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Trophy className="w-4 h-4" />
                          Key Features
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {game.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-3 py-1.5 bg-zinc-900/80 border border-zinc-700 text-zinc-400 text-xs font-mono hover:border-zinc-500 hover:bg-zinc-800/80 transition-all"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {game.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-black/60 border border-zinc-700 text-zinc-400 text-xs font-mono uppercase tracking-wider hover:border-zinc-500 hover:text-zinc-300 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={contactRef}
          id="contact"
          className={`min-h-screen py-20 sm:py-24 md:py-32 px-6 bg-black/60 backdrop-blur-sm transition-all duration-1000 ${contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 sm:mb-16 md:mb-20 tracking-tighter">
              <span className="text-zinc-700 font-mono">05.</span> CONTACT
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light max-w-xl">
                  You can contact me through any of the platforms below. I'm always open to discussing new projects, opportunities, or just connecting with like-minded individuals.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    Icon: Linkedin,
                    label: 'LinkedIn',
                    value: 'linkedin.com/in/ayaan7m',
                    href: 'https://linkedin.com/in/ayaan7m',
                  },
                  {
                    Icon: Github,
                    label: 'GitHub',
                    value: 'github.com/chexedy',
                    href: 'https://github.com/chexedy',
                  },
                  {
                    Icon: MessageSquare,
                    label: 'Discord',
                    value: 'discord.com/users/chexedy',
                    href: 'https://discord.com/users/1089029798745079918',
                  }
                ].map(({ Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 border border-zinc-800 hover:border-zinc-400 bg-black/70 px-6 py-4 transition-all group"
                  >
                    <Icon className="w-6 h-6 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                    <div className="flex flex-col">
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                        {label}
                      </span>
                      <span className="text-zinc-300 font-mono">
                        {value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-16 px-6 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-zinc-600 text-sm font-mono italic mb-2">
              psst. there's an easter egg hidden, and to view it you must type out the answer to this question:
            </p>
            <p className="text-zinc-500 text-base font-mono">
              who is the greatest playable mario kart character?
            </p>
          </div>
        </section> */}

        <footer className="border-t border-zinc-900 py-12 px-6 text-center text-zinc-700 bg-black/80 backdrop-blur-sm">
          <p className="text-sm font-mono tracking-wider">© 2026 chexedy incorporated (Real) | Built with React, TypeScript & Tailwind CSS</p>
        </footer>

        <button
          onClick={scrollToTop}
          className={`cursor-pointer fixed bottom-8 right-8 w-12 h-12 bg-zinc-100 hover:bg-zinc-300 text-black rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            }`}
          aria-label="Scroll to top"
        >
          <ChevronDown className="w-6 h-6 rotate-180" />
        </button>
      </div>
    </div>
  );
}

export default App;