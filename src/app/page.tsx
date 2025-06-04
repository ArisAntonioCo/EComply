import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/contact-form";
import { ClipboardCheck, Bot, BarChart3, MapPin, Shield, Zap, CheckCircle, Users, TrendingUp, ArrowRight, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        {/* Background Pattern - Technical Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:px-8 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-600 bg-transparent text-slate-300 text-xs font-medium mb-8">
              <Shield className="w-3 h-3" />
              RA No. 11967 Compliance
            </div>{/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              E-Commerce Legal 
              <span className="block text-blue-400">
                Compliance Made Simple
              </span>
            </h1>            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ensure your e-commerce platform complies with Philippine E-Commerce Law RA No. 11967. 
              Get instant AI-powered analysis of your Terms of Service and Privacy Policy.
            </p>            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/auth">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-medium">
                  <ClipboardCheck className="w-4 h-4 mr-2" />
                  Start Free Analysis
                </Button>
              </Link>              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="px-6 py-3 text-base font-medium border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white hover:border-slate-600">
                  View Demo
                  <ArrowRight className="w-3 h-3 ml-2" />
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
      </section>      {/* Features Section - Modern Design */}
      <section id="features" className="relative py-32 bg-slate-50 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-8">
              <Shield className="w-3.5 h-3.5" />
              Comprehensive Compliance Platform
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Everything You Need for 
              <span className="text-blue-600"> Compliance</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Comprehensive tools designed specifically for Filipino e-commerce businesses to ensure legal compliance and build customer trust.
            </p>
          </div>          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group relative p-8 bg-white rounded-2xl border border-slate-200/60 hover:border-slate-300/80 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">AI-Powered Analysis</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Advanced artificial intelligence reviews your Terms of Service and Privacy Policy for compliance gaps with instant insights.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-8 bg-white rounded-2xl border border-slate-200/60 hover:border-slate-300/80 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">Detailed Reports</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Get comprehensive compliance reports with specific recommendations and actionable improvements for your business.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-8 bg-white rounded-2xl border border-slate-200/60 hover:border-slate-300/80 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-violet-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-violet-700 transition-colors">Philippine Law Focus</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Specifically designed for RA No. 11967 and other Philippine e-commerce regulations with local expertise.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative p-8 bg-white rounded-2xl border border-slate-200/60 hover:border-slate-300/80 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-orange-700 transition-colors">Secure & Private</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Your documents are processed securely and never stored. Complete privacy protection guaranteed with enterprise-grade security.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group relative p-8 bg-white rounded-2xl border border-slate-200/60 hover:border-slate-300/80 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors">Lightning Fast</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Get your compliance analysis in seconds, not days. Quick turnaround for busy business owners who need results now.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group relative p-8 bg-white rounded-2xl border border-slate-200/60 hover:border-slate-300/80 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">Expert Support</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Get help from our compliance experts who understand Filipino e-commerce law and regulations inside and out.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="mt-20 flex justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Trusted by 500+ Filipino businesses</span>
            </div>
          </div>
        </div>
      </section>{/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                Why Choose EComply?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-gray-900 mb-2">Legal Protection</h3>
                    <p className="text-gray-600">Protect your business from legal issues and potential penalties by ensuring your policies meet all requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-gray-900 mb-2">Build Customer Trust</h3>
                    <p className="text-gray-600">Show your customers that you take their privacy and rights seriously with compliant, transparent policies.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-gray-900 mb-2">Save Time & Money</h3>
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-600 bg-transparent text-slate-300 text-xs font-medium mb-6">
            <ClipboardCheck className="w-3 h-3" />
            Ready to Get Started?
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            Start Your Compliance Analysis
          </h2>          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of Filipino e-commerce businesses using EComply to stay compliant with RA No. 11967. 
            Start your free analysis in under 5 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/auth">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-medium">
                <ClipboardCheck className="w-4 h-4 mr-2" />
                Start Your Free Analysis
                <ArrowRight className="w-4 h-4 ml-2" />
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
