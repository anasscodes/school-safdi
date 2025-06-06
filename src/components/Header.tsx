import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* <a href="#" className="text-2xl font-bold text-blue-600">
          Safdi School
        </a> */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="Safdi School Logo" className="h-12 w-auto" />
        </a>
       

 

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'about', 'programs', 'gallery', 'testimonials', 'contact'].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-blue-600 hover:text-green-600 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            )
          )}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Let's Work Together
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-blue-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['home', 'about', 'programs', 'gallery', 'testimonials', 'contact'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-blue-600 hover:text-green-600 transition-colors text-left py-2 border-b border-gray-100"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              )
            )}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors self-start mt-2"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;