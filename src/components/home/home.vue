<template>
	<div class="home-container">
		<!-- 顶部轮播图区域 -->
		<header-swiper></header-swiper>
		<!-- nav区域 -->
		
		<ul class="nav-container">
			<li v-for="item of navList" class="item" :key="item.id">
				<img :src="item.icon">
				<p class="content">{{item.name}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import headerSwiper from '@/components/headerSwiper/headerSwiper.vue'
	export default {
		data(){
			return {
				navList : []
			}
		},
		components: {
			headerSwiper,
		},
		methods : {
			// 获取nav资源的函数
			_getNavSrc(){
				// https://locally.uieee.com
				this.$axios.get(this.HOST + '/categories').then(res=>{
					// console.log(res)
					this.navList = res.data;
				})
			}
		},
		created(){
			this._getNavSrc()
		}
	}
</script>

<style scoped="scoped">
	.nav-container{
		display: flex;
		flex-wrap: wrap;
	}
</style>
