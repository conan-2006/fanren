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
							<h3>开服活动(三)</h3>
							<h4>2019-03-08 20:02:22</h4>
						</div>
						<div class="md-j">
							<h4>活动十一：光翼比拼</h4>
							<p>活动时间：开服第3天</p>
							<p>活动描述：活动期间光翼总战力达到指定条件可领取对应奖励</p>
							<img src="../../assets/ec14.png" alt="">
							<h4>光翼达标</h4>
							<p>活动时间：开服第3天	</p>
							<p>活动描述：活动期间光翼等阶达到指定条件可领取对应奖励</p>
							<img src="../../assets/ec15.png" alt="">
							<h4>活动十二：图鉴比拼</h4>
							<p>活动时间：开服第4天</p>
							<p>活动描述：活动期间图鉴达到指定条件可领取对应奖励</p>
							<img src="../../assets/ec17.png" alt="">
							<h4>图鉴达标</h4>
							<p>活动时间：开服第4天</p>
							<p>活动描述：活动期间图鉴达到指定条件可领取对应奖励</p>
							<img src="../../assets/ec18.png" alt="">
							<h4>活动十三：等级比拼</h4>
							<p>活动时间：开服第5天</p>
							<p>活动描述：活动期间等级达到指定条件可领取对应奖励</p>
							<img src="../../assets/ec19.png" alt="">
							<h4>等级达标</h4>
							<p>活动时间：开服第5天</p>
							<p>活动描述：活动期转生等级达到指定条件可领取对应奖励</p>
							<img src="../../assets/ec20.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Activity103",
		data(){
			return{
				
			}
		}
	}
</script>

<style>

</style>








