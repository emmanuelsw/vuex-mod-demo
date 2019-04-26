<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <h6 class="card-header">Seleccionar subcategoria</h6>
        <div class="card-body">
          <div class="row">
            <div v-for="(category, index) in categories" :key="index" class="col">
              <div @click="setStep('Step3')" class="card pointer text-white bg-dark mb-3">
                <div class="card-body">
                  <p class="card-text text-center">{{ category }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">
          <button @click="setStep('Step1')" type="button" class="btn btn-info btn-block">Volver</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step2',
  data() {
    return {
      categories: ['Laminas', 'Módulos', 'Espuma Continua', 'Segundas']
    }
  },
  methods: {
    setStep(step) {
      this.$store.commit('setStep', step)
    }
  }
}
</script>