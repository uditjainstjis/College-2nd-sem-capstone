import React from 'react'
import { motion } from "framer-motion"
import { MessageSquare, X, Send } from 'lucide-react'
export const AIchat = ({chatOpen, setChatOpen, messages, loading, input, handleSendMessage, setInput}) => {
  return (
    <motion.div 
    className={`fixed bottom-6 right-6 z-50 ${chatOpen ? 'w-80 h-96' : 'w-16 h-16'} bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300`}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
  >
    {chatOpen ? (
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4 border-b bg-blue-600 text-white">
          <div className="flex items-center">
            <MessageSquare size={18} className="mr-2" />
            <h3 className="font-medium">Travel Assistant</h3>
          </div>
          <button onClick={() => setChatOpen(false)} className="hover:bg-blue-700 p-1 rounded">
            <X size={18} />
          </button>
        </div>
        
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="border-t p-2">
          <div className="flex items-center bg-gray-100 rounded-full overflow-hidden pl-4 pr-2 py-1">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="bg-transparent flex-1 outline-none text-sm"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button 
              onClick={handleSendMessage}
              className="ml-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    ) : (
      <button 
        onClick={() => setChatOpen(true)}
        className="w-full h-full flex items-center justify-center bg-blue-600 text-white rounded-2xl hover:bg-blue-700"
      >
        <MessageSquare size={24} />
      </button>
    )}
  </motion.div>
  )
}
