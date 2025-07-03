
import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const ResponsiveBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "ZGŁOŚ SIĘ",
      title: "po dotacje dla swojego klubu sportowego",
      titleMobile: "po dotacje dla klubu",
      subtitle: "Bezpłatne zgłoszenie • Liczba miejsc ograniczona!",
      ctaText: "Formularz po dotacje"
    },
    {
      badge: "ZGŁOŚ SIĘ", 
      title: "Nawet do 300 000 zł na rozwój klubu sportowego",
      titleMobile: "do 300 000 zł na rozwój",
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
      className="relative w-full overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white cursor-pointer transition-all duration-300 hover:shadow-2xl group animate-fade-in"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20 animate-pulse"></div>
      
      {/* Moving stripes animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>

      {/* Main content - fully responsive */}
      <div className="relative w-full px-3 py-2 sm:px-4 sm:py-3 lg:px-8 lg:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 w-full max-w-7xl mx-auto">
          
          {/* Left content - icon + text */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-1 w-full sm:w-auto justify-center sm:justify-start">
            
            {/* Pulsing icon */}
            <div className="flex-shrink-0">
              <div className="relative">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 animate-pulse" />
                <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-30"></div>
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 text-center sm:text-left min-w-0">
              <div className="text-xs sm:text-sm lg:text-lg font-bold leading-tight transition-all duration-500">
                <span className="bg-yellow-400 text-red-800 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs sm:text-sm lg:text-sm font-extrabold mr-1 sm:mr-2 animate-bounce whitespace-nowrap">
                  {currentSlideData.badge}
                </span>
                {/* Desktop title */}
                <span className="hidden sm:inline">
                  {currentSlideData.title}
                </span>
                {/* Mobile title */}
                <span className="sm:hidden text-xs leading-tight">
                  {currentSlideData.titleMobile}
                </span>
              </div>
              
              <div className="text-xs sm:text-sm lg:text-sm opacity-90 mt-1 transition-all duration-500">
                <span className="font-semibold text-yellow-200 leading-tight">
                  {currentSlideData.subtitle}
                </span>
              </div>
            </div>
          </div>

          {/* Right CTA - responsive */}
          <div className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300 w-full sm:w-auto mt-2 sm:mt-0">
            <div className="flex items-center justify-center sm:justify-end gap-1 sm:gap-2 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2">
              <span className="text-xs sm:text-sm lg:text-sm font-semibold transition-all duration-500 whitespace-nowrap">
                {currentSlideData.ctaText}
              </span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Progress bars */}
      <div className="absolute bottom-0 left-0 h-0.5 sm:h-1 bg-yellow-400 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-yellow-400 to-orange-400 w-0 group-hover:w-full transition-all duration-1000"></div>
      
      {/* Slide indicators - responsive positioning */}
      <div className="absolute bottom-1 right-2 sm:bottom-2 sm:right-4 flex gap-1">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Subtle shadow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
    </div>
  );
};

export default ResponsiveBanner;
