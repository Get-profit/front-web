<template>
  <div>
    <navbar :pagina="$route.name">
      <div class="user-config">
        <div class="user">
          <h5>{{usuario.apelido}}</h5>
          <span>{{usuario.cargo}}</span>
        </div>
        <div @click="sair" id="btnSair">Sair <i class="fas fa-sign-out-alt"></i> </div>
      </div>
    </navbar>
    <section>
      <div class="container">
        <slot />
      </div>
    </section>
  </div>
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
<style lang="css">
section{
  padding: 30px 0;
}

</style>
