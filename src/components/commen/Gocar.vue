<template>
	<div class="gou-back"><i @click="goCar()" class="el-icon-phone-gouwuche1"></i></div>
</template>

<script>
export default {
	name: 'Gocar',
	methods:{
		goCar(){
			console.log('ok')
		}
	}
};
</script>

<style lang="scss" scoped>
.gou-back {
	i {
		&:before {
			font-size: 50px;
			color: #fff;
			background-color: rgba(0,0,0,.2);
			border-radius: 50%;
		}
	}
}
</style>

