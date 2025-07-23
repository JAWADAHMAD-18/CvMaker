import React from "react";
import CvContext from "../context/Context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function Experience() {
    const navigate = useNavigate();
    const { setFormData, setCurrentStep } = useContext(CvContext);
    const [experience, setExperience] = useState({
        jobTitle: "",
        companyName: "",
        startDate: "",
        endDate: "",
        description: "",
    });
    function handelSubmit(e) {
        e.preventDefault();
        // setFormData((prevData) => ({ ...prevData, experience: experience }));
        setFormData((prevData) => ({
            ...prevData,
            experience: [...prevData.experience, experience],
        }));
        navigate("/skills");
        setCurrentStep((prev) => prev + 1);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
                    Experience Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Job Title
                        </label>
                        <input
                            type="text"
                            value={experience.jobTitle}
                            onChange={(e) => setExperience({ ...experience, jobTitle: e.target.value })}
                            placeholder="e.g., Frontend Developer"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Company Name
                        </label>
                        <input
                            type="text"
                            value={experience.companyName}
                            onChange={(e)=> setExperience({...experience, companyName: e.target.value})}
                            placeholder="e.g., XYZ Pvt Ltd"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Start Date
                        </label>
                        <input
                            type="month"
                            value={experience.startDate}
                            onChange={(e) => setExperience({ ...experience, startDate: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            End Date
                        </label>
                        <input
                            type="month"
                            value={experience.endDate}
                            onChange={(e) => setExperience({ ...experience, endDate: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            rows="4"
                            value={experience.description}
                            onChange={(e) => setExperience({ ...experience, description: e.target.value })}
                            placeholder="Describe your role and responsibilities..."
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        ></textarea>
                    </div>
                </div>

                <div className="mt-6 text-right">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition" onClick={handelSubmit}
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>

    )
}

export default Experience;