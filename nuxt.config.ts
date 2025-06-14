import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/scripts', '@nuxtjs/seo', '@vueuse/nuxt', 'nuxt-gtag'],
  ssr: true,
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicons/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
        { rel: 'manifest', href: '/favicons/site.webmanifest' },
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'Nethsara Elvitigala - Software Engineer Portfolio' },
      ],

    },
  },

  css: ['~/assets/css/main.css'],

  // SEO configuration
  site: {
    url: 'https://nethsara.me',
    name: 'Nethsara Elvitigala - Software Engineer & Tech Enthusiast',
    description: 'I\'m an enthusiastic and motivated Software Engineer with a passion for developing innovative solutions. Experienced in various tech stacks and fast moving environments.',

    defaultLocale: 'en',
    indexable: true,
  },

  runtimeConfig: {
    emailHost: 'smtp.zoho.com',
    emailPort: 465,
    emailUser: '',
    emailPassword: '',
    emailTo: 'nethsarasandeepaelvitigala@gmail.com',
    public: {
      siteUrl: 'https://nethsara.me',
    },
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-05-15',

  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'vite-plugin-ignore-sourcemap-warnings',
        apply: 'build',
        configResolved(config) {
          const originalOnWarn = config.build.rollupOptions.onwarn
          config.build.rollupOptions.onwarn = (warning, warn) => {
            if (
              warning.code === 'SOURCEMAP_BROKEN'
              && warning.plugin === '@tailwindcss/vite:generate:build'
            ) {
              return
            }
            if (originalOnWarn) {
              originalOnWarn(warning, warn)
            }
            else {
              warn(warning)
            }
          }
        },
      },
    ],
  },

  typescript: {
    typeCheck: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  gtag: {
    id: 'G-YWPBBDQD20',
  },

  icon: {
    mode: 'svg',
  },

  // Image configuration
  image: {
    quality: 80,
    format: ['webp'],
  },

  seo: {
    mergeWithSiteConfig: true,
    meta: {
      charset: 'utf-8',
      description: 'I\'m an enthusiastic and motivated Software Engineer with a passion for developing innovative solutions. Experienced in various tech stacks and fast moving environments.',
      viewport: 'width=device-width, initial-scale=1.0',
      author: 'Nethsara Elvitigala',
      colorScheme: 'ldark',

      // Open Graph
      ogUrl: 'https://nethsara.me',
      ogTitle: 'Nethsara Elvitigala - Software Engineer',
      ogDescription: 'Full-Stack Software Engineer specializing in modern web technologies',
      ogImage: '/images/social/og-image.png',
      ogType: 'website',
      ogLocale: 'en_US',
      ogSiteName: 'Nethsara Elvitigala',

      // Twitter
      twitterCard: 'summary_large_image',
      twitterCreator: '@NSElvitigala',
      twitterTitle: 'Nethsara Elvitigala - Software Engineer & Tech Enthusiast',
      twitterDescription: 'I\'m an enthusiastic and motivated Software Engineer with a passion for developing innovative solutions. Experienced in various tech stacks and fast moving environments.',
      twitterImage: 'https://nethsara.me/images/social/og-image.png',
      twitterImageAlt: 'Nethsara Elvitigala - Software Engineer & Tech Enthusiast',
      twitterSite: '@NSElvitigala',

      // Mobile Web App
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'default',
      appleMobileWebAppTitle: 'Nethsara Elvitigala',
      mobileWebAppCapable: 'yes',

      title: 'Nethsara Elvitigala - Software Engineer',
    },
  },
})
