<template>
  <div>
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
</template>

<script>
export default {
  name: 'ProductDetail',
  mounted() {
    // eslint-disable-next-line
    feather.replace()
  },
}
</script>