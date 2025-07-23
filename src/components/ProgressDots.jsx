// src/components/ProgressDots.jsx
import React, { useContext } from "react";
import CvContext from "../context/Context";

function ProgressDots() {
  const { currentStep } = useContext(CvContext);
  const totalSteps = 5;

  return (
    <div className="flex items-center justify-center mt-6">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const step = index + 1;
        const isCompleted = currentStep > step;
        const isActive = currentStep === step;

        return (
          <React.Fragment key={step}>
            {/* Dot */}
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center 
              ${
                isCompleted || isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {step}
            </div>

            {/* Line (Skip after last dot) */}
            {step !== totalSteps && (
              <div
                className={`flex-1 h-1 mx-2 
                ${
                  currentStep > step
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              ></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default ProgressDots;
