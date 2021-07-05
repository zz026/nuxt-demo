const env = require('./env')
const ENV_API = process.env.MODE ? env[process.env.MODE].ENV_API : env['dev'].ENV_API

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    mode: 'spa',
    title: 'HOP',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'HOP', content: 'HOPHOPHOPHOPHOPHOPHOPHOP' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'element-ui/lib/theme-chalk/index.css'
  ],

  axios: {
    baseURL: ENV_API,
    progress: true
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/element-ui', ssr: true },
    { src: '@/plugins/vuex-persistedstate', ssr: false },
    { src: '@/plugins/axios' }
  ],
  // 属性用于控制页面渲染前是否滚动至页面顶部
  // scrollToTop: true,

  // 进度条
  loading: {
    color: '#409EFF'
  },

  // badgeMessages
  cli: {
    badgeMessages: ['加油打工人!']
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // https://github.com/nuxt-community/style-resources-module
  buildModules: [
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: '@/style/index.scss'
  },

  router: {
    middleware: ['auth']
  },

  server: {
    port: 8000, // default: 3000
    host: 'localhost', // default: localhost,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // 外联css
    extractCSS: { allChunks: true },
    // transpile: [/^element-ui/],
    // 按需引入
    babel: {
      plugins: [
        ['component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    }
  }
}
