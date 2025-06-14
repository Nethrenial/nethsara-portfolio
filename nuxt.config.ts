import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/scripts', '@nuxtjs/seo', '@vueuse/nuxt', '@nuxtjs/partytown'],
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
      script: [
        {
          // The GTM loader script, as provided by Google
          innerHTML: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MCXSVMTB');
          `,
          type: 'text/partytown',
        },
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

  icon: {
    mode: 'svg',
  },

  // Image configuration
  image: {
    quality: 80,
    format: ['webp'],
  },

  partytown: {
    forward: ['dataLayer.push', 'gtag'], // Forward gtag calls to the main thread
    // Optional: custom config, e.g., debug: true
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
