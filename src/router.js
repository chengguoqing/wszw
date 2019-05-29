import Vue from 'vue'
import Router from 'vue-router'
import index from './page/index.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '',
            component: index,
            meta: {
                requireAuth: true,
                title: '首页'
            }

        }

    ]
})
