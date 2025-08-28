// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-8 text-center">
      <p className="text-sm text-white/60">
        &copy; {new Date().getFullYear()} Clerko. All rights reserved.
      </p>
    </footer>
  );
}
