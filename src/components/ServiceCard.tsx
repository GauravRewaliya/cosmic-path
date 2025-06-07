import React, { useRef, useEffect } from 'react';

interface ServiceProps {
  service: {
    id: number;
    title: string;
    icon: React.ReactNode;
    description: string;
    price: string;
    color: string;
  };
  index: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ service, index }) => {
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
      className="bg-indigo-900/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 border border-indigo-800/50 group"
    >
      <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-indigo-800/50 transition-all duration-300 group-hover:bg-indigo-700">
            {service.icon}
          </div>
        </div>
        <h3 className="text-xl font-serif font-bold text-white text-center mb-3">
          {service.title}
        </h3>
        <p className="text-purple-200 text-center mb-4">
          {service.description}
        </p>
        <div className="text-center font-serif text-xl text-white mb-4">
          {service.price}
        </div>
        <div className="text-center">
          <a
            href="#booking"
            className="inline-block bg-indigo-700 hover:bg-indigo-600 text-white px-6 py-2 rounded-full transition-all duration-300 text-sm"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;