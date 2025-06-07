import React, { useEffect, useRef } from 'react';
import { Moon, Star, Sun } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-20 left-10 text-purple-300">
          <Moon size={60} />
        </div>
        <div className="absolute bottom-20 right-10 text-yellow-300">
          <Sun size={80} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-white">
          <Star size={40} />
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-white">
          <Star size={30} />
        </div>
      </div>

      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full transform translate-x-2 translate-y-2"></div>
              <img
                src="https://images.pexels.com/photos/9996378/pexels-photo-9996378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Astrologer portrait"
                className="relative z-10 rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover mx-auto border-4 border-indigo-200"
              />
              <div className="absolute -top-4 -right-4 text-purple-300">
                <Star size={40} className="animate-pulse" />
              </div>
              <div className="absolute -bottom-4 -left-4 text-indigo-300">
                <Moon size={40} className="animate-pulse" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-serif font-semibold text-purple-300 mb-4">
              Alexandra Starlight
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              With over 15 years of experience in celestial navigation, I've guided hundreds of souls through their cosmic journeys. My connection to the stars began at a young age when I experienced profound visions that connected me to the universal energy.
            </p>
            <p className="text-gray-200 mb-6 leading-relaxed">
              I combine traditional astrological wisdom with modern psychological insights to provide you with readings that are both spiritually enriching and practically applicable to your everyday life.
            </p>
            <h4 className="text-xl font-serif font-medium text-white mb-3">My Mission</h4>
            <p className="text-gray-200 leading-relaxed">
              To illuminate your path through the cosmos, helping you understand your unique celestial blueprint and harness the energy of the stars to create the life you desire and deserve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;