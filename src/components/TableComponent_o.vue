<template>
  <div class="clientes">
    <div class="cliente-info" v-for="value in infos" :key="value.id">
      <div class="card">
        <h5 class="card-title">{{value.idClienteNavigation.nome}}</h5>
        <div class="card-body">
          <ul class="infos-pessoais">
            <li class="row" v-if="value.dataEntrada != null || value.dataEntrada != ''">
              <b class="col-md-3">Data de Entrada:</b>
              <span class="col-md-9">
                {{formatData(value.dataEntrada)}}
              </span>
            </li>
            <li class="row" v-if="value.dataSaida != null || value.dataSaida != ''">
              <b class="col-md-3">Data de Saida:</b>
              <span class="col-md-9">
                {{formatData(value.dataSaida)}}
              </span>
            </li>
            <li class="row" v-if="value.defeito != null || value.defeito != ''">
              <b class="col-md-3">Defeito:</b>
              <span class="col-md-9">
                {{value.defeito}}
              </span>
            </li>
            <li class="row" v-if="value.descricao != null || value.descricao != ''">
              <b class="col-md-3">Descrição:</b>
              <span class="col-md-9">
                {{value.descricao}}
              </span>
            </li>
            <li class="row" v-if="value.marca != null || value.marca != ''">
              <b class="col-md-3">Marca:</b>
              <span class="col-md-9">
                {{value.marca}}
              </span>
            </li>
            <li class="row" v-if="value.modelo != null || value.modelo != ''">
              <b class="col-md-3">Modelo:</b>
              <span class="col-md-9">
                {{value.modelo}}
              </span>
            </li>
            <li class="row" v-if="value.senhaDesbloqueio != null || value.senhaDesbloqueio != ''">
              <b class="col-md-3">Senha do Celular:</b>
              <span class="col-md-9">
                {{value.senhaDesbloqueio}}
              </span>
            </li>
            <li class="row" v-if="value.status != null || value.status != ''">
              <b class="col-md-3">Status:</b>
              <span class="col-md-9">
                <b>{{value.status}}</b>
              </span>
            </li>
            <li class="row" v-if="value.tipo != null || value.tipo != ''">
              <b class="col-md-3">Tipo:</b>
              <span class="col-md-9">
                {{value.tipo}}
              </span>
            </li>
            <li class="row" v-if="value.valorOrcado != null || value.valorOrcado != ''">
              <b class="col-md-3">valor orçado:</b>
              <span class="col-md-9">
                R$ {{formatMoeda(value.valorOrcado)}}
              </span>
            </li>
          </ul>
        </div>
        <div class="card-footer">
          <router-link :to="`/ordem-servico/${value.apelido}/${value.id}`" class="btn btn-outline-warning">Editar <i class="far fa-edit"></i> </router-link>
          <button class="btn btn-outline-danger" @click="excluirOrdemServico(value.id)">Deletar <i class="far fa-trash-alt"></i> </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import moment from 'moment'

export default {
  props:{
    infos:{
      type: Array,
      required: true
    }
  },
  methods:{
    excluirOrdemServico(id){
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
          axios.delete(`https://projeto-acessorios.appspot.com/api/ordemservico/`+id)
          .then((response) => {
            const index = this.infos.findIndex(info => info.id === id)
            if(~index){
              this.infos.splice(index, 1)
            }
            this.$swal.fire({
              icon: 'success',
              title: 'Ordem de serviço deletado com sucesso',
              showConfirmButton: false,
              timer: 1500
            })
          })
        }
      })
    },
    formatData(_val){
      return moment(_val).locale('pt-br').format('LL')
    },
    formatMoeda(_val){
      return _val.toLocaleString();
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
