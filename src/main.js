import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vant from 'vant';
import public_c from './public_c.js'
import 'vant/lib/index.css';
import './assets/css/base.css'
import './assets/css/style.css'
Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(public_c);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
