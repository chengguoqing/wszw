import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vant from 'vant';
import public_c from './public_c.js'
import './assets/css/base.css'
import './assets/css/style.css'
import VueWechatTitle from 'vue-wechat-title';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueParticles from 'vue-particles'
import VueCookies from 'vue-cookies'
import SlideVerify from 'vue-monoplasty-slide-verify';
import VueAMap from 'vue-amap';

Vue.use(SlideVerify);
Vue.use(VueParticles)
Vue.use(VueCookies)
Vue.use(ElementUI);
Vue.use(VueWechatTitle)
Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(public_c);

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: '1ca50beb27f893268297a00cdb0acdf3',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
});

import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)







//router.beforeEach((to, from, next) => {
//    if (to.path == "/admin" && VueCookies.get("user_id")) {
//        next({
//            path: ''
//        })
//        return
//    }
//
//    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//        if (VueCookies.get("user_id")) {
//            next();
//        } else {
//            next({
//                path: '/admin',
//                query: {
//                    redirect: to.name
//                } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//            })
//        }
//    } else {
//        next();
//    }
//
//
//})


new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
