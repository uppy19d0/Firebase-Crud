import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import App from './App.vue'
import AddBook from './components/AddBook.vue'
import EditBook from './components/EditBook.vue'
import ListBook from './components/ListBook.vue'
import Home from './components/Home.vue'
import '../node_modules/nprogress/nprogress.css'
Vue.use(VueFire)
Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [{
    name: 'Home',
    path: '/',
    component: Home
}, {
    name: 'Add',
    path: '/add',
    component: AddBook
}, {
    name: 'Edit',
    path: '/edit/:id',
    component: EditBook
}, {
    name: 'List',
    path: '/index',
    component: ListBook
}, ];
const router = new VueRouter({ mode: 'history', routes: routes });
router.beforeResolve((to, from, next) => {
    if(to.name) {
        NProgress.start()
    }
    next()
})
router.afterEach(() => {
    NProgress.done()
})
new Vue({
    render: h => h(App),
    router
}).$mount('#app')