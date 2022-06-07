
	window.onload=function(){
		


// 选项卡
var tab_seled = document.getElementsByClassName("tab-seled");
var normal = document.getElementsByClassName("normal-product");
// console.log(tab_seled)
for(var i=0;i<tab_seled.length;i++){
	tab_seled[i].xb=i;
	tab_seled[i].onclick = function(){
		for(var j = 0;j<normal.length;j++){
			normal[j].style.display = "none";
			tab_seled[j].style.borderBottom="none"
		}
		normal[this.xb].style.display = "flex"
		tab_seled[this.xb].style.borderBottom="5px solid black"
		
	}
	
	}
var oImg_1 = document.getElementById("img_1");
var oImg_2 = document.getElementById("img_2");

oImg_1.onmouseover=function(){
	oImg_2.style.display = "block";
}
oImg_1.onmouseout=function(){
	oImg_2.style.display = "none";
}

	
	var test = document.getElementById("test");
	var coryright = document.getElementById("coryright");
	var top;
	 document.onscroll= function(){
	  top=parseInt(document.documentElement.scrollTop);
	   console.log(top);
	   
	  if(top<=500){
		  coryright.style.display = "none";
		  test.style.display = "none";
	  }else{
		  coryright.style.display = "block";
		  test.style.display = "block";
	  }
	}
	
	test.onclick=function(){
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	
// 登录
var body = document.getElementById("body");
var log = document.getElementById("log_2");
var close = document.getElementById("close");
var close1 = document.getElementById("close1");
log.onclick=function(){
	
	body.style.display="block";
}
close.onclick=function(){
	body.style.display="none";
}
close1.onclick=function(){
	body_1.style.display="none";
}


	//验证码 密码选项卡
var log_left=document.getElementById("logi-left")
var log_right=document.getElementById("logi-right")
var yzmdl = document.getElementById("yzmdl")
var mmdl = document.getElementById("mmdl")

log_left.onclick=function(){
	
	yzmdl.style.display="block";
	mmdl.style.display="none";
}
log_right.onclick=function(){
	yzmdl.style.display="none";
	mmdl.style.display="block";
}

	// 前往注册
	var zcbtn = document.getElementById("zcbtn");
	zcbtn.onclick = function(){
		body.style.display="none";
		body_1.style.display="block";
		
	}
	
	// 注册前往登录
	var a = document.getElementById("a");
	body_1 = document.getElementById("body_1");
	a.onclick=function(){
		body_1.style.display="none";
		body.style.display="block";
		
	}
	
	
	var flag1=false;  //手机号判断
	var flag2=false;  //验证码判断
	var flag3=false;  //密码
	var flag4=false;  //短信验证码判断
	var flag5=false;  //确认密码
	
	// 创建一个对象
	let date = {}
	
	// 注册验证
	//手机号
	
	ph.onblur = function() {
		var ph_1 = document.getElementById("ph").value.trim();
		var ph_2 = /^[1][3,5,7,8,9][0-9]{9}$/i;
		var style_1 = document.getElementById("span_1");
		if (ph_2.test(ph_1)) {
			style_1.style.display = "inline-block";
			style_1.innerHTML = "格式√";
			style_1.style.color = "green";
			flag1=true;
			return ph_1;
		} else {  
			style_1.style.display = "inline-block";
			style_1.innerHTML = "请输入有效的手机号";
			style_1.style.color = "red";
			flag1=false;
		}
		
	}
	
	
	
	//验证码
	ver.onblur =function(){
		var ver = document.getElementById("ver").value;
		var style_2 = document.getElementById("span_2");
		var num = 9399;
		if(ver==9399){
			style_2.style.display = "block"
			style_2.innerHTML = "输入正确"
			style_2.style.color = "green";
			flag2=true;
		}else{
			style_2.style.display = "block";
			style_2.innerHTML = "请输入4位验证码";
			style_2.style.color = "red";
			flag2=false;
		}
	}
	
	//密码
	pass1.onblur = function() {
		var pas1 = document.getElementById("pass1").value.trim();
		var pas2 = /^\w{6,20}$/i;
		var style_3 = document.getElementById("span_3");
		if (pas2.test(pas1)) {
			style_3.style.display = "inline-block";
			style_3.innerHTML = "格式√";
			style_3.style.color = "green";
			flag3=true;
		} else {  
			style_3.style.display = "inline-block";
			style_3.innerHTML = "❌ 长度6-20,大小写字母.数字或下划线";
			style_3.style.color = "red";
			flag3=false;
		}
	}
	
	
	//短信验证码
	dxver.onblur = function() {
		var dxder_1 = document.getElementById("dxver").value.trim();
		var dxder_2  = /^\d{4}$/;
		var style_4 = document.getElementById("span_4");
		if (dxder_2.test(dxder_1)) {
			style_4.style.display = "inline-block";
			style_4.innerHTML = "格式√";
			style_4.style.color = "green";
		} else {  
			style_4.style.display = "inline-block";
			style_4.innerHTML = "请输入有效的手机号";
			style_4.style.color = "red";
		}
	}
	
	
	//确认密码
	pass2.onblur = function() {
		var pas1 = document.getElementById("pass1").value.trim();
		var pass1 = document.getElementById("pass2").value.trim();
		var pass2 = /^\w{6,20}$/i;
		var style_5 = document.getElementById("span_5");
		if (pass2.test(pass1) && pas1 == pass1) {
			if( pass2.test(pass1) && pas1 != pass1) {
				style_5.style.display = "inline-block";
				style_5.innerHTML = "";
				style_5.style.color = "deeppink";
				}else{
					style_5.style.display = "inline-block";
					style_5.innerHTML = "输入正确";
					style_5.style.color = "green";
				}
				flag4=true;
		} else {  
			style_5.style.display = "inline-block";
			style_5.innerHTML = "❌ 两次密码不一致";
			style_5.style.color = "red";
			flag4=false;
		}
	}
	
	// 注册函数
		var check = document.getElementById("check")
		var ljzc = document.getElementById("ljzc")
		ljzc.onclick=function(){
			
			if(flag1 && flag2 && flag3 && flag4!=""&&check.checked){
				body_1.style.display="none";
				body.style.display="block";
			}else{
				ljzc.disabled=false;
				ljzc.style.cursor="wait"
			}
			
		}
		
	
	flag11 = 1;
	flag12 = 1;
	flag13 = 1;
	
	
	
	
	// 密码登录 手机号
	phone1.onblur=function(){
		var A=13734162342;
		var p4=document.getElementById("p_4");
		var phone2=document.getElementById("phone1").value;
		var phone1 =/^[1][3,5,7,8,9][0-9]{9}$/i;
		console.log(phone)
		if(phone1.test(phone2)&&phone2==A){
		p4.style.display = "block"
		p4.innerHTML = "输入正确"
		p4.style.color = "green";
		flag13=0;
	}else{
		p4.style.display = "block";
		flag13=1;
	}
		
	}
	
	
	//密码
	
	phone2.onblur=function(){
		var B="bs010923";
		var p5=document.getElementById("p_5");
		var pass5=document.getElementById("phone2").value;
		var pass2 = /^\w{6,20}$/i;
		// information();
		console.log(pass1)
		if(pass2.test(pass5)&&pass5==B){
		p5.style.display = "block"
		p5.innerHTML = "输入正确"
		p5.style.color = "green";
		flag12=0;
	}else{
		p5.style.display = "block";
		flag12=1;
	}
		
	}
	//验证码登录
	//手机号  
	
	
	phone.onblur=function(){
		var phone2=document.getElementById("phone").value;
		var p1=document.getElementById("p_1");
		var phone1 =/^[1][3,5,7,8,9][0-9]{9}$/i;
		if(phone1.test(phone2)){
		p1.style.display = "block"
		p1.innerHTML = "输入正确"
		p1.style.color = "green";
		flag11=0;
	}else{
		p1.style.display = "block";
		flag11=1;
	}
		
	}
	
	yzm.onblur =function(){
		var yzm = document.getElementById("yzm").value;
		var p2 = document.getElementById("p_2");
		var num = 2596;
		if(yzm==2596){
			p2.style.display = "block"
			p2.innerHTML = "输入正确"
			p2.style.color = "green";
			flag2=true;
		}else{
			p2.style.display = "block";
			p2.innerHTML = "请输入4位验证码";
			p2.style.color = "red";
			flag2=false;
		}
	}
	
	var fs=document.getElementById("fs");
	var p3 = document.getElementById("p_3");
	let sum=0;
	fs.onclick=function(){
		sum=Math.floor(Math.random()*10000);
		alert(sum);
	}
	console.log(sum)
	
	var dl = document.getElementById("dl-right");
	dl.onclick=function(){
		var yzm8= document.getElementById("yzm8").value;
		// alert(yzm8) 
		if(flag11 ==0 &&flag2==true){
			if(sum==yzm8){
				p3.style.display="block";
				p3.innerHTML="输入正确"
				p3.style.color="green"
				body.style.display="none";
				alert("登陆成功，返回首页")
			}else{
				p3.style.display = "block";
				p3.innerHTML = "验证码错误";
				p3.style.color = "red";
			}
		
		}else{
			alert("登录失败")
		}
	}
	dl.onmousedown=function(){
		
	}

	// 密码登录
	var mmd = document.getElementById("dl-right1")
	mmd.onclick=function(){
		// alert(3)
		if(flag12 ==0 && flag13==0){
			// alert(1)
			body.style.display="none";
			alert("登陆成功，返回首页")
		}else{
			alert("登陆失败")
		}
	}

	
	
	

}

	
