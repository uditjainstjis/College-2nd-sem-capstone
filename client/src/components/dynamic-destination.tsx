import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Destination } from "@/types";

interface DynamicDestinationProps {
  destination: Destination | null;
  isVisible: boolean;
}

export default function DynamicDestination({ destination, isVisible }: DynamicDestinationProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isVisible && destination) {
      setIsLoading(true);
      // Simulate loading for smooth UX
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [destination, isVisible]);

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Dynamic Hero Image */}
          <div className="h-96 bg-gradient-to-r from-blue-600 to-blue-400 relative">
            {destination?.imageUrl && (
              <img 
                src={destination.imageUrl} 
                alt={destination.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">
                  {isLoading ? "Loading..." : destination?.name || "Destination"}
                </h1>
                <p className="text-xl">
                  {isLoading ? "Discovering amazing places for you" : `Explore ${destination?.name || "this destination"}`}
                </p>
              </div>
            </div>
          </div>

          {/* Dynamic Content */}
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none mb-8">
                  {isLoading ? (
                    <div className="space-y-4">
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                    </div>
                  ) : (
                    <p className="text-lg leading-relaxed">
                      {destination?.description || "Loading destination information..."}
                    </p>
                  )}
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {isLoading ? (
                    // Loading skeletons
                    Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6">
                        <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    ))
                  ) : (
                    destination?.highlights?.slice(0, 4).map((highlight, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6">
                        <h3 className="font-semibold text-blue-600 mb-2">{highlight.title}</h3>
                        <p className="text-gray-600">{highlight.text}</p>
                      </div>
                    )) || Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6">
                        <h3 className="font-semibold text-blue-600 mb-2">Loading...</h3>
                        <p className="text-gray-600">Information loading...</p>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Facts */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-600 mb-4">Quick Facts</h3>
                  <div className="space-y-3">
                    {isLoading ? (
                      Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="flex justify-between">
                          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
                          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Best Time:</span>
                          <span className="font-medium">{destination?.quickFacts?.bestTime || "Loading..."}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Language:</span>
                          <span className="font-medium">{destination?.quickFacts?.language || "Loading..."}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Currency:</span>
                          <span className="font-medium">{destination?.quickFacts?.currency || "Loading..."}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Time Zone:</span>
                          <span className="font-medium">{destination?.quickFacts?.timezone || "Loading..."}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Weather Widget */}
                <div className="bg-emerald-50 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-600 mb-4">Current Weather</h3>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🌤️</div>
                    <div className="text-2xl font-bold">
                      {isLoading ? "Loading..." : "24°C"}
                    </div>
                    <div className="text-gray-600">
                      {isLoading ? "Weather data loading..." : "Partly Cloudy"}
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-amber-500 to-red-500 rounded-xl p-6 text-white text-center">
                  <h3 className="font-semibold mb-2">Ready to Visit?</h3>
                  <p className="mb-4 opacity-90">Start planning your perfect trip</p>
                  <Button 
                    onClick={() => {
                      const chatButton = document.querySelector('[data-chat-trigger]') as HTMLButtonElement;
                      if (chatButton) {
                        chatButton.click();
                        setTimeout(() => {
                          const chatInput = document.querySelector('[data-chat-input]') as HTMLInputElement;
                          const sendButton = document.querySelector('[data-chat-send]') as HTMLButtonElement;
                          if (chatInput && sendButton) {
                            chatInput.value = `Help me plan a detailed trip to ${destination?.name || 'this destination'}. I need information about accommodation, activities, budget, and itinerary.`;
                            sendButton.click();
                          }
                        }, 500);
                      }
                    }}
                    className="bg-white text-amber-600 hover:bg-gray-100"
                  >
                    Plan My Trip
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
