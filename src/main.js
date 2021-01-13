import Vue from 'vue'
import App from './App.vue'
import Posthog from 'posthog-js'

Vue.config.productionTip = false

Posthog.init("[iHGijN_zMe0ULDD9khFpPOcOfUGpwxl4nokVNsMvHEY]", {api_host: 'http://159.203.160.148'})

window.location.href.indexOf('127.0.0.1') === -1 && Posthog.init("[iHGijN_zMe0ULDD9khFpPOcOfUGpwxl4nokVNsMvHEY]", {api_host: 'http://159.203.160.148'}) 

new Vue({
  render: h => h(App),
}).$mount('#app')
