import DocumentAnalysisWorkflow from '@/components/document-analysis-workflow';

interface AnalysisResult {
  document_type: string;
  overall_compliance_score: number;
  section_scores: Record<string, number>;
  missing_sections: string[];
  recommendations: Record<string, string>;
}

interface DashboardContentSectionProps {
  onAnalyze: (document: string, documentType: "terms" | "privacy") => Promise<AnalysisResult>;
  loading: boolean;
  onRestartAnalysis: () => void;
}

export default function DashboardContentSection({ 
  onAnalyze, 
  loading, 
  onRestartAnalysis 
}: DashboardContentSectionProps) {
  return (
    <DocumentAnalysisWorkflow 
      onAnalyze={onAnalyze} 
      loading={loading} 
      onRestartAnalysis={onRestartAnalysis}
    />
  );
}
