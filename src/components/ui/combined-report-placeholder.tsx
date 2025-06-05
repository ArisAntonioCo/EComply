import { BarChart2 } from "lucide-react";

export function CombinedReportPlaceholder() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
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
  );
}
