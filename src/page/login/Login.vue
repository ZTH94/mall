<template>
	<div class="login">
		<img src="../../../build/logo.png" />
		<el-form
			:model="ruleForm2"
			status-icon
			:rules="rules2"
			ref="ruleForm2"
			label-width="100px"
			class="demo-ruleForm"
			style="padding-right: 40px;"
		>
			<el-form-item label="用户名" prop="phone">
				<el-input placeholder="手机号" v-model="ruleForm2.phone"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="pass">
				<el-input
					placeholder="密码"
					type="password"
					v-model="ruleForm2.pass"
					autocomplete="off"
				></el-input>
			</el-form-item>
			<el-button class="submit" type="primary" @click="submitForm('ruleForm2')"
				>提交</el-button
			>
		</el-form>
		<div class="register clearfix">
			<div>注册</div>
			<div>忘记密码</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'));
			} else {
				callback();
			}
		};
		var checkPhone = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入手机号'));
			} else {
				callback();
			}
		};
		return {
			ruleForm2: {
				pass: '',
				phone: ''
			},
			rules2: {
				pass: [{ validator: validatePass, trigger: 'blur' }],
				phone: [{ validator: checkPhone, trigger: 'blur' }]
			}
		};
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					alert('submit!');
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.login {
	text-align: center;
	.submit {
		width: 90%;
		margin-left: 35px;
		margin-top: 30px;
		margin-bottom: 30px;
	}
	.register {
		display: flex;
		justify-content: space-between;
		div {
			color: blue;
			font-size: 1.2rem;
			width: 40%;
			&:first-child {
				text-align: left;
			}
			&:last-child {
				text-align: right;
			}
		}
	}
}
</style>
