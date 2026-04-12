/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arena: {
          primary: "#e6c364",
          'on-primary': "#3d2e00",
          'primary-container': "#c9a84c",
          'on-primary-container': "#503d00",
          surface: "#131313",
          'on-surface': "#e5e2e1",
          background: "#131313",
          'on-background': "#e5e2e1",
          gold: "#c9a84c",
          nav: "#080808",
        }
      },
      fontFamily: {
        'arena-headline': ['Oswald Local', 'sans-serif'],
        'arena-body': ['Inter', 'sans-serif'],
        'arena-label': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
