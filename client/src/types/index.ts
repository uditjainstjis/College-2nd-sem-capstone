export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  highlights: Array<{
    title: string;
    text: string;
  }>;
  quickFacts: {
    bestTime: string;
    language: string;
    currency: string;
    timezone: string;
  };
  imageUrl?: string;
  rating: string;
  priceRange: string;
}

export interface ChatMessage {
  id: string;
  sessionId: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatResponse {
  response: string;
  destination?: Destination;
}
