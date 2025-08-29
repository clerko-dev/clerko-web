// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./lib/auth.jsx";  // <— DODAJ TO

// src/main.jsx (DODAJ tuż pod importami)
function RevealInit() {
  React.useEffect(() => {
    document.documentElement.classList.add("reveal-init");
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

// ...w renderze, wewnątrz <BrowserRouter> i <AuthProvider>:
<RevealInit />


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>     {/* <— OWIŃ APLIKACJĘ */}
          <App />
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
