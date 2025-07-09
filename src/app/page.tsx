"use client"
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  demo :boolean;
}

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Grind',
      description: 'A full-stack Question Tracker WebApp',
      technologies: ['React', 'Node', 'MongoDB', 'Tailwind Css' , "Express", "TypeScript"],
      demoUrl: 'https://notes-app-xj7a.onrender.com/',
      githubUrl: 'https://github.com/ayushrana83/Notes-App',
      demo : true,
    },
    {
      id: 2,
      title: 'QuickQuiz',
      description: 'A full-stack Quiz-App.',
      technologies: ['React', 'Node', 'PostgreSQL', 'Tailwind Css' , "Express" , "TypeScript"],
      demoUrl: 'https://quiz-app-alpha-ten-19.vercel.app/',
      githubUrl: 'https://github.com/ayushrana83/Quiz-App',
      demo : true,
    },
    {
      id: 3,
      title: 'ClickCart',
      description: 'A full-stack e-commerce platform.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind Css' , "Express.js"],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/ayushrana83/Click-Cart',
      demo : false,
    },
    {
      id: 4,
      title: 'Google Form Clone',
      description: 'Google Form Clone',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/ayushrana83/Google-Form-Clone',
      demo : false,
    }
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node', 'Express',
    'MongoDB', 'PostgreSQL', 'HTML', 'CSS', 'Tailwind CSS', 'Git'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-blue-600">
              Ayush Rana
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 text-gray-700">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-gray-700">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="py-20">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I&apos;m Ayush Rana
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Full Stack Web Developer
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              I create modern, responsive web applications using the latest technologies. 
              Passionate about clean code, user experience, and solving complex problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gray-200 rounded-full flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I&apos;m a passionate full-stack developer with 1.5+ years of experience building web applications. 
                I enjoy working with modern technologies and creating solutions that make a difference.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey in web development started with curiosity about how websites work, and it has 
                evolved into a career where I get to solve problems and build amazing digital experiences every day.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">1.5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center border hover:shadow-md">
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white border rounded-lg p-6 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demo ? <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a> : "" }
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and interesting projects. 
            Feel free to reach out if you&apos;d like to work together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a href='mailto:aayushrana295@gmail.com' className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">aayushrana295@gmail.com</p>
            </a>
            <a href='https://linkedin.com/in/ayush-rana-196961251' target='_blank' className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-600">linkedin.com/in/ayush-rana-196961251</p>
            </a>
            <a href='https://github.com/ayushrana83' target='_blank' className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-600">github.com/ayushrana83</p>
            </a>
          </div>
          
          {/* <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg">
            Send Message
          </button> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2025 Ayush Rana. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;