import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Camera, Video, Mic, Sparkles, Star, CheckCircle, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ type: 'user' | 'bot', message: string }>>([]);

  const sendMessage = () => {
    if (!chatInput.trim()) return;

    setChatMessages(prev => [...prev, { type: 'user', message: chatInput }]);

    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        type: 'bot',
        message: `I can help you create amazing AI avatars! Your message: "${chatInput}" - Let me guide you through our avatar creation process.`
      }]);
    }, 1000);

    setChatInput('');
  };

  const startListening = () => {
    toast.info("Voice input feature coming soon!");
  };

  const handlePlanSelect = (plan: string) => {
    toast.success(`Selected ${plan} plan! Redirecting to checkout...`);
  };

  const createAvatar = () => {
    toast.success("Avatar creation started! Please upload your photo to begin.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* You already included all header and pricing sections above. Keeping this short for focus */}

      {/* Chatbot Section */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <h2 className="text-4xl font-bold mb-8 text-center flex items-center justify-center">
          <MessageSquare className="w-10 h-10 mr-3 text-cyan-400" />
          🤖 SCENE MAKE Chatbot
        </h2>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardContent className="p-6">
            <div className="bg-gray-900 rounded-lg p-4 h-64 overflow-y-auto mb-4">
              {chatMessages.length === 0 ? (
                <p className="text-gray-500 text-center">Ask me anything about AI avatar creation!</p>
              ) : (
                chatMessages.map((msg, index) => (
                  <div key={index} className={`mb-3 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block p-3 rounded-lg max-w-xs ${msg.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-200'
                      }`}>
                      {msg.message}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex space-x-2">
              <Input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask something..."
                className="flex-1 bg-gray-700 border-gray-600 text-white"
              />
              <Button onClick={sendMessage} className="bg-blue-600 hover:bg-blue-700">
                Send
              </Button>
              <Button onClick={startListening} variant="outline" className="border-gray-600">
                <Mic className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-gray-700 text-center text-gray-400">
        <p>© 2025 · SCENE MAKE AI · All rights reserved</p>
      </footer>
    </div>
  );
};

export default Index;
