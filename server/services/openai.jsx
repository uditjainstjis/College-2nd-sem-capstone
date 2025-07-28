import OpenAI from "openai";
import 'dotenv/config';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "default_key"
});

export async function generateDestinationContent(destination) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a travel expert AI. Generate comprehensive travel information for destinations. 
          Respond with JSON in this exact format: {
            "name": "destination name",
            "country": "country name", 
            "description": "detailed 2-paragraph description",
            "highlights": [
              {"title": "highlight title", "text": "highlight description"},
              {"title": "highlight title", "text": "highlight description"},
              {"title": "highlight title", "text": "highlight description"},
              {"title": "highlight title", "text": "highlight description"}
            ],
            "quickFacts": {
              "bestTime": "best time to visit",
              "language": "local language",
              "currency": "local currency",
              "timezone": "timezone info"
            },
            "rating": "rating out of 5.0",
            "priceRange": "price range per night"
          }`
        },
        {
          role: "user",
          content: `Generate detailed travel information for ${destination}. Include authentic, accurate information about this destination.`
        },
      ],
      response_format: { type: "json_object" },
      max_tokens: 1000,
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    return result;
  } catch (error) {
    throw new Error("Failed to generate destination content: " + error);
  }
}

export async function generateChatResponse(userMessage, conversationHistory) {
  try {
    const messages = [
      {
        role: "system",
        content: `You are an AI travel assistant named TravelAI. You help users discover destinations, plan trips, and provide travel advice. 
        Be enthusiastic, helpful, and informative. When users ask about specific destinations, encourage them to explore those places.
        Keep responses conversational and engaging. If asked about a specific place, mention that you can generate a detailed destination guide.`
      },
      ...conversationHistory.slice(-10),
      {
        role: "user",
        content: userMessage
      }
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      max_tokens: 200,
    });

    return response.choices[0].message.content || "I'm sorry, I couldn't process that request. Please try again.";
  } catch (error) {
    throw new Error("Failed to generate chat response: " + error);
  }
}

export async function extractDestinationFromMessage(message) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Extract destination names from user messages. If a destination is mentioned, return it in the format "City, Country" or just "Country" if no city is specified. If no destination is found, return null. Respond with JSON: {"destination": "extracted destination or null"}`
        },
        {
          role: "user",
          content: message
        }
      ],
      response_format: { type: "json_object" },
      max_tokens: 50,
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    return result.destination;
  } catch (error) {
    return null;
  }
}
