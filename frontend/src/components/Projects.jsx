import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../mock';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24" style={{ backgroundColor: '#1a1c1b' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black mb-6" style={{ color: '#d9fb06', lineHeight: '1' }}>
            PROJECTS
          </h2>
          <div className="w-20 h-1" style={{ backgroundColor: '#d9fb06' }}></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="overflow-hidden transition-all duration-300" style={{ backgroundColor: '#302f2c', border: '1px solid rgba(63, 72, 22, 0.5)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#d9fb06'; e.currentTarget.style.transform = 'translateY(-4px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(63, 72, 22, 0.5)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden" style={{ backgroundColor: '#1a1c1b' }}>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500" onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#d9fb06' }}>
                  {project.title}
                </h3>
                <p className="mb-4" style={{ color: '#dfddd6', lineHeight: '1.6' }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 text-sm font-medium" style={{ backgroundColor: 'rgba(217, 251, 6, 0.1)', color: '#d9fb06', border: '1px solid rgba(217, 251, 6, 0.3)' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors duration-300" style={{ color: '#888680' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d9fb06'} onMouseLeave={(e) => e.currentTarget.style.color = '#888680'}>
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors duration-300" style={{ color: '#888680' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d9fb06'} onMouseLeave={(e) => e.currentTarget.style.color = '#888680'}>
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
