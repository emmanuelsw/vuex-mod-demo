<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <h6 class="card-header">Cliente seleccionado</h6>
        <div class="card-body">
          <div class="form-row">
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><span data-feather="user"></span></span>
                </div>
                <input type="text" class="form-control" placeholder="Nombre cliente">
              </div>
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><span data-feather="hash"></span></span>
                </div>
                <input type="text" class="form-control" placeholder="Código cliente">
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">
          <div class="form-row">
            <div class="col">
              <button @click="setStep('Step2')" type="button" class="btn btn-info btn-block">Volver</button>
            </div>
            <div class="col">
              <button @click="setStep('Step4')" type="button" class="btn btn-success btn-block">
                Comenzar Pedido&nbsp;
                <span data-feather="arrow-right-circle"></span>
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
  mounted() {
    // eslint-disable-next-line
    feather.replace()
  },
  methods: {
    setStep(step) {
      this.$store.commit('setStep', step)
    }
  }
}
</script>