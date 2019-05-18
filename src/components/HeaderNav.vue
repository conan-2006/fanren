<template>
	<div id='header-nav'>
		<div class="nav-con">
			<img class="logo-fr" src="../assets/logo-fr.png" alt="">
			<div class="header-nav-con">
				<router-link :to="{name:'HomeLink'}">
					<dl class="header-nav">
						<dt>官网首页</dt>
						<dd>Home</dd>
					</dl>
				</router-link>
				<router-link :to="{name:'ServiceLink'}">
					<dl class="header-nav">
						<dt>客服中心</dt>
						<dd>Home</dd>
					</dl>
				</router-link>
				<router-link :to="{name:'NewsLink'}">
					<dl class="header-nav">
						<dt>新闻资讯</dt>
						<dd>Home</dd>
					</dl>
				</router-link>
				<router-link :to="{name:'DatumLink'}">
					<dl class="header-nav">
						<dt>游戏资料</dt>
						<dd>Home</dd>
					</dl>
				</router-link>
				<router-link :to="{name:'WalkthroughLink'}">
					<dl class="header-nav">
						<dt>游戏攻略</dt>
						<dd>Home</dd>
					</dl>
				</router-link>
				<router-link :to="{name:'OfficialLink'}">
					<dl class="header-nav">
						<dt>官方渠道</dt>
						<dd>Home</dd>
					</dl>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'HeaderNav',
		data(){
			return{
// 				dataNav:[
// 					{
// 						list:'官网首页',
// 						listEg:'Home'
// 						
// 					},
// 					{
// 						list:'客服中心',
// 						listEg:'Home'
// 						
// 					},
// 					{
// 						list:'新闻资讯',
// 						listEg:'Home'
// 						
// 					},
// 					{
// 						list:'游戏资料',
// 						listEg:'Home'
// 						
// 					},
// 					{
// 						list:'游戏攻略',
// 						listEg:'Home'
// 						
// 					},
// 					{
// 						list:'官方渠道',
// 						listEg:'Home'
// 						
// 					}
// 				]
			}
		}
	}
</script>

<style scoped="scoped">
	#header-nav{
		position: fixed;
		width: 100%;
		background-color: rgb(18, 43, 66);
		opacity: 0.831;
		z-index: 999;
	}
	.nav-con{
		position: relative;
		max-width: 75rem;
		margin: 0 auto;
	}
	.header-nav-con{
		display: flex;
		width: 55rem;
		margin: 0 auto;
		color: #FFFFFF;
	}
	.header-nav{
		flex-direction: column;
		/* flex-grow: 1; */
		width: 7.5rem;
		padding: 1rem 0 0.6rem;
	}
	.header-nav dt,.header-nav dd{
		overflow: hidden;
		text-align: center;
		font-family: "Kai";
		line-height: 1.2;
	}
	.header-nav dt{
		font-size: 1.125rem;
	}
	.header-nav dd{
		font-size: 0.5rem;
	}
	.logo-fr{
		position: absolute;
		top: 0.8rem;
		left: 1.4rem;
	}
	/* ---------------------------------- */
.home {
  font-size: 8px;
  font-family: "Hei";
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  line-height: 1.2;
  position: absolute;
  left: 446.141px;
  top: 39.7px;
  z-index: 247;
}



</style>
