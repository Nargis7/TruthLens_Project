import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Shield, Mail } from "lucide-react";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
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
          </div>
          <h1 className="text-3xl font-bold mb-2">Join Truthlens</h1>
          <p className="text-muted-foreground">Start verifying information with AI</p>
        </div>

        <Card className="glass-card">
          <div className="p-6 space-y-4">
            <Button className="w-full hover-lift" variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with email</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create a password" />
              </div>
              
              <Button className="w-full glow hover-lift">
                <Shield className="mr-2 h-4 w-4" />
                Create Account
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </Card>

        <div className="text-center mt-6 text-xs text-muted-foreground">
          By signing up, you agree to our{" "}
          <Link to="/privacy" className="text-primary hover:underline">
            Terms of Service and Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;