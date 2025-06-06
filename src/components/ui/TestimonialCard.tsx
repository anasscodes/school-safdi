import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  image, 
  content 
}) => {
  return (
    <div className="w-full flex-shrink-0 px-4 md:px-8">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
        {/* Rating stars */}
        <div className="flex mb-4">
          {Array(5).fill(0).map((_, i) => (
            <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        
        {/* Testimonial content */}
        <p className="text-gray-700 mb-6 italic">"{content}"</p>
        
        {/* Author info */}
        <div className="flex items-center">
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;