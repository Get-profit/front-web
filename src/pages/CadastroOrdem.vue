<template>
  <site-template>
    <div class="log-form">
      <h2>Cadastrar</h2>
      <cadastrar-ordem :inputs="fields" />
    </div>
  </site-template>
</template>

<script>
import SiteTemplate from '@/templates/SiteTemplate'
import CadastrarOrdemComponent from '@/components/CadastrarOrdemComponent'

export default {
  components:{
    'site-template': SiteTemplate,
    'cadastrar-ordem': CadastrarOrdemComponent
  },
  data(){
    return{
      formData: {},
      fields:[
        {
          id: 1,
          label: 'Cliente',
          name: 'cliente',
          type: 'select',
        },
        {
          id: 2,
          label: 'Valor',
          name: 'valor',
          type: 'text',
        },
        {
          id: 3,
          label: 'Tipo',
          name: 'tipo',
          type: 'text',
        },
        {
          id: 4,
          label: 'Marca',
          name: 'marca',
          type: 'text',
        },
        {
          id: 5,
          label: 'Modelo',
          name: 'modelo',
          type: 'text',
        },
        {
          id: 6,
          label: 'Senha de desbloqueio',
          name: 'senhaDesbloqueio',
          type: 'text',
        },
        {
          id: 7,
          label: 'Defeito',
          name: 'defeito',
          type: 'textarea',
        },
        {
          id: 8,
          label: 'Descrição',
          name: 'descricao',
          type: 'textarea',
        },

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
