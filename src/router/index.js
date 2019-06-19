import Vue from 'vue'
import Router from 'vue-router'

// 导入 底部导航所需的四个页面
import home from '@/components/home/home.vue'
import contact from '@/components/contact/contact.vue'
import mine from '@/components/mine/mine.vue'
import message from '@/components/message/message.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/home',
		component: home
	},
	{
		path: '/message',
		component: message
	},
	{
		path: '/mine',
		component: mine
	},
	{
		path: '/contact',
		component: contact
	}
	],
	linkActiveClass :'active'

})
