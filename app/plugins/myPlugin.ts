export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            sayHelloToUser: (msg: string) => {
                return `Hello ${msg}`
            }
        }
    }
});