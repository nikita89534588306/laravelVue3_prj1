import { createRouter, createWebHistory } from "vue-router";
import store from '../store'

import dashboardRoutes from "./dashboardRoutes";
import authRoutes from "./authRoutes";

const routes = [
    dashboardRoutes,
    authRoutes,
    { path: '/:pathMatch(.*)*',  component: () =>  import('../views/NotFound.vue')},
    
];
const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)
router.beforeEach((to, from, next)=>{
    if(to.meta.requireAuth && !store.state.user.token) next({name: 'Login'})
    else if (store.state.user.token && to.meta.authRoute) next({name: 'Dashboard'})
    else next()
})

export default router