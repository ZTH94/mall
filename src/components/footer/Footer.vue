<template>
	<div class="footer">
		<ul>
			<li
				v-for="(list, index) in classType"
				@click="gotoAddress(list.path, index)"
				:class="{ show: list.classShow }"
				:key="list.id"
			>
				<i :class="list.className"></i>
				<div>{{ list.typeName }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			classType: [
				{
					path: { path: '/Login' },
					classShow: true,
					className: 'el-icon-phone-shouye2',
					typeName: '首页'
				},
				{
					path: { path: '/Like' },
					classShow: false,
					className: 'el-icon-phone-sousuoremenfenlei',
					typeName: '分类'
				},
				{
					path: { path: '/ClassifyInfo' },
					classShow: false,
					className: 'el-icon-phone-faxian2',
					typeName: '发现'
				},
				{
					path: { path: '/GouBack' },
					classShow: false,
					className: 'el-icon-phone-gouwuche1',
					typeName: '购物车'
				},
				{
					path: { path: '/MyCenter' },
					classShow: false,
					className: 'el-icon-phone-wode2',
					typeName: '我的'
				}
			],
			className: [
				{ show: 'el-icon-phone-shouye', hide: 'el-icon-phone-shouye2' },
				{ show: 'el-icon-phone-sousuoremenfenleie', hide: 'el-icon-phone-fenlei1' },
				{ show: 'el-icon-phone-faxian2', hide: 'el-icon-phone-faxian1' },
				{ show: 'el-icon-phone-gouwuche1', hide: 'el-icon-phone-ziyuan' },
				{ show: 'el-icon-phone-wode2', hide: 'el-icon-phone-wode1' }
			]
		};
	},
	methods: {
		gotoAddress(path, index) {
			this.$router.push(path);
			this.classType.map(item => {
				item.classShow = false;
			});
			this.classType[index].classShow = true;
			this.classType[index].className = this.className[index].hide;
		}
	}
};
</script>

<style lang="scss" scoped>
.footer {
	border-top: 1px solid #eee;
	padding: 5px 0;
	width: 100%;
	position: fixed;
	bottom: 0;
	ul {
		width: 100%;
		li {
			width: 20%;
			text-align: center;
			float: left;
			cursor: pointer;
		}
	}
}
.show {
	color: blue;
}
</style>
