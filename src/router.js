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
import shangliao from './page/shangliao.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            meta: {
                title: '球料首页'
            }
    },
        {
            path: '/dasheng',
            name: 'dasheng',
            component: dasheng,
            meta: {
                title: '大神'
            }
    },
        {
            path: '/user_center',
            name: 'user_center',
            component: user_center,
            meta: {
                title: '会员中心'
            }
    },
        {
            path: '/jiesuo',
            name: 'jiesuo',
            component: jiesuo,
            meta: {
                title: '支付料解锁'
            }
    },
        {
            path: '/xiangqing',
            name: 'xiangqing',
            component: xiangqing,
            meta: {
                title: ''
            }
    },
        {
            path: '/chongzhi',
            name: 'chongzhi',
            component: chongzhi,
            meta: {
                title: '球料详情'
            }
    },
        {
            path: '/gmmx',
            name: 'gmmx',
            component: gmmx,
            meta: {
                title: '购买明细'
            }
    },
        {
            path: '/zhmx',
            name: 'zhmx',
            component: zhmx,
            meta: {
                title: '账户明细'
            }
    },
        {
            path: '/banlihuiyaun',
            name: 'banlihuiyaun',
            component: banlihuiyaun,
            meta: {
                title: '办理会员'
            }
    },
        {
            path: '/dingyue',
            name: 'dingyue',
            component: dingyue,
            meta: {
                title: '订阅大神'
            }
    },
        {
            path: '/shangliao',
            name: 'shangliao',
            component: shangliao,
            meta: {
                title: '上料'
            }

    }
  ]
})
