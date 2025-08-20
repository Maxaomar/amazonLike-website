/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        selections: "rgb(117, 117, 113)",
        bottomNav: "rgba(0, 0, 0, 0.747)"
      }
    },
  },
  plugins: [],
}

