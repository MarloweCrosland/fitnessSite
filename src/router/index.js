import { createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue';
import Begin from '../components/Forms.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/begin',
        name: 'Begin',
        component: Begin
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router