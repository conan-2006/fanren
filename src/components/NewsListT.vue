<template>
	<div class="news-list">
		<div class="mn-m">
			<ul>
				<router-link tag="li" :to="{name:'StrategyLink101'}"><span>【 third 】</span> 【新手攻略】《职业介绍》</router-link>
				<router-link tag="li" :to="{name:'StrategyLink102'}">【新手攻略】仙盟介绍</router-link>
				<router-link tag="li" :to="{name:'StrategyLink103'}">【新手攻略】镇魔塔介绍</router-link>
				<router-link tag="li" :to="{name:'StrategyLink104'}">【新手攻略】押镖玩法介绍</router-link>
				<router-link tag="li" :to="{name:'StrategyLink105'}">【新手攻略】技能系统介绍</router-link>
				<router-link tag="li" :to="{name:'StrategyLink106'}">【新手攻略】材料副本</router-link>
				<router-link tag="li" :to="{name:'StrategyLink107'}">【新手攻略】BOSS篇</router-link>
				<router-link tag="li" :to="{name:'StrategyLink108'}">【新手攻略】装备篇</router-link>
				<router-link tag="li" :to="{name:'StrategyLink109'}">【新手攻略】挂机系统介绍</router-link>
				<router-link tag="li" :to="{name:'StrategyLink110'}">【进阶攻略】如何升级和提升战力</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'NewsListT',
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.mn-m{
		margin: 0 2.6875rem;
		padding-top: 1.5625rem;
	}
	.mn-m li{
		font-size: 1rem;
		font-family: "SourceHanSansCN";
		color: #666666;
		line-height: 3.125rem;
		border-bottom: 0.0625rem solid #cccccc;
	}
	.mn-m li span{
		color: #000000;
	}
</style>


