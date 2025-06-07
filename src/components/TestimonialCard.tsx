import React, { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    image: string;
    role: string;
    content: string;
    rating: number;
  };
  index: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
            }, index * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-indigo-900/50 backdrop-blur-sm p-6 rounded-lg shadow-lg h-full opacity-0 transition-all duration-500 hover:shadow-xl border border-indigo-800/50"
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full transform translate-x-1 translate-y-1"></div>
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover relative z-10 border-2 border-indigo-300"
          />
        </div>
        <div>
          <h4 className="font-serif font-semibold text-white">{testimonial.name}</h4>
          <p className="text-sm text-purple-300">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < testimonial.rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-400'
            }`}
          />
        ))}
      </div>
      
      <p className="text-purple-200 italic">"{testimonial.content}"</p>
    </div>
  );
};

export default TestimonialCard;