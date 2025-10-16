// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-auth-sanctum", "@pinia/nuxt"],

  app: {
    head: {
      title: "Employee Management System",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },

  sanctum: {
    baseUrl: "http://localhost:8000",
    mode: "cookie",
    redirect: {
      keepRequestedRoute: false,
      onLogin: "/employees",
      onLogout: "/",
      onAuthOnly: "/",
      onGuestOnly: "/employees",
    },
    endpoints: {
      csrf: "/sanctum/csrf-cookie",
      login: "/api/login",
      logout: "/api/logout",
      user: "/api/user",
    },
  },
});