import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'

new Vue({
  el: '#app',
  store : store, // es6 da key ve value esitse direk store olarak da yazılabilir
  render: h => h(App)
})
