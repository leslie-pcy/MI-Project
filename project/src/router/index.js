import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [{
            path: "/",
            redirect: "/shouye",
        },
        {
            path: "/shouye",
            name: "Shouye",
            redirect: "/shouye/tuijian",
            meta: {
                showFooter: true
            },
            component: () => import("../views/shouye/Shouye"),
            children: [{
                    path: "tuijian",
                    component: () => import("../views/shouye/children/Tuijian"),
                    meta: {
                        showFooter: true
                    },
                }, {
                    path: "shouji",
                    component: () => import("../views/shouye/children/Tuijian"),
                    meta: {
                        showFooter: true
                    },
                },
                {
                    path: "zhineng",
                    component: () => import("../views/shouye/children/Tuijian"),
                    meta: {
                        showFooter: true
                    },
                }, {
                    path: "dianshi",
                    component: () => import("../views/shouye/children/Tuijian"),
                    meta: {
                        showFooter: true
                    },
                }, {
                    path: "diannao",
                    component: () => import("../views/shouye/children/Tuijian"),
                    meta: {
                        showFooter: true
                    },
                },
                {
                    path: "quanmianping",
                    component: () => import("../views/shouye/children/Tuijian"),
                    meta: {
                        showFooter: true
                    },
                },
                {
                    path: "zhoubian",
                    component: () => import("../views/shouye/children/Tuijian"),
                    meta: {
                        showFooter: true
                    },
                },
                {
                    path: "hezi",
                    component: () => import("../views/shouye/children/Tuijian"),
                    meta: {
                        showFooter: true
                    },
                },
                {
                    path: "yishu",
                    component: () => import("../views/shouye/children/Tuijian"),
                    meta: {
                        showFooter: true
                    },
                }
            ]
        },
        {
            path: "/fenlei",
            name: "Fenlei",
            meta: {
                showFooter: true
            },
            component: () => import("../views/fenlei/Fenlei"),
            children: [{
                path: "xinpin",
                name: "Xinpin",
                component: () => import("../views/fenlei/children/Xinpin"),
                meta: {
                    showFooter: true
                },
            }, {
                path: "shouji",
                name: "Shouji",
                component: () => import("../views/fenlei/children/Shouji"),
                meta: {
                    showFooter: true
                },
            }]
        },
        {
            path: "/cart",
            name: "Cart",
            meta: {
                showFooter: true
            },
            component: () => import("../views/cart/Cart")
        },
        {
            path: "/mine",
            name: "Mine",
            meta: {
                showFooter: true
            },
            component: () => import("../views/mine/Mine")
        },
        {
            path: "/regist",
            name: "Regist",
            component: () => import("../views/login/Regist")
        }
    ],
    linkActiveClass: "active"
})

export default router;