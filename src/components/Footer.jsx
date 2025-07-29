import { Plane, Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Plane className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">TravelAI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Discover your next adventure with AI-powered travel recommendations and personalized itineraries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#destinations" className="text-gray-400 hover:text-white">Destinations</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#trips" className="text-gray-400 hover:text-white">My Trips</a></li>
              <li>
                <button 
                  onClick={() => {
                    const chatButton = document.querySelector('[data-chat-trigger]');
                    if (chatButton) chatButton.click();
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  AI Assistant
                </button>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Smart Recommendations</li>
              <li className="text-gray-400">Personalized Itineraries</li>
              <li className="text-gray-400">24/7 AI Support</li>
              <li className="text-gray-400">Instant Planning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>support@travelai.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Available 24/7</li>
              <li>Worldwide Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TravelAI. All rights reserved. Powered by advanced AI technology.
          </p>
        </div>
      </div>
    </footer>
  );
}