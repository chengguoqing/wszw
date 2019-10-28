import Vue from 'vue'
import Router from 'vue-router'
import index from './page/index.vue'
import zidongpeng from './page/zidongpeng.vue'

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

        },
        {
            path: '/zidongpeng',
            name: '',
            component: zidongpeng,
            meta: {
                requireAuth: true,
                title: '自动喷淋系统'
            }

        }

    ]
})
