import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Basic from '@/pages/basic'
import layout from '@/components/basic/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/basic',
      name: 'Basic',
      component: Basic,
      children: [
        { path: 'layout', component: layout }
      ]
    }
  ]
})
