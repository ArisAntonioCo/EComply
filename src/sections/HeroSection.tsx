import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Shield, CheckCircle, Zap, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      {/* Background Pattern - Technical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:px-8 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-600 bg-transparent text-slate-300 text-xs font-medium mb-8">
            <Shield className="w-3 h-3" />
            RA No. 11967 Compliance
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
            E-Commerce Legal 
            <span className="block text-blue-400">
              Compliance Made Simple
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm lg:text-sm text-slate-300 mb-12 max-w-3xl mx-auto font-semibold leading-relaxed">
            Ensure your e-commerce platform complies with Philippine E-Commerce Law RA No. 11967. 
            Get instant AI-powered analysis of your Terms of Service and Privacy Policy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/auth">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-medium">
                <ClipboardCheck className="w-4 h-4 mr-2" />
                Start Free Analysis
              </Button>
            </Link>
            
            <Link href="/dashboard">
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
    </section>
  );
}
