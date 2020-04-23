// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

var store = {
  state: {
    usuario: sessionStorage.getItem('usuario') ? JSON.parse(sessionStorage.getItem('usuario')) : null,
    clientes: [],
    listUsuarios: [],
    listOrdemServico: []
  },
  getters:{
    getUsuario: state => {
      return state.usuario
    },
    getClientes: state => {
      return state.clientes
    },
    getListUsuarios: state => {
      return state.listUsuarios
    },
    getListOrdemServico: state => {
      return state.listOrdemServico
    }
  },
  mutations:{
    setUsuario(state, n){
      state.usuario = n
    },
    setClientes(state, n){
      state.clientes = n
    },
    setListUsuarios(state, n){
      state.listUsuarios = n
    },
    setListOrdemSevico(state, n){
      state.listOrdemServico = n
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  router,
  components: { App },
  template: '<App/>'
})
