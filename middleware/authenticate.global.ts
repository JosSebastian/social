export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  if (user.value) {
    if (
      to.path === "/user/authenticate" &&
      (to.query.action === "signOn" || to.query.action === "signIn")
    ) {
      return navigateTo("/user");
    }
  } else if (!user.value) {
    if (to.path === "/user") {
      return navigateTo("/user/authenticate?action=signIn");
    }
  }
});
