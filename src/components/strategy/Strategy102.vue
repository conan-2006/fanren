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
							<h3>仙盟介绍</h3>
							<h4>2019-03-08 20:02:22</h4>
						</div>
						<div class="md-j">
							<p>宇宙洪荒，任何一个修仙者的力量仅如同渺小的星辰，只有齐心团结为仙盟，才能绽放出耀眼的光芒。</p>
							<p>那么，如何加入仙盟呢？还没加入仙盟的修仙者，在主页面点击仙盟按钮后，即可查看服务器中的仙盟列表，选择你希望加入的仙盟进行入会申请即可！另外，只要等级达到65级，VIP等级不小于2级，只需花费500元宝即可创建属于你的仙盟哦！</p>
							<p>加入仙盟后，便可看到仙盟的主界面。仙盟界面主要分为仙盟大厅、仙盟龙脉、仙盟活动、仙盟商店。</p>

							<h4>【仙盟大厅】</h4>
							<p>这里显示本仙盟成员信息、其他仙盟信息。仙盟成员可以在这里捐赠元宝获取仙盟贡献。</p>
							<h4>【仙盟龙脉】</h4>
							<p>该系统含龙脉和宠物两个玩法：</p>
							<p>仙盟成员消耗特定道具，可以提升龙脉等级，龙脉升级可大幅提升人物属性。注意：每个人的龙脉是相互独立的，属性只对自己生效哦。</p>
							<p>仙盟成员在【仙盟宠物】中可以喂养宠物，宠物饱食度达到一定条件，即可领取奖励。随着仙盟等级的提升，宠物还可以变换多种外形，总有你喜欢的那一款哦！另外，宠物在仙盟里面偶尔会制造一坨坨热翔，仙盟成员要有铲屎官的觉悟，劳动以后也会有比较不错的奖励！</p>

							<h4>【仙盟活动】</h4>
							<p>其中包含仙盟BOSS、仙盟秘境</p>
							<p>仙盟BOSS需要召唤令牌方可召唤，召唤后可与伙伴共同击杀，均有奖励。</p>
							<p>仙盟秘境是仙盟的福地，挑战秘境可以获得大量仙盟贡献以及宝物，并且有每日奖励可以领取。</p>
							<h4>【仙盟商店】</h4>
							<p>仙盟商店中，玩家可以消耗仙盟贡献兑换稀有的道具材料。</p>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Strategy102",
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	
</style>


