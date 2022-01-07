import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createI18n } from "vue-i18n";

const messages = {
    en: {
        message: {
        value: 'example'
        }
    },
    es: {
        message: {
        value: 'ejemplo'
        }
    }
}

const i18n = createI18n({
    legacy: false,
    locale: "en",
    messages
});


const app = createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app');