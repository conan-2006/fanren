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
							<h3>押镖玩法介绍</h3>
							<h4>2019-03-08 20:02:22</h4>
						</div>
						<div class="md-j">
							<h4>1 入口</h4>
							<p>妖兽肆虐，人间物资短缺，皇家正在重金招揽修仙者参与押镖！押镖玩法的入口位于游戏右侧界面的【玩法】中。</p>
							<h4>2 玩法介绍</h4>
							<p>修仙者等级达到70级即可参与该玩法。每天每人有3次机会在押镖界面接取镖车。押镖期间，修仙者可以离开押镖界面，一定时间后即可领取收益。</p>
							<p>镖车分为四级，等级越高收益越高。只有橙色镖车被抢后不会减少收益。
不仅于此，每个修仙者每天拥有5次劫镖的机会，抢夺失败可以再次抢夺。同一个镖车最多只能被抢2次哦。
</p>
							<p>修仙者还可以对成功抢夺自己镖车的玩家发起复仇，复仇成功则双倍抢回损失。</p>
							<h4>3 押镖商店</h4>
							<p>在押镖商店中，达到一定的押镖条件后，可以低价购买各种材料以及稀有的时装、羽翼等，福利多不胜数，快来押镖吧！</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Strategy104",
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	
</style>




