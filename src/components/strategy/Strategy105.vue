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
							<h3>技能系统介绍</h3>
							<h4>2019-03-08 20:02:22</h4>
						</div>
						<div class="md-j">
							<h4>1技能养成</h4>
							<p>技能，修仙者修真之路的根基，须在其上下足功夫。所谓万法如道，一以贯之，不过如是。</p>
							<p>修仙者在主线任务过程中，可获得本职业对应的技能，消耗金币可以提升技能等级，提升技能等级可进一步增加技能的伤害。</p>
							<h4>2 秘籍养成</h4>
							<p>角色可以通过秘籍学习，得到强大的效果，秘籍通过荣耀竞技、跨服BOSS、拍卖行等获得，非常稀有。</p>
							<p><b>秘籍学习：</b>镖车分为四级，等级越高收益越高。只有橙色镖车被抢后不会减少收益。
不仅于此，每个修仙者每天拥有5次劫镖的机会，抢夺失败可以再次抢夺。同一个镖车最多只能被抢2次哦。
</p>
							<p><b>秘籍升级：</b>对角色已学习的秘籍，可以消耗相同秘籍对其进行升级，级别越高，效果越强。</p>
							<p><b>秘籍拆卸：</b>当角色秘籍槽已满，可以选择消耗元宝对秘籍进行拆卸以空出槽位，学习更强大的秘籍，但因为需要元宝，玩家在学习时时要认真考虑，避免有不必要的损失。</p>
							<p><b>秘籍合成：</b>玩家可以将三个任意中级秘籍合成随机一个新秘籍。</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Strategy105",
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	
</style>





