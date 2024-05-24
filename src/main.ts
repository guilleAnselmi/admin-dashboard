import './assets/css/satoshi.css'
import './assets/css/style.css'
import 'jsvectormap/dist/css/jsvectormap.min.css'
import 'flatpickr/dist/flatpickr.min.css'
import './assets/css/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue'

import VueApexCharts from 'vue3-apexcharts'
import PrimeVue from 'primevue/config';
import Lara from "./presets/lara";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(
    createAuth0({
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        clientId: import.meta.env.VITE_AUTH0_CLIENTID,
        authorizationParams: {
            redirect_uri: import.meta.env.VITE_AUTH0_REDIRECT_URI
        }
    })
);
app.use(VueApexCharts)
app.use(PrimeVue, { unstyled: true, pt: Lara });


app.use(createPinia())
app.use(router)

app.mount('#app')
