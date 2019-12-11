/**
 * Created by 86130 on 2019/11/23.
 */
import Vue from 'vue'
import Login from './login.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { Login },
  template: '<Login/>'
})
