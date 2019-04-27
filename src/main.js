import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFeather from 'vue-feather'

Vue.config.productionTip = false
Vue.use(VueFeather)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
