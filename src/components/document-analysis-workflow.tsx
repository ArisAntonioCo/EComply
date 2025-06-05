"use client";

import { useState } from "react";
import ResultsDashboard from "@/components/results-dashboard";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { StepRoadmap } from "@/components/ui/step-roadmap";
import { DocumentInputForm } from "@/components/ui/document-input-form";
import { EmptyResults } from "@/components/ui/empty-results";
import { CombinedReportPlaceholder } from "@/components/ui/combined-report-placeholder";
import { NavigationButtons } from "@/components/ui/navigation-buttons";

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
          <DocumentInputForm
            documentType="terms"
            value={documents.terms}
            onChange={(value) => setDocuments(prev => ({ ...prev, terms: value }))}
            onAnalyze={() => handleAnalyze('terms')}
            loading={loading}
          />
        );

      case 2: // Terms of Service Results
        return analysisResults.terms ? (
          <ResultsDashboard
            results={analysisResults.terms}
            documentType="terms"
            onRestart={handleRestartAnalysis}
            onContinue={handleContinue}
          />
        ) : (
          <EmptyResults documentType="terms" />
        );

      case 3: // Privacy Policy Input
        return (
          <DocumentInputForm
            documentType="privacy"
            value={documents.privacy}
            onChange={(value) => setDocuments(prev => ({ ...prev, privacy: value }))}
            onAnalyze={() => handleAnalyze('privacy')}
            loading={loading}
          />
        );

      case 4: // Privacy Policy Results
        return analysisResults.privacy ? (
          <ResultsDashboard
            results={analysisResults.privacy}
            documentType="privacy"
            onRestart={handleRestartAnalysis}
            onContinue={handleContinue}
          />
        ) : (
          <EmptyResults documentType="privacy" />
        );

      case 5: // Combined Report
        return (analysisResults.terms && analysisResults.privacy) ? (
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
          <CombinedReportPlaceholder />
        );

      default:
        return null;
    }
  };  return (
    <div className="space-y-8">
      {/* Progress Indicator with Roadmap */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-900">Analysis Progress</h3>
        </div>
        <div className="p-6 space-y-6">
          <ProgressIndicator 
            currentStep={currentStep}
            totalSteps={steps.length}
            progress={progress}
          />
          <StepRoadmap 
            steps={steps} 
            currentStep={currentStep} 
          />
        </div>
      </div>

      {/* Current Step Content */}
      {renderStepContent()}

      {/* Navigation */}
      <NavigationButtons
        currentStep={currentStep}
        totalSteps={steps.length}
        onBack={handleBack}
        onContinue={handleContinue}
        canContinue={
          (currentStep === 2 && !!analysisResults.terms) ||
          (currentStep === 4 && !!analysisResults.privacy)
        }
      />
    </div>
  );
}
