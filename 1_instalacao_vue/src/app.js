const myNameApp = {
    data(){
        return{
            name: "Arthur",
            age: "19"
        }
    }
}

const outroNameApp = {
    data(){
        return{
            name: "Pedro",
            age: "20"
        }
    }
}

Vue.createApp(myNameApp).mount("#app")

Vue.createApp(outroNameApp).mount("#outroApp")