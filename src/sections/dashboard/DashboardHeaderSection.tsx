import { ClipboardCheck } from 'lucide-react';

export default function DashboardHeaderSection() {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-700 bg-slate-900 text-slate-300 text-sm mb-4">
        <ClipboardCheck className="w-4 h-4" />
        Compliance Dashboard
      </div>
      <h1 className="text-2xl font-semibold text-white mb-2">
        RA No. 11967 Compliance Analysis
      </h1>
      <p className="text-slate-400">
        Analyze your Terms of Service and Privacy Policy documents for Philippine e-commerce compliance
      </p>
    </div>
  );
}
