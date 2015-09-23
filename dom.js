(function(window,undefined){
	var FUNCTION_CLASS = '[object Function]',
		ARRAY_CLASS = '[object Array]',
		OBJECT_CLASS = '[object Object]';

	var TO_STRING = Object.prototype.toString;

	var $ = function(properties){
		if(window === this){
			return new $(properties); //实例化$
		}
		var result = [];
        if (typeof properties === 'string') {
            result = document.querySelectorAll(properties);
        }
        if (result.length > 0) {
            for (var i = 0; i < result.length; i++) {
                this[i] = result[i];
            }
            this.length = result.length;
        }
        if(properties instanceof($)){
        	return properties;
        }
        return this;
	};

	$.isArray = ('isArray' in Array) ? Array.isArray : function(arg){
		return TO_STRING.call(arg) === ARRAY_CLASS;
	};

	$.isFunction = function(arg){
		return TO_STRING.call(arg) === FUNCTION_CLASS;
	};

	$.isPlainObject = function(arg){
		return TO_STRING.call(arg) 
	}

	$.fn = $.prototype = {};
	$.fn.extend({
		prepend : function(){
			
		},
		append : function(){
			
		}
	});

	//$.extend([deep], target, object1, [objectN])
	$.extend = $.fn.extend = function(){
		var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !$.isFunction( target ) ) {
			target = {};
		}
		// Extend $ itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( $.isPlainObject( copy ) ||
						( copyIsArray = $.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && $.isArray( src ) ? src : [];
						} else {
							clone = src && $.isPlainObject( src ) ? src : {};
						}
						// Never move original objects, clone them
						target[ name ] = $.extend( deep, clone, copy );
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		};
		// Return the modified object
		return target;
	};
	
	function elementToHTML(element){
		var div = DIV;
		div.appendChild(element)
		return div.innerHTML;
	}
	function fragment( html ){
        var div = document.createElement("div"),
			fragment = document.createDocumentFragment();
        div.innerHTML = html;
        while(div.firstChild){
            //console.log(div.childNodes);
            fragment.appendChild( div.firstChild );
        }
        console.log(fragment);
        return fragment;
    }
	//console.log(elementToHTML($('div')[0]));
	fragment('<a><a>');
	console.log($.extend({},{a:2,b:3}));
	// console.log($.isArray([1]));
	// console.log($.isFunction(function a(){}));
	//$('#a') $('.a .b') $('div a') $('<div>a</div>') $($('.a'))
	window.$ = $;
})(typeof window !== "undefined" ? window : this);

