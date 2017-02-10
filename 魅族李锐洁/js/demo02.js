// JavaScript Document
//window.onload=function(){
		   //}
		
				//设置cookie
	function setCookie(name,value,iDay){
		var oDate=new Date();
		oDate.setDate(oDate.getDate()+iDay);
		document.cookie=name+'='+value+';expires='+oDate;
	}
	setCookie('name','15300000000',14);
	setCookie('pass','w15300000000',14);
	setCookie('save_info','true',14);
	
	//huodecookie
/*	function getCookie(name){
		var arr=document.cookie.split(';');
		for(var i=0;i<arr.length;i++){
			var arr2=arr[i].split('=');
			if(arr2[0]==name){
				return arr2[1];
			}
		}
		return '';
	}
*/	

function getCookie(name){ //pwd
	var cookieName = encodeURIComponent(name);
	var cookieStart = document.cookie.indexOf(cookieName); //18
	if(cookieStart>-1){//表示存在 
	   var cookieEnd = document.cookie.indexOf(";",cookieStart);
	   if(cookieEnd==-1){
		   cookieEnd = document.cookie.length;
	   }
	  //alert(document.cookie.substring(cookieStart,cookieEnd));
	     //alert(document.cookie.substring(cookieStart+cookieName.length+1,cookieEnd));
	  return decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length+1,cookieEnd));
		
	}
}
	//alert(document.cookie)
	//alert(getCookie('pass'))
	//alert(Math.floor(-1.1))
	//设置过期日期
	function setCookieDate(daynum){
	
	var date = new Date();
	date.setDate(date.getDate()+daynum);
	return date;
}
			//第一次登陆
			function login(){
		  var name = document.getElementById("pt-phone").value;
		  var pass = document.getElementById("pt-password").value;
		  var save_info = document.getElementById("pt-checkbox").checked; //true false
		  if(name=="15300000000"&&pass=="w15300000000"){
		  /*    setCookie("name",name,setCookieDate(7));
			  setCookie("pass",pass,setCookieDate(7));
			  setCookie("save_info",save_info,setCookieDate(7));*/
		    alert("登录成功");
			window.location.href = "index.html";
			
		  }
		  else{alert("密码或账号错误")}
		}
	  //已经登录了一次，再次登陆时
window.onload=function(){
			//再次登录--不会做
			 var save_infoValue=  getCookie("save_info");//alert(save_infoValue)
			 if(save_infoValue=="true"){
			 var nameValue =  getCookie("name");
			 var passValue =  getCookie("pass");
			 var nameObj = document.getElementById("pt-phone");
			 var passObj = document.getElementById("pt-password");
			 var save_infoObj = document.getElementById("pt-password");
			 nameObj.value = nameValue;
			 passObj.value = passValue;
			 save_infoObj.checked="true";
			 
			 if(nameValue=="15300000000"&&passValue=="w15300000000"){
			   console.log("登录成功111");
			 } 
			  else{alert("ccc")}
		   }

	}
