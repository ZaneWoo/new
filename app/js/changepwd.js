$(function(){
	$("#save").click(function(){
		$.ajax({
			type:"post",
			url:"http://gd2.ixp.link/users",
			data:$("#inputform").serialize(),
			success:function(data){
				var pwd = $("#pwd").val();
				var realname = $("#realname").val();
				var email = $("#email").val();
				var contact = $("#contact").val();
				var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
				if((pwd == null || pwd == "")||(realname == null || realname == "")||(email == null ||email == "")||(contact == null || contact == "")){
					alert("填写错误，请重新填写");
									
				}else{
					if(!reg.test(email)){
						alert("邮箱格式不正确，请重新填写");
						return false;
					}else{
						alert("保存成功");
					}
									
				}
			},
			error:function(request){
				alert("服务器出错");
			}
		});
	});
	$("#reset").click(function(){
		$("#inputform :input").val("");
	})
})