import Vue from 'vue'
import Router from 'vue-router'
import index from './page/index.vue'
import dasheng from './page/dasheng.vue'
import user_center from './page/user_center.vue'
import jiesuo from './page/jiesuo.vue'
import xiangqing from './page/xiangqing.vue'
import chongzhi from './page/chongzhi.vue'
import gmmx from './page/gmmx.vue'
import zhmx from './page/zhmx.vue'

import banlihuiyaun from './page/banlihuiyaun.vue'
import dingyue from './page/dingyue.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
    },
        {
            path: '/dasheng',
            name: 'dasheng',
            component: dasheng
    },
        {
            path: '/user_center',
            name: 'user_center',
            component: user_center
    },
        {
            path: '/jiesuo',
            name: 'jiesuo',
            component: jiesuo
    },
        {
            path: '/xiangqing',
            name: 'xiangqing',
            component: xiangqing
    },
        {
            path: '/chongzhi',
            name: 'chongzhi',
            component: chongzhi
    },
        {
            path: '/gmmx',
            name: 'gmmx',
            component: gmmx
    },
        {
            path: '/zhmx',
            name: 'zhmx',
            component: zhmx
    },
        {
            path: '/banlihuiyaun',
            name: 'banlihuiyaun',
            component: banlihuiyaun
    },
        {
            path: '/dingyue',
            name: 'dingyue',
            component: dingyue
    }
  ]
})
