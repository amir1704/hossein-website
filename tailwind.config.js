/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      thgray: {
        100: '#fbfbfb',
        200: '#f6f6f6',
        250: '#f2f2f2',
        300: '#efefef',
        350: '#707070',
        400: '#414141',
      },
      thwhite: '#fff',
      thblack: {
        100: '#293340',
        150: '#222a41',
        200: '#000'
      },
      thred: '#db0021',
      thred2:{
        100: '#df2a3c',
        200: '#801c1e'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        'heebo': ['Heebo','Arial','sans-serif'],
      },
      animation: {
        'loop-scroll': 'loop-scroll 60s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}

