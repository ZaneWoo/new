mui.plusReady(function(){
	var login=document.getElementById("login");
	login.addEventListener("click",function(){
		var username = document.getElementById("username").value;
		var userpassword = document.getElementById("userpassword").value;
			mui.ajax('http://gd2.ixp.link/users/login',{
				data:{
					name:username,
					pwd:userpassword
				},
				dataType:'json',
				type:'get',
				success:function(data){
					if(data.authenticate == true){
						localStorage.setItem('usernames',username);
						localStorage.setItem('userpasswords',userpassword);
						mui.openWindow({
							url:'index.html',
							top:'44px',
						})
					}else{
						alert('用户名或密码错误');
					}
				},
				error:function(){
					alert('服务器出错！');
				}
			});
		})
	})