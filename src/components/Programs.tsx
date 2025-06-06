import React, { useEffect, useRef } from 'react';
import { BookOpen, Users, Puzzle, Music, Star, Heart, Brain, Palette } from 'lucide-react';

const Programs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideUp');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      icon: <BookOpen size={32} />,
      title: 'Primary Education',
      description: 'Strong foundation in core subjects with personalized attention and care.',
      features: ['Arabic & French', 'Mathematics', 'Science'],
      color: 'blue'
    },
    {
      icon: <Users size={32} />,
      title: 'Kindergarten',
      description: 'Nurturing early development through play-based learning and discovery.',
      features: ['Social Skills', 'Basic Numbers', 'Creative Play'],
      color: 'green'
    },
    {
      icon: <Puzzle size={32} />,
      title: 'After-School Activities',
      description: 'Engaging activities that complement academic learning.',
      features: ['Sports', 'Art Classes', 'Homework Help'],
      color: 'yellow'
    },
    {
      icon: <Heart size={32} />,
      title: 'Daycare Services',
      description: 'Safe and caring environment for our youngest learners.',
      features: ['Qualified Staff', 'Healthy Meals', 'Fun Activities'],
      color: 'pink'
    }
  ];

  const getGradientClass = (color: string) => {
    const gradients = {
      blue: 'from-blue-50 to-white hover:from-blue-100',
      green: 'from-green-50 to-white hover:from-green-100',
      yellow: 'from-yellow-50 to-white hover:from-yellow-100',
      pink: 'from-pink-50 to-white hover:from-pink-100'
    };
    return gradients[color as keyof typeof gradients];
  };

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive educational programs tailored for your child's growth and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`bg-gradient-to-br ${getGradientClass(program.color)} p-8 rounded-2xl shadow-sm opacity-0 translate-y-8 transition-all duration-500 hover:shadow-lg group`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`text-${program.color}-600 mb-6 transform transition-transform duration-300 group-hover:scale-110`}>
                {program.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <ul className="space-y-3">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <Star size={16} className="text-yellow-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Programs;