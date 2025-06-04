'use client'

import { Shield, CheckCircle, FileText, AlertTriangle, Globe, Scale } from 'lucide-react'

const complianceItems = [
  { icon: Shield, text: "Data Privacy Protection", color: "text-blue-400" },
  { icon: CheckCircle, text: "Terms of Service Compliance", color: "text-green-400" },
  { icon: FileText, text: "Privacy Policy Analysis", color: "text-purple-400" },
  { icon: AlertTriangle, text: "Risk Assessment", color: "text-yellow-400" },
  { icon: Globe, text: "Philippine E-Commerce Law", color: "text-cyan-400" },
  { icon: Scale, text: "Legal Requirement Check", color: "text-orange-400" },
  { icon: Shield, text: "Consumer Protection", color: "text-indigo-400" },
  { icon: CheckCircle, text: "Compliance Verification", color: "text-emerald-400" },
]

export default function InfiniteScroll() {
  return (
    <div className="relative w-full overflow-hidden py-4 sm:py-8 text-fade-edges">
      {/* Scrolling content without mask */}
      <div className="flex animate-scroll">
        {/* First set */}
        <div className="flex items-center space-x-6 sm:space-x-12 flex-shrink-0">
          {complianceItems.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center space-x-2 sm:space-x-3 text-slate-300 whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color} flex-shrink-0`} />
              <span className="text-xs sm:text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-6 sm:space-x-12 flex-shrink-0 ml-6 sm:ml-12">
          {complianceItems.map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center space-x-2 sm:space-x-3 text-slate-300 whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color} flex-shrink-0`} />
              <span className="text-xs sm:text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
