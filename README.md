项目文件夹结构：
----build
----config
----node_modules
----src
--------assets
--------components(公用组件)
--------router
--------mian.js
--------App.vue (初始化页面和样式)
--------pages(页面组件)
-------------childpages
------------------detailspages
----static
----.babelrc
......


双向数据绑定原理：
https://segmentfault.com/a/1190000006599500

新闻接口：
	http://www.wwtliu.com/sxtstu/news/juhenews.php
	请求类型：get
	参数：
		type：top(头条，默认),shehui(社会),guonei(国内),guoji(国际),yule(娱乐),tiyu(体育)junshi(军事),keji(科技),caijing(财经),shishang(时尚)
		count：数量：1~30
	返回值：
		{
		    "reason": "成功的返回",
		    "result": {
		        "stat": "1",
		        "data": [
		      {
		        "uniquekey": "6c4caa0c3ba6e05e2a272892af43c00e",
		        "title": "杨幂的发际线再也回不去了么？网友吐槽像半秃",
		        "date": "2017-01-05 11:03",
		        "category": "yule",
		        "author_name": "腾讯娱乐",
		        "url": "http://mini.eastday.com/mobile/170105110355287.html?qid=juheshuju",
		        "thumbnail_pic_s": "http://03.imgmini.eastday.com/mobile/20170105/20170105110355_
		806f4ed3fe71d04fa452783d6736a02b_1_mwpm_03200403.jpeg",
		        "thumbnail_pic_s02": "http://03.imgmini.eastday.com/mobile/20170105/20170105110355_
		806f4ed3fe71d04fa452783d6736a02b_2_mwpm_03200403.jpeg",
		        "thumbnail_pic_s03": "http://03.imgmini.eastday.com/mobile/20170105/20170105110355_
		806f4ed3fe71d04fa452783d6736a02b_3_mwpm_03200403.jpeg"
		    },
		...]}}