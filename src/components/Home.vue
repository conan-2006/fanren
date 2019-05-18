<template>
	<div class="main">
		<div id="main-bg">
			<div class="main-con">
				<div class="main-l">
					<img class="qrcode" src="../assets/qrcode.png" alt="">
					<a class="btn btn-dl btn-dl-ios" href="javascript:void(0);">ios下载</a>
					<a class="btn btn-dl btn-dl-and" href="javascript:void(0);">安卓下载</a>
				</div>
				<div class="main-c">
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<img src="../assets/swiper-01.png" alt="">
							</div>
							<div class="swiper-slide">
								<img src="../assets/swiper-01.png" alt="">
							</div>
							<div class="swiper-slide">
								<img src="../assets/swiper-01.png" alt="">
							</div>
						</div>
						<!-- 如果需要分页器 -->
						<div class="swiper-pagination"></div>
					</div>
				</div>
				<div class="main-r">
					<ul class="f-t">
						<li v-for="(cl,index) in clList" :key="cl.tit" :class="cl.show?'active':''" @click="tabCut('clList',index)">{{cl.tit}}</li>
						<router-link :to="{name:'NewsLink'}" class="fmore" href="javascript:void(0);">
							<span class="f-more"><img src="../assets/f-more.png" alt=""></span>更多
						</router-link>
					</ul>
					<div class="cl-con">
						<cl-newest v-show="clList[0].show"></cl-newest>
						<cl-journalism v-show="clList[1].show"></cl-journalism>
						<cl-affiche v-show="clList[2].show"></cl-affiche>
						<cl-activity v-show="clList[3].show"></cl-activity>
					</div>
				</div>
			</div>
			
		</div>
		<div class="strategy">
			<div class="strategy-l">
				<div class="st-lt">
					<span class="st-ltit"><img src="../assets/strategy.png" alt=""></span>
					<ul class="st-ltl">
						<li v-for="(ns,index) in nsList" :key="ns.tit" @click="tabCut('nsList',index)">{{ns.tit}}</li>
					</ul>
					<router-link :to="{name:'NewsLink'}" class="fmore" href="javascript:void(0);">
						<span class="f-more"><img src="../assets/f-more.png" alt=""></span>更多
					</router-link>
				</div>
				<div class="ns-con">
					<ns-newest v-show="nsList[0].show"></ns-newest>
					<ns-official v-show="nsList[1].show"></ns-official>
					<ns-strategy v-show="nsList[2].show"></ns-strategy>
					<ns-recreation v-show="nsList[3].show"></ns-recreation>
				</div>
			</div>
			<div class="strategy-r">
				<div class="strategy-r-bg">
					<p>shdkjas</p>
				</div>
				<div class="strategy-r-n">
					<ul>
						<li><img src="../assets/strategy-r-n01.png" alt=""></li>
						<li><img src="../assets/strategy-r-n02.png" alt=""></li>
						<li><img src="../assets/strategy-r-n03.png" alt=""></li>
						<li><img src="../assets/strategy-r-n04.png" alt=""></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="character">
			<div class="swiper-container-c">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img src="../assets/character01.png" alt="">
					</div>
					<div class="swiper-slide">
						<img src="../assets/character01.png" alt="">
					</div>
					<div class="swiper-slide">
						<img src="../assets/character01.png" alt="">
					</div>
				</div>
				<!-- 如果需要分页器 -->
				<div class="pagination-con">
					<img class="dec-swp" src="../assets/dec-swp.png" alt="">
					<div class="swiper-pagination"></div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	// 子路由
	import ClNewest from './ClNewest'
	import ClJournalism from './ClJournalism'
	import ClAffiche from './ClAffiche'
	import ClActivity from './ClActivity'
	//子路由
	import NsNewest from './NsNewest'
	import NsOfficial from './NsOfficial'
	import NsStrategy from './NsStrategy'
	import NsRecreation from './NsRecreation'
	import News from './News'
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.css';
	
	
	
	export default{
		name:'home',
		data(){
			return{
				clList:[
					{tit:'最新',show:true,key:1},
					{tit:'新闻',show:false,key:2},
					{tit:'公告',show:false,key:3},
					{tit:'活动',show:false,key:4},
				],
				nsList:[
					{tit:'最新',show:true,key:5},
					{tit:'官方',show:false,key:6},
					{tit:'攻略',show:false,key:7},
					{tit:'娱乐',show:false,key:8},
				]
			}
		},
		ready(){
			this.currentNews = this.news
		},
		methods:{
			clickMe:function(){
				console.log(this.test);
				this.test = 'bye';
				console.log(this.test)
			},
// 			tabCut:function(listName,index){
// 				let list;
// 				if(listName == 'cl'){
// 					list = this.clList;
// 				} else {
// 					list = this.nsList;
// 				}
// 				for(var cl of list){
// 					cl.show = false
// 				}
// 				list[index].show = true;
// 			},
// 			tabCut:function(listName,index){
// 				let list = listName == 'cl'?this.clList:this.nsList;
// 				for(var cl of list){
// 					cl.show = false
// 				}
// 				list[index].show = true;
// 			},
			tabCut:function(listName,index){
				let list = this[listName];
				for(var cl of list){
					cl.show = false
				}
				list[index].show = true;
				
			},
		},
		mounted:function(){
			new Swiper('.swiper-container', {
			  pagination: {
				el: '.swiper-pagination',
			  },
			});
			new Swiper('.swiper-container-c', {
				pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					var sel=['剑仙','琴师','羽扇']
					return '<span class="' + className + '">' + sel[index] + '</span>';
				}
			  }
			})
		},
		components: {
			'cl-newest':ClNewest,
			'cl-journalism':ClJournalism,
			'cl-affiche':ClAffiche,
			'cl-activity':ClActivity,
			'ns-newest':NsNewest,
			'ns-official':NsOfficial,
			'ns-strategy':NsStrategy,
			'ns-recreation':NsRecreation,
			'news':News
		}
	}
	
