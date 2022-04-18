import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import search from '@/views/search'
import notFound from '../components/notFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        keepAlive: false //导航栏在该页面不显示
      }
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta: {
        keepAlive: true //导航栏在该页面不显示
      }
    },
  ]
})
