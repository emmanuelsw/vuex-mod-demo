<template>
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
</template>

<script>
export default {
  name: 'ProductForm',
  mounted() {
    // eslint-disable-next-line
    feather.replace()
  },
}
</script>