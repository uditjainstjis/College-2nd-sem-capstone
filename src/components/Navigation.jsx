import { useState } from "react";
import { Plane, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">TravelAI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="text-gray-700 hover:text-blue-600 transition-colors">
              Destinations
            </a>
            <button 
              onClick={() => {
                const chatButton = document.querySelector('[data-chat-trigger]');
                if (chatButton) chatButton.click();
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              AI Assistant
            </button>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#trips" className="text-gray-700 hover:text-blue-600 transition-colors">
              My Trips
            </a>
            <button 
              onClick={() => {
                const chatButton = document.querySelector('[data-chat-trigger]');
                if (chatButton) chatButton.click();
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Planning
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <div className="flex flex-col space-y-4">
                <a href="#destinations" className="text-gray-700 hover:text-blue-600">
                  Destinations
                </a>
                <button 
                  onClick={() => {
                    const chatButton = document.querySelector('[data-chat-trigger]');
                    if (chatButton) chatButton.click();
                  }}
                  className="text-gray-700 hover:text-blue-600"
                >
                  AI Assistant
                </button>
                <a href="#about" className="text-gray-700 hover:text-blue-600">
                  About
                </a>
                <a href="#trips" className="text-gray-700 hover:text-blue-600">
                  My Trips
                </a>
                <button 
                  onClick={() => {
                    const chatButton = document.querySelector('[data-chat-trigger]');
                    if (chatButton) chatButton.click();
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full text-left"
                >
                  Start Planning
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}