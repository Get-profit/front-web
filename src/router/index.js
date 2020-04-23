import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Clientes from '@/pages/Clientes'
import Usuarios from '@/pages/Usuarios'
import OrdemServico from '@/pages/OrdemServico'



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
      path: '/usuarios',
      name: 'Usuarios',
      component: Usuarios
    },
    {
      path: '/ordem-servico',
      name: 'OrdemServico',
      component: OrdemServico
    }
  ]
})
