export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: '#0ea5e9',  // Added: Example blue for buttons/links
        secondary: '#64748b',  // Added: Gray for text
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],  // Added: For better markdown/prose in notes
};