import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateDestinationContent, generateChatResponse, extractDestinationFromMessage } from "./services/openai";
import { insertDestinationSchema, insertChatMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get featured destinations
  app.get("/api/destinations", async (req, res) => {
    try {
      const destinations = await storage.getAllDestinations();
      res.json(destinations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch destinations" });
    }
  });

  // Generate destination content using AI
  app.post("/api/destinations/generate", async (req, res) => {
    try {
      const { destination } = req.body;
      if (!destination) {
        return res.status(400).json({ message: "Destination is required" });
      }

      const destinationData = await generateDestinationContent(destination);
      
      // Save to storage
      const savedDestination = await storage.createDestination(destinationData);
      
      res.json(savedDestination);
    } catch (error) {
      console.error("Error generating destination:", error);
      res.status(500).json({ message: "Failed to generate destination content" });
    }
  });

  // Get specific destination
  app.get("/api/destinations/:id", async (req, res) => {
    try {
      const destination = await storage.getDestination(req.params.id);
      if (!destination) {
        return res.status(404).json({ message: "Destination not found" });
      }
      res.json(destination);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch destination" });
    }
  });

  // Chat with AI
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, sessionId } = req.body;
      if (!message || !sessionId) {
        return res.status(400).json({ message: "Message and session ID are required" });
      }

      // Get conversation history
      const history = await storage.getChatHistory(sessionId);
      
      // Save user message
      await storage.createChatMessage({
        sessionId,
        role: "user",
        content: message
      });

      // Generate AI response
      const aiResponse = await generateChatResponse(message, history.map((h: any) => ({
        role: h.role,
        content: h.content
      })));

      // Save AI response
      await storage.createChatMessage({
        sessionId,
        role: "assistant", 
        content: aiResponse
      });

      // Check if message contains a destination request
      const extractedDestination = await extractDestinationFromMessage(message);
      let destinationData = null;
      
      if (extractedDestination) {
        try {
          destinationData = await generateDestinationContent(extractedDestination);
          await storage.createDestination(destinationData);
        } catch (error) {
          console.error("Error generating destination from chat:", error);
        }
      }

      res.json({ 
        response: aiResponse,
        destination: destinationData
      });
    } catch (error) {
      console.error("Error in chat:", error);
      res.status(500).json({ message: error , });
    }
  });

  // Get chat history
  app.get("/api/chat/:sessionId", async (req, res) => {
    try {
      const history = await storage.getChatHistory(req.params.sessionId);
      res.json(history);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch chat history" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
