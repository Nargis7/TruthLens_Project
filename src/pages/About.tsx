import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Users, 
  Target, 
  Zap,
  Award,
  Globe,
  Heart,
  Lightbulb
} from "lucide-react";

const About = () => {
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
            <span className="text-xl font-bold">About Truthlens</span>
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
          <h1 className="text-5xl font-bold mb-6">Fighting Misinformation with AI</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Truthlens is an advanced AI platform designed to detect misinformation across all media formats, 
            helping individuals and organizations make informed decisions in our digital age.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="glass-card">
              <div className="p-8">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To democratize access to truth verification technology, empowering individuals 
                  and communities to identify misinformation and make informed decisions. We believe 
                  that everyone deserves access to accurate information in an increasingly complex digital landscape.
                </p>
              </div>
            </Card>

            <Card className="glass-card">
              <div className="p-8">
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A world where misinformation cannot thrive, where critical thinking is enhanced by 
                  AI technology, and where truth and transparency are the foundation of public discourse. 
                  We envision a future where informed citizens can navigate the information landscape with confidence.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Truthlens Story</h2>
            <p className="text-xl text-muted-foreground">Born from a hackathon, built for humanity</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card">
              <div className="p-8">
                <div className="prose prose-lg text-muted-foreground space-y-6">
                  <p>
                    Truthlens began as a passionate project during a global hackathon focused on combating 
                    misinformation. Our team of AI researchers, software engineers, and digital literacy 
                    advocates came together with a shared concern about the rapid spread of false information 
                    across social media platforms and digital channels.
                  </p>
                  
                  <p>
                    What started as a 48-hour challenge quickly evolved into something much larger. We realized 
                    that while fact-checking organizations do incredible work, the scale of misinformation 
                    requires technological solutions that can operate at internet speed. Our breakthrough came 
                    when we developed a multi-modal AI system capable of analyzing text, images, audio, 
                    and video content simultaneously.
                  </p>
                  
                  <p>
                    The "Explain Like I'm 12" (ELI12) feature emerged from user testing with diverse 
                    communities. We discovered that complex fact-checking reports, while thorough, 
                    weren't accessible to everyone. Our ELI12 explanations bridge this gap, making truth 
                    verification understandable for users of all backgrounds and education levels.
                  </p>
                  
                  <p>
                    Today, Truthlens serves thousands of users worldwide, from individual citizens 
                    to educational institutions and news organizations. Every verification we perform 
                    contributes to a growing database of truth patterns, making our AI more accurate 
                    and helping build a more informed global community.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-card hover-lift text-center">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-verified/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-verified" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Truth First</h3>
                <p className="text-sm text-muted-foreground">
                  We prioritize accuracy over speed, ensuring every verification is thorough and reliable.
                </p>
              </div>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Accessibility</h3>
                <p className="text-sm text-muted-foreground">
                  Truth verification should be available to everyone, regardless of technical expertise.
                </p>
              </div>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Global Impact</h3>
                <p className="text-sm text-muted-foreground">
                  We work across languages and cultures to combat misinformation worldwide.
                </p>
              </div>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-warning/20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-warning" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Empathy</h3>
                <p className="text-sm text-muted-foreground">
                  We understand that misinformation often preys on genuine concerns and fears.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-xl text-muted-foreground">
              Passionate technologists, researchers, and advocates working to build a more truthful world
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card hover-lift">
              <div className="p-6 text-center">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">AK</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">Alex Kim</h3>
                <p className="text-sm text-primary mb-3">Co-Founder & CEO</p>
                <p className="text-sm text-muted-foreground">
                  Former AI researcher at Stanford with expertise in natural language processing 
                  and misinformation detection algorithms.
                </p>
              </div>
            </Card>

            <Card className="glass-card hover-lift">
              <div className="p-6 text-center">
                <div className="h-20 w-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">MR</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">Maya Rodriguez</h3>
                <p className="text-sm text-accent mb-3">Co-Founder & CTO</p>
                <p className="text-sm text-muted-foreground">
                  Full-stack engineer and machine learning specialist with 8 years experience 
                  building scalable AI platforms.
                </p>
              </div>
            </Card>

            <Card className="glass-card hover-lift">
              <div className="p-6 text-center">
                <div className="h-20 w-20 rounded-full bg-verified/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-verified">DJ</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">Dr. James Chen</h3>
                <p className="text-sm text-verified mb-3">Head of Research</p>
                <p className="text-sm text-muted-foreground">
                  PhD in Computational Linguistics, former fact-checker at major news organization, 
                  expert in media literacy education.
                </p>
              </div>
            </Card>

            <Card className="glass-card hover-lift">
              <div className="p-6 text-center">
                <div className="h-20 w-20 rounded-full bg-warning/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-warning">SP</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">Sarah Patel</h3>
                <p className="text-sm text-warning mb-3">Head of Product</p>
                <p className="text-sm text-muted-foreground">
                  UX researcher focused on making complex information accessible. Previously worked 
                  on civic technology and digital literacy initiatives.
                </p>
              </div>
            </Card>

            <Card className="glass-card hover-lift">
              <div className="p-6 text-center">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">LW</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">Lucas Wright</h3>
                <p className="text-sm text-primary mb-3">Lead Engineer</p>
                <p className="text-sm text-muted-foreground">
                  Backend systems architect specializing in real-time processing and multilingual 
                  content analysis at scale.
                </p>
              </div>
            </Card>

            <Card className="glass-card hover-lift">
              <div className="p-6 text-center">
                <div className="h-20 w-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">ZA</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">Zara Ahmed</h3>
                <p className="text-sm text-accent mb-3">Community Manager</p>
                <p className="text-sm text-muted-foreground">
                  Digital rights advocate with experience in global fact-checking networks 
                  and community-driven truth verification initiatives.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recognition & Impact</h2>
            <p className="text-xl text-muted-foreground">
              Our work has been recognized by leading organizations in technology and journalism
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card hover-lift text-center">
              <div className="p-6">
                <Award className="h-12 w-12 text-verified mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">AI for Good Winner</h3>
                <p className="text-sm text-muted-foreground">
                  Global hackathon grand prize for most impactful AI solution addressing social challenges
                </p>
              </div>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <div className="p-6">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">100K+ Verifications</h3>
                <p className="text-sm text-muted-foreground">
                  Successfully analyzed over 100,000 pieces of content with 94% accuracy rate
                </p>
              </div>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <div className="p-6">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">50+ Countries</h3>
                <p className="text-sm text-muted-foreground">
                  Trusted by users across 50+ countries, supporting 25+ languages
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Fight Against Misinformation</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every verification makes the internet a little more truthful. Be part of the solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="glow hover-lift">
                <Shield className="mr-2 h-5 w-5" />
                Start Verifying Truth
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="hover-lift">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;