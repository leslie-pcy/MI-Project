import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [{
            path: "/",
            redirect: "/shouye"
        },
        {
            path: "/shouye",
            name: "Shouye",
            redirect:"/shouye/tuijian",
            component: () => import("../views/shouye/Shouye"),
            children: [{
                path: "tuijian",
                component: () => import("../views/shouye/children/Tuijian")
            }, {
                path: "shouji",
                component: () => import("../views/shouye/children/Shouji")
            }, {
                path: "quanmianping",
                component: () => import("../views/shouye/children/Quanmianping")
            }, {
                path: "yishu",
                component: () => import("../views/shouye/children/Yishu")
            }]
        },
        {
            path: "/fenlei",
            name: "Fenlei",
            component: () => import("../views/fenlei/Fenlei")
        },
        {
            path: "/cart",
            name: "Cart",
            component: () => import("../views/cart/Cart")
        },
        {
            path: "/mine",
            name: "Mine",
            component: () => import("../views/mine/Mine")
        }
    ],
    linkActiveClass: "active"
})

export default router;