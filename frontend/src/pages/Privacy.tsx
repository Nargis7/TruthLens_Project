import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Eye, Lock, Users } from "lucide-react";

const Privacy = () => {
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
            <span className="text-xl font-bold">Privacy Policy</span>
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

      {/* Hero */}
      <section className="py-16 px-6 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto text-center">
          <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Your privacy is fundamental to our mission of fighting misinformation
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: December 20, 2024
          </p>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="glass-card hover-lift text-center">
              <div className="p-6">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Transparency</h3>
                <p className="text-sm text-muted-foreground">
                  We're clear about what data we collect, how we use it, and who we share it with.
                </p>
              </div>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <div className="p-6">
                <Lock className="h-12 w-12 text-verified mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Security</h3>
                <p className="text-sm text-muted-foreground">
                  Your data is protected with industry-standard encryption and security measures.
                </p>
              </div>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <div className="p-6">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Control</h3>
                <p className="text-sm text-muted-foreground">
                  You have full control over your data with easy access, editing, and deletion options.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <Card className="glass-card">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Account Information</h3>
                    <p className="text-muted-foreground">
                      When you create an account, we collect your name, email address, and password. 
                      This information is necessary to provide you with personalized service and account security.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Content for Verification</h3>
                    <p className="text-muted-foreground">
                      We temporarily process the content you submit for fact-checking (text, images, audio, video). 
                      This content is analyzed by our AI systems and then securely deleted within 30 days unless you save it to your account.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Usage Data</h3>
                    <p className="text-muted-foreground">
                      We collect information about how you use Truthlens, including verification frequency, 
                      feature usage, and general performance metrics. This helps us improve our service.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technical Information</h3>
                    <p className="text-muted-foreground">
                      We automatically collect certain technical information like IP address, browser type, 
                      device information, and operating system to ensure our service works properly across different platforms.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Providing Our Service</h3>
                    <p className="text-muted-foreground">
                      We use your information to verify content, provide analysis results, 
                      maintain your account, and deliver the core Truthlens experience.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Improving Our AI</h3>
                    <p className="text-muted-foreground">
                      We use aggregated and anonymized data to train and improve our misinformation detection algorithms. 
                      Individual content is never used for training without explicit consent.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Communication</h3>
                    <p className="text-muted-foreground">
                      We may send you service updates, security alerts, and important product announcements. 
                      Marketing communications are always opt-in.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Research and Development</h3>
                    <p className="text-muted-foreground">
                      We analyze usage patterns and trends to develop new features and improve existing ones. 
                      All research uses anonymized data that cannot be traced back to individuals.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">We Don't Sell Your Data</h3>
                    <p className="text-muted-foreground">
                      Truthlens never sells, rents, or trades your personal information to third parties. 
                      Your privacy is not for sale.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Service Providers</h3>
                    <p className="text-muted-foreground">
                      We work with trusted service providers for hosting, analytics, and security. 
                      These partners are contractually bound to protect your data and use it only for providing services to us.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Legal Requirements</h3>
                    <p className="text-muted-foreground">
                      We may disclose information if required by law, court order, or to protect the rights, 
                      property, or safety of Truthlens, our users, or the public.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Research Partnerships</h3>
                    <p className="text-muted-foreground">
                      We may share anonymized, aggregated data with academic institutions and fact-checking organizations 
                      to advance misinformation research. Individual users are never identifiable in this data.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We implement industry-standard security measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>End-to-end encryption for data transmission</li>
                    <li>Encrypted storage of sensitive information</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Access controls and authentication systems</li>
                    <li>Automated monitoring for suspicious activity</li>
                    <li>Secure data centers with physical access controls</li>
                  </ul>
                  <p className="text-muted-foreground">
                    While we take every precaution to protect your data, no internet transmission is 100% secure. 
                    We continuously monitor and improve our security practices.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-card">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Access and Portability</h3>
                    <p className="text-muted-foreground">
                      You can access, download, or export your personal data at any time through your account settings 
                      or by contacting our support team.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Correction and Updates</h3>
                    <p className="text-muted-foreground">
                      You can update your account information, preferences, and settings at any time. 
                      We encourage you to keep your information current.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Deletion</h3>
                    <p className="text-muted-foreground">
                      You can delete your account and associated data at any time. Upon deletion, 
                      we will remove your personal information within 30 days, except where required by law.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Communication Preferences</h3>
                    <p className="text-muted-foreground">
                      You can opt out of marketing communications while still receiving important service updates. 
                      Manage your preferences in your account settings.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
                <p className="text-muted-foreground">
                  Truthlens operates globally, and your information may be processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your data regardless of where it's processed, 
                  including compliance with GDPR, CCPA, and other applicable privacy regulations.
                </p>
              </div>
            </Card>

            <Card className="glass-card">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Truthlens is not intended for children under 13. We do not knowingly collect personal information 
                  from children under 13. If we become aware that a child under 13 has provided us with personal information, 
                  we will delete such information immediately.
                </p>
              </div>
            </Card>

            <Card className="glass-card">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time to reflect changes in our practices or for legal reasons. 
                  We will notify you of any material changes via email or through our service. 
                  Your continued use of Truthlens after such changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </Card>

            <Card className="glass-card">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this privacy policy or how we handle your data, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> privacy@truthlens.ai</p>
                  <p><strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94107</p>
                  <p><strong>Data Protection Officer:</strong> dpo@truthlens.ai</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Fight Misinformation Safely?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Your privacy is protected while you help build a more truthful internet.
          </p>
          <Link to="/signup">
            <Button size="lg" className="glow hover-lift">
              <Shield className="mr-2 h-5 w-5" />
              Get Started Securely
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Privacy;