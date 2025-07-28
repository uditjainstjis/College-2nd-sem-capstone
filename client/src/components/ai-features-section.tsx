export default function AIFeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powered by Advanced AI</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the future of travel planning with our cutting-edge artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI Feature 1 */}
          <div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center cursor-pointer hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              const chatButton = document.querySelector('[data-chat-trigger]') as HTMLButtonElement;
              if (chatButton) {
                chatButton.click();
                setTimeout(() => {
                  const chatInput = document.querySelector('[data-chat-input]') as HTMLInputElement;
                  const sendButton = document.querySelector('[data-chat-send]') as HTMLButtonElement;
                  if (chatInput && sendButton) {
                    chatInput.value = "Recommend me a perfect destination based on my travel preferences";
                    sendButton.click();
                  }
                }, 500);
              }
            }}
          >
            <div className="bg-amber-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H7l-4 4V5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Smart Recommendations</h3>
            <p className="opacity-90 mb-4">
              Our AI analyzes millions of travel data points to suggest destinations perfectly matched to your preferences.
            </p>
            <span className="text-amber-400 text-sm font-medium">Try it now →</span>
          </div>

          {/* AI Feature 2 */}
          <div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center cursor-pointer hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              const chatButton = document.querySelector('[data-chat-trigger]') as HTMLButtonElement;
              if (chatButton) {
                chatButton.click();
                setTimeout(() => {
                  const chatInput = document.querySelector('[data-chat-input]') as HTMLInputElement;
                  const sendButton = document.querySelector('[data-chat-send]') as HTMLButtonElement;
                  if (chatInput && sendButton) {
                    chatInput.value = "Tell me about the best time to visit Japan and what I should see there";
                    sendButton.click();
                  }
                }, 500);
              }
            }}
          >
            <div className="bg-emerald-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Natural Conversations</h3>
            <p className="opacity-90 mb-4">
              Chat naturally with our AI assistant about any destination, getting instant, detailed information.
            </p>
            <span className="text-emerald-400 text-sm font-medium">Ask anything →</span>
          </div>

          {/* AI Feature 3 */}
          <div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center cursor-pointer hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              const chatButton = document.querySelector('[data-chat-trigger]') as HTMLButtonElement;
              if (chatButton) {
                chatButton.click();
                setTimeout(() => {
                  const chatInput = document.querySelector('[data-chat-input]') as HTMLInputElement;
                  const sendButton = document.querySelector('[data-chat-send]') as HTMLButtonElement;
                  if (chatInput && sendButton) {
                    chatInput.value = "Create a detailed 7-day itinerary for exploring Thailand";
                    sendButton.click();
                  }
                }, 500);
              }
            }}
          >
            <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Dynamic Content</h3>
            <p className="opacity-90 mb-4">
              Watch as our AI generates personalized travel itineraries and destination pages in real-time.
            </p>
            <span className="text-purple-400 text-sm font-medium">Generate now →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
