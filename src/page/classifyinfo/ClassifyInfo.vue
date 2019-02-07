<template>
	<div :id="maodian" class="classify-info">
		<h2>{{ className }}</h2>
		<ul>
			<li v-for="(list, index) in infoData" @click="toGoods(list)" :key="index">
				<img :src="list.src" />
				<p>{{ list.name }}</p>
			</li>
		</ul>
		<div class="view-more clearfix"><a href="javaScript:void(0)">查看更多</a></div>
	</div>
</template>

<script>
export default {
	name: 'Like',
	props: ['className','maodian'],
	data() {
		return {
			infoData: []
		};
	},
	mounted() {},
	methods: {
		toGoods(list) {
			console.log(list);
		}
	},
	created() {
		axios.get('../../../static/test.json').then(res => {
			this.infoData = res.data;
		});
	}
};
</script>

<style lang="scss" scoped>
.classify-info {
	width: 100%;
	text-align: center;
	h2 {
		font-size: 0.8rem;
		font-weight: normal;
		&:after {
			content: '\2013';
			display: block;
			font-size: 1.5rem;
			color: blue;
			height: 15px;
			line-height: 15px;
		}
	}
	ul {
		li {
			float: left;
			width: 33.33333%;
			img {
				width: 100%;
			}
		}
	}
	.view-more {
		width: 100%;
		padding-top: 20px;
		a{		
			display: inline-block;
			background-color: #eee;
			height: 35px;
			line-height: 35px;
			width: 100%;
			color: red;
		}
	}
}
</style>
