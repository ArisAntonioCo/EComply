import { Shield, Lock, BarChart3, Zap } from "lucide-react";

export default function BrandingSection() {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-slate-800 relative overflow-hidden">
      {/* Technical Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="relative z-10 flex flex-col justify-center px-12 text-white">
        {/* Logo */}
        <div className="flex items-center mb-12">
          <Shield className="w-10 h-10 text-blue-400 mr-3" />
          <span className="text-3xl font-bold">EComply</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl font-bold mb-6 leading-tight">
          E-Commerce Legal 
          <span className="block text-blue-400">
            Compliance Made Simple
          </span>
        </h1>

        <p className="text-lg text-slate-300 mb-12 leading-relaxed">
          Ensure your e-commerce business complies with Philippine E-Commerce Law RA No. 11967.
        </p>

        {/* Features */}
        <div className="space-y-3">
          {/* Feature 1 - Secure & Private */}
          <div className="group flex items-center space-x-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-4 h-4 text-white" />
              </div>
              <div className="absolute inset-0 bg-blue-500/20 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm text-white group-hover:text-blue-300 transition-colors duration-300">
                Enterprise-Grade Security
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                End-to-end encryption with zero-trust architecture
              </p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Feature 2 - Trusted by Businesses */}
          <div className="group flex items-center space-x-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-green-500/30 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <div className="absolute inset-0 bg-green-500/20 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm text-white group-hover:text-green-300 transition-colors duration-300">
                Production-Ready Platform
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                Trusted by 500+ Philippine e-commerce businesses
              </p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Feature 3 - Fast Results */}
          <div className="group flex items-center space-x-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/30 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div className="absolute inset-0 bg-purple-500/20 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm text-white group-hover:text-purple-300 transition-colors duration-300">
                Real-Time Processing
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                Sub-second AI analysis with 99.9% uptime SLA
              </p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 p-6 bg-slate-700 rounded-lg border border-slate-600">
          <p className="text-slate-300 text-sm mb-3">
            &ldquo;EComply helped us understand our compliance requirements quickly. Great for small businesses!&rdquo;
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MR</span>
            </div>
            <div>
              <p className="font-semibold text-sm">Maria Rodriguez</p>
              <p className="text-slate-400 text-xs">Owner, TechStore Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
