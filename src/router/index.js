//引入vue-router
import { createRouter, createWebHashHistory } from 'vue-router'
//ES6  import输入  export 输出
// 模块化 默认私有，如何被别人使用？
// 通过export 输出
// 如何使用
// export default 默认输出
import Index from '@/views/static/index.vue'
import LayoutAdmin from '@/layout/admin/index.vue'
//白名单
const whiteList = [
    "/",
    "/login"
]
import { useUserStore } from '../store/user'

//路由表
const routes = [
    {
        path: '/',//访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf 
        name: 'home', //命名路由
        component:Index   //key:value  默认//页面组件 components 普通组件 页面组件和普通组件是一对多
    },
    {
        
        path: '/user1',
        name: 'user1',
        component: () => import('../views/static/user1.vue'),// 懒加载
        children:[
            {
        
                path: '/user1_home',
                name: 'user1_home',
                component: () => import('../views/static/user1_home.vue'),// 懒加载
                
            
            },
            
        ]
    
},
{
        
    path: '/admin_login',
    name: 'admin_login',
    component: () => import('../views/static/admin_login.vue'),// 懒加载
    

},
    {
        
            path: '/user1_manage',
            name: 'user1_manage',
            component: () => import('../views/static/user1_manage.vue'),// 懒加载
            children:[
                {path: '/', redirect: '/umsMemberTask'},
                {
                   
                    path: '/umsMemberTask',
                    name: 'umsMemberTask',
                    component: () => import('@/views/admin/umsMemberTask.vue')
                },
                {
                    path: '/umsmemberlevel',
                    name: 'umsmemberlevel',
                    component: () => import('@/views/admin/umsmemberlevel.vue')
                },
                
                {
                    path: '/umsMember',
                    name: 'umsMember',
                    component: () => import('@/views/admin/umsMember.vue')
                },
                {
                    path: '/umsMemberAddress',
                    name: 'umsMemberAddress',
                    component: () => import('@/views/admin/umsMemberAddress.vue')
                },
                {
                    path: '/umsMemberStatics',
                    name: 'umsMemberStatics',
                    component: () => import('@/views/admin/umsMemberStatics.vue')
                },
                {
                    path: '/umsMemberTagreation',
                    name: 'umsMemberTagreation',
                    component: () => import('@/views/admin/umsMemberTagreation.vue')

                },
                {
                    path: '/umsMemberTag',
                    name: 'umsMemberTag',
                    component: () => import('@/views/admin/umsMemberTag.vue')
                },
        
        
        

            ]},
    {
        path: '/adcate',
        name: 'adCate',
        component: () => import('../views/static/adCate.vue')// 懒加载
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/static/login.vue')// 懒加载
    },
    {
        path:'/oms',
        name:'oms',
        component:import('../views/admin/oms.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: LayoutAdmin,
        children: [
            {
                path: '',
                name: 'admin-index',
                component: () => import('@/views/admin/index.vue')
            }, 
            {
                path: 'info',
                name: 'admin-info',
                component: () => import('@/views/admin/info.vue')
            },
            {
                path: 'logout',
                name: 'admin-logout',
                component: () => import('@/views/admin/logout.vue')
            }, {
                path: 'changepassword',
                name: 'admin-changepassword',
                component: () => import('@/views/admin/changepassword.vue')
            },
            {
                path: 'forgetpassword',
                name: 'admin-forgetpassword',
                component: () => import('@/views/admin/forgetpassword.vue')
            },
            {
                path: 'resourceCategory',
                name: 'admin-resourceCategory',
                component: () => import('@/views/admin/resourceCategory.vue')
            },
            {
                path: 'cmshelpcategory',
                name: 'admin-cmshelpcategory',
                component: () => import('@/views/admin/cmshelpcategory.vue')
            },

        ]
    },
    {
        path: '/umsmenu', //访问路径 
        name: 'umsmenu', //命名路由
        component: () => import('@/views/admin/umsmenu.vue')
      },
    {
        path: '/productcategory',
        name: 'productcategory',
        component: () => import('@/views/admin/productcategory.vue')
    },
   
    {
        path: '/rulesetting',
        name: 'rulesetting',
        component: () => import('@/views/admin/rulesetting.vue')
    },
    {
        path: '/subject',
        name: 'subject',
        component: () => import('@/views/admin/subject.vue')
    },
   {
        path: '/sms-coupon',
        name: 'sms-coupon',
        component: () => import('@/views/admin/sms-coupon.vue')
      },
    {
        path: '/omscompany',
        name: 'omscompany',
        component: () => import('@/views/admin/omscompany.vue')
    },

    {
        path: '/topic',
        name: 'topic',
        component: () => import('@/views/admin/topic.vue')
    },
    {
        path: '/omsordersetting',
        name: 'omsordersetting',
        component: () => import('@/views/admin/omsordersetting.vue')
    },
 
    {
        path: '/sms',
        name: 'sms',
        component: () => import('@/views/admin/sms.vue')
    },
   
    {
        path: '/pms-product-attribute',
        name: 'pms-product-attribute',
        component: () => import('@/views/admin/pms-product-attribute.vue')
    },
    {
        path: '/sms-flash-promotion',
        name: 'sms-flash-promotion',
        component: () => import('@/views/admin/sms-flash-promotion.vue')
    },
    {
        path: '/sms-flash-promotion',
        name: 'sms-flash-promotion',
        component: () => import('@/views/admin/sms-flash-promotion.vue')
    },
    {
        path: '/homeAdvertise',
        name: 'admin-homeAdvertise',
        component: () => import('@/views/admin/homeAdvertise.vue')
    },
    {
        path: '/pms_album',
        name: 'admin-pms_album',
        component: () => import('@/views/admin/pms_album.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/404.vue')// 懒加载  
    }

]
const router = createRouter({
    //模式
    history: createWebHashHistory(),
    routes
})
//前置路由守卫
//用户状态 user.js
router.beforeEach((to, from, next) => {
    const userStore = useUserStore();

    if (whiteList.includes(to.path)) {
        next();
    }
    else {
        next()
        // if (userStore.token && userStore.token.length > 0) {
        //     next()
        // }
        // else {
        //     next({ name: "login" })
        // }

    }


})
export default router;