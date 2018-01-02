import { createApp } from './main'
const { app, router, store } = createApp()
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
import NProgress from 'nprogress'
import '@/styles/nprogress.scss'
import '@/styles/index.scss' // global css

router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    NProgress.start()
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    let diffed = false
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c))
    })
    if (!activated.length) {
      return next()
    }
    Promise.all(activated.map(c => {
      // if (c.preFetch) {
      //   return c.preFetch({ store, route: to })
      // }
      if (c.preFetch) {
        var preFetch = c.preFetch
        if (c.preCache) {
          c.preFetch = null
        }
        return preFetch.call(c, { store, route: to })
      }
    })).then(() => {
      NProgress.done()
      // 停止加载指示器(loading indicator)
      next()
    }).catch(next)
  })
  app.$mount('#app')
})
