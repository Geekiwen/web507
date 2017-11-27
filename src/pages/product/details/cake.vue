<template>
	<div>
		cake
		{{ getPrice }}
	</div>
</template>
<script>
	
export default{
	name:"cake",
	data(){
		return{
			
		}
	},
	computed:{
		getPrice(){
      		return this.$store.getters.getTotalPrice;
    	}
	}
}	

</script>
<style>


</style>