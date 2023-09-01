import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue')

    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')

    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue')

    },
    
];


export default createRouter(
    {
        history: createWebHistory(),
        routes
    }
)