import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { 
  Shield, 
  Search, 
  MessageSquare, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Play,
  Eye,
  Mic,
  Image as ImageIcon,
  FileText,
  Globe,
  Zap,
  LogOut,
  User
} from "lucide-react";

const Index = () => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-0 border-b border-glass-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="prism-container">
              <div className="prism">
                <div className="prism-face"></div>
                <div className="prism-face"></div>
                <div className="prism-face"></div>
                <div className="prism-face"></div>
                <div className="prism-face"></div>
                <div className="prism-face"></div>
              </div>
            </div>
            <span className="text-xl font-bold">Truthlens</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/education" className="text-muted-foreground hover:text-primary transition-colors">Education</Link>
            <Link to="/news" className="text-muted-foreground hover:text-primary transition-colors">Verified News</Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-muted-foreground">
                  Welcome, {user?.name}
                </span>
                <Link to="/dashboard">
                  <Button variant="outline">
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="glow">Try Truthlens</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="prism-container">
              <div className="prism scale-150">
                <div className="prism-face"></div>
                <div className="prism-face"></div>
                <div className="prism-face"></div>
                <div className="prism-face"></div>
                <div className="prism-face"></div>
                <div className="prism-face"></div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Detect Misinformation.<br />Learn Truth.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Advanced AI-powered platform that verifies information across text, images, voice, and video. 
            Get instant credibility scores with ELI12 explanations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/signup">
              <Button size="lg" className="glow hover-lift">
                <Shield className="mr-2 h-5 w-5" />
                Start Fact-Checking
              </Button>
            </Link>
            <Button size="lg" variant="secondary" className="hover-lift">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-verified" />
              Multi-modal Detection
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              ELI12 Explanations
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-accent" />
              Multilingual Support
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Detection Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our advanced AI analyzes content across multiple formats to provide comprehensive truth verification
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Text Analysis</h3>
                <p className="text-muted-foreground">
                  Deep learning models analyze writing patterns, fact consistency, and linguistic markers to detect misinformation.
                </p>
              </div>
            </Card>
            
            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Image Verification</h3>
                <p className="text-muted-foreground">
                  Advanced computer vision detects deepfakes, manipulated images, and reverse image searches for authenticity.
                </p>
              </div>
            </Card>
            
            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-warning/20 flex items-center justify-center mb-4">
                  <Mic className="h-6 w-6 text-warning" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Voice Analysis</h3>
                <p className="text-muted-foreground">
                  Audio processing detects synthetic voices, analyzes speech patterns, and transcribes content for verification.
                </p>
              </div>
            </Card>
            
            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-verified/20 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-verified" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Scam Detection</h3>
                <p className="text-muted-foreground">
                  Similarity models identify common scam patterns and fraudulent content across different formats.
                </p>
              </div>
            </Card>
            
            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multilingual Chat</h3>
                <p className="text-muted-foreground">
                  Interactive voice and text chat in multiple languages provides personalized explanations and follow-up questions.
                </p>
              </div>
            </Card>
            
            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-time Verification</h3>
                <p className="text-muted-foreground">
                  Instant analysis with confidence scores, source verification, and easy-to-understand explanations.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Truthlens Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to verify any content</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit Content</h3>
              <p className="text-muted-foreground">
                Upload text, images, audio, or video content you want to verify
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our advanced AI models analyze the content across multiple dimensions
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-verified/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-verified">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Results</h3>
              <p className="text-muted-foreground">
                Receive detailed report with credibility score and explanation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Verified News Preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest Verified News</h2>
              <p className="text-muted-foreground">Real-time fact-checking of trending topics</p>
            </div>
            <Link to="/news">
              <Button variant="outline" className="hover-lift">
                <Eye className="mr-2 h-4 w-4" />
                View All News
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-verified text-verified-foreground">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Verified
                  </Badge>
                  <span className="text-sm text-muted-foreground">2 hours ago</span>
                </div>
                <h3 className="font-semibold mb-2">Breaking: Major Policy Announcement</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Credibility Score: 95% • Verified by multiple sources
                </p>
                <p className="text-sm">
                  ELI12: This news story has been confirmed by official sources and cross-referenced with reliable news outlets.
                </p>
              </div>
            </Card>
            
            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-warning text-warning-foreground">
                    <AlertTriangle className="mr-1 h-3 w-3" />
                    Misleading
                  </Badge>
                  <span className="text-sm text-muted-foreground">4 hours ago</span>
                </div>
                <h3 className="font-semibold mb-2">Viral Social Media Claim</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Credibility Score: 23% • Context missing
                </p>
                <p className="text-sm">
                  ELI12: This claim takes real facts but removes important context that changes the meaning.
                </p>
              </div>
            </Card>
            
            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-danger text-danger-foreground">
                    <XCircle className="mr-1 h-3 w-3" />
                    False
                  </Badge>
                  <span className="text-sm text-muted-foreground">6 hours ago</span>
                </div>
                <h3 className="font-semibold mb-2">Debunked Conspiracy Theory</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Credibility Score: 8% • No credible sources
                </p>
                <p className="text-sm">
                  ELI12: This story has been proven false by fact-checkers and has no reliable evidence.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Fight Misinformation?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust Truthlens to verify information and combat fake news.
          </p>
          <Link to="/signup">
            <Button size="lg" className="glow hover-lift">
              <Shield className="mr-2 h-5 w-5" />
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="prism-container">
                  <div className="prism scale-75">
                    <div className="prism-face"></div>
                    <div className="prism-face"></div>
                    <div className="prism-face"></div>
                    <div className="prism-face"></div>
                    <div className="prism-face"></div>
                    <div className="prism-face"></div>
                  </div>
                </div>
                <span className="text-lg font-bold">Truthlens</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Advanced AI platform for detecting misinformation and verifying truth across all media formats.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/education" className="hover:text-primary transition-colors">Education</Link></li>
                <li><Link to="/news" className="hover:text-primary transition-colors">Verified News</Link></li>
                <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Truthlens. All rights reserved. Fighting misinformation with AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;