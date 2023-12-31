import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/css/reset.css"
import "@/css/main.css"
import 'vant/lib/index.css';
import Vant from 'vant';
import store from './store'
Vue.use(Vant);

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');

