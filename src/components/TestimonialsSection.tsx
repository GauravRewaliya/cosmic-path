import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    role: 'Entrepreneur',
    content:
      'Alexandra\'s birth chart reading was incredibly accurate and insightful. She pinpointed aspects of my personality that I never shared with anyone. Her guidance helped me make important business decisions with confidence.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    role: 'Software Engineer',
    content:
      'I was skeptical at first, but my relationship reading with Alexandra was eye-opening. She identified the patterns causing friction in my relationship and offered practical advice that has truly transformed my connection with my partner.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600',
    role: 'Yoga Instructor',
    content:
      'The spiritual guidance session with Alexandra helped me connect deeply with my purpose. Her intuitive insights combined with astrological knowledge created a roadmap for my personal and professional growth.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Wilson',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    role: 'Marketing Director',
    content:
      'Alexandra\'s yearly horoscope reading prepared me for major life transitions. Her predictions were so accurate that I was able to navigate a career change with confidence and clarity.',
    rating: 4,
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDisplayCount(1);
      } else if (window.innerWidth < 1024) {
        setDisplayCount(2);
      } else {
        setDisplayCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) =>
      prev + displayCount >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - displayCount : prev - 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    activeIndex,
    Math.min(activeIndex + displayCount, testimonials.length)
  );

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
            Celestial Testimonials
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-4"></div>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Hear from those who have discovered their cosmic truth through my guidance
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / displayCount)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          {testimonials.length > displayCount && (
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-indigo-800 text-white hover:bg-indigo-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-indigo-800 text-white hover:bg-indigo-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;