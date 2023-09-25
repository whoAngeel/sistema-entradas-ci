import Board from '../Views/Board.vue'
import Hero from '../Views/Hero.vue'

import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: Board
    },
    {
        path: '/hero',
        component: Hero
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export {router}
