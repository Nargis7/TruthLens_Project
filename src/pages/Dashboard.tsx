import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
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
  Settings
} from "lucide-react";

const Dashboard = () => {
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
                  />
                  
                  <div className="flex flex-wrap gap-4">
                    <Button className="hover-lift">
                      <FileText className="mr-2 h-4 w-4" />
                      Analyze Text
                    </Button>
                    <Button variant="outline" className="hover-lift">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload File
                    </Button>
                    <Button variant="outline" className="hover-lift">
                      <ImageIcon className="mr-2 h-4 w-4" />
                      Upload Image
                    </Button>
                    <Button variant="outline" className="hover-lift">
                      <Mic className="mr-2 h-4 w-4" />
                      Record Audio
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Checks */}
            <Card className="glass-card">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Recent Checks</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg hover-lift">
                    <div className="flex items-center space-x-4">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">Social Media Claim Analysis</h4>
                        <p className="text-sm text-muted-foreground">Analyzed 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-verified text-verified-foreground">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Verified
                      </Badge>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg hover-lift">
                    <div className="flex items-center space-x-4">
                      <ImageIcon className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">Image Deepfake Detection</h4>
                        <p className="text-sm text-muted-foreground">Analyzed 4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-warning text-warning-foreground">
                        <AlertTriangle className="mr-1 h-3 w-3" />
                        Suspicious
                      </Badge>
                      <span className="text-sm text-muted-foreground">34%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg hover-lift">
                    <div className="flex items-center space-x-4">
                      <Mic className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">Voice Recording Analysis</h4>
                        <p className="text-sm text-muted-foreground">Analyzed yesterday</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-danger text-danger-foreground">
                        <XCircle className="mr-1 h-3 w-3" />
                        False
                      </Badge>
                      <span className="text-sm text-muted-foreground">12%</span>
                    </div>
                  </div>
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
                    <span className="font-bold">47</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">This Month</span>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Accuracy Rate</span>
                    <span className="font-bold text-verified">94%</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4 hover-lift">
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
                  <Button variant="outline" className="w-full justify-start">English</Button>
                  <Button variant="ghost" className="w-full justify-start">Español</Button>
                  <Button variant="ghost" className="w-full justify-start">Français</Button>
                  <Button variant="ghost" className="w-full justify-start">Deutsch</Button>
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
                <Button variant="ghost" className="w-full mt-4">
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