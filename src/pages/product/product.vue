<template>
	<div class="detail-wrap">
		<div class="detail-left">
			<div class="product-board">
				<img :src="getUrl" alt="">
				<ul>
					<router-link :key="index" active-class="active" :to="'/product/'+nav.id" tag="li" v-for="(nav,index) in navList">{{ nav.name }}</router-link>
				</ul>
			</div>
		</div>
		<div class="detail-right">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	
export default{
	name:"product",
	data(){
		return{
			navList:[
				{
					name:"数据统计",
					id:"beauty"
				},
				{
					name:"数据预测",
					id:"cake"
				},
				{
					name:"流量分析",
					id:"jewellery"
				},
				{
					name:"广告发货",
					id:"pet"
				}
			],
			imgUrl:{
				"/product/cake":require("../../assets/images/1.png"),
				"/product/beauty":require("../../assets/images/2.png"),
				"/product/jewellery":require("../../assets/images/3.png"),
				"/product/pet":require("../../assets/images/4.png")
			}
		}
	},
	computed:{
		getUrl(){
			return this.imgUrl[this.$route.path]
		}
	}
}	

</script>
<style>
	
.detail-wrap {
  width:1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
}
.detail-left {
  float: left;
  width: 200px;
  text-align: center;
}
.detail-right {
  float: left;
  width: 980px;
  margin-left: 20px;
}
.product-board {
  background: #fff;
  padding: 20px 0;
}
.product-board ul {
  margin-top: 20px;
}
.product-board li {
  text-align: left;
  padding: 10px 15px;
  cursor: pointer;
}
.product-board li.active,
.product-board li:hover {
  background: #4fc08d;
  color: #fff;
}
.product-board li a {
  display: block;
}

</style>