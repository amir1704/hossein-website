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
      thgray: {
        100: '#fbfbfb',
        200: '#f6f6f6',
        250: '#f2f2f2',
        300: '#efefef',
        400: '#414141',
      },
      thwhite: '#fff',
      thblack: {
        100: '#293340',
        200: '#000'
      },
      thred: '#db0021',
      thred2:{
        100: '#df2a3c',
        200: '#801c1e'
      }
    },
    extend: {
      fontFamily: {
        'heebo': ['Heebo','Arial','sans-serif'],
      },
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
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

