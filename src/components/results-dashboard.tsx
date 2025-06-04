"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  const overallScore = results.overall_compliance_score;
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "bg-green-900/30 border-green-600";
    if (score >= 60) return "bg-yellow-900/30 border-yellow-600";
    return "bg-red-900/30 border-red-600";
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
      case "terms": return <FileText className="w-8 h-8 text-blue-400" />;
      case "privacy": return <Lock className="w-8 h-8 text-blue-400" />;
      case "combined": return <ClipboardCheck className="w-8 h-8 text-blue-400" />;
      default: return <BarChart3 className="w-8 h-8 text-blue-400" />;
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

  const improvements = getImprovementSuggestions();
  
  return (
    <div className="space-y-6">
      {/* Overall Compliance Header */}
      <Card className={`${getScoreBgColor(overallScore)}`}>
        <CardHeader>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              {getDocumentIcon()}
              <CardTitle className="text-2xl text-white">{getDocumentTitle()}</CardTitle>
            </div>
            <div className={`text-6xl font-bold ${getScoreColor(overallScore)}`}>
              {overallScore}%
            </div>
            <p className="text-slate-300 mt-2">{getComplianceLevel(overallScore)}</p>
          </div>
        </CardHeader>
      </Card>

      {/* Document-specific content */}
      {documentType === "combined" && results.combined_results ? (
        // Combined Report View
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-slate-700 bg-slate-800/80">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <FileText className="w-6 h-6 text-blue-400" />
                Terms of Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className={`text-4xl font-bold ${getScoreColor(results.combined_results.terms.overall_compliance_score)}`}>
                  {results.combined_results.terms.overall_compliance_score}%
                </div>
                <p className="text-slate-300">Compliance Score</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-slate-700 bg-slate-800/80">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Lock className="w-6 h-6 text-blue-400" />
                Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className={`text-4xl font-bold ${getScoreColor(results.combined_results.privacy.overall_compliance_score)}`}>
                  {results.combined_results.privacy.overall_compliance_score}%
                </div>
                <p className="text-slate-300">Compliance Score</p>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        // Individual Document View
        <Card className="border-slate-700 bg-slate-800/80">
          <CardHeader>
            <CardTitle className="text-white">Document Analysis Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Section Scores */}
              {results.section_scores && Object.keys(results.section_scores).length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2 text-slate-200">Section Breakdown</h4>
                  <div className="space-y-2">
                    {Object.entries(results.section_scores).map(([section, score]: [string, number]) => (
                      <div key={section} className="flex justify-between items-center p-2 bg-slate-700/50 rounded">
                        <span className="text-sm text-slate-300">{section}</span>
                        <span className={`font-bold ${getScoreColor(score)}`}>{score}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Missing Sections */}
              {results.missing_sections && results.missing_sections.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2 text-red-400">Missing Sections</h4>
                  <ul className="space-y-1">
                    {results.missing_sections.map((section, index) => (
                      <li key={index} className="text-sm text-red-300 bg-red-900/30 p-2 rounded border border-red-600">
                        • {section}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Improvement Suggestions */}
      <Card className="border-slate-700 bg-slate-800/80">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Lightbulb className="w-6 h-6 text-blue-400" />
            Improvement Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {improvements.map((suggestion, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-slate-200">{suggestion.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded ${
                    suggestion.priority === 'High' ? 'bg-red-900/50 text-red-300 border border-red-600' :
                    suggestion.priority === 'Medium' ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-600' :
                    'bg-green-900/50 text-green-300 border border-green-600'
                  }`}>
                    {suggestion.priority} Priority
                  </span>
                </div>
                <p className="text-slate-300 text-sm">{suggestion.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      {results.recommendations && Object.keys(results.recommendations).length > 0 && (
        <Card className="border-slate-700 bg-slate-800/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Bot className="w-6 h-6 text-blue-400" />
              AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(results.recommendations).map(([section, recommendation]: [string, string]) => (
                <div key={section} className="p-3 bg-blue-900/30 rounded border border-blue-600">
                  <h5 className="font-medium text-blue-200 mb-1">{section}</h5>
                  <p className="text-sm text-blue-300">{recommendation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        {onRestart && (
          <Button onClick={onRestart} variant="outline" className="flex-1 flex items-center gap-2 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
            <RotateCcw className="w-4 h-4" />
            Start New Analysis
          </Button>
        )}
        {onContinue && (
          <Button onClick={onContinue} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
            {documentType === "terms" ? "Continue to Privacy Policy →" : 
             documentType === "privacy" ? "View Combined Report →" : "Continue"}
          </Button>
        )}
        {showDownloadReport && (
          <Button className="flex-1 flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700" disabled>
            <Download className="w-4 h-4" />
            Download Full Report
            <span className="ml-2 text-xs">(Coming Soon)</span>
          </Button>
        )}
        <Button variant="outline" className="flex-1 flex items-center gap-2 border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white hover:border-slate-600" disabled>
          <Mail className="w-4 h-4" />
          Email Report
          <span className="ml-2 text-xs">(Coming Soon)</span>
        </Button>
      </div>

      {/* Legal Disclaimer */}
      <Card className="bg-yellow-900/30 border-yellow-600">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1" />
            <div>
              <h4 className="font-semibold text-yellow-200 mb-2">Legal Disclaimer</h4>
              <p className="text-sm text-yellow-300">
                This analysis is for informational purposes only and does not constitute legal advice. 
                For compliance assurance, please consult with qualified legal professionals familiar 
                with Philippine e-commerce law and RA No. 11967.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
