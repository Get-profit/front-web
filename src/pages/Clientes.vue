<template>
  <site-template>
      <table-v key="teste" :infos="listarClientes"/>
  </site-template>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import SiteTemplate from '@/templates/SiteTemplate'
import TableComponent from '@/components/TableComponent'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2)

export default {
    components:{
    'site-template': SiteTemplate,
    'table-v': TableComponent
  },
  data(){
    return{
      usuario: false,
    }
  },
  async created(){
    let usuarioStorage = this.$store.getters.getUsuario
    if(usuarioStorage){
      this.usuario = this.$store.getters.getUsuario
      await axios.get('https://projeto-acessorios.appspot.com/api/clientes')
      .then(response => {
        this.$store.commit('setClientes', response.data)
      })
      .catch(error => {
        this.$swal.fire({
          title: 'Estamos enfrentando problemas para apresentar isso.',
          icon: 'error',
          timer: 4000
        })
      })
    }
  },
  computed:{
    listarClientes(){
      return this.$store.getters.getClientes
    }
  }
}
</script>
