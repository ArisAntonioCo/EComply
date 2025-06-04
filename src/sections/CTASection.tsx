import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, CheckCircle, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">        {/* Badge */}        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-600 text-slate-300 text-sm font-medium mb-6">
          <ClipboardCheck className="w-3.5 h-3.5" />
          Start Your Compliance Journey
        </div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Ensure Your Business Stays <span className="font-playfair italic font-medium">Compliant</span>
        </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          Join hundreds of Filipino businesses ensuring compliance with RA No. 11967. Get started in minutes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">          <Link href="/auth">            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-medium rounded-lg">
              <ClipboardCheck className="w-4 h-4 mr-2" />
              Start Compliance Analysis
            </Button>
          </Link>
          
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>5-minute setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
