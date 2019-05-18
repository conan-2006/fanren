<template>
	<div class="footer">
		<div class="footer-in">
			<div class="comicon">
				<img src="../../static/jdyx.png">
			</div>
			<div class="linkme">
				<p>
					<a href="http://www.msymobile.com/contact.aspx?ParentId=5#contact1">联系我们</a> |
					<a href="http://www.msymobile.com/join.aspx?CateId=20&amp;BaseInfoCateId=20&amp;ParentId=6">人才招聘</a> |
					<a href="http://www.msymobile.com/contact.aspx?ParentId=5#contact1">家长监护</a>
				</p>
				<p>
					ICP备案号：<a href="http://www.miitbeian.gov.cn/">苏ICP备16008373号-2</a>
				</p>
				<p>
					北京市海淀区中关村大街11号E世界财富中心C座639室 010-85997746	
				</p>
				<p>
					苏州美生元信息科技有限公司版权所有 COPYRIGHT@2017JDANGAME.COM LIMITED. ALL RIGHTS RESERVED.
				</p>
				<p>
					<a href="javascript:void(0);">苏ICP证20160567号 苏网文(2016)0985-020号</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'FooterCon',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="scoped">
	.footer{
		float: none;
		width: 100%;
		padding-top: 40px;
		margin-bottom: 25px;
		overflow: hidden;
	}
	.footer-in{
		width: 1200px;
		min-width: 1200px;
		margin: 0 auto;
		overflow: hidden;
	}
	.comicon img{
		margin-top: 10px;
	}
	.comicon{
		float: left;
		width: 151px;
		height: 96px;
		border-right: 1px solid #e5e5e5;
		margin-left: 151px;
	}
	
	.linkme{
		float: left;
		margin-left: 45px;
		font-size: 14px;
		font-family: "Adobe Heiti Std";
		color: rgb(153, 153, 153);
		text-transform: uppercase;
		line-height: 24px;
	}
	.linkme a{
		text-decoration: none;
		font-size: inherit;
		color: inherit;
	}
	.logo-con{
		float: left;
		width: 255px;
		height: 100%;
		/* background: url(../img/logo-con.png) center center no-repeat; */
		background-size: 87px 81px;
	}
	.about-us{
		float: left;
		font-size: 14px;
	}
	.about-us ul{
		/*display: block;*/
		margin-top: 32px;
		overflow: hidden;
	}
	.about-us ul li{
		float: left;
		border-right: 1px solid #858585;
		line-height: 1;
		padding: 0 3px;
		line-height: 25px;
	}
	.about-us ul a:nth-last-child(1) li{
		border-right: none;
	}
	/*.ln{
		width: 500px;
		background: #fff;
	}*/
	.linear::before{
		z-index: -1;
	}
	.border-t{
		border-bottom: 1px solid #007AFF;
	}
	
</style>
