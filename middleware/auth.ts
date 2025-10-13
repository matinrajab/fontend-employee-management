export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useSanctumAuth();

  if (isAuthenticated.value && to.path === "/") {
    return navigateTo("/employees");
  }
});
