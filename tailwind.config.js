/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Azul
        secondary: '#8b5cf6', // Roxo
        'cream': '#F0F0F0',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #3b82f6, #8b5cf6)',
      }
    },
  },
  plugins: [],
}