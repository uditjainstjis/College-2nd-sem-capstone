"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { HeroParallax } from "../components/ui/hero-parallax"
import { Spotlight } from "../components/ui/spotlight"
import { Button } from "../components/ui/button"
import { Textarea } from "../components/ui/textarea"
import { travelPlaces, mock } from "../components/ui/data"
import {AIchat} from './components/AIchat'
import { MessageSquare, Send, X, MapPin, Users } from "lucide-react"
import { Features } from "./components/features"
export default function Home() {
  const [input, setInput] = useState("")
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi there! I'm your AI travel assistant. Tell me what kind of trip you're looking for, and I'll help you plan it!" }
  ])
  const [loading, setLoading] = useState(false)
  const [recommendations, setRecommendations] = useState([])
  const [showResults, setShowResults] = useState(false)

  const handleSendMessage = async () => {
    if (!input.trim()) return
    
    const userMessage = { role: "user", content: input }
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setLoading(true)
    setTimeout(() => {
      const aiResponse = {
        role: "assistant", 
        content: `Based on your interest in "${userMessage.content}", I recommend checking out these destinations! I've added them to your recommendations.`
      }
      setMessages(prev => [...prev, aiResponse])
      setRecommendations(mock)
      setShowResults(true)
      setLoading(false)
    }, 1500)
  }

  // Handle generate trip button
  const handleGenerateTrip = () => {
    if (input.trim()) {
      setChatOpen(true)
      handleSendMessage()
    }
  }

  return (
    <main className="min-h-screen w-full bg-white text-black">
      <HeroParallax products={travelPlaces}/>
      <Features/>
      {/* AI Chat Interface */}
      <AIchat chatOpen={chatOpen} setChatOpen={setChatOpen} messages={messages} loading={loading} setLoading={setLoading} handleSendMessage={handleSendMessage} input={input} setInput={setInput}/>

      {/* Trip Recommendations Results */}
      {showResults && (
        <motion.div 
          className="py-16 px-4 bg-gray-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">Your Perfect Trips</h2>
            <p className="text-center text-gray-600 mb-12">Based on your preferences, we've curated these trips just for you</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendations.map((rec, index) => (
                <motion.div 
                  key={rec.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img src={rec.image} alt={rec.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{rec.title}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin size={16} className="mr-1" />
                      <span>{rec.location}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm mb-4">
                      <div className="">{rec.duration}</div>
                      <div className="font-bold text-blue-600">{rec.price}</div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {rec.tags.map(tag => (
                        <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button className="w-full">View Details</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </main>
  )
}