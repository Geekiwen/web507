import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Product from "@/pages/product/product"
import Beauty from "@/pages/product/details/beauty"
import Cake from "@/pages/product/details/cake"
import Jewellery from "@/pages/product/details/jewellery"
import Pet from "@/pages/product/details/pet"

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'layout',
		component: Layout
	}, {
		path: "/product",
		name: "product",
		component: Product,
		redirect: "/product/beauty",
		children: [{
			path: "beauty",
			name: "beauty",
			component: Beauty
		}, {
			path: "cake",
			name: "Cake",
			component: Cake
		}, {
			path: "jewellery",
			name: "Jewellery",
			component: Jewellery
		}, {
			path: "pet",
			name: "Pet",
			component: Pet
		}]
	}]
})