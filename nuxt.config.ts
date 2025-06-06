import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@vueuse/nuxt',
  ],
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  // SEO configuration
  site: {
    url: 'https://yourdomain.com',
    name: 'Your Name - Software Engineer',
    description: 'Full-Stack Software Engineer specializing in modern web technologies',
    defaultLocale: 'en',
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-05-15',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  // Image configuration
  image: {
    quality: 80,
    format: ['webp', 'png', 'jpg'],
  },
})
