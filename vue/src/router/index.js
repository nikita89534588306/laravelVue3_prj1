import { createRouter, createWebHistory } from "vue-router";
import store from '../store'

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        name: 'Dashboard',
        meta: {requireAuth: true},
        component: () => import('../components/DefaultLayout.vue'),
        children:[
            {path:'/dashboard', name:'dashboard', component: () =>  import('../views/Dashboard.vue')},
            {path:'/surveys', name:'surveys', component: () =>  import('../views/Surveys.vue')},
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        meta: {authRoute: true},
        component: () => import('../components/AuthLayout.vue'),

        children: [
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
        ]
        
    },
    
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