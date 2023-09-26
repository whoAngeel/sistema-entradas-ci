import { createApp } from 'vue'
import "./assets/css/style.css"
import App from './App.vue'
import { router } from './router/index'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

createApp(App).use(VCalendar, {}).use(router).mount('#app')
