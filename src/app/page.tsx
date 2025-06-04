import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/contact-form";
import { ClipboardCheck, Bot, BarChart3, MapPin, Shield, Zap, CheckCircle, Users, TrendingUp, ArrowRight, Code, FileText, Database } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        {/* Background Pattern - Technical Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:px-8 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              RA No. 11967 Compliance
            </div>{/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              E-Commerce Legal 
              <span className="block text-blue-400">
                Compliance Made Simple
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ensure your e-commerce platform complies with Philippine E-Commerce Law RA No. 11967. 
              Get instant AI-powered analysis of your Terms of Service and Privacy Policy.
            </p>{/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/auth">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium">
                  <ClipboardCheck className="w-5 h-5 mr-2" />
                  Start Free Analysis
                </Button>
              </Link>              <Link href="/dashboard">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-medium border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white hover:border-slate-600">
                  View Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400" />
                Secure & Private
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                Instant Results
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Everything You Need for Compliance
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive tools designed specifically for Filipino e-commerce businesses to ensure legal compliance
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced artificial intelligence reviews your Terms of Service and Privacy Policy for compliance gaps.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Detailed Reports</h3>
              <p className="text-gray-600 leading-relaxed">
                Get comprehensive compliance reports with specific recommendations and actionable improvements.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Philippine Law Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Specifically designed for RA No. 11967 and other Philippine e-commerce regulations.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors">
              <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Private</h3>
              <p className="text-gray-600 leading-relaxed">
                Your documents are processed securely and never stored. Complete privacy protection guaranteed.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 bg-teal-50 rounded-lg border border-teal-200 hover:border-teal-300 transition-colors">
              <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your compliance analysis in seconds, not days. Quick turnaround for busy business owners.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 bg-indigo-50 rounded-lg border border-indigo-200 hover:border-indigo-300 transition-colors">
              <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Get help from our compliance experts who understand Filipino e-commerce law and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Ecomply?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Legal Protection</h3>
                    <p className="text-gray-600">Protect your business from legal issues and potential penalties by ensuring your policies meet all requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Build Customer Trust</h3>
                    <p className="text-gray-600">Show your customers that you take their privacy and rights seriously with compliant, transparent policies.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Save Time & Money</h3>
                    <p className="text-gray-600">Avoid expensive legal consultations and get instant compliance analysis that would normally cost thousands.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Dashboard */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <span className="font-medium text-green-800 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Terms of Service
                    </span>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-bold">92%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="font-medium text-blue-800 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Privacy Policy
                    </span>
                    <div className="flex items-center gap-2 text-blue-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-bold">88%</span>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-900 rounded-lg text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">90%</div>
                      <div className="text-slate-400">Overall Compliance Score</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-lg opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-600 rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </section>{/* CTA Section - Technical Flat Design */}
      <section className="py-24 bg-slate-800 text-white relative overflow-hidden">
        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">          {/* Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium mb-6">
            <ClipboardCheck className="w-4 h-4" />
            Ready to Get Started?
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Start Your Compliance Analysis
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of Filipino e-commerce businesses using Ecomply to stay compliant with RA No. 11967. 
            Start your free analysis in under 5 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/auth">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium">
                <ClipboardCheck className="w-5 h-5 mr-2" />
                Start Your Free Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>Instant results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}
