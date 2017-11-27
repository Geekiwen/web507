<template>
	<div class="chooser-component">
		<ul class="chooser-list">
			<li @click="chooseTimer(index)" :class="{active:index == nowIndex}" v-for="(timer,index) in timers">{{ timer.name }}</li>
		</ul>
	</div>
</template>
<script>
	
export default{
	name:"timer",
	data(){
		return{
			nowIndex:0
		}
	},
	props:{
		timers:{
			type:Array,
			default:function(){
				return[
				{
					name:"test",
					value:0
				}]
			}
		}
	},
	methods:{
		chooseTimer(index){
			this.nowIndex = index;
			this.$emit("timerEvent",this.timers[index].value);
		}
	}
}	

</script>
<style scoped>
	

.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}		

</style>