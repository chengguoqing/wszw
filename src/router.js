import Vue from 'vue'
import Router from 'vue-router'
import index from './page/index.vue'
import zidongpeng from './page/zidongpeng.vue'
import fwfswbd from './page/ztfx/fwfswbd.vue'
import ztpm from './page/ztfx/ztpm.vue'
import fwsxfgd from './page/ztfx/fwsxfgd.vue'
import csny from './page/ztfx/csny.vue'
import zhpm from './page/ztfx/zhpm.vue'
import bsznzqd from './page/ztfx/bsznzqd.vue'
import zxfwcxd from './page/ztfx/zxfwcxd.vue'
import test from './page/test.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/index',
            name: 'index',
            component: index,
            meta: {
                requireAuth: true,
                title: '首页'
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

        },
        {
            path: '/fwsxfgd',
            name: 'fwsxfgd',
            component: fwsxfgd,
            meta: {
                requireAuth: true,
                title: '服务事项覆盖度'
            }

        },
        {
            path: '/csny',
            name: 'csny',
            component: csny,
            meta: {
                requireAuth: true,
                title: '太原市'
            }

        },
        {
            path: '/zhpm',
            name: 'zhpm',
            component: zhpm,
            meta: {
                requireAuth: true,
                title: '2018综合排名'
            }

        },
        {
            path: '/',
            name: 'test',
            component: test,
            meta: {
                requireAuth: test,
                title: ''
            }

        },
        {
            path: '/bsznzqd',
            name: 'bsznzqd',
            component: bsznzqd,
            meta: {
                requireAuth: true,
                title: '办事指南准确度'
            }

        },
        {
            path: '/zxfwcxd',
            name: 'zxfwcxd',
            component: zxfwcxd,
            meta: {
                requireAuth: true,
                title: '在线服务成效度'
            }

        },



    ]
})
