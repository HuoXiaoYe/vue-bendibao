<template>
	<div class="swiper-container" v-if='bannerList.length>0'>
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide v-for="item of bannerList" :key="item.id"><img :src="item.image"></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
			<!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
		</swiper>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bannerList: [],
				swiperOption: {
					loop: true,
					/* direction: 'vertical', */
					observer: true, //修改swiper自己或子元素时，自动初始化swiper 
					observeParents: true, //修改swiper的父元素时，自动初始化swiper 
					autoplay: {
						delay: 2000,
						disableOnInteraction: false
					}
				}
			}
		},
		methods: {
			// 获取轮播图的函数
			_getBannerSrc() {
				this.$axios.get(this.HOST + '/slides').then(res => {
					this.bannerList = res.data;
				})
			}
		},
		created() {
			this._getBannerSrc()
		}
	}
</script>

<style>
	.swiper-container{
		height: 4rem;
	}
	.swiper-container img {
		width: 100%;
		height: 4rem;
		padding-bottom: 4rem;
	}
</style>
