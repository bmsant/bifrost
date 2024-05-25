"use client";

import React from "react";
import StepForm from "./molecules/StepForm";
import CaptchaButton from "./CaptchaButton";

const steps = [
  { title: "Email", type: "email", name: "email", placeholder: "Enter your email" },
  { title: "Password", type: "password", name: "password", placeholder: "Enter your password" },
  { title: "Captcha", type: "text", name: "captchaReply", placeholder: "Enter the captcha" },
];

const handleSubmit = (values: Record<string, string>) => {
  console.log("Form values:", values);
};

const SignUpForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <StepForm steps={steps} onSubmit={handleSubmit} buttonText="Submit">
        {(currentStep) => currentStep === 2 && 
        <div className="flex flex-col justify-between items-center gap-4 p-4">
          <h1 className="font-bold text-xl">Complete the Captcha Challenge</h1>
            <p className="font-mono">Click to get a captcha challenge, then enter your response in the input field.</p>
          <CaptchaButton />
        </div>
        }
      </StepForm>
    </div>
  );
};

export default SignUpForm;