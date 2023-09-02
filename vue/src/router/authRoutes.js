export default     {
    path: '/auth',
    redirect: '/login',
    name: 'Auth',
    meta: {authRoute: true},
    component: () => import('@/views/layouts/AuthLayout.vue'),

    children: [
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/auth/Login.vue')
    
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('@/views/auth/Register.vue')
    
        },
    ]
    
}