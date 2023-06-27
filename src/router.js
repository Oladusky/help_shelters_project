import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/MainPage.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        query: {
            lang: 'rus'
        }
    },
    {
        path: '/shelter',
        name: 'shelters',
        component: HomePage,
        query: {
            lang: 'rus'
        }
    },
    {
        path: '/news',
        name: 'news',
        component: HomePage,
        query: {
            lang: 'rus'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router