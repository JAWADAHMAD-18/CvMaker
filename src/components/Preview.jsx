import React, { useContext, useRef } from "react";
import CvContext from "../context/Context";
import html2pdf from "html2pdf.js";

function FinalPreview() {
    const { formData } = useContext(CvContext);
    const printRef = useRef();

    const handleDownloadPdf = () => {
        const element = printRef.current;
        if (!element) {
            console.error("Resume content not found");
            return;
        }

        const options = {
            margin: 0.5,
            filename: `${formData.personal?.fullName || "Resume"}_Resume.pdf`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };

        html2pdf().set(options).from(element).save();
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Resume Preview</h2>
                <button
                    onClick={handleDownloadPdf}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Download as PDF
                </button>
            </div>

            <div ref={printRef} className="bg-white p-8 shadow-lg rounded-lg text-gray-800">
                {/* Personal Info */}
                <div className="border-b pb-4 mb-4">
                    <h1 className="text-3xl font-bold">{formData.personal?.fullName || "Your Name"}</h1>
                    <p>
                        {formData.personal?.email || ""}
                        {formData.personal?.phone ? ` | ${formData.personal.phone}` : ""}
                    </p>
                    <p>{formData.personal?.address || ""}</p>
                    <p>
                        {formData.personal?.linkedin && (
                            <a
                                href={formData.personal.linkedin}
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        )}
                        {formData.personal?.linkedin && formData.personal?.github && " | "}
                        {formData.personal?.github && (
                            <a
                                href={formData.personal.github}
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        )}
                    </p>
                </div>

                {/* Education */}
                {formData.education?.length > 0 && (
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Education</h2>
                        {formData.education.map((edu, idx) => (
                            <div key={idx} className="mb-2">
                                <p className="font-semibold">{edu.degree} at {edu.institute}</p>
                                <p className="text-sm text-gray-600 font-medium">Start Year: {edu.startYear}</p>
                                <p className="text-sm text-gray-600 font-medium">End Year: {edu.endYear}</p>
                                <p className="text-sm text-gray-600 font-medium">Grade: {edu.grade}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Experience */}
                {formData.experience?.length > 0 && (
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Experience</h2>
                        {formData.experience.map((exp, idx) => (
                            <div key={idx} className="mb-2">
                                <p className="font-semibold">{exp.jobTitle} at {exp.companyName}</p>
                                <p className="text-sm text-gray-600 font-medium">Job Joining: {exp.startDate}</p>
                                <p className="text-sm text-gray-600 font-medium">Job Leaving: {exp.endDate}</p>
                                <p>{exp.description}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Projects */}
                {formData.projects?.length > 0 && (
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Projects</h2>
                        {formData.projects.map((proj, idx) => (
                            <div key={idx} className="mb-2">
                                <p className="font-semibold">{proj.title}</p>
                                <p className="text-sm text-gray-600">{proj.techStack}</p>
                                <p>{proj.description}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Skills */}
                {formData.skills?.length > 0 && (
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {formData.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FinalPreview;
