import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Search,
  Filter,
  Clock,
  TrendingUp,
  Globe,
  MessageSquare
} from "lucide-react";

const News = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
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
            <span className="text-xl font-bold">Verified News</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Link to="/signup">
              <Button className="glow">Try Truthlens</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Latest Verified News</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Real-time AI-powered fact-checking of trending topics and breaking news
            </p>
            
            {/* Search & Filters */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search verified news..." 
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="hover-lift">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button variant="default" size="sm">All Topics</Button>
            <Button variant="outline" size="sm">Politics</Button>
            <Button variant="outline" size="sm">Health</Button>
            <Button variant="outline" size="sm">Technology</Button>
            <Button variant="outline" size="sm">Climate</Button>
            <Button variant="outline" size="sm">Scam Alerts</Button>
          </div>
        </div>
      </section>

      {/* Trending Alert */}
      <section className="py-6 px-6 bg-warning/10 border-y border-warning/20">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <TrendingUp className="h-5 w-5 text-warning" />
            <span className="font-semibold">Trending Alert:</span>
            <span className="text-muted-foreground">
              Major misinformation campaign detected about climate data - 
            </span>
            <Link to="/report/trending-alert" className="text-primary hover:underline font-medium">
              View Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* News Feed */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Featured Story */}
                <Card className="glass-card hover-lift">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-verified text-verified-foreground">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Verified
                        </Badge>
                        <Badge variant="outline">Breaking</Badge>
                        <Badge variant="outline">Politics</Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        15 min ago
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-3">
                      Major Policy Announcement Confirmed by Multiple Government Sources
                    </h2>
                    
                    <div className="bg-muted/20 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Credibility Score</span>
                        <span className="text-sm font-bold text-verified">94%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div className="bg-verified h-2 rounded-full" style={{width: '94%'}}></div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      Official government announcement has been verified through multiple independent sources 
                      including press releases, official statements, and credible news outlets.
                    </p>
                    
                    <div className="border-l-4 border-verified bg-verified/10 p-4 mb-4">
                      <p className="text-sm">
                        <strong>ELI12:</strong> This news story is very reliable because it comes from 
                        official government sources and has been confirmed by many trusted news organizations. 
                        The information matches across all sources.
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-muted-foreground">Sources: 8 verified</span>
                        <span className="text-sm text-muted-foreground">Analysis: 2.1s</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" className="hover-lift">
                          <MessageSquare className="mr-1 h-3 w-3" />
                          ELI12
                        </Button>
                        <Link to="/report/breaking-policy">
                          <Button size="sm" className="hover-lift">View Full Report</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Regular News Items */}
                <Card className="glass-card hover-lift">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-warning text-warning-foreground">
                          <AlertTriangle className="mr-1 h-3 w-3" />
                          Misleading
                        </Badge>
                        <Badge variant="outline">Health</Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        1 hour ago
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">
                      Viral Health Claim Missing Critical Context
                    </h3>
                    
                    <div className="bg-muted/20 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Credibility Score</span>
                        <span className="text-sm font-bold text-warning">31%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div className="bg-warning h-2 rounded-full" style={{width: '31%'}}></div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      While the study cited is real, the viral social media posts remove important context 
                      about limitations and preliminary nature of the research.
                    </p>
                    
                    <div className="border-l-4 border-warning bg-warning/10 p-4 mb-4">
                      <p className="text-sm">
                        <strong>ELI12:</strong> This claim takes a real scientific study but leaves out 
                        important details that change what it means. It's like saying "ice cream sales 
                        cause drowning" without mentioning it's just because both happen more in summer.
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-muted-foreground">Sources: 3 verified</span>
                        <span className="text-sm text-muted-foreground">Shares: 45K</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" className="hover-lift">
                          <MessageSquare className="mr-1 h-3 w-3" />
                          ELI12
                        </Button>
                        <Link to="/report/viral-health-claim">
                          <Button size="sm" className="hover-lift">View Analysis</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="glass-card hover-lift">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-danger text-danger-foreground">
                          <XCircle className="mr-1 h-3 w-3" />
                          False
                        </Badge>
                        <Badge variant="outline">Scam Alert</Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        3 hours ago
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">
                      Cryptocurrency Investment Scam Spreading on Social Media
                    </h3>
                    
                    <div className="bg-muted/20 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Credibility Score</span>
                        <span className="text-sm font-bold text-danger">4%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div className="bg-danger h-2 rounded-full" style={{width: '4%'}}></div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      Fake celebrity endorsements and fabricated testimonials used to promote fraudulent 
                      investment scheme. Multiple similarity matches with known scam patterns detected.
                    </p>
                    
                    <div className="border-l-4 border-danger bg-danger/10 p-4 mb-4">
                      <p className="text-sm">
                        <strong>ELI12:</strong> This is a scam designed to steal people's money. 
                        The celebrities didn't actually endorse this, and the success stories are fake. 
                        Never invest money based on social media ads.
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-muted-foreground">Scam similarity: 96%</span>
                        <span className="text-sm text-muted-foreground">Reports: 234</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" className="hover-lift">
                          <MessageSquare className="mr-1 h-3 w-3" />
                          ELI12
                        </Button>
                        <Link to="/report/crypto-scam">
                          <Button size="sm" className="hover-lift">View Alert</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="glass-card hover-lift">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-verified text-verified-foreground">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Verified
                        </Badge>
                        <Badge variant="outline">Technology</Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        5 hours ago
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">
                      AI Research Breakthrough Confirmed by Peer Review
                    </h3>
                    
                    <div className="bg-muted/20 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Credibility Score</span>
                        <span className="text-sm font-bold text-verified">89%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div className="bg-verified h-2 rounded-full" style={{width: '89%'}}></div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      Published in Nature AI journal with peer review confirmation. Multiple independent 
                      labs have replicated key findings supporting the breakthrough claims.
                    </p>
                    
                    <div className="border-l-4 border-verified bg-verified/10 p-4 mb-4">
                      <p className="text-sm">
                        <strong>ELI12:</strong> Scientists made a new discovery about AI and other scientists 
                        checked their work to make sure it's correct. This is how we know the discovery is real 
                        and not a mistake.
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-muted-foreground">Peer reviewed</span>
                        <span className="text-sm text-muted-foreground">Replicated: 3 labs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" className="hover-lift">
                          <MessageSquare className="mr-1 h-3 w-3" />
                          ELI12
                        </Button>
                        <Link to="/report/ai-breakthrough">
                          <Button size="sm" className="hover-lift">View Report</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Live Stats */}
              <Card className="glass-card mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-primary" />
                    Live Verification Stats
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Stories Analyzed Today</span>
                      <span className="font-bold text-2xl">1,247</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-verified">Verified</span>
                      <span className="font-bold">743</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-warning">Misleading</span>
                      <span className="font-bold">312</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-danger">False/Scam</span>
                      <span className="font-bold">192</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Trending Topics */}
              <Card className="glass-card mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-accent" />
                    Trending Verifications
                  </h3>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <p className="font-medium">#ElectionClaims</p>
                      <p className="text-muted-foreground">324 verifications</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">#ClimateData</p>
                      <p className="text-muted-foreground">198 verifications</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">#HealthScams</p>
                      <p className="text-muted-foreground">156 verifications</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">#TechNews</p>
                      <p className="text-muted-foreground">89 verifications</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Get Alerts */}
              <Card className="glass-card">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get real-time alerts when we detect trending misinformation campaigns.
                  </p>
                  <Button className="w-full glow hover-lift">
                    Enable Alerts
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;