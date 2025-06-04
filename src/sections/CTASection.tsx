import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, ArrowRight, CheckCircle, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-slate-800 text-white relative overflow-hidden">
      {/* Technical Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-600 bg-transparent text-slate-300 text-xs font-medium mb-6">
          <ClipboardCheck className="w-3 h-3" />
          Ready to Get Started?
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          Start Your Compliance Analysis
        </h2>
        
        <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
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
  );
}
