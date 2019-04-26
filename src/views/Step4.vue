<template>
  <div class="row">
    <div class="col">
      <div class="card mb-4">
        <h6 class="card-header">
          <b>Cliente:</b> Pepito Perez &nbsp; | &nbsp;
          <b>Código:</b> 489465
        </h6>
        <div class="card-body">
          <div class="row">

            <div class="col">
              <div class="card">
                <h6 class="card-header">
                  Detalle del producto
                </h6>
                <div class="card-body">

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><span data-feather="file-text"></span></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Order de compra">
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><span data-feather="archive"></span></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Nombre del articulo">
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><span data-feather="hash"></span></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Código del producto">
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><span data-feather="layers"></span></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Cantidad">
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><span data-feather="dollar-sign"></span></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Valor kilo">
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><span data-feather="arrow-down"></span></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Descuento">
                    <div class="input-group-append">
                      <span class="input-group-text"><span data-feather="percent"></span></span>
                    </div>
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><span data-feather="calendar"></span></span>
                    </div>
                    <input type="text" class="form-control" placeholder="dd/mm/yyyy">
                  </div>

                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <div class="card-body">
                  <ul class="list-detail">
                    <li><b># Order:</b></li>
                    <li><b>Descripción:</b></li>
                    <li><b>Código:</b></li>
                    <li><b>Cantidad:</b></li>
                    <li><b>Descuento:</b></li>
                    <li><b>Valor Unitario:</b></li>
                    <li><b>Valor Descuento:</b></li>
                    <li><b>Valor Total:</b></li>
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

          </div>

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
                  <tr>
                    <td colspan="5" class="text-center">No hay ordenes para mostrar.</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-end">
                <p class="h5 mb-0"><b>Total:</b> $0</p>
              </div>
            </div>
          </div>

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
export default {
  name: 'Step4',
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