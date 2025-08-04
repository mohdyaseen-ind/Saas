import React from 'react';

interface CTAProps {
  textRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  parallaxRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  onContactClick: () => void;
}

const CTA: React.FC<CTAProps> = ({ textRefs, parallaxRefs, onContactClick }) => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div 
        ref={el => parallaxRefs.current[6] = el}
        data-speed="0.5"
        className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-cyan-600/30"
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 
          ref={el => textRefs.current[17] = el}
          className="text-5xl md:text-7xl font-bold mb-8 opacity-0 translate-y-20 transition-all duration-1000 ease-out"
        >
          Ready to create
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
            something amazing?
          </span>
        </h2>
        <p 
          ref={el => textRefs.current[18] = el}
          className="text-xl text-gray-300 mb-12 opacity-0 translate-y-20 transition-all duration-1000 delay-200 ease-out"
        >
          Let's turn your vision into reality. Get in touch and let's start creating.
        </p>
        <button 
          ref={el => textRefs.current[19] = el}
          onClick={onContactClick}
          className="px-12 py-5 bg-white text-black rounded-full hover:scale-110 transition-all duration-300 text-lg font-medium opacity-0 translate-y-20 transition-all duration-1000 delay-400 ease-out"
        >
          Start a Project
        </button>
      </div>
    </section>
  );
};

export default CTA;