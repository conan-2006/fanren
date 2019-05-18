// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
import Service from './components/Service'
import News from './components/News'
import Datum from './components/Datum'
import Walkthrough from './components/Walkthrough'
import Official from './components/Official'
// 子路由
import ClNewest from './components/ClNewest'
import ClJournalism from './components/ClJournalism'
import ClAffiche from './components/ClAffiche'
import ClActivity from './components/ClActivity'
//子路由
import NsNewest from './components/NsNewest'
import NsOfficial from './components/NsOfficial'
import NsStrategy from './components/NsStrategy'
import NsRecreation from './components/NsRecreation'
import NewsDetail from './components/NewsDetail'
import NewsList from './components/NewsList'

// 攻略
import Strategy101 from './components/strategy/Strategy101'
import Strategy102 from './components/strategy/Strategy102'
import Strategy103 from './components/strategy/Strategy103'
import Strategy104 from './components/strategy/Strategy104'
import Strategy105 from './components/strategy/Strategy105'
import Strategy106 from './components/strategy/Strategy106'
import Strategy107 from './components/strategy/Strategy107'
import Strategy108 from './components/strategy/Strategy108'
import Strategy109 from './components/strategy/Strategy109'
import Strategy110 from './components/strategy/Strategy110'

// 活动
import Activity101 from './components/activity/Activity101'
import Activity102 from './components/activity/Activity102'
import Activity103 from './components/activity/Activity103'
import Activity104 from './components/activity/Activity104'

// 关于
import Introduction from './components/about/Introduction'



Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

const router = new VueRouter({
	routes:[
		{path:'/',name:'HomeLink',component:Home,children:[]},
		{path:'/Service',name:'ServiceLink',component:Service},
		{path:'/News',name:'NewsLink',component:News},
		{path:'/Datum',name:'DatumLink',component:Datum},
		{path:'/Walkthrough',name:'WalkthroughLink',component:Walkthrough},
		{path:'/Official',name:'OfficialLink',component:Official},
		{path:'/NewsDetail',name:'NewsDetailLink',component:NewsDetail},
		{path:'/Strategy101',name:'StrategyLink101',component:Strategy101},
		{path:'/Strategy102',name:'StrategyLink102',component:Strategy102},
		{path:'/Strategy103',name:'StrategyLink103',component:Strategy103},
		{path:'/Strategy104',name:'StrategyLink104',component:Strategy104},
		{path:'/Strategy105',name:'StrategyLink105',component:Strategy105},
		{path:'/Strategy106',name:'StrategyLink106',component:Strategy106},
		{path:'/Strategy107',name:'StrategyLink107',component:Strategy107},	
		{path:'/Strategy108',name:'StrategyLink108',component:Strategy108},
		{path:'/Strategy109',name:'StrategyLink109',component:Strategy109},
		{path:'/Strategy110',name:'StrategyLink110',component:Strategy110},
		{path:'/Activity101',name:'ActivityLink101',component:Activity101},
		{path:'/Activity102',name:'ActivityLink102',component:Activity102},
		{path:'/Activity103',name:'ActivityLink103',component:Activity103},
		{path:'/Activity104',name:'ActivityLink104',component:Activity104},
		{path:'/Introduction',name:'IntroductionLink',component:Introduction}
		// {path:'*',component:Home}
	],mode:'history',
	base: __dirname,
})

// 	{
// 		path: '/mNews',
// 		components: {
// 			default: ClNewest,
// 			a: ClJournalism,
// 			b: ClAffiche,
// 			c:ClActivity
// 		}
// 	}

// ,children:[
// 			{path:'/ClNewest',name:'ClNewestLink',components:{one:ClNewest},alias:'/'},
// 			{path:'/ClJournalism',name:'ClJournalismLink',components:{two:ClJournalism}},
// 			{path:'/ClAffiche',name:'ClAfficheLink',components:{three:ClAffiche}},
// 			{path:'/ClActivity',name:'ClActivityLink',components:{four:ClActivity}},
// 			{path:'/NsNewest',name:'NsNewestLink',components:{a:NsNewest},alias:'/'},
// 			{path:'/NsOfficial',name:'NsOfficialLink',components:{b:NsOfficial}},
// 			{path:'/NsStrategy',name:'NsStrategyLink',components:{c:NsStrategy}},
// 			{path:'/NsRecreation',name:'NsRecreationLink',components:{d:NsRecreation}}
// 		]

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
