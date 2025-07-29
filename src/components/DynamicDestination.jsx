import { MapPin, Star, Clock, Users, Camera, Utensils } from "lucide-react";

export default function DynamicDestination({ destination, isVisible }) {
  if (!destination || !isVisible) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header with Image */}
          <div className="relative h-96">
            <img
              src={destination.image || "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop"}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-4xl font-bold mb-2">{destination.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-semibold">{destination.rating || "4.8"}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-5 w-5" />
                  <span>AI Curated Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Description */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About This Destination
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {destination.description}
                </p>

                {/* Highlights */}
                {destination.highlights && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {destination.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Activities */}
                {destination.activities && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Activities</h3>
                    <div className="flex flex-wrap gap-3">
                      {destination.activities.map((activity, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Trip Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-gray-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Best Time to Visit</div>
                        <div className="text-gray-600">{destination.bestTimeToVisit || "Year-round"}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gray-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Difficulty Level</div>
                        <div className="text-gray-600">{destination.difficulty || "Easy"}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Camera className="h-5 w-5 text-gray-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Photo Opportunities</div>
                        <div className="text-gray-600">Excellent</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Utensils className="h-5 w-5 text-gray-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Local Cuisine</div>
                        <div className="text-gray-600">Must-try dishes</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => {
                      const chatButton = document.querySelector('[data-chat-trigger]');
                      if (chatButton) chatButton.click();
                    }}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Plan This Trip with AI
                  </button>
                  <button
                    onClick={() => {
                      const tripsSection = document.getElementById('trips');
                      if (tripsSection) {
                        tripsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                  >
                    Save for Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}