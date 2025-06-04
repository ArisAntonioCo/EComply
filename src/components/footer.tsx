import Link from "next/link";
import { Shield, ArrowUpRight, Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">      
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-xl font-bold text-white">EComply</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="mailto:arisantonioco@gmail.com" 
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Product */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                  Product
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/dashboard" 
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/#features" 
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Features
                    </Link>
                  </li>                  <li>
                    <Link 
                      href="/auth" 
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/auth" 
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Get Started
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                  Resources
                </h3>                <ul className="space-y-3">                  <li>
                    <a 
                      href="https://lawphil.net/statutes/repacts/ra2023/ra_11967_2023.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1"
                    >
                      RA No. 11967
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </li><li>
                    <a 
                      href="https://iclg.com/practice-areas/digital-business-laws-and-regulations/philippines/amp?utm_source=chatgpt.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1"
                    >
                      ICLG Guide
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://apsaylaw.com/internet-transactions-act-guide-to-vital-provisions-and-compliance/?utm_source=chatgpt.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1"
                    >
                      ITA Compliance Guide
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/#about" 
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#contact" 
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Contact
                    </Link>
                  </li>                  <li>
                    <Link 
                      href="#" 
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#" 
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Blog
                    </Link>
                  </li>                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-slate-800/50">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} EComply. All rights reserved.
              </p>
              <p className="text-slate-500 text-sm">
                Built for Filipino e-commerce compliance
              </p>
            </div>
            
            {/* Disclaimer */}            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500/60 animate-pulse"></div>
              <p className="text-slate-500 text-xs">
                Not legal advice. Consult qualified professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
