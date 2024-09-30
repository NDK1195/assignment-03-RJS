/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button: "#383838",
        background: "#f4f5f9",
        active: "#e2b23a",
      },
    },
  },
  plugins: [],
};
