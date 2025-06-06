import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const images = [
    {
      url: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Interactive Learning',
      description: 'Students engaged in hands-on activities'
    },
    {
      url: 'https://images.pexels.com/photos/8613070/pexels-photo-8613070.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Modern Facilities',
      description: 'Well-equipped classrooms for optimal learning'
    },
    {
      url: 'https://images.pexels.com/photos/8612900/pexels-photo-8612900.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Creative Activities',
      description: 'Fostering creativity through diverse activities'
    },
    {
      url: 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Safe Environment',
      description: 'A nurturing space for children to grow'
    }
  ];

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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden opacity-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            School Gallery
          </h2>
          <p className="text-lg text-gray-600">
            Take a virtual tour of our vibrant learning environment
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 relative"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                    <h3 className="text-white text-2xl font-bold mb-2">
                      {image.title}
                    </h3>
                    <p className="text-white/90">
                      {image.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg text-blue-600 hover:text-green-600 transition-colors hover:bg-white"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg text-blue-600 hover:text-green-600 transition-colors hover:bg-white"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer rounded-lg overflow-hidden transition-opacity ${
                index === activeIndex ? 'ring-2 ring-blue-600' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-24 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;