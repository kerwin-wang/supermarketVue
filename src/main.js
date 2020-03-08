import Vue from 'vue'
import App from './App.vue'

import router from './router/index'

Vue.config.productionTip = false

// 引入ant的所有组件
import './uilib/index'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
