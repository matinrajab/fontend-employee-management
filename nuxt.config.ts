// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-auth-sanctum"],

  app: {
    head: {
      title: "Employee Management System",
    },
  },

  sanctum: {
    baseUrl: "http://localhost:8000",
    mode: "cookie",
    redirect: {
      keepRequestedRoute: false,
      onLogin: "/",
      onLogout: "/",
      onAuthOnly: "/",
      onGuestOnly: "/",
    },
  },
});
