import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import VueI18n from 'vue-i18n';

const i18n = new VueI18n({
    locale: 'en',
    messages
});

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app');
