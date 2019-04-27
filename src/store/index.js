import Vue from 'vue'
import Vuex from 'vuex'

import order from './modules/order'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    order: order
  },
  state: {
    currentStep: ''
  },
  mutations: {
    setStep(state, step) {
      state.currentStep = step
    }
  },
  actions: {

  }
})
