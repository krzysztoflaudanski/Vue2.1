import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import router from './router'
import App from './App.vue'
import 'animate.css/animate.min.css'
import Ripple from 'primevue/ripple';
import store from './store'


const app = createApp(App)
app.use(router) // Rejestruj router pierwszy
app.use(PrimeVue) // Następnie PrimeVue
app.directive('ripple', Ripple)
app.use(store)
app.mount('#app')
