<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  flex: 1 0 auto;
}
</style>
