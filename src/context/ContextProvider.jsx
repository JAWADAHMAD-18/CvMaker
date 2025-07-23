// src/context/FormProvider.jsx
import React, { useState } from "react";
import CvContext from "./Context";



function CvProvider({ children }) {
    const [formData, setFormData] = useState({
        personal: {
            fullName: "",
            email: "",
            phone: "",
            address: "",
            linkedin: "",
            github: "",
        },
        education: [],
        experience: [],
        skills: [],
        projects:[],
    });
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <CvContext.Provider value={{ formData, setFormData, currentStep, setCurrentStep }}>
            {children}
        </CvContext.Provider>
    );
}

export default CvProvider;
