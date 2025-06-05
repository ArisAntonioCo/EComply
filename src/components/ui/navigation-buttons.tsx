interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onContinue: () => void;
  canContinue: boolean;
}

export function NavigationButtons({ 
  currentStep, 
  totalSteps, 
  onBack, 
  onContinue, 
  canContinue 
}: NavigationButtonsProps) {
  const getStepMessage = () => {
    switch (currentStep) {
      case 1: return "Start by analyzing your Terms of Service";
      case 2: return "Review results, then continue to Privacy Policy";
      case 3: return "Now analyze your Privacy Policy";
      case 4: return "Review results, then view combined report";
      case 5: return "Your complete compliance analysis";
      default: return "";
    }
  };

  const showNextButton = currentStep < totalSteps && currentStep !== 1 && currentStep !== 3;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4">
      <button
        onClick={onBack}
        disabled={currentStep === 1}
        className="bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md disabled:cursor-not-allowed border border-gray-200"
      >
        <span className="flex items-center gap-2">
          ← Back
        </span>
      </button>
      
      <div className="bg-gray-50 border border-gray-200 px-6 py-3 rounded-xl shadow-sm">
        <div className="text-sm font-medium text-gray-700 text-center">
          {getStepMessage()}
        </div>
      </div>

      {showNextButton ? (
        <button
          onClick={onContinue}
          disabled={!canContinue}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
        >
          <span className="flex items-center gap-2">
            Next →
          </span>
        </button>
      ) : (
        <div className="w-20"></div>
      )}
    </div>
  );
}
