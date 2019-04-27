import { getField, updateField } from 'vuex-map-fields'

const state = {
  category: '',
  customer: {},
  product: {
    orderId: '',
    name: '',
    code: '',
    quantity: '',
    discount: '',
    kiloValue: '',
    date: '',
    unitValue: 0,
    discountValue: 0,
    totalValue: 0,
  },
  order: {}
}

const getters = {
  getField
}

const actions = {

}

const mutations = {
  setCategory(state, category) {
    state.category = category
  },
  setCustomer(state, customer) {
    state.customer = customer
  },
  setNameCode(state, payload) {
    state.product.name = payload.name
    state.product.code = payload.code
  },
  updateField
}

export default {
  state,
  getters,
  actions,
  mutations
}