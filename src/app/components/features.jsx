import React from 'react'
import {Plane, Calculator, Calendar, CreditCard, Compass} from 'lucide-react'
import { motion } from "framer-motion"

export const Features = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Plan Your Perfect Adventure</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { icon: <Plane size={32} />, title: "Smart Destinations", desc: "AI-powered destination matching" },
        { icon: <Calendar size={32} />, title: "Itinerary Planning", desc: "Day-by-day customized schedules" },
        { icon: <CreditCard size={32} />, title: "Budget Tools", desc: "Expense tracking and planning" },
        { icon: <Compass size={32} />, title: "Local Insights", desc: "Hidden gems and local favorites" }
      ].map((feature, index) => (
        <motion.div 
          key={index}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4 text-blue-600">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
  )
}
