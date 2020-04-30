<template>
  <div class="clientes">
    <div class="cliente-info" v-for="value in infos" :key="value.id">
      <div class="card">
        <h5 class="card-title">Usuario</h5>
        <div class="card-body">
          <ul class="infos-pessoais">
            <li class="row" v-if="value.apelido != null || value.apelido != ''">
              <b class="col-md-3">Nome de usuário:</b>
              <span class="col-md-9">
                {{value.apelido}}
              </span>
            </li>
            <li class="row" v-if="value.cargo != null || value.cargo != ''">
              <b class="col-md-3">Cargo:</b>
              <span class="col-md-9">
                {{value.cargo}}
              </span>
            </li>
          </ul>
        </div>
        <div class="card-footer">
          <router-link :to="`/usuarios/cadastrar/${value.apelido}/${value.id}`" class="btn btn-outline-warning">Editar <i class="far fa-edit"></i> </router-link>
          <button class="btn btn-outline-danger" @click="excluirUsuario(value.id)">Deletar <i class="far fa-trash-alt"></i> </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'

export default {
  props:{
    infos:{
      type: Array,
      required: true
    }
  },
  methods:{
    excluirUsuario(id){
      this.$swal.fire({
        title: 'Você tem certeza disso ?',
        text: 'Você não poderá reverter essa ação!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim! Deletar isso.'
      }).then((result) => {
        if(result.value){
          axios.delete(`https://projeto-acessorios.appspot.com/api/usuarios/`+id)
          .then((response) => {
            const index = this.infos.findIndex(info => info.id === id)
            if(~index){
              this.infos.splice(index, 1)
            }
            this.$swal.fire({
              icon: 'success',
              title: 'Usuário deletado com sucesso',
              showConfirmButton: false,
              timer: 1500
            })
          })
        }
      })
    }
  }
}
</script>

<style lang="css">
.clientes{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.clientes .cliente-info{
  width: calc(95% / 2);
  margin: 5px;
}

.cliente-info .card .card-body{
  padding: 20px 0;
}

.cliente-info .card-title{
  color: #fff;
  padding: 20px;
  background: #8bc24a;
  margin: 0;
}

.cliente-info .infos-pessoais,
.cliente-info .infos-cobranca{
  list-style: none;
  padding: 0;
  margin: 0;
}

.cliente-info .infos-pessoais b,
.cliente-info .infos-cobranca b{
  font-size: 12px;
  text-align: right;
}

.cliente-info .infos-pessoais span,
.cliente-info .infos-cobranca span{
  font-size: 14px;
}

</style>
