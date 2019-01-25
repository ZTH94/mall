<template>
	<div class="gou-back"><i @click="$router.go(-1)" class="el-icon-arrow-left"></i></div>
</template>

<script>
export default {
	name: 'GouBack'
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
