<template>
  <div>
    <div class="card">
      <div class="card-body">
        <ul class="list-detail">
          <li><b># Order:</b> {{ product.orderId }}</li>
          <li><b>Descripción:</b> {{ product.name }}</li>
          <li><b>Código:</b> {{ product.code }}</li>
          <li><b>Cantidad:</b> {{ product.quantity }}</li>
          <li><b>Descuento:</b> {{ product.discount }}</li>
          <li><b>Valor Unitario:</b> {{ unitValue | currency }}</li>
          <li><b>Valor Descuento:</b> {{ discountValue | currency }}</li>
          <li><b>Valor Total:</b> {{ totalValue | currency }}</li>
        </ul>
      </div>
      <div class="card-footer">
        <button @click="addToOrder" type="button" class="btn btn-success btn-block">
          <feather type="plus"></feather> 
          Agregar
        </button>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-body">
        <p class="mb-1">¿No encuentras el material que buscas?</p>
        <p class="mb-0">Solicita la creación del material por medio de este botón.</p>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-info btn-block">Solicitar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'ProductDetail',
  computed: {
    ...mapGetters([
      'unitValue',
      'discountValue',
      'totalValue'
    ]),
    ...mapState({
      product: state => state.order.product
    })
  },
  methods: {
    addToOrder() {
      this.$store.dispatch('addProductToOrder')
    }
  }
}
</script>