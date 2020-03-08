import Vue from 'vue'
import Router from 'vue-router'
import mainRouter from './main-router'
Vue.use(Router)

export const routes = [...mainRouter]

const router = new Router({
  mode: 'history',
  routes
})

export default router
