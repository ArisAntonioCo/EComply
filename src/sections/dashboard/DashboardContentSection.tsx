import DocumentAnalysisWorkflow from '@/components/document-analysis-workflow';

interface DashboardContentSectionProps {
  onAnalyze: (document: string, documentType: "terms" | "privacy") => Promise<any>;
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
