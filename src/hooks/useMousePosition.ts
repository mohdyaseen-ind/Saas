import { useEffect } from 'react';

export const useMousePosition = (
  setMousePosition: (position: { x: number; y: number }) => void
) => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [setMousePosition]);
};