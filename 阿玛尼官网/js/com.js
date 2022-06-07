window.onload=function(){

		// 返回顶部
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
		
	
	
	var common = document.getElementById("common-swipe").getElementsByTagName("img")
	
	console.log(common)
	var icon = document.getElementById("icon_2").getElementsByTagName("img")
	console.log(icon)
	for(var i=0;i<common.length;i++){
		// alert(t_list[i]) 
		common[i].xb=i;
		common[i].onclick=function(){
			for(var j=0;j<icon.length;j++){
				icon[j].style.display="none";
			}
			icon[this.xb].style.display="block";
		}
	}
}
