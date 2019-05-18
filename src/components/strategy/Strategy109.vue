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
							<h3>挂机系统介绍</h3>
							<h4>2019-03-08 20:02:22</h4>
						</div>
						<div class="md-j">
							<p>工作太忙，无暇顾及游戏？囊中羞涩，又想获取元宝？修仙累了，想边睡觉边修仙？挂机玩法满足你的一切需求，让你灵魂出窍，一心多用！</p>
							<p>那么，怎么才能挂机呢？</p>
							<p>但简单，进入野外后，角色会开始自动打怪，获取经验与金币。此外，每杀死一定数量小怪，会进入关卡中挑战精英BOSS，击杀后，会获得100元宝的奖励！挂机就能得元宝，挂多久，送多久！不过，每击杀一只野外BOSS，就会进入更高一层的野外地图，下一次遇到的BOSS都会变得更强。因此，为了元宝，努力提升战力吧！</p>
							<p>挂机除了能获取元宝经验和金币，还有什么好处吗？当然有！每挑战一定数量关卡boss，可以在主界面领取神器碎片。集齐神器碎片可以合成威力强大的神器，大幅提升修仙者基础属性，并触发不同的战斗增益效果。</p>
							<p>有的修仙者可能挂完机后回来看手机，发现并没有在自动打精英BOSS，需要手动点击挑战才能继续，导致白白挂机的情况。为什么会这样呢？有两个原因：1、角色在挂机时打不过当前层数的BOSS，因此自动停止挑战BOSS；2、玩家背包的装备栏满了，无法拾取BOSS掉落的装备，系统为了避免玩家损失而停止挑战BOSS。此时，玩家只需提升战力或清理背包后，手动点击一下界面下方的“挑战”按钮，即可继续挂机啦！</p>
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







