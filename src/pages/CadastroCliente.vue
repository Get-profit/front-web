<template>
  <site-template>
    <div class="log-form">
      <h2>Cadastrar</h2>
      <cadastrar-cliente :inputs="fields" />
    </div>
  </site-template>
</template>

<script>
import SiteTemplate from '@/templates/SiteTemplate'
import CadastrarClienteComponent from '@/components/CadastrarClienteComponent'

export default {
  components:{
    'site-template': SiteTemplate,
    'cadastrar-cliente': CadastrarClienteComponent
  },
  data(){
    return{
      formData: {},
      fields:[
        {
          id: 1,
          label: 'Nome',
          name: 'nome',
          type: 'text',
          validate: 'required|alpha_spaces'
        },
        {
          id: 2,
          label: 'CPF',
          name: 'cpf',
          type: 'text',
          validate: 'required'
        },
        {
          id: 3,
          label: 'RG',
          name: 'rg',
          type: 'text',
          validate: 'required'
        },
        {
          id: 4,
          label: 'Telefone',
          name: 'telefone',
          type: 'text'
        },
        {
          id: 5,
          label: 'Email',
          name: 'email',
          type: 'email',
          validate: 'required|email'
        },
        {
          id: 6,
          label: 'CEP',
          name: 'cep',
          type: 'text',
          validate: 'required'
        },
        {
          id: 7,
          label: 'Logradouro',
          name: 'logradouro',
          type: 'text',
          validate: 'required|alpha_spaces'
        },
        {
          id: 8,
          label: 'Número',
          name: 'numero',
          type: 'text',
          validate: 'required'
        },
        {
          id: 9,
          label: 'bairro',
          name: 'bairro',
          type: 'text',
          validate: 'required|alpha_spaces'
        },
        {
          id: 10,
          label: 'Cidade',
          name: 'cidade',
          type: 'text',
          validate: 'required|alpha_spaces'
        },
        {
          id: 11,
          label: 'Estado',
          name: 'estado',
          type: 'text',
          validate: 'required|alpha_spaces'
        }
      ]
    }
  },
  methods:{
  }
}
</script>

<style lang="css">
.log-form{
    width: 700px;
    padding: 40px;
    margin: 0 auto;
    border: 1px solid #e2e2e2;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
    text-align: center;
}
.log-form form{
    border: 2px solid #8bc24a;
    padding: 15px;
    border-radius: 5px;
}

.log-form form div{
    position: relative;
}

.log-form h2 {
    font-weight: 700;
    text-transform: uppercase;
    color: #53aa5e;
    margin: 0 0 40px;
}

.log-form button{
    background: #8bc24a;
    border: none;
    color: #fff;
    text-transform: uppercase;
    padding: 5px 20px;
    border-radius: 6px;
    margin: 0 auto;
    margin-top: 25px;
}

.wrap-form{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.wrap-input{
  width: calc((100% / 2) - 10px);
  margin-right: 10px;
}

</style>
