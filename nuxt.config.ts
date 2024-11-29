// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    'nuxt-mdi',
    'nuxt-rating',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Nunito: true,
          download: true,
          inject: true
        }
      }
    ],
    '@nuxt/image'
  ],

  plugins: ['~/plugins/api.ts'],

  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0'
    }
  },

  css: ['~/assets/css/styles.scss'],

  runtimeConfig: {
    public: {
      dev: process.env.NODE_ENV !== 'production',
      strapiUrl: process.env.NODE_ENV !== 'production' ? `http://localhost:1337` : `https://api.mybetbible.com`,
      appNodeEnv: process.env.NODE_ENV
    }
  },

  compatibilityDate: '2024-04-03',

  nitro: {
    compressPublicAssets: true
  },

  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    }
  },

  mdi: {
    componentName: 'mbb-icon',
    defaultSize: '2em'
  }
})
