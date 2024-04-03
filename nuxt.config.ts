// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '~/assets/fonts/fonts.css', 
    '~/assets/styles.css'

 ],
 plugins: [
  '~/plugins/vue-scrollto.js'
 ]
})
