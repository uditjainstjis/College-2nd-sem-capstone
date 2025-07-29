import { useState } from "react";
import { MapPin, Calendar, Search } from "lucide-react";

export default function HeroSection({ onOpenChat, onDestinationSearch }) {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (destination.trim()) {
      onDestinationSearch(destination, date);
      onOpenChat(); // Open chat to show the AI planning
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Discover Your Next
          <span className="block text-yellow-300">Adventure</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          Let our AI travel assistant create personalized destinations and itineraries just for you. 
          Explore the world with intelligent recommendations.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 font-semibold"
              >
                <Search className="h-5 w-5" />
                <span>Explore with AI</span>
              </button>
            </div>
          </div>
        </form>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenChat}
            data-chat-trigger
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            🤖 Chat with AI Assistant
          </button>
          <a
            href="#destinations"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Browse Destinations
          </a>
        </div>
      </div>
    </section>
  );
}