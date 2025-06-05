interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  progress: number;
}

export function ProgressIndicator({ currentStep, totalSteps, progress }: ProgressIndicatorProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Analysis Progress
        </h3>
      </div>
      
      {/* Progress content */}
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium text-gray-700">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm font-semibold text-blue-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
