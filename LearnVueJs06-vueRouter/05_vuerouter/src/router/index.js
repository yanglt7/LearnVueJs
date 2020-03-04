// 配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由懒加载 ES6写法
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessages = () => import('../components/HomeMessages')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

const routes = [
  {
    // 默认路径, 重定向
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews,
      },
      {
        path: 'messages',
        component: HomeMessages,
      }
    ],
    meta: { 
      title: '首页',
    }
  },
  {
    path: '/about',
    component: About,
    meta: { 
      title: '关于',
    },
    // beforeEnter: (to, from, next) => {
    //   // console.log('beforeEnter');
    // }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: { 
      title: '用户',
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: { 
      title: '档案',
    }
  }
]

// 2.创建vuerouter对象
const router = new VueRouter({
  // 配置路径和组件的映射关系
  routes,
  // 将hash模式改成history模式, 去除URL中的#
  mode: 'history',
  linkActiveClass: 'active',
})

// 前置钩子(跳转之前回调hook)
// router.beforeEach((to, from, next) => {
//   // 从from跳转到to
//   document.title = to.matched[0].meta.title
//   // console.log(to);
//   // console.log('beforeEach')
//   next()
// })

// 后置守卫(guard)
// router.afterEach((to, from) => {
//   // console.log('afterEach')
// })

// 3.将router对象传入vue实例
export default router
