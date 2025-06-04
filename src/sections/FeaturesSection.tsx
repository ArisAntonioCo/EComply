import { Bot, BarChart3, MapPin, Shield, Zap, Users, Check } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-8">
            <Shield className="w-3.5 h-3.5" />
            Comprehensive Compliance Platform
          </div>          <h2 className="text-3xl lg:text-4xl font-bold text-slate-950 mb-6 tracking-tight">
            Complete Tools for 
            <span className="text-blue-600 font-playfair italic"> Compliance</span>
          </h2>          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
            Professional-grade tools designed specifically for Filipino e-commerce businesses to ensure legal compliance and build customer trust.
          </p>
            {/* Trusted by section */}
          <div className="flex items-center justify-center gap-3">
            <Check className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-600">Trusted by 500+ Filipino businesses</span>
              {/* Overlapping company icons */}
            <div className="flex items-center -space-x-1 ml-2">
              {/* Shopify */}
              <div className="flex items-center justify-center w-6 h-6 bg-white rounded-md border border-slate-200 shadow-sm">
                <svg className="w-3 h-3 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              
              {/* WooCommerce */}
              <div className="flex items-center justify-center w-6 h-6 bg-white rounded-md border border-slate-200 shadow-sm">
                <svg className="w-3 h-3 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8.5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm4 0c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5z"/>
                </svg>
              </div>
              
              {/* Lazada */}
              <div className="flex items-center justify-center w-6 h-6 bg-white rounded-md border border-slate-200 shadow-sm">
                <svg className="w-3 h-3 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/>
                </svg>
              </div>
              
              {/* Local Business */}
              <div className="flex items-center justify-center w-6 h-6 bg-white rounded-md border border-slate-200 shadow-sm">
                <svg className="w-3 h-3 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h2v-2H7v-2h2V9H7V7h7v2h-2v2h2v2h-2v2h2v2z"/>
                </svg>
              </div>
              
              {/* Plus indicator */}
              <div className="flex items-center justify-center w-6 h-6 bg-slate-100 rounded-md border border-slate-200 shadow-sm">
                <span className="text-xs font-medium text-slate-500">+</span>
              </div>
            </div>
          </div>
        </div>        {/* Features Grid with Gray Lines and Plus Icons */}
        <div className="relative max-w-6xl mx-auto">
          {/* Grid Background with Lines */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
            {/* Vertical Lines */}
            <div className="border-r border-slate-200"></div>
            <div className="border-r border-slate-200"></div>
            <div></div>
            <div className="border-r border-slate-200 border-t border-slate-200"></div>
            <div className="border-r border-slate-200 border-t border-slate-200"></div>
            <div className="border-t border-slate-200"></div>
          </div>

          {/* Plus Icons at Grid Intersections - Only Middle Two */}
          <div className="absolute inset-0 pointer-events-none">            
            {/* Middle row intersections */}
            <div className="absolute top-1/2 left-1/3 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-white border border-slate-200 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 text-slate-400">
                <svg viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
            </div>
            <div className="absolute top-1/2 left-2/3 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-white border border-slate-200 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 text-slate-400">
                <svg viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Features Content */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-0">
            {/* Feature 1 */}
            <div className="p-8 text-left">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Bot className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base font-medium text-slate-900 mb-2">AI personalization</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Advanced AI analyzes your documents for compliance gaps
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 text-left">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base font-medium text-slate-900 mb-2">Detailed reports</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Comprehensive analysis with actionable recommendations
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 text-left">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base font-medium text-slate-900 mb-2">Philippine law focus</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Specifically designed for RA No. 11967 compliance
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 text-left">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base font-medium text-slate-900 mb-2">Secure & private</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enterprise-grade security with complete privacy protection
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 text-left">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base font-medium text-slate-900 mb-2">Lightning fast</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Get compliance analysis results in seconds, not days
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 text-left">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base font-medium text-slate-900 mb-2">Expert support</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Access help from Philippine e-commerce compliance experts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
