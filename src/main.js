// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import Axios from 'axios'
Vue.prototype.$http = Axios

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(MuseUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
