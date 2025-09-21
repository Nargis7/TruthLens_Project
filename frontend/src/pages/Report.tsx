import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
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

interface AnalysisData {
  score: number;
  status: 'verified' | 'suspicious' | 'false';
  summary: string;
  sources: Array<{
    name: string;
    type: string;
    credibility: string;
    verified: boolean;
  }>;
  scamSimilarity: number;
  languagePatterns: number;
  factConsistency: number;
  eli12Explanation: string;
}

const Report = () => {
  const { id } = useParams();
  const [analysis, setAnalysis] = useState<AnalysisData | null>(null);

  useEffect(() => {
    // Load analysis data from localStorage
    const storedAnalysis = localStorage.getItem(`analysis_${id}`);
    if (storedAnalysis) {
      setAnalysis(JSON.parse(storedAnalysis));
    }
  }, [id]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="h-10 w-10 text-verified" />;
      case 'suspicious':
        return <AlertTriangle className="h-10 w-10 text-warning" />;
      case 'false':
        return <XCircle className="h-10 w-10 text-danger" />;
      default:
        return <CheckCircle className="h-10 w-10 text-verified" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge className="bg-verified text-verified-foreground">VERIFIED</Badge>;
      case 'suspicious':
        return <Badge className="bg-warning text-warning-foreground">SUSPICIOUS</Badge>;
      case 'false':
        return <Badge className="bg-danger text-danger-foreground">FALSE</Badge>;
      default:
        return <Badge className="bg-verified text-verified-foreground">VERIFIED</Badge>;
    }
  };

  const getStatusMessage = (status: string, score: number) => {
    switch (status) {
      case 'verified':
        return 'This content appears to be accurate';
      case 'suspicious':
        return 'This content should be verified from other sources';
      case 'false':
        return 'This content appears to contain false information';
      default:
        return 'Analysis completed';
    }
  };

  const getStatusDescription = (status: string) => {
    switch (status) {
      case 'verified':
        return 'Our analysis found strong evidence supporting the claims made in this content.';
      case 'suspicious':
        return 'Our analysis found mixed or inconclusive evidence about the claims in this content.';
      case 'false':
        return 'Our analysis found evidence that contradicts or undermines the claims in this content.';
      default:
        return 'Analysis completed with mixed results.';
    }
  };

  if (!analysis) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading Analysis...</h2>
          <p className="text-muted-foreground">Please wait while we load your report.</p>
        </div>
      </div>
    );
  }

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
                  <div className={`h-20 w-20 rounded-full flex items-center justify-center ${
                    analysis.status === 'verified' ? 'bg-verified/20' : 
                    analysis.status === 'suspicious' ? 'bg-warning/20' : 'bg-danger/20'
                  }`}>
                    {getStatusIcon(analysis.status)}
                  </div>
                </div>
                {getStatusBadge(analysis.status)}
                <h1 className="text-3xl font-bold mb-4 mt-4">{getStatusMessage(analysis.status, analysis.score)}</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {getStatusDescription(analysis.status)}
                </p>
                
                {/* Confidence Meter */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Confidence Level</span>
                    <span className="text-sm font-bold">{analysis.score}%</span>
                  </div>
                  <Progress value={analysis.score} className="h-3" />
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
                        <strong>Analysis Summary:</strong> {analysis.summary}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm text-muted-foreground">Language Patterns</span>
                          <div className="flex items-center mt-1">
                            <Progress value={analysis.languagePatterns} className="h-2 flex-1 mr-2" />
                            <span className="text-sm font-medium">{analysis.languagePatterns}%</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Fact Consistency</span>
                          <div className="flex items-center mt-1">
                            <Progress value={analysis.factConsistency} className="h-2 flex-1 mr-2" />
                            <span className="text-sm font-medium">{analysis.factConsistency}%</span>
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
                      {analysis.sources.map((source, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{source.name}</p>
                            <p className="text-xs text-muted-foreground">{source.type} source - {source.credibility} credibility</p>
                          </div>
                          <Badge className={source.verified ? "bg-verified text-verified-foreground" : "bg-warning text-warning-foreground"}>
                            {source.verified ? <CheckCircle className="mr-1 h-3 w-3" /> : <AlertTriangle className="mr-1 h-3 w-3" />}
                            {source.verified ? 'Verified' : 'Unverified'}
                          </Badge>
                        </div>
                      ))}
                      {analysis.sources.length === 0 && (
                        <div className="text-center p-4 text-muted-foreground">
                          <p>No sources found for verification</p>
                        </div>
                      )}
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
                        <strong>Similarity Score:</strong> {analysis.scamSimilarity}% ({analysis.scamSimilarity > 60 ? 'High' : analysis.scamSimilarity > 30 ? 'Medium' : 'Low'} risk)
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {analysis.scamSimilarity > 60 
                          ? 'High similarity detected with known scam patterns. Exercise extreme caution.'
                          : analysis.scamSimilarity > 30 
                          ? 'Some similarity detected with suspicious content patterns.'
                          : 'No significant similarity detected with known scam patterns or fraudulent content.'}
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
                    {analysis.eli12Explanation}
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
                    <span className={`font-bold ${
                      analysis.score > 70 ? 'text-verified' : 
                      analysis.score > 40 ? 'text-warning' : 'text-danger'
                    }`}>{analysis.score}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Sources Found</span>
                    <span className="font-bold">{analysis.sources.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Verified Sources</span>
                    <span className="font-bold text-verified">{analysis.sources.filter(s => s.verified).length}</span>
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