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
							<h3>装备系统</h3>
							<h4>2019-03-08 20:02:22</h4>
						</div>
						<div class="md-j">
							<p>修仙之路艰难险阻，不止九九八十一难，若无几身上好的防具装备护身，怎么保证能安然无恙修成正果。</p>
							<p>装备是提升战力最重要的手段之一。一套极品神装，给修仙者带来的战力提升可谓是质的飞跃。那么，装备系统相关的知识，你又是否完全了解呢？下面就来盘点一下装备系统的最重要两部分：装备获取与装备回收吧。</p>
							<p>首先来说说装备获取，装备获取有两个重要方式：</p>
							<h4>【野外获取】</h4>
							<p>野外获取主要可分为两类：BOSS与小怪。其中BOSS掉落是绝大部分装备的来源。</p>
							<p>BOSS等级越高，掉落极品装备的概率越大，打BOSS途径除了普通BOSS外，还有活动限时BOSS。除此以外，野战玩法也能获得一定的装备。</p>
							<h4>【探宝获取】</h4>
							<p>如果想快速获取装备，龙族宝藏将是您的首选，这里有贯穿游戏历程的各式各样的装备与技能书。每次探宝都有概率获得高转生超极品装备！</p>
							<p>由于装备来源丰富，修仙者的行囊很快就会被装备塞满，其中肯定有很多相对较弱的装备。这些装备怎么处理呢？装备回收解决你的困扰！装备回收在主线任务进行的过程中便会自动开启，并引导你进行回收操作。</p>
							<p>后续想主动回收装备的话，也可以在“背包”中的“回收”按钮进行回收，回收可以获得金币与强化石。另外，回收只会自动分解无用的装备，神装及高阶装备都是不会被自动分解的哦！</p>
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







