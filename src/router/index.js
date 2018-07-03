import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
// import home from '../pages/home'
Vue.use(Router)

export default new Router({
  routes: routes.map(route => {
    const paths = route.path.replace(/^\//, '').split('/')
    // 异步方式在开发模式会导致热更新异常（替换图片路径等），需刷新页面
    route.component = () => import(`@/${paths[0]}/${paths[1]}/${paths[2]}`)
    return route
  })
})
