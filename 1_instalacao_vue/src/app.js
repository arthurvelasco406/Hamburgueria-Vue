const myNameApp = {
    data(){
        return{
            name: "Arthur",
            age: "19"
        }
    }
}

Vue.createApp(myNameApp).mount("#app")