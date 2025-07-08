
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Camera, Video, Mic, Sparkles, Star, CheckCircle, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{type: 'user' | 'bot', message: string}>>([]);

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, { type: 'user', message: chatInput }]);
    
    // Simulate bot response
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
      {/* Header */}
      <header className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            🎬 SCENE MAKE AI
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Cinematic avatars · HD automation · Voice interaction
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
              <Sparkles className="w-4 h-4 mr-1" />
              AI Powered
            </Badge>
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
              <Star className="w-4 h-4 mr-1" />
              HD Quality
            </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 space-y-20">
        {/* AI Photography Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
            <Camera className="w-10 h-10 mr-3 text-cyan-400" />
            AI Photography
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Create lifelike studio-quality images with zero equipment. Just upload and generate professional portraits with multiple styles.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/94a4c21f-2a21-45e2-b3f9-953590767fb6.png" 
                  alt="Professional AI Portrait" 
                  className="w-full h-64 object-cover group-hover:brightness-110 transition-all duration-300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-cyan-400">Studio Quality</h3>
                  <p className="text-sm text-gray-400">Professional lighting and composition</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/f094cc68-b03c-47c7-8003-2cbe12497e84.png" 
                  alt="Multiple AI Styles" 
                  className="w-full h-64 object-cover group-hover:brightness-110 transition-all duration-300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-purple-400">Multiple Styles</h3>
                  <p className="text-sm text-gray-400">Noir, Neon, Natural, Action & more</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 h-full flex flex-col justify-center">
                <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold text-yellow-400 text-center mb-2">AI Magic</h3>
                <p className="text-sm text-gray-400 text-center">Transform any photo into cinematic art</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Talking Avatar Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 flex items-center">
              <Video className="w-10 h-10 mr-3 text-green-400" />
              Talking Video Avatars
            </h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                ✨ Rich expressions
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                🎭 Lifelike motion
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                🌍 30+ languages
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                🎥 HD quality
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                🟩 Green screen effects
              </li>
            </ul>
          </div>
          <div className="relative">
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Video className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <p className="text-gray-400">Sample talking avatar video</p>
                    <p className="text-sm text-gray-500 mt-2">Upload your photo to see the magic!</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Watch Demo Video
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Avatar Creation Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6">🎭 Create Your Avatar</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">1. Upload Photo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">📷 Upload your best portrait photo for AI training</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-purple-400" />
                </div>
                <CardTitle className="text-purple-400">2. AI Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">🤖 AI learns your likeness in just ~5 minutes</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-green-400" />
                </div>
                <CardTitle className="text-green-400">3. Generate Video</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">🎬 Instantly create talking avatar videos</p>
              </CardContent>
            </Card>
          </div>
          
          <Button 
            onClick={createAvatar}
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
          >
            Create My Avatar
          </Button>
        </section>

        {/* Pricing Plans Section */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">💸 Pricing Plans</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400">Forever Free</CardTitle>
                <CardDescription className="text-2xl font-bold text-white">$0/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> 5 photos/mo</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Basic quality</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> No watermark</li>
                </ul>
                <Button onClick={() => handlePlanSelect('Free')} variant="outline" className="w-full">
                  Start Free
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400">Starter</CardTitle>
                <CardDescription className="text-2xl font-bold text-white">$9/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-blue-400" /> 25 photos/mo</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-blue-400" /> Fast processing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-blue-400" /> Email support</li>
                </ul>
                <Button onClick={() => handlePlanSelect('Starter')} className="w-full bg-blue-600 hover:bg-blue-700">
                  Choose Starter
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-purple-500 relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-purple-600">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-purple-400">Pro</CardTitle>
                <CardDescription className="text-2xl font-bold text-white">$19/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-purple-400" /> 100 photos/mo</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-purple-400" /> Ultra HD</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-purple-400" /> Custom poses</li>
                </ul>
                <Button onClick={() => handlePlanSelect('Pro')} className="w-full bg-purple-600 hover:bg-purple-700">
                  Upgrade to Pro
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/50 border-yellow-500">
              <CardHeader>
                <CardTitle className="text-yellow-400">Premium</CardTitle>
                <CardDescription className="text-2xl font-bold text-white">$49/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-yellow-400" /> Unlimited photos</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-yellow-400" /> 4096x4096 quality</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-yellow-400" /> API access</li>
                </ul>
                <Button onClick={() => handlePlanSelect('Premium')} className="w-full bg-yellow-600 hover:bg-yellow-700">
                  Go Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Chatbot Section */}
        <section className="max-w-4xl mx-auto">
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
                      <div className={`inline-block p-3 rounded-lg max-w-xs ${
                        msg.type === 'user' 
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
<video width="350" controls style={{ marginTop: "1rem", borderRadius: "8px" }}>
  <source src="/lovable-uploads/talking-avatar.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
                
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-gray-700 text-center text-gray-400">
        <p>© 2025 · SCENE MAKE AI · All rights reserved</p>
      </footer>
    </div>
  );
};

export default Index;
