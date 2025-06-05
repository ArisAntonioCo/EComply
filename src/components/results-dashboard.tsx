"use client";

import { Button } from "@/components/ui/button";
import { ClipboardCheck, Lock, FileText, BarChart3, Lightbulb, Bot, RotateCcw, Mail, Download, AlertTriangle } from "lucide-react";

interface AnalysisResult {
  document_type: string;
  overall_compliance_score: number;
  section_scores: Record<string, number>;
  missing_sections: string[];
  recommendations: Record<string, string>;
  combined_results?: {
    terms: AnalysisResult;
    privacy: AnalysisResult;
  };
}

interface ResultsDashboardProps {
  results: AnalysisResult;
  documentType: "terms" | "privacy" | "combined";
  onRestart?: () => void;
  onContinue?: () => void;
  showDownloadReport?: boolean;
}

export default function ResultsDashboard({ results, documentType, onRestart, onContinue, showDownloadReport }: ResultsDashboardProps) {
  const overallScore = results.overall_compliance_score;  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getComplianceLevel = (score: number) => {
    if (score >= 80) return "High Compliance";
    if (score >= 60) return "Moderate Compliance";
    return "Low Compliance";
  };

  const getDocumentTitle = () => {
    switch (documentType) {
      case "terms": return "Terms of Service";
      case "privacy": return "Privacy Policy";
      case "combined": return "Complete Compliance Report";
      default: return "Analysis Results";
    }
  };
    const getDocumentIcon = () => {
    switch (documentType) {
      case "terms": return <FileText className="w-8 h-8 text-blue-600" />;
      case "privacy": return <Lock className="w-8 h-8 text-blue-600" />;
      case "combined": return <ClipboardCheck className="w-8 h-8 text-blue-600" />;
      default: return <BarChart3 className="w-8 h-8 text-blue-600" />;
    }
  };
  
  const getImprovementSuggestions = () => {
    const suggestions = [];
    
    if (overallScore < 80) {
      suggestions.push({
        title: "Review Missing Sections",
        description: "Address all missing required sections identified in your documents.",
        priority: "High"
      });
    }
    
    // For combined reports, compare document scores
    if (documentType === "combined" && results.combined_results) {
      const termsScore = results.combined_results.terms.overall_compliance_score;
      const privacyScore = results.combined_results.privacy.overall_compliance_score;
      
      if (termsScore < privacyScore) {
        suggestions.push({
          title: "Focus on Terms of Service",
          description: "Your Terms of Service needs more attention than your Privacy Policy.",
          priority: "Medium"
        });
      } else if (privacyScore < termsScore) {
        suggestions.push({
          title: "Improve Privacy Policy",
          description: "Your Privacy Policy requires more comprehensive compliance updates.",
          priority: "Medium"
        });
      }
    }

    if (overallScore < 60) {
      suggestions.push({
        title: "Consider Legal Consultation",
        description: "Given the low compliance score, consider consulting with a legal professional specializing in Philippine e-commerce law.",
        priority: "High"
      });
    }

    suggestions.push({
      title: "Regular Compliance Reviews",
      description: "Schedule quarterly reviews to ensure ongoing compliance with RA No. 11967.",
      priority: "Low"
    });

    return suggestions;
  };

  const improvements = getImprovementSuggestions();    return (
    <div className="space-y-8">
      {/* Overall Compliance Header */}
      <div className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden ${
        overallScore >= 80 ? 'ring-2 ring-green-200' :
        overallScore >= 60 ? 'ring-2 ring-yellow-200' :
        'ring-2 ring-red-200'
      }`}>
        <div className="bg-gray-50 border-b border-gray-200 px-8 py-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="p-3 rounded-full bg-blue-100 border-2 border-blue-200">
                {getDocumentIcon()}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {getDocumentTitle()}
              </h2>
            </div>
            
            <div className="relative">
              <div className={`text-7xl font-black ${getScoreColor(overallScore)}`}>
                {overallScore}%
              </div>
            </div>
            
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
              overallScore >= 80 ? 'bg-green-100 border border-green-300 text-green-700' :
              overallScore >= 60 ? 'bg-yellow-100 border border-yellow-300 text-yellow-700' :
              'bg-red-100 border border-red-300 text-red-700'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                overallScore >= 80 ? 'bg-green-500' :
                overallScore >= 60 ? 'bg-yellow-500' :
                'bg-red-500'
              }`} />
              <span className="font-semibold">{getComplianceLevel(overallScore)}</span>
            </div>
          </div>
        </div>
      </div>      {/* Document-specific content */}
      {documentType === "combined" && results.combined_results ? (
        // Combined Report View
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-blue-100 border-2 border-blue-200">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Terms of Service
                </h3>
              </div>
            </div>
            <div className="p-6 text-center">
              <div className={`text-5xl font-bold ${getScoreColor(results.combined_results.terms.overall_compliance_score)} mb-2`}>
                {results.combined_results.terms.overall_compliance_score}%
              </div>
              <p className="text-sm text-gray-500">Compliance Score</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-green-100 border-2 border-green-200">
                  <Lock className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Privacy Policy
                </h3>
              </div>
            </div>
            <div className="p-6 text-center">
              <div className={`text-5xl font-bold ${getScoreColor(results.combined_results.privacy.overall_compliance_score)} mb-2`}>
                {results.combined_results.privacy.overall_compliance_score}%
              </div>
              <p className="text-sm text-gray-500">Compliance Score</p>
            </div>
          </div>
        </div>
      ) : (
        // Individual Document View
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Document Analysis Details
            </h3>
          </div>
          <div className="p-6 space-y-6">
            {/* Section Scores */}
            {results.section_scores && Object.keys(results.section_scores).length > 0 && (
              <div>
                <h4 className="text-sm font-semibold mb-4 text-gray-700">Section Breakdown</h4>
                <div className="space-y-3">
                  {Object.entries(results.section_scores).map(([section, score]: [string, number]) => (
                    <div key={section} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">{section}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-500 ${
                              score >= 80 ? 'bg-green-500' :
                              score >= 60 ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}
                            style={{ width: `${score}%` }}
                          />
                        </div>
                        <span className={`font-bold text-sm ${getScoreColor(score)}`}>{score}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Missing Sections */}
            {results.missing_sections && results.missing_sections.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold mb-4 text-gray-700">Missing Sections</h4>
                <div className="space-y-2">
                  {results.missing_sections.map((section, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                      <span className="text-sm text-red-700">{section}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}      {/* Improvement Suggestions */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-yellow-100 border-2 border-yellow-200">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Improvement Suggestions
            </h3>
          </div>
        </div>
        <div className="p-6 space-y-4">
          {improvements.map((suggestion, index) => (
            <div key={index} className="relative">
              <div className={`p-4 rounded-xl border-l-4 ${
                suggestion.priority === 'High' ? 'border-red-500 bg-red-50' :
                suggestion.priority === 'Medium' ? 'border-yellow-500 bg-yellow-50' :
                'border-green-500 bg-green-50'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-gray-900">
                    {suggestion.title}
                  </h4>
                  <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                    suggestion.priority === 'High' ? 'bg-red-100 text-red-700 border border-red-300' :
                    suggestion.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' :
                    'bg-green-100 text-green-700 border border-green-300'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      suggestion.priority === 'High' ? 'bg-red-500' :
                      suggestion.priority === 'Medium' ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`} />
                    {suggestion.priority} Priority
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{suggestion.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>      {/* AI Recommendations */}
      {results.recommendations && Object.keys(results.recommendations).length > 0 && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-purple-100 border-2 border-purple-200">
                <Bot className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                AI Recommendations
              </h3>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {Object.entries(results.recommendations).map(([section, recommendation]: [string, string]) => (
              <div key={section} className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">{section}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      )}      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-6">        {onRestart && (
          <Button 
            onClick={onRestart} 
            className="flex-1 flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <RotateCcw className="w-4 h-4" />
            Start New Analysis
          </Button>
        )}
        {onContinue && (
          <Button 
            onClick={onContinue} 
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {documentType === "terms" ? "Continue to Privacy Policy →" : 
             documentType === "privacy" ? "View Combined Report →" : "Continue"}
          </Button>
        )}
        {showDownloadReport && (
          <Button 
            className="flex-1 flex items-center justify-center gap-2 bg-gray-400 hover:bg-gray-500 text-gray-200 font-medium py-2.5 px-4 rounded-lg border border-gray-300 cursor-not-allowed opacity-60"
            disabled
          >
            <Download className="w-4 h-4" />
            Download Full Report
            <span className="text-xs opacity-75">(Coming Soon)</span>
          </Button>
        )}
        <Button 
          className="flex-1 flex items-center justify-center gap-2 bg-gray-400 hover:bg-gray-500 text-gray-200 font-medium py-2.5 px-4 rounded-lg border border-gray-300 cursor-not-allowed opacity-60" 
          disabled
        >
          <Mail className="w-4 h-4" />
          Email Report
          <span className="text-xs opacity-75">(Coming Soon)</span>
        </Button>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-yellow-50 rounded-2xl border border-yellow-200 overflow-hidden shadow-lg">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-yellow-100 border-2 border-yellow-200 flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-900">
                Legal Disclaimer
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                This analysis is for informational purposes only and does not constitute legal advice. 
                For compliance assurance, please consult with qualified legal professionals familiar 
                with Philippine e-commerce law and RA No. 11967.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
