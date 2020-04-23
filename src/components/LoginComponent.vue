<template>
  <div class="log-form">
      <h2 class="text-center">Login</h2>
      <form method="POST">
          <input-group :inputs="fields" :form-data="formData"/>
          <button type="button" @click="Login" class="btn-login">Entrar</button>
      </form>
  </div>
</template>

<script>
import Vue from 'vue'
import InputGroupComponent from '@/components/InputGroupComponent'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2)

export default {

    components:{
        'input-group': InputGroupComponent
    },

    data(){
        return{
            formData:{},
            fields:[
                {
                    id: 1,
                    label: 'Login',
                    name: 'login',
                    type: 'text'
                },
                {
                    id: 2,
                    label: 'Senha',
                    name: 'senha',
                    type: 'password'
                }
            ]
        }
    },
    methods:{
      Login: function(){
        const data = {
           "apelido": this.formData.login,
           "senha": this.formData.senha
        }
        axios.post('https://projeto-acessorios.appspot.com/api/login', data, {
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
                  this.$store.commit('setUsuario', {
                    'id': response.data.id,
                    'apelido': response.data.apelido,
                    'cargo': response.data.cargo
                    })
                  sessionStorage.setItem('usuario', JSON.stringify({
                    'id': response.data.id,
                    'apelido': response.data.apelido,
                    'cargo': response.data.cargo
                  }))
                  this.$router.push('/home')
                }, 2000);
            }else{
              this.$swal({
                icon: 'error',
                title: 'Algo aconteceu :(. Tente novamente.'
              });
            }
        })
        .catch(e => {
          this.$swal({
            icon: 'error',
            title: 'Erro ao fazer login, tente novamente mais tarde!'
          });
        })
      }
    }
}
</script>
