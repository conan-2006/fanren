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
							<h3>开服活动</h3>
							<h4>2019-03-08 20:02:22</h4>
						</div>
						<div class="md-j">
							<h4>活动一：每日登录</h4>
							<p>活动时间：开服第一天开放，领完活动结束	</p>
							<p>活动描述：开服后，累计登录指定天数可以领取对应奖励</p>
							<img src="../../assets/ec01.png" alt="">
							<h4>活动二：等级达标</h4>
							<p>活动时间：开服1-7天	</p>
							<p>活动描述：玩家等级达到指定等级可以领取对应奖励</p>
							<img src="../../assets/ec02.png" alt="">
							<h4>活动三：首充</h4>
							<p>活动时间：开服后永久开放，玩家完成充值后关闭。</p>
							<p>活动描述：玩家完成指定额度的充值可以领取对应奖励。</p>
							<img src="../../assets/ec03.png" alt="">
							<h4>活动四：每日累充</h4>
							<p>活动时间：开服后永久开放，隔日重置	</p>
							<p>活动描述：活动时间内充值满足指定额度可以领取对应奖励。</p>
							<img src="../../assets/ec04.jpeg" alt="">
							<h4>活动五：开服直购</h4>
							<p>活动时间：开服1-7天	</p>
							<p>活动描述：活动期间可以购买可直接购买道具</p>
							<img src="../../assets/ec05.png" alt="">
							<h4>活动六：BOSS首杀</h4>
							<p>活动时间：开服1-7天</p>
							<p>活动描述：活动期间可以购买可直接购买道具</p>
							<img src="../../assets/ec06.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Activity101",
		data(){
			return{
				
			}
		}
	}
</script>

<style>

</style>








