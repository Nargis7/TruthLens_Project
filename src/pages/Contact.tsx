import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  MapPin,
  Send,
  Twitter,
  Linkedin,
  Github,
  HelpCircle
} from "lucide-react";

const Contact = () => {
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
            <span className="text-xl font-bold">Contact Truthlens</span>
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
      <section className="py-16 px-6 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions about Truthlens? Need help with verification? Want to partner with us? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What's this about?" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-32"
                      />
                    </div>
                    
                    <Button className="w-full glow hover-lift">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </Card>
            </div>

            {/* Contact Info & FAQ */}
            <div>
              {/* Contact Information */}
              <Card className="glass-card mb-8">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">hello@truthlens.ai</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Support</p>
                        <p className="text-sm text-muted-foreground">support@truthlens.ai</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-verified" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-TRUTH</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-warning" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-sm text-muted-foreground">
                          123 Innovation Drive<br />
                          San Francisco, CA 94107
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="glass-card mb-8">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="hover-lift">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="hover-lift">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="hover-lift">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Quick FAQ */}
              <Card className="glass-card">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <HelpCircle className="mr-2 h-5 w-5 text-primary" />
                    Quick FAQ
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-1">How accurate is Truthlens?</h4>
                      <p className="text-xs text-muted-foreground">
                        Our AI achieves 94% accuracy across all content types, with continuous improvement through user feedback.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-1">Is Truthlens free to use?</h4>
                      <p className="text-xs text-muted-foreground">
                        Yes! We offer free daily verifications. Premium plans provide unlimited access and advanced features.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-1">What languages do you support?</h4>
                      <p className="text-xs text-muted-foreground">
                        We currently support 25+ languages with real-time translation and multilingual explanations.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-1">How fast are verifications?</h4>
                      <p className="text-xs text-muted-foreground">
                        Most content is analyzed within 2-5 seconds, providing instant results and detailed reports.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Other Ways to Get Help</h2>
            <p className="text-lg text-muted-foreground">
              Choose the support option that works best for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card hover-lift text-center">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get instant help from our support team during business hours (9 AM - 6 PM PST).
                </p>
                <Button variant="outline" className="hover-lift">
                  Start Chat
                </Button>
              </div>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Help Center</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Browse our comprehensive knowledge base with guides, tutorials, and FAQs.
                </p>
                <Button variant="outline" className="hover-lift">
                  Browse Help
                </Button>
              </div>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-verified/20 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-verified" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Send us detailed questions and we'll respond within 24 hours.
                </p>
                <Button variant="outline" className="hover-lift">
                  Send Email
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Inquiries */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <Card className="glass-card">
            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Business & Partnership Inquiries</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Interested in integrating Truthlens into your platform? Looking to partner with us? 
                Want to license our technology? Let's discuss how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glow hover-lift">
                  <Mail className="mr-2 h-5 w-5" />
                  partnerships@truthlens.ai
                </Button>
                <Button size="lg" variant="outline" className="hover-lift">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;