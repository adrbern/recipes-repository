import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyApp.vue')
  },
  {
    path: '/advanced-search',
    name: 'advanced-search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "advanced-search" */ '../views/AdvancedSearch.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  }, {
    path: '/recipe/:id',
    name: 'recipe-id',
    component: () => import(/* webpackChunkName: "recipe-id" */ '../views/Recipe.vue'),
    props: (route) => {
      return {
        id: route.params.id
      }
    }
  }, {
    path: '/new-recipe',
    name: 'new-recipe',
    component: () => import(/* webpackChunkName: "new-recipe" */ '../views/NewRecipe.vue')
  }, {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  }, {
    path: '/register-success',
    name: 'register-success',
    component: () => import(/* webpackChunkName: "register-success" */ '../views/RegisterSuccess.vue')
  }, {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
