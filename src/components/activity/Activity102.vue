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
							<h4>活动七：神羽BOSS</h4>
							<p>活动时间：开服3-7天</p>
							<p>活动描述：活动期间完成指定BOSS击杀即可领取奖励</p>
							<img src="../../assets/ec07.png" alt="">
							<h4>活动八：限购礼包</h4>
							<p>活动时间：开服1-7天	</p>
							<p>活动描述：消耗元宝可以购买超值折扣</p>
							<img src="../../assets/ec09.png" alt="">
							<h4>活动九：宝石比拼</h4>
							<p>活动时间：开服第1天</p>
							<p>活动描述：活动期间宝石总战力达到指定条件可领取对应奖励</p>
							<img src="../../assets/ec10.png" alt="">
							<h4>宝石达标</h4>
							<p>活动时间：开服第1天	</p>
							<p>活动描述：活动期间宝石等级达到指定条件可领取对应奖励</p>
							<img src="../../assets/ec11.png" alt="">
							<h4>活动十：仙魄比拼</h4>
							<p>活动时间：开服第2天	</p>
							<p>活动描述：活动期间仙魄总战力达到指定条件可领取对应奖励</p>
							<img src="../../assets/ec12.png" alt="">
							<h4>仙魄达标</h4>
							<p>活动时间：开服第2天</p>
							<p>活动描述：活动期间仙魄等阶达到指定条件可领取对应奖励</p>
							<img src="../../assets/ec13.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Activity102",
		data(){
			return{
				
			}
		}
	}
</script>

<style>

</style>








