import React from 'react';
import { Moon, Heart, Star, Sparkles } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Horoscope Readings',
      icon: <Star className="h-8 w-8 text-yellow-300" />,
      description:
        'Personalized monthly and yearly horoscopes that provide insight into upcoming challenges and opportunities based on planetary movements.',
      price: '$75',
      color: 'from-yellow-600 to-amber-500',
    },
    {
      id: 2,
      title: 'Birth Chart Analysis',
      icon: <Moon className="h-8 w-8 text-blue-300" />,
      description:
        'Comprehensive analysis of your natal chart revealing your personality traits, strengths, challenges, and life purpose.',
      price: '$120',
      color: 'from-blue-600 to-indigo-500',
    },
    {
      id: 3,
      title: 'Relationship Guidance',
      icon: <Heart className="h-8 w-8 text-pink-300" />,
      description:
        'Compatibility analysis between two birth charts to understand relationship dynamics, strengths, and potential challenges.',
      price: '$150',
      color: 'from-pink-600 to-rose-500',
    },
    {
      id: 4,
      title: 'Spiritual Guidance',
      icon: <Sparkles className="h-8 w-8 text-purple-300" />,
      description:
        'Connect with your higher self through a blend of astrology and intuitive guidance to navigate your spiritual journey.',
      price: '$100',
      color: 'from-purple-600 to-violet-500',
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
            Celestial Services
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-4"></div>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Discover the cosmic guidance you need with my personalized astrological services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;