import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-6 md:mb-0">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold">CREATIV</span>
        </div>
        
        <div className="flex space-x-8 text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;