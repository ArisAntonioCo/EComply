import { ClipboardCheck } from 'lucide-react';

export default function DashboardHeaderSection() {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-600 bg-transparent text-slate-300 text-xs font-medium mb-4">
        <ClipboardCheck className="w-3 h-3" />
        Compliance Dashboard
      </div>
      <h1 className="text-xl font-bold text-white mb-2">
        RA No. 11967 Compliance Analysis
      </h1>
      <p className="text-xs text-slate-400">
        Analyze your Terms of Service and Privacy Policy documents for Philippine e-commerce compliance
      </p>
    </div>
  );
}
