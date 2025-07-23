import { useContext, useState } from "react";
import CvContext from "../context/Context";
import { useNavigate } from "react-router-dom";

function Skills() {
    const navigate = useNavigate();
    const { formData, setFormData, currentStep, setCurrentStep } = useContext(CvContext);
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleBlur = () => {
        // Split by comma, trim each entry, and filter empty strings
        const skillsArray = input
            .split(",")
            .map((skill) => skill.trim())
            .filter((skill) => skill.length > 0);

        setFormData((prev) => ({
            ...prev,
            skills: skillsArray,
        }));
    };
    function handleSubmit() {
        navigate("/projects");
        setCurrentStep((prev) => prev + 1);
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
                    Skills Information
                </h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Add Skills (comma separated)
                    </label>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        onBlur={handleBlur} // when user moves away from input
                        placeholder="e.g., JavaScript, React, Tailwind CSS"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Display Skills as Badges */}
                {formData.skills.length > 0 && (
                    <div className="mb-6 flex flex-wrap gap-2">
                        {formData.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                )}

                <div className="text-right">
                    <button
                        type="button"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition" onClick={handleSubmit}
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Skills;
