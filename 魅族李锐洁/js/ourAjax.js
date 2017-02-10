/*
	实现ajax的工具
	参数：
		method:请求方式
		url:请求的地址
		isAsyc:  是否异步  true,异步。false,同步。
		data: 表示传入的数据
		success:function(data){

		},
		error:function(message){}

		//{}  key:value
		o = {method:"get"}
		{}

		{
			method:"",
			url:"",
			isAsyc:true,
			
			data:{
					userName:"admin",
					pwd:"123",
					gender:true
			}
			success:function(){}
			error:function(){}

		}
*/
function ajax(o){
	var xr;  //创建ajax对象
	if(window.XMLHttpRequest){
			xr = new XMLHttpRequest();  //创建ajax对象
	}else{
		xr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(o.isAsyc==undefined){//若没有传isAsyc 默认为异步提交
		o.isAsyc = true; 
	}
	var params = getParames(o.data);
	if(o.method.toLowerCase()=="get"){  //get	请求
		var date = new Date();
		var time = date.getTime();
		
		//2.php?num=11111&userName=admin&pwd=123
		xr.open(o.method,o.url + "?num=" + time + "&" + params,o.isAsyc);
		xr.send();
	}else{ //post请求
		xr.open(o.method,o.url,o.isAsyc);
		xr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');  //模拟表单提交
		xr.send(params);
	}

	if(o.isAsyc){  //异步需要监听事件
		xr.onreadystatechange = function(){
				if(xr.readyState==4){   //表示接受（会话）成功！并且数据完全解析成功！
					if(xr.status==200){  //真正意义的成功！后端返回数据完全正常，并且没有错误
						//success 函数  data
						//调用：
						o.success(xr.responseText);
						
					
					}else{
						//xr.statusText   状态信息
						o.error(xr.status + "-" + xr.statusText);
						//alert(xr.status + "-" + xr.statusText);
					}
					
				}
			}
	}else{  //同步
		if(xr.readyState==4){   //表示接受（会话）成功！并且数据完全解析成功！
					if(xr.status==200){  //真正意义的成功！后端返回数据完全正常，并且没有错误
						//success 函数  data
						o.success(xr.responseText);
						
					
					}else{
						//xr.statusText   状态信息
						o.error(xr.status + "-" + xr.statusText);
						//alert(xr.status + "-" + xr.statusText);
					}
					
		}
	}


}



/*
	提交数据格式处理
 */
 function getParames(params){
	 //userName=admin&ped=123&
	 var strFormat = '';
	for(var property in params){
		//key property
		//value params[property]
		strFormat = strFormat +  property + "=" + params[property] + "&";
	}
	return strFormat.slice(0,strFormat.length-1);
 }