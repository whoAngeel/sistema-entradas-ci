import Board from '../Views/Board.vue'
import Hero from '../Views/Hero.vue'
import GraphAll from '../Views/GraphAll.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Board
    },
    {
        path: '/hero',
        component: Hero
    }, {
        path: '/graph-all',
        component: GraphAll
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export { router }
