const state = {
  category: '',
  customer: {},
  order: {}
}

const getters = {

}

const actions = {

}

const mutations = {
  setCategory(state, category) {
    state.category = category
  },
  setCustomer(state, customer) {
    state.customer = customer
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}