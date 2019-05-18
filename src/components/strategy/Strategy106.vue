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
							<h3>材料副本介绍</h3>
							<h4>2019-03-08 20:02:22</h4>
						</div>
						<div class="md-j">
							<p>修仙之道，不可盲目追求自身修炼，适度追求外物的护持，可使修炼事半功倍！</p>
							<p>在游戏中，提升战力除了在装备上下功夫，光翼、宝石、神玉、龙魄也可以提升大量的战力。而这些宝物的提升材料，在材料副本中均可以获得！</p>
							<p>材料副本怎么进入？在主界面可以点击【玩法】，轻松找到材料副本入口。材料副本总共有5种，每种均有一次挑战机会。5种材料副本产出的材料也不同，分别为羽毛、宝石碎片、神玉碎片、龙魄碎片</p>
							<p>通关副本后，即可获得所挑战副本对应的材料奖励。副本难度也非常低，只要动动手指，就能把稀有材料收入囊中！稀有材料不够用怎么办？通关材料副本后，每个材料副本均有数次扫荡机会，和商店中的材料价格相比，半价就能将你需要的稀有材料抱回家！</p>
							<p>另外开通月卡后，扫荡价格还有8折优惠，修行路上快人一步！</p>
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





