import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "folioman",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "primevue/resources/primevue.min.css",
    // "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/themes/saga-green/theme.css",
    "primeicons/primeicons.css",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: "~/plugins/primevue.js", mode: "client" }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    "@nuxtjs/composition-api",
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/stylelint-module",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],

  router: {
    middleware: ["auth"],
  },

  auth: {
    strategies: {
      local: {
        scheme: "refresh",
        endpoints: {
          login: { url: "/api/auth/login", method: "post" },
          logout: false,
          user: { url: "/api/portfolios/", method: "get" },
        },
        token: {
          property: "access",
          required: true,
        },
        refreshToken: {
          property: "refresh",
          data: "refresh",
        },
      },
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
  },

  proxy: {
    "/api/": { target: "http://127.0.0.1:8000" },
  },

  tailwindcss: {
    config: {
      separator: "_",
      jit: true,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};

export default config;
