import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../Views/Home.vue";
import Configuracoes from "../Views/Configuracoes.vue";

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/configuracao',
        component: Configuracoes
    }
]
const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})


export default roteador



