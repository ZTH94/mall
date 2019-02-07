import Vue from 'vue'
import Router from 'vue-router'
import Test from '@page/test/Test'
import Like from '@page/like/Like'
import ClassifyInfo from '@page/classifyinfo/ClassifyInfo'
import GouBack from '@/components/commen/GouBack'
import Gocar from '@/components/commen/Gocar'
import Login from '@page/login/Login'
import MyCenter from '@page/mycenter/MyCenter'


Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/test',
            name: 'Test',
            component: Test
        },
		{
            path: '/Like',
            name: 'Like',
            component: Like
        },
		{
            path: '/ClassifyInfo',
            name: 'ClassifyInfo',
            component: ClassifyInfo
        },
		{
            path: '/GouBack',
            name: 'GouBack',
            component: GouBack
        },
		{
            path: '/Gocar',
            name: 'Gocar',
            component: Gocar
        },
		{
            path: '/Login',
            name: 'Login',
            component: Login
        },
		{
            path: '/MyCenter',
            name: 'MyCenter',
            component: MyCenter
        }
    ]
})
