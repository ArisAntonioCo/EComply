import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/contact-form";
import { ClipboardCheck, Bot, BarChart3, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">          <div className="flex items-center justify-center space-x-3 mb-8">
            <ClipboardCheck className="w-12 h-12 text-blue-600" />
            <h1 className="text-5xl font-bold text-gray-900">Ecomply</h1>
          </div>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ensure your Filipino e-commerce business complies with RA No. 11967 
            through AI-powered document analysis of your Terms of Service and Privacy Policy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/auth">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Get Started Free
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg" className="px-8 py-3">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <Bot className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-600">
              Advanced AI reviews your documents against RA No. 11967 requirements
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Compliance Scoring</h3>
            <p className="text-gray-600">
              Get detailed compliance scores and actionable recommendations
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Philippine Law Focus</h3>
            <p className="text-gray-600">
              Specifically designed for Filipino e-commerce compliance requirements
            </p>
          </div>
        </div>        {/* CTA Section */}
        <div className="text-center bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Ensure Compliance?
          </h2>
          <p className="text-gray-600 mb-6">
            Join Filipino e-commerce businesses using Ecomply to stay compliant with RA No. 11967
          </p>
          <Link href="/auth">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Start Your Analysis Now
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}
