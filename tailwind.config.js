/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(18, 92%, 55%)',
          light: 'hsl(18, 92%, 68%)', 
          dark: 'hsl(18, 92%, 40%)'
        },
      },
      fontSize: {
        'xs': 'clamp(0.85rem, calc(0.85rem + 0.15vw), 0.95rem)',
        'sm': 'clamp(0.95rem, calc(0.9rem + 0.3vw), 1.05rem)',
        'base': 'clamp(1.05rem, calc(1rem + 0.25vw), 1.15rem)',
        'lg': 'clamp(1.15rem, calc(1.1rem + 0.5vw), 1.35rem)',
        'xl': 'clamp(1.5rem, calc(1.3rem + 1vw), 2.3rem)',
        '2xl': 'clamp(2.2rem, calc(1.8rem + 2vw), 3.8rem)',
      },
      borderRadius: {
        'full': '9999px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      spacing: {
        'xs': 'clamp(0.5rem, 0.5vw, 0.75rem)',
        'sm': 'clamp(0.75rem, 1vw, 1rem)',
        'md': 'clamp(1.5rem, 2vw, 2rem)',
        'lg': 'clamp(2rem, 4vw, 4rem)',
        'xl': 'clamp(3rem, 6vw, 6rem)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};