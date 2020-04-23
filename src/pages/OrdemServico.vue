<template>
  <site-template>
      <table-v key="teste" :infos="listarOrdemServico"/>
  </site-template>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import SiteTemplate from '@/templates/SiteTemplate'
import TableComponent from '@/components/TableComponent_o'
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
  created(){
    let usuarioStorage = this.$store.getters.getUsuario
    if(usuarioStorage){
      this.usuario = this.$store.getters.getUsuario
      axios.get('https://projeto-acessorios.appspot.com/api/ordemservico/RecuperarTodosAbertos')
      .then(response => {
        this.$store.commit('setListOrdemSevico', response.data)
        console.log(response.data)
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
    listarOrdemServico(){
      return this.$store.getters.getListOrdemServico
    }
  }
}
</script>