</script>

<style scoped="scoped">
	#main-bg{
		position: relative;
		width: 100%;
		min-height: 75rem;
		height: 57.3125rem;
		background: url(../assets/bg-main.png) top center no-repeat;
	}
	.main-con{
		width: 100%;
		width: 75rem;
		margin: auto;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.main-l,.main-c,.main-r{
		float: left;
	}
	.main-l{
		width: 14.0625rem;
		height: 22.5rem;
		background: #FFFFFF;
		text-align: center;
	}
	.qrcode{
		width: 62%;
		margin: 1.25rem auto 1.9rem;
	}
	.btn{
		display: block;
		font-family: "Kai";
	}
	.btn-dl{
		width: 90%;
		height: 3rem;
		margin: 0 auto 0.5rem;
		line-height: 3rem;
		color: #FFFFFF;
		border-radius: 0.5rem;
		font-size: 1.4rem;
	}
	.btn-dl-ios{
		background: #e75d00;
	}
	.btn-dl-and{
		background: #1bb322;
	}
	.main-c{
		width: 35.3125rem;
		height: 20.125rem;
		margin-top: 1.375rem;
	}
	.swiper-container {
		width: 100%;
		height: 100%;
	}
	.main-r{
		width: 25.6rem;
		height: 20.125rem;
		margin-top: 1.375rem;
		background: #FFFFFF;
	}
	.f-t{
		overflow: hidden;
		border-bottom: 0.0625rem solid #dbdbdb;
	}
	.f-t li{
		float: left;
		width: 4.6875rem;
		text-align: center;
		line-height: 2.875rem;
		font-size: 1.3rem;
		color: rgb(102, 102, 102);
	}
	.f-t li.active{
		border-bottom: 2px solid #967e68;
	}
	.fmore{
		float: right;
		margin-right: 0.9rem;
		line-height: 2.875rem;
		font-size: 1.1rem;
		color: rgb(102, 102, 102);
	}
	.f-more{
		vertical-align: middle;
	}
	.strategy{
		width: 100%;
		width: 74rem;
		margin: 0 auto;
		padding: 1.5rem 0 1.5rem 1rem;
		overflow: hidden;
	}
	.strategy-l{
		float: left;
		width: 47.0625rem;
		height: 26.375rem;
	}
	.strategy-lt{
		
	}
	.st-lt{
		background: url(../assets/b-b.png) left bottom repeat-x;
		overflow: hidden;
	}
	.st-ltit{
		float: left;
	}
	.st-ltl{
		float: left;
		line-height: 5.7rem;
	}
	.st-ltl li{
		float: left;
		width: 6.1875rem;
		text-align: center;
		font-family: "Kai";
		font-size: 1.2rem;
		color: rgb(102, 102, 102);
	}
	.strategy-l .fmore{
		line-height: 5.7rem;
	}
	.strategy-r{
		float: right;
		width: 25.6875rem;
		height: 22.875rem;
	}
	.strategy-r-bg{
		width: 100%;
		height: 9.9375rem;
		background: url(../assets/strategy-r-bg.png) top left no-repeat;
		background-size: contain;
	}
	.strategy-r-n{
		width: 100%;
		height: 12.875rem;
		background: #e3e3e3;
	}
	.strategy-r-n li{
		float: left;
		margin-right: 0.0625rem;
	}
	.strategy-r-n li:nth-last-child(1){
		margin-right: 0;
	}
	.swiper-container-c{
		position: relative;
		width: 100%;
		/* max-width: 75rem; */
		margin: 0 auto;
	}
	.swiper-container-c .swiper-slide{
		background: url(../assets/character-bg.jpg) center;
	}
	.swiper-container-c img{
		width: 100%;
	}
	.pagination-con{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		margin: auto;
		width: 100%;
		width: 75rem;
		height: 100%;
	}
	.swiper-container-c .swiper-pagination{
		width: 8.6875rem;
		height: 14.125rem;
		max-width: 75rem;
		margin-left: 2.8125rem;
		background: rgba(255,255,255,.6);
	}
	.swiper-container-c .swiper-pagination-bullet-active{
		
	}
	.swiper-container-c img.dec-swp{
		position: absolute;
		left: 6.2rem;
		top: 1rem;
		width: 1.9375rem;
		z-index: 999;
	}
</style>
