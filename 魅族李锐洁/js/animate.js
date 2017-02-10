/*
 	动画函数：
 		dom:要运动的节点对象
 		o:{属性：目标值，属性：目标值....}  (透明度使用属性：opacity:100) 透明度的值是0-100；  里面的opacity 和  filter会自动做转换。
 		time:切换的频率，表示运动的快慢
 		fn：回调函数，在运动执行完毕后执行。
 */
function animate(dom, o,time,fn) {
				if(time==undefined){  //默认的切换频率
					time=10;
				}
				//dom.termId :为每一个运动的物体添加一个属于自己的线程标识
				clearInterval(dom.termId);

				dom.termId = setInterval(function() { //创建一个定时器，实现运动
					dom.isOver = true; //是否可以停止定時器
					for (var property in o) {
						if (property == "opacity") {//如果是透明度
							var currentValue = parseInt(getStylePropertyValue(dom, property) * 100); //当前样式属性的值		
						} else{//其他样式属性
							var currentValue = parseInt(getStylePropertyValue(dom, property)); ////当前样式属性的值
							
						}
						
						//速度   正速度  负速度
						var speed = (o[property] - currentValue) / 10;
						// 三元表达式  三目运算符
						speed = currentValue > o[property] ? Math.floor(speed) : Math.ceil(speed)

						currentValue += speed; //改变样式属性的值

						if (currentValue != o[property]) {
							dom.isOver = false; //標識不停止定時器
						}

						if (property == "opacity") {
							dom.style.opacity = currentValue / 100;
							dom.style.filter = 'alpha(opacity= ' + currentValue + ')';
						} else {
							dom.style[property] = currentValue + "px"; //改变物体的样式属性值		
						}

					}

					if (dom.isOver) {  //停止定时器
						clearInterval(dom.termId);
						if(fn){  //执行回调函数
							fn();
						}
					}

				}, time)  //基于切换的频率来改变运动的快慢

			}

			/*获取指定样式的属性值*/
			function getStylePropertyValue(dom, property) {
				if (window.getComputedStyle) { //標準瀏覽器
					//
					return getComputedStyle(dom, null)[property];
				} else {
					return dom.currentStyle[property]; //IE瀏覽器
				}
			}
		