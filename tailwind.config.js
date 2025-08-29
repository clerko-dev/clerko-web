// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "Inter", "system-ui", "sans-serif"], // do nagłówków
        sans: ["Inter", "system-ui", "sans-serif"],            // do tekstów
      },
    },
  },
  plugins: [],
};
