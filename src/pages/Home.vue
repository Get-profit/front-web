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
        <div class="col-md-4">
          <card :titulo="cadastrarCliente.titulo" :rota="cadastrarCliente.rota" :descricao="cadastrarCliente.descricao"/>
        </div>
        <div class="col-md-4">
          <card :titulo="cadastrarUsuarios.titulo" :rota="cadastrarUsuarios.rota" :descricao="cadastrarUsuarios.descricao"/>
        </div>
        <div class="col-md-4">
          <card :titulo="cadastrarOrdem.titulo" :rota="cadastrarOrdem.rota" :descricao="cadastrarOrdem.descricao"/>
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
      },
      cadastrarCliente:{
        titulo: 'Cadastrar clientes',
        rota: '/clientes/cadastrar',
        descricao: "Aqui você poderá cadastrar clientes."
      },
      cadastrarUsuarios:{
        titulo: 'Cadastrar Usuários',
        rota: '/usuarios/cadastrar',
        descricao: "Aqui você poderá cadastrar usuários."
      },
      cadastrarOrdem:{
        titulo: 'Ordem de Serviço',
        rota: '/ordem-servico/cadastrar',
        descricao: "Aqui você poderá cadastrar Os's ."
      },
    }
  },

}
</script>
