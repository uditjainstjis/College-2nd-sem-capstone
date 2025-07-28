import { useQuery } from "@tanstack/react-query";
import { Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Destination } from "@/types";

interface FeaturedDestinationsProps {
  onExploreDestination: (destination: Destination) => void;
}

const defaultDestinations: Destination[] = [
  {
    id: "1",
    name: "Santorini",
    country: "Greece",
    description: "Experience breathtaking sunsets, pristine beaches, and charming white-washed villages.",
    highlights: [],
    quickFacts: { bestTime: "", language: "", currency: "", timezone: "" },
    rating: "4.9",
    priceRange: "From $299/night",
    imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "2", 
    name: "Bali",
    country: "Indonesia",
    description: "Immerse yourself in rich culture, stunning rice terraces, and world-class beaches.",
    highlights: [],
    quickFacts: { bestTime: "", language: "", currency: "", timezone: "" },
    rating: "4.8",
    priceRange: "From $149/night",
    imageUrl: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "3",
    name: "Tokyo", 
    country: "Japan",
    description: "Discover the perfect blend of traditional culture and cutting-edge technology.",
    highlights: [],
    quickFacts: { bestTime: "", language: "", currency: "", timezone: "" },
    rating: "4.7",
    priceRange: "From $199/night",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "4",
    name: "Paris",
    country: "France", 
    description: "The city of love awaits with world-class cuisine, art, and romantic ambiance.",
    highlights: [],
    quickFacts: { bestTime: "", language: "", currency: "", timezone: "" },
    rating: "4.9",
    priceRange: "From $249/night",
    imageUrl: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "5",
    name: "Iceland",
    country: "Iceland",
    description: "Witness the spectacular Northern Lights and explore otherworldly landscapes.", 
    highlights: [],
    quickFacts: { bestTime: "", language: "", currency: "", timezone: "" },
    rating: "4.8",
    priceRange: "From $179/night",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "6",
    name: "Maldives",
    country: "Maldives",
    description: "Ultimate tropical paradise with overwater villas and pristine coral reefs.",
    highlights: [],
    quickFacts: { bestTime: "", language: "", currency: "", timezone: "" },
    rating: "5.0", 
    priceRange: "From $599/night",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  }
];

export default function FeaturedDestinations({ onExploreDestination }: FeaturedDestinationsProps) {
  const { data: destinations = defaultDestinations } = useQuery<Destination[]>({
    queryKey: ["/api/destinations"],
    enabled: false // Using default data for now
  });

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover handpicked destinations recommended by our AI based on traveler preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card 
              key={destination.id}
              className="destination-card bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
              onClick={() => onExploreDestination(destination)}
            >
              <div className="relative h-64">
                <img 
                  src={destination.imageUrl} 
                  alt={`${destination.name} destination`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="hidden h-full bg-gray-100 items-center justify-center absolute inset-0">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {destination.name}, {destination.country}
                  </h3>
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 font-semibold">{destination.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">{destination.priceRange}</span>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 font-medium p-0">
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => {
              const chatButton = document.querySelector('[data-chat-trigger]') as HTMLButtonElement;
              if (chatButton) {
                chatButton.click();
                setTimeout(() => {
                  const chatInput = document.querySelector('[data-chat-input]') as HTMLInputElement;
                  const sendButton = document.querySelector('[data-chat-send]') as HTMLButtonElement;
                  if (chatInput && sendButton) {
                    chatInput.value = "Show me more amazing travel destinations around the world";
                    sendButton.click();
                  }
                }, 500);
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Discover More Destinations
          </Button>
        </div>
      </div>
    </section>
  );
}
