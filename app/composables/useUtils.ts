export const useUtils = () => {
    const sayHello = (item: string) => {
        console.log(item)
    }
    return {
        sayHello,
    }
}