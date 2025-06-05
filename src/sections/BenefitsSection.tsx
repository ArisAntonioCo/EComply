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
          </div>

        {/* Preview Dashboard - Safari Window Style */}
        <div className="relative">
          {/* Safari Window Container */}
          <div className="bg-gray-100 rounded-lg border border-slate-300 p-2 sm:p-3">
            {/* Safari Top Bar */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>              <TabsContent value="dashboard" className="flex-1 mx-2 sm:mx-4 mt-0">
                <div className="bg-white rounded-md px-2 sm:px-3 py-1 border border-slate-300 text-xs text-slate-600">
                  <span className="hidden sm:inline">🔒 </span>ecomply.app/dashboard
                </div>
              </TabsContent>
              <TabsContent value="results" className="flex-1 mx-2 sm:mx-4 mt-0">
                <div className="bg-white rounded-md px-2 sm:px-3 py-1 border border-slate-300 text-xs text-slate-600">
                  <span className="hidden sm:inline">🔒 </span>ecomply.app/results
                </div>
              </TabsContent>
              <div className="w-8 sm:w-16"></div>
            </div>              {/* Main Content - Scrollable on Mobile */}
            <div className="bg-white rounded border border-slate-300 p-3 sm:p-6 max-h-[70vh] sm:max-h-none overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100 relative">              {/* Mobile scroll indicator */}
              <div className="sm:hidden absolute top-2 right-2 z-10 flex flex-col gap-1">
                <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce delay-200"></div>
              </div>              {/* Dashboard View Content */}
              <TabsContent value="dashboard" className="mt-0 data-[state=active]:animate-in data-[state=active]:slide-in-from-left-2 data-[state=active]:fade-in data-[state=active]:duration-300">
                {/* Dashboard Header */}
                <div className="flex items-center gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-300">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 border border-blue-200 bg-blue-50 rounded flex items-center justify-center flex-shrink-0">
                    <ScanSearch className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                  <span className="text-slate-900 font-semibold text-sm sm:text-base">EComply Analysis Dashboard</span>
                </div>

                  {/* Progress Section */}
                  <div className="border border-slate-300 rounded p-3 sm:p-4 mb-4 sm:mb-6">
                    <div className="flex items-start mb-3">
                      <span className="text-slate-700 font-medium text-xs sm:text-sm">Analysis Progress: 80% Complete</span>
                    </div>                    <div className="w-full border border-blue-200 rounded-full h-2 mb-4">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                    
                    {/* Step indicators */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      <div className="border border-slate-300 rounded p-2 text-left">
                        <div className="font-semibold mb-1 text-xs text-slate-900">Terms Analysis</div>
                        <span className="text-xs text-slate-600">✓ Complete</span>
                      </div>
                      <div className="border border-slate-300 rounded p-2 text-left">
                        <div className="font-semibold mb-1 text-xs text-slate-900">Terms Results</div>
                        <span className="text-xs text-slate-600">✓ Complete</span>
                      </div>                      <div className="border border-slate-300 rounded p-2 text-left">
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
                  </div>                  {/* Results Preview */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">                    {/* Terms Results */}
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
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 text-xs">Liability Clauses</span>
                          <span className="text-slate-900 font-bold">88%</span>
                        </div>
                      </div>
                    </div>                    {/* Privacy Results */}
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
                        <div className="flex justify-between items-center opacity-50">
                          <span className="text-slate-400 text-xs">Third-party Sharing</span>
                          <span className="text-slate-400 font-bold text-xs">--</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compliance Issues Found */}
                  <div className="border border-amber-300 bg-amber-50 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <div>
                        <h4 className="text-amber-900 font-semibold text-sm mb-2">3 Compliance Issues Found</h4>
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

                  {/* Recommendations */}
                  <div className="border border-green-300 bg-green-50 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h4 className="text-green-900 font-semibold text-sm mb-2">Recommendations</h4>
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

                  {/* Bottom Action Bar */}
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-300">
                    <button className="px-4 py-2 border border-slate-300 text-slate-500 rounded text-xs font-medium cursor-not-allowed">
                      ← Back
                    </button>
                    <div className="text-slate-700 border border-slate-300 px-3 py-2 rounded text-xs">
                      Review results, then view combined report
                    </div>
                    <button className="px-4 py-2 bg-slate-900 text-white rounded text-xs font-medium border border-slate-900">                      Next →
                    </button>
                  </div>
                </TabsContent>              {/* Results View Content */}
              <TabsContent value="results" className="mt-0 data-[state=active]:animate-in data-[state=active]:slide-in-from-right-2 data-[state=active]:fade-in data-[state=active]:duration-300">
                {/* Results Header */}
                  <div className="flex items-center gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-300">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 border border-green-200 bg-green-50 rounded flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    </div>
                    <span className="text-slate-900 font-semibold text-sm sm:text-base">Compliance Analysis Results</span>
                  </div>

                  {/* Overall Compliance Score */}
                  <div className="border border-green-300 bg-green-50 rounded-lg p-4 mb-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-green-800 mb-2">89%</div>
                    <div className="text-green-700 font-semibold text-sm mb-1">Overall Compliance Score</div>
                    <div className="text-green-600 text-xs">Meets RA No. 11967 requirements with minor improvements needed</div>
                  </div>

                  {/* Detailed Results Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Terms of Service Results */}
                    <div className="border border-slate-300 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-6 h-6 border border-blue-200 bg-blue-50 rounded flex items-center justify-center">
                          <FileText className="w-3 h-3 text-blue-600" />
                        </div>
                        <span className="text-slate-900 font-semibold text-sm">Terms of Service</span>
                        <span className="ml-auto text-green-600 font-bold text-sm">92%</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 text-xs">Data Protection Clauses</span>
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-1.5 bg-slate-200 rounded-full">
                              <div className="w-10 h-1.5 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-slate-900 font-bold text-xs">85%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 text-xs">User Rights & Obligations</span>
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-1.5 bg-slate-200 rounded-full">
                              <div className="w-11 h-1.5 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-slate-900 font-bold text-xs">95%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 text-xs">Liability & Dispute Resolution</span>
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-1.5 bg-slate-200 rounded-full">
                              <div className="w-10 h-1.5 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-slate-900 font-bold text-xs">88%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Privacy Policy Results */}
                    <div className="border border-slate-300 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-6 h-6 border border-purple-200 bg-purple-50 rounded flex items-center justify-center">
                          <Shield className="w-3 h-3 text-purple-600" />
                        </div>
                        <span className="text-slate-900 font-semibold text-sm">Privacy Policy</span>
                        <span className="ml-auto text-green-600 font-bold text-sm">86%</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 text-xs">Data Collection Transparency</span>
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-1.5 bg-slate-200 rounded-full">
                              <div className="w-11 h-1.5 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-slate-900 font-bold text-xs">92%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 text-xs">Cookie Policy Compliance</span>
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-1.5 bg-slate-200 rounded-full">
                              <div className="w-9 h-1.5 bg-amber-500 rounded-full"></div>
                            </div>
                            <span className="text-slate-900 font-bold text-xs">78%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 text-xs">Third-party Data Sharing</span>
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-1.5 bg-slate-200 rounded-full">
                              <div className="w-10 h-1.5 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-slate-900 font-bold text-xs">88%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Findings */}
                  <div className="border border-blue-300 bg-blue-50 rounded-lg p-4 mb-6">
                    <h4 className="text-blue-900 font-semibold text-sm mb-3 flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                        <Check className="w-2 h-2 text-white" />
                      </div>
                      Key Compliance Strengths
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-blue-800 text-xs">Strong data protection framework in place</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-blue-800 text-xs">Clear user rights and obligations defined</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-blue-800 text-xs">Comprehensive dispute resolution process</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Items */}
                  <div className="border border-amber-300 bg-amber-50 rounded-lg p-4 mb-6">
                    <h4 className="text-amber-900 font-semibold text-sm mb-3 flex items-center gap-2">
                      <div className="w-4 h-4 bg-amber-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      Priority Action Items
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-amber-800 text-xs">Enhance cookie consent mechanism for GDPR alignment</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-amber-800 text-xs">Add specific RA No. 11967 compliance references</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-amber-800 text-xs">Update contact information with regulatory details</span>
                      </div>
                    </div>
                  </div>

                  {/* Download Report Button */}
                  <div className="flex justify-center pt-4 border-t border-slate-300">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>                      Download Full Report
                    </button>
                  </div>
                </TabsContent>
            </div>
          </div>
        </div>
        </Tabs>
      </div>
    </section>
  );
}
