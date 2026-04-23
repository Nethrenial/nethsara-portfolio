import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxtjs/seo', '@vueuse/nuxt', 'nuxt-gtag'],
  ssr: true,
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'manifest', href: '/site.webmanifest' },
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
    name: 'Nethsara Elvitigala | Senior Software Engineer (Full-Stack)',
    description: 'I\'m an enthusiastic and motivated Software Engineer with a passion for developing innovative solutions. Experienced in various tech stacks and fast moving environments.',

    defaultLocale: 'en',
    indexable: true,
    trailingSlash: false,
  },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    emailTo: process.env.NUXT_EMAIL_TO,
    public: {
      siteUrl: 'https://nethsara.me',
    },
  },

  compatibilityDate: '2025-07-15',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/terms',
        '/privacy',
        '/projects',
      ],
    },
  },

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

  fonts: {
    defaults: {
      weights: ['400 700'],
      styles: ['normal', 'italic'],
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

  ogImage: {
    zeroRuntime: true,
  },
  schemaOrg: {
    identity: {
      '@type': 'Person',
      'name': 'Nethsara Sandeepa Elvitigala',
      'image': '/icon-512x512.png',
      'description': 'Senior Software Engineer | Distributed Systems & Cloud-Native Architecture | TypeScript • Java • Python',
      'url': 'nethsara.me',
      'jobTitle': 'Senior Software Engineer',
      'worksFor': {
        '@type': 'Organization',
        'name': 'HeyMilo AI',
      },
      'sameAs': [
        'https://linkedin.com/in/nethsara-elvitigala',
        'https://github.com/Nethrenial',
        'https://www.facebook.com/nethsara.sandeepa',
      ],
    },
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
      ogTitle: 'Nethsara Elvitigala | Senior Software Engineer (Full-Stack)',
      ogDescription: 'Senior Software Engineer specializing in distributed systems & cloud-native architecture. Builds scalable backend and modern frontend apps with TypeScript, Java, Python.',
      ogType: 'website',
      ogLocale: 'en_US',
      ogSiteName: 'Nethsara Elvitigala',

      // Twitter
      twitterCard: 'summary_large_image',
      twitterCreator: '@NSElvitigala',
      twitterTitle: 'Nethsara Elvitigala | Senior Software Engineer (Full-Stack)',
      twitterDescription: 'I\'m an enthusiastic and motivated Software Engineer with a passion for developing innovative solutions. Experienced in various tech stacks and fast moving environments.',
      twitterImageAlt: 'Nethsara Elvitigala | Senior Software Engineer (Full-Stack)',
      twitterSite: '@NSElvitigala',

      // Mobile Web App
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'default',
      appleMobileWebAppTitle: 'Nethsara Elvitigala',
      mobileWebAppCapable: 'yes',

      title: 'Nethsara Elvitigala - Software Engineer',
    },
  },

  sitemap: {
    zeroRuntime: true,
  },

})
