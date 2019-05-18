<template>
	<div class="news-list">
		<div class="mn-m">
			<ul v-show="isShow">
				<router-link tag="li" :to="{name:'NewsDetailLink'}" v-for="list in lists" :key="list.key" @click="toDetail"><span>{{list.sort}}</span> {{list.cont}}<i>{{list.nDate}}</i></router-link>
			</ul>
			<!-- <NewsDetail></NewsDetail> -->
		</div>
	</div>
</template>

<script>
	import NewsDetail from './NewsDetail'
	export default{
		name:'NewsList',
		data(){
			return{
				isShow:true,
				lists:[
					{sort:'【 活动 】',cont:'秋季版本三重专属大礼放送！全民“撑伞”不容错过！',nDate:'2018-10-25',key:'n1'},
					{sort:'【 活动 】',cont:'秋季版本三重专属大礼放送！全民“撑伞”不容错过！',nDate:'2018-10-25',key:'n2'},
					{sort:'【 活动 】',cont:'秋季版本三重专属大礼放送！全民“撑伞”不容错过！',nDate:'2018-10-25',key:'n3'},
					{sort:'【 活动 】',cont:'秋季版本三重专属大礼放送！全民“撑伞”不容错过！',nDate:'2018-10-25',key:'n4'},
					{sort:'【 活动 】',cont:'秋季版本三重专属大礼放送！全民“撑伞”不容错过！',nDate:'2018-10-25',key:'n5'},
					{sort:'【 活动 】',cont:'秋季版本三重专属大礼放送！全民“撑伞”不容错过！',nDate:'2018-10-25',key:'n6'},
					{sort:'【 活动 】',cont:'秋季版本三重专属大礼放送！全民“撑伞”不容错过！',nDate:'2018-10-25',key:'n7'},
				]
			}
		},
		methods:{
			toDetail:function(){
				const objCon = document.getElementsByClassName('news-list');
			}
		},
		components:{
			NewsDetail
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
	.mn-m li i{
		float: right;
	}
</style>
