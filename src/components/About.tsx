import React, { useRef } from 'react';

interface AboutProps {
  textRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  parallaxRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

const About: React.FC<AboutProps> = ({ textRefs, parallaxRefs }) => {
  const aboutRef = useRef(null);

  return (
    <section id="about" ref={aboutRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 
            ref={el => textRefs.current[4] = el}
            className="text-5xl md:text-7xl font-bold mb-8 opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out"
          >
            We are the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              storytellers
            </span>
          </h2>
          <p 
            ref={el => textRefs.current[5] = el}
            className="text-xl text-gray-300 leading-relaxed opacity-0 translate-x-[-50px] transition-all duration-1000 delay-200 ease-out"
          >
            Founded in 2020, we've been pushing the boundaries of digital creativity. Our team of designers, developers, and strategists work together to create experiences that inspire, engage, and convert.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div 
              ref={el => textRefs.current[6] = el}
              className="opacity-0 translate-y-20 transition-all duration-1000 delay-300 ease-out"
            >
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">150+</div>
              <div className="text-gray-400 mt-2">Projects Completed</div>
            </div>
            <div 
              ref={el => textRefs.current[7] = el}
              className="opacity-0 translate-y-20 transition-all duration-1000 delay-400 ease-out"
            >
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">50+</div>
              <div className="text-gray-400 mt-2">Happy Clients</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div 
            ref={el => parallaxRefs.current[2] = el}
            data-speed="0.2"
            className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl"
          />
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
            alt="Team"
            className="relative z-10 rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;