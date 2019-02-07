<template>
	<div class="my-enter">
		<div class="login">
			<div class="install"><i class="el-icon-phone-shezhi"></i></div>
			<div class="user">
				<img src="../../assets/user.png" class="user-pic" />
				<p class="user-go">点击登录</p>
			</div>
		</div>
		<div class="my-order">
			<div class="order">
				<p class="title">我的订单</p>
				<p>
					<span>查看全部订单</span>
					<i class="el-icon-arrow-right"></i>
				</p>
			</div>
			<div class="state">
				<div>
					<i class="el-icon-phone-icon-test"></i>
					<p>待付款</p>
				</div>
				<div>
					<i class="el-icon-phone-daifahuo"></i>
					<p>待发货</p>
				</div>
				<div>
					<i class="el-icon-phone-gerenzhongxindingdandaishouhuo"></i>
					<p>待收货</p>
				</div>
			</div>
		</div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div
					class="swiper-slide"
					style="background-color: skyblue;height: 80px;width: 100%;"
				></div>
				<div
					class="swiper-slide"
					style="background-color: orangered;height: 80px;width: 100%;"
				></div>
				<div
					class="swiper-slide"
					style="background-color: brown;height: 80px;width: 100%;"
				></div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<div class="function">
			<div><span>手机号查询订单</span><i class="el-icon-arrow-right"></i></div>
			<div><span>会员中心</span><i class="el-icon-arrow-right"></i></div>
			<div><span>服务中心</span><i class="el-icon-arrow-right"></i></div>
			<div><span>意见反馈</span><i class="el-icon-arrow-right"></i></div>
			<div><span>收货地址</span><i class="el-icon-arrow-right"></i></div>
		</div>
	</div>
</template>

<script>
import 'swiper-css';
import Swiper from 'swiper-js';
export default {
	name: 'MyCenter',
	data() {
		return {};
	},
	mounted() {
		var mySwiper = new Swiper('.swiper-container', {
			autoplay: true,
			loop: true,
			pagination: {
				el: '.swiper-pagination'
			}
		});
	}
};
</script>

<style lang="scss" scoped>
.my-enter {
	height: 100%;
	background-color: rgb(229, 229, 229);
	width: 100%;
	.login {
		height: 150px;
		width: 100%;
		background-color: rgb(0, 169, 228);
		.install {
			padding-top: 5px;
			padding-right: 5px;
			float: right;
			.el-icon-phone-shezhi {
				font-size: 2rem;
				color: white;
			}
		}
		.user {
			text-align: center;
			img {
				margin-top: 20px;
				margin-left: 30px;
				width: 80px;
				height: 80px;
				border-radius: 50%;
			}
			p {
				color: white;
				margin-top: 10px;
				font-size: 1.1rem;
			}
		}
	}
	.my-order {
		margin: 10px 0;
		background-color: white;
		.order {
			height: 40px;
			line-height: 40px;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #eee;
			.title {
				font-size: 1rem;
				font-weight: bold;
				padding-left: 20px;
				color: #eee * 1/6;
			}
			p {
				padding-right: 10px;
				span {
					color: #eee * 1/2;
					font-size: 0.8rem;
				}
			}
		}
		.state {
			display: flex;
			justify-content: space-around;
			padding: 10px 0;
			color: #eee * 1/3;
			div {
				i {
					font-size: 2rem;
					padding-left: 5px;
				}
				p {
					font-size: 1rem;
				}
			}
		}
	}
	.swiper-container {
	}
	.function{
		margin-top: 10px;
		background-color: white;
		div{
			height: 40px;
			line-height: 40px;
			display: flex;
			justify-content: space-between;
			padding: 0 20px;
			border-bottom: 1px solid #eee;
			i{
				padding-top: 10px;
			}
		}
	}
}
</style>
