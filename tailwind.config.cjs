// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f14",
        fg: "#e6edf3",
        muted: "#8a939e",
        brand: "#6aa6ff",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(1000px 400px at 50% -100px, rgba(106,166,255,.25), transparent 60%)",
      },
      borderRadius: {
        xl2: "1rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.35)",
      },
    },
  },
  plugins: [],
}
