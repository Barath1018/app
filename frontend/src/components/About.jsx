import React from 'react';
import { portfolioData } from '../mock';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-24" style={{ backgroundColor: '#1a1c1b' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Heading */}
          <div>
            <h2 className="text-6xl md:text-7xl font-black mb-6" style={{ color: '#d9fb06', lineHeight: '1' }}>
              ABOUT ME
            </h2>
            <div className="w-20 h-1 mb-6" style={{ backgroundColor: '#d9fb06' }}></div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-xl mb-6" style={{ color: '#dfddd6', lineHeight: '1.7' }}>
              {personal.bio}
            </p>
            <div className="space-y-3" style={{ color: '#888680' }}>
              <p className="flex items-center gap-3">
                <span className="font-semibold" style={{ color: '#d9fb06' }}>Location:</span>
                {personal.location}
              </p>
              <p className="flex items-center gap-3">
                <span className="font-semibold" style={{ color: '#d9fb06' }}>Email:</span>
                <a href={`mailto:${personal.email}`} className="hover:underline" style={{ color: '#888680' }} onMouseEnter={(e) => e.target.style.color = '#d9fb06'} onMouseLeave={(e) => e.target.style.color = '#888680'}>
                  {personal.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
