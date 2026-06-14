import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Education from "./pages/Education";
import Farmers from "./pages/Farmers";
import Infrastructure from "./pages/Infrastructure";
import DigitalIdentity from "./pages/DigitalIdentity";
import Vision from "./pages/Vision";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/education" element={<Education />} />
      <Route path="/farmers" element={<Farmers />} />
      <Route path="/infrastructure" element={<Infrastructure />} />
      <Route path="/digital-identity" element={<DigitalIdentity />} />
      <Route path="/vision" element={<Vision />} />


    </Routes>
  </BrowserRouter>
);