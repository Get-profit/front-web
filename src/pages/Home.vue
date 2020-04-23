<template>
  <site-template>
    <slot>
      <div class="row">
        <div class="col-md-4">
          <card :titulo="cliente.titulo" :rota="cliente.rota" :descricao="cliente.descricao"/>
        </div>
        <div class="col-md-4">
          <card :titulo="usuario.titulo" :rota="usuario.rota" :descricao="usuario.descricao"/>
        </div>
        <div class="col-md-4">
          <card :titulo="ordemservico.titulo" :rota="ordemservico.rota" :descricao="ordemservico.descricao"/>
        </div>
      </div>
    </slot>
  </site-template>
</template>
<script>
import SiteTemplate from '@/templates/SiteTemplate'
import CardComponent from '@/components/CardComponent'


export default {
  components:{
    'site-template': SiteTemplate,
    'card': CardComponent
  },
  data() {
    return {
      cliente:{
        titulo: 'Clientes',
        rota: '/clientes',
        descricao: 'Aqui você poderá ver a listagem de clientes, cadastrar, editar e remover os dados do cliente.'
      },
      usuario:{
        titulo: 'Usuários',
        rota: '/usuarios',
        descricao: 'Aqui você poderá ver a listagem de usuários, cadastrar, editar e remover os dados do usuário.'
      },
      ordemservico:{
        titulo: 'Ordem de Serviço',
        rota: '/ordem-servico',
        descricao: "Aqui você poderá ver a listagem de ordens de serviço, cadastrar, editar e remover os dados das Os's ."
      }
    }
  },

}
</script>
