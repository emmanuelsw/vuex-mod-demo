<template>
  <div class="row">
    <div class="col">
      <div class="card mb-4">
        <h6 class="card-header">
          <b>Cliente:</b> {{ customer.name }} &nbsp; | &nbsp;
          <b>Código:</b> {{ customer.id }}
        </h6>
        <div class="card-body">
          <div class="row">
            <div class="col">
              <ProductForm/>
            </div>
            <div class="col">
              <ProductDetail/>
            </div>
          </div>

          <OrderDetail/>

          <div class="form-row mt-3">
            <div class="col">
              <button type="button" class="btn btn-danger btn-block">
                <feather type="x-square"></feather>
                Cancelar Pedido
              </button>
            </div>
            <div class="col">
              <button @click="setStep('Step3')" type="button" class="btn btn-info btn-block">
                <feather type="arrow-left"></feather>
                Volver
              </button>
            </div>
            <div class="col">
              <button type="button" class="btn btn-success btn-block">
                Enviar Pedido 
                <feather type="send"></feather>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const ProductForm = () => import('@/components/ProductForm')
const ProductDetail = () => import('@/components/ProductDetail')
const OrderDetail = () => import('@/components/OrderDetail')

export default {
  name: 'Step4',
  components: {
    ProductForm,
    ProductDetail,
    OrderDetail
  },
  computed: {
    ...mapState({
      customer: state => state.order.customer
    })
  },
  methods: {
    setStep(step) {
      this.$store.commit('setStep', step)
    }
  }
}
</script>