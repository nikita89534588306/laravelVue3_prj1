import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        name: 'Dashboard',
        component: () => import('../components/DefaultLayout.vue'),
        children:[
            {path:'/dashboard', name:'dashboard', component: () =>  import('../views/Dashboard.vue')},
            {path:'/surveys', name:'surveys', component: () =>  import('../views/Surveys.vue')},
        ]
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