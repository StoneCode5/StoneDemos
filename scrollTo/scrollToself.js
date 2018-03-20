/**
	* 平滑滚动到指定位置
	* @param : target string||object 
	* @example : $.scrollTo($('#desID'));
	* 	     $.scrollTo('300px');
	* 	     $scrollTo('300px');
	* @version 1.0
	* @date 2015-10-19 15:09:57
	* @author YJC
	* @github https://github.com/52fhy/scrollTo
	*/
; (function (window) {
	'use strict';
	var scrollTo;
	var timer = null;
	var scrollTop = 0;
	window.onscroll = function () {
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 获取当前滚动条的位置 滚动一次
		console.log('here', scrollTop)
	};
	scrollTo = function (target, time) {
		// destOffsetTop赋值
		var destOffsetTop = 0;
		if (typeof target == 'string') {
			destOffsetTop = parseInt(target);
		} else if (typeof target.offset == 'function') {
			var destOffsetTopObj = target.offset();
			destOffsetTop = destOffsetTopObj.top;
		} else {
			throw 'param target error!';
		}
		clearInterval(timer);
		if (time == undefined) {
			timer = setInterval(function () {
				var nowPos = scrollTop; // 当前位置不断在变
				console.log('scrollTop', scrollTop)
				var speed = (destOffsetTop - nowPos) / 10;// 差值不断变小，所以后面会越来越慢
				// debugger
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if (scrollTop == destOffsetTop) {
					clearInterval(timer);
				}
				document.documentElement.scrollTop = scrollTop + speed;
				document.body.scrollTop = scrollTop + speed;
			}, 20);
		} else {
			var startPosY = document.documentElement.scrollTop || document.body.scrollTop
			var distance = destOffsetTop - startPosY
			distance = distance > 0 ? Math.ceil(distance) : Math.floor(distance)			
			var cellDistance = distance / (time / 20)
			var i = 0
			var now = null
			timer = setInterval(function () {
				now = document.documentElement.scrollTop || document.body.scrollTop
				i++				
				if(i == time / 20){
					clearInterval(timer)
				}
				window.scrollBy(0, cellDistance)
			}, 20)
		}
	};
	window.scrollTo = scrollTo; //支持$scrollTo('300px');纯js用法
})(window);

