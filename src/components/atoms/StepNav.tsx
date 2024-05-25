import React from "react";

interface StepNavProps {
  steps: string[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

const StepNav: React.FC<StepNavProps> = ({
  steps,
  currentStep,
  onStepClick,
}) => {
  return (
    <div className="flex space-x-4 ">
      {steps.map((name, index) => (
        <div
          key={index}
          className={`flex items-center cursor-pointer ${
            index <= currentStep ? "text-stone-500" : "text-stone-500"
          }`}
          onClick={() => onStepClick(index)}
        >
          <div
            className={`flex items-center justify-center rounded-full active:scale-95 ${
              index === currentStep
                ? "w-10 h-10 bg-stone-500 text-white"
                : "w-6 h-6 bg-stone-300 text-stone-700"
            }`}
          >
            {index + 1}
          </div>
          <span className="ml-2">{name}</span>
          {index < steps.length - 1 && (
            <div className="w-8 h-px bg-stone-300 mx-2"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepNav;
