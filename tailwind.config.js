/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        graphite: "#071014",
        ink: "#101820",
        steel: "#6E7F86",
        civic: "#13B5A6",
        signal: "#D6AA5B",
        porcelain: "#F6F8F7",
      },
      boxShadow: {
        executive: "0 24px 80px rgba(2, 8, 10, 0.18)",
        glow: "0 0 40px rgba(19, 181, 166, 0.22)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(16,24,32,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,.08) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(rgba(246,248,247,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(246,248,247,.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
