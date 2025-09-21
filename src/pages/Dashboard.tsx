import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { 
  Upload, 
  Mic, 
  FileText, 
  Image as ImageIcon, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Clock,
  BarChart3,
  Settings,
  Loader2,
  MicIcon,
  StopCircle
} from "lucide-react";

const Dashboard = () => {
  const [content, setContent] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [isRecording, setIsRecording] = useState(false);
  const [recentChecks, setRecentChecks] = useState([
    {
      id: 1,
      title: "Social Media Claim Analysis",
      type: "text",
      time: "2 hours ago",
      status: "verified",
      score: 95
    },
    {
      id: 2,
      title: "Image Deepfake Detection",
      type: "image",
      time: "4 hours ago",
      status: "suspicious",
      score: 34
    },
    {
      id: 3,
      title: "Voice Recording Analysis",
      type: "audio",
      time: "yesterday",
      status: "false",
      score: 12
    }
  ]);
  
  const { toast } = useToast();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const analyzeContent = async () => {
    if (!content.trim()) {
      toast({
        title: "No content to analyze",
        description: "Please enter some text, URL, or description to analyze.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    try {
      // Call the edge function for real analysis
      const { data, error } = await supabase.functions.invoke('analyze-content', {
        body: { content: content.trim() }
      });

      if (error) {
        throw error;
      }

      const analysis = data;
      
      const newCheck = {
        id: Date.now(),
        title: content.substring(0, 30) + (content.length > 30 ? "..." : ""),
        type: "text",
        time: "Just now",
        status: analysis.status,
        score: analysis.score,
        analysis: analysis // Store full analysis for the report page
      };
      
      // Store analysis in localStorage for the report page
      localStorage.setItem(`analysis_${newCheck.id}`, JSON.stringify(analysis));
      
      setRecentChecks([newCheck, ...recentChecks.slice(0, 2)]);
      setIsAnalyzing(false);
      setContent("");
      
      toast({
        title: "Analysis Complete",
        description: `Content analyzed with ${analysis.score}% credibility score.`,
        variant: analysis.score > 70 ? "default" : "destructive"
      });
      
      // Navigate to report
      navigate(`/report/${newCheck.id}`);
      
    } catch (error) {
      console.error('Analysis error:', error);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Failed",
        description: "Unable to analyze content. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = () => {
    imageInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const file = event.target.files?.[0];
    if (file) {
      setContent(`Analyzing ${type}: ${file.name}`);
      analyzeContent();
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      setContent("Voice recording completed. Click Analyze to process.");
      toast({
        title: "Recording stopped",
        description: "Voice recording saved successfully."
      });
    } else {
      setIsRecording(true);
      toast({
        title: "Recording started",
        description: "Speak now to record your voice..."
      });
    }
  };

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
    toast({
      title: "Language Changed",
      description: `Interface language set to ${language}.`
    });
  };

  const getStatusBadge = (status: string, score: number) => {
    switch (status) {
      case "verified":
        return (
          <Badge className="bg-verified text-verified-foreground">
            <CheckCircle className="mr-1 h-3 w-3" />
            Verified
          </Badge>
        );
      case "suspicious":
        return (
          <Badge className="bg-warning text-warning-foreground">
            <AlertTriangle className="mr-1 h-3 w-3" />
            Suspicious
          </Badge>
        );
      case "false":
        return (
          <Badge className="bg-danger text-danger-foreground">
            <XCircle className="mr-1 h-3 w-3" />
            False
          </Badge>
        );
      default:
        return null;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "text":
        return <FileText className="h-8 w-8 text-muted-foreground" />;
      case "image":
        return <ImageIcon className="h-8 w-8 text-muted-foreground" />;
      case "audio":
        return <Mic className="h-8 w-8 text-muted-foreground" />;
      default:
        return <FileText className="h-8 w-8 text-muted-foreground" />;
    }
  };
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
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
            <span className="text-xl font-bold">Truthlens Dashboard</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Scan */}
          <div className="lg:col-span-2">
            <Card className="glass-card mb-8">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Quick Scan</h2>
                <div className="space-y-4">
                  <Textarea 
                    placeholder="Paste text content, URL, or describe what you want to verify..."
                    className="min-h-32"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      className="hover-lift" 
                      onClick={analyzeContent}
                      disabled={isAnalyzing || !content.trim()}
                    >
                      {isAnalyzing ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <FileText className="mr-2 h-4 w-4" />
                      )}
                      {isAnalyzing ? "Analyzing..." : "Analyze Text"}
                    </Button>
                    <Button variant="outline" className="hover-lift" onClick={handleFileUpload}>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload File
                    </Button>
                    <Button variant="outline" className="hover-lift" onClick={handleImageUpload}>
                      <ImageIcon className="mr-2 h-4 w-4" />
                      Upload Image
                    </Button>
                    <Button 
                      variant="outline" 
                      className="hover-lift" 
                      onClick={toggleRecording}
                    >
                      {isRecording ? (
                        <StopCircle className="mr-2 h-4 w-4 text-danger" />
                      ) : (
                        <MicIcon className="mr-2 h-4 w-4" />
                      )}
                      {isRecording ? "Stop Recording" : "Record Audio"}
                    </Button>
                  </div>
                  
                  {/* Hidden file inputs */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept=".txt,.pdf,.doc,.docx"
                    onChange={(e) => handleFileSelect(e, "document")}
                  />
                  <input
                    type="file"
                    ref={imageInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileSelect(e, "image")}
                  />
                </div>
              </div>
            </Card>

            {/* Recent Checks */}
            <Card className="glass-card">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Recent Checks</h3>
                <div className="space-y-4">
                  {recentChecks.map((check) => (
                    <Link
                      key={check.id}
                      to={`/report/${check.id}`}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover-lift block"
                    >
                      <div className="flex items-center space-x-4">
                        {getTypeIcon(check.type)}
                        <div>
                          <h4 className="font-medium">{check.title}</h4>
                          <p className="text-sm text-muted-foreground">Analyzed {check.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(check.status, check.score)}
                        <span className="text-sm text-muted-foreground">{check.score}%</span>
                      </div>
                    </Link>
                  ))}
                  
                  {recentChecks.length === 0 && (
                    <div className="text-center py-8">
                      <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No recent checks yet</p>
                      <p className="text-sm text-muted-foreground">Start analyzing content to see your history here</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            {/* Stats */}
            <Card className="glass-card mb-6">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Your Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Total Scans</span>
                    <span className="font-bold">{47 + recentChecks.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">This Month</span>
                    <span className="font-bold">{12 + recentChecks.filter(check => check.time.includes("hours") || check.time === "Just now").length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Accuracy Rate</span>
                    <span className="font-bold text-verified">
                      {recentChecks.length > 0 
                        ? Math.round(recentChecks.reduce((acc, check) => acc + check.score, 0) / recentChecks.length)
                        : 94}%
                    </span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 hover-lift"
                  onClick={() => toast({ title: "Analytics", description: "Analytics dashboard coming soon!" })}
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Analytics
                </Button>
              </div>
            </Card>

            {/* Language Toggle */}
            <Card className="glass-card mb-6">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Language Settings</h3>
                <div className="space-y-2">
                  {["English", "Español", "Français", "Deutsch"].map((language) => (
                    <Button
                      key={language}
                      variant={currentLanguage === language ? "outline" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => changeLanguage(language)}
                    >
                      {language}
                    </Button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Saved Reports */}
            <Card className="glass-card">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Saved Reports</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Election Claim</p>
                      <p className="text-xs text-muted-foreground">Saved 3 days ago</p>
                    </div>
                    <Badge variant="outline">Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Health Article</p>
                      <p className="text-xs text-muted-foreground">Saved 1 week ago</p>
                    </div>
                    <Badge variant="outline">False</Badge>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full mt-4"
                  onClick={() => toast({ title: "Saved Reports", description: "Saved reports feature coming soon!" })}
                >
                  View All Saved
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;