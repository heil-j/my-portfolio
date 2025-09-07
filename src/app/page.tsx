"use client";

import type React from "react";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Element, animateScroll as scroll } from "react-scroll";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
// Components
import { Button } from "@/components/ui/button";
import { TimelineDemo } from "@/components/ui/TimelineDemo";
import { MaintenanceModal } from "@/components/ui/MaintenanceModal";
const World = dynamic(() => import("@/components/ui/globe").then(mod => mod.World), { ssr: false });

// Icons
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Code,
  Database,
  Terminal,
  Server,
  Cpu,
  Globe,
  Users,
  Menu,
  X,
} from "lucide-react";

// Config
import { globeConfig, connectionData } from "@/data/globeConfig";
import ContactForm from "@/components/ui/emailform";

const InterCode = Inter({ subsets: ["latin"] });

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Counter = ({
  end,
  duration = 2000,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    } else {
      controls.start("hidden");
      setCount(0);
    }
  }, [isInView, end, duration, controls]);

  return (
    <motion.span
      ref={countRef}
      initial="hidden"
      animate={controls}
      variants={fadeIn}
    >
      {count}
    </motion.span>
  );
};

const AnimatedSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Types
interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveDemoUrl: string;
  githubUrl: string;
}

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Constants
const SECTIONS = ["home", "about", "skills", "projects", "contact"] as const;
type Section = typeof SECTIONS[number];

const PROJECTS: Project[] = [
  {
    title: "Judo Training Cost Calculator",
    description: "Developed a fee calculation program for North Sussex Judo that automates monthly training cost calculations for athletes.",
    tech: ["Java"],
    image: "/images/Judo.png",
    liveDemoUrl: "#",
    githubUrl: "https://github.com/heil-j/Judo-Training-Cost-Calculator",
  },
  {
    title: "DoBu Martial Arts Website",
    description: "Created a responsive website for DoBu Martial Arts using HTML, CSS, and JavaScript to showcase their services and classes.",
    tech: ["Html", "CSS", "JavaScript"],
    image: "/images/Dobu.png",
    liveDemoUrl: "https://dobu-martial-artss.vercel.app/",
    githubUrl: "https://github.com/heil-j/dobu-martial-arts",
  },
  {
    title: "UI/UX Design for Boutiqa",
    description: "Designed a user-friendly e-commerce platform for Boutiqa, focusing on intuitive navigation and a seamless shopping experience.",
    tech: ["AxureRP", "Figma"],
    image: "/images/boutiqa.png",
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Design & Implement Database for Manzaneque Limited",
    description: "Designed and implemented a relational database using MySQL to manage inventory, sales, and customer data for Manzaneque Limited.",
    tech: ["Mysql"],
    image: "/images/DDI.png",
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Enomy Finance Full Stack Application",
    description: "Developed a full-stack finance management application using Thymeleaf and Spring Boot, enabling users to track expenses and budgets.",
    tech: ["Thymeleaf", "Spring Boot", "Tailwind", "Mysql"],
    image: "/images/fix-website-errors.png",
    liveDemoUrl: "#",
    githubUrl: "https://github.com/heil-j/enomy-finance",
  },
  {
    title: "Meals on Wheels Full stack Web Application",
    description: "Created a comprehensive meal delivery service application for Meals on Wheels using Thymeleaf and Spring Boot.",
    tech: ["Thymeleaf", "Spring Boot", "Tailwind", "Mysql"],
    image: "/images/mow.png",
    liveDemoUrl: "#",
    githubUrl: "https://github.com/heil-j/mow",
  },
  {
    title: "Jumpstart Website with AI Chatbot Integration",
    description: "Created a dynamic website for Jumpstart with integrated AI chatbot functionality using Laravel and React.",
    tech: ["Laravel", "React", "Tailwind", "Mysql"],
    image: "/images/jumpstart.png",
    liveDemoUrl: "#",
    githubUrl: "https://github.com/heil-j/jumpstart-ecommerce",
  },
];

