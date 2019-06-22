<template>
	<div class="shop-concainer" ref="concainer">
		<ul class="shop-list">
			<li class="shop-item" v-for="item of goodList" :key="item.id">
				<img :src="item.images[0]">
				<div class="desc">
					<p class="title">店铺名称:{{item.name}}</p>
					<p class="tel">电话：{{item.phone}}</p>
					<p class="addr">地址：{{item.address}}</p>
					<p class="time">营业时间：{{item.businessHours}}</p>
				</div>
				<div class="star">
					<p class="back">★★★★★</p>
					<p class="front" :style="'width: '+item.score+'%;'">★★★★★</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				id: this.$route.params.id,
				goodList: [],
				scroll : ''
			}
		},
		methods: {
			_getData() {
				// https://locally.uieee.com/categories/" + this.data.catId + "/shops   _limit: this.data.pageSize, _page: ++this.data.pageIndex
				this.$axios.get(this.HOST + "/categories/" + this.id + "/shops?_limit=20&_page=1").then(res => {
					// console.log(res)
					this.goodList = res.data;
				}).catch(err => {
					console.log(err)
				})
			},
			_initScroll(){
				this.scroll = new BScroll(this.$refs.concainer,{
					click : true
				})
			}
		},
		created() {
			this._getData()
		},
		mounted(){
			
			this._initScroll()
		}
	}
</script>

<style scoped="scoped">
	.shop-concainer {
		width: 100%;
		position: absolute;
		top: .8rem;
		bottom: 1rem;
		/* height: 1rem; */
		overflow: hidden;
	}

	.shop-concainer .shop-list {
		/* padding-top: .2rem; */
		width: 100%;
	}

	.shop-concainer .shop-list .shop-item {
		width: 100%;
		display: flex;
		position: relative;
		z-index: 999;
		padding-bottom: .2rem;
		border-bottom: 1px solid #ccc;
	}

	.shop-concainer .shop-list .shop-item img {
		width: 1.6rem;
		height: 1.6rem;
		margin-top: .2rem;
		margin-left: .2rem;
		border-radius: .2rem;
	}

	.shop-concainer .shop-list .shop-item .desc {
		padding-top: .24rem;
		padding-left: .1rem;
		line-height: .38rem;
		font-size: .28rem;
		color: #999;
	}

	.shop-concainer .shop-list .shop-item .desc .title {
		font-size: .34rem;
		color: #000;
		line-height: .44rem;
		width: 3.6rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.shop-concainer .shop-list .shop-item .desc .addr{
		width: 4.6rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.shop-concainer .shop-list .shop-item .star {
		width: 1.78rem;
		position: absolute;
		top: .2rem;
		right: .2rem;
		overflow: hidden;
		font-size: .44rem;
		color: #f60;
	}

	.shop-concainer .shop-list .shop-item .star .back {
		position: absolute;
		color: #ccc;
		z-index: -1;
	}

	.shop-concainer .shop-list .shop-item .star .front {
		/* position: absolute; */
		overflow: hidden;
		color: #f60;
	}
</style>
