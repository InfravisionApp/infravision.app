export default {
  mode: "spa",
  server: {
    port: 8000,
    host: "0.0.0.0" // default: localhost
  },
  head: {
    titleTemplate: "Infravision",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Infravision" },
      {
        property: "og:description",
        content: "Guild Monitoring & Engagement Platform for Discord"
      },
      {
        property: "og:image",
        content: "https://infravision.app/images/infravision-promo.jpg"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://pro.fontawesome.com/releases/v5.12.0/css/all.css",
        integrity:
          "sha384-ekOryaXPbeCpWQNxMwSWVvQ0+1VrStoPJq54shlYhR8HzQgig1v5fas6YgOqLoKz",
        crossorigin: "anonymous"
      }
    ]
  },
  loading: { color: "#000" },
  css: ["@/assets/css/tailwind.css"],
  plugins: [],
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["nuxt-purgecss", "nuxt-webfontloader"],
  purgeCSS: {},
  build: {
    extractCSS: true
  },
  webfontloader: {
    google: {
      families: ["Open Sans Condensed:400,400i,700", "Open Sans:400,400i,700"]
    }
  }
};
