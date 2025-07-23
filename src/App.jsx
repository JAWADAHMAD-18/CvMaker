// src/App.jsx
import { Outlet } from "react-router-dom";
import ProgressDots from "./components/ProgressDots";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">Cv Maker</h1>
      <ProgressDots />
      <div className="max-w-3xl mx-auto">
        <Outlet />
      </div>
      <Footer />

    </div>
  );
}

export default App;
