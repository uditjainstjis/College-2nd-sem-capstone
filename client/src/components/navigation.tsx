import { useState } from "react";
import { Link } from "wouter";
import { Plane, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Plane className="text-blue-600 h-8 w-8" />
            <span className="text-xl font-bold text-gray-900">TravelAI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="text-gray-700 hover:text-blue-600 transition-colors">
              Destinations
            </a>
            <button 
              onClick={() => {
                const chatButton = document.querySelector('[data-chat-trigger]') as HTMLButtonElement;
                if (chatButton) chatButton.click();
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              AI Assistant
            </button>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <Button 
              onClick={() => {
                const chatButton = document.querySelector('[data-chat-trigger]') as HTMLButtonElement;
                if (chatButton) {
                  chatButton.click();
                }
              }}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Start Planning
            </Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#destinations" className="text-gray-700 hover:text-blue-600">
                Destinations
              </a>
              <button 
                onClick={() => {
                  const chatButton = document.querySelector('[data-chat-trigger]') as HTMLButtonElement;
                  if (chatButton) chatButton.click();
                }}
                className="text-gray-700 hover:text-blue-600"
              >
                AI Assistant
              </button>
              <a href="#about" className="text-gray-700 hover:text-blue-600">
                About
              </a>
              <Button 
                onClick={() => {
                  const chatButton = document.querySelector('[data-chat-trigger]') as HTMLButtonElement;
                  if (chatButton) {
                    chatButton.click();
                  }
                }}
                className="bg-blue-600 text-white hover:bg-blue-700 w-fit"
              >
                Start Planning
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
