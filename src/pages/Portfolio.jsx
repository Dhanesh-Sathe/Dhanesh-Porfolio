import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Cpu, Globe, ChevronDown, ExternalLink, Menu, X, Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const skills = [
    { name: 'C++', level: 90, icon: Code },
    { name: 'C', level: 70, icon: Code },
    { name: 'Python', level: 80, icon: Code },
    { name: 'HTML', level: 90, icon: Code },
    { name: 'CSS', level: 90, icon: Code },
    { name: 'JavaScript', level: 90, icon: Code },
    { name: 'React.js', level: 85, icon: Code },
    { name: 'Node.js', level: 80, icon: Database },
    { name: 'Django', level: 80, icon: Code },
    { name: 'MongoDB', level: 80, icon: Database },
    { name: 'PostgreSQL', level: 80, icon: Code },
    { name: 'System Design', level: 78, icon: Cpu },
    { name: 'Web Development', level: 92, icon: Globe }
  ];

  const projects = [
    {
      title: " EduTrack: Personalized AI Learning Platform",
      description: "Developed an AI-driven, full-stack STEM learning platform (React.js/Django) featuring a custom AI content generator and dual-dashboards for personalized education and progress tracking.",
      technologies: ["React", "Django", "Postgre SQL"],
      github: "https://github.com/Dhanesh-Sathe/EduTrack",
      live: "#"
    },
    {
      title: " Helpdesk Web Application — MERN Stack",
      description: "Architected and built a MERN-stack helpdesk platform featuring role-based access for customers, agents, and admins, facilitating efficient support ticket management and tracking.",
      technologies: ["React.JS", "Node.JS", "Express", "MongoDB"],
      github: "https://github.com/Dhanesh-Sathe/HelpDesk",
      live: "#"
    }
  ];

  const experiences = [
    {
      title: "Web Application Developer Intern",
      company: "Rise4Change",
      location: "USA",
      duration: "Mar 2025 - Present",
      description: "During my internship, I was a key contributor to the project, where I build and implement features for a scalable backend using Django and its REST framework. I collaborated and contributed to the React frontend to ensure seamless API integration, which played a vital role in the project's successful",
      technologies: ["Django", "PostgreSQL", "REST", "Python", "React.js", "TypeScript", "HTML", "Tailwind CSS", "Git"],
      type: "internship"
    },
    {
      title: " Frontend Developer Intern",
      company: " TensorBuilds",
      location: "Pune, Maharashtra",
      duration: "Sep 2024 - Nov 2024",
      description: "During my internship at TensorBuilds, I was a key contributor to the development of their new digital platform, designed to showcase their diverse products and services. I was responsible for building dynamic and responsive front-end components using React.js, and leveraged Tailwind CSS to create a modern and intuitive user experience.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
      type: "internship"
    },
    {
      title: " Joint Head of Web Team",
      company: "Association of Computer Engineering Students (ACES), PVG’s COET",
      location: "Remote",
      duration: "Jan 2025 - Apr 2025",
      description: "As Joint Head of the ACES Web Team, I spearheaded the development of our key digital platforms using React.js, including the official chapter website and a dedicated site for our annual Hackathon. My role blended technical leadership with hands-on development, team mentorship, and cross-functional coordination to ensure successful project delivery.",
      technologies: ["React", "Node.js", "JavaScript", "Express", "MongoDB"],
      type: "freelance"
    }
  ];

  const achievements = [
    {
      title: "DevPost Hackathon",
      organization: "D.Y. Patil College of Engineering, Pimpari",
      date: "Apr 2025",
      description: "Top 15 Finalist - Developed an innovative EduTrack: Personalized AI Learning Platform.",
      icon: Award,
      category: "competition"
    },
    {
      title: "Hackathon",
      organization: "PCCOE College of Engineering, Pune",
      date: "Mar 2025",
      description: "Achieved an exceptional rank of 22nd out of 650+ competing teams in a high-pressure. Build a project Dark Web Scraping System",
      icon: Award,
      category: "competition"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Pune Vidhyarthi Griha's College of Engineering",
      location: "Pune, Maharashtra",
      duration: "2022 - 2026",
      gpa: "8.88/10",
      relevant: ["Data Structures & Algorithms", "Database Management", "Software Engineering", "Computer Networks"]
    },
    {
      degree: "HSC",
      institution: "K.A.A.N.M.S. College of Arts, Commerece & Science",
      location: "Satana, Maharashtra",
      duration: "2020 - 2022",
      percentage: "80.33%",
      relevant: ["Mathematics","Physics","Chemistry","Computer Science"]
    },
    {
      degree: "SSC",
      institution: "BES't English Medium School",
      location: "Satana, Maharashtra",
      duration: "2014 - 2020",
      percentage: "91.40%",
      relevant: ["Mathematics","Science","English","Marathi","Hindi"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              DS
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'education', 'experience', 'skills', 'projects', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item ? 'text-cyan-400' : 'text-white/70'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white/70 hover:text-cyan-400 transition-colors p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-100 opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-lg rounded-lg mt-2 border border-white/10">
              {['home', 'about', 'education', 'experience', 'skills', 'projects', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 capitalize ${
                    activeSection === item 
                      ? 'text-cyan-400 bg-cyan-400/10' 
                      : 'text-white/70 hover:text-cyan-400 hover:bg-white/5'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="text-center z-10 px-4">
          <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Profile Photo in Hero Section */}
            <div className="mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-1 bg-slate-900 rounded-full overflow-hidden">
                  {/* Replace this src with your actual photo */}
                  <img 
                    src="./Images/self5-removebg-preview2.png" 
                    alt="Dhanesh Sathe"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dhanesh Sathe
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Computer Engineering Student | Full-Stack Developer | Innovation Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed">
                  I'm a passionate Computer Engineering student with a deep fascination for technology and innovation. 
                  My journey in tech spans across full-stack development, system design, and emerging technologies.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Currently pursuing my engineering degree, I combine academic knowledge with practical experience 
                  to create solutions that make a difference. I'm particularly interested in web technologies, 
                  IoT systems, and artificial intelligence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                    <span>Maharashtra, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    <Cpu className="w-5 h-5" />
                    <span>Computer Engineering</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  {/* Decorative background circles */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-full backdrop-blur-sm"></div>
                  
                  {/* Profile photo container */}
                  <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-gradient-to-r from-cyan-400 to-purple-400">
                    <div className="w-full h-full bg-gradient-to-br from-cyan-400/10 to-purple-400/10 flex items-center justify-center">
                      {/* Replace this src with your actual photo */}
                      <img 
                        src="./Images/self5-removebg-preview2.png" 
                        alt="Dhanesh Sathe - About"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Floating icons */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Code className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Database className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] group"
                  style={{ animationDelay:`${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-purple-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-purple-400 mb-2">{edu.degree}</h3>
                          <p className="text-pink-300 font-semibold text-lg">{edu.institution}</p>
                          <p className="text-white/60">{edu.location}</p>
                        </div>
                        <div className="flex flex-col items-end mt-4 md:mt-0">
                          <div className="flex items-center gap-2 text-white/60 mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.duration}</span>
                          </div>
                          {edu.gpa && (
                            <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                              GPA: {edu.gpa}
                            </div>
                          )}
                          {edu.percentage && (
                            <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                              Percentage: {edu.percentage}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {edu.relevant && (
                        <div>
                          <h4 className="text-white font-semibold mb-3">Relevant Coursework:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.relevant.map((course, courseIndex) => (
                              <span
                                key={courseIndex}
                                className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] group"
                  style={{ animationDelay:`${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-bold text-cyan-400 mb-1 md:mb-0">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-white/60">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <p className="text-purple-300 font-semibold">{exp.company}</p>
                        <p className="text-white/60 text-sm">{exp.location}</p>
                      </div>
                      <p className="text-white/80 mb-4 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                          >
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
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay:`${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-6 h-6 text-cyan-400" />
                      <h3 className="font-semibold">{skill.name}</h3>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                    <div className="text-right text-sm text-white/60 mt-2">{skill.level}%</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
                  style={{ animationDelay:`${index * 200}ms` }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-cyan-400">{project.title}</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-white/70 hover:text-cyan-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-white/70 hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.achievements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Achievements & Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
                    style={{ animationDelay:`${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-yellow-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            achievement.category === 'competition' ? 'bg-green-500/20 text-green-300' :
                            achievement.category === 'certification' ? 'bg-blue-500/20 text-blue-300' :
                            'bg-purple-500/20 text-purple-300'
                          }`}>
                            {achievement.category}
                          </span>
                          <span className="text-white/60 text-sm">{achievement.date}</span>
                        </div>
                        <h3 className="font-bold text-yellow-400 mb-2">{achievement.title}</h3>
                        <p className="text-orange-300 text-sm font-medium mb-2">{achievement.organization}</p>
                        <p className="text-white/70 text-sm leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="text-center mb-12">
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, innovative projects, or just having a chat about technology. 
                Let's build something amazing together!
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <a
                href="mailto:dds.satana@gmail.com"
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-white/70">dds.satana@gmail.com</p>
              </a>
              <a
                href="https://www.linkedin.com/in/dhanesh-sathe-2b28b0256"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <Linkedin className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-white/70">Connect with me</p>
              </a>
              <a
                href="tel:+918855833583"
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <Phone className="w-12 h-12 text-pink-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-white/70">Let's talk</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 Dhanesh Sathe. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;