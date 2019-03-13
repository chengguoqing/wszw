import Vue from 'vue'
import Router from 'vue-router'
import index from './page/index.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            bz:"01-主页 购票须知",
            meta: {
                title: '01-主页'
            }

    }, {
            path: '/submit_order',
            component: () =>
                import ('@/page/submit_order'),
            bz: "提交订单",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }, {
            path: '/pay_order',
            component: () =>
                import ('@/page/pay_order'),
            bz: "支付订单",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }
  ]
})
