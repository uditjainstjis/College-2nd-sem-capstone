import { randomUUID } from "crypto";

// Dummy fallback schemas if you're using JS and can't import from @shared/schema
// Replace these with actual values if available
// Or remove the comments below if the package `@shared/schema` is being used in JS too
// import { Destination, InsertDestination, ChatMessage, InsertChatMessage } from "@shared/schema";

// Memory storage class without TS types
export class MemStorage {
  constructor() {
    this.destinations = new Map();
    this.chatMessages = new Map();
  }

  async getAllDestinations() {
    return Array.from(this.destinations.values());
  }

  async getDestination(id) {
    return this.destinations.get(id);
  }

  async createDestination(insertDestination) {
    const id = randomUUID();
    const destination = {
      ...insertDestination,
      id,
      imageUrl: insertDestination.imageUrl || null,
      createdAt: new Date()
    };
    this.destinations.set(id, destination);
    return destination;
  }

  async getChatHistory(sessionId) {
    return this.chatMessages.get(sessionId) || [];
  }

  async createChatMessage(insertMessage) {
    const id = randomUUID();
    const message = {
      ...insertMessage,
      id,
      timestamp: new Date()
    };

    if (!this.chatMessages.has(insertMessage.sessionId)) {
      this.chatMessages.set(insertMessage.sessionId, []);
    }

    this.chatMessages.get(insertMessage.sessionId).push(message);
    return message;
  }
}

export const storage = new MemStorage();
