(function($){
	$.ajax = function(o){
		return  new ajax.init( 
			o["type"]||"get",
			o["url"]||"",
			o["user"]||null,
			o["password"]||null,
			o["send"]||null,
			o["error"],
			o["beforeSend"],
			o["success"],
			o["code"]||"utf-8"
		);
	};
	ajax.init = function( m, l, u, p, d, e, b, s, c ){
			// 属性
			this.XHR = null;
			this.method = m; 
			this.url = l;
			this.user = u;
			this.pwd = p;
			this.data = d;
			this.code = c;
			this.getDataInfo();
			// 事件
			this.error = e;
			this.beforeSend	= b;
			this.success = s;
	};
	ajax.init.prototype = {
		// 创建XMLHttpRequest对象
		createXHR: function(){
			try {
				return new XMLHttpRequest();
			} catch(e){
				var MSXML = [ "MSXML2.XMLHTTP.5.0",
							  "MSXML2.XMLHTTP.4.0",
							  "MSXML2.XMLHTTP.3.0",
							  "MSXML2.XMLHTTP",
							  "Microsoft.XMLHTTP"
							],
					i,len = MSXML.length;
				for(i = 0; i < len; i+=1) {
					try {
						return new ActiveXObject(MSXML[i]);        
						break;
					} catch(e){
						return null;
					};
				}
			}
		},
		getDataInfo: function() {
			var o = this,
				reg = /\?/,
				data = o.changeCode(o.data),
				url = reg.test(o.url)?o.data?o.url.substring(0,o.url.search(reg)):o.url:o.url;
			if(o.method == "get"){
				if(o.data) url += "?"+data;
				data = null;
			};
			o.XHR = o.createXHR();
			if(!o.XHR) return false;
			o.XHR.open(o.method, url, true);
			o.XHR.onreadystatechange = function(){
				o.updatePage(o,this);	
			};
			o.XHR.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset="+o.code+"");
		    o.XHR.send(data);
		},
		updatePage: function(o,x){
			if (x.readyState == 4) {
				this.beforeSend.call(x,x.status,"beforeSend");
				switch(x.status){
					case 200:
						o.success.call(x,x.responseText,x.status,"success");
					break;	
					case 404:
						o.error.call(x,x.status,"error");
					break;
				};
			};
		},
		changeCode: function(d) {
			var s = function(d){
					var arr = [];
					for(var i in d){
						arr.push( i + "=" + d[i] );
					};
					return arr;
				};
			if( typeof d == "object" ){
				return s(d).join("&");
			} else if(typeof d == "string" ){
				var n = /{/g.test(d)?JSON.parse(d):d;
				return typeof n == "string"?n:s(n).join("&");
			};
		}
	};
}(window));