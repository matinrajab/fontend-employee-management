export default defineNuxtRouteMiddleware((to, from) => {
  interface User {
    name: string;
    email: string;
  }

  const user = useSanctumUser<User>();

  if (user.value && to.path === "/") {
    return navigateTo("/employees");
  }
});
