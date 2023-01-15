import Vue from 'vue'
import Vuex from 'vuex'
import form from './form'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerState: false, // 详情抽屉
    sidebarState: true, // 侧边栏是否关闭
    discription: '' // 抽屉描述
  },
  getters: {},
  mutations: {
    changeDrawerState (state) {
      state.drawerState = !state.drawerState
    },
    changeSidebar (state) {
      state.sidebarState = !state.sidebarState
    },
    initDesc (state, value) {
      state.discription = value
    }
  },
  actions: {},
  modules: {
    form
  }
})
