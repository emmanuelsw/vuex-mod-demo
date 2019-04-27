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
          <li><b>Valor Unitario:</b> ${{ product.unitValue }}</li>
          <li><b>Valor Descuento:</b> ${{ product.discountValue }}</li>
          <li><b>Valor Total:</b> ${{ product.totalValue }}</li>
        </ul>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-success btn-block">
          <span data-feather="plus"></span> 
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
import { mapState } from 'vuex'

export default {
  name: 'ProductDetail',
  mounted() {
    // eslint-disable-next-line
    feather.replace()
  },
  computed: {
    ...mapState({
      product: state => state.order.product
    })
  }
}
</script>