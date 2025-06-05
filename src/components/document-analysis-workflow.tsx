"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScanSearch, ShieldAlert, BarChart2, FileText, Lock } from "lucide-react";
import ResultsDashboard from "@/components/results-dashboard";

interface Step {
  id: number;
  title: string;
  description: string;
  documentType: "terms" | "privacy";
  completed: boolean;
}

interface AnalysisResult {
  document_type: string;
  overall_compliance_score: number;
  section_scores: Record<string, number>;
  missing_sections: string[];
  recommendations: Record<string, string>;
}

interface DocumentAnalysisWorkflowProps {
  onAnalyze: (document: string, documentType: "terms" | "privacy") => Promise<AnalysisResult>;
  loading: boolean;
  onRestartAnalysis?: () => void;
}

export default function DocumentAnalysisWorkflow({ onAnalyze, loading, onRestartAnalysis }: DocumentAnalysisWorkflowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [documents, setDocuments] = useState({
    terms: "",
    privacy: ""
  });  const [analysisResults, setAnalysisResults] = useState<{
    terms: AnalysisResult | null;
    privacy: AnalysisResult | null;
  }>({
    terms: null,
    privacy: null
  });

  const steps: Step[] = [
    {
      id: 1,
      title: "Terms of Service",
      description: "Paste your Terms of Service document for analysis",
      documentType: "terms",
      completed: !!analysisResults.terms
    },
    {
      id: 2,
      title: "Terms of Service Results",
      description: "Review your Terms of Service compliance analysis",
      documentType: "terms",
      completed: !!analysisResults.terms
    },
    {
      id: 3,
      title: "Privacy Policy",
      description: "Paste your Privacy Policy document for analysis",
      documentType: "privacy",
      completed: !!analysisResults.privacy
    },
    {
      id: 4,
      title: "Privacy Policy Results",
      description: "Review your Privacy Policy compliance analysis",
      documentType: "privacy",
      completed: !!analysisResults.privacy
    },
    {
      id: 5,
      title: "Combined Report",
      description: "View your complete compliance report",
      documentType: "terms", // Not used for this step
      completed: !!(analysisResults.terms && analysisResults.privacy)
    }
  ];

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  const handleAnalyze = async (documentType: "terms" | "privacy") => {
    const document = documents[documentType];
    if (!document.trim()) {
      alert(`Please paste your ${documentType === 'terms' ? 'Terms of Service' : 'Privacy Policy'} first.`);
      return;
    }

    try {
      const result = await onAnalyze(document, documentType);
      setAnalysisResults(prev => ({
        ...prev,
        [documentType]: result
      }));
      
      // Move to results step
      if (documentType === 'terms') {
        setCurrentStep(2);
      } else {
        setCurrentStep(4);
      }
    } catch (error) {
      console.error('Analysis error:', error);
    }
  };

  const handleContinue = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestartAnalysis = () => {
    setCurrentStep(1);
    setDocuments({ terms: "", privacy: "" });
    setAnalysisResults({ terms: null, privacy: null });
    if (onRestartAnalysis) {
      onRestartAnalysis();
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {      case 1: // Terms of Service Input
        return (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Clean header */}
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-200">
                  <ScanSearch className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Terms of Service Analysis
                  </h3>
                  <p className="text-sm text-gray-600">
                    AI-powered compliance checking
                  </p>
                </div>
              </div>
            </div>
            
            {/* Content area */}
            <div className="p-6 space-y-6">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Paste your Terms of Service document below to check compliance with RA No. 11967. 
                  Our AI will analyze your document for data protection requirements.
                </p>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="terms" className="block text-sm font-semibold text-gray-700">
                  Terms of Service Content
                </label>
                <div className="relative">
                  <Textarea
                    id="terms"
                    value={documents.terms}
                    onChange={(e) => setDocuments(prev => ({ ...prev, terms: e.target.value }))}
                    placeholder="Paste your complete Terms of Service document here..."
                    className="min-h-[320px] resize-none bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 shadow-sm"
                  />
                </div>
              </div>              <Button 
                onClick={() => handleAnalyze('terms')} 
                disabled={loading || !documents.terms.trim()}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white"></div>
                    <span>Analyzing Terms of Service...</span>
                  </div>
                ) : (                  <span className="flex items-center justify-center gap-2">
                    <ScanSearch className="w-4 h-4" />
                    Analyze Terms of Service
                  </span>
                )}
              </Button>
            </div>
          </div>
        );        case 2: // Terms of Service Results
        return (
          <div>
            {analysisResults.terms ? (
              <ResultsDashboard
                results={analysisResults.terms}
                documentType="terms"
                onRestart={handleRestartAnalysis}
                onContinue={handleContinue}
              />
            ) : (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-600">No analysis results available.</p>
                </div>
              </div>
            )}
          </div>
        );case 3: // Privacy Policy Input
        return (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Clean header */}
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 border-2 border-green-200">
                  <ShieldAlert className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Privacy Policy Analysis
                  </h3>
                  <p className="text-sm text-gray-600">
                    Data protection compliance
                  </p>
                </div>
              </div>
            </div>
            
            {/* Content area */}
            <div className="p-6 space-y-6">
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Now paste your Privacy Policy document to complete the compliance analysis. 
                  This will help ensure full coverage of data protection requirements.
                </p>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="privacy" className="block text-sm font-semibold text-gray-700">
                  Privacy Policy Content
                </label>
                <div className="relative">
                  <Textarea
                    id="privacy"
                    value={documents.privacy}
                    onChange={(e) => setDocuments(prev => ({ ...prev, privacy: e.target.value }))}
                    placeholder="Paste your complete Privacy Policy document here..."
                    className="min-h-[320px] resize-none bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-100 shadow-sm"
                  />
                </div>
              </div>              <Button 
                onClick={() => handleAnalyze('privacy')} 
                disabled={loading || !documents.privacy.trim()}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:text-gray-500 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white"></div>
                    <span>Analyzing Privacy Policy...</span>
                  </div>
                ) : (                  <span className="flex items-center justify-center gap-2">
                    <ShieldAlert className="w-4 h-4" />
                    Analyze Privacy Policy
                  </span>
                )}
              </Button>
            </div>
          </div>
        );        case 4: // Privacy Policy Results
        return (
          <div>
            {analysisResults.privacy ? (
              <ResultsDashboard
                results={analysisResults.privacy}
                documentType="privacy"
                onRestart={handleRestartAnalysis}
                onContinue={handleContinue}
              />
            ) : (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-600">No analysis results available.</p>
                </div>
              </div>
            )}
          </div>
        );case 5: // Combined Report
        return (
          <div>
            {analysisResults.terms && analysisResults.privacy ? (
              <ResultsDashboard
                results={{
                  ...analysisResults.terms,
                  overall_compliance_score: Math.round((analysisResults.terms.overall_compliance_score + analysisResults.privacy.overall_compliance_score) / 2),
                  combined_results: {
                    terms: analysisResults.terms,
                    privacy: analysisResults.privacy
                  }
                }}
                documentType="combined"
                onRestart={handleRestartAnalysis}
                showDownloadReport={true}
              />            ) : (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                {/* Clean header */}
                <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 border-2 border-purple-200">
                      <BarChart2 className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Complete Compliance Report
                      </h3>
                      <p className="text-sm text-gray-600">
                        Comprehensive RA No. 11967 analysis
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Content area */}
                <div className="p-6">
                  <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
                      <p className="text-purple-700 font-semibold">
                        Complete both document analyses to view the combined report.
                      </p>
                    </div>
                    <p className="text-sm text-purple-600">
                      This will provide a comprehensive overview of your compliance status across both Terms of Service and Privacy Policy documents.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };  return (
    <div className="space-y-8">
      {/* Clean Progress Indicator */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Analysis Progress
          </h3>
        </div>
        
        {/* Progress content */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-700">Step {currentStep} of {steps.length}</span>
              <span className="text-sm font-semibold text-blue-600">
                {Math.round(progress)}% Complete
              </span>
            </div>
          </div>
          
          {/* Clean Step Roadmap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`relative p-4 rounded-xl text-center transition-all duration-300 border-2 ${
                  step.id === currentStep
                    ? 'bg-blue-50 border-blue-300 shadow-md scale-105'
                    : step.completed
                    ? 'bg-green-50 border-green-300 shadow-sm'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className={`text-sm font-semibold mb-2 ${
                  step.id === currentStep ? 'text-blue-700' :
                  step.completed ? 'text-green-700' : 'text-gray-600'
                }`}>
                  {step.title}
                </div>
                <div className={`text-xs leading-tight ${
                  step.id === currentStep ? 'text-blue-600' :
                  step.completed ? 'text-green-600' : 'text-gray-500'
                }`}>
                  {step.description}
                </div>
                {step.completed && (
                  <div className="mt-3">
                    <div className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full shadow-sm">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                  </div>
                )}
                {step.id === currentStep && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Step Content */}
      {renderStepContent()}      {/* Clean Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4">        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className="bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md disabled:cursor-not-allowed border border-gray-200"
        >
          <span className="flex items-center gap-2">
            ← Back
          </span>
        </button>
        
        <div className="bg-gray-50 border border-gray-200 px-6 py-3 rounded-xl shadow-sm">
          <div className="text-sm font-medium text-gray-700 text-center">
            {currentStep === 1 && "Start by analyzing your Terms of Service"}
            {currentStep === 2 && "Review results, then continue to Privacy Policy"}
            {currentStep === 3 && "Now analyze your Privacy Policy"}
            {currentStep === 4 && "Review results, then view combined report"}
            {currentStep === 5 && "Your complete compliance analysis"}
          </div>
        </div>

        {currentStep < 5 && currentStep !== 1 && currentStep !== 3 && (          <button
            onClick={handleContinue}
            disabled={
              (currentStep === 2 && !analysisResults.terms) ||
              (currentStep === 4 && !analysisResults.privacy)
            }
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
          >
            <span className="flex items-center gap-2">
              Next →
            </span>
          </button>
        )}
        
        {/* Spacer for centering when next button is not present */}
        {(currentStep === 1 || currentStep === 3 || currentStep === 5) && (
          <div className="w-20"></div>
        )}
      </div>
    </div>
  );
}
