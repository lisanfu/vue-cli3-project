import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
Vue.use(VueRouter)
const IndexRoute = {
    path: '/',
    component: Index,

    children: []
}
const routes = [
    IndexRoute,
    {
        path: '/login',
        component: () =>
            import('@/views/login/index.vue')
    },
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
