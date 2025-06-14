import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Shield, CheckCircle, ArrowRight } from "lucide-react";
import InfiniteScroll from "@/components/infinite-scroll";

export default function HeroSection() {  return (
    <section id="hero" className="relative overflow-hidden bg-slate-900 text-white min-h-screen flex items-center w-full">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900"></div>
        
        {/* Animated gradient orbs - responsive sizing */}
        <div className="absolute top-10 md:top-20 left-4 md:left-20 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 md:bottom-20 right-4 md:right-20 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-br from-cyan-400/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 md:w-[600px] h-60 md:h-[400px] bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:80px_80px] opacity-40"></div>
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-32 z-10">
        <div className="text-center max-w-4xl mx-auto w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-600 bg-transparent text-slate-300 text-xs font-medium mb-6 sm:mb-8">
            <Shield className="w-3 h-3" />
            RA No. 11967 Compliance
          </div>          {/* Headline */}          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-medium mb-6 sm:mb-8 leading-tight text-center w-full">
            <span className="block w-full -mb-2 sm:-mb-3 md:-mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-inter font-bold">Legal Compliance</span>            <span className="block w-full text-white font-playfair italic text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-semibold">
              Simplified
            </span>
          </h1>{/* Subheadline */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto font-medium leading-relaxed px-4 sm:px-6 w-full">
            AI-powered RA No. 11967 compliance analysis that&apos;s 6x faster than traditional legal review. 
            Professional document analysis in seconds, not weeks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0 w-full max-w-md mx-auto">
            <Link href="/auth" className="flex-1">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 text-sm sm:text-base font-medium w-full">
                <ClipboardCheck className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Start Free Analysis</span>
                <span className="sm:hidden">Get Started</span>
              </Button>
            </Link>
            
            <Link href="/dashboard" className="flex-1">
              <Button variant="outline" size="sm" className="px-4 sm:px-6 py-3 text-sm sm:text-base font-medium border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white hover:border-slate-600 w-full">
                <span className="hidden sm:inline">View Demo</span>
                <span className="sm:hidden">Demo</span>
                <ArrowRight className="w-3 h-3 ml-1 sm:ml-2" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators - Simplified */}
          <div className="flex items-center justify-center text-slate-400 text-xs sm:text-sm mb-12 sm:mb-16 px-4 sm:px-0 w-full">
            <div className="flex items-center gap-2 text-center max-w-full">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="leading-relaxed break-words">Free Analysis • Secure & Private • Instant Results</span>
            </div>
          </div>
          
          {/* Infinite Scrolling Content */}
          <div className="relative w-full">
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
