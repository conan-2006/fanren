<template>
	<div class="news-detail">
		<div class="main-bg">
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
					<div class="md-c">
						<div class="md-t">
							<h3>首个满级新服【大地飞鹰-嘲天宫】3月13日12:00火爆开启！</h3>
							<h4>2019-03-08 20:02:22</h4>
						</div>
						<div class="md-j">
							<p>一亮相，满堂彩。3月13日天刀春季戏曲主体版本“曲韵芳华”粉墨登场。同日12:00将开启天刀首个满级新服【大地飞鹰-嘲天宫】！所有新服玩家均可前往活动页面，即可领取新服专属“一飞冲天”!带少侠直升满级，一键完成剧情，更有PVE- T3金装装备、1亿+修为等大量资源赠送！</p>
							<img src="../assets/eg01.png" alt="">
							<p>一亮相，满堂彩。3月13日天刀春季戏曲主体版本“曲韵芳华”粉墨登场。同日12:00将开启天刀首个满级新服【大地飞鹰-嘲天宫】！所有新服玩家均可前往活动页面，即可领取新服专属“一飞冲天”!带少侠直升满级，一键完成剧情，更有PVE- T3金装装备、1亿+修为等大量资源赠送！</p>
							<img src="../assets/eg01.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Home from './Home'
	import News from './News'
	
	export default{
		name:"NewsDetail",
		data(){
			return{
				
			}
		},
		components:{
			Home,News
		}
	}
</script>

<style>
	.main-bg{
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
		/* padding: 0 2.625rem; */
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
	.md-c{
		width: 54.4375rem;
		margin: 0 auto;
	}
	.md-t{
		padding: 2rem 0;
		border-bottom: 0.0625rem solid #9a9a9a;
	}
	.md-t h3,.md-t h4{
		text-align: center;
		font-family: "SourceHanSansCN";
		line-height: 1.8;
	}
	.md-t h3{
		font-size: 1.5rem;
		color: rgb(0, 0, 0);
	}
	.md-t h4{
		font-size: 1rem;
		color: rgb(102, 102, 102);
	}
	.md-j{
		padding: 1.875rem 0;
		font-size: 1rem;
		font-family: "Adobe Heiti Std";
		color: rgb(102, 102, 102);
	}
	.md-j p{
		text-indent: 2rem;
		line-height: 1.875rem;
	}
	.md-j img{
		margin: 1.875rem auto;
		width: 100%;
	}


</style>

