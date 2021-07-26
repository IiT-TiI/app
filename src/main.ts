import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import {createWebHashHistory,createRouter} from 'vue-router'
import test from './components/test.vue'
import test2 from './components/test2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes:[
        {path:'/',component:test},
        {path:'/xxx',component:test2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
