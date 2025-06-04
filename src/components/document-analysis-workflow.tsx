"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
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
    switch (currentStep) {
      case 1: // Terms of Service Input
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📄</span>
                Terms of Service Analysis
              </CardTitle>
              <p className="text-gray-600">
                Paste your Terms of Service document below to check compliance with RA No. 11967
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="terms" className="block text-sm font-medium text-gray-700 mb-2">
                  Terms of Service Content
                </label>
                <Textarea
                  id="terms"
                  value={documents.terms}
                  onChange={(e) => setDocuments(prev => ({ ...prev, terms: e.target.value }))}
                  placeholder="Paste your Terms of Service document here..."
                  className="min-h-[300px] resize-none"
                />
              </div>

              <Button 
                onClick={() => handleAnalyze('terms')} 
                disabled={loading || !documents.terms.trim()}
                className="w-full"
                size="lg"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Analyzing Terms of Service...
                  </div>
                ) : (
                  'Analyze Terms of Service'
                )}
              </Button>
            </CardContent>
          </Card>
        );      case 2: // Terms of Service Results
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
              <Card>
                <CardContent>
                  <p className="text-gray-500">No analysis results available.</p>
                </CardContent>
              </Card>
            )}
          </div>
        );

      case 3: // Privacy Policy Input
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                Privacy Policy Analysis
              </CardTitle>
              <p className="text-gray-600">
                Now paste your Privacy Policy document to complete the compliance analysis
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="privacy" className="block text-sm font-medium text-gray-700 mb-2">
                  Privacy Policy Content
                </label>
                <Textarea
                  id="privacy"
                  value={documents.privacy}
                  onChange={(e) => setDocuments(prev => ({ ...prev, privacy: e.target.value }))}
                  placeholder="Paste your Privacy Policy document here..."
                  className="min-h-[300px] resize-none"
                />
              </div>

              <Button 
                onClick={() => handleAnalyze('privacy')} 
                disabled={loading || !documents.privacy.trim()}
                className="w-full"
                size="lg"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Analyzing Privacy Policy...
                  </div>
                ) : (
                  'Analyze Privacy Policy'
                )}
              </Button>
            </CardContent>
          </Card>
        );      case 4: // Privacy Policy Results
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
              <Card>
                <CardContent>
                  <p className="text-gray-500">No analysis results available.</p>
                </CardContent>
              </Card>
            )}
          </div>
        );      case 5: // Combined Report
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
              />
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">📋</span>
                    Complete Compliance Report
                  </CardTitle>
                  <p className="text-gray-600">
                    Your comprehensive RA No. 11967 compliance analysis
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Complete both document analyses to view the combined report.</p>
                </CardContent>
              </Card>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Indicator */}
      <Card>
        <CardHeader>
          <CardTitle>Document Analysis Progress</CardTitle>
          <div className="space-y-4">
            <Progress value={progress} className="w-full" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>Step {currentStep} of {steps.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Step Roadmap */}          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`p-3 rounded text-center text-sm ${
                  step.id === currentStep
                    ? 'bg-blue-100 text-blue-900 border-2 border-blue-300'
                    : step.completed
                    ? 'bg-green-100 text-green-900'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <div className="font-medium">{step.title}</div>
                <div className="text-xs mt-1 opacity-75">{step.description}</div>
                {step.completed && (
                  <div className="mt-2">
                    <span className="text-green-600">✓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Current Step Content */}
      {renderStepContent()}

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 1}
        >
          ← Back
        </Button>
        
        <div className="text-sm text-gray-500">
          {currentStep === 1 && "Start by analyzing your Terms of Service"}
          {currentStep === 2 && "Review results, then continue to Privacy Policy"}
          {currentStep === 3 && "Now analyze your Privacy Policy"}
          {currentStep === 4 && "Review results, then view combined report"}
          {currentStep === 5 && "Your complete compliance analysis"}
        </div>

        {currentStep < 5 && currentStep !== 1 && currentStep !== 3 && (
          <Button
            onClick={handleContinue}
            disabled={
              (currentStep === 2 && !analysisResults.terms) ||
              (currentStep === 4 && !analysisResults.privacy)
            }
          >
            Next →
          </Button>
        )}
      </div>
    </div>
  );
}
