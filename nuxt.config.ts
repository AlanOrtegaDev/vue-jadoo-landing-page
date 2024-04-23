export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Volkhov:wght@400;700&display=swap',
        },
      ],
    },
  },
  image: {
    provider: 'netlify',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/image'],
});
