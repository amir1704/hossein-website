// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/style.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image",'@pinia/nuxt','@vueuse/nuxt',],
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
      wpUsername: process.env.WP_USERNAME,
      wpPassword: process.env.WP_PASSWORD,
    },
  },
})