(function (window, undefined) {
    var $yt = function (properties) {
        if ( window === this ) {
            return new $yt(properties);
        }
        var result = [];
		if (typeof properties === 'string'){
			result = document.querySelectorAll(properties);
		}
		if (result.length > 0){
			for(var i = 0; i< result.length; i++){
				this[i] = result[i];
			}
			this.length = result.length;
		}
        return this;
    };
    var arr = [];

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

    $yt.fn = $yt.prototype = {

    	hide: function(fadespeed,fn){
    		var i = 0 ,len = this.length;
    		for (; i < len; i++){
    			this[i].style.display = 'none';
    		}
    		return this;
    	},

    	show: function(fadespeed,fn){
    		var i = 0 ,len = this.length;
    		for (; i < len; i++){
    			this[i].style.display = 'inherit';
    		}
    		return this;
    	},

    	get: function(num){
    		return num != null ?
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :
			slice.call( this );
    	},

    	alert: function(msg){
    		alert(msg); //for a test
    		return this;
    	},

    	trim: function(str){
    		return str.replace(/^\s+|\s+$/gm,'');
    	},

    	toArray: function() {
			return slice.call( this );
		},

		isArray: ('isArray' in Array) ? Array.isArray : function (vArg) {
	    	return Object.prototype.toString.call(vArg) === "[object Array]";
	  	},

	  	/* generate true or false as a rate of a:b */
	  	genRate: function(a,b){
			var rand = parseInt(Math.random() * (a + b)) + 1;
			return result = (rand <= a) ? true : false; 
		},

		/* get the max number in an array */
		getArrayMax: function(array) {
			return Math.max.apply({},array);
		},

		getArrayMin: function(array) {
			return Math.min.apply({},array);
		},

		/* get value of the first key in an object */
		getFirstValue: function(object){
			for (var i in object){
				return object[i];
			}
		},

		/* preload a img ,after loading do a callback */
		loadImage: function(url, callback) {     
		   	var img = new Image();   
		   	img.src = url;        
		   	if (img.complete) {    
		      	callback(img);     
		        return;   
		    }     
			img.onload = function () {         
			    callback(img);     
			}; 
		},
		preventDefault:function(e){
			if (e.preventDefault) e.preventDefault();
			else e.returnValue = false;
		},
		/* cancel the brower's default drag events */
		cancelDragDefault: function(fn) {
			this.addHandler('dragstart', function(e) {
		    	$yt.fn.preventDefault(e);
		    });
		    document.ondragstart = function (){ return false; }
		    return this;
		},

		/* get a cookie of the cookie name*/
		getCookie: function (cookieName) {
			if (document.cookie.length > 0) {
				begin = document.cookie.indexOf(cookieName + "=");
				if (begin != -1) {
					begin += cookieName.length + 1;
					end = document.cookie.indexOf(";", begin);
					if (end == -1) end = document.cookie.length;
					return unescape(document.cookie.substring(begin, end));
				}
			}
			return null;
		},

		/* set cookie with name ,value ,expire days */
		setCookie: function (cookieName, value, expiredays) {
			if (expiredays == null || expiredays == undefined || expiredays == '' || isNaN(expiredays)) {
				expiredays = 365;
			}
			var ExpireDate = new Date();
			ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));
			document.cookie = cookieName + "=" + escape(value) + ((expiredays == null) ? "": ";path=/; expires=" + ExpireDate.toGMTString());
		},

		isIpad: function () {
			return navigator.userAgent.match(/iPad/i) ? true : false;
		},

		/* may not exactly right, mostly works */
		isMobile: function () {
			return navigator.userAgent.match(/Android|webOS|iPhone|iPod|BlackBerry|Windows Phone|ZuneWP7|IEMobile|Opera Mini/i) ? true : false;
		},

		isIE : function () {
			return !!window.ActiveXObject; 
		},

		/* sof question id 566303 by Paul Sweatte */
		isIE6: function () {
			return (!!window.ActiveXObject && !window.XMLHttpRequest) ? true : false;
		},

		isIE6_8: function () {
			return !$.support.leadingWhitespace;
		},

		/* By Marat Tanalin ie detectors*/
		islessIE6: function () {
			return document.all && !window.XMLHttpRequest;
		},

		islessIE7: function () {
			return document.all && !document.querySelector;
		},

		islessIE8: function () {
			return document.all && !document.addEventListener;
		},

		islessIE9: function () {
			return document.all && !window.atob;
		},

		islessIE10: function () {
			return document.all ? true : false;
		},

		/* check HTML5 support by video play type */
		supportHTML5Level: function () {
			if ( !! document.createElement('video').canPlayType) {
			    var vidTest = document.createElement("video");
			    var oggTest = vidTest.canPlayType('video/ogg; codecs="theora, vorbis"');
			    if (!oggTest) {
			      	h264Test = vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
			      	return h264Test ? (h264Test == "probably" ? "full" : "some") : "not";
			    } else {
			      	return oggTest == "probably" ? "full" : "some";
			    }
			} else {
			    return "not";
			}
		},

		/* test css attribute is supported or not */
		supportCss3: function() {
			var div = document.createElement('div'),
				vendors = 'Khtml O Moz Webkit'.split(' '),
				len = vendors.length;
			return function(prop) {
				return ( prop in div.style )||('-ms-' + prop in div.style) ? true : false;
				prop = prop.replace(/^[a-z]/, function(val) {
					return val.toUpperCase();
				});
				while(len--) {
					if ( vendors[len] + prop in div.style ) return true;
				}
			}
			return false;
		},

		/* open a series of urls at one time */
		openURLs: function (url){
			if(!url) return false;
			var attach = "http://";
			var urlSplit = url.split(/\r\n|\r|\n/);
			for(i = 0; i < urlSplit.length; i++){
				if(urlSplit[i].indexOf(attach) < 0)
					urlSplit[i] = attach + urlSplit[i];
				window.open(urlSplit[i], "window"+i)
			}
		},

		/* deep clone an object to a new one*/
		clone: function (obj) {
		    if (null == obj || "object" != typeof obj) return obj;
		    if (obj instanceof Date) {
		        var copy = new Date();
		        copy.setTime(obj.getTime());
		        return copy;
		    }
		    if (obj instanceof Array) {
		        var copy = [];
		        for (var i = 0, len = obj.length; i < len; i++) {
		            copy[i] = arguments.callee(obj[i]);
		        }
		        return copy;
		    }
		    if (obj instanceof Object) {
		        var copy = {};
		        for (var attr in obj) {
		            if (obj.hasOwnProperty(attr)) copy[attr] = arguments.callee(obj[attr]);
		        }
		        return copy;
		    }
		    throw new Error("Unable to copy obj! Its type isn't supported.");
		},
		changeObject: function (obj,fnc) {
			fnc.call(obj);
		},
		getCssStyle: function (attr,pseudo){
			var style = this[0].currentStule ? this[0].currentStyle : window.getComputedStyle(this[0], pseudo);
			return style.getPropertyValue ? style.getPropertyValue(attr) : style.getAttribute(attr); 
		},
		addHandler: function(type,handler){
			/* when used , should better declare the handler function first, then invoke with the name of handler */
			/* results in smaller memory consumption, and can have a reference to the handler while use removeEventHandler */	
			var i = 0, len = this.length;
			for( ; i < len; i++){
				if(this[i].addEventListener){
					this[i].addEventListener(type,handler,false);
				}else if(this[i].attachEvent){
					this[i].attachEvent('on'+type, handler);
				}else{
					this[i]['on'+type] = handler;
				}
			}
		},
		removeHandler: function (type,handler){
			for(var i = 0, len = this.length; i < len; i++){
				if(this[i].removeEventListener){
					this[i].removeEventListener(type,handler,false);
				}else if(this[i].detachEvent){
					this[i].attachEvent('on'+type, handler);
				}else{
					this[i]['on'+type] = null;
				}
			}
		},
		stopPropagation: function (e) {
			if(e.stopPropagation){
				e.stopPropagation();
			}else{
				e.cancelBubble = true;
			}
		},
		getEvent: function (e) {
			return e ? e : window.e;
		},
		getTarget: function (e) {
			return e.target || e.srcElement;
		},
		getKeyCode: function (e) {
			return e.keyCode ? e.keyCode : e.which;
		},
		hasClass: function (name) {
			var i = 0, 
				len = this.length, 
				classReg = new RegExp('(\\s|^)' + name + '(\\s|$)');
			for( ; i < len; i++){
				if(this[i].className.match(classReg)) return true;
			}
			return false; 
		},
		addClass: function (name) {
			var i = 0, 
				len = this.length, 
				classReg = new RegExp('(\\s|^)' + name + '(\\s|$)');
			for( ; i < len; i++){
				if(!this[i].className.match(classReg)) {
					this[i].className += (this[i].className ? ' ' : '') + name;
				};
			}
			return this;
		}
    };
    
    window.$yt = $yt;
})(typeof window !== "undefined" ? window : this);
