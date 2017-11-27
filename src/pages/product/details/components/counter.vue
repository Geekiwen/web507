<template>
	<div class="counter-component">
		<div class="counter-btn" @click="minus"> - </div>		
		<div class="counter-show">
			<input type="text" v-model="num" @keyup="getNumber">
		</div>
		<div class="counter-btn" @click="adds"> + </div>
	</div>
</template>
<script>

export default {
	name:"counter",
	data(){
		return{
			num:1
		}
	},
	props:{
		max:{
			type:Number,
			default:10
		},
		min:{
			type: Number,
			default:1
		}
	},
	methods:{
		minus(event){
			if(this.num <= this.min){
				return;
			}
			this.num--

			// 传数据给父级
			this.$emit("counterEvent",this.num);
		},
		adds(event){
			if(this.num >= this.max){
				return;
			}
			this.num++
			// 传数据给父级
			this.$emit("counterEvent",this.num);
		},
		getNumber(event){
			// 快速输入
			let finalNum;
			if(typeof this.num === "string"){
				finalNum = Number(this.num.replace(/\D/g,""));
			}else{
				finalNum = this.num;
			}
			if(finalNum > this.max || finalNum<this.min){
				finalNum = this.min;
			}
			this.num = finalNum;
			// 传数据给父级
			this.$emit("counterEvent",this.num);
		}
	}
}
	
</script>
<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 4px;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}		
</style>