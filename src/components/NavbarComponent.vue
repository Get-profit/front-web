<template>
  <nav>
    <h4>{{pagina}}</h4>
    <slot />
  </nav>
</template>
<script>
export default {
  props:['pagina']
}
</script>
