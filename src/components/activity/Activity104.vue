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
							<h3>开服活动(四)</h3>
							<h4>2019-03-08 20:02:22</h4>
						</div>
						<div class="md-j">
							<h4>活动十四：装备比拼</h4>
							<p>活动时间：开服第6天</p>
							<p>活动描述：活动期间装备总战力达到指定条件可领取对应奖励</p>
							<img src="../../assets/ec08.png" alt="">
							<h4>装备达标</h4>
							<p>活动时间：开服第6天</p>
							<p>活动描述：活动期间装备总战力达到指定条件可领取对应奖励</p>
							<img src="../../assets/ec21.png" alt="">
							<h4>活动十五：战力比拼</h4>
							<p>活动时间：开服第7天</p>
							<p>活动描述：活动期间总战力达到指定条件可领取对应奖励</p>
							<img src="../../assets/ec23.png" alt="">
							<h4>装备达标</h4>
							<p>活动时间：开服第6天</p>
							<p>活动描述：活动期间装备总战力达到指定条件可领取对应奖励</p>
							<img src="../../assets/ec24.png" alt="">
							<h4>活动十六：特惠礼包</h4>
							<p>活动时间：开服1-7天</p>
							<img src="../../assets/ec25.png" alt="">
							<h4>活动十七：连充奖励</h4>
							<p>活动时间：开服1-7天</p>
							<p>活动描述：累计充值10000元宝天数满足条件可以领取</p>
							<img src="../../assets/ec26.png" alt="">
							<h4>活动十八：累充奖励</h4>
							<p>活动时间：开服1-7天</p>
							<p>活动描述：累计充值388888元宝可以领取对应奖励</p>
							<img src="../../assets/ec27.png" alt="">
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








