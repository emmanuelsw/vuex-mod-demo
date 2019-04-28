import { getField, updateField } from 'vuex-map-fields'

const state = {
  category: '',
  customer: {},
  product: {
    orderId: '',
    name: '',
    code: '',
    quantity: null,
    discount: null,
    kiloValue: null,
    date: ''
  },
  order: {
    products: []
  }
}

const getters = {
  unitValue: state => {
    return Number(state.product.kiloValue) || 0
  },
  discountValue: (state, getters) => {
    const total = getters.unitValue * state.product.quantity || 0
    const discountTotal = total * state.product.discount / 100
    return discountTotal
  },
  totalValue: (state, getters) => {
    return getters.unitValue * state.product.quantity - getters.discountValue
  },
  getField
}

const actions = {
  addProductToOrder({ state, getters, commit }) {
    const product = {
      ...state.product,
      unitValue: getters.unitValue,
      totalValue: getters.totalValue
    }
    commit('setProductToOrder', product)
  }
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
  setProductToOrder(state, payload) {
    state.order.products.push(payload)
    state.product = {
      orderId: '',
      name: '',
      code: '',
      quantity: null,
      discount: null,
      kiloValue: null,
      date: ''
    }
  },
  removeProduct(state, index) {
    state.order.products.splice(index, 1)
  },
  updateField
}

export default {
  state,
  getters,
  actions,
  mutations
}