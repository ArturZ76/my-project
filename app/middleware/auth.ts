export default defineNuxtRouteMiddleware((to, from) => {
    // const isLoggedIn = false;
    // //to is destination
    // if (isLoggedIn) {
    //     return navigateTo(to.fullPath);
    // } else {
    //     return navigateTo("/")
    // }
    console.log("Hello from middleware auth");
})