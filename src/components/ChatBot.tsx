import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Search,
  Shield,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  Minimize2,
  Volume2
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  type?: 'analysis' | 'explanation' | 'general';
  credibilityScore?: number;
  verified?: boolean;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your Truthlens AI assistant. I can help you verify information, explain analysis results, or answer questions about misinformation. What would you like to check today?",
      sender: 'assistant',
      timestamp: new Date(),
      type: 'general'
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const analyzeContent = async (content: string): Promise<Message> => {
    // Simulate AI analysis - in real implementation, this would call your AI service
    const mockAnalysis = {
      credibilityScore: Math.floor(Math.random() * 100),
      verified: Math.random() > 0.5,
      reasoning: "Based on cross-referencing with reliable sources and analyzing language patterns, this content shows mixed signals. Some claims align with verified information, while others lack sufficient evidence."
    };

    const responseContent = `**Content Analysis Complete**

**Credibility Score: ${mockAnalysis.credibilityScore}%**

${mockAnalysis.verified ? '✅ **Status: Likely Verified**' : '⚠️ **Status: Needs Verification**'}

**Analysis:** ${mockAnalysis.reasoning}

**ELI12 Explanation:** ${mockAnalysis.verified 
  ? "This information appears to be true because it matches what reliable sources are saying and doesn't have signs of being fake or misleading."
  : "This information might not be completely accurate. It's like when someone tells you something that sounds partly true but you should double-check with other people you trust."
}

Would you like me to explain any part of this analysis in more detail?`;

    return {
      id: Date.now().toString(),
      content: responseContent,
      sender: 'assistant',
      timestamp: new Date(),
      type: 'analysis',
      credibilityScore: mockAnalysis.credibilityScore,
      verified: mockAnalysis.verified
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      let assistantMessage: Message;

      // Check if user wants content analysis
      if (inputValue.toLowerCase().includes('verify') || 
          inputValue.toLowerCase().includes('check') || 
          inputValue.toLowerCase().includes('analyze') ||
          inputValue.length > 100) {
        assistantMessage = await analyzeContent(inputValue);
      } else {
        // General conversation
        const responses = [
          "I can help you verify any content - just paste text, describe an image, or ask me to analyze something suspicious you've seen online.",
          "To get started with fact-checking, you can share a news headline, social media post, or any claim you'd like me to verify.",
          "I'm designed to detect misinformation across text, images, and other media. What specific content would you like me to analyze?",
          "Remember, I can explain things in simple terms (ELI12 style) if you need clarification on any analysis results.",
          "I can also help you understand how to spot fake news, deepfakes, and other forms of misinformation. What interests you most?"
        ];

        assistantMessage = {
          id: Date.now().toString(),
          content: responses[Math.floor(Math.random() * responses.length)],
          sender: 'assistant',
          timestamp: new Date(),
          type: 'general'
        };
      }

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        content: "I'm having trouble processing that right now. Please try again in a moment, or feel free to ask me something else!",
        sender: 'assistant',
        timestamp: new Date(),
        type: 'general'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessage = (message: Message) => {
    if (message.type === 'analysis') {
      const lines = message.content.split('\n');
      return (
        <div className="space-y-3">
          {lines.map((line, index) => {
            if (line.includes('**Credibility Score:')) {
              const score = message.credibilityScore || 0;
              return (
                <div key={index} className="flex items-center justify-between bg-muted/20 rounded-lg p-3">
                  <span className="font-medium">Credibility Score</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-border rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${score > 70 ? 'bg-verified' : score > 40 ? 'bg-warning' : 'bg-danger'}`}
                        style={{width: `${score}%`}}
                      ></div>
                    </div>
                    <span className="font-bold">{score}%</span>
                  </div>
                </div>
              );
            }
            if (line.includes('Status:')) {
              const isVerified = line.includes('Verified');
              return (
                <div key={index} className="flex items-center space-x-2">
                  {isVerified ? (
                    <Badge className="bg-verified text-verified-foreground">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Likely Verified
                    </Badge>
                  ) : (
                    <Badge className="bg-warning text-warning-foreground">
                      <AlertTriangle className="mr-1 h-3 w-3" />
                      Needs Verification
                    </Badge>
                  )}
                </div>
              );
            }
            if (line.includes('**ELI12 Explanation:**')) {
              return (
                <div key={index} className="border-l-4 border-primary bg-primary/10 p-3 rounded-r-lg">
                  <div className="flex items-center mb-2">
                    <Lightbulb className="h-4 w-4 text-primary mr-2" />
                    <span className="font-medium text-primary">ELI12 Explanation</span>
                  </div>
                  <p className="text-sm">{line.replace('**ELI12 Explanation:**', '').trim()}</p>
                </div>
              );
            }
            if (line.trim()) {
              return <p key={index} className="text-sm">{line.replace(/\*\*/g, '')}</p>;
            }
            return null;
          })}
        </div>
      );
    }
    return <p className="text-sm">{message.content}</p>;
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-16 w-16 rounded-full glow hover-lift shadow-lg"
          size="lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`glass-card transition-all duration-300 ${isMinimized ? 'h-14' : 'h-96'} w-80 flex flex-col`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Bot className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Truthlens AI</h3>
              <p className="text-xs text-muted-foreground">Fact-checking assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground rounded-lg rounded-br-sm'
                        : 'bg-muted rounded-lg rounded-bl-sm'
                    } p-3`}>
                      <div className="flex items-center space-x-2 mb-1">
                        {message.sender === 'assistant' ? (
                          <Bot className="h-3 w-3 text-primary" />
                        ) : (
                          <User className="h-3 w-3" />
                        )}
                        <span className="text-xs opacity-70">
                          {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </span>
                      </div>
                      {formatMessage(message)}
                      {message.type === 'analysis' && (
                        <div className="flex items-center space-x-2 mt-3 pt-2 border-t border-border/20">
                          <Button variant="ghost" size="sm" className="text-xs">
                            <Volume2 className="mr-1 h-3 w-3" />
                            Listen
                          </Button>
                          <Button variant="ghost" size="sm" className="text-xs">
                            <Search className="mr-1 h-3 w-3" />
                            Sources
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg rounded-bl-sm p-3">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-3 w-3 text-primary animate-pulse" />
                        <span className="text-xs opacity-70">Analyzing...</span>
                      </div>
                      <div className="flex space-x-1 mt-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about any content you want to verify..."
                  className="flex-1 text-sm"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  size="sm"
                  className="hover-lift"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Shield className="h-3 w-3 text-primary" />
                <span className="text-xs text-muted-foreground">
                  Powered by Truthlens AI • Always verify important claims
                </span>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default ChatBot;