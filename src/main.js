import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Store from './store'
import './assets/base.css'
import './vue-loading-overlay/src/css/index.css'

const app = createApp(App)

app.use(router)
app.use(Store)

app.mount('#app')
