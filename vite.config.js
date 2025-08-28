import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// rozbijamy vendor na mniejsze części + zwiększamy limit ostrzeżenia
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-router")) return "vendor-router";
            if (id.includes("react-dom"))     return "vendor-react-dom";
            return "vendor";
          }
        },
      },
    },
  },
});
