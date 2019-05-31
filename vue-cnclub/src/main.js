import Vue from "vue"
import Vuex from 'vuex'
import App from "./App.vue"
import ElementUI from 'element-ui';
import './assets/gloabse.css'
import router from './router'
import store from './store'
Vue.use(ElementUI);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store,
  Vuex
}).$mount("#app")