"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "bg-green-50 border-green-200";
    if (score >= 60) return "bg-yellow-50 border-yellow-200";
    return "bg-red-50 border-red-200";
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
      case "terms": return "📄";
      case "privacy": return "🔒";
      case "combined": return "📋";
      default: return "📊";
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
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl">{getDocumentIcon()}</span>
              <CardTitle className="text-2xl">{getDocumentTitle()}</CardTitle>
            </div>
            <div className={`text-6xl font-bold ${getScoreColor(overallScore)}`}>
              {overallScore}%
            </div>
            <p className="text-gray-600 mt-2">{getComplianceLevel(overallScore)}</p>
          </div>
        </CardHeader>
      </Card>

      {/* Document-specific content */}
      {documentType === "combined" && results.combined_results ? (
        // Combined Report View
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📄</span>
                Terms of Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className={`text-4xl font-bold ${getScoreColor(results.combined_results.terms.overall_compliance_score)}`}>
                  {results.combined_results.terms.overall_compliance_score}%
                </div>
                <p className="text-gray-600">Compliance Score</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className={`text-4xl font-bold ${getScoreColor(results.combined_results.privacy.overall_compliance_score)}`}>
                  {results.combined_results.privacy.overall_compliance_score}%
                </div>
                <p className="text-gray-600">Compliance Score</p>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        // Individual Document View
        <Card>
          <CardHeader>
            <CardTitle>Document Analysis Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Section Scores */}
              {results.section_scores && Object.keys(results.section_scores).length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Section Breakdown</h4>
                  <div className="space-y-2">
                    {Object.entries(results.section_scores).map(([section, score]: [string, any]) => (
                      <div key={section} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm">{section}</span>
                        <span className={`font-bold ${getScoreColor(score)}`}>{score}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Missing Sections */}
              {results.missing_sections && results.missing_sections.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2 text-red-600">Missing Sections</h4>
                  <ul className="space-y-1">
                    {results.missing_sections.map((section, index) => (
                      <li key={index} className="text-sm text-red-600 bg-red-50 p-2 rounded">
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Improvement Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {improvements.map((suggestion, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold">{suggestion.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded ${
                    suggestion.priority === 'High' ? 'bg-red-100 text-red-800' :
                    suggestion.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {suggestion.priority} Priority
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{suggestion.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      {results.recommendations && Object.keys(results.recommendations).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(results.recommendations).map(([section, recommendation]: [string, any]) => (
                <div key={section} className="p-3 bg-blue-50 rounded">
                  <h5 className="font-medium text-blue-900 mb-1">{section}</h5>
                  <p className="text-sm text-blue-700">{recommendation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        {onRestart && (
          <Button onClick={onRestart} variant="outline" className="flex-1">
            🔄 Start New Analysis
          </Button>
        )}
        {onContinue && (
          <Button onClick={onContinue} className="flex-1">
            {documentType === "terms" ? "Continue to Privacy Policy →" : 
             documentType === "privacy" ? "View Combined Report →" : "Continue"}
          </Button>
        )}
        {showDownloadReport && (
          <Button className="flex-1" disabled>
            📄 Download Full Report
            <span className="ml-2 text-xs">(Coming Soon)</span>
          </Button>
        )}
        <Button variant="outline" className="flex-1" disabled>
          📧 Email Report
          <span className="ml-2 text-xs">(Coming Soon)</span>
        </Button>
      </div>

      {/* Legal Disclaimer */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">Legal Disclaimer</h4>
              <p className="text-sm text-yellow-700">
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
