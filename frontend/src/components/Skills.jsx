import React from 'react';
import { portfolioData } from '../mock';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24" style={{ backgroundColor: '#302f2c' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black mb-6" style={{ color: '#d9fb06', lineHeight: '1' }}>
            SKILLS
          </h2>
          <div className="w-20 h-1" style={{ backgroundColor: '#d9fb06' }}></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="p-8 transition-all duration-300" style={{ backgroundColor: '#1a1c1b', border: '1px solid rgba(63, 72, 22, 0.5)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#d9fb06'; e.currentTarget.style.transform = 'translateY(-4px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(63, 72, 22, 0.5)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#d9fb06' }}>
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3" style={{ color: '#dfddd6' }}>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#d9fb06' }}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
