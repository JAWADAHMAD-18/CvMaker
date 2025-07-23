import React from "react";
import CvContext from "../context/Context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function Education() {
    const navigate = useNavigate();
    const { setFormData, setCurrentStep } = useContext(CvContext);
    const [education, setEducation] = useState({
        degree: "",
        institute: "",
        startYear: "",
        endYear: "",
        grade: "",
    });
    function handleSubmit(e) {
        e.preventDefault();
        // setFormData((prevData) => ({ ...prevData, education: education }));
        setFormData((prevData) => ({
            ...prevData,
            education: [...prevData.education, education],
        }));


        navigate("/experience");
        setCurrentStep((prev) => prev + 1);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
                    Education Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Degree
                        </label>
                        <input
                            type="text"
                            value={education.degree}
                            onChange={(e) => setEducation({ ...education, degree: e.target.value })}
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., BS Computer Science"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Institute
                        </label>
                        <input
                            type="text"
                            value={education.institute}
                            onChange={(e) => setEducation({ ...education, institute: e.target.value })}
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., COMSATS University"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Start Year
                        </label>
                        <input
                            type="text"
                            value={education.startYear}
                            onChange={(e) => setEducation({ ...education, startYear: e.target.value })}
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., 2020"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            End Year
                        </label>
                        <input
                            type="text"
                            value={education.endYear}
                            onChange={(e) => setEducation({ ...education, endYear: e.target.value })}
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., 2024"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Grade / CGPA
                        </label>
                        <input
                            type="text"
                            value={education.grade}
                            onChange={(e) => setEducation({ ...education, grade: e.target.value })}
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., 3.5/4.0"
                        />
                    </div>
                </div>

                <div className="mt-6 text-right">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition" onClick={handleSubmit}>

                        Next
                    </button>
                </div>
            </form>
        </div>

    )
}
export default Education;