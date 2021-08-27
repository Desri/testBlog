import webpack from 'webpack';
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'yesdok',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Blog terupdate dan terhype untuk generasi Z' },
      { hid: 'og:description', name: 'og:description', content: 'Blog terupdate dan terhype untuk generasi Z' },
      { hid: 'keywords', name: 'keywords', content: 'Terkini, Favorit, Hipe, Lifestyle, Teknologi, Kesehatan' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet", 
        type: 'text/css',
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
        crossorigin: true,
        defer: true
      },
      {
        rel: "stylesheet", 
        type: 'text/css',
        href: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/css/bootstrap.min.css",
        crossorigin: true,
        defer: true
      },
    ],
    script: [
      { src:'https://code.jquery.com/jquery-3.2.1.slim.min.js', defer: true},
      { src:'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', ssr: false, defer: true},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/global',
    { src: '@/plugins/modal.js', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    proxy: true,
    proxyHeaders: false,
    credentials: false,
  },

  proxy: {
    '/api/': { target: 'http://testuidok.herokuapp.com/api', pathRewrite: {'^/api2/' : ''}, changeOrigin: true },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["jquery"],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
    ],
  }
}
