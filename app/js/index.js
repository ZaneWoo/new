mui.init({
			swipeBack:false,
			
		});
		mui.plusReady(function(){
			var zhuye=document.getElementById("zhuye").addEventListener('tap',function(){
				mui.openWindow({
					url:'/index.html',
				})
				zhuye.style.cssText="text-shadow: 0 -2px 2px #000!important;";
			});
			var baobiao=document.getElementById("baobiao").addEventListener('tap',function(){
				mui.openWindow({
					url:'list/baobiao.html',
				})
				baobiao.style.cssText="text-shadow: 0 -2px 2px #000!important;";
			});
			var renwu=document.getElementById("renwu").addEventListener('tap',function(){
				mui.openWindow({
					url:'list/renwu.html',
				})
				renwu.style.cssText="text-shadow: 0 -2px 2px #000!important;";
			});
			var zonghe=document.getElementById("zonghe").addEventListener('tap',function(){
				mui.openWindow({
					url:'list/zonghe.html',
				});
			});
			var quansheng=document.getElementById("quansheng").addEventListener('tap',function(){
				mui.openWindow({
					url:'list/quansheng.html',
				})
			});
			var qushi=document.getElementById("qushi").addEventListener('tap',function(){
				mui.openWindow({
					url:'list/qushi.html',
				});
			});
			var chengshi=document.getElementById("chengshi").addEventListener('tap',function(){
				mui.openWindow({
					url:'list/chengshi.html',
				});
			});
			var isp=document.getElementById("isp").addEventListener('tap',function(){
				mui.openWindow({
					url:'list/isp.html',
				});
			});
			var shijian=document.getElementById("shijian").addEventListener('tap',function(){
				mui.openWindow({
					url:'list/shijian.html',
				});
			});
			var wangjian=document.getElementById("wangjian").addEventListener('tap',function(){
				mui.openWindow({
					url:'list/wangjian.html',
					id:'wangjian',
				});
			});
			var geren=document.getElementById("geren").addEventListener('tap',function(){
				mui.openWindow({
					url:'list/person.html',
					id:'person'
				});
				geren.style.cssText="text-shadow: 0 -2px 2px #000!important;";
			});
			
		})