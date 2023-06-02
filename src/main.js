import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/main.css'
// import { createApolloProvider } from '@vue/apollo-option'

// http connection to API
const httpLink = createHttpLink({
    uri: 'http://localhost:5432/graphql'
})

// cache implementation
const cache = new InMemoryCache()

// create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})



const pinia = createPinia()
// const app = createApp(App)

const app = createApp({
    setup(){
        provide(DefaultAppolloClient, apolloClient)
    },
        render:() => h(App),
    })
app.use(pinia)
app.use(router)
app.mount('#app')
