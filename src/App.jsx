import { useState } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import FeaturedDestinations from "./components/FeaturedDestinations";
import StatsSection from "./components/StatsSection";
import AIFeaturesSection from "./components/AIFeaturesSection";
import AboutSection from "./components/AboutSection";
import PlannedTripsSection, { addPlannedTrip } from "./components/PlannedTripsSection";
import DynamicDestination from "./components/DynamicDestination";
import FloatingChat from "./components/FloatingChat";
import Footer from "./components/Footer";

export default function App() {
  const [dynamicDestination, setDynamicDestination] = useState(null);
  const [showDynamicDestination, setShowDynamicDestination] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleDestinationGenerated = (destination) => {
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

  const handleExploreDestination = (destination) => {
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

  const handleDestinationSearch = (destination, date) => {
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