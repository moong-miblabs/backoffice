import { createRouter, createWebHistory } from 'vue-router'

import store from '@/store'
import axios from 'axios'

import HomeView from '../views/HomeView.vue'

import Header from '../views/template/HeaderView.vue'
import Sidebar from '../views/template/SidebarView.vue'
import Footer from '../views/template/FooterView.vue'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/',
        name: 'blank',
        components: {
            Header,
            Sidebar,
            Footer,
            default : () => import('../views/BlankView.vue')
        }
    },
    {
        path: '/login',
        name: 'login',
        components: {
            default : () => import('../views/LoginView.vue')
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        components: {
            default : () => import('../views/404View.vue')
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach(async (to,from,next)=>{
    const token = store.getters.getToken
    if(to.name === 'login'){
        next()
    } else {
        if(!token){
            next()
            // next({name : 'login'})
        } else {
            next()
            // var response = await axios.post(store.getters.getServerURL+'/validate',{ token })
            // if(response.data){
            //     next()
            // } else {
            //     window.localStorage.removeItem('vuex');
            //     next({name : 'login'})
            // }
        }
    }
})

export default router
