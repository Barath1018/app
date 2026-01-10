import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../mock';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - in real app this would send to backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: '#302f2c' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black mb-6" style={{ color: '#d9fb06', lineHeight: '1' }}>
            GET IN TOUCH
          </h2>
          <div className="w-20 h-1" style={{ backgroundColor: '#d9fb06' }}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <p className="text-xl mb-12" style={{ color: '#dfddd6', lineHeight: '1.7' }}>
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3" style={{ backgroundColor: 'rgba(217, 251, 6, 0.1)' }}>
                  <Mail size={24} style={{ color: '#d9fb06' }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#d9fb06' }}>Email</h3>
                  <a href={`mailto:${personal.email}`} className="transition-colors duration-300" style={{ color: '#dfddd6' }} onMouseEnter={(e) => e.target.style.color = '#d9fb06'} onMouseLeave={(e) => e.target.style.color = '#dfddd6'}>
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3" style={{ backgroundColor: 'rgba(217, 251, 6, 0.1)' }}>
                  <MapPin size={24} style={{ color: '#d9fb06' }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#d9fb06' }}>Location</h3>
                  <p style={{ color: '#dfddd6' }}>{personal.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium" style={{ color: '#d9fb06' }}>
                  Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 outline-none transition-all duration-300" style={{ backgroundColor: '#1a1c1b', color: '#dfddd6', border: '1px solid rgba(63, 72, 22, 0.5)' }} onFocus={(e) => e.target.style.borderColor = '#d9fb06'} onBlur={(e) => e.target.style.borderColor = 'rgba(63, 72, 22, 0.5)'} />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium" style={{ color: '#d9fb06' }}>
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 outline-none transition-all duration-300" style={{ backgroundColor: '#1a1c1b', color: '#dfddd6', border: '1px solid rgba(63, 72, 22, 0.5)' }} onFocus={(e) => e.target.style.borderColor = '#d9fb06'} onBlur={(e) => e.target.style.borderColor = 'rgba(63, 72, 22, 0.5)'} />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium" style={{ color: '#d9fb06' }}>
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full px-4 py-3 outline-none resize-none transition-all duration-300" style={{ backgroundColor: '#1a1c1b', color: '#dfddd6', border: '1px solid rgba(63, 72, 22, 0.5)' }} onFocus={(e) => e.target.style.borderColor = '#d9fb06'} onBlur={(e) => e.target.style.borderColor = 'rgba(63, 72, 22, 0.5)'}></textarea>
              </div>

              <button type="submit" className="w-full px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2" style={{ backgroundColor: '#d9fb06', color: '#1a1c1b' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} disabled={isSubmitted}>
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
