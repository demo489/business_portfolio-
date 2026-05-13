/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream:  "#FAF7F2",
        ink:    "#111111",
        muted:  "#555555",
        border: "#E5E7EB",
        light:  "#F3F4F6",
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft:  "0 1px 8px rgba(0,0,0,0.04)",
        card:  "0 4px 20px rgba(0,0,0,0.08)",
        hover: "0 8px 28px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
