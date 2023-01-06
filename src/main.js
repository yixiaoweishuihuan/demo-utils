import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入normalize.css初始化样式
import './style/normalize.css'
import './style/common.styl'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 防止xss攻击
import vueDompurifyHTMLPlugin from 'vue-dompurify-html'
Vue.use(ElementUI)
Vue.use(vueDompurifyHTMLPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
