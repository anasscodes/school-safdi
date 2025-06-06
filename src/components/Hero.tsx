import React, { useEffect, useRef } from 'react';
import { GraduationCap, BookOpen, Heart, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateGradient = () => {
      if (!heroRef.current) return;
      
      const colors = [
        'rgba(96, 165, 250, 0.7)', // soft blue
        'rgba(147, 197, 253, 0.7)', // lighter blue
        'rgba(167, 243, 208, 0.7)', // soft mint
      ];
      
      let colorIndex = 0;
      const interval = setInterval(() => {
        colorIndex = (colorIndex + 1) % colors.length;
        if (heroRef.current) {
          heroRef.current.style.setProperty('--gradient-color', colors[colorIndex]);
        }
      }, 5000);
      
      return () => clearInterval(interval);
    };
    
    animateGradient();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-blue-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-200 rounded-full animate-float opacity-20"></div>
        <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-blue-200 rounded-full animate-float opacity-20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-green-200 rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-200 rounded-full animate-float opacity-20" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fadeIn opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <GraduationCap size={48} className="text-blue-600 animate-float" />
              <BookOpen size={40} className="text-green-500 animate-float" style={{ animationDelay: '0.5s' }} />
              <Heart size={36} className="text-pink-500 animate-float" style={{ animationDelay: '1s' }} />
              <Users size={44} className="text-yellow-500 animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Safdi <span className="text-blue-600">School</span>
            </h1>
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 h-1 w-24 mx-auto rounded-full mb-6"></div>
          </div>
          
          <div className="mb-12 animate-fadeIn opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <h2 className="text-2xl md:text-4xl font-medium text-gray-700 mb-6">
              Empowering Future Minds
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              A nurturing environment for primary education and kindergarten in El Jadida, where every child's potential blooms.
            </p>
          </div>
          
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <button 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 group flex items-center mx-auto"
            >
              Contact Us on WhatsApp
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-24 right-24 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;