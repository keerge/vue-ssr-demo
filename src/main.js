// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { createRouter } from './router'
import { createStore } from './vuex/store'
import titleMixin from './utils/title'
import mixins from './utils/mixins'
// import { sync } from 'vuex-router-sync'
Vue.config.productionTip = false

// mixin for handling title
// global filters
import * as filters from './utils/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.mixin(titleMixin)
Vue.mixin(mixins)
export function createApp() {
  const router = createRouter()
  var store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
