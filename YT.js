(function (window, undefined) {
    var $util = function (properties) {
        if ( window === this ) {
            return new $util(properties);
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

    $util.fn = $util.prototype = {

    	hide: function(fadespeed,fn){
    		for (var i = 0; i < this.length; i++){
    			this[i].style.display = 'none';
    		}
    		return this;
    	},

    	show: function(fadespeed,fn){
    		for (var i = 0; i < this.length; i++){
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

    	toArray: function() {
			return slice.call( this );
		},

		isArray: ('isArray' in Array) ? Array.isArray : function (vArg) {
	    	return Object.prototype.toString.call(vArg) === "[object Array]";
	  	},

	  	/* generate true or false as a rate of a:b */
	  	genRate:	function(a,b){
			var rand = parseInt(Math.random() * (a + b)) + 1;
			return result = (rand <= a) ? true : false; 
		},

		/* get the max number in an array */
		arrayMax: function(array) {
			return Math.max.apply({},array);
		},

		/* get value of the first key in an object */
		firstValue: function(object){
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

		/* cancel the brower's default drag events */
		cancelDragDefault: function(fn) {
			this[0].addEventListener('dragstart', function(event) {
		    	if (event.preventDefault) event.preventDefault();
				else event.returnValue = false;
		    },false);
		    document.ondragstart = function (){ return false; }
		    return this;
		},

		
    };
    window.$util = $util;
})(typeof window !== "undefined" ? window : this);