import { Bot, BarChart3, MapPin, Shield, Zap, Users, CheckCircle } from "lucide-react";

export default function FeaturesSection() {
  return (
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
        </div>

        {/* Features Grid */}
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
    </section>
  );
}
