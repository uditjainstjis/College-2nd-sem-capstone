import { Users, MapPin, Star, Award } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Happy Travelers",
      description: "Satisfied customers worldwide"
    },
    {
      icon: MapPin,
      number: "200+",
      label: "Destinations",
      description: "Cities and countries covered"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Rating",
      description: "Average customer satisfaction"
    },
    {
      icon: Award,
      number: "15+",
      label: "Awards",
      description: "Travel industry recognition"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Trusted by Travelers Worldwide
          </h2>
          <p className="text-xl opacity-90">
            Join thousands who have discovered their perfect destinations with our AI
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                  <IconComponent className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}