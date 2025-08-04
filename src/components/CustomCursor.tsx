import React, { useRef, useEffect } from 'react';

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
}

const CustomCursor: React.FC<CustomCursorProps> = ({ mousePosition }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${mousePosition.x}px`;
      cursorRef.current.style.top = `${mousePosition.y}px`;
    }
  }, [mousePosition]);

  return (
    <div 
      ref={cursorRef}
      className="custom-cursor fixed w-6 h-6 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference transition-transform duration-100"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  );
};

export default CustomCursor;