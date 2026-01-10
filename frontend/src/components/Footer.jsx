import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { portfolioData } from '../mock';

const Footer = () => {
  const { personal, socials } = portfolioData;
  const currentYear = new Date().getFullYear();

  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Twitter: Twitter
  };

  return (
    <footer className="py-12" style={{ backgroundColor: '#1a1c1b', borderTop: '1px solid rgba(63, 72, 22, 0.3)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Copyright */}
          <div className="flex items-center gap-2" style={{ color: '#888680' }}>
            <span>© {currentYear} {personal.name}. Built with</span>
            <Heart size={16} fill="#d9fb06" style={{ color: '#d9fb06' }} />
          </div>

          {/* Right: Social Links */}
          <div className="flex gap-6">
            {socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="transition-all duration-300" style={{ color: '#888680' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d9fb06'} onMouseLeave={(e) => e.currentTarget.style.color = '#888680'}>
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
