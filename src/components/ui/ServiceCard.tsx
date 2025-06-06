import React, { useRef, useEffect } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description,
  delay
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            cardRef.current?.classList.add('animate-slideUp');
            cardRef.current?.classList.remove('opacity-0', 'translate-y-8');
          }, delay * 1000);
          
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.disconnect();
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 opacity-0 translate-y-8 transition-all duration-500 hover:shadow-md hover:scale-105 group"
    >
      <div className="text-blue-600 mb-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;