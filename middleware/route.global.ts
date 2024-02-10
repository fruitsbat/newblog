export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path != from.path && process.client) {
        window.scroll(0, 0)
    }
})