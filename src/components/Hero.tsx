import React, { useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  textRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  parallaxRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ textRefs, parallaxRefs, onContactClick }) => {
  const heroRef = useRef(null);

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        <div 
          ref={el => parallaxRefs.current[0] = el}
          data-speed="0.5"
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"
        />
        <div 
          ref={el => parallaxRefs.current[1] = el}
          data-speed="0.3"
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl"
        />
        
        <h1 className="relative z-10">
          <span 
            ref={el => textRefs.current[0] = el}
            className="block text-7xl md:text-9xl font-bold leading-none opacity-0 translate-y-20 transition-all duration-1000 ease-out"
          >
            WE CREATE
          </span>
          <span 
            ref={el => textRefs.current[1] = el}
            className="block text-7xl md:text-9xl font-bold leading-none mt-4 opacity-0 translate-y-20 transition-all duration-1000 delay-200 ease-out"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient">
              EXPERIENCES
            </span>
          </span>
        </h1>
        
        <p 
          ref={el => textRefs.current[2] = el}
          className="text-xl md:text-2xl text-gray-300 mt-8 max-w-3xl mx-auto opacity-0 translate-y-20 transition-all duration-1000 delay-300 ease-out"
        >
          A creative agency that pushes boundaries and creates digital magic through design, code, and strategy.
        </p>

        <div 
          ref={el => textRefs.current[3] = el}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-12 opacity-0 translate-y-20 transition-all duration-1000 delay-500 ease-out"
        >
          <button onClick={scrollToWork} className="group px-10 py-5 bg-white text-black rounded-full hover:scale-110 transition-all duration-300 flex items-center justify-center font-medium">
            View Our Work
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </button>
          <button onClick={onContactClick} className="px-10 py-5 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center font-medium">
            <Play className="mr-2 w-5 h-5" />
            Get Started
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;