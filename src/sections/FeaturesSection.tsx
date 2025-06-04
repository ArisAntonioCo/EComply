import { Bot, BarChart3, MapPin, Shield, Zap, Users, Check } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-8">
            <Shield className="w-3.5 h-3.5" />
            Comprehensive Compliance Platform
          </div>          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
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
        </div>        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-5 h-5 text-white" />
              </div>              <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">AI-Powered Analysis</h3>              <p className="text-slate-600 leading-relaxed text-sm">
                Advanced artificial intelligence reviews your Terms of Service and Privacy Policy for compliance gaps with instant insights and recommendations.
              </p>
            </div>
          </div>          {/* Feature 2 */}
          <div className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl bg-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">Detailed Reports</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Comprehensive compliance reports with specific recommendations and actionable improvements tailored to your business needs.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-violet-300 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl bg-violet-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-white" />
              </div>              <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors">Philippine Law Focus</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Specifically designed for RA No. 11967 and Philippine e-commerce regulations with deep local expertise and legal knowledge.
              </p>
            </div>
          </div>          {/* Feature 4 */}
          <div className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-5 h-5 text-white" />
              </div>              <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">Secure & Private</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Your documents are processed securely and never stored. Complete privacy protection with enterprise-grade security standards.
              </p>
            </div>
          </div>          {/* Feature 5 */}
          <div className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl bg-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>              <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">Lightning Fast</h3>              <p className="text-slate-600 leading-relaxed text-sm">
                Receive your compliance analysis in seconds, not days. Quick turnaround for busy business owners who need immediate results.
              </p>
            </div>
          </div>          {/* Feature 6 */}
          <div className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl bg-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-5 h-5 text-white" />
              </div>              <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Expert Support</h3>              <p className="text-slate-600 leading-relaxed text-sm">
                Access help from compliance experts who understand Philippine e-commerce law and regulations with deep industry knowledge.
              </p>
            </div>
          </div>        </div>
      </div>
    </section>
  );
}
