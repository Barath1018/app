import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(26, 28, 27, 0.95)', borderBottom: '1px solid rgba(63, 72, 22, 0.3)' }}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold" style={{ color: '#d9fb06' }}>
            {portfolioData.personal.name.split(' ')[0]}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="nav-link" style={{ color: '#d9fb06', transition: 'opacity 0.3s ease' }} onMouseEnter={(e) => e.target.style.opacity = '0.7'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="nav-link" style={{ color: '#d9fb06', transition: 'opacity 0.3s ease' }} onMouseEnter={(e) => e.target.style.opacity = '0.7'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link" style={{ color: '#d9fb06', transition: 'opacity 0.3s ease' }} onMouseEnter={(e) => e.target.style.opacity = '0.7'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2.5 rounded-full font-semibold transition-all duration-300" style={{ backgroundColor: '#d9fb06', color: '#1a1c1b' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ color: '#d9fb06' }}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4" style={{ borderTop: '1px solid rgba(63, 72, 22, 0.3)' }}>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2" style={{ color: '#d9fb06' }}>
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2" style={{ color: '#d9fb06' }}>
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2" style={{ color: '#d9fb06' }}>
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 px-6 rounded-full font-semibold" style={{ backgroundColor: '#d9fb06', color: '#1a1c1b' }}>
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
