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
</template>

<script>
export default {
  name: 'OrderDetail',
  mounted() {
    // eslint-disable-next-line
    feather.replace()
  },
}
</script>