import { languages } from './constants'
import { fallbackLocale } from './default'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '#WittyCreatures by Witnet - Play with us at EthCC[4]',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#000000' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'title',
        name: 'title',
        content: '#WittyCreatures by Witnet - Play with us at EthCC[4]',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Collect the 12 different crypto cards and earn up to 5 ETH worth of prices!',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: '#WittyCreatures by Witnet - Play with us at EthCC[4]',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Collect the 12 different crypto cards and earn up to 5 ETH worth of prices!',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/social-image.png',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: '#WittyCreatures by Witnet',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '#WittyCreatures by Witnet - Play with us at EthCC[4]',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Collect the 12 different crypto cards and earn up to 5 ETH worth of prices!',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/social-image.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: '#WittyCreatures by Witnet',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#f8971e' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'msapplication-TileColor', content: '#f8971e' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap',
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/colors.scss',
    '~/assets/styles/main.scss',
    '~/assets/fonts/style.css',
  ],
  // You will have to add this new object if it doesn't exist already
  styleResources: {
    scss: ['~/assets/styles/colors.scss', '~/assets/styles/main.scss'],
  },
  // ...
  modules: ['@nuxtjs/style-resources', '@nuxt/content', 'nuxt-i18n'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/fontawesome',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  fontawesome: {
    icons: {
      solid: ['faMoon', 'faSun'],
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  i18n: {
    // add SEO attributes in layout head for better performance
    seo: false,
    locales: languages,
    vueI18n: {
      fallbackLocale,
      messages: {
        en: require('./locales/en.json'),
        es: require('./locales/es.json'),
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
      alwaysRedirect: true,
    },
    defaultLocale: 'en',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
