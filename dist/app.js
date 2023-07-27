/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
document.addEventListener("DOMContentLoaded", function() {
	// 获取图片元素
	var image1 = document.getElementById("image1");
	var image2 = document.getElementById("image2");
    
	// 使用 Anime.js 创建旋转动画
	//anime({
	//targets: [image1,image2],
	//rotate: '1turn', // 旋转一周 (360度)
	//duration: 5000, // 动画持续时间为 5 秒
	//easing: 'linear', // 使用线性缓动函数控制动画速度
	//translateX: '100px', // 将球体向右移动 500px
    	//translateY: '200px', // 向下移动 200px
    	//duration: 5000, // 动画持续时间为 1 秒
    	//easing: 'easeOutQuad', // 使用缓动函数控制动画速度
    	//direction: 'alternate', // 反向播放动画
	//loop: true // 循环播放动画
	//});
		// 使用 Anime.js 创建不规则运动动画
	anime({
	targets: [image1,image2],
		translateX: function() {
		    return anime.random(-250, 250); // 随机生成 translateX 值
		},
		translateY: function() {
		    return anime.random(-250, 250); // 随机生成 translateY 值
		},
		duration: function() {
		    return anime.random(1000, 3000); // 随机生成动画持续时间
		},
		  easing: 'easeInOutQuad', // 使用缓动函数控制动画速度
		complete: function() {
		    // 动画完成后重新执行动画
		animateImage();
		}
		});
	    
		// 执行动画函数
	function animateImage() {
		anime({
			targets: [image1],
		translateX: function() {
			return anime.random(-250, 250); // 随机生成 translateX 值
		    },
		    translateY: function() {
			return anime.random(-250, 250); // 随机生成 translateY 值
		    },
		    duration: function() {
			return anime.random(1000, 3000); // 随机生成动画持续时间
		    },
		    easing: 'easeInOutQuad', // 使用缓动函数控制动画速度
		    complete: function() {
			// 动画完成后重新执行动画
			animateImage();
		    }
		  });
		}
	    
		// 第一次执行动画
		animateImage();
	    });
    
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsdUNBQXVDO0FBQ3ZDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxPQUFPO0FBQ1A7QUFDQSxtQ0FBbUM7QUFDbkMsT0FBTztBQUNQO0FBQ0Esb0NBQW9DO0FBQ3BDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG5cdC8vIOiOt+WPluWbvueJh+WFg+e0oFxuXHR2YXIgaW1hZ2UxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZTFcIik7XG5cdHZhciBpbWFnZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlMlwiKTtcbiAgICBcblx0Ly8g5L2/55SoIEFuaW1lLmpzIOWIm+W7uuaXi+i9rOWKqOeUu1xuXHQvL2FuaW1lKHtcblx0Ly90YXJnZXRzOiBbaW1hZ2UxLGltYWdlMl0sXG5cdC8vcm90YXRlOiAnMXR1cm4nLCAvLyDml4vovazkuIDlkaggKDM2MOW6pilcblx0Ly9kdXJhdGlvbjogNTAwMCwgLy8g5Yqo55S75oyB57ut5pe26Ze05Li6IDUg56eSXG5cdC8vZWFzaW5nOiAnbGluZWFyJywgLy8g5L2/55So57q/5oCn57yT5Yqo5Ye95pWw5o6n5Yi25Yqo55S76YCf5bqmXG5cdC8vdHJhbnNsYXRlWDogJzEwMHB4JywgLy8g5bCG55CD5L2T5ZCR5Y+z56e75YqoIDUwMHB4XG4gICAgXHQvL3RyYW5zbGF0ZVk6ICcyMDBweCcsIC8vIOWQkeS4i+enu+WKqCAyMDBweFxuICAgIFx0Ly9kdXJhdGlvbjogNTAwMCwgLy8g5Yqo55S75oyB57ut5pe26Ze05Li6IDEg56eSXG4gICAgXHQvL2Vhc2luZzogJ2Vhc2VPdXRRdWFkJywgLy8g5L2/55So57yT5Yqo5Ye95pWw5o6n5Yi25Yqo55S76YCf5bqmXG4gICAgXHQvL2RpcmVjdGlvbjogJ2FsdGVybmF0ZScsIC8vIOWPjeWQkeaSreaUvuWKqOeUu1xuXHQvL2xvb3A6IHRydWUgLy8g5b6q546v5pKt5pS+5Yqo55S7XG5cdC8vfSk7XG5cdFx0Ly8g5L2/55SoIEFuaW1lLmpzIOWIm+W7uuS4jeinhOWImei/kOWKqOWKqOeUu1xuXHRhbmltZSh7XG5cdHRhcmdldHM6IFtpbWFnZTEsaW1hZ2UyXSxcblx0XHR0cmFuc2xhdGVYOiBmdW5jdGlvbigpIHtcblx0XHQgICAgcmV0dXJuIGFuaW1lLnJhbmRvbSgtMjUwLCAyNTApOyAvLyDpmo/mnLrnlJ/miJAgdHJhbnNsYXRlWCDlgLxcblx0XHR9LFxuXHRcdHRyYW5zbGF0ZVk6IGZ1bmN0aW9uKCkge1xuXHRcdCAgICByZXR1cm4gYW5pbWUucmFuZG9tKC0yNTAsIDI1MCk7IC8vIOmaj+acuueUn+aIkCB0cmFuc2xhdGVZIOWAvFxuXHRcdH0sXG5cdFx0ZHVyYXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdCAgICByZXR1cm4gYW5pbWUucmFuZG9tKDEwMDAsIDMwMDApOyAvLyDpmo/mnLrnlJ/miJDliqjnlLvmjIHnu63ml7bpl7Rcblx0XHR9LFxuXHRcdCAgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsIC8vIOS9v+eUqOe8k+WKqOWHveaVsOaOp+WItuWKqOeUu+mAn+W6plxuXHRcdGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcblx0XHQgICAgLy8g5Yqo55S75a6M5oiQ5ZCO6YeN5paw5omn6KGM5Yqo55S7XG5cdFx0YW5pbWF0ZUltYWdlKCk7XG5cdFx0fVxuXHRcdH0pO1xuXHQgICAgXG5cdFx0Ly8g5omn6KGM5Yqo55S75Ye95pWwXG5cdGZ1bmN0aW9uIGFuaW1hdGVJbWFnZSgpIHtcblx0XHRhbmltZSh7XG5cdFx0XHR0YXJnZXRzOiBbaW1hZ2UxLGltYWdlMl0sXG5cdFx0dHJhbnNsYXRlWDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gYW5pbWUucmFuZG9tKC0yNTAsIDI1MCk7IC8vIOmaj+acuueUn+aIkCB0cmFuc2xhdGVYIOWAvFxuXHRcdCAgICB9LFxuXHRcdCAgICB0cmFuc2xhdGVZOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBhbmltZS5yYW5kb20oLTI1MCwgMjUwKTsgLy8g6ZqP5py655Sf5oiQIHRyYW5zbGF0ZVkg5YC8XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGR1cmF0aW9uOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBhbmltZS5yYW5kb20oMTAwMCwgMzAwMCk7IC8vIOmaj+acuueUn+aIkOWKqOeUu+aMgee7reaXtumXtFxuXHRcdCAgICB9LFxuXHRcdCAgICBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJywgLy8g5L2/55So57yT5Yqo5Ye95pWw5o6n5Yi25Yqo55S76YCf5bqmXG5cdFx0ICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vIOWKqOeUu+WujOaIkOWQjumHjeaWsOaJp+ihjOWKqOeUu1xuXHRcdFx0YW5pbWF0ZUltYWdlKCk7XG5cdFx0ICAgIH1cblx0XHQgIH0pO1xuXHRcdH1cblx0ICAgIFxuXHRcdC8vIOesrOS4gOasoeaJp+ihjOWKqOeUu1xuXHRcdGFuaW1hdGVJbWFnZSgpO1xuXHQgICAgfSk7XG4gICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9