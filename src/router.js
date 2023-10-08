import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/MainPage.vue'
import ShelterPage from '@/views/ShelterPage.vue'
import InfoPage from '@/views/InfoPage.vue'
import VetClinicPage from '@/views/VetClinicPage.vue'

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
        path: '/shelters',
        name: 'shelters',
        component: ShelterPage,
        query: {
            lang: 'rus'
        },
        children: [
            {
                path: ':id',
                component: ShelterPage,
            }
        ],
    },
    {
        path: '/info',
        name: 'info',
        component: InfoPage,
        query: {
            lang: 'rus'
        }
    },
    {
        path: '/vets',
        name: 'vets',
        component: VetClinicPage,
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