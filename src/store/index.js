import Vue from 'vue'
import Vuex from 'vuex'
import form from './form'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerState: false
  },
  getters: {},
  mutations: {
    changeDrawerState (state, value) {
      state.drawerState = value
    }
  },
  actions: {},
  modules: {
    form
  }
})
