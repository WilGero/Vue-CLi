import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/blog/:post',
    name: 'post',
    component: () => import('../views/PostView.vue')
  },
  {
    path: '/user/:user/post/:post',
    name: 'userPost',
    component: () => import('../views/UserPostView.vue')
  },
  {
    path: '/compras/:ordenId(\\d+)',
    name: 'Orden',
    component: () => import('../views/OrdenView.vue')
  },
  {
    path: '/compras/:productName',
    name: 'Producto',
    component: () => import('../views/ProductoView.vue')
  },
  {
    path: '/users/:userId(\\d+)?',
    name: 'Users',
    component: () => import('../views/UsersView.vue'),
    children:[
      {
        path:'',
        component:()=>import('../views/users/IndexView.vue')
      },
      {path:'profile',
      component:()=>import('../views/users/ProfileView.vue')},
    {
      path:'courses',
      component:()=>import('../views/users/CoursesView.vue')
    }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notFound',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
