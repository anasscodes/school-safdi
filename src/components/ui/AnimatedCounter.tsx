import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  target, 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    // Create an intersection observer to trigger the animation when element is visible
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          animateCounter();
          hasAnimated.current = true;
          
          // Unobserve after animation starts
          if (observerRef.current && countRef.current) {
            observerRef.current.unobserve(countRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observerRef.current.observe(countRef.current);
    }
    
    return () => {
      if (observerRef.current && countRef.current) {
        observerRef.current.unobserve(countRef.current);
      }
    };
  }, [target]);
  
  const animateCounter = () => {
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      
      if (elapsedTime < duration) {
        // Calculate the current count using easeOutQuad easing function
        const progress = elapsedTime / duration;
        const easedProgress = -progress * (progress - 2); // easeOutQuad
        const currentCount = Math.floor(startValue + (target - startValue) * easedProgress);
        
        setCount(currentCount);
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };
    
    updateCounter();
  };

  return <span ref={countRef}>{count}</span>;
};

export default AnimatedCounter;