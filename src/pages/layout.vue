<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
				<h2>全部产品</h2>
				<template v-for="(borad,index) in boardList">
					<h3>{{ borad.title }}</h3>
					<ul>
						<li v-for="(list,index) in borad.list">
							<a target="_blank" :href="list.url">{{ list.name }}</a>
							<span v-if="list.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
					<div v-if="index%2 == 0" class="hr"></div>
				</template>
			</div>
			<div class="index-left-block">
				<h2>最新消息</h2>
				<ul>
					<li v-for="(item,index) in news">
						<a target="_blank" :href="item.url">{{ item.author_name }}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="index-right">
			<div class="block">
				<swiper :options="swiperOption">
			      <swiper-slide>
			        <img src="../assets/slideShow/j1.jpg" alt="">
			      </swiper-slide>
			      <swiper-slide>
			        <img src="../assets/slideShow/j2.jpg" alt="">
			      </swiper-slide>
			      <swiper-slide>
			        <img src="../assets/slideShow/j3.jpg" alt="">
			      </swiper-slide>
			      <swiper-slide>
			        <img src="../assets/slideShow/j4.jpg" alt="">
			      </swiper-slide>
			      <div class="swiper-pagination"  slot="pagination"></div>
			      <div class="swiper-button-prev" slot="button-prev"></div>
			      <div class="swiper-button-next" slot="button-next"></div>
			    </swiper>
			</div>
			<div class="index-board-list">
				<div class="index-board-item" :class="['index-board-' + product.id , index%2!=0 ? 'line-last' : '']" v-for="(product,index) in productList">
					<!-- class="['index-board-'+borad.id ,{'line-last' : index%2 !== 0}]" -->
					<div class="index-board-item-inner">
						<h2>{{ product.title }}</h2>
						<p>{{ product.desc }}</p>
						<div class="index-board-button">
							<router-link :to="{path:'/product/'+product.id}" class="button">立即购买</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// 视图受数据影响，而非数据受视图影响
	
export default{
	name:"layout",
	data(){
		return{
			swiperOption: {
	          autoplay: 3000,
	          grabCursor: true,
	          setWrapperSize: true,
	          autoHeight: true,
	          pagination: '.swiper-pagination',
	          paginationClickable: true,
	          prevButton: '.swiper-button-prev',
	          nextButton: '.swiper-button-next',
	          observeParents: true,
	          loop:true,
	        },
			boardList:[
				{
					title:"手机应用类",
					list:[
					{
						name:"91助手",
						url:"http://www.baidu.com"
					},
					{
						name:"豌豆荚",
						url:"http://www.baidu.com",
						hot:true
					},
					{
						name:"金山毒霸",
						url:"http://www.baidu.com"
					}]
				},
				{
					title:"PC产品",
					list:[
					{
						name:"Webstorm",
						url:"http://www.baidu.com"
					},
					{
						name:"Sublime",
						url:"http://www.baidu.com",
						hot:true
					},
					{
						name:"Hbuilder",
						url:"http://www.baidu.com"
					},{
						name:"Atom",
						url:"http://www.baidu.com"
					}]
				}
			],
			news:[],
			productList:[
			{
				title:"开放产品",
				desc:"开放产品是一款开放产品",
				id:"beauty"
			},
			{
				title:"品牌营销",
				desc:"品牌营销帮助你的产品更好地找到定位",
				id:"jewellery"
			},
			{
				title:"使命必达",
				desc:"使命必达快速迭代永远保持最前端的速度",
				id:"cake"
			},
			{
				title:"勇攀高峰",
				desc:"帮你勇闯高峰，到达事业的顶峰",
				id:"pet"
			}]
		}
	},
	created(){
		// 网络请求
		this.$axios.get("http://www.wwtliu.com/sxtstu/news/juhenews.php",{
			params:{
				type:"junshi",
				count:10
			}
		})
		.then(res => {
			console.log(res.data);
			this.news = res.data;
		})
		.catch(error => {
			console.log(error);
		})
	}
}	

</script>
<style scoped>

.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  min-height: 350px;
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
  height: 1px;
  background: #ddd;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-cake .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-jewellery .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-beauty .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-pet .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 350px;
}
.hot-tag {
  background: red;
  color: #fff;
  font-size: 12px;
  border-radius: 5px;
  padding: 2px 5px;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}

/* element轮播图样式 */
.swiper-container{
    height:350px;
    width:900px;  
    margin:15px auto;
}

.swiper-slide{
    height:350px;
    width:900px;  
}
.swiper-slide img {
    color: #475669;
    font-size: 14px;
    line-height: 350px;
    height:350px;
    width:900px;
    margin: 0;
}
</style>