<template>
	<div class="news-detail">
		<div class="main-bg">
			<div class="main-con">
				<div class="main-l">
					<img class="qrcode" src="../../assets/qrcode.png" alt="">
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
							<h3>镇魔塔介绍</h3>
							<h4>2019-03-08 20:02:22</h4>
						</div>
						<div class="md-j">
							<p>上古妖魔肆虐，有大能者，将其封印在无尽镇魔塔中，永世不得超生。现其因天地动荡塔底出现缺口，有妖兽企图逃窜。需修仙者尽自己所能，斩杀塔中邪物，守一方之太平。</p>
							<p>镇魔塔是获取战纹和经验的最重要途径之一。关于镇魔塔，你又了解多少呢？下面就来一探镇魔塔的奥秘吧。镇魔塔会在修仙者达到58级时开启，在主界面右侧点击【玩法】后即可轻松找到进入图标哦！</p>
							<p>镇魔塔每个关卡只可以通关1次，每通过10关，即可获得1次抽奖奖励。不仅如此，玩家每天登陆可以领取对应层数的每日奖励。</p>
							<p>此外，镇魔塔的奖励是非常丰厚的，战纹精华、海量经验、稀有战纹等，甚至还有机会直接获得转生橙装！</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Strategy103",
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	
</style>



