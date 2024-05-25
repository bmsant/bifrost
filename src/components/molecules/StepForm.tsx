// StepForm.tsx
"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Form from "../atoms/Form";
import InputField from "../atoms/InputField";
import StepNav from "../atoms/StepNav";
import ButtonIcon from "./ButtonIcon";

interface Step {
  title: string;
  type: string;
  name: string;
  placeholder: string;
}

interface StepFormProps {
  steps: Step[];
  onSubmit: (values: Record<string, string>) => void;
  buttonText: string;
  children?: (currentStep: number) => React.ReactNode;
}

const StepForm: React.FC<StepFormProps> = ({ steps, onSubmit, children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValues = { ...values };
    newValues[e.target.name] = e.target.value;
    setValues(newValues);
  };

  const handleNext = (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 h-full w-full p-4">
        <div className="fixed top-24">
          <StepNav
            steps={steps.map((step: Step) => step.title)}
            currentStep={currentStep}
            onStepClick={setCurrentStep}
          />
        </div>
        <div className="flex flex-row w-full justify-center items-center h-full">
          <div className=" h-full w-1/2 flex justify-end items-center ">
            {/* TODO: Make a Card Component */}
            <div className="w-96 flex flex-col bg-stone-100 rounded-lg p-4 mr-16 shadow-md">
              {children && children(currentStep)}
            </div>
          </div>
          <div className="h-full w-1/2 flex justify-start items-center p-4">
            <div className="flex flex-col items-center justify-center gap-4 bg-stone-100 p-4 w-96 rounded-lg ml-16 shadow-md">
              <Form onSubmit={handleSubmit}>
                <InputField
                  type={steps[currentStep].type}
                  title={steps[currentStep].title}
                  name={steps[currentStep].name}
                  placeholder={steps[currentStep].placeholder}
                  value={values[steps[currentStep].name] || ""}
                  onChange={handleChange}
                />
              </Form>
              <div className="flex flex-row items-end content-end ">
                <ButtonIcon
                  iconSrc="/assets/back.svg"
                  altText="Back"
                  onClick={handleBack}
                  className="size-12"
                  disabled={currentStep === 0}
                />

                {currentStep < steps.length - 1 ? (
                  <ButtonIcon
                    iconSrc="/assets/next.svg"
                    altText="Next"
                    onClick={handleNext}
                    className="size-12"
                  />
                ) : (
                  <ButtonIcon
                    iconSrc="/assets/check.svg"
                    altText="Submit"
                    onClick={handleSubmit}
                    className="size-12"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepForm;
