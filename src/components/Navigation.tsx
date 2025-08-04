import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
  onContactClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled, onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-2xl' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20" />
            </div>
            <span className="text-2xl font-bold tracking-tight">CREATIV</span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <button onClick={() => scrollToSection('about')} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300">Services</button>
            <button onClick={() => scrollToSection('work')} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300">Work</button>
            <button onClick={onContactClick} className="magnetic-button px-8 py-3 bg-white text-black rounded-full hover:scale-110 transition-transform duration-300">
              Let's Talk
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-60">
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-t border-white/10 md:hidden">
              <div className="px-6 py-8 space-y-6">
                <button onClick={() => scrollToSection('about')} className="block w-full text-left text-lg hover:text-purple-400 transition-colors">About</button>
                <button onClick={() => scrollToSection('services')} className="block w-full text-left text-lg hover:text-purple-400 transition-colors">Services</button>
                <button onClick={() => scrollToSection('work')} className="block w-full text-left text-lg hover:text-purple-400 transition-colors">Work</button>
                <button onClick={() => { onContactClick(); setIsMenuOpen(false); }} className="w-full px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition-transform duration-300 text-center">
                  Let's Talk
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;