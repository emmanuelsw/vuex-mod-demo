import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFeather from 'vue-feather'

Vue.filter('currency', function (value) {
  if (!value || value == undefined) return '$0'
  var formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })
  return formatter.format(value)
})

Vue.config.productionTip = false
Vue.use(VueFeather)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
