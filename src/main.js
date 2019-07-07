import Vue from 'vue'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Vue.use(HighchartsVue)
