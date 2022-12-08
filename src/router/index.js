import VueRouter from "vue-router";
import Vue from "vue";
import Dashboard from "../components/Admin/Dashboard.vue"
import HomePage from "../components/Homepage/Homepage.vue"


Vue.use(VueRouter)

const routes = [
    {
        path: '/admin',
        name: 'dash-board',
        component: Dashboard
    },
    {
        path: '/',
        name: 'home-page',
        component: HomePage
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router;