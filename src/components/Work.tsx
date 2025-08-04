import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { works } from '../data/works';

interface WorkProps {
  textRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  parallaxRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  onContactClick: () => void;
}

const Work: React.FC<WorkProps> = ({ textRefs, parallaxRefs, onContactClick }) => {
  const worksRef = useRef(null);

  return (
    <section id="work" ref={worksRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 
            ref={el => textRefs.current[13] = el}
            className="text-5xl md:text-7xl font-bold mb-6 opacity-0 translate-y-20 transition-all duration-1000 ease-out"
          >
            Selected Works
          </h2>
        </div>

        <div className="space-y-32">
          {works.map((work, index) => (
            <div 
              key={index}
              ref={el => textRefs.current[14 + index] = el}
              className={`group relative opacity-0 translate-y-20 transition-all duration-1000 ease-out ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-16 items-center`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-sm mb-6">
                  {work.category}
                </div>
                <h3 className="text-4xl md:text-6xl font-bold mb-6">{work.title}</h3>
                <p className="text-xl text-gray-300 mb-8">
                  A groundbreaking project that redefined industry standards and created lasting impact.
                </p>
                <button onClick={onContactClick} className="group/btn px-8 py-4 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center">
                  Start Similar Project
                  <ArrowUpRight className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
              
              <div className="flex-1 relative">
                <div 
                  ref={el => parallaxRefs.current[3 + index] = el}
                  data-speed="0.1"
                  className={`absolute -inset-4 bg-gradient-to-br ${work.color} rounded-3xl blur-2xl opacity-50`}
                />
                <img 
                  src={work.image}
                  alt={work.title}
                  className="relative z-10 rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;