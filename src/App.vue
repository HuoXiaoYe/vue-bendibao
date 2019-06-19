<template>
	<!-- app的主页面区域 -->
	<div id="app">
		<!-- 头部 -->
		<div class="header-title">
			本地宝
		</div>
		<!-- 显示app的内容 -->
		<router-view></router-view>
		<!-- app底部的导航区域 -->
		<foot-bar></foot-bar>
		
		
		
		
	</div>
</template>

<script>
	import footBar from '@/components/footBar/footBar.vue'
	export default {
		name: 'App',
		components: {
			footBar,
		},
	}
</script>

<style>
	.active {
		color: rgb(240,20,20);
	}
	#app{
		
	}
	#app .header-title{
		height: .8rem;
		line-height: .8rem;
		background-color: #ed702d;
		text-align: center;
		color: #fff;
		
	}
</style>
