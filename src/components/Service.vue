<template>
	<div class="news-detail">
		<div class="main-bg">
			<div class="main-con">
				<div class="main-l">
					<img class="qrcode" src="../assets/qrcode.png" alt="">
					<a class="btn btn-dl btn-dl-ios" href="javascript:void(0);">ios下载</a>
					<a class="btn btn-dl btn-dl-and" href="javascript:void(0);">安卓下载</a>
				</div>
				<div class="main-news">
					<div class="m-t">
						<span>客服中心 / News</span>
						<ul>
							您的位置：
							<router-link :to="{name:'HomeLink'}">官网首页</router-link>/
						</ul>
					</div>
					<div class="md-c">
						<h3>客服QQ：2816895790</h3>
						<h3>官方交流群：681046650</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"introduction",
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="scoped">
	.md-c{
		font-family: "SourceHanSansCN";
		padding: 2.5rem;
		font-size: 1.25rem;
	}
	.md-c h3{
		line-height: 2.5rem;
	}
</style>










