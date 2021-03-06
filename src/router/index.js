import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

/* Layout */
import Layout from '../views/layout/Layout'

Vue.use(Router)
export function createRouter() {
  const router = new Router({
    mode: 'history',
    routes: [
      { path: '/404', component: _import('404'), hidden: true },
      {
        path: '/',
        name: 'Home',
        hidden: true,
        component: Layout,
        redirect: '/',
        children: [{
          path: '/',
          component: _import('Home/index'),
          meta: { title: '首页' }
        }]
      },
      {
        path: '/scientific',
        name: 'scientific',
        component: Layout,
        redirect: '/scientific/',
        children: [{
          path: '/scientific/',
          component: _import('Scientific/index'),
          meta: { title: '科学' }
        }, {
          path: '/scientific/:id',
          component: _import('Scientific/article'),
          meta: { title: '科学' }
        }]
      },
      {
        path: '/book',
        name: 'book',
        component: Layout,
        redirect: '/book/',
        children: [{
          path: '/book/',
          component: _import('Book/index'),
          meta: { title: '读书' }
        },
        {
          path: '/book/:id',
          component: _import('Book/detail'),
          meta: { title: '读书detail' }
        }]
      },
      {
        path: '/15yan',
        name: '15yan',
        component: Layout,
        redirect: '/15yan/',
        children: [{
          path: '/15yan/',
          component: _import('15yan/index'),
          meta: { title: '15言' }
        }, {
          path: '/15yan/:id',
          component: _import('15yan/article'),
          meta: { title: '15言detail' }
        }]
      },
      {
        path: '/photo',
        name: 'photo',
        component: Layout,
        redirect: '/photo/',
        children: [{
          path: '/photo/',
          component: _import('Photo/index'),
          meta: { title: '摄影' }
        }, {
          path: '/photo/:id',
          component: _import('Photo/detail'),
          meta: { title: '摄影detail' }
        }]
      },

      { path: '*', redirect: '/404', hidden: true }
    ],
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  })
  return router
}
