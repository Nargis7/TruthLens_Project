import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useParams, Link } from "react-router-dom";
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Share2,
  Save,
  Volume2,
  ArrowLeft,
  ExternalLink,
  MessageSquare,
  BarChart3
} from "lucide-react";

const Report = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
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
              <span className="text-xl font-bold">Truthlens Report</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="hover-lift">
              <Save className="h-4 w-4 mr-2" />
              Save Report
            </Button>
            <Button variant="outline" size="sm" className="hover-lift">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Report */}
          <div className="lg:col-span-2">
            {/* Verdict Card */}
            <Card className="glass-card mb-8">
              <div className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-20 w-20 rounded-full bg-verified/20 flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-verified" />
                  </div>
                </div>
                <Badge className="bg-verified text-verified-foreground mb-4">
                  VERIFIED
                </Badge>
                <h1 className="text-3xl font-bold mb-4">This content appears to be accurate</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Our analysis found strong evidence supporting the claims made in this content.
                </p>
                
                {/* Confidence Meter */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Confidence Level</span>
                    <span className="text-sm font-bold">87%</span>
                  </div>
                  <Progress value={87} className="h-3" />
                </div>
                
                <div className="flex justify-center space-x-4">
                  <Button className="hover-lift">
                    <Volume2 className="mr-2 h-4 w-4" />
                    Listen to Summary
                  </Button>
                  <Button variant="outline" className="hover-lift">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Ask Questions
                  </Button>
                </div>
              </div>
            </Card>

            {/* Analysis Details */}
            <Card className="glass-card mb-8">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">Detailed Analysis</h2>
                
                <div className="space-y-6">
                  {/* Content Analysis */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                      Content Analysis
                    </h3>
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="text-sm mb-3">
                        <strong>Analyzed Content:</strong> "Breaking: New climate research shows significant progress in renewable energy adoption..."
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm text-muted-foreground">Language Patterns</span>
                          <div className="flex items-center mt-1">
                            <Progress value={85} className="h-2 flex-1 mr-2" />
                            <span className="text-sm font-medium">85%</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Fact Consistency</span>
                          <div className="flex items-center mt-1">
                            <Progress value={92} className="h-2 flex-1 mr-2" />
                            <span className="text-sm font-medium">92%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Source Verification */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <ExternalLink className="mr-2 h-5 w-5 text-accent" />
                      Source Verification
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium text-sm">Nature Climate Research Journal</p>
                          <p className="text-xs text-muted-foreground">Primary source - Peer reviewed</p>
                        </div>
                        <Badge className="bg-verified text-verified-foreground">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Verified
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium text-sm">Reuters Science Desk</p>
                          <p className="text-xs text-muted-foreground">Secondary reporting - Credible outlet</p>
                        </div>
                        <Badge className="bg-verified text-verified-foreground">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Verified
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Scam Detection */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <AlertTriangle className="mr-2 h-5 w-5 text-warning" />
                      Scam Detection
                    </h3>
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="text-sm mb-2">
                        <strong>Similarity Score:</strong> 12% (Low risk)
                      </p>
                      <p className="text-xs text-muted-foreground">
                        No significant similarity detected with known scam patterns or fraudulent content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* ELI12 Explanation */}
            <Card className="glass-card">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Explain Like I'm 12</h2>
                <div className="bg-primary/10 rounded-lg p-6">
                  <p className="text-lg leading-relaxed">
                    This news story is <strong>probably true</strong> because it comes from scientists who study the climate 
                    and their work was checked by other scientists (that's called "peer review"). 
                    The information also matches what other trusted news sources are saying. 
                    It doesn't look like a scam or fake news because it has real sources and doesn't try to 
                    trick people or ask for money.
                  </p>
                </div>
                
                <Button className="mt-4 hover-lift" variant="outline">
                  <Volume2 className="mr-2 h-4 w-4" />
                  Listen to ELI12 Explanation
                </Button>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            {/* Quick Stats */}
            <Card className="glass-card mb-6">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Analysis Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Overall Score</span>
                    <span className="font-bold text-verified">87%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Sources Found</span>
                    <span className="font-bold">5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Verified Sources</span>
                    <span className="font-bold text-verified">4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Analysis Time</span>
                    <span className="font-bold">2.3s</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <Card className="glass-card mb-6">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full hover-lift" variant="outline">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share on WhatsApp
                  </Button>
                  <Button className="w-full hover-lift" variant="outline">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share on Telegram
                  </Button>
                  <Button className="w-full hover-lift" variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Original Source
                  </Button>
                </div>
              </div>
            </Card>

            {/* Report Info */}
            <Card className="glass-card">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Report Details</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Report ID:</span>
                    <p className="font-mono">#{id || "TL-2024-001"}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Generated:</span>
                    <p>2 hours ago</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Content Type:</span>
                    <p>Text Article</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Language:</span>
                    <p>English</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;