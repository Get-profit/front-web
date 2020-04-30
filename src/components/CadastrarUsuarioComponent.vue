<template>
  <div>
    <form method="POST" enctype="multipart/form-data">
      <input-group :inputs="formInputs" :form-data="formData" />
      <div class="">
        <button v-if="!consoleMsg" type="button" @click="cadastrar">Cadastrar</button>
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
    this.getData()
  },
  methods:{
    cadastrar(){
      if(this.$route.params.id){
        const data = {
          "id": parseInt(this.$route.params.id),
          "apelido": this.formData.apelido,
          "senha": this.formData.senha,
          "cargo": this.formData.cargo
        }
        axios.put('https://projeto-acessorios.appspot.com/api/usuarios', data, {
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
              this.$router.push('/usuarios')
            }, 2000);
          }else{
            this.$swal({
              icon: 'error',
              title: 'Erro ao atualizar o usuario, tente novamente mais tarde!'
            });
          }
        })
        .catch(error => {
          this.$swal({
            icon: 'error',
            title: 'Erro ao cadastrar o usuario, tente novamente mais tarde!'
          });
        })

      }else{
        if(!this.isCadastro){
          let ArrFormData = Object.entries(this.formData)
          ArrFormData.forEach(element => {
            if(element[1] == ""){
              this.consoleMsg = 'Você precisa preencher todos os campos!'
              setTimeout(() => {
                this.consoleMsg = ''
              }, 2000);
            }else{
              this.isCadastro = !this.isCadastro
            }
          });
        }else{
          const data = {
                  "apelido": this.formData.apelido,
                  "senha": this.formData.senha,
                  "cargo": this.formData.cargo,
                }
          axios.post('https://projeto-acessorios.appspot.com/api/usuarios', data, {
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
                this.$router.push('/usuarios')
              }, 2000);
            }else{
              this.$swal({
                icon: 'error',
                title: 'Erro ao cadastrar usuario, tente novamente mais tarde!'
              });
            }
          })
          .catch(error => {
            this.$swal({
              icon: 'error',
              title: 'Erro ao cadastrar usuario, tente novamente mais tarde!'
            });
          })
        }
      }
    },

    getData(){
      if(this.$route.params.id){
        axios.get('https://projeto-acessorios.appspot.com/api/usuarios/' + parseInt(this.$route.params.id))
        .then(response => {
          this.formData = {
            apelido: response.data.apelido,
            cargo: response.data.cargo,
            senha: response.data.senha
          }
        })
      }
    }
  }
}
</script>
