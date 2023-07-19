import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/css/reset.css"
import "@/css/main.css"

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app');

