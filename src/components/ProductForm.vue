<template>
  <div class="card">
    <h6 class="card-header">
      Detalle del producto
    </h6>
    <div class="card-body">

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><span data-feather="file-text"></span></span>
        </div>
        <input v-model="orderId" type="text" class="form-control" placeholder="Order de compra">
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><span data-feather="archive"></span></span>
        </div>
        <select v-model="name" class="custom-select">
          <option :value="{name: '', code: ''}" disabled selected>Nombre del articulo</option>
          <option v-for="(product, index) in products" :key="index" :value="product">{{ product.name }}</option>
        </select>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><span data-feather="hash"></span></span>
        </div>
        <select v-model="code" class="custom-select">
          <option :value="{name: '', code: ''}" disabled selected>Código del producto</option>
          <option v-for="(product, index) in products" :key="index" :value="product">{{ product.code }}</option>
        </select>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><span data-feather="layers"></span></span>
        </div>
        <input v-model="quantity" type="text" class="form-control" placeholder="Cantidad">
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><span data-feather="dollar-sign"></span></span>
        </div>
        <input v-model="kiloValue" type="text" class="form-control" placeholder="Valor kilo">
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><span data-feather="arrow-down"></span></span>
        </div>
        <input v-model="discount" type="text" class="form-control" placeholder="Descuento">
        <div class="input-group-append">
          <span class="input-group-text"><span data-feather="percent"></span></span>
        </div>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><span data-feather="calendar"></span></span>
        </div>
        <input v-model="date" type="text" class="form-control" placeholder="dd/mm/yyyy">
      </div>

    </div>
  </div>
</template>

<script>
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
  mounted() {
    // eslint-disable-next-line
    feather.replace()
  },
  computed: {
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