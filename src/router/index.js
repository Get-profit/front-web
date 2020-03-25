import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/PageLogin'
import Servico from '@/pages/PageServico'

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
      path: '/ordem-servico',
      name: 'OrdemServico',
      component: Servico
    }
  ]
})
