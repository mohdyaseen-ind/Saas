import React, { useRef } from 'react';
import { services } from '../data/services';

interface ServicesProps {
  textRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  onContactClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ textRefs, onContactClick }) => {
  const servicesRef = useRef(null);

  return (
    <section id="services" ref={servicesRef} className="py-32 px-6 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 
            ref={el => textRefs.current[8] = el}
            className="text-5xl md:text-7xl font-bold mb-6 opacity-0 translate-y-20 transition-all duration-1000 ease-out"
          >
            What we do
          </h2>
          <p 
            ref={el => textRefs.current[9] = el}
            className="text-xl text-gray-300 max-w-3xl mx-auto opacity-0 translate-y-20 transition-all duration-1000 delay-200 ease-out"
          >
            We blend creativity with technology to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => textRefs.current[10 + index] = el}
              className={`group relative p-10 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 opacity-0 translate-y-20 transition-all duration-1000 ease-out`}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <button 
                  onClick={onContactClick}
                  className="mt-6 px-6 py-2 border border-white/20 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-sm"
                >
                  Learn More
                </button>
                
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;