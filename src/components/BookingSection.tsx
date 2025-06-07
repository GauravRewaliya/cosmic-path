import React, { useRef, useEffect } from 'react';
import { MessageCircle, Calendar, Star } from 'lucide-react';

const BookingSection: React.FC = () => {
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
    <section 
      id="booking" 
      className="py-20 relative"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 to-purple-900/50 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 opacity-0 transition-opacity duration-1000">
        <div className="bg-indigo-900/70 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
          <div className="lg:flex">
            <div className="lg:w-1/2 p-8 sm:p-12">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-purple-700 rounded-full mr-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-white">
                  Begin Your Cosmic Journey
                </h2>
              </div>
              
              <p className="text-purple-200 mb-8 leading-relaxed">
                Ready to discover what the stars have in store for you? Book your personalized astrological reading today and unlock the cosmic guidance you've been seeking.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MessageCircle className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-serif font-semibold text-white mb-2">
                      WhatsApp Consultation
                    </h3>
                    <p className="text-purple-200">
                      Schedule a personal consultation via WhatsApp for an in-depth discussion about your astrological readings.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Calendar className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-serif font-semibold text-white mb-2">
                      Flexible Scheduling
                    </h3>
                    <p className="text-purple-200">
                      Sessions available 7 days a week, with both daytime and evening slots to accommodate your schedule.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Book via WhatsApp
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mystical night sky with stars"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent"></div>
              <div className="absolute inset-0 flex items-center p-8 sm:p-12">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    Special Offer
                  </h3>
                  <p className="text-purple-200 mb-4">
                    First-time clients receive a complimentary 15-minute cosmic alignment session with any full reading.
                  </p>
                  <div className="inline-block bg-purple-600/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-white font-serif text-lg">
                      Use code: <span className="font-bold">COSMIC25</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;