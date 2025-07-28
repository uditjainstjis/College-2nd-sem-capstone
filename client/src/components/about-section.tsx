import { Award, Shield, Clock, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About TravelAI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing travel planning with cutting-edge artificial intelligence, 
            making personalized travel experiences accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6">
              At TravelAI, we believe every journey should be extraordinary. Our advanced AI technology 
              analyzes millions of travel data points, user preferences, and real-time information to 
              craft personalized travel experiences that match your unique style and interests.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Whether you're a solo adventurer, family traveler, or business professional, our AI assistant 
              understands your needs and provides instant, intelligent recommendations that save you time 
              and enhance your travel experience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-1">2024</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-1">AI-First</div>
                <div className="text-sm text-gray-600">Approach</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Why Choose TravelAI?</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-yellow-300" />
                  <span>Instant AI-powered recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-green-300" />
                  <span>Save hours of research time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-blue-300" />
                  <span>Trusted by millions worldwide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-orange-300" />
                  <span>Award-winning technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Technology</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Machine Learning</h4>
              <p className="text-gray-600">Advanced algorithms learn from user preferences and travel patterns</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Natural Language Processing</h4>
              <p className="text-gray-600">Understand and respond to natural conversation about travel</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Real-time Data</h4>
              <p className="text-gray-600">Access up-to-date information on destinations, weather, and events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}