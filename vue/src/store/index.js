import {createStore} from "vuex"

export default createStore({
    state: {
        user: {
            data:{
                name: 'Tom CookXxx',
                email: 'tom@example.com',
                imageUrl:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            token: 123
        }
    },
    getters:{},
    actions:{},
    mutations:{
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
        }
    },
    modules:{}
})