// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import CvProvider from "./context/ContextProvider";
import App from "./App";
import PersonalInfo from "./components/PersonalInfo";
 import Education from "./components/Education";
 import Experience from "./components/Experience";
 import Skills from "./components/Skills";
 import Projects from "./components/Projects";
 import FinalPreview from "./components/Preview";
import "./index.css"; // Tailwind CSS entry

// Define your routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<PersonalInfo />} />
      <Route path="/education" element={<Education />} />
       <Route path="/experience" element={<Experience />} />
       <Route path="/skills" element={<Skills />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/preview" element={<FinalPreview />} /> 
    </Route>
  )
);

// Render to root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CvProvider>
      <RouterProvider router={router} />
    </CvProvider>
  </React.StrictMode>
);
