import { Brain, MessageSquare, Map, Zap } from "lucide-react";

export default function AIFeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "Smart Recommendations",
      description: "Our AI analyzes your preferences to suggest perfect destinations tailored just for you."
    },
    {
      icon: MessageSquare,
      title: "24/7 Travel Assistant",
      description: "Chat with our AI anytime for instant travel advice, tips, and personalized guidance."
    },
    {
      icon: Map,
      title: "Dynamic Itineraries",
      description: "Get custom travel plans that adapt to your schedule, budget, and interests in real-time."
    },
    {
      icon: Zap,
      title: "Instant Planning",
      description: "Plan your entire trip in minutes with AI-powered suggestions for flights, hotels, and activities."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powered by Advanced AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of travel planning with our intelligent features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full mb-6">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}