<template>
  <div class="card">
    <h6 class="card-header">
      Detalle del producto
    </h6>
    <div class="card-body">

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><feather type="file-text"></feather></span>
        </div>
        <input v-model="orderId" type="text" :class="{'is-invalid': errors.orderId}" class="form-control" placeholder="Order de compra">
        <div v-show="errors.orderId" class="invalid-feedback">
          {{ errors.orderId }}
        </div>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><feather type="archive"></feather></span>
        </div>
        <select v-model="name" class="custom-select">
          <option :value="{name: '', code: ''}" disabled selected>Nombre del articulo</option>
          <option v-for="(product, index) in products" :key="index" :value="product">{{ product.name }}</option>
        </select>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><feather type="hash"></feather></span>
        </div>
        <select v-model="code" class="custom-select">
          <option :value="{name: '', code: ''}" disabled selected>Código del producto</option>
          <option v-for="(product, index) in products" :key="index" :value="product">{{ product.code }}</option>
        </select>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><feather type="layers"></feather></span>
        </div>
        <input v-model="quantity" type="number" :class="{'is-invalid': errors.quantity}" class="form-control" placeholder="Cantidad">
        <div v-show="errors.quantity" class="invalid-feedback">
          {{ errors.quantity }}
        </div>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><feather type="dollar-sign"></feather></span>
        </div>
        <input v-model="kiloValue" type="number" class="form-control" placeholder="Valor kilo">
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><feather type="arrow-down"></feather></span>
        </div>
        <input v-model="discount" type="text" class="form-control" placeholder="Descuento">
        <div class="input-group-append">
          <span class="input-group-text"><feather type="percent"></feather></span>
        </div>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><feather type="calendar"></feather></span>
        </div>
        <input v-model="date" type="date" class="form-control" placeholder="dd/mm/yyyy">
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'ProductForm',
  data() {
    return {
      products: [
        { code: '685485', name: 'LAM 4K AZUL BILINEAR' },
        { code: '696541', name: 'LAM ESPESOR 2L CUAD' },
        { code: '612862', name: 'LAM TRILINEAR MOD 8K' },
        { code: '684221', name: 'LAM SENCILLA 0K ESP' },
      ]
    }
  },
  computed: {
    ...mapState({
      errors: state => state.order.errors
    }),
    ...mapFields([
      'product.orderId',
      'product.quantity',
      'product.kiloValue',
      'product.discount',
      'product.date'
    ]),
    name: {
      get() {
        return { 
          name: this.$store.state.order.product.name,
          code: this.$store.state.order.product.code
        }
      },
      set(value) {
        this.$store.commit('setNameCode', value)
      }
    },
    code: {
      get() {
        return { 
          name: this.$store.state.order.product.name,
          code: this.$store.state.order.product.code
        }
      },
      set(value) {
        this.$store.commit('setNameCode', value)
      }
    },
  }
}
</script>