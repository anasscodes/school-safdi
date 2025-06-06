import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Safdi School | Empowering Future Minds";
    
    // Add animation classes to style
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideIn {
        from { 
          opacity: 0;
          transform: translateY(30px);
        }
        to { 
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideUp {
        from { 
          opacity: 0;
          transform: translateY(20px);
        }
        to { 
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes float {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0px);
        }
      }
      
      .animate-fadeIn {
        animation: fadeIn 1s ease forwards;
      }
      
      .animate-slideIn {
        animation: slideIn 0.8s ease forwards;
      }
      
      .animate-slideUp {
        animation: slideUp 0.6s ease forwards;
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      
      .animation-delay-4000 {
        animation-delay: 4s;
      }
      
      .transition-colors {
        transition-property: color, background-color, border-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
      }
      
      .transition-transform {
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
      }
      
      .duration-3000 {
        transition-duration: 3000ms;
      }
      
      .bg-gradient-pattern {
        background-size: 20px 20px;
        background-image: linear-gradient(to right, rgba(219, 234, 254, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(219, 234, 254, 0.1) 1px, transparent 1px);
      }
    `;
    document.head.appendChild(style);
    
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Apply font family to body
    document.body.style.fontFamily = "'Poppins', sans-serif";
    
    return () => {
      document.head.removeChild(style);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;