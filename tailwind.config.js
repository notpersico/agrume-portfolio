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
        bg: {
          light: '#faf9f7',
          dark: '#131516'
        },
        surface: {
          light: 'rgba(255, 255, 255, 0.6)',
          dark: 'rgba(32, 33, 36, 0.6)'
        },
        glare: {
          light: 'rgba(255, 255, 255, 0.35)',
          dark: 'rgba(255, 255, 255, 0.08)'
        },
        content: {
          light: '#1E2D2F',
          dark: '#F9F7F3'
        },
        'gray-custom': '#888888',
        'light-gray': {
          light: '#E8E8E8',
          dark: '#444444'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        '300': 'clamp(0.85rem, calc(0.85rem + 0.15vw), 0.95rem)',
        '400': 'clamp(0.95rem, calc(0.9rem + 0.3vw), 1.05rem)',
        '500': 'clamp(1.15rem, calc(1.1rem + 0.5vw), 1.35rem)',
        '600': 'clamp(1.5rem, calc(1.3rem + 1vw), 2.3rem)',
        '700': 'clamp(2.2rem, calc(1.8rem + 2vw), 3.8rem)',
      },
      spacing: {
        'xs': 'clamp(0.5rem, 0.5vw, 0.75rem)',
        'sm': 'clamp(0.75rem, 1vw, 1rem)',
        'md': 'clamp(1.5rem, 2vw, 2rem)',
        'lg': 'clamp(2rem, 4vw, 4rem)',
        'xl': 'clamp(3rem, 6vw, 6rem)',
      },
      boxShadow: {
        'glass': '0 1px 4px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)',
        'btn': '0 4px 12px rgba(0,0,0,0.15)',
        'btn-hover': '0 10px 32px rgba(0,0,0,0.18)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'mid': '300ms',
        'slow': '500ms',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fadeInUpDelayed': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
        'heartBeat': 'heartBeat 1.5s infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        heartBeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '10%, 30%': { transform: 'scale(1.3)' },
          '20%, 40%': { transform: 'scale(1.1)' },
        }
      },
      backgroundImage: {
        'hero': "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2329&q=80')",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};