"use client";

import { Check, FileText, Shield, ScanSearch } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function BenefitsSection() {return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{/* Header */}
        <div className="text-left mb-12 sm:mb-16">
          <p className="text-base text-blue-600 font-medium mb-2">Benefits</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need for Complete <span className="font-playfair italic text-slate-900">Compliance</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
            Get instant compliance analysis that would normally cost thousands in legal consultations
          </p>
        </div>        {/* Benefits List */}
        <div className="flex flex-col sm:flex-row justify-start items-start gap-4 sm:gap-6 md:gap-12 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-base sm:text-lg text-slate-500">Legal Protection</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-base sm:text-lg text-slate-500">Build Customer Trust</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-base sm:text-lg text-slate-500">Save Time & Money</span>
          </div>        </div>

        {/* View Toggle with Shadcn Tabs */}
        <Tabs defaultValue="dashboard" className="w-full">
          <div className="flex justify-start mb-6">
            <TabsList className="bg-slate-100 h-auto p-1 rounded-full border border-slate-200">              <TabsTrigger 
                value="dashboard" 
                className="px-3 py-1.5 text-xs font-medium rounded-full data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:border data-[state=active]:border-slate-200 text-slate-500 data-[state=inactive]:text-slate-400 transition-all duration-300 whitespace-nowrap"
              >
                Dashboard
              </TabsTrigger>
              <TabsTrigger 
                value="results" 
                className="px-3 py-1.5 text-xs font-medium rounded-full data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:border data-[state=active]:border-slate-200 text-slate-500 data-[state=inactive]:text-slate-400 transition-all duration-300 whitespace-nowrap"
              >                Final Report
              </TabsTrigger>
            </TabsList>
          </div>        {/* Preview Dashboard - macOS Safari Window Style */}
        <div className="relative">
          {/* macOS Window Container */}
          <div className="bg-white rounded-[12px] border border-black/10 overflow-hidden relative">
            {/* macOS Title Bar */}
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 border-b border-gray-200/80 px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-gradient-to-b from-red-400 to-red-500 rounded-full shadow-sm border border-red-600/20 hover:from-red-300 hover:to-red-400 transition-all cursor-pointer"></div>
                  <div className="w-3 h-3 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full shadow-sm border border-yellow-600/20 hover:from-yellow-300 hover:to-yellow-400 transition-all cursor-pointer"></div>
                  <div className="w-3 h-3 bg-gradient-to-b from-green-400 to-green-500 rounded-full shadow-sm border border-green-600/20 hover:from-green-300 hover:to-green-400 transition-all cursor-pointer"></div>
                </div>
                {/* macOS URL Bar */}
                <TabsContent value="dashboard" className="flex-1 mx-4 mt-0">
                  <div className="bg-white rounded-md px-3 py-2 border border-gray-300/60 text-sm text-gray-600 shadow-inner bg-gradient-to-b from-gray-50/50 to-white font-mono">
                    <span className="text-green-600">🔒 </span>ecomply.app/dashboard
                  </div>
                </TabsContent>
                <TabsContent value="results" className="flex-1 mx-4 mt-0">
                  <div className="bg-white rounded-md px-3 py-2 border border-gray-300/60 text-sm text-gray-600 shadow-inner bg-gradient-to-b from-gray-50/50 to-white font-mono">
                    <span className="text-green-600">🔒 </span>ecomply.app/results
                  </div>
                </TabsContent>
                
                {/* macOS Window Controls (right side) */}
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded border border-gray-300/60 flex items-center justify-center cursor-pointer transition-colors">
                    <div className="w-3 h-0.5 bg-gray-500"></div>
                  </div>
                  <div className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded border border-gray-300/60 flex items-center justify-center cursor-pointer transition-colors">
                    <div className="w-2.5 h-2.5 border border-gray-500 bg-transparent"></div>
                  </div>
                </div>
              </div>
            </div>              
            {/* Main Content Area - iOS/macOS Style */}
            <div className="bg-gradient-to-b from-gray-50/30 to-white p-6 min-h-[500px] relative overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>              
              {/* iOS-style scroll indicator (mobile) */}
              <div className="sm:hidden absolute top-4 right-4 z-10 flex flex-col gap-1">
                <div className="w-1 h-8 bg-black/20 rounded-full">
                  <div className="w-1 h-3 bg-black/40 rounded-full animate-pulse"></div>
                </div>
              </div>              
              {/* Dashboard View Content */}
              <TabsContent value="dashboard" className="mt-0 relative z-10 data-[state=active]:animate-in data-[state=active]:slide-in-from-left-2 data-[state=active]:fade-in data-[state=active]:duration-300">
                {/* Dashboard Header - iOS Card Style */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200/60">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center">
                    <ScanSearch className="w-4 h-4 text-white drop-shadow-sm" />
                  </div>
                  <span className="text-gray-900 font-semibold text-base">EComply Analysis Dashboard</span>
                </div>

                  {/* Progress Section - iOS Card Style */}
                  <div className="bg-white border border-gray-200/60 rounded-xl p-5 mb-6 shadow-sm">
                    <div className="flex items-start mb-4">
                      <span className="text-gray-800 font-medium text-sm">Analysis Progress: 80% Complete</span>
                    </div>
                    
                    {/* iOS-style Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-5 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full shadow-inner transition-all duration-300" style={{ width: "80%" }}></div>
                    </div>
                    
                    {/* Step indicators - iOS Pill Style */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      <div className="bg-gray-50 border border-gray-200/60 rounded-lg p-3 text-center transition-all hover:bg-gray-100">
                        <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mb-1"></div>
                        <div className="text-xs text-gray-600 font-medium">Complete</div>
                      </div>
                      <div className="bg-gray-50 border border-gray-200/60 rounded-lg p-3 text-center transition-all hover:bg-gray-100">
                        <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mb-1"></div>
                        <div className="text-xs text-gray-600 font-medium">Complete</div>
                      </div>
                      <div className="bg-gray-50 border border-gray-200/60 rounded-lg p-3 text-center transition-all hover:bg-gray-100">
                        <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mb-1"></div>
                        <div className="text-xs text-gray-600 font-medium">Complete</div>
                      </div>
                      <div className="bg-blue-50 border border-blue-300/60 rounded-lg p-3 text-center shadow-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mb-1 animate-pulse"></div>
                        <div className="text-xs text-blue-700 font-medium">Processing</div>
                      </div>
                      <div className="bg-gray-50 border border-gray-200/60 rounded-lg p-3 text-center transition-all hover:bg-gray-100">
                        <div className="w-2 h-2 bg-gray-300 rounded-full mx-auto mb-1"></div>
                        <div className="text-xs text-gray-500 font-medium">Pending</div>
                      </div>
                    </div>
                  </div>                  
                  {/* Results Preview - iOS Card Style */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Terms Results */}
                    <div className="bg-white border border-gray-200/60 rounded-xl p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center">
                          <FileText className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-900 font-semibold text-sm">Terms of Service</span>
                      </div>
                      <div className="space-y-3 text-left">
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 text-xs">Overall Score</span>
                          <span className="text-gray-900 font-bold text-sm">92%</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 text-xs">Data Protection</span>
                          <span className="text-gray-900 font-bold text-sm">85%</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 text-xs">User Rights</span>
                          <span className="text-gray-900 font-bold text-sm">95%</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 text-xs">Liability Clauses</span>
                          <span className="text-gray-900 font-bold text-sm">88%</span>
                        </div>
                      </div>
                    </div>

                    {/* Privacy Results */}
                    <div className="bg-white border border-gray-200/60 rounded-xl p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center">
                          <Shield className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-900 font-semibold text-sm">Privacy Policy</span>
                      </div>
                      <div className="space-y-3 text-left">
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 text-xs">Overall Score</span>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-gray-500 font-medium text-xs">Analyzing...</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center py-1 opacity-50">
                          <span className="text-gray-400 text-xs">Data Collection</span>
                          <span className="text-gray-400 font-bold text-xs">--</span>
                        </div>
                        <div className="flex justify-between items-center py-1 opacity-50">
                          <span className="text-gray-400 text-xs">Cookie Policy</span>
                          <span className="text-gray-400 font-bold text-xs">--</span>
                        </div>
                        <div className="flex justify-between items-center py-1 opacity-50">
                          <span className="text-gray-400 text-xs">Third-party Sharing</span>
                          <span className="text-gray-400 font-bold text-xs">--</span>
                        </div>
                      </div>
                    </div>
                  </div>                  
                  {/* Compliance Issues Found - iOS Alert Style */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/60 rounded-xl p-5 mb-6 shadow-sm">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <div>
                        <h4 className="text-amber-900 font-semibold text-sm mb-3">3 Compliance Issues Found</h4>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-amber-800 text-xs">Missing data retention policy section</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-amber-800 text-xs">Consumer rights notice needs RA 11967 compliance</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-amber-800 text-xs">Contact information missing regulatory details</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations - iOS Success Style */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/60 rounded-xl p-5 mb-6 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h4 className="text-green-900 font-semibold text-sm mb-3">Recommendations</h4>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-green-800 text-xs">Add comprehensive data retention timeline</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-green-800 text-xs">Include Philippine consumer protection references</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-green-800 text-xs">Update contact section with DTI compliance info</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Bar - iOS Style */}
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200/60">
                    <button className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-lg text-xs font-medium transition-colors cursor-not-allowed">
                      ← Back
                    </button>
                    <div className="text-gray-700 bg-gray-50 border border-gray-200/60 px-4 py-2.5 rounded-lg text-xs font-medium">
                      Review results, then view combined report
                    </div>
                    <button className="px-4 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white rounded-lg text-xs font-medium shadow-sm transition-all">
                      Next →
                    </button>
                  </div>
                </TabsContent>              
              {/* Results View Content */}
              <TabsContent value="results" className="mt-0 relative z-10 data-[state=active]:animate-in data-[state=active]:slide-in-from-right-2 data-[state=active]:fade-in data-[state=active]:duration-300">
                {/* Results Header - iOS Style */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200/60">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-900 font-semibold text-base">Compliance Analysis Results</span>
                </div>

                {/* Overall Compliance Score - iOS Card Style */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/60 rounded-xl p-6 mb-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-green-800 mb-2">89%</div>
                  <div className="text-green-700 font-semibold text-sm mb-1">Overall Compliance Score</div>
                  <div className="text-green-600 text-xs">Meets RA No. 11967 requirements with minor improvements needed</div>
                </div>                
                {/* Detailed Results Grid - iOS Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Terms of Service Results */}
                  <div className="bg-white border border-gray-200/60 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-900 font-semibold text-sm">Terms of Service</span>
                      <span className="ml-auto text-green-600 font-bold text-sm bg-green-50 px-2 py-1 rounded-lg">92%</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs">Data Protection Clauses</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-3/4 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-900 font-bold text-xs">85%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs">User Rights & Obligations</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-full h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-900 font-bold text-xs">95%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs">Liability & Dispute Resolution</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-4/5 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-900 font-bold text-xs">88%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Privacy Policy Results */}
                  <div className="bg-white border border-gray-200/60 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-900 font-semibold text-sm">Privacy Policy</span>
                      <span className="ml-auto text-green-600 font-bold text-sm bg-green-50 px-2 py-1 rounded-lg">86%</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs">Data Collection Transparency</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-full h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-900 font-bold text-xs">92%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs">Cookie Policy Compliance</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-3/4 h-2 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-900 font-bold text-xs">78%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs">Third-party Data Sharing</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-4/5 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-900 font-bold text-xs">88%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Findings - iOS Info Style */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 rounded-xl p-5 mb-6 shadow-sm">
                  <h4 className="text-blue-900 font-semibold text-sm mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    Key Compliance Strengths
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-800 text-xs">Strong data protection framework in place</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-800 text-xs">Clear user rights and obligations defined</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-800 text-xs">Comprehensive dispute resolution process</span>
                    </div>
                  </div>
                </div>

                {/* Action Items - iOS Warning Style */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/60 rounded-xl p-5 mb-6 shadow-sm">
                  <h4 className="text-amber-900 font-semibold text-sm mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                    Priority Action Items
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-amber-800 text-xs">Enhance cookie consent mechanism for GDPR alignment</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-amber-800 text-xs">Add specific RA No. 11967 compliance references</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-amber-800 text-xs">Update contact information with regulatory details</span>
                    </div>
                  </div>
                </div>

                {/* Download Report Button - iOS Action Button */}
                <div className="flex justify-center pt-4 border-t border-gray-200/60">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Download Full Report
                  </button>                </div>
                </TabsContent>            </div>            
            {/* MASSIVE fade overlay system - only 60% of window visible */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-50/50  via-white to-transparent pointer-events-none rounded-b-[12px] z-10"></div>
          </div>
          
          {/* ULTRA-STRONG fade overlay - makes 40% of window disappear */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-50/50 via-white to-transparent pointer-events-none rounded-b-[12px] z-20"></div>
          
          {/* COMPLETE coverage overlay - solid background for bottom 40% */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-slate-50/50 pointer-events-none rounded-b-[12px] z-30"></div>
          
          {/* MAXIMUM strength overlay - ensures total invisibility */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-slate-50 opacity-50 pointer-events-none rounded-b-[12px] z-40"></div>
          
          {/* FINAL insurance layer - full opacity bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50 opacity-70 pointer-events-none rounded-b-[12px] z-50"></div>
        </div>
        </Tabs>
      </div>
    </section>
  );
}
