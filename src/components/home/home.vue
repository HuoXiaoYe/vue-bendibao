<template>
	<div class="home-container">
		<!-- 顶部轮播图区域 -->
		<header-swiper></header-swiper>
		<!-- nav区域 -->
		<router-view></router-view>
		<ul class="nav-container">
			<router-link :to="'/home/shoplist/'+item.id" v-for="item of navList" class="item" :key="item.id">
				<img :src="item.icon">
				<p class="content">{{item.name}}</p>
			</router-link>
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
					this.navList = res.data.splice(0,8);
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
	.nav-container .item{
		width: 25%;
		padding-top: .28rem;
		padding-bottom: .28rem;
		text-align: center;
		position: relative;
		border-bottom: 1px solid #ccc;
	}
	.nav-container .item::after{
		content: "";
		width: 1px;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
	}
	.nav-container .item:nth-child(4n)::after{
		width: 0px;
	}
	.nav-container .item img{
		width: 1rem;
	}
	.nav-container .item .content{
		padding-top: .18rem;
	}
</style>
