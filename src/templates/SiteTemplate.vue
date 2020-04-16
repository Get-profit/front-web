<template>
  <navbar :pagina="$route.name">
    <div @click="sair">Sair</div>
  </navbar>
</template>
<script>
import NavbarComponent from '@/components/NavbarComponent'
export default {
  components:{
    'navbar': NavbarComponent
  },
  data() {
    return {
      usuario: false
    }
  },
  created(){
    let usuarioStorage = this.$store.getters.getUsuario
    if(usuarioStorage){
      this.usuario = this.$store.getters.getUsuario
    }else{
      this.$router.push('/')
    }
  },
  methods: {
    sair(){
      this.$store.commit('setUsuario', null)
      sessionStorage.clear()
      this.usuario = false
      this.$router.push('/')
    }
  },

}
</script>
