// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366F1', // Indigo
          DEFAULT: '#4F46E5',
          dark: '#4338CA',
        },
        secondary: {
          light: '#F472B6', // Pink
          DEFAULT: '#EC4899',
          dark: '#DB2777',
        },
        dark: {
          light: '#1E293B', // Slate
          DEFAULT: '#0F172A',
          darker: '#020617',
        },
        light: {
          DEFAULT: '#F8FAFC',
          dark: '#E2E8F0',
        }
      },
      animation: {
        'rotate': 'rotate 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out 1s infinite',
        'float-slow': 'float 10s ease-in-out 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'blob': 'blob 25s ease-in-out infinite',
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ripple': 'ripple 0.6s linear forwards',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(100px, 100px) scale(1)' },
          '33%': { transform: 'translate(100px, 100px) scale(1.1)' },
          '66%': { transform: 'translate(100px, 100px) scale(0.9)' },
          '100%': { transform: 'translate(100px, 100px) scale(1)' },
        },
        ping: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%, 100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        }
      },
    },
  },
  plugins: [],
}