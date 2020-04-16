// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false
Vue.prototype.$api = 'http://localhost:62348/api'

var store = {
  state: {
    usuario: sessionStorage.getItem('usuario') ? JSON.parse(sessionStorage.getItem('usuario')) : null
  },
  getters:{
    getUsuario: state => {
      return state.usuario;
    }
  },
  mutations:{
    setUsuario(state, n){
      state.usuario = n;
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
