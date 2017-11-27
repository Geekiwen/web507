// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('swiper/dist/css/swiper.css')
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import store from "./store"
import qs from "qs"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {
	Dialog,
	Button,
	Tabs,
	TabPane,
	Form,
	Input,
	FormItem
} from 'element-ui'


Vue.use(VueAwesomeSwiper)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.prototype.$axios = Axios;
Vue.config.productionTip = false

Axios.interceptors.request.use(function(config) {
	if (config.method == "post") {
		config.data = qs.stringify(config.data);
	}
	return config;
}, function(error) {
	return Promise.reject(error);
});

Axios.interceptors.response.use(function(response) {
	return response;
}, function(error) {
	return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})