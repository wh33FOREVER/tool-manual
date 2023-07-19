//引入、配置路由的相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/home/homepage.vue'
//1.Vue.use安装插件
Vue.use(VueRouter)
const routes = [
     //.....
     {
          path: "/",
          name: "HomePage",
          component: HomePage,
        },
]
//2.创建路由对象
const router = new VueRouter({
     //配置路由与组件的关系
     routes,
})
//3.将router对象导出
export default router


