import React, { useContext, useState } from "react";
import CvContext from "../context/Context";
import { useNavigate } from "react-router-dom";

function Projects() {
    const navigate = useNavigate();
    const { setFormData, setCurrentStep } = useContext(CvContext);

    const [projects, setProjects] = useState([
        { title: "", description: "", techStack: "" },
    ]);

    // Handle input change for a specific project
    const handleChange = (index, field, value) => {
        const updatedProjects = [...projects];
        updatedProjects[index][field] = value;
        setProjects(updatedProjects);
    };

    // Add a new empty project entry
    const handleAddProject = () => {
        setProjects([...projects, { title: "", description: "", techStack: "" }]);
    };

    // On next, update context and go to final preview
    const handleNext = () => {
        setFormData((prev) => ({
            ...prev,
            projects: projects,
        }));
        navigate("/preview");
        setCurrentStep((prev) => prev + 1);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>

            {projects.map((project, index) => (
                <div
                    key={index}
                    className="project-entry border border-gray-200 p-4 rounded-lg mb-4"
                >
                    <h3 className="font-semibold text-gray-700 mb-2">
                        Project {index + 1}
                    </h3>
                    <div className="mb-3">
                        <label className="block text-gray-700 font-medium mb-1">
                            Project Title
                        </label>
                        <input
                            type="text"
                            value={project.title}
                            onChange={(e) =>
                                handleChange(index, "title", e.target.value)
                            }
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="E.g. Portfolio Website"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 font-medium mb-1">
                            Description
                        </label>
                        <textarea
                            rows="3"
                            value={project.description}
                            onChange={(e) =>
                                handleChange(index, "description", e.target.value)
                            }
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Brief description of your project..."
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Tech Stack
                        </label>
                        <input
                            type="text"
                            value={project.techStack}
                            onChange={(e) =>
                                handleChange(index, "techStack", e.target.value)
                            }
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="E.g. React, Tailwind, Firebase"
                        />
                    </div>
                </div>
            ))}

            {/* Add Another Project */}
            <button
                type="button"
                onClick={handleAddProject}
                className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition mb-6"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                    />
                </svg>
                Add Another Project
            </button>

            {/* Next Button */}
            <div className="text-right">
                <button
                    onClick={handleNext}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Projects;
