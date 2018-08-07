import Vue from 'vue'
import Router from 'vue-router'
import { FilterDemo } from '@/components';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/filter',
      name: 'filter',
      component: FilterDemo
    }
  ]
})
