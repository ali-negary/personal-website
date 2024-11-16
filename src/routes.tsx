import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResumePage from "./pages/ResumePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

const AppRoutes: React.FC = () => (
  <Router
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}
  >
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
