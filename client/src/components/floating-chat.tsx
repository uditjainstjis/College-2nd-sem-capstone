import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Send, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { apiRequest } from "@/lib/queryClient";
import type { ChatResponse, Destination } from "@/types";

interface FloatingChatProps {
  onDestinationGenerated: (destination: Destination) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function FloatingChat({ onDestinationGenerated, isOpen, setIsOpen }: FloatingChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hi! I'm your AI travel assistant. Ask me about any destination and I'll create a personalized guide for you! 🌍",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef(Math.random().toString(36).substring(7));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const chatMutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await apiRequest("POST", "/api/chat", {
        message,
        sessionId: sessionId.current
      });
      return response.json() as Promise<ChatResponse>;
    },
    onSuccess: (data) => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      }]);
      
      if (data.destination) {
        onDestinationGenerated(data.destination);
      }
    },
    onError: () => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm sorry, I encountered an error. Please try again.",
        timestamp: new Date()
      }]);
    }
  });

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    
    setMessages(prev => [...prev, {
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    }]);

    chatMutation.mutate(userMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const TypingIndicator = () => (
    <div className="flex items-center space-x-3 mb-4">
      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
        <MessageCircle className="w-4 h-4 text-blue-600" />
      </div>
      <div className="bg-gray-100 rounded-2xl p-3">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full shadow-xl bg-blue-600 hover:bg-blue-700 hover:scale-110 transition-all"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="absolute bottom-20 right-0 w-96 h-96 shadow-2xl border-0 flex flex-col">
          {/* Chat Header */}
          <CardHeader className="bg-blue-600 text-white p-4 rounded-t-lg flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold">TravelAI Assistant</h3>
                  <p className="text-xs opacity-90">Online • Ready to help</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          {/* Chat Messages */}
          <CardContent className="flex-1 p-4 overflow-y-auto space-y-4 min-h-0">
            {messages.map((message, index) => (
              <div key={index} className="chat-message animate-slide-up">
                {message.role === 'user' ? (
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-sm">{message.content}</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 max-w-xs">
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {chatMutation.isPending && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200 flex-shrink-0">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about any destination..."
                className="flex-1"
                disabled={chatMutation.isPending}
                data-chat-input
              />
              <Button 
                onClick={handleSendMessage}
                disabled={chatMutation.isPending || !inputValue.trim()}
                className="bg-blue-600 hover:bg-blue-700"
                data-chat-send
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
