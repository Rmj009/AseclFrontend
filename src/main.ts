import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from "@vue/apollo-composable"

import 'the-new-css-reset/css/reset.css'

import App from '@/App.vue'
import { ApolloClient  } from 'apollo-client'
import router from '@/router/index'

const app = createApp({
    setup() {
        provide(DefaultApolloClient, ApolloClient)
    },
    render: () => h(App),
})


app.use(router)

app.mount('#app')
