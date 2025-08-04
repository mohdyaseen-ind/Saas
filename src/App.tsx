import React, { useState, useRef } from 'react';
import ContactModal from './components/ContactModal';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { useScrollEffects } from './hooks/useScrollEffects';
import { useMousePosition } from './hooks/useMousePosition';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import './styles/animations.css';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  // Refs for animations
  const textRefs = useRef<(HTMLElement | null)[]>([]);
  const parallaxRefs = useRef<(HTMLElement | null)[]>([]);

  // Custom hooks
  useScrollEffects(setScrolled, parallaxRefs);
  useMousePosition(setMousePosition);
  useIntersectionObserver(textRefs);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden cursor-none">
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContactModal} />
      <CustomCursor mousePosition={mousePosition} />

      {/* Video Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-abstract-digital-art-2371/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      <Navigation scrolled={scrolled} onContactClick={handleContactClick} />
      <Hero textRefs={textRefs} parallaxRefs={parallaxRefs} onContactClick={handleContactClick} />
      <About textRefs={textRefs} parallaxRefs={parallaxRefs} />
      <Services textRefs={textRefs} onContactClick={handleContactClick} />
      <Work textRefs={textRefs} parallaxRefs={parallaxRefs} onContactClick={handleContactClick} />
      <CTA textRefs={textRefs} parallaxRefs={parallaxRefs} onContactClick={handleContactClick} />
      <Footer />
    </div>
  );
};

export default App;