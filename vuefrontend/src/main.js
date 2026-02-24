import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router).mount("#app")  // 这里应该是 "#app"，需要在 public/index.html 中确保 div id="app"
