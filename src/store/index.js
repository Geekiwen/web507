import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		totalPrice: 100
	},
	mutations: {
		computePrice(state) {
			state.totalPrice = 200
		}
	},
	actions: {
		computePrice(context) {
			context.commit("computePrice");
		}
	},
	getters: {
		getTotalPrice(state) {
			if (state.totalPrice <= 0) {
				return;
			}
			return state.totalPrice;
		}
	}
})