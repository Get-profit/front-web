<template>
  <div class="card shadow p-3 mb-5 bg-white rounded">
    <div class="card-body">
      <h5 class="card-title">{{titulo}}</h5>
      <p class="card-text">{{descricao}}</p>
      <router-link :to="rota" class="btn btn-primary">Ir para {{titulo}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['titulo', 'rota', 'descricao']
}
</script>
<style lang="css">
.card{
  min-height: 260px;
}
</style>
