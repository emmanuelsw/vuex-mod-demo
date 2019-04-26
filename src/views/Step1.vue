<template>
  <div class="row">

    <div class="col">
      <div class="card">
        <h5 class="card-header">Espumas</h5>
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere tortor mauris, at porttitor neque elementum id.</p>
          <ul class="list-unstyled">
            <li><b>Tipos de materiales:</b></li>
            <li>Esta caracteristica permite la carga de pedidos de espumas y sus variantes.</li>
            <li>
              <ul>
                <li>Laminas</li>
                <li>Módulos</li>
                <li>Espuma Continua</li>
                <li>Segundas</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="card-footer text-muted">
          <button @click="setStep('Step2')" type="button" class="btn btn-success btn-block">Crear Pedido</button>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card">
        <h5 class="card-header">Producto Terminado</h5>
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere tortor mauris, at porttitor neque elementum id. Integer id pellentesque ligula. Ut commodo augue purus, ut ultrices diam luctus in. Aliquam blandit suscipit est, sed tempor felis iaculis eget. </p>
        </div>
        <div class="card-footer text-muted">
          <button type="button" class="btn btn-success btn-block">Crear Pedido</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Step1',
  methods: {
    setStep(step) {
      this.$store.commit('setStep', step)
    }
  }
}
</script>