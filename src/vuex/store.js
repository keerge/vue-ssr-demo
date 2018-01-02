import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import home from './modules/home'
import scientific from './modules/scientific'
Vue.use(Vuex)
export function createStore() {
  const store = new Vuex.Store({
    // actions,
    // getters,
    modules: {
      home: home(),
      scientific: scientific()
    }

  })
  return store
}

