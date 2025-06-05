import { FileText, Lock } from "lucide-react";

interface EmptyResultsProps {
  documentType: "terms" | "privacy";
}

export function EmptyResults({ documentType }: EmptyResultsProps) {
  const isTerms = documentType === "terms";
  const Icon = isTerms ? FileText : Lock;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
          <Icon className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-gray-600">No analysis results available.</p>
      </div>
    </div>
  );
}
