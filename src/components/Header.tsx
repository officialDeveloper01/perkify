import React, { useState } from 'react';    
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/50 backdrop-blur-lg z-50 border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              perkify
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#ratings" className="text-gray-300 hover:text-white">Ratings</a>
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#dashboard" className="text-gray-300 hover:text-white">Dashboard</a>
            <a href="#demoform" className="text-gray-300 hover:text-white">Demo Form</a>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#ratings" className="text-gray-300 hover:text-white">Ratings</a>
              <a href="#features" className="text-gray-300 hover:text-white">Features</a>
              <a href="#dashboard" className="text-gray-300 hover:text-white">dashboard</a>
              <a href="#demoform" className="text-gray-300 hover:text-white">Demo Form</a>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}