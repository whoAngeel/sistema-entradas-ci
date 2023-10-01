import { createApp } from 'vue'
import "./assets/css/style.css"
import App from './App.vue'
import { router } from './router/index'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import { createPinia } from 'pinia'

const pinia = createPinia()

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMinus, faPlus)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(VCalendar, {}).use(pinia).use(router).mount('#app')
