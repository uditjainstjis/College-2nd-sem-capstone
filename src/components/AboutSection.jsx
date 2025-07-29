import { CheckCircle, Users, Lightbulb, Heart } from "lucide-react";

export default function AboutSection() {
  const features = [
    "AI-powered destination recommendations",
    "Personalized travel itineraries", 
    "24/7 intelligent travel assistant",
    "Real-time trip planning and updates",
    "Curated local experiences",
    "Smart budget optimization"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Travel Blogger",
      content: "TravelAI completely transformed how I plan my trips. The AI recommendations are spot-on!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Business Traveler",
      content: "The instant planning feature saved me hours. Best travel tool I've ever used.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Adventure Seeker", 
      content: "Found hidden gems I never would have discovered on my own. Amazing AI technology!",
      rating: 5
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About TravelAI
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're revolutionizing travel planning with cutting-edge artificial intelligence. 
              Our platform combines machine learning with real traveler insights to create 
              personalized experiences that match your unique preferences and style.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Users</div>
              </div>
              <div className="text-center">
                <Lightbulb className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">1M+</div>
                <div className="text-sm text-gray-600">AI Suggestions</div>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 text-blue-600 mx-auto mb-2" />  
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              What Travelers Say
            </h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}