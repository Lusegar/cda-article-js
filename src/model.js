export const Date_now = {
    builder(){
        console.log("Hello")
    },
    dates: new Date().getFullYear(),
    el: document.querySelector("time"),
}