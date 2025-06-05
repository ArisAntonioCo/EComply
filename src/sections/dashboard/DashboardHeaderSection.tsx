import { ClipboardCheck } from 'lucide-react';

export default function DashboardHeaderSection() {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm mb-6 shadow-sm">
        <ClipboardCheck className="w-4 h-4 text-blue-600" />
        Compliance Dashboard
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        RA No. 11967 Compliance Analysis
      </h1>
      <p className="text-gray-600 text-lg leading-relaxed">
        Analyze your Terms of Service and Privacy Policy documents for Philippine e-commerce compliance
      </p>
    </div>
  );
}
