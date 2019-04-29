<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <h6 class="card-header">Cliente seleccionado</h6>
        <div class="card-body">
          <div class="form-row">
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><feather type="user"></feather></span>
                </div>
                <select @change="setId" v-model="customer" class="custom-select">
                  <option :value="{}" disabled selected>Nombre Cliente</option>
                  <option v-for="(customer, index) in customers" :key="index" :value="customer">{{ customer.name }}</option>
                </select>
              </div>
              <small class="form-text text-danger" v-show="error">
                Por favor selecciona un cliente.
              </small>
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><feather type="hash"></feather></span>
                </div>
                <input type="text" class="form-control id" placeholder="Código cliente">
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">
          <div class="form-row">
            <div class="col">
              <button @click="setStep('Step2')" type="button" class="btn btn-info btn-block">
                <feather type="arrow-left"></feather> 
                Volver
              </button>
            </div>
            <div class="col">
              <button @click="setStep('Step4')" type="button" class="btn btn-success btn-block">
                Comenzar Pedido&nbsp;
                <feather type="arrow-right-circle"></feather>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step3',
  data() {
    return {
      customer: {},
      error: false,
      customers: [
        { id: '85485', name: 'Pepito Sanchez' },
        { id: '96541', name: 'John Doe' },
        { id: '12862', name: 'Juanito Perez' },
        { id: '84221', name: 'Bob Smith' },
      ]
    }
  },
  methods: {
    setStep(step) {
      if (Object.keys(this.customer).length === 0) {
        this.error = true
        return
      }
      this.$store.commit('setCustomer', this.customer)
      this.$store.commit('setStep', step)
    },
    setId() {
      this.error = false
      document.querySelector('.id').value = this.customer.id
    }
  }
}
</script>