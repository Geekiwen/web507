<template>
	<div class="header">
		<div class="app-head">
			<div class="app-head-inner">
				<router-link to="/">
					<img src="../assets/logo.png" />
				</router-link>
				<span>尚学堂旗下品牌：云数学院|速学堂|百战程序员|优效学院线上培训- 优效聚名师，学习更有效</span>
				<div class="head-nav">
					<ul class="nav-list" v-if="!isLogin">
						<li @click="dialogVisible">登陆</li>
						<li class="nav-pile">|</li>
						<li @click="dialogVisible">注册</li>
						<li class="nav-pile">|</li>
						<li>关于</li>
					</ul>
					<ul class="nav-list" v-else>
						<li @click="dialogVisible">{{ nick }}</li>
						<li class="nav-pile">|</li>
						<li @click="dialogVisible">个人中心</li>
						<li class="nav-pile">|</li>
						<li @click="logout">退出</li>
					</ul>
				</div>
			</div>
			<el-dialog
			  title="登陆注册"
			  :visible.sync="flag">

			  <el-tabs v-model="activeName" @tab-click="clicktab">
			    <el-tab-pane label="登陆" name="login">
			    	<el-form ref="form" :model="form">
						 <el-form-item label="用户名">
						    <el-input v-model="form.username"></el-input>
						 </el-form-item>
						 <el-form-item label="密码">
						    <el-input v-model="form.password"></el-input>
						 </el-form-item>
						  <el-button type="primary" @click="onSubmit">立即登陆</el-button>
			    	</el-form>
			    </el-tab-pane>
			    <el-tab-pane label="注册" name="reg">
			    	<el-form ref="form" :model="form">
						 <el-form-item label="用户名">
						    <el-input v-model="form.reusername"></el-input>
						 </el-form-item>
						 <el-form-item label="密码">
						    <el-input v-model="form.repassword"></el-input>
						 </el-form-item>
						  <el-button type="primary" @click="onSubmit">立即注册</el-button>
			    	</el-form>
			    </el-tab-pane>
			  </el-tabs>

			  <span slot="footer" class="dialog-footer">
			    <el-button @click="flag = false">取 消</el-button>
			    <el-button type="primary" @click="flag = false">确 定</el-button>
			  </span>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	
export default{
	name:"header",
	data(){
		return{
			flag:false,
			activeName:"login",
			isLogin:false,
			nick:"",
			form: {
	          username: '',
	          password: '',
	          reusername:"",
	          repassword:""
	        }
		}
	},
	methods:{
		dialogVisible(event){
			this.flag = true;
		},
		clicktab(tab, event){
			console.log(tab,event);
		},
		onSubmit(event){
			// 登陆处理
			this.$axios.post("http://localhost:3000/login",{
				username:this.form.username
			})
			.then(res => {
				this.flag = false;
				console.log(res.data);
				if(res.data.length>0){
					this.isLogin = true;
					this.nick = res.data[0].username;
				}else{
					alert("登陆失败")
				}
			})
			.catch(error => {
				console.log(error);
			})
		},
		logout(event){
			this.isLogin = false;
		}
	}
}	

</script>
<style scoped>

.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}

</style>