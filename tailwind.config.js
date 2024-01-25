/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25 rem"
      },
      colors: {
        primary: "#00D991"
      }
    },
  },
  plugins: [],
}

