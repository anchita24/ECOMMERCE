/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '320px',  // Extra small devices (mobile)
      'mxs': '425px',
      'sm': '640px',  // Small devices (large phones)
      'md': '768px',  // Medium devices (tablets)
      'lg': '1024px', // Large devices (desktops)
      'xl': '1280px', // Extra large devices (large desktops)
      'mxl': '1300px',
      '2xl': '1536px'
    },
    extend: {
      screens: {
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        openSans: ["Open Sans", "sans-serif"],
        poppins: ['Poppins', 'sans-serif'],
        assistant: ['Assistant', 'sans-serif']
      },
      colors: {
        primary: {
          100: "#F0F0F0",
          200: "#E0E0E0",
          300: "#4B5563",
          400: "",
          500: "",
          600: "",
          700: "",
          800: "",
          900: "",
        },
        textPrimary: {
          100: "#272727",
          200: "#848484",
          300: "#484848",
          400: "#8A8A8A",
          500: "#282c3f",
          600: "#7e818c",
          700: "",
          800: "",
          900: "",
        }
      },
      textStrokeWidth: {
        '1': '0.5px',
        '2': '2px',
      },
      textStrokeColor: {
        black: '#484848',
        white: '#fff',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(20%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.5s ease-in-out forwards',
        slideInRight: 'slideInRight 0.5s ease-out forwards',
        fadeIn: 'fadeIn 0.3s ease-in-out forwards',
        zoomIn: 'zoomIn 0.5s ease-out forwards',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        slideInBottom: 'slideInBottom 0.5s ease-in forwards'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '0.5px black',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke': '1px white',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke': '2px black',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}


