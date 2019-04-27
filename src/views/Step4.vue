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
                <span data-feather="x-square"></span> 
                Cancelar Pedido
              </button>
            </div>
            <div class="col">
              <button @click="setStep('Step3')" type="button" class="btn btn-info btn-block">
                <span data-feather="arrow-left"></span> 
                Volver
              </button>
            </div>
            <div class="col">
              <button type="button" class="btn btn-success btn-block">
                Enviar Pedido 
                <span data-feather="send"></span>
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
  mounted() {
    // eslint-disable-next-line
    feather.replace()
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