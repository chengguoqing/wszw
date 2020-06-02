import Vue from 'vue'
import Router from 'vue-router'
import index from './page/index.vue'
import zidongpeng from './page/zidongpeng.vue'
import fwfswbd from './page/ztfx/fwfswbd.vue'
import ztpm from './page/ztfx/ztpm.vue'
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

        },
        {
            path: '/fwfswbd',
            name: 'fwfswbd',
            component: fwfswbd,
            meta: {
                requireAuth: true,
                title: '服务方式完备度'
            }

        },
        {
            path: '/ztpm',
            name: 'ztpm',
            component: ztpm,
            meta: {
                requireAuth: true,
                title: '总体排名'
            }

        }

    ]
})
