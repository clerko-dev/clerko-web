import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

// Strony (minimum Home, reszta jeśli masz – mogą zostać puste, ale niech istnieją):
import Home from "./pages/Home.jsx";
import Tools from "./pages/Tools.jsx";
import HowTo from "./pages/HowTo.jsx";
import Store from "./pages/Store.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/how-to" element={<HowTo />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
