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
            bz: "01-主页 购票须知",
            meta: {
                title: '飞扬冰上运动中心'
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
    }, {
            path: '/stored_card',
            component: () =>
                import ('@/page/stored_card'),
            bz: "04 储值卡售卡",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }, {
            path: '/store_recharge',
            component: () =>
                import ('@/page/store_recharge'),
            bz: "04 储值卡售卡_充值",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }, {
            path: '/top_up_detail',
            component: () =>
                import ('@/page/top_up_detail'),
            bz: "04 储值卡售卡_充值_明细",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }, {
            path: '/register_member',
            component: () =>
                import ('@/page/register_member'),
            bz: "05 办理储值卡_信息注册",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }, {
            path: '/user_center',
            component: () =>
                import ('@/page/user_center'),
            bz: "05 我的",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }, {
            path: '/my_stored_value_card',
            component: () =>
                import ('@/page/my_stored_value_card'),
            bz: "05 我的_储值卡",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }, {
            path: '/wuczk',
            component: () =>
                import ('@/page/wuczk'),
            bz: "05 我的_储值卡_数据",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }, {
            path: '/my_membership_card',
            component: () =>
                import ('@/page/my_membership_card'),
            bz: "05 我的_我的会员卡",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }, {
            path: '/course_evaluation',
            component: () =>
                import ('@/page/course_evaluation'),
            bz: "05 我的_我的课程_评价",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }, {
            path: '/my_courses',
            component: () =>
                import ('@/page/my_courses'),
            bz: "05 我的_我的课程_已约课程",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }, {
            path: '/binding_members',
            component: () =>
                import ('@/page/binding_members'),
            bz: "05-办理储值卡_会员绑定",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }, {
            path: '/binding_members',
            component: () =>
                import ('@/page/binding_members'),
            bz: "06 订单_订单明细_待付款",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }, {
            path: '/order_details_paid', 
            component: () =>
                import ('@/page/order_details_paid'),
            bz: "06 订单_订单明细_待付款",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }, {
            path: '/cancellation_order',
            component: () =>
                import ('@/page/cancellation_order'),
            bz: "06 订单_订单明细_取消订单",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }, {
            path: '/my_order',
            component: () =>
                import ('@/page/my_order'),
            bz: "06 我的_订单",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }, {
            path: '/course_booking_details',
            component: () =>
                import ('@/page/course_booking_details'),
            bz: "07 课程预约_订单详情",
            meta: {
                title: '飞扬冰上运动中心'
            }
    }
  ]
})
