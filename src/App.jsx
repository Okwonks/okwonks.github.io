import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ModernHome from "./components/ModernHome";

function App() {
  const [useModernDesign, setUseModernDesign] = useState(true);

  return (
    <Router>
      <div className="design-toggle">
        <button
          onClick={() => setUseModernDesign(!useModernDesign)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            padding: "10px 15px",
            backgroundColor: "#4a6cf7",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          Switch to {useModernDesign ? "Classic" : "Modern"} Design
        </button>
      </div>
      <Routes>
        <Route path="/" element={useModernDesign ? <ModernHome /> : <Home />} />
      </Routes>
    </Router>
  );
}

export default App;
