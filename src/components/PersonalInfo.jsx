import React, { useContext } from "react";
import CvContext from "../context/Context";
import { useNavigate } from "react-router-dom";

function PersonalInfo() {
    const navigate = useNavigate();
    const { setCurrentStep } = useContext(CvContext);
    const { formData, setFormData } = useContext(CvContext);
    const { personal } = formData;
    const [info,setInfo] = React.useState({fullName:"", email:"", phone:"", address:"", linkedin:"", github:""});
    // const [email,setEmail] = React.useState(personal.email);
    // const [phone,setPhone] = React.useState(personal.phone);
    // const [address,setAddress] = React.useState(personal.address);
    // const [linkedin,setLinkedin] = React.useState(personal.linkedin);
    // const [github,setGithub] = React.useState(personal.github);

    const handleChange = (e) => {
        e.preventDefault();
        setFormData((prevData) => ({ ...prevData, personal: info }));
        navigate("/education");
        setCurrentStep((prev) => prev + 1);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        value={info.fullName}
                        onChange= {(e)=> setInfo({...info, fullName: e.target.value})}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={info.email}
                        onChange= {(e) => setInfo({...info, email: e.target.value})}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={info.phone}
                        onChange= {(e) => setInfo({...info, phone: e.target.value})}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                        placeholder="03xx-xxxxxxx"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        value={info.address}
                        onChange= {(e) => setInfo({...info, address: e.target.value})}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                        placeholder="Your address"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn
                    </label>
                    <input
                        type="url"
                        name="linkedin"
                        value={info.linkedin}
                        onChange= {(e) => setInfo({...info, linkedin: e.target.value})}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                        placeholder="https://linkedin.com/in/username"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        GitHub
                    </label>
                    <input
                        type="url"
                        name="github"
                        value={info.github}
                        onChange= {(e) => setInfo({...info, github: e.target.value})}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                        placeholder="https://github.com/username"
                    />
                </div>
            </div>

            <div className="mt-6 text-right">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                    onClick={handleChange}>
                Next
            </button>
        </div>
    </div >
  );
}

export default PersonalInfo;
