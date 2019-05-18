<template>
	<div class="news">
		<div id="main-bg">
			<div class="main-con">
				<div class="main-l">
					<img class="qrcode" src="../assets/qrcode.png" alt="">
					<a class="btn btn-dl btn-dl-ios" href="javascript:void(0);">ios下载</a>
					<a class="btn btn-dl btn-dl-and" href="javascript:void(0);">安卓下载</a>
				</div>
				<div class="main-news">
					<div class="m-t">
						<span>新闻中心 / News</span>
						<ul>
							您的位置：
							<router-link :to="{name:'HomeLink'}">官网首页</router-link>/
							<router-link :to="{name:'NewsLink'}">新闻中心</router-link>/
							<li>活动</li>
						</ul>
					</div>
					<div class="mn-c">
						<ul class="mn-ct">
							<li v-for="(curList,index) in listShow" :key="curList.key" @click="tabCut(curList,index)">{{curList.tit}}</li>
						</ul>
						<div class="news-c">
							<NewsList v-show="listShow[0].show"></NewsList>
							<NewsListF v-show="listShow[1].show"></NewsListF>
							<NewsListS v-show="listShow[2].show"></NewsListS>
							<NewsListT v-show="listShow[3].show"></NewsListT>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import NewsList from './NewsList'
	import NewsListF from './NewsListF'
	import NewsListS from './NewsListS'
	import NewsListT from './NewsListT'
	import NewsDetail from './NewsDetail'
	import Home from './Home'
	import News from './News'
	
	export default{
		name:'News',
		data(){
			return{
				listShow:[
					{tit:'新闻',show:true,key:9},
					{tit:'公告',show:false,key:10},
					{tit:'活动',show:false,key:11},
					{tit:'攻略',show:false,key:12},
				]
			}
		},
		components:{
			NewsList,NewsDetail,NewsListF,NewsListS,NewsListT
		},
		methods:{
			tabCut:function(item,index){
				for(var cl of this.listShow){
					cl.show = false
				}
				item.show = true;
			}
		}
	}
</script>

<style scoped="scoped">
	#main-bg{
		position: relative;
		width: 100%;
		min-height: 100rem;
		height: 57.3125rem;
		background: url(../assets/bg-main.png) top center no-repeat;
	}
	.main-con{
		width: 100%;
		max-width: 75rem;
		margin: auto;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.main-l{
		float: left;
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
	.main-news{
		float: right;
		width: 59.6875rem;
		height: 50rem;
		margin-top: 2.3125rem;
		background: #FFFFFF;
	}
	.m-t{
		width: 100%;
		height: 4.1875rem;
		background: #3e464b;
		font-family: "Kai";
		color: #FFFFFF;
		line-height: 4.1875rem;
		
	}
	.m-t span{
		font-size: 1.25rem;
		margin-left: 2.8125rem;
	}
	.m-t ul{
		float: right;
		margin-right: 1.5rem;
	}
	.m-t ul li{
		display: inline-block;
	}
	.mn-ct{
		margin: 0 2.6875rem;
		border-bottom: 0.0625rem solid #9a9a9a;
	}
	.mn-ct li{
		display: inline-block;
		width: 8.125rem;
		text-align: center;
		font-size: 1.25rem;
		font-family: "Kai";
		line-height: 4.75rem;
		
	}
	


</style>
