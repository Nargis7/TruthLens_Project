import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Eye, 
  Search, 
  AlertTriangle, 
  CheckCircle,
  BookOpen,
  Play,
  ArrowRight,
  Lightbulb,
  Target,
  Users
} from "lucide-react";

const Education = () => {
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
            <span className="text-xl font-bold">Truthlens Education</span>
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
      <section className="py-20 px-6 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Learn to Spot Misinformation</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Master the skills to identify fake news, deepfakes, and manipulation techniques. 
            Become a critical thinker in the digital age.
          </p>
          <Button size="lg" className="glow hover-lift">
            <BookOpen className="mr-2 h-5 w-5" />
            Start Learning
          </Button>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Interactive Learning Modules</h2>
            <p className="text-xl text-muted-foreground">
              Learn at your own pace with hands-on examples and real-world scenarios
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <Badge className="mb-3" variant="outline">Beginner</Badge>
                <h3 className="text-xl font-semibold mb-2">Identifying Fake News</h3>
                <p className="text-muted-foreground mb-4">
                  Learn the telltale signs of fabricated stories, misleading headlines, and unreliable sources.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">12 lessons • 45 min</span>
                  <Button size="sm" className="hover-lift">
                    <Play className="mr-1 h-3 w-3" />
                    Start
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-accent" />
                </div>
                <Badge className="mb-3" variant="outline">Intermediate</Badge>
                <h3 className="text-xl font-semibold mb-2">Source Verification</h3>
                <p className="text-muted-foreground mb-4">
                  Master the art of fact-checking by learning to verify sources, cross-reference claims, and evaluate credibility.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">8 lessons • 30 min</span>
                  <Button size="sm" className="hover-lift">
                    <Play className="mr-1 h-3 w-3" />
                    Start
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-warning/20 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-warning" />
                </div>
                <Badge className="mb-3" variant="outline">Advanced</Badge>
                <h3 className="text-xl font-semibold mb-2">Deepfake Detection</h3>
                <p className="text-muted-foreground mb-4">
                  Understand AI-generated content, deepfakes, and sophisticated manipulation techniques in media.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">15 lessons • 60 min</span>
                  <Button size="sm" className="hover-lift">
                    <Play className="mr-1 h-3 w-3" />
                    Start
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-verified/20 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-verified" />
                </div>
                <Badge className="mb-3" variant="outline">Beginner</Badge>
                <h3 className="text-xl font-semibold mb-2">Bias Recognition</h3>
                <p className="text-muted-foreground mb-4">
                  Learn to identify different types of bias in reporting and how they can distort information.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">10 lessons • 35 min</span>
                  <Button size="sm" className="hover-lift">
                    <Play className="mr-1 h-3 w-3" />
                    Start
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <Badge className="mb-3" variant="outline">Intermediate</Badge>
                <h3 className="text-xl font-semibold mb-2">Social Media Literacy</h3>
                <p className="text-muted-foreground mb-4">
                  Navigate social media platforms safely and identify viral misinformation campaigns.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">14 lessons • 50 min</span>
                  <Button size="sm" className="hover-lift">
                    <Play className="mr-1 h-3 w-3" />
                    Start
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <Badge className="mb-3" variant="outline">Advanced</Badge>
                <h3 className="text-xl font-semibold mb-2">Critical Thinking</h3>
                <p className="text-muted-foreground mb-4">
                  Develop advanced critical thinking skills to analyze complex information and arguments.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">18 lessons • 75 min</span>
                  <Button size="sm" className="hover-lift">
                    <Play className="mr-1 h-3 w-3" />
                    Start
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Manipulation Techniques */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Common Manipulation Techniques</h2>
            <p className="text-xl text-muted-foreground">
              Learn to recognize these tactics used to spread misinformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-lg bg-danger/20 flex items-center justify-center mr-3">
                    <AlertTriangle className="h-5 w-5 text-danger" />
                  </div>
                  <h3 className="text-lg font-semibold">Emotional Manipulation</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Content designed to trigger strong emotional responses (anger, fear, outrage) 
                  to bypass critical thinking and encourage sharing without verification.
                </p>
                <Button variant="outline" size="sm" className="hover-lift">
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </Card>

            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-lg bg-warning/20 flex items-center justify-center mr-3">
                    <Eye className="h-5 w-5 text-warning" />
                  </div>
                  <h3 className="text-lg font-semibold">Cherry-Picking Data</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Selectively presenting data points that support a narrative while 
                  ignoring contradictory evidence or broader context.
                </p>
                <Button variant="outline" size="sm" className="hover-lift">
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </Card>

            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mr-3">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">False Equivalence</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Presenting two opposing viewpoints as equally valid when one 
                  has significantly more evidence and expert support than the other.
                </p>
                <Button variant="outline" size="sm" className="hover-lift">
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </Card>

            <Card className="glass-card hover-lift">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">Echo Chambers</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Algorithm-driven content that reinforces existing beliefs and 
                  isolates users from diverse perspectives and factual information.
                </p>
                <Button variant="outline" size="sm" className="hover-lift">
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Quick Fact-Checking Tips</h2>
            <p className="text-xl text-muted-foreground">
              Essential habits for staying informed and avoiding misinformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6 hover-lift">
              <CheckCircle className="h-8 w-8 text-verified mb-3" />
              <h3 className="font-semibold mb-2">Check the Source</h3>
              <p className="text-sm text-muted-foreground">
                Always verify the credibility of the publication, author, and their track record.
              </p>
            </div>

            <div className="glass-card p-6 hover-lift">
              <CheckCircle className="h-8 w-8 text-verified mb-3" />
              <h3 className="font-semibold mb-2">Look for Multiple Sources</h3>
              <p className="text-sm text-muted-foreground">
                Cross-reference claims with multiple reputable sources before believing or sharing.
              </p>
            </div>

            <div className="glass-card p-6 hover-lift">
              <CheckCircle className="h-8 w-8 text-verified mb-3" />
              <h3 className="font-semibold mb-2">Check the Date</h3>
              <p className="text-sm text-muted-foreground">
                Ensure the information is current and hasn't been taken out of historical context.
              </p>
            </div>

            <div className="glass-card p-6 hover-lift">
              <CheckCircle className="h-8 w-8 text-verified mb-3" />
              <h3 className="font-semibold mb-2">Watch for Bias</h3>
              <p className="text-sm text-muted-foreground">
                Be aware of your own biases and those of the content creators and sources.
              </p>
            </div>

            <div className="glass-card p-6 hover-lift">
              <CheckCircle className="h-8 w-8 text-verified mb-3" />
              <h3 className="font-semibold mb-2">Question Headlines</h3>
              <p className="text-sm text-muted-foreground">
                Headlines can be misleading. Always read the full article before forming opinions.
              </p>
            </div>

            <div className="glass-card p-6 hover-lift">
              <CheckCircle className="h-8 w-8 text-verified mb-3" />
              <h3 className="font-semibold mb-2">Use Fact-Checkers</h3>
              <p className="text-sm text-muted-foreground">
                Consult established fact-checking organizations and tools like Truthlens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Become a Truth Detective?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your journey to media literacy and help build a more informed society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="glow hover-lift">
                <BookOpen className="mr-2 h-5 w-5" />
                Start Learning Now
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="hover-lift">
                <Play className="mr-2 h-5 w-5" />
                Try Truthlens AI
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;