import React, { useEffect, useRef } from 'react';
import { BookOpen, Brain, Heart, Star } from 'lucide-react';
import AnimatedCounter from './ui/AnimatedCounter';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideIn');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 25, label: 'Years Experience' },
    { value: 500, label: 'Students' },
    { value: 50, label: 'Teachers' },
    { value: 95, label: 'Success Rate' },
  ];

  const values = [
    {
      icon: <BookOpen className="text-blue-600 mb-4\" size={32} />,
      title: 'Academic Excellence',
      description: 'Committed to the highest standards of education and learning.',
    },
    {
      icon: <Brain className="text-blue-600 mb-4\" size={32} />,
      title: 'Innovation',
      description: 'Embracing modern teaching methods and technology.',
    },
    {
      icon: <Heart className="text-blue-600 mb-4\" size={32} />,
      title: 'Character Development',
      description: 'Nurturing values, ethics, and personal growth.',
    },
    {
      icon: <Star className="text-blue-600 mb-4\" size={32} />,
      title: 'Leadership',
      description: 'Developing tomorrow\'s leaders through guidance and opportunity.',
    },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0" 
          ref={(el) => (itemsRef.current[0] = el)}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Safdi School
          </h2>
          <p className="text-lg text-gray-600">
            We are dedicated to providing exceptional education that prepares students
            for success in an ever-changing world. Our approach combines traditional
            values with innovative teaching methods.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              ref={(el) => (itemsRef.current[index + 1] = el)}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 opacity-0 hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {value.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0"
          ref={(el) => (itemsRef.current[5] = el)}
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-sm border border-blue-100 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter target={stat.value} duration={2000} />
                {stat.label === 'Success Rate' ? '%' : '+'}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;