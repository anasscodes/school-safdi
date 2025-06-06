import React, { useEffect, useRef } from 'react';
import { Globe, Smartphone, ShoppingBag, Search } from 'lucide-react';
import ServiceCard from './ui/ServiceCard';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sectionRef.current?.classList.add('animate-fadeIn');
          sectionRef.current?.classList.remove('opacity-0');
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Globe size={32} />,
      title: 'Website Design & Development',
      description: 'Custom websites built to engage visitors and drive conversions.',
      delay: 0.1
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile-First Development',
      description: 'Responsive designs that work flawlessly on all devices.',
      delay: 0.3
    },
    {
      icon: <ShoppingBag size={32} />,
      title: 'E-commerce Solutions',
      description: 'Online stores that drive sales and provide excellent user experience.',
      delay: 0.5
    },
    {
      icon: <Search size={32} />,
      title: 'SEO Optimization',
      description: 'Boost your visibility in search engines and attract more visitors.',
      delay: 0.7
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden opacity-0"
      style={{ animationFillMode: 'forwards' }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            We provide comprehensive web solutions to help your business grow online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
    </section>
  );
};

export default Services;