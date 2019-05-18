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
							<h3>新手攻略之BOSS篇</h3>
							<h4>2019-03-08 20:02:22</h4>
						</div>
						<div class="md-j">
							<p>天地不仁以万物为刍狗。仙魔世界，妖兽肆虐，生灵涂炭。但风险与机遇并存，如果有修仙者能击败这些妖魔鬼怪、魑魅魍魉，不仅可造福一方百姓，还可获得BOSS身上强大的宝物，迅速提升自身的能力</p>
							<p>BOSS玩法达到一定等级开启，可以在界面右下方【BOSS】图标打开界面。</p>
							<p>修仙者到达不同等级，可以挑战相应等级BOSS，等级越高，BOSS越强，奖励越丰厚。</p>
							<p>BOSS种类分为个人BOSS、野外BOSS、秘境BOSS、神羽BOSS。</p>
							<p>个人BOSS只能自己挑战，奖励专属你一人，每天各等级的个人BOSS均可挑战一次，次日0点刷新次数。</p>
							<p>野外boss和全服修仙者一起竞争，得到BOSS归属的玩家可以获得更高神装爆率的归属奖励，其余参与击杀BOSS的玩家也可以获得参与奖励。</p>
							<p>秘境BOSS分为普通秘境BOSS和秘境战神殿BOSS。普通秘境BOSS比野外更强大，当然掉落的宝物也会越好，有很大概率掉落稀有的符文。至于秘境战神殿BOSS，那是需要在开服15天后开启战神系统后出现的BOSS，挑战有机会掉落稀有的战神装备！</p>
							<p>神羽BOSS位于神界，常年沐浴神界的圣光，让他们有了更强的实力，自然也让他们身上怀有了不少神界的密宝。击杀他们，甚至有机会直接掉落光翼神羽。</p>
							<p>修仙者，快来诛杀这些企图吞噬世界的妖兽，守卫脚下的一方热土吧！</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Strategy107",
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	
</style>






