import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Support from "./pages/Support";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Legal from "./pages/Legal";
import Login from "./components/Login"; // ✅ Add this line

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="pt-16 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/support" element={<Support />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/login" element={<Login />} /> {/* ✅ Add this route */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
