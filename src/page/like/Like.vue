<template>
	<div class="hello">
		<div class="swiper-container">
			<h2>猜你喜欢</h2>
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img src="../../assets/1.jpg">
					<div>
						<p class="name">魅蓝3</p>
						<p class="price">￥566</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="../../assets/1.jpg">
					<div>
						<p class="name">魅蓝5</p>
						<p class="price">￥586</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="../../assets/1.jpg">
					<div>
						<p class="name">魅蓝3</p>
						<p class="price">￥566</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="../../assets/1.jpg">
					<div>
						<p class="name">魅蓝3</p>
						<p class="price">￥566</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="../../assets/1.jpg">
					<div>
						<p class="name">魅蓝3</p>
						<p class="price">￥566</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="../../assets/1.jpg">
					<div>
						<p class="name">魅蓝3</p>
						<p class="price">￥566</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="../../assets/1.jpg">
					<div>
						<p class="name">魅蓝3</p>
						<p class="price">￥566</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import 'swiper-css';
import Swiper from 'swiper-js';
export default {
	name: 'Like',
	data() {
		return {
			msg: '发现'
		};
	},
	mounted() {
		var mySwiper = new Swiper('.swiper-container', {
			freeMode:false,
			slidesPerView: 3,
		});
	}
};
</script>

<style lang="scss" scoped>
.swiper-container {
	width: 100%;
	background-color: rgb(244,244,244);
	h2{
		text-align: center;
		&:after{
			content: '\2013';
			display: block;
			color:blue;
			height: 15px;
			line-height: 15px;
		}
	}
	.swiper-slide {
		margin-left: 5px;
		width: 100%;
		div{
			background-color: white;
			padding-left: 5px;
		}
		img{
			width: 100%;
			height: 80%
		}
		.price{
			color:red;
			font-size: 1.1rem;
			font-weight: bolder;
		}
		.name{
			font-size: 1.3rem;
			margin-bottom: 15px;
		}
	}
}
</style>
