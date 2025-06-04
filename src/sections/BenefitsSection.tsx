import { Check, FileText, Shield, ScanSearch } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">{/* Header */}
        <div className="text-left mb-16">
          <p className="text-base text-blue-600 font-medium mb-2">Benefits</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need for Complete <span className="font-playfair italic text-slate-900">Compliance</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Get instant compliance analysis that would normally cost thousands in legal consultations
          </p>
        </div>        {/* Benefits List */}
        <div className="flex flex-col md:flex-row justify-start items-start gap-6 md:gap-12 mb-16">
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-lg text-slate-500">Legal Protection</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-lg text-slate-500">Build Customer Trust</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-lg text-slate-500">Save Time & Money</span>
          </div>
        </div>        {/* Preview Dashboard - Safari Window Style */}
        <div className="relative">
          {/* Safari Window Container */}
          <div className="bg-gray-100 rounded-lg border border-slate-300 p-3">
            {/* Safari Top Bar */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-md px-3 py-1 border border-slate-300 text-xs text-slate-600">
                  🔒 ecomply.app/dashboard
                </div>
              </div>
              <div className="w-16"></div>
            </div>
            
            {/* Main Content */}
            <div className="bg-white rounded border border-slate-300 p-6">              {/* Dashboard Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-300">
                <div className="w-8 h-8 border border-blue-200 bg-blue-50 rounded flex items-center justify-center">
                  <ScanSearch className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-slate-900 font-semibold">EComply Analysis Dashboard</span>
              </div>

              {/* Progress Section */}
              <div className="border border-slate-300 rounded p-4 mb-6">
                <div className="flex items-start mb-3">
                  <span className="text-slate-700 font-medium text-sm">Analysis Progress: 80% Complete</span>
                </div>                <div className="w-full border border-blue-200 rounded-full h-2 mb-4">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
                
                {/* Step indicators */}
                <div className="grid grid-cols-5 gap-2">
                  <div className="border border-slate-300 rounded p-2 text-left">
                    <div className="font-semibold mb-1 text-xs text-slate-900">Terms Analysis</div>
                    <span className="text-xs text-slate-600">✓ Complete</span>
                  </div>
                  <div className="border border-slate-300 rounded p-2 text-left">
                    <div className="font-semibold mb-1 text-xs text-slate-900">Terms Results</div>
                    <span className="text-xs text-slate-600">✓ Complete</span>
                  </div>                  <div className="border border-slate-300 rounded p-2 text-left">
                    <div className="font-semibold mb-1 text-xs text-slate-900">Privacy Analysis</div> 
                    <span className="text-xs text-slate-600">✓ Complete</span>
                  </div>
                  <div className="border border-blue-600 bg-blue-50 rounded p-2 text-left">
                    <div className="font-semibold mb-1 text-xs text-blue-900">Privacy Results</div>
                    <span className="text-xs text-blue-700">● Processing</span>
                  </div>
                  <div className="border border-slate-300 rounded p-2 text-left">
                    <div className="font-semibold mb-1 text-xs text-slate-900">Final Report</div>
                    <span className="text-xs text-slate-400">Pending</span>
                  </div>
                </div>
              </div>

              {/* Results Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">                {/* Terms Results */}
                <div className="border border-slate-300 rounded p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 border border-blue-200 bg-blue-50 rounded flex items-center justify-center">
                      <FileText className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-slate-900 font-semibold text-sm">Terms of Service</span>
                  </div>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 text-xs">Overall Score</span>
                      <span className="text-slate-900 font-bold">92%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 text-xs">Data Protection</span>
                      <span className="text-slate-900 font-bold">85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 text-xs">User Rights</span>
                      <span className="text-slate-900 font-bold">95%</span>
                    </div>
                  </div>
                </div>                {/* Privacy Results */}
                <div className="border border-slate-300 rounded p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 border border-blue-200 bg-blue-50 rounded flex items-center justify-center">
                      <Shield className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-slate-900 font-semibold text-sm">Privacy Policy</span>
                  </div>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 text-xs">Overall Score</span>
                      <span className="text-slate-900 font-bold text-xs">Analyzing...</span>
                    </div>
                    <div className="flex justify-between items-center opacity-50">
                      <span className="text-slate-400 text-xs">Data Collection</span>
                      <span className="text-slate-400 font-bold text-xs">--</span>
                    </div>
                    <div className="flex justify-between items-center opacity-50">
                      <span className="text-slate-400 text-xs">Cookie Policy</span>
                      <span className="text-slate-400 font-bold text-xs">--</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-300">
                <button className="px-4 py-2 border border-slate-300 text-slate-500 rounded text-xs font-medium cursor-not-allowed">
                  ← Back
                </button>
                <div className="text-slate-700 border border-slate-300 px-3 py-2 rounded text-xs">
                  Review results, then view combined report
                </div>
                <button className="px-4 py-2 bg-slate-900 text-white rounded text-xs font-medium border border-slate-900">
                  Next →
                </button>
              </div>            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
