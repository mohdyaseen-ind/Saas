import React from 'react';
import { Palette, Code2, Rocket } from 'lucide-react';

export const services = [
  {
    icon: React.createElement(Palette, { className: "w-8 h-8" }),
    title: "Brand Identity",
    description: "Crafting unique visual identities that tell your story and resonate with your audience",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    icon: React.createElement(Code2, { className: "w-8 h-8" }),
    title: "Web Development",
    description: "Building immersive digital experiences with cutting-edge technology and flawless execution",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    icon: React.createElement(Rocket, { className: "w-8 h-8" }),
    title: "Digital Marketing",
    description: "Strategies that amplify your message and connect you with the right audience",
    gradient: "from-orange-600 to-red-600"
  }
];