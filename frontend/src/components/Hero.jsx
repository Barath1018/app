import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { portfolioData } from '../mock';

const Hero = () => {
  const { personal, socials } = portfolioData;

  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Twitter: Twitter
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20" style={{ backgroundColor: '#1a1c1b' }}>
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-4xl">
          {/* Title */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight" style={{ color: '#d9fb06', letterSpacing: '-0.02em' }}>
            {personal.name}
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: '#888680' }}>
            {personal.title}
          </h2>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-12 max-w-2xl" style={{ color: '#dfddd6', lineHeight: '1.5' }}>
            {personal.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button onClick={scrollToContact} className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2" style={{ backgroundColor: '#d9fb06', color: '#1a1c1b' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              Get In Touch
              <ArrowRight size={20} />
            </button>
            <a href={personal.resumeUrl} className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center" style={{ border: '1px solid #d9fb06', color: '#d9fb06', backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d9fb06'; e.currentTarget.style.color = '#1a1c1b'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#d9fb06'; }}>
              View Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="transition-all duration-300" style={{ color: '#888680' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d9fb06'} onMouseLeave={(e) => e.currentTarget.style.color = '#888680'}>
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
