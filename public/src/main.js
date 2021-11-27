/*import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:8080/api';*/









/*
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const options = {
    router: router,
    store: store,
    render: function(createElement) {
      return createElement(App);
    }
  };
  debugger
  
  const app = new Vue(options);
  app.$mount("#myApp");
*/

  /*import Vue from "vue";
  import App from "./App.vue";
  import router from "./router";
  import store from "./store";

  const app Vue.createApp({
    template: `
    <h1>HOLA MUNDO</h1>
    `
  })
  app.mount('#myApp')*/






import { createApp } from 'vue'
import App from './App.vue'

import router from './router/router'

createApp(App)
    .use( router )
    .mount('#app')
