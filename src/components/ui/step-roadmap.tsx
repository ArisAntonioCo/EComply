interface Step {
  id: number;
  title: string;
  description: string;
  documentType: "terms" | "privacy";
  completed: boolean;
}

interface StepRoadmapProps {
  steps: Step[];
  currentStep: number;
}

export function StepRoadmap({ steps, currentStep }: StepRoadmapProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`relative p-4 rounded-xl text-center transition-all duration-300 border-2 ${
            step.id === currentStep
              ? 'bg-blue-50 border-blue-300 shadow-md scale-105'
              : step.completed
              ? 'bg-green-50 border-green-300 shadow-sm'
              : 'bg-gray-50 border-gray-200'
          }`}
        >
          <div className={`text-sm font-semibold mb-2 ${
            step.id === currentStep ? 'text-blue-700' :
            step.completed ? 'text-green-700' : 'text-gray-600'
          }`}>
            {step.title}
          </div>
          <div className={`text-xs leading-tight ${
            step.id === currentStep ? 'text-blue-600' :
            step.completed ? 'text-green-600' : 'text-gray-500'
          }`}>
            {step.description}
          </div>
          {step.completed && (
            <div className="mt-3">
              <div className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full shadow-sm">
                <span className="text-xs font-bold">✓</span>
              </div>
            </div>
          )}
          {step.id === currentStep && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
}
