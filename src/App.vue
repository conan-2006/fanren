<template>
  <div id="app">
		<HeaderNav></HeaderNav>
		<router-view></router-view>
		<!-- <FooterCon></FooterCon> -->
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js"></script>
<script>
	import HeaderNav from './components/HeaderNav'
	import FooterCon from './components/FooterCon'
	import Home from './components/Home'
	import Service from './components/Service'
	import News from './components/News'
	import Datum from './components/Datum'
	import Walkthrough from './components/Walkthrough'
	import Official from './components/Official'
	import ClNewest from './components/ClNewest'
	import ClJournalism from './components/ClJournalism'
	import ClAffiche from './components/ClAffiche'
	import ClActivity from './components/ClActivity'
	import NsNewest from './components/NsNewest'
	import NewsDetail from './components/NewsDetail'
export default {
  name: 'App',
	components:{
		HeaderNav,Home,Service,News,Datum,Walkthrough,Official,ClNewest,ClJournalism,ClAffiche,ClActivity,NsNewest,NewsDetail,FooterCon
	}
}
</script>

<style>

</style>
