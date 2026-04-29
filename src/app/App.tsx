import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { ScrollToTop } from "./components/ScrollToTop";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quienes-somos" element={<AboutPage />} />
        <Route path="/servicios/:slug" element={<ServicesPage />} />
      </Routes>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
