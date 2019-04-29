<template>
  <div class="card mt-3">
    <h6 class="card-header text-center">Detalle del pedido</h6>
    <div class="card-body">
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Order #</th>
            <th scope="col">Descripción</th>
            <th scope="col">Valor Unitario</th>
            <th scope="col">Valor Total</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="!orderProducts">
            <td colspan="5" class="text-center">No hay ordenes para mostrar.</td>
          </tr>
          <tr v-for="(product, index) in orderProducts" :key="index">
            <td>{{ product.orderId }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.unitValue }}</td>
            <td>{{ product.totalValue }}</td>
            <td>
              <button @click="removeProduct(index)" type="button" class="btn btn-danger btn-sm">
                <feather type="trash-2"></feather> 
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-end">
        <p class="h5 mb-0"><b>Total:</b> {{ totalOrder | currency }}</p>
      </div>
    </div>
  </div>  
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'OrderDetail',
  computed: {
    ...mapGetters([
      'totalOrder'
    ]),
    ...mapState({
      orderProducts: state => state.order.order.products
    })
  },
  methods: {
    removeProduct(index) {
      this.$store.commit('removeProduct', index)
    }
  }
}
</script>