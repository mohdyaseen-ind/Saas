import { useEffect } from 'react';

export const useScrollEffects = (
  setScrolled: (scrolled: boolean) => void,
  parallaxRefs: React.MutableRefObject<(HTMLElement | null)[]>
) => {
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Parallax effect
      parallaxRefs.current.forEach((el, index) => {
        if (el) {
          const speed = el.dataset.speed || 0.5;
          const yPos = -(window.scrollY * parseFloat(speed.toString()));
          el.style.transform = `translateY(${yPos}px)`;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrolled, parallaxRefs]);
};