const SKILLS: Skill[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Frontend Development",
    description: "React, Next.js, Bootstrap, Tailwind CSS, Vite",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend Development",
    description: "Node.js, Laravel, Spring Boot, Thymeleaf",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database Management",
    description: "MySQL",
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: "Tools & Platforms",
    description: "Git, GitHub, VS Code, Eclipse, Figma, AxureRP",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Programming Languages",
    description: "Java, Python, PHP, HTML, CSS, JavaScript",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Testing and QA",
    description: "Postman, JUnit, JMeter, Selenium",
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // New state for maintenance modal
  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);
  const [maintenanceProjectTitle, setMaintenanceProjectTitle] = useState<string | undefined>(undefined);

  // Memoized values for better performance
  const mobileCheck = useCallback(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  const scrollHandler = useCallback(() => {
    if (typeof window !== "undefined") {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of SECTIONS) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    mobileCheck();
    window.addEventListener('resize', mobileCheck);
    return () => window.removeEventListener('resize', mobileCheck);
  }, [mobileCheck]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollHandler);
      return () => window.removeEventListener("scroll", scrollHandler);
    }
  }, [scrollHandler]);

  const handleNavClick = useCallback((section: Section) => {
    setActiveSection(section);
    if (typeof window !== "undefined") {
      const element = document.getElementById(section);
      if (element) {
        scroll.scrollTo(element.offsetTop, {
          duration: 500,
          smooth: true,
        });
      }
    }
  }, []);

  const scrollToSection = useCallback((section: Section) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(section);
      if (element) {
        scroll.scrollTo(element.offsetTop, {
          duration: 500,
          smooth: true,
        });
        setIsMenuOpen(false);
      }
    }
  }, []);

  const handleProjectClick = useCallback((index: number) => {
    if (isMobile) {
      setActiveProject(activeProject === index ? null : index);
    }
  }, [isMobile, activeProject]);

  // New handler for link clicks that may be under maintenance
  const handleLinkClick = useCallback(
    (url: string, projectTitle: string) => (e: React.MouseEvent) => {
      if (url === "#") {
        e.preventDefault();
        setMaintenanceProjectTitle(projectTitle);
        setIsMaintenanceModalOpen(true);
      }
    },
    []
  );

  const closeMaintenanceModal = useCallback(() => {
    setIsMaintenanceModalOpen(false);
    setMaintenanceProjectTitle(undefined);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-md shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => handleNavClick("home")}>
            <div className="transform scale-125 md:scale-150">
              <Image
                src="/images/2_transparent_Craiyon.png"
                alt="Logo"
                width={70} // Original width
                height={70} // Original height
                className="object-contain max-h-full"
              />
            </div>
          </div>
          <div className="lg:hidden ml-auto">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
          <ul className="hidden lg:flex space-x-6 ml-auto">
            {SECTIONS.map((section) => (
              <li key={section}>
                <button
                  onClick={() => {
                    scrollToSection(section);
                    setIsMenuOpen(false);
                  }}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${activeSection === section ? "text-cyan-400" : "text-gray-400"
                    } hover:text-cyan-400`}
                >
                  {section.toUpperCase()}
                  {activeSection === section && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-cyan-400"
                      layoutId="underline"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black bg-opacity-90 backdrop-blur-md shadow-md mt-2"
          >
            <ul className="flex flex-col items-center space-y-4 p-4">
              {SECTIONS.map((section) => (
                <li key={section}>
                  <button
                    onClick={() => {
                      scrollToSection(section);
                      setIsMenuOpen(false);
                    }}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${activeSection === section ? "text-cyan-400" : "text-gray-400"
                      } hover:text-cyan-400`}
                  >
                    {section.toUpperCase()}
                    {activeSection === section && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-cyan-400"
                        layoutId="underline"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>

      {/* Home Section */}
      <Element name="home" id="home">
        <AnimatedSection className="relative min-h-screen flex items-center pt-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <span className="text-cyan-400 text-sm uppercase tracking-tighter">
                  Aspiring Software Engineer
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Neil Jay Mikheil
                  <br />
                  <span className="text-cyan-400">Gammad</span>
                </h1>
                <p className="text-gray-400 max-w-lg">
                  Aspiring software engineer from the Philippines, passionate
                  about creating innovative solutions and building technology
                  that makes a difference.
                </p>
                <motion.div variants={fadeIn} className="flex gap-4">
                  <Button
                    asChild
                    className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <a href="/Neil Jay Mikheil Gammad - Resume.pdf" download className="flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-cyan-500/20 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/15 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                    onClick={() => scrollToSection("projects")}
                  >
                    View Projects
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div variants={fadeInRight} className="relative">
                <div className="relative aspect-[4/5] md:aspect-[3/4] w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/FORMAL.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-cyan-500/20 pointer-events-none" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </Element>

{/* About Section */}
<Element name="about" id="about">
  <AnimatedSection className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.15),transparent_50%)]"/>
    <div className="container mx-auto px-4">
      {/* ✅ stack on mobile, side-by-side on lg */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Column */}
        <motion.div variants={fadeInLeft} className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            ABOUT <span className="text-cyan-400">ME</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            I am a passionate software engineering student from the
            Philippines, currently pursuing my degree at First City
            Providential College. My journey in technology began with a
            curiosity about how things work, which evolved into a deep
            passion for creating innovative solutions through code.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-gray-900/50 border border-cyan-500/20">
              <Terminal className="w-8 h-8 text-cyan-400 mb-2" />
              <h3 className="text-lg font-bold mb-2">Problem Solver</h3>
              <p className="text-gray-400 text-sm">
                Analytical thinker with a passion for solving complex
                challenges
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-900/50 border border-cyan-500/20">
              <Users className="w-8 h-8 text-cyan-400 mb-2" />
              <h3 className="text-lg font-bold mb-2">Team Player</h3>
              <p className="text-gray-400 text-sm">
                Excellent communicator and collaborative team member
              </p>
            </div>
          </div>
        </motion.div>

        {/* Globe Column */}
        <motion.div
          variants={fadeInRight}
          className="relative flex justify-center items-center"
        >
          {/* ✅ scale the globe responsively */}
          <div className="relative w-[220px] sm:w-[280px] md:w-[350px] lg:w-[400px] xl:w-[450px] aspect-square mx-auto rounded-full overflow-hidden bg-black shadow-lg flex items-center justify-center">
            <World globeConfig={globeConfig} data={connectionData} />
            <div className="absolute inset-0 pointer-events-none rounded-full" />
          </div>
        </motion.div>
      </div>
           
          </div>
        </AnimatedSection>
      </Element>

      {/* Skills Section */}
      <Element name="skills" id="skills">
        <AnimatedSection className="relative min-h-[200vh] py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_50%)] pointer-events-none" />
          <div className="container mx-auto px-4 mb-20">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <motion.h2 variants={fadeIn} className="text-4xl font-bold">
                  TECHNICAL <span className="text-cyan-400">EXPERTISE</span>
                </motion.h2>
                <motion.p variants={fadeIn} className="text-gray-400 max-w-2xl mx-auto">
                  Proficient in modern software development technologies and practices
                </motion.p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Code className="w-8 h-8" />,
                    title: "Frontend Development",
                    description: "React, Next.js, Bootstrap, Tailwind CSS, Vite",
                  },
                  {
                    icon: <Server className="w-8 h-8" />,
                    title: "Backend Development",
                    description: "Node.js, Laravel, Spring Boot, Thymeleaf",
                  },
                  {
                    icon: <Database className="w-8 h-8" />,
                    title: "Database Management",
                    description: "MySQL",
                  },
                  {
                    icon: <Terminal className="w-8 h-8" />,
                    title: "Tools & Platforms",
                    description: "Git, GitHub, VS Code, Eclipse, Figma, AxureRP",
                  },
                  {
                    icon: <Cpu className="w-8 h-8" />,
                    title: "Programming Languages",
                    description: "Java, Python, PHP, HTML, CSS, JavaScript",
                  },
                  {
                    icon: <Globe className="w-8 h-8" />,
                    title: "Testing and QA",
                    description: "Postman, JUnit, JMeter, Selenium",
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <div className="p-6 rounded-lg bg-gray-900/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-colors">
                      <div className="text-cyan-400 mb-4">{skill.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                      <p className="text-gray-400">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <TimelineDemo />
            </div>
          </div>
        </AnimatedSection>
      </Element>

      {/* Projects Section */}
      <Element name="projects" id="projects">
        <AnimatedSection className="py-20 bg-gray-900/50 relative z-0">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <motion.h2 variants={fadeIn} className="text-4xl font-bold">
                  FEATURED <span className="text-cyan-400">PROJECTS</span>
                </motion.h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  {
                    title: "Judo Training Cost Calculator",
                    description:
                      "Developed a fee calculation program for North Sussex Judo that automates monthly training cost calculations for athletes.",
                    tech: ["Java"],
                    image: "/images/Judo.png",
                    liveDemoUrl: "#",
                    githubUrl: "https://github.com/heil-j/Judo-Training-Cost-Calculator",
                  },
                  {
                    title: "DoBu Martial Arts Website",
                    description:
                      "Created a responsive website for DoBu Martial Arts using HTML, CSS, and JavaScript to showcase their services and classes.",
                    tech: ["Html", "CSS", "JavaScript"],
                    image: "/images/Dobu.png",
                    liveDemoUrl: "https://dobu-martial-artss.vercel.app/",
                    githubUrl: "https://github.com/heil-j/dobu-martial-arts",
                  },
                  {
                    title: "UI/UX Design for Boutiqa",
                    description:
                      "Designed a user-friendly e-commerce platform for Boutiqa, focusing on intuitive navigation and a seamless shopping experience.",
                    tech: ["AxureRP", "Figma"],
                    image: "/images/boutiqa.png",
                    liveDemoUrl: "#",
                    githubUrl: "#",
                  },
                  {
                    title: "Design & Implement Database for Manzaneque Limited",
                    description:
                      "Designed and implemented a relational database using MySQL to manage inventory, sales, and customer data for Manzaneque Limited.",
                    tech: ["Mysql"],
                    image: "/images/DDI.png",
                    liveDemoUrl: "#",
                    githubUrl: "#",
                  },
                  {
                    title: "Enomy Finance Full Stack Application",
                    description:
                      "Developed a full-stack finance management application using Thmyeleaf and Spring Boot, enabling users to track expenses and budgets.",
                    tech: ["Thymeleaf", "Spring Boot", "Tailwind", "Mysql"],
                    image: "/images/fix-website-errors.png",
                    liveDemoUrl: "#",
                    githubUrl: "https://github.com/heil-j/enomy-finance",
                  },
                  {
                    title: "Meals on Wheels Full stack Web Application",
                    description:
                      "Created a comprehensive meal delivery service application for Meals on Wheels using Thymeleaf and Spring Boot.",
                    tech: ["Thymeleaf", "Spring Boot", "Tailwind", "Mysql"],
                    image: "/images/mow.png",
                    liveDemoUrl: "#",
                    githubUrl: "https://github.com/heil-j/mow",
                  },
                  {
                    title: "Jumpstart Website with AI Chatbot Integration",
                    description:
                      "Created a dynamic website for Jumpstart with integrated AI chatbot functionality using Laravel and React.",
                    tech: ["Laravel", "React", "Tailwind", "Mysql"],
                    image: "/images/jumpstart.png",
                    liveDemoUrl: "#",
                    githubUrl: "https://github.com/heil-j/jumpstart-ecommerce",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={isMobile ? {} : { y: -8, scale: 1.02 }}
                    className="group relative"
                    onClick={() => {
                      if (isMobile) {
                        setActiveProject(activeProject === index ? null : index);
                      }
                    }}
                  >
                    <div className={`rounded-lg overflow-hidden bg-gray-900/50 border border-cyan-500/20 
                      ${isMobile ? '' : 'hover:border-cyan-500/50'} 
                      transition-all duration-300 transform 
                      ${isMobile ? '' : 'hover:shadow-2xl hover:shadow-cyan-500/20'}
                      ${isMobile && activeProject === index ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' : ''}`}
                    >
                      <div className="relative h-48 max-w-full">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className={`object-cover transition-transform duration-300 
                            ${isMobile ? '' : 'group-hover:scale-105'}
                            ${isMobile && activeProject === index ? 'scale-105' : ''}`}
                        />

                        <div className={`absolute inset-0 bg-cyan-500/20 transition-colors
                          ${isMobile ? '' : 'group-hover:bg-cyan-500/30'}
                          ${isMobile && activeProject === index ? 'bg-cyan-500/30' : ''}`} 
                        />
                        
                        {/* Action Buttons Overlay */}
                        <div className={`absolute -bottom-2 left-0 right-0 top-0 w-full h-[calc(100%+0.5rem)] 
                          flex items-center justify-center gap-4 transition-opacity duration-300 bg-black/70 z-10
                          ${isMobile ? 
                            (activeProject === index ? 'opacity-100' : 'opacity-0') : 
                            'opacity-0 group-hover:opacity-100'}`}
                        >
                          {project.liveDemoUrl && (
                            <Button
                              asChild
                              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                            >
                              <a
                                href={project.liveDemoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleLinkClick(project.liveDemoUrl, project.title)(e);
                                }}
                              >
                                Live Demo
                              </a>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button
                              variant="outline"
                              className="border-cyan-500 text-cyan-400 font-semibold transition-all duration-300 transform hover:scale-110 hover:bg-cyan-500/20 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/15 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                              asChild
                            >
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleLinkClick(project.githubUrl, project.title)(e);
                                }}
                              >
                                <Github className="w-5 h-5 mr-2" />
                                Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300
                          ${isMobile ? '' : 'group-hover:text-cyan-400'}
                          ${isMobile && activeProject === index ? 'text-cyan-400' : ''}`}
                        >
                          {project.title}
                        </h3>
                        <p className={`text-gray-400 mb-4 transition-colors duration-300
                          ${isMobile ? '' : 'group-hover:text-gray-300'}
                          ${isMobile && activeProject === index ? 'text-gray-300' : ''}`}
                        >
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            </div>
          </AnimatedSection>
        </Element>
      {/* Contact Section */}
      <Element name="contact" id="contact">
        <AnimatedSection className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-8">
                GET IN <span className="text-cyan-400">TOUCH</span>
              </motion.h2>
              <motion.div variants={fadeIn}>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </Element>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 Neil Jay Mikheil B. Gammad. All rights reserved.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Maintenance Modal */}
      <MaintenanceModal
        isOpen={isMaintenanceModalOpen}
        onClose={closeMaintenanceModal}
        projectTitle={maintenanceProjectTitle}
      />
    </div>
  );
}
