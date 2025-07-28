import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 6970;
// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());
app.use(express.static('dist'));

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;

    // Build conversation context
    const messages = [
      {
        role: 'system',
        content: `You are a helpful AI travel assistant. You help users discover destinations, plan trips, and provide travel advice. 
        
        When users ask about destinations or want to plan trips:
        1. Provide detailed, helpful travel information
        2. Include practical tips and recommendations
        3. Be enthusiastic about travel experiences
        4. If they mention a specific destination, provide rich details about it
        
        Keep responses conversational and engaging. Focus on being helpful with travel planning.`
      },
      ...conversationHistory.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: 'user',
        content: message
      }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Using gpt-3.5-turbo for faster responses
      messages: messages,
      temperature: 0.7,
      max_tokens: 500
    });

    const response = completion.choices[0].message.content;

    // Check if we should generate a destination (simple keyword detection)
    const shouldGenerateDestination = message.toLowerCase().includes('destination') || 
                                    message.toLowerCase().includes('travel to') ||
                                    message.toLowerCase().includes('visit') ||
                                    message.toLowerCase().includes('trip to');

    let destination = null;
    if (shouldGenerateDestination) {
      // Extract potential destination name from the message
      const words = message.split(' ');
      const destinationName = words.find(word => 
        word.length > 3 && 
        word[0] === word[0].toUpperCase()
      ) || 'Unknown Destination';

      destination = {
        name: destinationName,
        description: `Experience the magic of ${destinationName} with AI-curated recommendations tailored just for you.`,
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop",
        rating: 4.8,
        highlights: [
          "AI-curated experiences",
          "Local hidden gems", 
          "Personalized itinerary",
          "24/7 travel support"
        ],
        activities: ["Sightseeing", "Local Cuisine", "Cultural Tours", "Photography"],
        bestTimeToVisit: "Year-round",
        difficulty: "Easy"
      };
    }

    res.json({ 
      response,
      destination 
    });

  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ 
      error: 'Sorry, I encountered an error. Please try again.' 
    });
  }
});

// Destinations endpoint (optional, for future use)
app.get('/api/destinations', (req, res) => {
  res.json([]);
});

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});