import { useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturedDestinations from "@/components/featured-destinations";
import StatsSection from "@/components/stats-section";
import AIFeaturesSection from "@/components/ai-features-section";
import AboutSection from "@/components/about-section";
import PlannedTripsSection, { addPlannedTrip } from "@/components/planned-trips-section";
import DynamicDestination from "@/components/dynamic-destination";
import FloatingChat from "@/components/floating-chat";
import Footer from "@/components/footer";
import type { Destination } from "@/types";

export default function Home() {
  const [dynamicDestination, setDynamicDestination] = useState<Destination | null>(null);
  const [showDynamicDestination, setShowDynamicDestination] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleDestinationGenerated = (destination: Destination) => {
    setDynamicDestination(destination);
    setShowDynamicDestination(true);
    
    // Scroll to dynamic destination section
    setTimeout(() => {
      const element = document.getElementById('dynamic-destination');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleExploreDestination = (destination: Destination) => {
    setDynamicDestination(destination);
    setShowDynamicDestination(true);
    
    // Scroll to dynamic destination section
    setTimeout(() => {
      const element = document.getElementById('dynamic-destination');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleDestinationSearch = (destination: string, date: string) => {
    // Create a planned trip when user searches
    addPlannedTrip({
      destination,
      dates: date || "To be determined",
      duration: "Planning in progress...",
      type: "AI Generated",
      details: "Travel plan being created by AI assistant. Please check chat for detailed itinerary.",
      rating: 4.5
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection 
        onOpenChat={handleOpenChat} 
        onDestinationSearch={handleDestinationSearch}
      />
      <FeaturedDestinations onExploreDestination={handleExploreDestination} />
      <StatsSection />
      <AIFeaturesSection />
      <div id="dynamic-destination">
        <DynamicDestination 
          destination={dynamicDestination}
          isVisible={showDynamicDestination}
        />
      </div>
      <AboutSection />
      <PlannedTripsSection />
      <Footer />
      <FloatingChat 
        onDestinationGenerated={handleDestinationGenerated}
        isOpen={isChatOpen}
        setIsOpen={setIsChatOpen}
      />
    </div>
  );
}
