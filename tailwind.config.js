/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marcus Vance "Arena" Dark Palette
        arena: {
          primary: "#e6c364",
          'on-primary': "#3d2e00",
          'primary-container': "#c9a84c",
          'on-primary-container': "#503d00",
          'primary-fixed': "#ffe08f",
          'primary-fixed-dim': "#e6c364",
          
          secondary: "#c8c6c5",
          'on-secondary': "#303030",
          'secondary-container': "#474747",
          'on-secondary-container': "#b6b5b4",
          
          tertiary: "#b9c4ff",
          'on-tertiary': "#1e2b66",
          'tertiary-container': "#9ba8eb",
          'on-tertiary-container': "#2e3b77",
          
          surface: "#131313",
          'on-surface': "#e5e2e1",
          'surface-variant': "#353534",
          'on-surface-variant': "#d0c5b2",
          'surface-dim': "#131313",
          'surface-bright': "#3a3939",
          'surface-container-low': "#1c1b1b",
          'surface-container': "#201f1f",
          'surface-container-high': "#2a2a2a",
          'surface-container-highest': "#353534",
          'surface-container-lowest': "#0e0e0e",
          
          background: "#131313",
          'on-background': "#e5e2e1",
          outline: "#99907e",
          'outline-variant': "#4d4637",
          error: "#ffb4ab",
          'on-error': "#690005",
          
          gold: "#c9a84c",
          nav: "#080808",
          f5: "#f5f5f5",
          'gray-dark': "#1a1a1a",
          'bg-dark': "#050505",
          'text-secondary': "#A3A3A3",
        }
      },
      fontFamily: {
        'arena-headline': ['Oswald Local', 'sans-serif'],
        'arena-body': ['Inter', 'system-ui', 'sans-serif'],
        'arena-label': ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(-3deg)' },
          '50%': { transform: 'translateY(-12px) rotate(-3deg)' },
        }
      },
      animation: {
        'bounce-slow': 'bounce-slow 3.2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
