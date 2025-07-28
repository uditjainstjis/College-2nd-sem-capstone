import { Users, Globe, Heart, MapPin } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Travelers Worldwide</h2>
          <p className="text-xl opacity-90">Join millions who have discovered their perfect destinations with AI</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-2">2M+</div>
            <div className="text-sm opacity-90">Happy Travelers</div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-2">195</div>
            <div className="text-sm opacity-90">Countries Covered</div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-2">10K+</div>
            <div className="text-sm opacity-90">Destinations</div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-sm opacity-90">Satisfaction Rate</div>
          </div>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">What Travelers Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <p className="italic mb-4">"TravelAI helped me discover hidden gems I never would have found on my own!"</p>
                <div className="font-semibold">Sarah M.</div>
                <div className="text-sm opacity-75">Adventure Traveler</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌟</div>
                <p className="italic mb-4">"The AI recommendations were spot-on. Best travel planning tool ever!"</p>
                <div className="font-semibold">Alex K.</div>
                <div className="text-sm opacity-75">Digital Nomad</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">✨</div>
                <p className="italic mb-4">"Saved me hours of research. The personalized itineraries are amazing!"</p>
                <div className="font-semibold">Maria L.</div>
                <div className="text-sm opacity-75">Family Traveler</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}