import Vue from 'vue'
import App from './App.vue'
import * as filters from './utils/filter.js'

Vue.config.productionTip = false

// 注册全局过滤器
Object.keys(filters).forEach(key => { 
  Vue.filter(key, filters[key])
})

new Vue({
  render: h => h(App),
}).$mount('#app')
