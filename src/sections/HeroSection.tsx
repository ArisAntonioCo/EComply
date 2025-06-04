import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Shield, CheckCircle, ArrowRight } from "lucide-react";
import InfiniteScroll from "@/components/infinite-scroll";

export default function HeroSection() {  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-screen flex items-center">
      {/* Sherlock-inspired Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-cyan-400/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40"></div>
          {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:px-8 lg:py-32 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-600 bg-transparent text-slate-300 text-xs font-medium mb-8">
            <Shield className="w-3 h-3" />
            RA No. 11967 Compliance
          </div>          {/* Headline */}          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium mb-6 leading-tight">
            E-Commerce Legal 
            <span className="block text-white font-playfair italic text-4xl sm:text-5xl lg:text-6xl font-normal tracking-wide lowercase">
              compliance made simple
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
          </div>          {/* Trust Indicators - Simplified */}
          <div className="flex items-center justify-center text-slate-400 text-sm mb-16">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Free Analysis • Secure & Private • Instant Results</span>
            </div>
          </div>
          
          {/* Infinite Scrolling Content */}
          <div className="relative">
            {/* Fade line with end-to-end fade */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              </div>
            </div>
            <InfiniteScroll />
          </div>
        </div>
      </div>
    </section>
  );
}
