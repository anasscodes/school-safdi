import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import TestimonialCard from './ui/TestimonialCard';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<number | null>(null);
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Safdi Web transformed our online presence. Their attention to detail and commitment to excellence made the process smooth and the results outstanding.'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, TechStart',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Working with Safdi Web was a game-changer for our business. Their team delivered a website that perfectly captures our brand and drives real results.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'E-commerce Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The e-commerce solution provided by Safdi Web increased our online sales by 40%. Their expertise and innovative approach exceeded our expectations.'
    }
  ];
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sectionRef.current?.classList.add('animate-fadeIn');
          sectionRef.current?.classList.remove('opacity-0');
          observer.unobserve(entries[0].target);
          
          // Start automatic sliding
          intervalRef.current = window.setInterval(() => {
            nextSlide();
          }, 5000);
        } else {
          // Pause automatic sliding when out of view
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden opacity-0"
      style={{ animationFillMode: 'forwards' }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about our work.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  role={testimonial.role}
                  image={testimonial.image}
                  content={testimonial.content}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 bg-white p-3 rounded-full shadow-md text-blue-600 hover:text-blue-700 transition-colors z-10"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 bg-white p-3 rounded-full shadow-md text-blue-600 hover:text-blue-700 transition-colors z-10"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;