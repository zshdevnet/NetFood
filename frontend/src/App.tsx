import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import OpenAnAccount from "./pages/OpenAnAccount/OpenAnAccount";
import CareerPage from "./pages/CareerPage/CareerPage";
import DetailCareerPage from "./pages/CareerPage/DetailCareerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/careers" element={<CareerPage />} />
      <Route path="/careers/:jobSlug" element={<DetailCareerPage />} />
      <Route path="/account" element={<OpenAnAccount />} />
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
