(function (window, undefined) {
    var $util = function (properties) {
        if ( window === this ) {
            return new $util(properties);
        }
		if (typeof properties === 'string'){
			var result = document.querySelectorAll(properties);
		}
		if (result.length > 0){
			for(var i = 0; i< result.length; i++){
				this[i] = result[i];
			}
			this.length = result.length;
		}
        return this;
    };
    $util();
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

    };
    $util.extend = $util.fn.extend = function() {
    	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};
    window.$util = $util;
})(typeof window !== "undefined" ? window : this);