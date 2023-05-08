import { createRouter, createWebHistory} from 'vue-router'

import Index from './components/index.vue'
import LoginPage from './components/LoginPage.vue'
import NewPage from './components/NewPage.vue'
import patientPage from './components/patientPage.vue'
import SessionsPage from './components/SessionsPage.vue'

const routes = [{ path: "/", name: "index", component: Index, },
{ path: "/login", name: "login", component: LoginPage, },
{ path: "/newpatient", name: "newpatient", component: NewPage, },
{ path: "/patient", name: "patient", component: patientPage, },
{ path: "/sessions", name: "sessions", component: SessionsPage, },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router