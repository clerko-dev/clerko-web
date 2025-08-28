import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  base: "/",                 // absolutne ścieżki – OK na Vercel
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") }
  },
  build: {
    outDir: "dist",
    sourcemap: true,         // ułatwia debug w produkcji
    chunkSizeWarningLimit: 1200
  }
});
