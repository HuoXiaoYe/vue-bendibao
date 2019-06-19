<template>
	<!-- 底部导航组件 -->
		<ul class="footbar-container">
			<router-link class="item" tag="li" to="/home">
				<span class="iconfont">&#xe618;</span>
				<p class="content">首页</p>
			</router-link>
			<router-link class="item" tag="li" to="/message">
				<span class="iconfont">&#xe675;</span>
				<p class="content">消息</p>
			</router-link>
			<router-link class="item" tag="li" to="/mine">
				<span class="iconfont">&#xe617;</span>
				<p class="content">我的</p>
			</router-link>
			<router-link class="item" tag="li" to="/contact">
				<span class="iconfont">&#xe683;</span>
				<p class="content">联系我</p>
			</router-link>
		</ul>
</template>

<script>
</script>

<style scoped="scoped">
	.footbar-container{
		
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		border-top: 1px solid #ccc;
	}
	.footbar-container .item{
		/* 子绝父相定位 */
		position: relative;
		flex: 1;
		text-align: center;
		padding-bottom: .1rem;
		padding-top: .1rem;
		/* border-right: 1px solid #ccc; */
		font-size: .24rem;
		
	}
	/* // 使用伪元素给每一个item的右侧加上一条竖线 */
	.footbar-container .item::after{
		content: "";
		width: 1px;
		height: 80%;
		position: absolute;
		background-color: #ccc;
		right: 0;
		top: 10%;
	}
	.footbar-container .item:last-child::after{
		width: 0;
	}
	.footbar-container .item .content{
		padding-top: .14rem;
	}
</style>
