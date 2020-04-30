import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Clientes from '@/pages/Clientes'
import Usuarios from '@/pages/Usuarios'
import OrdemServico from '@/pages/OrdemServico'
import CadastroCliente from '@/pages/CadastroCliente'
import CadastroUsuario from '@/pages/CadastroUsuario'
import CadastroOrdem from '@/pages/CadastroOrdem'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/clientes',
      name: 'Clientes',
      component: Clientes
    },
    {
      path: '/clientes/cadastrar/:name?/:id?',
      name: 'Cadastrar Cliente',
      component: CadastroCliente
    },
    {
      path: '/usuarios',
      name: 'Usuarios',
      component: Usuarios
    },
    {
      path: '/usuarios/cadastrar/:apelido?/:id?',
      name: 'Cadastrar Usuario',
      component: CadastroUsuario
    },
    {
      path: '/ordem-servico',
      name: 'OrdemServico',
      component: OrdemServico
    },
    {
      path: '/ordem-servico/cadastrar/:id?',
      name: 'Cadastrar ordem de Servico',
      component: CadastroOrdem
    }

  ]
})
