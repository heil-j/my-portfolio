"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import { Element, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { Menu, X } from "lucide-react";
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

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    scroll.scrollTo(document.getElementById(section)!.offsetTop, {
      duration: 500,
      smooth: true,
    });
  };

  const sections: string[] = ["home", "about", "skills", "projects", "contact"];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      scroll.scrollTo(element.offsetTop, {
        duration: 500,
        smooth: true,
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-md shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => handleNavClick("home")}>
            <div className="transform scale-150"> {/* Adjust the scale value as needed */}
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
            {sections.map((section: string) => (
              <li key={section}>
                <button
                  onClick={() => {
                    scrollToSection(section);
                    setIsMenuOpen(false);
                  }}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === section ? "text-cyan-400" : "text-gray-400"
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
              {sections.map((section: string) => (
                <li key={section}>
                  <button
                    onClick={() => {
                      scrollToSection(section);
                      setIsMenuOpen(false);
                    }}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      activeSection === section ? "text-cyan-400" : "text-gray-400"
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.15),transparent_50%)]" />

          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <span className="text-cyan-400 text-sm uppercase tracking-tighter">
                  Aspring Software Engineer
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
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-black">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                  >
                    View Projects
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div variants={fadeInRight} className="relative">
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/leo.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-cyan-500/20" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </Element>

      {/* About Section */}
      <Element name="about" id="about">
        <AnimatedSection className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_50%)]" />

          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="text-4xl font-bold">
                  ABOUT <span className="text-cyan-400">ME</span>
                </h2>
                <p className="text-gray-400">
                  I am a passionate software engineering student from the
                  Philippines, currently pursuing my degree at First City
                  Providential College. My journey in technology began with a
                  curiosity about how things work, which evolved into a deep
                  passion for creating innovative solutions through code.
                </p>
                <div className="grid grid-cols-2 gap-6">
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
              <motion.div variants={fadeInRight} className="relative">
                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="About Me"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-cyan-500/20" />
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </Element>

      {/* Skills Section */}
      <Element name="skills" id="skills">
        <AnimatedSection className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.15),transparent_50%)]" />

          <div className="container mx-auto px-4">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <motion.h2 variants={fadeIn} className="text-4xl font-bold">
                  TECHNICAL <span className="text-cyan-400">EXPERTISE</span>
                </motion.h2>
                <motion.p
                  variants={fadeIn}
                  className="text-gray-400 max-w-2xl mx-auto"
                >
                  Proficient in modern software development technologies and
                  practices
                </motion.p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Code className="w-8 h-8" />,
                    title: "Frontend Development",
                    description: "React.js, Next.js, TypeScript, Tailwind CSS",
                  },
                  {
                    icon: <Server className="w-8 h-8" />,
                    title: "Backend Development",
                    description: "Node.js, Python, RESTful APIs, GraphQL",
                  },
                  {
                    icon: <Database className="w-8 h-8" />,
                    title: "Database Management",
                    description: "MongoDB, PostgreSQL, MySQL",
                  },
                  {
                    icon: <Terminal className="w-8 h-8" />,
                    title: "DevOps",
                    description: "Git, Docker, CI/CD, Cloud Services",
                  },
                  {
                    icon: <Cpu className="w-8 h-8" />,
                    title: "Programming Languages",
                    description: "JavaScript, Python, Java, C++",
                  },
                  {
                    icon: <Globe className="w-8 h-8" />,
                    title: "Web Technologies",
                    description: "HTML5, CSS3, REST APIs, WebSockets",
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{ y: -5 }}
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
          </div>
        </AnimatedSection>
      </Element>

      {/* Projects Section */}
      <Element name="projects" id="projects">
        <AnimatedSection className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <motion.h2 variants={fadeIn} className="text-4xl font-bold">
                  FEATURED <span className="text-cyan-400">PROJECTS</span>
                </motion.h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "E-Commerce Platform",
                    description:
                      "Full-stack e-commerce solution with React, Node.js, and MongoDB",
                    tech: ["React", "Node.js", "MongoDB", "Redux"],
                    image: "/placeholder.svg?height=200&width=400",
                  },
                  {
                    title: "Task Management App",
                    description:
                      "Real-time task management application with collaborative features",
                    tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
                    image: "/placeholder.svg?height=200&width=400",
                  },
                  {
                    title: "Social Media Dashboard",
                    description:
                      "Analytics dashboard for social media metrics and engagement",
                    tech: ["Vue.js", "Python", "Django", "Chart.js"],
                    image: "/placeholder.svg?height=200&width=400",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="rounded-lg overflow-hidden bg-gray-900/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-colors">
                      <div className="relative h-48">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />

                        <div className="absolute inset-0 bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
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
                <form className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-gray-900/50 border border-cyan-500/20 rounded-lg p-4 focus:border-cyan-500 transition-colors"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-gray-900/50 border border-cyan-500/20 rounded-lg p-4 focus:border-cyan-500 transition-colors"
                  />

                  <textarea
                    placeholder="Message"
                    className="md:col-span-2 bg-gray-900/50 border border-cyan-500/20 rounded-lg p-4 h-40 focus:border-cyan-500 transition-colors"
                  ></textarea>
                  <div className="md:col-span-2">
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black">
                      Send Message
                    </Button>
                  </div>
                </form>
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
    </div>
  );
}