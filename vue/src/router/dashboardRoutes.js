export default
{
    path: '/',
    redirect: '/dashboard',
    name: 'Dashboard',
    meta: {requireAuth: true},
    component: () => import('@/views/layouts/DefaultLayout.vue'),
    children:[
        {path:'/dashboard', name:'dashboard', component: () =>  import('@/views/dashboard/Dashboard.vue')},
        {path:'/surveys', name:'surveys', component: () =>  import('@/views/dashboard/Surveys.vue')},
    ]
}