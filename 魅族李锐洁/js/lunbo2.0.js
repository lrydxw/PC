		/*
		 	id：表示轮播图大的容器，或者轮播图的唯一标识
		 */
		function LunBo(id,dataUrl){
			//轮播图大容器
			this.bigBox = document.getElementById(id);
			//左右移动的轮播容器
			/*this.rightBj = this.bigBox.querySelector(".right-bj");
			this.leftBj = this.bigBox.querySelector(".left-bj");*/
			
			this.innerBox = this.bigBox.querySelector(".inner-box");
			//左侧控制按钮
			this.left = this.bigBox.querySelector(".left1");
			//右侧控制按钮
			this.right = this.bigBox.querySelector(".right1");
			//存放小控制按钮的容器
			this._ul = this.bigBox.querySelector(".controls ul");
			this.lis = null;
			//当前控制轮播的索引，默认为0
			this.currentIndex = 1;
			this.itemCount = 0;  //轮播项的个数
			this.isContinue = true; //表示是否可以继续下一次轮播
			this.temId; //定时器线程标识
			this.dataUrl = dataUrl;
			this.inint();
		}
		
		LunBo.prototype = {
			inint:function(){
				this.getData();
				this.leftAndRigntControl();
				this.autoPlay();
				this.bindEventBigBox();
			},
			getData:function(){
				/*
				 * 异步请求后台数据
				*/
				var that = this;
				ajax({
					method:"get",
					url:this.dataUrl,
					success:function(data){
						var obj = JSON.parse(data);
						var arr = obj.datas;  //获取一组数据
						console.log(arr);
						that.itemCount = arr.length;
						
						that.createDivItemAndLi(arr);
					},
					error:function(mes){
						alert(mes)
					}
				})
			},
			/*
			 	动态拼接div-item轮播项和控制按钮项
			 */
			createDivItemAndLi:function(arr){
				var that = this;
				for(var i = 0;i<arr.length;i++){
					if(i==0){
						var firstDiv = document.createElement("div");
						firstDiv.className = "box-item";
						firstDiv.innerHTML = '<a href="'+arr[arr.length-1].target+'"><img src="'+arr[arr.length-1].imgSrc+'" /></a>';
						this.innerBox.appendChild(firstDiv);
						this.itemCount++;
					}
					/*动态创建div-item项*/
					var div = document.createElement("div");
					
					div.className = "box-item";
					div.innerHTML = '<a href="'+arr[i].target+'"><img src="'+arr[i].imgSrc+'" /></a>';
					this.innerBox.appendChild(div);
					/*为了实现循环轮播，需要设计追第一项为最后一项*/
					if(i==arr.length-1){
						var lastDiv = document.createElement("div");
						lastDiv.innerHTML = '<a href="'+arr[0].target+'"><img src="'+arr[0].imgSrc+'" /></a>';
						lastDiv.className = "box-item"
						this.innerBox.appendChild(lastDiv);
						this.itemCount++;
					}
					
					
					/*动态创建控制按钮项li*/
					var li = document.createElement("li");
					if(i==0){
						li.className = "active";
					}
					li.index = i;
					
					li.onclick = function(){
						//this
						that.currentIndex = this.index + 1;
						that.changLi();
						that.lunBo();
					}
					this._ul.appendChild(li);
					
					
				}
				//上面循环遍历完成之后，拿到所有li
				this.lis = this._ul.getElementsByTagName("li");
				
				this.innerBox.style.width = this.bigBox.offsetWidth * this.itemCount + "px";
				this.innerBox.style.left = -1*this.bigBox.offsetWidth + "px";
				
				
			},
			/*切换li，轮播图在轮播的时候，li也要相应的切换*/
			changLi:function(){
				
				for(var j = 0;j<this.lis.length;j++){
					//alert(this.lis.length)
					this.lis[j].className = "";
				}
				
				var liIndex = this.currentIndex;
				if(liIndex==this.itemCount-1){
					//0
					liIndex = 1;
				}
				if(liIndex==0){
					liIndex = this.itemCount-2;
					//0 1 2 3 4 5
					
				}
				this.lis[liIndex-1].className = "active";
			},		
			/*
			  封装后的轮播程序
			  根据索引发生轮播切换！
			*/
			lunBo:function(){
				var that = this;
				var x = -1*this.currentIndex*this.bigBox.offsetWidth; 
				if(this.currentIndex==0){ 
							animate(this.innerBox,{left:x},10,function(){
								//this
								//当运动完了之后，再开启下一次执行的开关
								that.isContinue = true;
								that.innerBox.style.left = -1*(that.itemCount-2)*that.bigBox.offsetWidth + "px";
								that.currentIndex = that.itemCount-2;
							})
					}else if(this.currentIndex==this.itemCount-1){ //最后项
						animate(this.innerBox,{left:x},10,function(){
							//当运动完了之后，再开启下一次执行的开关
							that.isContinue = true;
							that.innerBox.style.left = -1*that.bigBox.offsetWidth + "px";
							that.currentIndex = 1;
						})
					}else{
						animate(this.innerBox,{left:x},10,function(){
							//当运动完了之后，再开启下一次执行的开关
							that.isContinue = true;
						})
					}
					this.changLi();
			},
			/*左右按钮控制轮播*/
			leftAndRigntControl:function(){
				/*左边的控制按钮*/
				var that = this;
				this.left.onclick = function(){
					//this
					if(that.isContinue){
						that.isContinue = false;  //表示下次点不起效果
						that.currentIndex--;  //下一项
						that.lunBo();
					}
						
				}
			    /*左边的控制按钮*/
				this.right.onclick = function(){
					if(that.isContinue){
						that.isContinue = false;  //表示下次点不起效果
						that.currentIndex++;  //下一项
						that.currentIndex%=that.itemCount; //边界限定
						that.lunBo();
					}
	
					
					
				}
			},
			/*自动播放，就是开启一个定时器，每隔3秒钟轮播下一张*/
			autoPlay:function(){
				var that = this;
				this.temId = setInterval(function(){
				    //this  -- window
					that.right.onclick();
				},2000)
			},
			//BigBox 的 onmouseenter  和 onmouseleave
			bindEventBigBox:function(){
				/*当鼠标浮动到big_box上的时候，停止轮播*/
				var that = this;
				this.bigBox.onmouseenter = function(){
					/*this.rightBj.classname="right-bj active"*/
					clearInterval(that.temId);
				}
				/*当鼠标离开定时器的时候，开启轮播*/
				this.bigBox.onmouseleave = function(){
					that.autoPlay();
				}
			}
		}
		