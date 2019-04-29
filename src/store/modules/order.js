import { getField, updateField } from 'vuex-map-fields'
import { isEmpty, isNumber } from '@/lib/helpers'

const state = {
  category: '',
  customer: {},
  errors: {},
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

    // Validations
    if (isEmpty(state.product.orderId)) 
      commit('setErrors', { orderId: '# de orden no puede estar en blaco.' })

    if (!isNumber(state.product.quantity))
      commit('setErrors', { quantity: 'Cantidad debe der un número.' })

    if (isEmpty(state.product.quantity))
      commit('setErrors', { quantity: 'Cantidad no puede estar en blaco.' })

    if (Object.keys(state.errors).length != 0) {
      return
    }

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
  setErrors(state, error) {
    state.errors = {...state.errors, ...error}
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