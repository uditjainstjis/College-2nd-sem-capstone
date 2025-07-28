import { useState } from "react";
import { Search, Plane, MapPin, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeroSectionProps {
  onOpenChat: () => void;
  onDestinationSearch: (destination: string, date: string) => void;
}

export default function HeroSection({ onOpenChat, onDestinationSearch }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [travelDate, setTravelDate] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onDestinationSearch(searchQuery.trim(), travelDate);
      onOpenChat();
      // Send the search query to chat after a short delay
      setTimeout(() => {
        const chatInput = document.querySelector('[data-chat-input]') as HTMLInputElement;
        const sendButton = document.querySelector('[data-chat-send]') as HTMLButtonElement;
        if (chatInput && sendButton) {
          const dateText = travelDate ? ` for ${travelDate}` : '';
          chatInput.value = `I want to visit ${searchQuery}${dateText}. Please create a detailed travel plan and itinerary for me.`;
          sendButton.click();
        }
      }, 500);
    }
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Floating travel icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Plane className="absolute top-20 left-10 text-white/20 w-16 h-16 animate-bounce" />
        <MapPin className="absolute top-40 right-20 text-white/20 w-12 h-12 animate-bounce" style={{animationDelay: '0.5s'}} />
        <Camera className="absolute bottom-40 left-20 text-white/20 w-14 h-14 animate-bounce" style={{animationDelay: '1s'}} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Discover Your Next
          <span className="block text-amber-400">Adventure</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up">
          Let our AI-powered travel companion guide you to extraordinary destinations tailored just for you
        </p>
        
        {/* Hero Search Bar */}
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 animate-slide-up">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input 
                type="text" 
                placeholder="Where do you want to go?" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50"
              />
            </div>
            <div className="flex-1">
              <Input 
                type="date" 
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white/50"
              />
            </div>
            <Button 
              onClick={handleSearch}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold"
            >
              <Search className="w-4 h-4 mr-2" />
              Explore
            </Button>
          </div>
        </div>

        {/* CTA for AI Chat */}
        <div className="mt-8">
          <Button 
            onClick={onOpenChat}
            data-chat-trigger
            variant="outline"
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold backdrop-blur-md border border-white/30"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H7l-4 4V5z"/>
            </svg>
            Ask Our AI Travel Assistant
          </Button>
        </div>
      </div>
    </section>
  );
}
