// import { createApp } from 'vue'
import { createApp, provide, h } from "vue"
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core"
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/main.css'

// @ts-ignore

const httpLink = createHttpLink({
    uri: 'http://192.168.1.230:80/simdc_project/graphql',
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: httpLink, cache
})

const pinia = createPinia()

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
})

app.use(pinia)
app.use(router)
app.mount('#app')