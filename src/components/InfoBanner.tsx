import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const InfoBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "ZGŁOŚ SIĘ",
      title: "po dotacje dla swojego klubu sportowego",
      subtitle: "Bezpłatne zgłoszenie • Liczba miejsc ograniczona!",
      ctaText: "Formularz po dotacje"
    },
    {
      badge: "ZGŁOŚ SIĘ",
      title: "Nawet do 300 000 zł na rozwój klubu sportowego",
      subtitle: "Pomoc na każdym etapie • Złóż wniosek już dziś!",
      ctaText: "Formularz po dotacje"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleClick = () => {
    window.open('https://programydlaklubow.pl/zgloszenia', '_blank');
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div 
      onClick={handleClick}
      className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group animate-fade-in"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20 animate-pulse"></div>
      
      {/* Moving stripes animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>

      <div className="relative px-4 py-3 md:px-8 md:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 max-w-7xl mx-auto">
          
          {/* Main content */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 flex-1 text-center md:text-left">
            
            {/* Pulsing icon */}
            <div className="flex-shrink-0">
              <div className="relative">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 animate-pulse" />
                <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-30"></div>
              </div>
            </div>

            {/* Text content with slide transition */}
            <div className="flex-1">
              <div className="text-sm md:text-lg font-bold leading-tight transition-all duration-500">
                <span className="bg-yellow-400 text-red-800 px-2 py-1 rounded-md text-xs md:text-sm font-extrabold mr-2 animate-bounce">
                  {currentSlideData.badge}
                </span>
                <span className="hidden md:inline">
                  {currentSlideData.title}
                </span>
                <span className="md:hidden">
                  {currentSlide === 0 ? "po dotacje dla klubu" : "do 300 000 zł na rozwój"}
                </span>
              </div>
              
              <div className="text-xs md:text-sm opacity-90 mt-1 transition-all duration-500">
                <span className="font-semibold text-yellow-200">
                  {currentSlideData.subtitle}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Arrow */}
          <div className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 md:px-4 md:py-2">
              <span className="text-xs md:text-sm font-semibold transition-all duration-500">
                {currentSlideData.ctaText}
              </span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Progress bar animation */}
        <div className="absolute bottom-0 left-0 h-1 bg-yellow-400 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 w-0 group-hover:w-full transition-all duration-1000"></div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-2 right-4 flex gap-1">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Subtle shadow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
    </div>
  );
};

export default InfoBanner;
