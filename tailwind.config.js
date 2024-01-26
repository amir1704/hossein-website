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
        200: 'f6f6f6',
        300: '#efefef'
      },
      thwhite: '#fff',
      thblack: {
        100: '#293340',
        200: '#000'
      },
      thred: '#db0021',
    },
    extend: {
      fontFamily: {
        'heebo': ['Heebo','Arial','sans-serif'],
      }
    },
  },
  plugins: [],
}

