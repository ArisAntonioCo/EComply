import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScanSearch, ShieldAlert } from "lucide-react";

interface DocumentInputFormProps {
  documentType: "terms" | "privacy";
  value: string;
  onChange: (value: string) => void;
  onAnalyze: () => void;
  loading: boolean;
}

export function DocumentInputForm({ 
  documentType, 
  value, 
  onChange, 
  onAnalyze, 
  loading 
}: DocumentInputFormProps) {
  const config = {
    terms: {
      title: "Terms of Service Analysis",
      subtitle: "AI-powered compliance checking",
      icon: ScanSearch,
      iconBg: "bg-blue-100 border-blue-200",
      iconColor: "text-blue-600",
      infoBg: "bg-blue-50 border-blue-100",
      buttonBg: "bg-blue-600 hover:bg-blue-700",
      focusColor: "focus:border-blue-400 focus:ring-blue-100",
      description: "Paste your Terms of Service document below to check compliance with RA No. 11967. Our AI will analyze your document for data protection requirements.",
      label: "Terms of Service Content",
      placeholder: "Paste your complete Terms of Service document here...",
      loadingText: "Analyzing Terms of Service...",
      buttonText: "Analyze Terms of Service"
    },
    privacy: {
      title: "Privacy Policy Analysis",
      subtitle: "Data protection compliance",
      icon: ShieldAlert,
      iconBg: "bg-green-100 border-green-200",
      iconColor: "text-green-600",
      infoBg: "bg-green-50 border-green-100",
      buttonBg: "bg-green-600 hover:bg-green-700",
      focusColor: "focus:border-green-400 focus:ring-green-100",
      description: "Now paste your Privacy Policy document to complete the compliance analysis. This will help ensure full coverage of data protection requirements.",
      label: "Privacy Policy Content",
      placeholder: "Paste your complete Privacy Policy document here...",
      loadingText: "Analyzing Privacy Policy...",
      buttonText: "Analyze Privacy Policy"
    }
  };

  const currentConfig = config[documentType];
  const Icon = currentConfig.icon;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentConfig.iconBg} border-2`}>
            <Icon className={`w-5 h-5 ${currentConfig.iconColor}`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {currentConfig.title}
            </h3>
            <p className="text-sm text-gray-600">
              {currentConfig.subtitle}
            </p>
          </div>
        </div>
      </div>
      
      {/* Content area */}
      <div className="p-6 space-y-6">
        <div className={`${currentConfig.infoBg} rounded-xl p-4 border`}>
          <p className="text-sm text-gray-700 leading-relaxed">
            {currentConfig.description}
          </p>
        </div>
        
        <div className="space-y-3">
          <label htmlFor={documentType} className="block text-sm font-semibold text-gray-700">
            {currentConfig.label}
          </label>
          <div className="relative">
            <Textarea
              id={documentType}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={currentConfig.placeholder}
              className={`min-h-[320px] resize-none bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 ${currentConfig.focusColor} focus:ring-2 shadow-sm`}
            />
          </div>
        </div>

        <Button 
          onClick={onAnalyze} 
          disabled={loading || !value.trim()}
          className={`w-full ${currentConfig.buttonBg} disabled:bg-gray-300 disabled:text-gray-500 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:cursor-not-allowed`}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white"></div>
              <span>{currentConfig.loadingText}</span>
            </div>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Icon className="w-4 h-4" />
              {currentConfig.buttonText}
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}
