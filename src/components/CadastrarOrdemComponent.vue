<template>
  <div>
    <form method="POST" enctype="multipart/form-data">
      <input-group :inputs="formInputs" :form-data="formData" />
      <div class="">
        <button v-if="!consoleMsg" type="button" @click="cadastrar">{{(this.$route.params.id == '' || this.$route.params.id == undefined)  ? 'Cadastrar' : 'Atualizar'}}</button>
        <p v-if="consoleMsg">{{consoleMsg}}</p>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import InputGroupComponent from '@/components/InputGroupComponent'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import moment from 'moment'

export default {

  components: {
    'input-group': InputGroupComponent
  },
  props:{
    inputs:{
      type: Array,
      required: true
    }
  },
  data() {
    return {
      formData: {},
      consoleMsg:'',
      isCadastro: false
    }
  },
  computed:{
    formInputs(){
      return this.inputs
    },
  },
  async mounted(){
    this.getCliente()
    this.getData()
  },
  methods:{
    cadastrar(){
      if((this.$route.params.id == '' || this.$route.params.id == undefined)){
        const data = {
                  'idCliente': parseInt(this.formData.cliente),
                  'status': 'Aberto',
                  'dataEntrada': moment().locale('en').format('YYYY-MM-DD').toString(),
                  'tipo': this.formData.tipo,
                  'marca':this.formData.marca,
                  'modelo':this.formData.modelo,
                  'defeito':this.formData.defeito,
                  'descricao': this.formData.descricao,
                  'senhaDesbloqueio':this.formData.senhaDesbloqueio,
                  'valorOrcado': parseFloat(this.formData.valor),
                }
          axios.post('https://projeto-acessorios.appspot.com/api/ordemservico', data, {
            'Content-Type': 'text/plain'
          })
          .then(response => {
            if(response.status === 201){
              this.$swal.fire({
                title: 'Estamos preparando tudo para você :)',
                timer: 4000,
                onBeforeOpen: () => {
                  this.$swal.showLoading()
                }
              })
              setTimeout(() => {
                this.$router.push('/ordem-servico')
              }, 2000);
            }else{
              this.$swal({
                icon: 'error',
                title: 'Erro ao cadastrar a ordem de serviço, tente novamente mais tarde!'
              });
            }
          })
          .catch(error => {
            this.$swal({
              icon: 'error',
              title: 'Erro ao cadastrar a ordem de serviço, tente novamente mais tarde!'
            });
          })
      }else{
        const data = {
          'id': parseInt(this.$route.params.id),
          'idCliente': parseInt(this.formData.cliente),
          'status': 'Fechado',
          'dataSaida': moment().locale('en').format('YYYY-MM-DD').toString(),
          'tipo': this.formData.tipo,
          'marca':this.formData.marca,
          'modelo':this.formData.modelo,
          'defeito':this.formData.defeito,
          'descricao': this.formData.descricao,
          'senhaDesbloqueio':this.formData.senhaDesbloqueio,
          'valorOrcado': parseFloat(this.formData.valor),
        }
        axios.put('https://projeto-acessorios.appspot.com/api/ordemservico', data, {
          'Content-Type': 'text/plain'
        })
        .then(response => {
          if(response.status === 200){
            this.$swal.fire({
              title: 'Estamos preparando tudo para você :)',
              timer: 4000,
              onBeforeOpen: () => {
                this.$swal.showLoading()
              }
            })
            setTimeout(() => {
              this.$router.push('/ordem-servico')
            }, 2000);
          }else{
            this.$swal({
              icon: 'error',
              title: 'Erro ao atualizar a ordem de serviço, tente novamente mais tarde!'
            });
          }
        })
        .catch(error => {
          this.$swal({
            icon: 'error',
            title: 'Erro ao cadastrar a ordem de serviço, tente novamente mais tarde!'
          });
        })
      }
    },
    getCliente(){
      let arrayClientes =[]
      axios.get('http://projeto-acessorios.appspot.com/api/clientes').then(response => {
        response.data.forEach(element => {
          arrayClientes.push(element)
        })
        let sel = document.getElementById('cliente')
        arrayClientes.forEach(element => {
          let opt = document.createElement('option')
          opt.appendChild(document.createTextNode(element.nome))
          opt.value = element.id
          sel.appendChild(opt)
        })
        console.log()
      })
    },
    getData(){
      if((this.$route.params.id !=  '' || this.$route.params.id != undefined)){
        axios.get('https://projeto-acessorios.appspot.com/api/ordemservico/' + parseInt(this.$route.params.id))
        .then(response => {
          this.formData = {
            cliente: response.data.idCliente,
            tipo: response.data.tipo,
            marca: response.data.marca,
            modelo: response.data.modelo,
            defeito: response.data.defeito,
            descricao: response.data.descricao,
            senhaDesbloqueio: response.data.senhaDesbloqueio,
            valor: response.data.valorOrcado.toString(),
          }
        })
      }
    }
  },
}
</script>
