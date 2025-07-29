import { useQuery } from "@tanstack/react-query";
import { MapPin, Star, Clock, Users } from "lucide-react";

export default function FeaturedDestinations({ onExploreDestination }) {
  const { data: destinations, isLoading } = useQuery({
    queryKey: ['/api/destinations'],
  });

  const featuredDestinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      description: "Famous for its stunning sunsets, white-washed buildings, and crystal-clear waters.",
      image: "https://images.unsplash.com/photo-1570900808791-d58069c45d10?w=400&h=300&fit=crop",
      rating: 4.8,
      duration: "7 days",
      price: "$1,200",
      category: "Romance"
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      description: "A perfect blend of traditional culture and modern innovation.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
      rating: 4.9,
      duration: "10 days",
      price: "$1,800",
      category: "Culture"
    },
    {
      id: 3,
      name: "Bali, Indonesia",
      description: "Tropical paradise with beautiful beaches, temples, and rice terraces.",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
      rating: 4.7,
      duration: "8 days",
      price: "$900",
      category: "Adventure"
    }
  ];

  const handleExplore = (destination) => {
    const destinationData = {
      name: destination.name,
      description: destination.description,
      image: destination.image,
      rating: destination.rating,
      highlights: [
        "AI-curated experiences",
        "Local hidden gems",
        "Personalized itinerary",
        "24/7 travel support"
      ],
      activities: ["Sightseeing", "Local Cuisine", "Cultural Tours", "Photography"],
      bestTimeToVisit: "Year-round",
      difficulty: "Easy"
    };
    onExploreDestination(destinationData);
  };

  return (
    <section id="destinations" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing places curated by our AI travel assistant
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-96"></div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-blue-600">
                    {destination.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{destination.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{destination.duration}</span>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-blue-600">
                      {destination.price}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleExplore(destination)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Explore with AI
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}