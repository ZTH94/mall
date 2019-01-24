import Vue from 'vue'
import Router from 'vue-router'
import Test from '@page/test/Test'
import Like from '@page/like/Like'


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
        }
    ]
})
