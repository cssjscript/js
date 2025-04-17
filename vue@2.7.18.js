window.addEventListener("load", function() {
  var forms = document.querySelectorAll("form")
  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", event => {
    event.preventDefault()
    })
  }
  
  /* 
    var head = document.createElement("head");
	var tagHead = document.getElementsByTagName("head");
    var style = document.createElement("style");
    var css = `text/css`;
    var appendChild = tagHead[0].appendChild(style);
        appendChild.innerHTML = css;
  */

  /*
    var head = document.createElement("head");
	var tagHead = document.getElementsByTagName("head");
    var link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "../style.css";
		tagHead[0].appendChild(link);
  */
  
  var style = document.createElement("style");
  var css = `@import url("https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"); * {font-family: "Sarabun";}`;
  var head = document.getElementsByTagName("head")[0];
      head.appendChild(style).innerHTML = css;

  var icon = document.createElement("link");
      icon.type = "image/x-icon";
      icon.rel  = "icon";
      icon.href = "https://cdn.jsdelivr.net/gh/50c02838bd45e31/cssjs/favicon.jpg";
      head.appendChild(icon);
    
  var animate = document.createElement("link");
      animate.type = "text/css";
      animate.rel  = "stylesheet";
      animate.href = "https://cdn.jsdelivr.net/gh/50c02838bd45e31/cssjs/animate.css";
      head.appendChild(animate);
    
  var w3 = document.createElement("link");
      w3.type = "text/css";
      w3.rel  = "stylesheet";
      w3.href = "https://www.w3schools.com/w3css/4/w3.css";
      head.appendChild(w3);
    
  var w3_theme_green = document.createElement("link");
      w3_theme_green.type = "text/css";
      w3_theme_green.rel  = "stylesheet";
      w3_theme_green.href = "https://www.w3schools.com/lib/w3-theme-green.css";
      head.appendChild(w3_theme_green);
      
  var bootstrap_css = document.createElement("link");
      bootstrap_css.type = "text/css";
      bootstrap_css.rel  = "stylesheet";
      bootstrap_css.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
      head.appendChild(bootstrap_css);
      
  var boxicons_css = document.createElement("link");
      boxicons_css.type = "text/css";
      boxicons_css.rel  = "stylesheet";
      boxicons_css.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
      head.appendChild(boxicons_css);
      
  var dataTables_bootstrap5_css = document.createElement("link");
      dataTables_bootstrap5_css.type = "text/css";
      dataTables_bootstrap5_css.rel  = "stylesheet";
      dataTables_bootstrap5_css.href = "https://cdn.datatables.net/2.2.2/css/dataTables.bootstrap5.css";
      head.appendChild(dataTables_bootstrap5_css);
      
  var buttons_bootstrap5_css = document.createElement("link");
      buttons_bootstrap5_css.type = "text/css";
      buttons_bootstrap5_css.rel  = "stylesheet";
      buttons_bootstrap5_css.href = "https://cdn.datatables.net/buttons/3.2.2/css/buttons.bootstrap5.css";
      head.appendChild(buttons_bootstrap5_css);
      
  var responsive_bootstrap5_css = document.createElement("link");
      responsive_bootstrap5_css.type = "text/css";
      responsive_bootstrap5_css.rel  = "stylesheet";
      responsive_bootstrap5_css.href = "https://cdn.datatables.net/responsive/3.0.4/css/responsive.bootstrap5.css";
      head.appendChild(responsive_bootstrap5_css);

  /* <script src="https://code.jquery.com/jquery-3.7.1.js"></script> */
    var jquery_script = document.createElement("script");
        jquery_script.src = "https://code.jquery.com/jquery-3.7.1.js";
        head.appendChild(jquery_script);
  /* <script src="https://code.jquery.com/jquery-3.7.1.js"></script> */

  /* <script src="https://kit.fontawesome.com/254a6fae49.js"></script> */
    var fontawesome_script = document.createElement("script");
        fontawesome_script.src = "https://kit.fontawesome.com/254a6fae49.js";
        head.appendChild(fontawesome_script);
  /* <script src="https://kit.fontawesome.com/254a6fae49.js"></script> */

  /* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> */
    var bootstrap_script = document.createElement("script");
        bootstrap_script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
        head.appendChild(bootstrap_script);
  /* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> */

  /* <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.js"></script> */
    var jszip_script = document.createElement("script");
        jszip_script.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.js";
        head.appendChild(jszip_script);
  /* <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.js"></script> */

  /* <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.js"></script> */
    var pdfmake_script = document.createElement("script");
        pdfmake_script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.js";
        head.appendChild(pdfmake_script);
  /* <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.js"></script> */

  /* <script src="https://cdn.jsdelivr.net/gh/50c02838bd45e31/cssjs/vfs_fonts.js"></script> */
    var vfs_fonts_script = document.createElement("script");
        vfs_fonts_script.src = "https://cdn.jsdelivr.net/gh/50c02838bd45e31/cssjs/vfs_fonts.js";
        head.appendChild(vfs_fonts_script);
  /* <script src="https://cdn.jsdelivr.net/gh/50c02838bd45e31/cssjs/vfs_fonts.js"></script> */

  /* <script src="https://cdn.datatables.net/2.2.2/js/dataTables.js"></script> */
    var dataTables_script = document.createElement("script");
        dataTables_script.src = "https://cdn.datatables.net/2.2.2/js/dataTables.js";
        head.appendChild(dataTables_script);
  /* <script src="https://cdn.datatables.net/2.2.2/js/dataTables.js"></script> */

  /* <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> */
    var sweetalert2_script = document.createElement("script");
        sweetalert2_script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
        head.appendChild(sweetalert2_script);
  /* <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> */

  /* <script src="https://cdn.jsdelivr.net/npm/gasparesganga-jquery-loading-overlay@2.1.7/dist/loadingoverlay.min.js"></script> */
    var loadingoverlay_script = document.createElement("script");
        loadingoverlay_script.src = "https://cdn.jsdelivr.net/npm/gasparesganga-jquery-loading-overlay@2.1.7/dist/loadingoverlay.min.js";
        head.appendChild(loadingoverlay_script);
  /* <script src="https://cdn.jsdelivr.net/npm/gasparesganga-jquery-loading-overlay@2.1.7/dist/loadingoverlay.min.js"></script> */

  /* <script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script> */
  /* <script src="https://cdn.jsdelivr.net/npm/vue@3"></script> */
  /* <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script> */
  /* <script src="https://cdn.jsdelivr.net/npm/vue@2"></script> */
  /* <script src="https://cdn.datatables.net/2.2.2/js/dataTables.bootstrap5.js"></script> */
  /* <script src="https://cdn.datatables.net/buttons/3.2.2/js/dataTables.buttons.js"></script> */
  /* <script src="https://cdn.datatables.net/buttons/3.2.2/js/buttons.bootstrap5.js"></script> */
  /* <script src="https://cdn.datatables.net/buttons/3.2.2/js/buttons.colVis.js"></script> */
  /* <script src="https://cdn.datatables.net/buttons/3.2.2/js/buttons.html5.js"></script> */
  /* <script src="https://cdn.datatables.net/buttons/3.2.2/js/buttons.print.js"></script> */
  /* <script src="https://cdn.datatables.net/responsive/3.0.4/js/dataTables.responsive.js"></script> */
  /* <script src="https://cdn.datatables.net/responsive/3.0.4/js/responsive.bootstrap5.js"></script> */
  
  /* <script src="https://cdn.datatables.net/v/bs5/dt-2.2.2/b-3.2.2/b-colvis-3.2.2/b-html5-3.2.2/b-print-3.2.2/r-3.0.4/datatables.min.js"></script> */
    var datatable_script = document.createElement("script");
        datatable_script.src = "https://cdn.datatables.net/v/bs5/dt-2.2.2/b-3.2.2/b-colvis-3.2.2/b-html5-3.2.2/b-print-3.2.2/r-3.0.4/datatables.min.js";
        head.appendChild(datatable_script);
  /* <script src="https://cdn.datatables.net/v/bs5/dt-2.2.2/b-3.2.2/b-colvis-3.2.2/b-html5-3.2.2/b-print-3.2.2/r-3.0.4/datatables.min.js"></script> */
}, true);

/* <script src="https://code.jquery.com/jquery-3.7.1.js"></script> */
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var version = "3.7.1",

	rhtmlSuffix = /HTML$/i,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
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
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

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

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},


	// Retrieve the text value of an array of DOM nodes
	text: function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {

			// If no nodeType, this is expected to be an array
			while ( ( node = elem[ i++ ] ) ) {

				// Do not traverse comment nodes
				ret += jQuery.text( node );
			}
		}
		if ( nodeType === 1 || nodeType === 11 ) {
			return elem.textContent;
		}
		if ( nodeType === 9 ) {
			return elem.documentElement.textContent;
		}
		if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Do not include comment or processing instruction nodes

		return ret;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc: function( elem ) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Assume HTML when documentElement doesn't yet exist, such as inside
		// document fragments.
		return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}


function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var splice = arr.splice;


var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




// Note: an element does not contain itself
jQuery.contains = function( a, b ) {
	var bup = b && b.parentNode;

	return a === bup || !!( bup && bup.nodeType === 1 && (

		// Support: IE 9 - 11+
		// IE doesn't have `contains` on SVG.
		a.contains ?
			a.contains( bup ) :
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

function fcssescape( ch, asCodePoint ) {
	if ( asCodePoint ) {

		// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
		if ( ch === "\0" ) {
			return "\uFFFD";
		}

		// Control characters and (dependent upon position) numbers get escaped as code points
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Other potentially-special ASCII characters get backslash-escaped
	return "\\" + ch;
}

jQuery.escapeSelector = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};




var preferredDoc = document,
	pushNative = push;

( function() {

var i,
	Expr,
	outermostContext,
	sortInput,
	hasDuplicate,
	push = pushNative,

	// Local document vars
	document,
	documentElement,
	documentIsHTML,
	rbuggyQSA,
	matches,

	// Instance-specific data
	expando = jQuery.expando,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
		"loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rleadingCombinator = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" +
		whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		ID: new RegExp( "^#(" + identifier + ")" ),
		CLASS: new RegExp( "^\\.(" + identifier + ")" ),
		TAG: new RegExp( "^(" + identifier + "|[*])" ),
		ATTR: new RegExp( "^" + attributes ),
		PSEUDO: new RegExp( "^" + pseudos ),
		CHILD: new RegExp(
			"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
				whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
				whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		bool: new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		needsContext: new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		if ( nonHex ) {

			// Strip the backslash prefix from a non-hex escape sequence
			return nonHex;
		}

		// Replace a hexadecimal escape sequence with the encoded Unicode code point
		// Support: IE <=11+
		// For values outside the Basic Multilingual Plane (BMP), manually construct a
		// surrogate pair
		return high < 0 ?
			String.fromCharCode( high + 0x10000 ) :
			String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes; see `setDocument`.
	// Support: IE 9 - 11+, Edge 12 - 18+
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE/Edge.
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", next: "legend" }
	);

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android <=4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = {
		apply: function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		},
		call: function( target ) {
			pushNative.apply( target, slice.call( arguments, 1 ) );
		}
	};
}

function find( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE 9 only
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								push.call( results, elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE 9 only
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							find.contains( context, elem ) &&
							elem.id === m ) {

							push.call( results, elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( !nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rleadingCombinator.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when
					// strict-comparing two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( newContext != context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = jQuery.escapeSelector( nid );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrimCSS, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties
		// (see https://github.com/jquery/sizzle/issues/157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		return nodeName( elem, "input" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		return ( nodeName( elem, "input" ) || nodeName( elem, "button" ) ) &&
			elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11+
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
function setDocument( node ) {
	var subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	documentElement = document.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( document );

	// Support: iOS 7 only, IE 9 - 11+
	// Older browsers didn't support unprefixed `matches`.
	matches = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors
	// (see trac-13936).
	// Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,
	// all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.
	if ( documentElement.msMatchesSelector &&

		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "unload", unloadHandler );
	}

	// Support: IE <10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		return !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Support: IE 9 only
	// Check to see if it's possible to do matchesSelector
	// on a disconnected node.
	support.disconnectedMatch = assert( function( el ) {
		return matches.call( el, "*" );
	} );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// IE/Edge don't support the :scope pseudo-class.
	support.scope = assert( function() {
		return document.querySelectorAll( ":scope" );
	} );

	// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
	// Make sure the `:has()` argument is parsed unforgivingly.
	// We include `*` in the test to detect buggy implementations that are
	// _selectively_ forgiving (specifically when the list includes at least
	// one valid selector).
	// Note that we treat complete lack of support for `:has()` as if it were
	// spec-compliant support, which is fine because use of `:has()` in such
	// environments will fail in the qSA path and fall back to jQuery traversal
	// anyway.
	support.cssHas = assert( function() {
		try {
			document.querySelector( ":has(*,:jqfake)" );
			return false;
		} catch ( e ) {
			return true;
		}
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter.ID = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter.ID =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find.TAG = function( tag, context ) {
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			return context.getElementsByTagName( tag );

		// DocumentFragment nodes don't have gEBTN
		} else {
			return context.querySelectorAll( tag );
		}
	};

	// Class
	Expr.find.CLASS = function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	rbuggyQSA = [];

	// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert( function( el ) {

		var input;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' disabled='disabled'></a>" +
			"<select id='" + expando + "-\r\\' disabled='disabled'>" +
			"<option selected=''></option></select>";

		// Support: iOS <=7 - 8 only
		// Boolean attributes and "value" are not treated correctly in some XML documents
		if ( !el.querySelectorAll( "[selected]" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
		}

		// Support: iOS <=7 - 8 only
		if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Support: iOS 8 only
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// In-page `selector#id sibling-combinator selector` fails
		if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		if ( !el.querySelectorAll( ":checked" ).length ) {
			rbuggyQSA.push( ":checked" );
		}

		// Support: Windows 8 Native Apps
		// The type and name attributes are restricted during .innerHTML assignment
		input = document.createElement( "input" );
		input.setAttribute( "type", "hidden" );
		el.appendChild( input ).setAttribute( "name", "D" );

		// Support: IE 9 - 11+
		// IE's :disabled selector does not pick up the children of disabled fieldsets
		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		documentElement.appendChild( el ).disabled = true;
		if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
			rbuggyQSA.push( ":enabled", ":disabled" );
		}

		// Support: IE 11+, Edge 15 - 18+
		// IE 11/Edge don't find elements on a `[name='']` query in some cases.
		// Adding a temporary attribute to the document before the selection works
		// around the issue.
		// Interestingly, IE 10 & older don't seem to have the issue.
		input = document.createElement( "input" );
		input.setAttribute( "name", "" );
		el.appendChild( input );
		if ( !el.querySelectorAll( "[name='']" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
				whitespace + "*(?:''|\"\")" );
		}
	} );

	if ( !support.cssHas ) {

		// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Our regular `try-catch` mechanism fails to detect natively-unsupported
		// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
		// in browsers that parse the `:has()` argument as a forgiving selector list.
		// https://drafts.csswg.org/selectors/#relational now requires the argument
		// to be parsed unforgivingly, but browsers have not yet fully adjusted.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a === document || a.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b === document || b.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	};

	return document;
}

find.matches = function( expr, elements ) {
	return find( expr, null, null, elements );
};

find.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return find( expr, document, null, [ elem ] ).length > 0;
};

find.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return jQuery.contains( context, elem );
};


find.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (see trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	if ( val !== undefined ) {
		return val;
	}

	return elem.getAttribute( name );
};

find.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
jQuery.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	//
	// Support: Android <=4.0+
	// Testing for detecting duplicates is unpredictable so instead assume we can't
	// depend on duplicate detection in all browsers without a stable sort.
	hasDuplicate = !support.sortStable;
	sortInput = !support.sortStable && slice.call( results, 0 );
	sort.call( results, sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			splice.call( results, duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

jQuery.fn.uniqueSort = function() {
	return this.pushStack( jQuery.uniqueSort( slice.apply( this ) ) );
};

Expr = jQuery.expr = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		ATTR: function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] || match[ 5 ] || "" )
				.replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		CHILD: function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					find.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" )
				);
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

			// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				find.error( match[ 0 ] );
			}

			return match;
		},

		PSEUDO: function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr.CHILD.test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		TAG: function( nodeNameSelector ) {
			var expectedNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return nodeName( elem, expectedNodeName );
				};
		},

		CLASS: function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace + ")" + className +
					"(" + whitespace + "|$)" ) ) &&
				classCache( className, function( elem ) {
					return pattern.test(
						typeof elem.className === "string" && elem.className ||
							typeof elem.getAttribute !== "undefined" &&
								elem.getAttribute( "class" ) ||
							""
					);
				} );
		},

		ATTR: function( name, operator, check ) {
			return function( elem ) {
				var result = find.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				if ( operator === "=" ) {
					return result === check;
				}
				if ( operator === "!=" ) {
					return result !== check;
				}
				if ( operator === "^=" ) {
					return check && result.indexOf( check ) === 0;
				}
				if ( operator === "*=" ) {
					return check && result.indexOf( check ) > -1;
				}
				if ( operator === "$=" ) {
					return check && result.slice( -check.length ) === check;
				}
				if ( operator === "~=" ) {
					return ( " " + result.replace( rwhitespace, " " ) + " " )
						.indexOf( check ) > -1;
				}
				if ( operator === "|=" ) {
					return result === check || result.slice( 0, check.length + 1 ) === check + "-";
				}

				return false;
			};
		},

		CHILD: function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || ( parent[ expando ] = {} );
							cache = outerCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {
								outerCache = elem[ expando ] || ( elem[ expando ] = {} );
								cache = outerCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );
											outerCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		PSEUDO: function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// https://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as jQuery does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		not: markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrimCSS, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element
					// (see https://github.com/jquery/sizzle/issues/299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		has: markFunction( function( selector ) {
			return function( elem ) {
				return find( selector, elem ).length > 0;
			};
		} ),

		contains: markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		lang: markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				find.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		target: function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		root: function( elem ) {
			return elem === documentElement;
		},

		focus: function( elem ) {
			return elem === safeActiveElement() &&
				document.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		enabled: createDisabledPseudo( false ),
		disabled: createDisabledPseudo( true ),

		checked: function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			return ( nodeName( elem, "input" ) && !!elem.checked ) ||
				( nodeName( elem, "option" ) && !!elem.selected );
		},

		selected: function( elem ) {

			// Support: IE <=11+
			// Accessing the selectedIndex property
			// forces the browser to treat the default option as
			// selected when in an optgroup.
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		empty: function( elem ) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		parent: function( elem ) {
			return !Expr.pseudos.empty( elem );
		},

		// Element/input types
		header: function( elem ) {
			return rheader.test( elem.nodeName );
		},

		input: function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		button: function( elem ) {
			return nodeName( elem, "input" ) && elem.type === "button" ||
				nodeName( elem, "button" );
		},

		text: function( elem ) {
			var attr;
			return nodeName( elem, "input" ) && elem.type === "text" &&

				// Support: IE <10 only
				// New HTML5 attribute values (e.g., "search") appear
				// with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		first: createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		last: createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		eq: createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		even: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		odd: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		lt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i;

			if ( argument < 0 ) {
				i = argument + length;
			} else if ( argument > length ) {
				i = length;
			} else {
				i = argument;
			}

			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		gt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rleadingCombinator.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrimCSS, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	if ( parseOnly ) {
		return soFar.length;
	}

	return soFar ?
		find.error( selector ) :

		// Cache the tokens
		tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						if ( skip && nodeName( elem, skip ) ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = outerCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							outerCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		find( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem, matcherOut,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed ||
				multipleContexts( selector || "*",
					context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems;

		if ( matcher ) {

			// If we have a postFinder, or filtered seed, or non-seed postFilter
			// or preexisting results,
			matcherOut = postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results;

			// Find primary matches
			matcher( matcherIn, matcherOut, context, xml );
		} else {
			matcherOut = matcherIn;
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf.call( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			var ret = ( !leadingRelative && ( xml || context != outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element
			// (see https://github.com/jquery/sizzle/issues/299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 )
							.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrimCSS, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find.TAG( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: iOS <=7 - 9 only
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
			// elements by id. (see trac-14142)
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							push.call( results, elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					jQuery.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

function compile( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
}

/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				context
			) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr.needsContext.test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) &&
						testContext( context.parentNode ) || context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
}

// One-time assignments

// Support: Android <=4.0 - 4.1+
// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Initialize against the default document
setDocument();

// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

jQuery.find = find;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
find.compile = compile;
find.select = select;
find.setDocument = setDocument;
find.tokenize = tokenize;

find.escape = jQuery.escapeSelector;
find.getText = jQuery.text;
find.isXML = jQuery.isXMLDoc;
find.selectors = jQuery.expr;
find.support = jQuery.support;
find.uniqueSort = jQuery.uniqueSort;

	/* eslint-enable */

} )();


var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to jQuery#find
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.error );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the error, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// The deprecated alias of the above. While the name suggests
								// returning the stack, not an error instance, jQuery just passes
								// it directly to `console.warn` so both will work; an instance
								// just better cooperates with source maps.
								} else if ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
jQuery.Deferred.exceptionHook = function( error, asyncError ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message,
			error.stack, asyncError );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", true );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, isSetup ) {

	// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
	if ( !isSetup ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					this[ type ]();
					result = dataPriv.get( this, type );
					dataPriv.set( this, type, false );

					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering
				// the native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(
					saved[ 0 ],
					saved.slice( 1 ),
					this
				) );

				// Abort handling of the native event by all jQuery handlers while allowing
				// native handlers on the same element to run. On target, this is achieved
				// by stopping immediate propagation just on the jQuery event. However,
				// the native event is re-wrapped by a jQuery one on each level of the
				// propagation so the only way to stop it for jQuery is to stop it for
				// everyone via native `stopPropagation()`. This is not a problem for
				// focus/blur which don't bubble, but it does also stop click on checkboxes
				// and radios. We accept this limitation.
				event.stopPropagation();
				event.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {

	function focusMappedHandler( nativeEvent ) {
		if ( document.documentMode ) {

			// Support: IE 11+
			// Attach a single focusin/focusout handler on the document while someone wants
			// focus/blur. This is because the former are synchronous in IE while the latter
			// are async. In other browsers, all those handlers are invoked synchronously.

			// `handle` from private data would already wrap the event, but we need
			// to change the `type` here.
			var handle = dataPriv.get( this, "handle" ),
				event = jQuery.event.fix( nativeEvent );
			event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
			event.isSimulated = true;

			// First, handle focusin/focusout
			handle( nativeEvent );

			// ...then, handle focus/blur
			//
			// focus/blur don't bubble while focusin/focusout do; simulate the former by only
			// invoking the handler at the lower level.
			if ( event.target === event.currentTarget ) {

				// The setup part calls `leverageNative`, which, in turn, calls
				// `jQuery.event.add`, so event handle will already have been set
				// by this point.
				handle( event );
			}
		} else {

			// For non-IE browsers, attach a single capturing handler on the document
			// while someone wants focusin/focusout.
			jQuery.event.simulate( delegateType, nativeEvent.target,
				jQuery.event.fix( nativeEvent ) );
		}
	}

	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			var attaches;

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, true );

			if ( document.documentMode ) {

				// Support: IE 9 - 11+
				// We use the same native handler for focusin & focus (and focusout & blur)
				// so we need to coordinate setup & teardown parts between those events.
				// Use `delegateType` as the key as `type` is already used by `leverageNative`.
				attaches = dataPriv.get( this, delegateType );
				if ( !attaches ) {
					this.addEventListener( delegateType, focusMappedHandler );
				}
				dataPriv.set( this, delegateType, ( attaches || 0 ) + 1 );
			} else {

				// Return false to allow normal processing in the caller
				return false;
			}
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		teardown: function() {
			var attaches;

			if ( document.documentMode ) {
				attaches = dataPriv.get( this, delegateType ) - 1;
				if ( !attaches ) {
					this.removeEventListener( delegateType, focusMappedHandler );
					dataPriv.remove( this, delegateType );
				} else {
					dataPriv.set( this, delegateType, attaches );
				}
			} else {

				// Return false to indicate standard teardown should be applied
				return false;
			}
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Support: IE 9 - 11+
	// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
	// attach a single handler for both events in IE.
	jQuery.event.special[ delegateType ] = {
		setup: function() {

			// Handle: regular nodes (via `this.ownerDocument`), window
			// (via `this.document`) & document (via `this`).
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType );

			// Support: IE 9 - 11+
			// We use the same native handler for focusin & focus (and focusout & blur)
			// so we need to coordinate setup & teardown parts between those events.
			// Use `delegateType` as the key as `type` is already used by `leverageNative`.
			if ( !attaches ) {
				if ( document.documentMode ) {
					this.addEventListener( delegateType, focusMappedHandler );
				} else {
					doc.addEventListener( type, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, delegateType, ( attaches || 0 ) + 1 );
		},
		teardown: function() {
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType ) - 1;

			if ( !attaches ) {
				if ( document.documentMode ) {
					this.removeEventListener( delegateType, focusMappedHandler );
				} else {
					doc.removeEventListener( type, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, delegateType );
			} else {
				dataPriv.set( dataHolder, delegateType, attaches );
			}
		}
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Re-enable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew jQuery#find here for performance reasons:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "box-sizing:content-box;border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is `display: block`
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0,
		marginDelta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		// Count margin delta separately to only add it after scroll gutter adjustment.
		// This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
		if ( box === "margin" ) {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta + marginDelta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		animationIterationCount: true,
		aspectRatio: true,
		borderImageSlice: true,
		columnCount: true,
		flexGrow: true,
		flexShrink: true,
		fontWeight: true,
		gridArea: true,
		gridColumn: true,
		gridColumnEnd: true,
		gridColumnStart: true,
		gridRow: true,
		gridRowEnd: true,
		gridRowStart: true,
		lineHeight: true,
		opacity: true,
		order: true,
		orphans: true,
		scale: true,
		widows: true,
		zIndex: true,
		zoom: true,

		// SVG-related
		fillOpacity: true,
		floodOpacity: true,
		stopOpacity: true,
		strokeMiterlimit: true,
		strokeOpacity: true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this
			.on( "mouseenter", fnOver )
			.on( "mouseleave", fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
/* <script src="https://code.jquery.com/jquery-3.7.1.js"></script> */

/* <script src="https://cdn.jsdelivr.net/npm/vue@2"></script> */
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Vue=e()}(this,(function(){"use strict";var t=Object.freeze({}),e=Array.isArray;function n(t){return null==t}function r(t){return null!=t}function o(t){return!0===t}function i(t){return"string"==typeof t||"number"==typeof t||"symbol"==typeof t||"boolean"==typeof t}function a(t){return"function"==typeof t}function s(t){return null!==t&&"object"==typeof t}var c=Object.prototype.toString;function u(t){return"[object Object]"===c.call(t)}function l(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return r(t)&&"function"==typeof t.then&&"function"==typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===c?JSON.stringify(t,p,2):String(t)}function p(t,e){return e&&e.__v_isRef?e.value:e}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function h(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}var m=h("slot,component",!0),g=h("key,ref,slot,slot-scope,is");function y(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var _=Object.prototype.hasOwnProperty;function b(t,e){return _.call(t,e)}function $(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var w=/-(\w)/g,x=$((function(t){return t.replace(w,(function(t,e){return e?e.toUpperCase():""}))})),C=$((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),k=/\B([A-Z])/g,S=$((function(t){return t.replace(k,"-$1").toLowerCase()}));var O=Function.prototype.bind?function(t,e){return t.bind(e)}:function(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n};function T(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function A(t,e){for(var n in e)t[n]=e[n];return t}function j(t){for(var e={},n=0;n<t.length;n++)t[n]&&A(e,t[n]);return e}function E(t,e,n){}var N=function(t,e,n){return!1},P=function(t){return t};function D(t,e){if(t===e)return!0;var n=s(t),r=s(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every((function(t,n){return D(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),c=Object.keys(e);return a.length===c.length&&a.every((function(n){return D(t[n],e[n])}))}catch(t){return!1}}function M(t,e){for(var n=0;n<t.length;n++)if(D(t[n],e))return n;return-1}function I(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function L(t,e){return t===e?0===t&&1/t!=1/e:t==t||e==e}var R="data-server-rendered",F=["component","directive","filter"],H=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:E,parsePlatformTagName:P,mustUseProp:N,async:!0,_lifecycleHooks:H},U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function V(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var K=new RegExp("[^".concat(U.source,".$_\\d]"));var J="__proto__"in{},q="undefined"!=typeof window,W=q&&window.navigator.userAgent.toLowerCase(),Z=W&&/msie|trident/.test(W),G=W&&W.indexOf("msie 9.0")>0,X=W&&W.indexOf("edge/")>0;W&&W.indexOf("android");var Y=W&&/iphone|ipad|ipod|ios/.test(W);W&&/chrome\/\d+/.test(W),W&&/phantomjs/.test(W);var Q,tt=W&&W.match(/firefox\/(\d+)/),et={}.watch,nt=!1;if(q)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){nt=!0}}),window.addEventListener("test-passive",null,rt)}catch(t){}var ot=function(){return void 0===Q&&(Q=!q&&"undefined"!=typeof global&&(global.process&&"server"===global.process.env.VUE_ENV)),Q},it=q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"==typeof t&&/native code/.test(t.toString())}var st,ct="undefined"!=typeof Symbol&&at(Symbol)&&"undefined"!=typeof Reflect&&at(Reflect.ownKeys);st="undefined"!=typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=null;function lt(t){void 0===t&&(t=null),t||ut&&ut._scope.off(),ut=t,t&&t._scope.on()}var ft=function(){function t(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),dt=function(t){void 0===t&&(t="");var e=new ft;return e.text=t,e.isComment=!0,e};function pt(t){return new ft(void 0,void 0,void 0,String(t))}function vt(t){var e=new ft(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}"function"==typeof SuppressedError&&SuppressedError;var ht=0,mt=[],gt=function(){for(var t=0;t<mt.length;t++){var e=mt[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}mt.length=0},yt=function(){function t(){this._pending=!1,this.id=ht++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,mt.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){for(var e=this.subs.filter((function(t){return t})),n=0,r=e.length;n<r;n++){e[n].update()}},t}();yt.target=null;var _t=[];function bt(t){_t.push(t),yt.target=t}function $t(){_t.pop(),yt.target=_t[_t.length-1]}var wt=Array.prototype,xt=Object.create(wt);["push","pop","shift","unshift","splice","sort","reverse"].forEach((function(t){var e=wt[t];V(xt,t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2)}return o&&a.observeArray(o),a.dep.notify(),i}))}));var Ct=Object.getOwnPropertyNames(xt),kt={},St=!0;function Ot(t){St=t}var Tt={notify:E,depend:E,addSub:E,removeSub:E},At=function(){function t(t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!1),this.value=t,this.shallow=n,this.mock=r,this.dep=r?Tt:new yt,this.vmCount=0,V(t,"__ob__",this),e(t)){if(!r)if(J)t.__proto__=xt;else for(var o=0,i=Ct.length;o<i;o++){V(t,s=Ct[o],xt[s])}n||this.observeArray(t)}else{var a=Object.keys(t);for(o=0;o<a.length;o++){var s;Et(t,s=a[o],kt,void 0,n,r)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)jt(t[e],!1,this.mock)},t}();function jt(t,n,r){return t&&b(t,"__ob__")&&t.__ob__ instanceof At?t.__ob__:!St||!r&&ot()||!e(t)&&!u(t)||!Object.isExtensible(t)||t.__v_skip||Bt(t)||t instanceof ft?void 0:new At(t,n,r)}function Et(t,n,r,o,i,a,s){void 0===s&&(s=!1);var c=new yt,u=Object.getOwnPropertyDescriptor(t,n);if(!u||!1!==u.configurable){var l=u&&u.get,f=u&&u.set;l&&!f||r!==kt&&2!==arguments.length||(r=t[n]);var d=i?r&&r.__ob__:jt(r,!1,a);return Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var n=l?l.call(t):r;return yt.target&&(c.depend(),d&&(d.dep.depend(),e(n)&&Dt(n))),Bt(n)&&!i?n.value:n},set:function(e){var n=l?l.call(t):r;if(L(n,e)){if(f)f.call(t,e);else{if(l)return;if(!i&&Bt(n)&&!Bt(e))return void(n.value=e);r=e}d=i?e&&e.__ob__:jt(e,!1,a),c.notify()}}}),c}}function Nt(t,n,r){if(!Ft(t)){var o=t.__ob__;return e(t)&&l(n)?(t.length=Math.max(t.length,n),t.splice(n,1,r),o&&!o.shallow&&o.mock&&jt(r,!1,!0),r):n in t&&!(n in Object.prototype)?(t[n]=r,r):t._isVue||o&&o.vmCount?r:o?(Et(o.value,n,r,void 0,o.shallow,o.mock),o.dep.notify(),r):(t[n]=r,r)}}function Pt(t,n){if(e(t)&&l(n))t.splice(n,1);else{var r=t.__ob__;t._isVue||r&&r.vmCount||Ft(t)||b(t,n)&&(delete t[n],r&&r.dep.notify())}}function Dt(t){for(var n=void 0,r=0,o=t.length;r<o;r++)(n=t[r])&&n.__ob__&&n.__ob__.dep.depend(),e(n)&&Dt(n)}function Mt(t){return It(t,!0),V(t,"__v_isShallow",!0),t}function It(t,e){Ft(t)||jt(t,e,ot())}function Lt(t){return Ft(t)?Lt(t.__v_raw):!(!t||!t.__ob__)}function Rt(t){return!(!t||!t.__v_isShallow)}function Ft(t){return!(!t||!t.__v_isReadonly)}var Ht="__v_isRef";function Bt(t){return!(!t||!0!==t.__v_isRef)}function Ut(t,e){if(Bt(t))return t;var n={};return V(n,Ht,!0),V(n,"__v_isShallow",e),V(n,"dep",Et(n,"value",t,null,e,ot())),n}function zt(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Bt(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];Bt(r)&&!Bt(t)?r.value=t:e[n]=t}})}function Vt(t,e,n){var r=t[e];if(Bt(r))return r;var o={get value(){var r=t[e];return void 0===r?n:r},set value(n){t[e]=n}};return V(o,Ht,!0),o}var Kt="__v_rawToReadonly",Jt="__v_rawToShallowReadonly";function qt(t){return Wt(t,!1)}function Wt(t,e){if(!u(t))return t;if(Ft(t))return t;var n=e?Jt:Kt,r=t[n];if(r)return r;var o=Object.create(Object.getPrototypeOf(t));V(t,n,o),V(o,"__v_isReadonly",!0),V(o,"__v_raw",t),Bt(t)&&V(o,Ht,!0),(e||Rt(t))&&V(o,"__v_isShallow",!0);for(var i=Object.keys(t),a=0;a<i.length;a++)Zt(o,t,i[a],e);return o}function Zt(t,e,n,r){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];return r||!u(t)?t:qt(t)},set:function(){}})}var Gt=$((function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=r?t.slice(1):t,once:n,capture:r,passive:e}}));function Xt(t,n){function r(){var t=r.fns;if(!e(t))return _n(t,null,arguments,n,"v-on handler");for(var o=t.slice(),i=0;i<o.length;i++)_n(o[i],null,arguments,n,"v-on handler")}return r.fns=t,r}function Yt(t,e,r,i,a,s){var c,u,l,f;for(c in t)u=t[c],l=e[c],f=Gt(c),n(u)||(n(l)?(n(u.fns)&&(u=t[c]=Xt(u,s)),o(f.once)&&(u=t[c]=a(f.name,u,f.capture)),r(f.name,u,f.capture,f.passive,f.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)n(t[c])&&i((f=Gt(c)).name,e[c],f.capture)}function Qt(t,e,i){var a;t instanceof ft&&(t=t.data.hook||(t.data.hook={}));var s=t[e];function c(){i.apply(this,arguments),y(a.fns,c)}n(s)?a=Xt([c]):r(s.fns)&&o(s.merged)?(a=s).fns.push(c):a=Xt([s,c]),a.merged=!0,t[e]=a}function te(t,e,n,o,i){if(r(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,o))return t[n]=e[o],i||delete e[o],!0}return!1}function ee(t){return i(t)?[pt(t)]:e(t)?re(t):void 0}function ne(t){return r(t)&&r(t.text)&&!1===t.isComment}function re(t,a){var s,c,u,l,f=[];for(s=0;s<t.length;s++)n(c=t[s])||"boolean"==typeof c||(l=f[u=f.length-1],e(c)?c.length>0&&(ne((c=re(c,"".concat(a||"","_").concat(s)))[0])&&ne(l)&&(f[u]=pt(l.text+c[0].text),c.shift()),f.push.apply(f,c)):i(c)?ne(l)?f[u]=pt(l.text+c):""!==c&&f.push(pt(c)):ne(c)&&ne(l)?f[u]=pt(l.text+c.text):(o(t._isVList)&&r(c.tag)&&n(c.key)&&r(a)&&(c.key="__vlist".concat(a,"_").concat(s,"__")),f.push(c)));return f}var oe=1,ie=2;function ae(t,n,c,u,l,f){return(e(c)||i(c))&&(l=u,u=c,c=void 0),o(f)&&(l=ie),function(t,n,o,i,c){if(r(o)&&r(o.__ob__))return dt();r(o)&&r(o.is)&&(n=o.is);if(!n)return dt();e(i)&&a(i[0])&&((o=o||{}).scopedSlots={default:i[0]},i.length=0);c===ie?i=ee(i):c===oe&&(i=function(t){for(var n=0;n<t.length;n++)if(e(t[n]))return Array.prototype.concat.apply([],t);return t}(i));var u,l;if("string"==typeof n){var f=void 0;l=t.$vnode&&t.$vnode.ns||B.getTagNamespace(n),u=B.isReservedTag(n)?new ft(B.parsePlatformTagName(n),o,i,void 0,void 0,t):o&&o.pre||!r(f=kr(t.$options,"components",n))?new ft(n,o,i,void 0,void 0,t):hr(f,o,t,i,n)}else u=hr(n,o,t,i);return e(u)?u:r(u)?(r(l)&&se(u,l),r(o)&&function(t){s(t.style)&&Wn(t.style);s(t.class)&&Wn(t.class)}(o),u):dt()}(t,n,c,u,l)}function se(t,e,i){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,i=!0),r(t.children))for(var a=0,s=t.children.length;a<s;a++){var c=t.children[a];r(c.tag)&&(n(c.ns)||o(i)&&"svg"!==c.tag)&&se(c,e,i)}}function ce(t,n){var o,i,a,c,u=null;if(e(t)||"string"==typeof t)for(u=new Array(t.length),o=0,i=t.length;o<i;o++)u[o]=n(t[o],o);else if("number"==typeof t)for(u=new Array(t),o=0;o<t;o++)u[o]=n(o+1,o);else if(s(t))if(ct&&t[Symbol.iterator]){u=[];for(var l=t[Symbol.iterator](),f=l.next();!f.done;)u.push(n(f.value,u.length)),f=l.next()}else for(a=Object.keys(t),u=new Array(a.length),o=0,i=a.length;o<i;o++)c=a[o],u[o]=n(t[c],c,o);return r(u)||(u=[]),u._isVList=!0,u}function ue(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=A(A({},r),n)),o=i(n)||(a(e)?e():e)):o=this.$slots[t]||(a(e)?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},o):o}function le(t){return kr(this.$options,"filters",t)||P}function fe(t,n){return e(t)?-1===t.indexOf(n):t!==n}function de(t,e,n,r,o){var i=B.keyCodes[e]||n;return o&&r&&!B.keyCodes[e]?fe(o,r):i?fe(i,t):r?S(r)!==e:void 0===t}function pe(t,n,r,o,i){if(r)if(s(r)){e(r)&&(r=j(r));var a=void 0,c=function(e){if("class"===e||"style"===e||g(e))a=t;else{var s=t.attrs&&t.attrs.type;a=o||B.mustUseProp(n,s,e)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=x(e),u=S(e);c in a||u in a||(a[e]=r[e],i&&((t.on||(t.on={}))["update:".concat(e)]=function(t){r[e]=t}))};for(var u in r)c(u)}else;return t}function ve(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||me(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),"__static__".concat(t),!1),r}function he(t,e,n){return me(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function me(t,n,r){if(e(t))for(var o=0;o<t.length;o++)t[o]&&"string"!=typeof t[o]&&ge(t[o],"".concat(n,"_").concat(o),r);else ge(t,n,r)}function ge(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ye(t,e){if(e)if(u(e)){var n=t.on=t.on?A({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function _e(t,n,r,o){n=n||{$stable:!r};for(var i=0;i<t.length;i++){var a=t[i];e(a)?_e(a,n,r):a&&(a.proxy&&(a.fn.proxy=!0),n[a.key]=a.fn)}return o&&(n.$key=o),n}function be(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"==typeof r&&r&&(t[e[n]]=e[n+1])}return t}function $e(t,e){return"string"==typeof t?e+t:t}function we(t){t._o=he,t._n=v,t._s=d,t._l=ce,t._t=ue,t._q=D,t._i=M,t._m=ve,t._f=le,t._k=de,t._b=pe,t._v=pt,t._e=dt,t._u=_e,t._g=ye,t._d=be,t._p=$e}function xe(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(i);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i)}}for(var u in n)n[u].every(Ce)&&delete n[u];return n}function Ce(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t){return t.isComment&&t.asyncFactory}function Se(e,n,r,o){var i,a=Object.keys(r).length>0,s=n?!!n.$stable:!a,c=n&&n.$key;if(n){if(n._normalized)return n._normalized;if(s&&o&&o!==t&&c===o.$key&&!a&&!o.$hasNormal)return o;for(var u in i={},n)n[u]&&"$"!==u[0]&&(i[u]=Oe(e,r,u,n[u]))}else i={};for(var l in r)l in i||(i[l]=Te(r,l));return n&&Object.isExtensible(n)&&(n._normalized=i),V(i,"$stable",s),V(i,"$key",c),V(i,"$hasNormal",a),i}function Oe(t,n,r,o){var i=function(){var n=ut;lt(t);var r=arguments.length?o.apply(null,arguments):o({}),i=(r=r&&"object"==typeof r&&!e(r)?[r]:ee(r))&&r[0];return lt(n),r&&(!i||1===r.length&&i.isComment&&!ke(i))?void 0:r};return o.proxy&&Object.defineProperty(n,r,{get:i,enumerable:!0,configurable:!0}),i}function Te(t,e){return function(){return t[e]}}function Ae(e){return{get attrs(){if(!e._attrsProxy){var n=e._attrsProxy={};V(n,"_v_attr_proxy",!0),je(n,e.$attrs,t,e,"$attrs")}return e._attrsProxy},get listeners(){e._listenersProxy||je(e._listenersProxy={},e.$listeners,t,e,"$listeners");return e._listenersProxy},get slots(){return function(t){t._slotsProxy||Ne(t._slotsProxy={},t.$scopedSlots);return t._slotsProxy}(e)},emit:O(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach((function(n){return zt(e,t,n)}))}}}function je(t,e,n,r,o){var i=!1;for(var a in e)a in t?e[a]!==n[a]&&(i=!0):(i=!0,Ee(t,a,r,o));for(var a in t)a in e||(i=!0,delete t[a]);return i}function Ee(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function Ne(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function Pe(){var t=ut;return t._setupContext||(t._setupContext=Ae(t))}var De,Me,Ie=null;function Le(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),s(t)?e.extend(t):t}function Re(t){if(e(t))for(var n=0;n<t.length;n++){var o=t[n];if(r(o)&&(r(o.componentOptions)||ke(o)))return o}}function Fe(t,e){De.$on(t,e)}function He(t,e){De.$off(t,e)}function Be(t,e){var n=De;return function r(){null!==e.apply(null,arguments)&&n.$off(t,r)}}function Ue(t,e,n){De=t,Yt(e,n||{},Fe,He,Be,t),De=void 0}var ze=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Me;try{return Me=this,t()}finally{Me=e}}},t.prototype.on=function(){Me=this},t.prototype.off=function(){Me=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Ve(){return Me}var Ke=null;function Je(t){var e=Ke;return Ke=t,function(){Ke=e}}function qe(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function We(t,e){if(e){if(t._directInactive=!1,qe(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)We(t.$children[n]);Ge(t,"activated")}}function Ze(t,e){if(!(e&&(t._directInactive=!0,qe(t))||t._inactive)){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Ze(t.$children[n]);Ge(t,"deactivated")}}function Ge(t,e,n,r){void 0===r&&(r=!0),bt();var o=ut,i=Ve();r&&lt(t);var a=t.$options[e],s="".concat(e," hook");if(a)for(var c=0,u=a.length;c<u;c++)_n(a[c],t,n||null,t,s);t._hasHookEvent&&t.$emit("hook:"+e),r&&(lt(o),i&&i.on()),$t()}var Xe=[],Ye=[],Qe={},tn=!1,en=!1,nn=0;var rn=0,on=Date.now;if(q&&!Z){var an=window.performance;an&&"function"==typeof an.now&&on()>document.createEvent("Event").timeStamp&&(on=function(){return an.now()})}var sn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function cn(){var t,e;for(rn=on(),en=!0,Xe.sort(sn),nn=0;nn<Xe.length;nn++)(t=Xe[nn]).before&&t.before(),e=t.id,Qe[e]=null,t.run();var n=Ye.slice(),r=Xe.slice();nn=Xe.length=Ye.length=0,Qe={},tn=en=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,We(t[e],!0)}(n),function(t){var e=t.length;for(;e--;){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Ge(r,"updated")}}(r),gt(),it&&B.devtools&&it.emit("flush")}function un(t){var e=t.id;if(null==Qe[e]&&(t!==yt.target||!t.noRecurse)){if(Qe[e]=!0,en){for(var n=Xe.length-1;n>nn&&Xe[n].id>t.id;)n--;Xe.splice(n+1,0,t)}else Xe.push(t);tn||(tn=!0,En(cn))}}var ln="watcher",fn="".concat(ln," callback"),dn="".concat(ln," getter"),pn="".concat(ln," cleanup");function vn(t,e){return mn(t,null,{flush:"post"})}var hn={};function mn(n,r,o){var i=void 0===o?t:o,s=i.immediate,c=i.deep,u=i.flush,l=void 0===u?"pre":u;i.onTrack,i.onTrigger;var f,d,p=ut,v=function(t,e,n){void 0===n&&(n=null);var r=_n(t,null,n,p,e);return c&&r&&r.__ob__&&r.__ob__.dep.depend(),r},h=!1,m=!1;if(Bt(n)?(f=function(){return n.value},h=Rt(n)):Lt(n)?(f=function(){return n.__ob__.dep.depend(),n},c=!0):e(n)?(m=!0,h=n.some((function(t){return Lt(t)||Rt(t)})),f=function(){return n.map((function(t){return Bt(t)?t.value:Lt(t)?(t.__ob__.dep.depend(),Wn(t)):a(t)?v(t,dn):void 0}))}):f=a(n)?r?function(){return v(n,dn)}:function(){if(!p||!p._isDestroyed)return d&&d(),v(n,ln,[y])}:E,r&&c){var g=f;f=function(){return Wn(g())}}var y=function(t){d=_.onStop=function(){v(t,pn)}};if(ot())return y=E,r?s&&v(r,fn,[f(),m?[]:void 0,y]):f(),E;var _=new Xn(ut,f,E,{lazy:!0});_.noRecurse=!r;var b=m?[]:hn;return _.run=function(){if(_.active)if(r){var t=_.get();(c||h||(m?t.some((function(t,e){return L(t,b[e])})):L(t,b)))&&(d&&d(),v(r,fn,[t,b===hn?void 0:b,y]),b=t)}else _.get()},"sync"===l?_.update=_.run:"post"===l?(_.post=!0,_.update=function(){return un(_)}):_.update=function(){if(p&&p===ut&&!p._isMounted){var t=p._preWatchers||(p._preWatchers=[]);t.indexOf(_)<0&&t.push(_)}else un(_)},r?s?_.run():b=_.get():"post"===l&&p?p.$once("hook:mounted",(function(){return _.get()})):_.get(),function(){_.teardown()}}function gn(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}function yn(t,e,n){bt();try{if(e)for(var r=e;r=r.$parent;){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{if(!1===o[i].call(r,t,e,n))return}catch(t){bn(t,r,"errorCaptured hook")}}bn(t,e,n)}finally{$t()}}function _n(t,e,n,r,o){var i;try{(i=n?t.apply(e,n):t.call(e))&&!i._isVue&&f(i)&&!i._handled&&(i.catch((function(t){return yn(t,r,o+" (Promise/async)")})),i._handled=!0)}catch(t){yn(t,r,o)}return i}function bn(t,e,n){if(B.errorHandler)try{return B.errorHandler.call(null,t,e,n)}catch(e){e!==t&&$n(e)}$n(t)}function $n(t,e,n){if(!q||"undefined"==typeof console)throw t;console.error(t)}var wn,xn=!1,Cn=[],kn=!1;function Sn(){kn=!1;var t=Cn.slice(0);Cn.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!=typeof Promise&&at(Promise)){var On=Promise.resolve();wn=function(){On.then(Sn),Y&&setTimeout(E)},xn=!0}else if(Z||"undefined"==typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())wn="undefined"!=typeof setImmediate&&at(setImmediate)?function(){setImmediate(Sn)}:function(){setTimeout(Sn,0)};else{var Tn=1,An=new MutationObserver(Sn),jn=document.createTextNode(String(Tn));An.observe(jn,{characterData:!0}),wn=function(){Tn=(Tn+1)%2,jn.data=String(Tn)},xn=!0}function En(t,e){var n;if(Cn.push((function(){if(t)try{t.call(e)}catch(t){yn(t,e,"nextTick")}else n&&n(e)})),kn||(kn=!0,wn()),!t&&"undefined"!=typeof Promise)return new Promise((function(t){n=t}))}function Nn(t){return function(e,n){if(void 0===n&&(n=ut),n)return function(t,e,n){var r=t.$options;r[e]=$r(r[e],n)}(n,t,e)}}var Pn=Nn("beforeMount"),Dn=Nn("mounted"),Mn=Nn("beforeUpdate"),In=Nn("updated"),Ln=Nn("beforeDestroy"),Rn=Nn("destroyed"),Fn=Nn("activated"),Hn=Nn("deactivated"),Bn=Nn("serverPrefetch"),Un=Nn("renderTracked"),zn=Nn("renderTriggered"),Vn=Nn("errorCaptured");var Kn="2.7.16";var Jn=Object.freeze({__proto__:null,version:Kn,defineComponent:function(t){return t},ref:function(t){return Ut(t,!1)},shallowRef:function(t){return Ut(t,!0)},isRef:Bt,toRef:Vt,toRefs:function(t){var n=e(t)?new Array(t.length):{};for(var r in t)n[r]=Vt(t,r);return n},unref:function(t){return Bt(t)?t.value:t},proxyRefs:function(t){if(Lt(t))return t;for(var e={},n=Object.keys(t),r=0;r<n.length;r++)zt(e,t,n[r]);return e},customRef:function(t){var e=new yt,n=t((function(){e.depend()}),(function(){e.notify()})),r=n.get,o=n.set,i={get value(){return r()},set value(t){o(t)}};return V(i,Ht,!0),i},triggerRef:function(t){t.dep&&t.dep.notify()},reactive:function(t){return It(t,!1),t},isReactive:Lt,isReadonly:Ft,isShallow:Rt,isProxy:function(t){return Lt(t)||Ft(t)},shallowReactive:Mt,markRaw:function(t){return Object.isExtensible(t)&&V(t,"__v_skip",!0),t},toRaw:function t(e){var n=e&&e.__v_raw;return n?t(n):e},readonly:qt,shallowReadonly:function(t){return Wt(t,!0)},computed:function(t,e){var n,r,o=a(t);o?(n=t,r=E):(n=t.get,r=t.set);var i=ot()?null:new Xn(ut,n,E,{lazy:!0}),s={effect:i,get value(){return i?(i.dirty&&i.evaluate(),yt.target&&i.depend(),i.value):n()},set value(t){r(t)}};return V(s,Ht,!0),V(s,"__v_isReadonly",o),s},watch:function(t,e,n){return mn(t,e,n)},watchEffect:function(t,e){return mn(t,null,e)},watchPostEffect:vn,watchSyncEffect:function(t,e){return mn(t,null,{flush:"sync"})},EffectScope:ze,effectScope:function(t){return new ze(t)},onScopeDispose:function(t){Me&&Me.cleanups.push(t)},getCurrentScope:Ve,provide:function(t,e){ut&&(gn(ut)[t]=e)},inject:function(t,e,n){void 0===n&&(n=!1);var r=ut;if(r){var o=r.$parent&&r.$parent._provided;if(o&&t in o)return o[t];if(arguments.length>1)return n&&a(e)?e.call(r):e}},h:function(t,e,n){return ae(ut,t,e,n,2,!0)},getCurrentInstance:function(){return ut&&{proxy:ut}},useSlots:function(){return Pe().slots},useAttrs:function(){return Pe().attrs},useListeners:function(){return Pe().listeners},mergeDefaults:function(t,n){var r=e(t)?t.reduce((function(t,e){return t[e]={},t}),{}):t;for(var o in n){var i=r[o];i?e(i)||a(i)?r[o]={type:i,default:n[o]}:i.default=n[o]:null===i&&(r[o]={default:n[o]})}return r},nextTick:En,set:Nt,del:Pt,useCssModule:function(e){return t},useCssVars:function(t){if(q){var e=ut;e&&vn((function(){var n=e.$el,r=t(e,e._setupProxy);if(n&&1===n.nodeType){var o=n.style;for(var i in r)o.setProperty("--".concat(i),r[i])}}))}},defineAsyncComponent:function(t){a(t)&&(t={loader:t});var e=t.loader,n=t.loadingComponent,r=t.errorComponent,o=t.delay,i=void 0===o?200:o,s=t.timeout;t.suspensible;var c=t.onError,u=null,l=0,f=function(){var t;return u||(t=u=e().catch((function(t){if(t=t instanceof Error?t:new Error(String(t)),c)return new Promise((function(e,n){c(t,(function(){return e((l++,u=null,f()))}),(function(){return n(t)}),l+1)}));throw t})).then((function(e){return t!==u&&u?u:(e&&(e.__esModule||"Module"===e[Symbol.toStringTag])&&(e=e.default),e)})))};return function(){return{component:f(),delay:i,timeout:s,error:r,loading:n}}},onBeforeMount:Pn,onMounted:Dn,onBeforeUpdate:Mn,onUpdated:In,onBeforeUnmount:Ln,onUnmounted:Rn,onActivated:Fn,onDeactivated:Hn,onServerPrefetch:Bn,onRenderTracked:Un,onRenderTriggered:zn,onErrorCaptured:function(t,e){void 0===e&&(e=ut),Vn(t,e)}}),qn=new st;function Wn(t){return Zn(t,qn),qn.clear(),t}function Zn(t,n){var r,o,i=e(t);if(!(!i&&!s(t)||t.__v_skip||Object.isFrozen(t)||t instanceof ft)){if(t.__ob__){var a=t.__ob__.dep.id;if(n.has(a))return;n.add(a)}if(i)for(r=t.length;r--;)Zn(t[r],n);else if(Bt(t))Zn(t.value,n);else for(r=(o=Object.keys(t)).length;r--;)Zn(t[o[r]],n)}}var Gn=0,Xn=function(){function t(t,e,n,r,o){!function(t,e){void 0===e&&(e=Me),e&&e.active&&e.effects.push(t)}(this,Me&&!Me._vm?Me:t?t._scope:void 0),(this.vm=t)&&o&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Gn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="",a(e)?this.getter=e:(this.getter=function(t){if(!K.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=E)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;bt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(t){if(!this.user)throw t;yn(t,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&Wn(t),$t(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():un(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||s(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');_n(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&y(this.vm._scope.effects,this),this.active){for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}(),Yn={enumerable:!0,configurable:!0,get:E,set:E};function Qn(t,e,n){Yn.get=function(){return this[e][n]},Yn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Yn)}function tr(t){var n=t.$options;if(n.props&&function(t,e){var n=t.$options.propsData||{},r=t._props=Mt({}),o=t.$options._propKeys=[],i=!t.$parent;i||Ot(!1);var a=function(i){o.push(i);var a=Sr(i,e,n,t);Et(r,i,a,void 0,!0),i in t||Qn(t,"_props",i)};for(var s in e)a(s);Ot(!0)}(t,n.props),function(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=Ae(t);lt(t),bt();var o=_n(n,null,[t._props||Mt({}),r],t,"setup");if($t(),lt(),a(o))e.render=o;else if(s(o))if(t._setupState=o,o.__sfc){var i=t._setupProxy={};for(var c in o)"__sfc"!==c&&zt(i,o,c)}else for(var c in o)z(c)||zt(t,o,c)}}(t),n.methods&&function(t,e){for(var n in t.$options.props,e)t[n]="function"!=typeof e[n]?E:O(e[n],t)}(t,n.methods),n.data)!function(t){var e=t.$options.data;e=t._data=a(e)?function(t,e){bt();try{return t.call(e,e)}catch(t){return yn(t,e,"data()"),{}}finally{$t()}}(e,t):e||{},u(e)||(e={});var n=Object.keys(e),r=t.$options.props;t.$options.methods;var o=n.length;for(;o--;){var i=n[o];r&&b(r,i)||z(i)||Qn(t,"_data",i)}var s=jt(e);s&&s.vmCount++}(t);else{var r=jt(t._data={});r&&r.vmCount++}n.computed&&function(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],s=a(i)?i:i.get;r||(n[o]=new Xn(t,s||E,E,er)),o in t||nr(t,o,i)}}(t,n.computed),n.watch&&n.watch!==et&&function(t,n){for(var r in n){var o=n[r];if(e(o))for(var i=0;i<o.length;i++)ir(t,r,o[i]);else ir(t,r,o)}}(t,n.watch)}var er={lazy:!0};function nr(t,e,n){var r=!ot();a(n)?(Yn.get=r?rr(e):or(n),Yn.set=E):(Yn.get=n.get?r&&!1!==n.cache?rr(e):or(n.get):E,Yn.set=n.set||E),Object.defineProperty(t,e,Yn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),yt.target&&e.depend(),e.value}}function or(t){return function(){return t.call(this,this)}}function ir(t,e,n,r){return u(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function ar(t,e){if(t){for(var n=Object.create(null),r=ct?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var s=t[i].from;if(s in e._provided)n[i]=e._provided[s];else if("default"in t[i]){var c=t[i].default;n[i]=a(c)?c.call(e):c}}}return n}}var sr=0;function cr(t){var e=t.options;if(t.super){var n=cr(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}(t);r&&A(t.extendOptions,r),(e=t.options=Cr(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function ur(n,r,i,a,s){var c,u=this,l=s.options;b(a,"_uid")?(c=Object.create(a))._original=a:(c=a,a=a._original);var f=o(l._compiled),d=!f;this.data=n,this.props=r,this.children=i,this.parent=a,this.listeners=n.on||t,this.injections=ar(l.inject,a),this.slots=function(){return u.$slots||Se(a,n.scopedSlots,u.$slots=xe(i,a)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Se(a,n.scopedSlots,this.slots())}}),f&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Se(a,n.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,n,r,o){var i=ae(c,t,n,r,o,d);return i&&!e(i)&&(i.fnScopeId=l._scopeId,i.fnContext=a),i}:this._c=function(t,e,n,r){return ae(c,t,e,n,r,d)}}function lr(t,e,n,r,o){var i=vt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function fr(t,e){for(var n in e)t[x(n)]=e[n]}function dr(t){return t.name||t.__name||t._componentTag}we(ur.prototype);var pr={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;pr.prepatch(n,n)}else{(t.componentInstance=function(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},o=t.data.inlineTemplate;r(o)&&(n.render=o.render,n.staticRenderFns=o.staticRenderFns);return new t.componentOptions.Ctor(n)}(t,Ke)).$mount(e?t.elm:void 0,e)}},prepatch:function(e,n){var r=n.componentOptions;!function(e,n,r,o,i){var a=o.data.scopedSlots,s=e.$scopedSlots,c=!!(a&&!a.$stable||s!==t&&!s.$stable||a&&e.$scopedSlots.$key!==a.$key||!a&&e.$scopedSlots.$key),u=!!(i||e.$options._renderChildren||c),l=e.$vnode;e.$options._parentVnode=o,e.$vnode=o,e._vnode&&(e._vnode.parent=o),e.$options._renderChildren=i;var f=o.data.attrs||t;e._attrsProxy&&je(e._attrsProxy,f,l.data&&l.data.attrs||t,e,"$attrs")&&(u=!0),e.$attrs=f,r=r||t;var d=e.$options._parentListeners;if(e._listenersProxy&&je(e._listenersProxy,r,d||t,e,"$listeners"),e.$listeners=e.$options._parentListeners=r,Ue(e,r,d),n&&e.$options.props){Ot(!1);for(var p=e._props,v=e.$options._propKeys||[],h=0;h<v.length;h++){var m=v[h],g=e.$options.props;p[m]=Sr(m,g,n,e)}Ot(!0),e.$options.propsData=n}u&&(e.$slots=xe(i,o.context),e.$forceUpdate())}(n.componentInstance=e.componentInstance,r.propsData,r.listeners,n,r.children)},insert:function(t){var e,n=t.context,r=t.componentInstance;r._isMounted||(r._isMounted=!0,Ge(r,"mounted")),t.data.keepAlive&&(n._isMounted?((e=r)._inactive=!1,Ye.push(e)):We(r,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Ze(e,!0):e.$destroy())}},vr=Object.keys(pr);function hr(i,a,c,u,l){if(!n(i)){var d=c.$options._base;if(s(i)&&(i=d.extend(i)),"function"==typeof i){var p;if(n(i.cid)&&(i=function(t,e){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var i=Ie;if(i&&r(t.owners)&&-1===t.owners.indexOf(i)&&t.owners.push(i),o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(i&&!r(t.owners)){var a=t.owners=[i],c=!0,u=null,l=null;i.$on("hook:destroyed",(function(){return y(a,i)}));var d=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},p=I((function(n){t.resolved=Le(n,e),c?a.length=0:d(!0)})),v=I((function(e){r(t.errorComp)&&(t.error=!0,d(!0))})),h=t(p,v);return s(h)&&(f(h)?n(t.resolved)&&h.then(p,v):f(h.component)&&(h.component.then(p,v),r(h.error)&&(t.errorComp=Le(h.error,e)),r(h.loading)&&(t.loadingComp=Le(h.loading,e),0===h.delay?t.loading=!0:u=setTimeout((function(){u=null,n(t.resolved)&&n(t.error)&&(t.loading=!0,d(!1))}),h.delay||200)),r(h.timeout)&&(l=setTimeout((function(){l=null,n(t.resolved)&&v(null)}),h.timeout)))),c=!1,t.loading?t.loadingComp:t.resolved}}(p=i,d),void 0===i))return function(t,e,n,r,o){var i=dt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}(p,a,c,u,l);a=a||{},cr(i),r(a.model)&&function(t,n){var o=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(n.attrs||(n.attrs={}))[o]=n.model.value;var a=n.on||(n.on={}),s=a[i],c=n.model.callback;r(s)?(e(s)?-1===s.indexOf(c):s!==c)&&(a[i]=[c].concat(s)):a[i]=c}(i.options,a);var v=function(t,e,o){var i=e.options.props;if(!n(i)){var a={},s=t.attrs,c=t.props;if(r(s)||r(c))for(var u in i){var l=S(u);te(a,c,u,l,!0)||te(a,s,u,l,!1)}return a}}(a,i);if(o(i.options.functional))return function(n,o,i,a,s){var c=n.options,u={},l=c.props;if(r(l))for(var f in l)u[f]=Sr(f,l,o||t);else r(i.attrs)&&fr(u,i.attrs),r(i.props)&&fr(u,i.props);var d=new ur(i,u,s,a,n),p=c.render.call(null,d._c,d);if(p instanceof ft)return lr(p,i,d.parent,c);if(e(p)){for(var v=ee(p)||[],h=new Array(v.length),m=0;m<v.length;m++)h[m]=lr(v[m],i,d.parent,c);return h}}(i,v,a,c,u);var h=a.on;if(a.on=a.nativeOn,o(i.options.abstract)){var m=a.slot;a={},m&&(a.slot=m)}!function(t){for(var e=t.hook||(t.hook={}),n=0;n<vr.length;n++){var r=vr[n],o=e[r],i=pr[r];o===i||o&&o._merged||(e[r]=o?mr(i,o):i)}}(a);var g=dr(i.options)||l;return new ft("vue-component-".concat(i.cid).concat(g?"-".concat(g):""),a,void 0,void 0,void 0,c,{Ctor:i,propsData:v,listeners:h,tag:l,children:u},p)}}}function mr(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}var gr=E,yr=B.optionMergeStrategies;function _r(t,e,n){if(void 0===n&&(n=!0),!e)return t;for(var r,o,i,a=ct?Reflect.ownKeys(e):Object.keys(e),s=0;s<a.length;s++)"__ob__"!==(r=a[s])&&(o=t[r],i=e[r],n&&b(t,r)?o!==i&&u(o)&&u(i)&&_r(o,i):Nt(t,r,i));return t}function br(t,e,n){return n?function(){var r=a(e)?e.call(n,n):e,o=a(t)?t.call(n,n):t;return r?_r(r,o):o}:e?t?function(){return _r(a(e)?e.call(this,this):e,a(t)?t.call(this,this):t)}:e:t}function $r(t,n){var r=n?t?t.concat(n):e(n)?n:[n]:t;return r?function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(r):r}function wr(t,e,n,r){var o=Object.create(t||null);return e?A(o,e):o}yr.data=function(t,e,n){return n?br(t,e,n):e&&"function"!=typeof e?t:br(t,e)},H.forEach((function(t){yr[t]=$r})),F.forEach((function(t){yr[t+"s"]=wr})),yr.watch=function(t,n,r,o){if(t===et&&(t=void 0),n===et&&(n=void 0),!n)return Object.create(t||null);if(!t)return n;var i={};for(var a in A(i,t),n){var s=i[a],c=n[a];s&&!e(s)&&(s=[s]),i[a]=s?s.concat(c):e(c)?c:[c]}return i},yr.props=yr.methods=yr.inject=yr.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return A(o,t),e&&A(o,e),o},yr.provide=function(t,e){return t?function(){var n=Object.create(null);return _r(n,a(t)?t.call(this):t),e&&_r(n,a(e)?e.call(this):e,!1),n}:e};var xr=function(t,e){return void 0===e?t:e};function Cr(t,n,r){if(a(n)&&(n=n.options),function(t,n){var r=t.props;if(r){var o,i,a={};if(e(r))for(o=r.length;o--;)"string"==typeof(i=r[o])&&(a[x(i)]={type:null});else if(u(r))for(var s in r)i=r[s],a[x(s)]=u(i)?i:{type:i};t.props=a}}(n),function(t,n){var r=t.inject;if(r){var o=t.inject={};if(e(r))for(var i=0;i<r.length;i++)o[r[i]]={from:r[i]};else if(u(r))for(var a in r){var s=r[a];o[a]=u(s)?A({from:a},s):{from:s}}}}(n),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];a(r)&&(e[n]={bind:r,update:r})}}(n),!n._base&&(n.extends&&(t=Cr(t,n.extends,r)),n.mixins))for(var o=0,i=n.mixins.length;o<i;o++)t=Cr(t,n.mixins[o],r);var s,c={};for(s in t)l(s);for(s in n)b(t,s)||l(s);function l(e){var o=yr[e]||xr;c[e]=o(t[e],n[e],r,e)}return c}function kr(t,e,n,r){if("string"==typeof n){var o=t[e];if(b(o,n))return o[n];var i=x(n);if(b(o,i))return o[i];var a=C(i);return b(o,a)?o[a]:o[n]||o[i]||o[a]}}function Sr(t,e,n,r){var o=e[t],i=!b(n,t),s=n[t],c=jr(Boolean,o.type);if(c>-1)if(i&&!b(o,"default"))s=!1;else if(""===s||s===S(t)){var u=jr(String,o.type);(u<0||c<u)&&(s=!0)}if(void 0===s){s=function(t,e,n){if(!b(e,"default"))return;var r=e.default;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return a(r)&&"Function"!==Tr(e.type)?r.call(t):r}(r,o,t);var l=St;Ot(!0),jt(s),Ot(l)}return s}var Or=/^\s*function (\w+)/;function Tr(t){var e=t&&t.toString().match(Or);return e?e[1]:""}function Ar(t,e){return Tr(t)===Tr(e)}function jr(t,n){if(!e(n))return Ar(n,t)?0:-1;for(var r=0,o=n.length;r<o;r++)if(Ar(n[r],t))return r;return-1}function Er(t){this._init(t)}function Nr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=dr(t)||dr(n.options),a=function(t){this._init(t)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=e++,a.options=Cr(n.options,t),a.super=n,a.options.props&&function(t){var e=t.options.props;for(var n in e)Qn(t.prototype,"_props",n)}(a),a.options.computed&&function(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,F.forEach((function(t){a[t]=n[t]})),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=A({},a.options),o[r]=a,a}}function Pr(t){return t&&(dr(t.Ctor.options)||t.tag)}function Dr(t,n){return e(t)?t.indexOf(n)>-1:"string"==typeof t?t.split(",").indexOf(n)>-1:(r=t,"[object RegExp]"===c.call(r)&&t.test(n));var r}function Mr(t,e){var n=t.cache,r=t.keys,o=t._vnode,i=t.$vnode;for(var a in n){var s=n[a];if(s){var c=s.name;c&&!e(c)&&Ir(n,a,r,o)}}i.componentOptions.children=void 0}function Ir(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,y(n,e)}!function(e){e.prototype._init=function(e){var n=this;n._uid=sr++,n._isVue=!0,n.__v_skip=!0,n._scope=new ze(!0),n._scope.parent=void 0,n._scope._vm=!0,e&&e._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(n,e):n.$options=Cr(cr(n.constructor),e||{},n),n._renderProxy=n,n._self=n,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(n),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Ue(t,e)}(n),function(e){e._vnode=null,e._staticTrees=null;var n=e.$options,r=e.$vnode=n._parentVnode,o=r&&r.context;e.$slots=xe(n._renderChildren,o),e.$scopedSlots=r?Se(e.$parent,r.data.scopedSlots,e.$slots):t,e._c=function(t,n,r,o){return ae(e,t,n,r,o,!1)},e.$createElement=function(t,n,r,o){return ae(e,t,n,r,o,!0)};var i=r&&r.data;Et(e,"$attrs",i&&i.attrs||t,null,!0),Et(e,"$listeners",n._parentListeners||t,null,!0)}(n),Ge(n,"beforeCreate",void 0,!1),function(t){var e=ar(t.$options.inject,t);e&&(Ot(!1),Object.keys(e).forEach((function(n){Et(t,n,e[n])})),Ot(!0))}(n),tr(n),function(t){var e=t.$options.provide;if(e){var n=a(e)?e.call(t):e;if(!s(n))return;for(var r=gn(t),o=ct?Reflect.ownKeys(n):Object.keys(n),i=0;i<o.length;i++){var c=o[i];Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(n,c))}}}(n),Ge(n,"created"),n.$options.el&&n.$mount(n.$options.el)}}(Er),function(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Nt,t.prototype.$delete=Pt,t.prototype.$watch=function(t,e,n){var r=this;if(u(e))return ir(r,t,e,n);(n=n||{}).user=!0;var o=new Xn(r,t,e,n);if(n.immediate){var i='callback for immediate watcher "'.concat(o.expression,'"');bt(),_n(e,r,[o.value],r,i),$t()}return function(){o.teardown()}}}(Er),function(t){var n=/^hook:/;t.prototype.$on=function(t,r){var o=this;if(e(t))for(var i=0,a=t.length;i<a;i++)o.$on(t[i],r);else(o._events[t]||(o._events[t]=[])).push(r),n.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,n){var r=this;if(!arguments.length)return r._events=Object.create(null),r;if(e(t)){for(var o=0,i=t.length;o<i;o++)r.$off(t[o],n);return r}var a,s=r._events[t];if(!s)return r;if(!n)return r._events[t]=null,r;for(var c=s.length;c--;)if((a=s[c])===n||a.fn===n){s.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?T(n):n;for(var r=T(arguments,1),o='event handler for "'.concat(t,'"'),i=0,a=n.length;i<a;i++)_n(n[i],e,r,e,o)}return e}}(Er),function(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=Je(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);for(var a=n;a&&a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode;)a.$parent.$el=a.$el,a=a.$parent},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Ge(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Ge(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}(Er),function(t){we(t.prototype),t.prototype.$nextTick=function(t){return En(t,this)},t.prototype._render=function(){var t=this,n=t.$options,r=n.render,o=n._parentVnode;o&&t._isMounted&&(t.$scopedSlots=Se(t.$parent,o.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&Ne(t._slotsProxy,t.$scopedSlots)),t.$vnode=o;var i,a=ut,s=Ie;try{lt(t),Ie=t,i=r.call(t._renderProxy,t.$createElement)}catch(e){yn(e,t,"render"),i=t._vnode}finally{Ie=s,lt(a)}return e(i)&&1===i.length&&(i=i[0]),i instanceof ft||(i=dt()),i.parent=o,i}}(Er);var Lr=[String,RegExp,Array],Rr={name:"keep-alive",abstract:!0,props:{include:Lr,exclude:Lr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,o=t.keyToCache;if(r){var i=r.tag,a=r.componentInstance,s=r.componentOptions;e[o]={name:Pr(s),tag:i,componentInstance:a},n.push(o),this.max&&n.length>parseInt(this.max)&&Ir(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ir(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Mr(t,(function(t){return Dr(e,t)}))})),this.$watch("exclude",(function(e){Mr(t,(function(t){return!Dr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Re(t),n=e&&e.componentOptions;if(n){var r=Pr(n),o=this.include,i=this.exclude;if(o&&(!r||!Dr(o,r))||i&&r&&Dr(i,r))return e;var a=this.cache,s=this.keys,c=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;a[c]?(e.componentInstance=a[c].componentInstance,y(s,c),s.push(c)):(this.vnodeToCache=e,this.keyToCache=c),e.data.keepAlive=!0}return e||t&&t[0]}},Fr={KeepAlive:Rr};!function(t){var e={get:function(){return B}};Object.defineProperty(t,"config",e),t.util={warn:gr,extend:A,mergeOptions:Cr,defineReactive:Et},t.set=Nt,t.delete=Pt,t.nextTick=En,t.observable=function(t){return jt(t),t},t.options=Object.create(null),F.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,A(t.options.components,Fr),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=T(arguments,1);return n.unshift(this),a(t.install)?t.install.apply(t,n):a(t)&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=Cr(this.options,t),this}}(t),Nr(t),function(t){F.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&a(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}(t)}(Er),Object.defineProperty(Er.prototype,"$isServer",{get:ot}),Object.defineProperty(Er.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Er,"FunctionalRenderContext",{value:ur}),Er.version=Kn;var Hr=h("style,class"),Br=h("input,textarea,option,select,progress"),Ur=function(t,e,n){return"value"===n&&Br(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},zr=h("contenteditable,draggable,spellcheck"),Vr=h("events,caret,typing,plaintext-only"),Kr=function(t,e){return Gr(e)||"false"===e?"false":"contenteditable"===t&&Vr(e)?e:"true"},Jr=h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),qr="http://www.w3.org/1999/xlink",Wr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Zr=function(t){return Wr(t)?t.slice(6,t.length):""},Gr=function(t){return null==t||!1===t};function Xr(t){for(var e=t.data,n=t,o=t;r(o.componentInstance);)(o=o.componentInstance._vnode)&&o.data&&(e=Yr(o.data,e));for(;r(n=n.parent);)n&&n.data&&(e=Yr(e,n.data));return function(t,e){if(r(t)||r(e))return Qr(t,to(e));return""}(e.staticClass,e.class)}function Yr(t,e){return{staticClass:Qr(t.staticClass,e.staticClass),class:r(t.class)?[t.class,e.class]:e.class}}function Qr(t,e){return t?e?t+" "+e:t:e||""}function to(t){return Array.isArray(t)?function(t){for(var e,n="",o=0,i=t.length;o<i;o++)r(e=to(t[o]))&&""!==e&&(n&&(n+=" "),n+=e);return n}(t):s(t)?function(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}(t):"string"==typeof t?t:""}var eo={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},no=h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),ro=h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),oo=function(t){return no(t)||ro(t)};function io(t){return ro(t)?"svg":"math"===t?"math":void 0}var ao=Object.create(null);var so=h("text,number,password,search,email,tel,url");function co(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}var uo=Object.freeze({__proto__:null,createElement:function(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n},createElementNS:function(t,e){return document.createElementNS(eo[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){t.insertBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){t.appendChild(e)},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},setStyleScope:function(t,e){t.setAttribute(e,"")}}),lo={create:function(t,e){fo(e)},update:function(t,e){t.data.ref!==e.data.ref&&(fo(t,!0),fo(e))},destroy:function(t){fo(t,!0)}};function fo(t,n){var o=t.data.ref;if(r(o)){var i=t.context,s=t.componentInstance||t.elm,c=n?null:s,u=n?void 0:s;if(a(o))_n(o,i,[c],i,"template ref function");else{var l=t.data.refInFor,f="string"==typeof o||"number"==typeof o,d=Bt(o),p=i.$refs;if(f||d)if(l){var v=f?p[o]:o.value;n?e(v)&&y(v,s):e(v)?v.includes(s)||v.push(s):f?(p[o]=[s],po(i,o,p[o])):o.value=[s]}else if(f){if(n&&p[o]!==s)return;p[o]=u,po(i,o,c)}else if(d){if(n&&o.value!==s)return;o.value=c}}}}function po(t,e,n){var r=t._setupState;r&&b(r,e)&&(Bt(r[e])?r[e].value=n:r[e]=n)}var vo=new ft("",{},[]),ho=["create","activate","update","remove","destroy"];function mo(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&r(t.data)===r(e.data)&&function(t,e){if("input"!==t.tag)return!0;var n,o=r(n=t.data)&&r(n=n.attrs)&&n.type,i=r(n=e.data)&&r(n=n.attrs)&&n.type;return o===i||so(o)&&so(i)}(t,e)||o(t.isAsyncPlaceholder)&&n(e.asyncFactory.error))}function go(t,e,n){var o,i,a={};for(o=e;o<=n;++o)r(i=t[o].key)&&(a[i]=o);return a}var yo={create:_o,update:_o,destroy:function(t){_o(t,vo)}};function _o(t,e){(t.data.directives||e.data.directives)&&function(t,e){var n,r,o,i=t===vo,a=e===vo,s=$o(t.data.directives,t.context),c=$o(e.data.directives,e.context),u=[],l=[];for(n in c)r=s[n],o=c[n],r?(o.oldValue=r.value,o.oldArg=r.arg,xo(o,"update",e,t),o.def&&o.def.componentUpdated&&l.push(o)):(xo(o,"bind",e,t),o.def&&o.def.inserted&&u.push(o));if(u.length){var f=function(){for(var n=0;n<u.length;n++)xo(u[n],"inserted",e,t)};i?Qt(e,"insert",f):f()}l.length&&Qt(e,"postpatch",(function(){for(var n=0;n<l.length;n++)xo(l[n],"componentUpdated",e,t)}));if(!i)for(n in s)c[n]||xo(s[n],"unbind",t,t,a)}(t,e)}var bo=Object.create(null);function $o(t,e){var n,r,o=Object.create(null);if(!t)return o;for(n=0;n<t.length;n++){if((r=t[n]).modifiers||(r.modifiers=bo),o[wo(r)]=r,e._setupState&&e._setupState.__sfc){var i=r.def||kr(e,"_setupState","v-"+r.name);r.def="function"==typeof i?{bind:i,update:i}:i}r.def=r.def||kr(e.$options,"directives",r.name)}return o}function wo(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function xo(t,e,n,r,o){var i=t.def&&t.def[e];if(i)try{i(n.elm,t,n,r,o)}catch(r){yn(r,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var Co=[lo,yo];function ko(t,e){var i=e.componentOptions;if(!(r(i)&&!1===i.Ctor.options.inheritAttrs||n(t.data.attrs)&&n(e.data.attrs))){var a,s,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(a in(r(l.__ob__)||o(l._v_attr_proxy))&&(l=e.data.attrs=A({},l)),l)s=l[a],u[a]!==s&&So(c,a,s,e.data.pre);for(a in(Z||X)&&l.value!==u.value&&So(c,"value",l.value),u)n(l[a])&&(Wr(a)?c.removeAttributeNS(qr,Zr(a)):zr(a)||c.removeAttribute(a))}}function So(t,e,n,r){r||t.tagName.indexOf("-")>-1?Oo(t,e,n):Jr(e)?Gr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):zr(e)?t.setAttribute(e,Kr(e,n)):Wr(e)?Gr(n)?t.removeAttributeNS(qr,Zr(e)):t.setAttributeNS(qr,e,n):Oo(t,e,n)}function Oo(t,e,n){if(Gr(n))t.removeAttribute(e);else{if(Z&&!G&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var To={create:ko,update:ko};function Ao(t,e){var o=e.elm,i=e.data,a=t.data;if(!(n(i.staticClass)&&n(i.class)&&(n(a)||n(a.staticClass)&&n(a.class)))){var s=Xr(e),c=o._transitionClasses;r(c)&&(s=Qr(s,to(c))),s!==o._prevClass&&(o.setAttribute("class",s),o._prevClass=s)}}var jo,Eo,No,Po,Do,Mo,Io={create:Ao,update:Ao},Lo=/[\w).+\-_$\]]/;function Ro(t){var e,n,r,o,i,a=!1,s=!1,c=!1,u=!1,l=0,f=0,d=0,p=0;for(r=0;r<t.length;r++)if(n=e,e=t.charCodeAt(r),a)39===e&&92!==n&&(a=!1);else if(s)34===e&&92!==n&&(s=!1);else if(c)96===e&&92!==n&&(c=!1);else if(u)47===e&&92!==n&&(u=!1);else if(124!==e||124===t.charCodeAt(r+1)||124===t.charCodeAt(r-1)||l||f||d){switch(e){case 34:s=!0;break;case 39:a=!0;break;case 96:c=!0;break;case 40:d++;break;case 41:d--;break;case 91:f++;break;case 93:f--;break;case 123:l++;break;case 125:l--}if(47===e){for(var v=r-1,h=void 0;v>=0&&" "===(h=t.charAt(v));v--);h&&Lo.test(h)||(u=!0)}}else void 0===o?(p=r+1,o=t.slice(0,r).trim()):m();function m(){(i||(i=[])).push(t.slice(p,r).trim()),p=r+1}if(void 0===o?o=t.slice(0,r).trim():0!==p&&m(),i)for(r=0;r<i.length;r++)o=Fo(o,i[r]);return o}function Fo(t,e){var n=e.indexOf("(");if(n<0)return'_f("'.concat(e,'")(').concat(t,")");var r=e.slice(0,n),o=e.slice(n+1);return'_f("'.concat(r,'")(').concat(t).concat(")"!==o?","+o:o)}function Ho(t,e){console.error("[Vue compiler]: ".concat(t))}function Bo(t,e){return t?t.map((function(t){return t[e]})).filter((function(t){return t})):[]}function Uo(t,e,n,r,o){(t.props||(t.props=[])).push(Xo({name:e,value:n,dynamic:o},r)),t.plain=!1}function zo(t,e,n,r,o){(o?t.dynamicAttrs||(t.dynamicAttrs=[]):t.attrs||(t.attrs=[])).push(Xo({name:e,value:n,dynamic:o},r)),t.plain=!1}function Vo(t,e,n,r){t.attrsMap[e]=n,t.attrsList.push(Xo({name:e,value:n},r))}function Ko(t,e,n,r,o,i,a,s){(t.directives||(t.directives=[])).push(Xo({name:e,rawName:n,value:r,arg:o,isDynamicArg:i,modifiers:a},s)),t.plain=!1}function Jo(t,e,n){return n?"_p(".concat(e,',"').concat(t,'")'):t+e}function qo(e,n,r,o,i,a,s,c){var u;(o=o||t).right?c?n="(".concat(n,")==='click'?'contextmenu':(").concat(n,")"):"click"===n&&(n="contextmenu",delete o.right):o.middle&&(c?n="(".concat(n,")==='click'?'mouseup':(").concat(n,")"):"click"===n&&(n="mouseup")),o.capture&&(delete o.capture,n=Jo("!",n,c)),o.once&&(delete o.once,n=Jo("~",n,c)),o.passive&&(delete o.passive,n=Jo("&",n,c)),o.native?(delete o.native,u=e.nativeEvents||(e.nativeEvents={})):u=e.events||(e.events={});var l=Xo({value:r.trim(),dynamic:c},s);o!==t&&(l.modifiers=o);var f=u[n];Array.isArray(f)?i?f.unshift(l):f.push(l):u[n]=f?i?[l,f]:[f,l]:l,e.plain=!1}function Wo(t,e,n){var r=Zo(t,":"+e)||Zo(t,"v-bind:"+e);if(null!=r)return Ro(r);if(!1!==n){var o=Zo(t,e);if(null!=o)return JSON.stringify(o)}}function Zo(t,e,n){var r;if(null!=(r=t.attrsMap[e]))for(var o=t.attrsList,i=0,a=o.length;i<a;i++)if(o[i].name===e){o.splice(i,1);break}return n&&delete t.attrsMap[e],r}function Go(t,e){for(var n=t.attrsList,r=0,o=n.length;r<o;r++){var i=n[r];if(e.test(i.name))return n.splice(r,1),i}}function Xo(t,e){return e&&(null!=e.start&&(t.start=e.start),null!=e.end&&(t.end=e.end)),t}function Yo(t,e,n){var r=n||{},o=r.number,i="$$v",a=i;r.trim&&(a="(typeof ".concat(i," === 'string'")+"? ".concat(i,".trim()")+": ".concat(i,")")),o&&(a="_n(".concat(a,")"));var s=Qo(e,a);t.model={value:"(".concat(e,")"),expression:JSON.stringify(e),callback:"function (".concat(i,") {").concat(s,"}")}}function Qo(t,e){var n=function(t){if(t=t.trim(),jo=t.length,t.indexOf("[")<0||t.lastIndexOf("]")<jo-1)return(Po=t.lastIndexOf("."))>-1?{exp:t.slice(0,Po),key:'"'+t.slice(Po+1)+'"'}:{exp:t,key:null};Eo=t,Po=Do=Mo=0;for(;!ei();)ni(No=ti())?oi(No):91===No&&ri(No);return{exp:t.slice(0,Do),key:t.slice(Do+1,Mo)}}(t);return null===n.key?"".concat(t,"=").concat(e):"$set(".concat(n.exp,", ").concat(n.key,", ").concat(e,")")}function ti(){return Eo.charCodeAt(++Po)}function ei(){return Po>=jo}function ni(t){return 34===t||39===t}function ri(t){var e=1;for(Do=Po;!ei();)if(ni(t=ti()))oi(t);else if(91===t&&e++,93===t&&e--,0===e){Mo=Po;break}}function oi(t){for(var e=t;!ei()&&(t=ti())!==e;);}var ii,ai="__r",si="__c";function ci(t,e,n){var r=ii;return function o(){null!==e.apply(null,arguments)&&fi(t,o,n,r)}}var ui=xn&&!(tt&&Number(tt[1])<=53);function li(t,e,n,r){if(ui){var o=rn,i=e;e=i._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=o||t.timeStamp<=0||t.target.ownerDocument!==document)return i.apply(this,arguments)}}ii.addEventListener(t,e,nt?{capture:n,passive:r}:n)}function fi(t,e,n,r){(r||ii).removeEventListener(t,e._wrapper||e,n)}function di(t,e){if(!n(t.data.on)||!n(e.data.on)){var o=e.data.on||{},i=t.data.on||{};ii=e.elm||t.elm,function(t){if(r(t[ai])){var e=Z?"change":"input";t[e]=[].concat(t[ai],t[e]||[]),delete t[ai]}r(t[si])&&(t.change=[].concat(t[si],t.change||[]),delete t[si])}(o),Yt(o,i,li,fi,ci,e.context),ii=void 0}}var pi,vi={create:di,update:di,destroy:function(t){return di(t,vo)}};function hi(t,e){if(!n(t.data.domProps)||!n(e.data.domProps)){var i,a,s=e.elm,c=t.data.domProps||{},u=e.data.domProps||{};for(i in(r(u.__ob__)||o(u._v_attr_proxy))&&(u=e.data.domProps=A({},u)),c)i in u||(s[i]="");for(i in u){if(a=u[i],"textContent"===i||"innerHTML"===i){if(e.children&&(e.children.length=0),a===c[i])continue;1===s.childNodes.length&&s.removeChild(s.childNodes[0])}if("value"===i&&"PROGRESS"!==s.tagName){s._value=a;var l=n(a)?"":String(a);mi(s,l)&&(s.value=l)}else if("innerHTML"===i&&ro(s.tagName)&&n(s.innerHTML)){(pi=pi||document.createElement("div")).innerHTML="<svg>".concat(a,"</svg>");for(var f=pi.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;f.firstChild;)s.appendChild(f.firstChild)}else if(a!==c[i])try{s[i]=a}catch(t){}}}}function mi(t,e){return!t.composing&&("OPTION"===t.tagName||function(t,e){var n=!0;try{n=document.activeElement!==t}catch(t){}return n&&t.value!==e}(t,e)||function(t,e){var n=t.value,o=t._vModifiers;if(r(o)){if(o.number)return v(n)!==v(e);if(o.trim)return n.trim()!==e.trim()}return n!==e}(t,e))}var gi={create:hi,update:hi},yi=$((function(t){var e={},n=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach((function(t){if(t){var r=t.split(n);r.length>1&&(e[r[0].trim()]=r[1].trim())}})),e}));function _i(t){var e=bi(t.style);return t.staticStyle?A(t.staticStyle,e):e}function bi(t){return Array.isArray(t)?j(t):"string"==typeof t?yi(t):t}var $i,wi=/^--/,xi=/\s*!important$/,Ci=function(t,e,n){if(wi.test(e))t.style.setProperty(e,n);else if(xi.test(n))t.style.setProperty(S(e),n.replace(xi,""),"important");else{var r=Si(e);if(Array.isArray(n))for(var o=0,i=n.length;o<i;o++)t.style[r]=n[o];else t.style[r]=n}},ki=["Webkit","Moz","ms"],Si=$((function(t){if($i=$i||document.createElement("div").style,"filter"!==(t=x(t))&&t in $i)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<ki.length;n++){var r=ki[n]+e;if(r in $i)return r}}));function Oi(t,e){var o=e.data,i=t.data;if(!(n(o.staticStyle)&&n(o.style)&&n(i.staticStyle)&&n(i.style))){var a,s,c=e.elm,u=i.staticStyle,l=i.normalizedStyle||i.style||{},f=u||l,d=bi(e.data.style)||{};e.data.normalizedStyle=r(d.__ob__)?A({},d):d;var p=function(t,e){var n,r={};if(e)for(var o=t;o.componentInstance;)(o=o.componentInstance._vnode)&&o.data&&(n=_i(o.data))&&A(r,n);(n=_i(t.data))&&A(r,n);for(var i=t;i=i.parent;)i.data&&(n=_i(i.data))&&A(r,n);return r}(e,!0);for(s in f)n(p[s])&&Ci(c,s,"");for(s in p)a=p[s],Ci(c,s,null==a?"":a)}}var Ti={create:Oi,update:Oi},Ai=/\s+/;function ji(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ai).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ei(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ai).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function Ni(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&A(e,Pi(t.name||"v")),A(e,t),e}return"string"==typeof t?Pi(t):void 0}}var Pi=$((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),Di=q&&!G,Mi="transition",Ii="animation",Li="transition",Ri="transitionend",Fi="animation",Hi="animationend";Di&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Li="WebkitTransition",Ri="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Fi="WebkitAnimation",Hi="webkitAnimationEnd"));var Bi=q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Ui(t){Bi((function(){Bi(t)}))}function zi(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),ji(t,e))}function Vi(t,e){t._transitionClasses&&y(t._transitionClasses,e),Ei(t,e)}function Ki(t,e,n){var r=qi(t,e),o=r.type,i=r.timeout,a=r.propCount;if(!o)return n();var s=o===Mi?Ri:Hi,c=0,u=function(){t.removeEventListener(s,l),n()},l=function(e){e.target===t&&++c>=a&&u()};setTimeout((function(){c<a&&u()}),i+1),t.addEventListener(s,l)}var Ji=/\b(transform|all)(,|$)/;function qi(t,e){var n,r=window.getComputedStyle(t),o=(r[Li+"Delay"]||"").split(", "),i=(r[Li+"Duration"]||"").split(", "),a=Wi(o,i),s=(r[Fi+"Delay"]||"").split(", "),c=(r[Fi+"Duration"]||"").split(", "),u=Wi(s,c),l=0,f=0;return e===Mi?a>0&&(n=Mi,l=a,f=i.length):e===Ii?u>0&&(n=Ii,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?Mi:Ii:null)?n===Mi?i.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===Mi&&Ji.test(r[Li+"Property"])}}function Wi(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Zi(e)+Zi(t[n])})))}function Zi(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Gi(t,e){var o=t.elm;r(o._leaveCb)&&(o._leaveCb.cancelled=!0,o._leaveCb());var i=Ni(t.data.transition);if(!n(i)&&!r(o._enterCb)&&1===o.nodeType){for(var c=i.css,u=i.type,l=i.enterClass,f=i.enterToClass,d=i.enterActiveClass,p=i.appearClass,h=i.appearToClass,m=i.appearActiveClass,g=i.beforeEnter,y=i.enter,_=i.afterEnter,b=i.enterCancelled,$=i.beforeAppear,w=i.appear,x=i.afterAppear,C=i.appearCancelled,k=i.duration,S=Ke,O=Ke.$vnode;O&&O.parent;)S=O.context,O=O.parent;var T=!S._isMounted||!t.isRootInsert;if(!T||w||""===w){var A=T&&p?p:l,j=T&&m?m:d,E=T&&h?h:f,N=T&&$||g,P=T&&a(w)?w:y,D=T&&x||_,M=T&&C||b,L=v(s(k)?k.enter:k),R=!1!==c&&!G,F=Qi(P),H=o._enterCb=I((function(){R&&(Vi(o,E),Vi(o,j)),H.cancelled?(R&&Vi(o,A),M&&M(o)):D&&D(o),o._enterCb=null}));t.data.show||Qt(t,"insert",(function(){var e=o.parentNode,n=e&&e._pending&&e._pending[t.key];n&&n.tag===t.tag&&n.elm._leaveCb&&n.elm._leaveCb(),P&&P(o,H)})),N&&N(o),R&&(zi(o,A),zi(o,j),Ui((function(){Vi(o,A),H.cancelled||(zi(o,E),F||(Yi(L)?setTimeout(H,L):Ki(o,u,H)))}))),t.data.show&&(e&&e(),P&&P(o,H)),R||F||H()}}}function Xi(t,e){var o=t.elm;r(o._enterCb)&&(o._enterCb.cancelled=!0,o._enterCb());var i=Ni(t.data.transition);if(n(i)||1!==o.nodeType)return e();if(!r(o._leaveCb)){var a=i.css,c=i.type,u=i.leaveClass,l=i.leaveToClass,f=i.leaveActiveClass,d=i.beforeLeave,p=i.leave,h=i.afterLeave,m=i.leaveCancelled,g=i.delayLeave,y=i.duration,_=!1!==a&&!G,b=Qi(p),$=v(s(y)?y.leave:y),w=o._leaveCb=I((function(){o.parentNode&&o.parentNode._pending&&(o.parentNode._pending[t.key]=null),_&&(Vi(o,l),Vi(o,f)),w.cancelled?(_&&Vi(o,u),m&&m(o)):(e(),h&&h(o)),o._leaveCb=null}));g?g(x):x()}function x(){w.cancelled||(!t.data.show&&o.parentNode&&((o.parentNode._pending||(o.parentNode._pending={}))[t.key]=t),d&&d(o),_&&(zi(o,u),zi(o,f),Ui((function(){Vi(o,u),w.cancelled||(zi(o,l),b||(Yi($)?setTimeout(w,$):Ki(o,c,w)))}))),p&&p(o,w),_||b||w())}}function Yi(t){return"number"==typeof t&&!isNaN(t)}function Qi(t){if(n(t))return!1;var e=t.fns;return r(e)?Qi(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function ta(t,e){!0!==e.data.show&&Gi(e)}var ea=function(t){var a,s,c={},u=t.modules,l=t.nodeOps;for(a=0;a<ho.length;++a)for(c[ho[a]]=[],s=0;s<u.length;++s)r(u[s][ho[a]])&&c[ho[a]].push(u[s][ho[a]]);function f(t){var e=l.parentNode(t);r(e)&&l.removeChild(e,t)}function d(t,e,n,i,a,s,u){if(r(t.elm)&&r(s)&&(t=s[u]=vt(t)),t.isRootInsert=!a,!function(t,e,n,i){var a=t.data;if(r(a)){var s=r(t.componentInstance)&&a.keepAlive;if(r(a=a.hook)&&r(a=a.init)&&a(t,!1),r(t.componentInstance))return p(t,e),v(n,t.elm,i),o(s)&&function(t,e,n,o){var i,a=t;for(;a.componentInstance;)if(r(i=(a=a.componentInstance._vnode).data)&&r(i=i.transition)){for(i=0;i<c.activate.length;++i)c.activate[i](vo,a);e.push(a);break}v(n,t.elm,o)}(t,e,n,i),!0}}(t,e,n,i)){var f=t.data,d=t.children,h=t.tag;r(h)?(t.elm=t.ns?l.createElementNS(t.ns,h):l.createElement(h,t),_(t),m(t,d,e),r(f)&&y(t,e),v(n,t.elm,i)):o(t.isComment)?(t.elm=l.createComment(t.text),v(n,t.elm,i)):(t.elm=l.createTextNode(t.text),v(n,t.elm,i))}}function p(t,e){r(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,g(t)?(y(t,e),_(t)):(fo(t),e.push(t))}function v(t,e,n){r(t)&&(r(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function m(t,n,r){if(e(n))for(var o=0;o<n.length;++o)d(n[o],r,t.elm,null,!0,n,o);else i(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function g(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return r(t.tag)}function y(t,e){for(var n=0;n<c.create.length;++n)c.create[n](vo,t);r(a=t.data.hook)&&(r(a.create)&&a.create(vo,t),r(a.insert)&&e.push(t))}function _(t){var e;if(r(e=t.fnScopeId))l.setStyleScope(t.elm,e);else for(var n=t;n;)r(e=n.context)&&r(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent;r(e=Ke)&&e!==t.context&&e!==t.fnContext&&r(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function b(t,e,n,r,o,i){for(;r<=o;++r)d(n[r],i,t,e,!1,n,r)}function $(t){var e,n,o=t.data;if(r(o))for(r(e=o.hook)&&r(e=e.destroy)&&e(t),e=0;e<c.destroy.length;++e)c.destroy[e](t);if(r(e=t.children))for(n=0;n<t.children.length;++n)$(t.children[n])}function w(t,e,n){for(;e<=n;++e){var o=t[e];r(o)&&(r(o.tag)?(x(o),$(o)):f(o.elm))}}function x(t,e){if(r(e)||r(t.data)){var n,o=c.remove.length+1;for(r(e)?e.listeners+=o:e=function(t,e){function n(){0==--n.listeners&&f(t)}return n.listeners=e,n}(t.elm,o),r(n=t.componentInstance)&&r(n=n._vnode)&&r(n.data)&&x(n,e),n=0;n<c.remove.length;++n)c.remove[n](t,e);r(n=t.data.hook)&&r(n=n.remove)?n(t,e):e()}else f(t.elm)}function C(t,e,n,o){for(var i=n;i<o;i++){var a=e[i];if(r(a)&&mo(t,a))return i}}function k(t,e,i,a,s,u){if(t!==e){r(e.elm)&&r(a)&&(e=a[s]=vt(e));var f=e.elm=t.elm;if(o(t.isAsyncPlaceholder))r(e.asyncFactory.resolved)?T(t.elm,e,i):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var p,v=e.data;r(v)&&r(p=v.hook)&&r(p=p.prepatch)&&p(t,e);var h=t.children,m=e.children;if(r(v)&&g(e)){for(p=0;p<c.update.length;++p)c.update[p](t,e);r(p=v.hook)&&r(p=p.update)&&p(t,e)}n(e.text)?r(h)&&r(m)?h!==m&&function(t,e,o,i,a){for(var s,c,u,f=0,p=0,v=e.length-1,h=e[0],m=e[v],g=o.length-1,y=o[0],_=o[g],$=!a;f<=v&&p<=g;)n(h)?h=e[++f]:n(m)?m=e[--v]:mo(h,y)?(k(h,y,i,o,p),h=e[++f],y=o[++p]):mo(m,_)?(k(m,_,i,o,g),m=e[--v],_=o[--g]):mo(h,_)?(k(h,_,i,o,g),$&&l.insertBefore(t,h.elm,l.nextSibling(m.elm)),h=e[++f],_=o[--g]):mo(m,y)?(k(m,y,i,o,p),$&&l.insertBefore(t,m.elm,h.elm),m=e[--v],y=o[++p]):(n(s)&&(s=go(e,f,v)),n(c=r(y.key)?s[y.key]:C(y,e,f,v))?d(y,i,t,h.elm,!1,o,p):mo(u=e[c],y)?(k(u,y,i,o,p),e[c]=void 0,$&&l.insertBefore(t,u.elm,h.elm)):d(y,i,t,h.elm,!1,o,p),y=o[++p]);f>v?b(t,n(o[g+1])?null:o[g+1].elm,o,p,g,i):p>g&&w(e,f,v)}(f,h,m,i,u):r(m)?(r(t.text)&&l.setTextContent(f,""),b(f,null,m,0,m.length-1,i)):r(h)?w(h,0,h.length-1):r(t.text)&&l.setTextContent(f,""):t.text!==e.text&&l.setTextContent(f,e.text),r(v)&&r(p=v.hook)&&r(p=p.postpatch)&&p(t,e)}}}function S(t,e,n){if(o(n)&&r(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var O=h("attrs,class,staticClass,staticStyle,key");function T(t,e,n,i){var a,s=e.tag,c=e.data,u=e.children;if(i=i||c&&c.pre,e.elm=t,o(e.isComment)&&r(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(r(c)&&(r(a=c.hook)&&r(a=a.init)&&a(e,!0),r(a=e.componentInstance)))return p(e,n),!0;if(r(s)){if(r(u))if(t.hasChildNodes())if(r(a=c)&&r(a=a.domProps)&&r(a=a.innerHTML)){if(a!==t.innerHTML)return!1}else{for(var l=!0,f=t.firstChild,d=0;d<u.length;d++){if(!f||!T(f,u[d],n,i)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else m(e,u,n);if(r(c)){var v=!1;for(var h in c)if(!O(h)){v=!0,y(e,n);break}!v&&c.class&&Wn(c.class)}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,i,a){if(!n(e)){var s,u=!1,f=[];if(n(t))u=!0,d(e,f);else{var p=r(t.nodeType);if(!p&&mo(t,e))k(t,e,f,null,null,a);else{if(p){if(1===t.nodeType&&t.hasAttribute(R)&&(t.removeAttribute(R),i=!0),o(i)&&T(t,e,f))return S(e,f,!0),t;s=t,t=new ft(l.tagName(s).toLowerCase(),{},[],void 0,s)}var v=t.elm,h=l.parentNode(v);if(d(e,f,v._leaveCb?null:h,l.nextSibling(v)),r(e.parent))for(var m=e.parent,y=g(e);m;){for(var _=0;_<c.destroy.length;++_)c.destroy[_](m);if(m.elm=e.elm,y){for(var b=0;b<c.create.length;++b)c.create[b](vo,m);var x=m.data.hook.insert;if(x.merged)for(var C=x.fns.slice(1),O=0;O<C.length;O++)C[O]()}else fo(m);m=m.parent}r(h)?w([t],0,0):r(t.tag)&&$(t)}}return S(e,f,u),e.elm}r(t)&&$(t)}}({nodeOps:uo,modules:[To,Io,vi,gi,Ti,q?{create:ta,activate:ta,remove:function(t,e){!0!==t.data.show?Xi(t,e):e()}}:{}].concat(Co)});G&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&ua(t,"input")}));var na={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Qt(n,"postpatch",(function(){na.componentUpdated(t,e,n)})):ra(t,e,n.context),t._vOptions=[].map.call(t.options,aa)):("textarea"===n.tag||so(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",sa),t.addEventListener("compositionend",ca),t.addEventListener("change",ca),G&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){ra(t,e,n.context);var r=t._vOptions,o=t._vOptions=[].map.call(t.options,aa);if(o.some((function(t,e){return!D(t,r[e])})))(t.multiple?e.value.some((function(t){return ia(t,o)})):e.value!==e.oldValue&&ia(e.value,o))&&ua(t,"change")}}};function ra(t,e,n){oa(t,e),(Z||X)&&setTimeout((function(){oa(t,e)}),0)}function oa(t,e,n){var r=e.value,o=t.multiple;if(!o||Array.isArray(r)){for(var i,a,s=0,c=t.options.length;s<c;s++)if(a=t.options[s],o)i=M(r,aa(a))>-1,a.selected!==i&&(a.selected=i);else if(D(aa(a),r))return void(t.selectedIndex!==s&&(t.selectedIndex=s));o||(t.selectedIndex=-1)}}function ia(t,e){return e.every((function(e){return!D(e,t)}))}function aa(t){return"_value"in t?t._value:t.value}function sa(t){t.target.composing=!0}function ca(t){t.target.composing&&(t.target.composing=!1,ua(t.target,"input"))}function ua(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function la(t){return!t.componentInstance||t.data&&t.data.transition?t:la(t.componentInstance._vnode)}var fa={bind:function(t,e,n){var r=e.value,o=(n=la(n)).data&&n.data.transition,i=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&o?(n.data.show=!0,Gi(n,(function(){t.style.display=i}))):t.style.display=r?i:"none"},update:function(t,e,n){var r=e.value;!r!=!e.oldValue&&((n=la(n)).data&&n.data.transition?(n.data.show=!0,r?Gi(n,(function(){t.style.display=t.__vOriginalDisplay})):Xi(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none")},unbind:function(t,e,n,r,o){o||(t.style.display=t.__vOriginalDisplay)}},da={model:na,show:fa},pa={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function va(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?va(Re(e.children)):t}function ha(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var o=n._parentListeners;for(var r in o)e[x(r)]=o[r];return e}function ma(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}var ga=function(t){return t.tag||ke(t)},ya=function(t){return"show"===t.name},_a={name:"transition",props:pa,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(ga)).length){var r=this.mode,o=n[0];if(function(t){for(;t=t.parent;)if(t.data.transition)return!0}(this.$vnode))return o;var a=va(o);if(!a)return o;if(this._leaving)return ma(t,o);var s="__transition-".concat(this._uid,"-");a.key=null==a.key?a.isComment?s+"comment":s+a.tag:i(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=ha(this),u=this._vnode,l=va(u);if(a.data.directives&&a.data.directives.some(ya)&&(a.data.show=!0),l&&l.data&&!function(t,e){return e.key===t.key&&e.tag===t.tag}(a,l)&&!ke(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=A({},c);if("out-in"===r)return this._leaving=!0,Qt(f,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),ma(t,o);if("in-out"===r){if(ke(a))return u;var d,p=function(){d()};Qt(c,"afterEnter",p),Qt(c,"enterCancelled",p),Qt(f,"delayLeave",(function(t){d=t}))}}return o}}},ba=A({tag:String,moveClass:String},pa);delete ba.mode;var $a={props:ba,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var o=Je(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,o(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,o=this.$slots.default||[],i=this.children=[],a=ha(this),s=0;s<o.length;s++){(l=o[s]).tag&&null!=l.key&&0!==String(l.key).indexOf("__vlist")&&(i.push(l),n[l.key]=l,(l.data||(l.data={})).transition=a)}if(r){var c=[],u=[];for(s=0;s<r.length;s++){var l;(l=r[s]).data.transition=a,l.data.pos=l.elm.getBoundingClientRect(),n[l.key]?c.push(l):u.push(l)}this.kept=t(e,null,c),this.removed=u}return t(e,null,i)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(wa),t.forEach(xa),t.forEach(Ca),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;zi(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ri,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ri,t),n._moveCb=null,Vi(n,e))})}})))},methods:{hasMove:function(t,e){if(!Di)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Ei(n,t)})),ji(n,e),n.style.display="none",this.$el.appendChild(n);var r=qi(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function wa(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function xa(t){t.data.newPos=t.elm.getBoundingClientRect()}function Ca(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,o=e.top-n.top;if(r||o){t.data.moved=!0;var i=t.elm.style;i.transform=i.WebkitTransform="translate(".concat(r,"px,").concat(o,"px)"),i.transitionDuration="0s"}}var ka={Transition:_a,TransitionGroup:$a};Er.config.mustUseProp=Ur,Er.config.isReservedTag=oo,Er.config.isReservedAttr=Hr,Er.config.getTagNamespace=io,Er.config.isUnknownElement=function(t){if(!q)return!0;if(oo(t))return!1;if(t=t.toLowerCase(),null!=ao[t])return ao[t];var e=document.createElement(t);return t.indexOf("-")>-1?ao[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ao[t]=/HTMLUnknownElement/.test(e.toString())},A(Er.options.directives,da),A(Er.options.components,ka),Er.prototype.__patch__=q?ea:E,Er.prototype.$mount=function(t,e){return function(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=dt),Ge(t,"beforeMount"),r=function(){t._update(t._render(),n)},new Xn(t,r,E,{before:function(){t._isMounted&&!t._isDestroyed&&Ge(t,"beforeUpdate")}},!0),n=!1;var o=t._preWatchers;if(o)for(var i=0;i<o.length;i++)o[i].run();return null==t.$vnode&&(t._isMounted=!0,Ge(t,"mounted")),t}(this,t=t&&q?co(t):void 0,e)},q&&setTimeout((function(){B.devtools&&it&&it.emit("init",Er)}),0);var Sa=/\{\{((?:.|\r?\n)+?)\}\}/g,Oa=/[-.*+?^${}()|[\]\/\\]/g,Ta=$((function(t){var e=t[0].replace(Oa,"\\$&"),n=t[1].replace(Oa,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+n,"g")}));var Aa={staticKeys:["staticClass"],transformNode:function(t,e){e.warn;var n=Zo(t,"class");n&&(t.staticClass=JSON.stringify(n.replace(/\s+/g," ").trim()));var r=Wo(t,"class",!1);r&&(t.classBinding=r)},genData:function(t){var e="";return t.staticClass&&(e+="staticClass:".concat(t.staticClass,",")),t.classBinding&&(e+="class:".concat(t.classBinding,",")),e}};var ja,Ea={staticKeys:["staticStyle"],transformNode:function(t,e){e.warn;var n=Zo(t,"style");n&&(t.staticStyle=JSON.stringify(yi(n)));var r=Wo(t,"style",!1);r&&(t.styleBinding=r)},genData:function(t){var e="";return t.staticStyle&&(e+="staticStyle:".concat(t.staticStyle,",")),t.styleBinding&&(e+="style:(".concat(t.styleBinding,"),")),e}},Na=function(t){return(ja=ja||document.createElement("div")).innerHTML=t,ja.textContent},Pa=h("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Da=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Ma=h("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Ia=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,La=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Ra="[a-zA-Z_][\\-\\.0-9_a-zA-Z".concat(U.source,"]*"),Fa="((?:".concat(Ra,"\\:)?").concat(Ra,")"),Ha=new RegExp("^<".concat(Fa)),Ba=/^\s*(\/?)>/,Ua=new RegExp("^<\\/".concat(Fa,"[^>]*>")),za=/^<!DOCTYPE [^>]+>/i,Va=/^<!\--/,Ka=/^<!\[/,Ja=h("script,style,textarea",!0),qa={},Wa={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},Za=/&(?:lt|gt|quot|amp|#39);/g,Ga=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,Xa=h("pre,textarea",!0),Ya=function(t,e){return t&&Xa(t)&&"\n"===e[0]};function Qa(t,e){var n=e?Ga:Za;return t.replace(n,(function(t){return Wa[t]}))}function ts(t,e){for(var n,r,o=[],i=e.expectHTML,a=e.isUnaryTag||N,s=e.canBeLeftOpenTag||N,c=0,u=function(){if(n=t,r&&Ja(r)){var u=0,d=r.toLowerCase(),p=qa[d]||(qa[d]=new RegExp("([\\s\\S]*?)(</"+d+"[^>]*>)","i"));w=t.replace(p,(function(t,n,r){return u=r.length,Ja(d)||"noscript"===d||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Ya(d,n)&&(n=n.slice(1)),e.chars&&e.chars(n),""}));c+=t.length-w.length,t=w,f(d,c-u,c)}else{var v=t.indexOf("<");if(0===v){if(Va.test(t)){var h=t.indexOf("--\x3e");if(h>=0)return e.shouldKeepComment&&e.comment&&e.comment(t.substring(4,h),c,c+h+3),l(h+3),"continue"}if(Ka.test(t)){var m=t.indexOf("]>");if(m>=0)return l(m+2),"continue"}var g=t.match(za);if(g)return l(g[0].length),"continue";var y=t.match(Ua);if(y){var _=c;return l(y[0].length),f(y[1],_,c),"continue"}var b=function(){var e=t.match(Ha);if(e){var n={tagName:e[1],attrs:[],start:c};l(e[0].length);for(var r=void 0,o=void 0;!(r=t.match(Ba))&&(o=t.match(La)||t.match(Ia));)o.start=c,l(o[0].length),o.end=c,n.attrs.push(o);if(r)return n.unarySlash=r[1],l(r[0].length),n.end=c,n}}();if(b)return function(t){var n=t.tagName,c=t.unarySlash;i&&("p"===r&&Ma(n)&&f(r),s(n)&&r===n&&f(n));for(var u=a(n)||!!c,l=t.attrs.length,d=new Array(l),p=0;p<l;p++){var v=t.attrs[p],h=v[3]||v[4]||v[5]||"",m="a"===n&&"href"===v[1]?e.shouldDecodeNewlinesForHref:e.shouldDecodeNewlines;d[p]={name:v[1],value:Qa(h,m)}}u||(o.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:d,start:t.start,end:t.end}),r=n);e.start&&e.start(n,d,u,t.start,t.end)}(b),Ya(b.tagName,t)&&l(1),"continue"}var $=void 0,w=void 0,x=void 0;if(v>=0){for(w=t.slice(v);!(Ua.test(w)||Ha.test(w)||Va.test(w)||Ka.test(w)||(x=w.indexOf("<",1))<0);)v+=x,w=t.slice(v);$=t.substring(0,v)}v<0&&($=t),$&&l($.length),e.chars&&$&&e.chars($,c-$.length,c)}if(t===n)return e.chars&&e.chars(t),"break"};t;){if("break"===u())break}function l(e){c+=e,t=t.substring(e)}function f(t,n,i){var a,s;if(null==n&&(n=c),null==i&&(i=c),t)for(s=t.toLowerCase(),a=o.length-1;a>=0&&o[a].lowerCasedTag!==s;a--);else a=0;if(a>=0){for(var u=o.length-1;u>=a;u--)e.end&&e.end(o[u].tag,n,i);o.length=a,r=a&&o[a-1].tag}else"br"===s?e.start&&e.start(t,[],!0,n,i):"p"===s&&(e.start&&e.start(t,[],!1,n,i),e.end&&e.end(t,n,i))}f()}var es,ns,rs,os,is,as,ss,cs,us=/^@|^v-on:/,ls=/^v-|^@|^:|^#/,fs=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,ds=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,ps=/^\(|\)$/g,vs=/^\[.*\]$/,hs=/:(.*)$/,ms=/^:|^\.|^v-bind:/,gs=/\.[^.\]]+(?=[^\]]*$)/g,ys=/^v-slot(:|$)|^#/,_s=/[\r\n]/,bs=/[ \f\t\r\n]+/g,$s=$(Na),ws="_empty_";function xs(t,e,n){return{type:1,tag:t,attrsList:e,attrsMap:js(e),rawAttrsMap:{},parent:n,children:[]}}function Cs(t,e){es=e.warn||Ho,as=e.isPreTag||N,ss=e.mustUseProp||N,cs=e.getTagNamespace||N,e.isReservedTag,rs=Bo(e.modules,"transformNode"),os=Bo(e.modules,"preTransformNode"),is=Bo(e.modules,"postTransformNode"),ns=e.delimiters;var n,r,o=[],i=!1!==e.preserveWhitespace,a=e.whitespace,s=!1,c=!1;function u(t){if(l(t),s||t.processed||(t=ks(t,e)),o.length||t===n||n.if&&(t.elseif||t.else)&&Os(n,{exp:t.elseif,block:t}),r&&!t.forbidden)if(t.elseif||t.else)a=t,u=function(t){for(var e=t.length;e--;){if(1===t[e].type)return t[e];t.pop()}}(r.children),u&&u.if&&Os(u,{exp:a.elseif,block:a});else{if(t.slotScope){var i=t.slotTarget||'"default"';(r.scopedSlots||(r.scopedSlots={}))[i]=t}r.children.push(t),t.parent=r}var a,u;t.children=t.children.filter((function(t){return!t.slotScope})),l(t),t.pre&&(s=!1),as(t.tag)&&(c=!1);for(var f=0;f<is.length;f++)is[f](t,e)}function l(t){if(!c)for(var e=void 0;(e=t.children[t.children.length-1])&&3===e.type&&" "===e.text;)t.children.pop()}return ts(t,{warn:es,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,shouldDecodeNewlinesForHref:e.shouldDecodeNewlinesForHref,shouldKeepComment:e.comments,outputSourceRange:e.outputSourceRange,start:function(t,i,a,l,f){var d=r&&r.ns||cs(t);Z&&"svg"===d&&(i=function(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];Es.test(r.name)||(r.name=r.name.replace(Ns,""),e.push(r))}return e}(i));var p,v=xs(t,i,r);d&&(v.ns=d),"style"!==(p=v).tag&&("script"!==p.tag||p.attrsMap.type&&"text/javascript"!==p.attrsMap.type)||ot()||(v.forbidden=!0);for(var h=0;h<os.length;h++)v=os[h](v,e)||v;s||(!function(t){null!=Zo(t,"v-pre")&&(t.pre=!0)}(v),v.pre&&(s=!0)),as(v.tag)&&(c=!0),s?function(t){var e=t.attrsList,n=e.length;if(n)for(var r=t.attrs=new Array(n),o=0;o<n;o++)r[o]={name:e[o].name,value:JSON.stringify(e[o].value)},null!=e[o].start&&(r[o].start=e[o].start,r[o].end=e[o].end);else t.pre||(t.plain=!0)}(v):v.processed||(Ss(v),function(t){var e=Zo(t,"v-if");if(e)t.if=e,Os(t,{exp:e,block:t});else{null!=Zo(t,"v-else")&&(t.else=!0);var n=Zo(t,"v-else-if");n&&(t.elseif=n)}}(v),function(t){var e=Zo(t,"v-once");null!=e&&(t.once=!0)}(v)),n||(n=v),a?u(v):(r=v,o.push(v))},end:function(t,e,n){var i=o[o.length-1];o.length-=1,r=o[o.length-1],u(i)},chars:function(t,e,n){if(r&&(!Z||"textarea"!==r.tag||r.attrsMap.placeholder!==t)){var o,u=r.children;if(t=c||t.trim()?"script"===(o=r).tag||"style"===o.tag?t:$s(t):u.length?a?"condense"===a&&_s.test(t)?"":" ":i?" ":"":""){c||"condense"!==a||(t=t.replace(bs," "));var l=void 0,f=void 0;!s&&" "!==t&&(l=function(t,e){var n=e?Ta(e):Sa;if(n.test(t)){for(var r,o,i,a=[],s=[],c=n.lastIndex=0;r=n.exec(t);){(o=r.index)>c&&(s.push(i=t.slice(c,o)),a.push(JSON.stringify(i)));var u=Ro(r[1].trim());a.push("_s(".concat(u,")")),s.push({"@binding":u}),c=o+r[0].length}return c<t.length&&(s.push(i=t.slice(c)),a.push(JSON.stringify(i))),{expression:a.join("+"),tokens:s}}}(t,ns))?f={type:2,expression:l.expression,tokens:l.tokens,text:t}:" "===t&&u.length&&" "===u[u.length-1].text||(f={type:3,text:t}),f&&u.push(f)}}},comment:function(t,e,n){if(r){var o={type:3,text:t,isComment:!0};r.children.push(o)}}}),n}function ks(t,e){var n,r;(r=Wo(n=t,"key"))&&(n.key=r),t.plain=!t.key&&!t.scopedSlots&&!t.attrsList.length,function(t){var e=Wo(t,"ref");e&&(t.ref=e,t.refInFor=function(t){var e=t;for(;e;){if(void 0!==e.for)return!0;e=e.parent}return!1}(t))}(t),function(t){var e;"template"===t.tag?(e=Zo(t,"scope"),t.slotScope=e||Zo(t,"slot-scope")):(e=Zo(t,"slot-scope"))&&(t.slotScope=e);var n=Wo(t,"slot");n&&(t.slotTarget='""'===n?'"default"':n,t.slotTargetDynamic=!(!t.attrsMap[":slot"]&&!t.attrsMap["v-bind:slot"]),"template"===t.tag||t.slotScope||zo(t,"slot",n,function(t,e){return t.rawAttrsMap[":"+e]||t.rawAttrsMap["v-bind:"+e]||t.rawAttrsMap[e]}(t,"slot")));if("template"===t.tag){if(a=Go(t,ys)){var r=Ts(a),o=r.name,i=r.dynamic;t.slotTarget=o,t.slotTargetDynamic=i,t.slotScope=a.value||ws}}else{var a;if(a=Go(t,ys)){var s=t.scopedSlots||(t.scopedSlots={}),c=Ts(a),u=c.name,l=(i=c.dynamic,s[u]=xs("template",[],t));l.slotTarget=u,l.slotTargetDynamic=i,l.children=t.children.filter((function(t){if(!t.slotScope)return t.parent=l,!0})),l.slotScope=a.value||ws,t.children=[],t.plain=!1}}}(t),function(t){"slot"===t.tag&&(t.slotName=Wo(t,"name"))}(t),function(t){var e;(e=Wo(t,"is"))&&(t.component=e);null!=Zo(t,"inline-template")&&(t.inlineTemplate=!0)}(t);for(var o=0;o<rs.length;o++)t=rs[o](t,e)||t;return function(t){var e,n,r,o,i,a,s,c,u=t.attrsList;for(e=0,n=u.length;e<n;e++)if(r=o=u[e].name,i=u[e].value,ls.test(r))if(t.hasBindings=!0,(a=As(r.replace(ls,"")))&&(r=r.replace(gs,"")),ms.test(r))r=r.replace(ms,""),i=Ro(i),(c=vs.test(r))&&(r=r.slice(1,-1)),a&&(a.prop&&!c&&"innerHtml"===(r=x(r))&&(r="innerHTML"),a.camel&&!c&&(r=x(r)),a.sync&&(s=Qo(i,"$event"),c?qo(t,'"update:"+('.concat(r,")"),s,null,!1,0,u[e],!0):(qo(t,"update:".concat(x(r)),s,null,!1,0,u[e]),S(r)!==x(r)&&qo(t,"update:".concat(S(r)),s,null,!1,0,u[e])))),a&&a.prop||!t.component&&ss(t.tag,t.attrsMap.type,r)?Uo(t,r,i,u[e],c):zo(t,r,i,u[e],c);else if(us.test(r))r=r.replace(us,""),(c=vs.test(r))&&(r=r.slice(1,-1)),qo(t,r,i,a,!1,0,u[e],c);else{var l=(r=r.replace(ls,"")).match(hs),f=l&&l[1];c=!1,f&&(r=r.slice(0,-(f.length+1)),vs.test(f)&&(f=f.slice(1,-1),c=!0)),Ko(t,r,o,i,f,c,a,u[e])}else zo(t,r,JSON.stringify(i),u[e]),!t.component&&"muted"===r&&ss(t.tag,t.attrsMap.type,r)&&Uo(t,r,"true",u[e])}(t),t}function Ss(t){var e;if(e=Zo(t,"v-for")){var n=function(t){var e=t.match(fs);if(!e)return;var n={};n.for=e[2].trim();var r=e[1].trim().replace(ps,""),o=r.match(ds);o?(n.alias=r.replace(ds,"").trim(),n.iterator1=o[1].trim(),o[2]&&(n.iterator2=o[2].trim())):n.alias=r;return n}(e);n&&A(t,n)}}function Os(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e)}function Ts(t){var e=t.name.replace(ys,"");return e||"#"!==t.name[0]&&(e="default"),vs.test(e)?{name:e.slice(1,-1),dynamic:!0}:{name:'"'.concat(e,'"'),dynamic:!1}}function As(t){var e=t.match(gs);if(e){var n={};return e.forEach((function(t){n[t.slice(1)]=!0})),n}}function js(t){for(var e={},n=0,r=t.length;n<r;n++)e[t[n].name]=t[n].value;return e}var Es=/^xmlns:NS\d+/,Ns=/^NS\d+:/;function Ps(t){return xs(t.tag,t.attrsList.slice(),t.parent)}var Ds=[Aa,Ea,{preTransformNode:function(t,e){if("input"===t.tag){var n=t.attrsMap;if(!n["v-model"])return;var r=void 0;if((n[":type"]||n["v-bind:type"])&&(r=Wo(t,"type")),n.type||r||!n["v-bind"]||(r="(".concat(n["v-bind"],").type")),r){var o=Zo(t,"v-if",!0),i=o?"&&(".concat(o,")"):"",a=null!=Zo(t,"v-else",!0),s=Zo(t,"v-else-if",!0),c=Ps(t);Ss(c),Vo(c,"type","checkbox"),ks(c,e),c.processed=!0,c.if="(".concat(r,")==='checkbox'")+i,Os(c,{exp:c.if,block:c});var u=Ps(t);Zo(u,"v-for",!0),Vo(u,"type","radio"),ks(u,e),Os(c,{exp:"(".concat(r,")==='radio'")+i,block:u});var l=Ps(t);return Zo(l,"v-for",!0),Vo(l,":type",r),ks(l,e),Os(c,{exp:o,block:l}),a?c.else=!0:s&&(c.elseif=s),c}}}}];var Ms,Is,Ls={model:function(t,e,n){var r=e.value,o=e.modifiers,i=t.tag,a=t.attrsMap.type;if(t.component)return Yo(t,r,o),!1;if("select"===i)!function(t,e,n){var r=n&&n.number,o='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;'+"return ".concat(r?"_n(val)":"val","})"),i="$event.target.multiple ? $$selectedVal : $$selectedVal[0]",a="var $$selectedVal = ".concat(o,";");a="".concat(a," ").concat(Qo(e,i)),qo(t,"change",a,null,!0)}(t,r,o);else if("input"===i&&"checkbox"===a)!function(t,e,n){var r=n&&n.number,o=Wo(t,"value")||"null",i=Wo(t,"true-value")||"true",a=Wo(t,"false-value")||"false";Uo(t,"checked","Array.isArray(".concat(e,")")+"?_i(".concat(e,",").concat(o,")>-1")+("true"===i?":(".concat(e,")"):":_q(".concat(e,",").concat(i,")"))),qo(t,"change","var $$a=".concat(e,",")+"$$el=$event.target,"+"$$c=$$el.checked?(".concat(i,"):(").concat(a,");")+"if(Array.isArray($$a)){"+"var $$v=".concat(r?"_n("+o+")":o,",")+"$$i=_i($$a,$$v);"+"if($$el.checked){$$i<0&&(".concat(Qo(e,"$$a.concat([$$v])"),")}")+"else{$$i>-1&&(".concat(Qo(e,"$$a.slice(0,$$i).concat($$a.slice($$i+1))"),")}")+"}else{".concat(Qo(e,"$$c"),"}"),null,!0)}(t,r,o);else if("input"===i&&"radio"===a)!function(t,e,n){var r=n&&n.number,o=Wo(t,"value")||"null";o=r?"_n(".concat(o,")"):o,Uo(t,"checked","_q(".concat(e,",").concat(o,")")),qo(t,"change",Qo(e,o),null,!0)}(t,r,o);else if("input"===i||"textarea"===i)!function(t,e,n){var r=t.attrsMap.type,o=n||{},i=o.lazy,a=o.number,s=o.trim,c=!i&&"range"!==r,u=i?"change":"range"===r?ai:"input",l="$event.target.value";s&&(l="$event.target.value.trim()");a&&(l="_n(".concat(l,")"));var f=Qo(e,l);c&&(f="if($event.target.composing)return;".concat(f));Uo(t,"value","(".concat(e,")")),qo(t,u,f,null,!0),(s||a)&&qo(t,"blur","$forceUpdate()")}(t,r,o);else if(!B.isReservedTag(i))return Yo(t,r,o),!1;return!0},text:function(t,e){e.value&&Uo(t,"textContent","_s(".concat(e.value,")"),e)},html:function(t,e){e.value&&Uo(t,"innerHTML","_s(".concat(e.value,")"),e)}},Rs={expectHTML:!0,modules:Ds,directives:Ls,isPreTag:function(t){return"pre"===t},isUnaryTag:Pa,mustUseProp:Ur,canBeLeftOpenTag:Da,isReservedTag:oo,getTagNamespace:io,staticKeys:function(t){return t.reduce((function(t,e){return t.concat(e.staticKeys||[])}),[]).join(",")}(Ds)},Fs=$((function(t){return h("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(t?","+t:""))}));function Hs(t,e){t&&(Ms=Fs(e.staticKeys||""),Is=e.isReservedTag||N,Bs(t),Us(t,!1))}function Bs(t){if(t.static=function(t){if(2===t.type)return!1;if(3===t.type)return!0;return!(!t.pre&&(t.hasBindings||t.if||t.for||m(t.tag)||!Is(t.tag)||function(t){for(;t.parent;){if("template"!==(t=t.parent).tag)return!1;if(t.for)return!0}return!1}(t)||!Object.keys(t).every(Ms)))}(t),1===t.type){if(!Is(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var e=0,n=t.children.length;e<n;e++){var r=t.children[e];Bs(r),r.static||(t.static=!1)}if(t.ifConditions)for(e=1,n=t.ifConditions.length;e<n;e++){var o=t.ifConditions[e].block;Bs(o),o.static||(t.static=!1)}}}function Us(t,e){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=e),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var n=0,r=t.children.length;n<r;n++)Us(t.children[n],e||!!t.for);if(t.ifConditions)for(n=1,r=t.ifConditions.length;n<r;n++)Us(t.ifConditions[n].block,e)}}var zs=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,Vs=/\([^)]*?\);*$/,Ks=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Js={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},qs={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},Ws=function(t){return"if(".concat(t,")return null;")},Zs={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Ws("$event.target !== $event.currentTarget"),ctrl:Ws("!$event.ctrlKey"),shift:Ws("!$event.shiftKey"),alt:Ws("!$event.altKey"),meta:Ws("!$event.metaKey"),left:Ws("'button' in $event && $event.button !== 0"),middle:Ws("'button' in $event && $event.button !== 1"),right:Ws("'button' in $event && $event.button !== 2")};function Gs(t,e){var n=e?"nativeOn:":"on:",r="",o="";for(var i in t){var a=Xs(t[i]);t[i]&&t[i].dynamic?o+="".concat(i,",").concat(a,","):r+='"'.concat(i,'":').concat(a,",")}return r="{".concat(r.slice(0,-1),"}"),o?n+"_d(".concat(r,",[").concat(o.slice(0,-1),"])"):n+r}function Xs(t){if(!t)return"function(){}";if(Array.isArray(t))return"[".concat(t.map((function(t){return Xs(t)})).join(","),"]");var e=Ks.test(t.value),n=zs.test(t.value),r=Ks.test(t.value.replace(Vs,""));if(t.modifiers){var o="",i="",a=[],s=function(e){if(Zs[e])i+=Zs[e],Js[e]&&a.push(e);else if("exact"===e){var n=t.modifiers;i+=Ws(["ctrl","shift","alt","meta"].filter((function(t){return!n[t]})).map((function(t){return"$event.".concat(t,"Key")})).join("||"))}else a.push(e)};for(var c in t.modifiers)s(c);a.length&&(o+=function(t){return"if(!$event.type.indexOf('key')&&"+"".concat(t.map(Ys).join("&&"),")return null;")}(a)),i&&(o+=i);var u=e?"return ".concat(t.value,".apply(null, arguments)"):n?"return (".concat(t.value,").apply(null, arguments)"):r?"return ".concat(t.value):t.value;return"function($event){".concat(o).concat(u,"}")}return e||n?t.value:"function($event){".concat(r?"return ".concat(t.value):t.value,"}")}function Ys(t){var e=parseInt(t,10);if(e)return"$event.keyCode!==".concat(e);var n=Js[t],r=qs[t];return"_k($event.keyCode,"+"".concat(JSON.stringify(t),",")+"".concat(JSON.stringify(n),",")+"$event.key,"+"".concat(JSON.stringify(r))+")"}var Qs={on:function(t,e){t.wrapListeners=function(t){return"_g(".concat(t,",").concat(e.value,")")}},bind:function(t,e){t.wrapData=function(n){return"_b(".concat(n,",'").concat(t.tag,"',").concat(e.value,",").concat(e.modifiers&&e.modifiers.prop?"true":"false").concat(e.modifiers&&e.modifiers.sync?",true":"",")")}},cloak:E},tc=function(t){this.options=t,this.warn=t.warn||Ho,this.transforms=Bo(t.modules,"transformCode"),this.dataGenFns=Bo(t.modules,"genData"),this.directives=A(A({},Qs),t.directives);var e=t.isReservedTag||N;this.maybeComponent=function(t){return!!t.component||!e(t.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function ec(t,e){var n=new tc(e),r=t?"script"===t.tag?"null":nc(t,n):'_c("div")';return{render:"with(this){return ".concat(r,"}"),staticRenderFns:n.staticRenderFns}}function nc(t,e){if(t.parent&&(t.pre=t.pre||t.parent.pre),t.staticRoot&&!t.staticProcessed)return rc(t,e);if(t.once&&!t.onceProcessed)return oc(t,e);if(t.for&&!t.forProcessed)return sc(t,e);if(t.if&&!t.ifProcessed)return ic(t,e);if("template"!==t.tag||t.slotTarget||e.pre){if("slot"===t.tag)return function(t,e){var n=t.slotName||'"default"',r=fc(t,e),o="_t(".concat(n).concat(r?",function(){return ".concat(r,"}"):""),i=t.attrs||t.dynamicAttrs?vc((t.attrs||[]).concat(t.dynamicAttrs||[]).map((function(t){return{name:x(t.name),value:t.value,dynamic:t.dynamic}}))):null,a=t.attrsMap["v-bind"];!i&&!a||r||(o+=",null");i&&(o+=",".concat(i));a&&(o+="".concat(i?"":",null",",").concat(a));return o+")"}(t,e);var n=void 0;if(t.component)n=function(t,e,n){var r=e.inlineTemplate?null:fc(e,n,!0);return"_c(".concat(t,",").concat(cc(e,n)).concat(r?",".concat(r):"",")")}(t.component,t,e);else{var r=void 0,o=e.maybeComponent(t);(!t.plain||t.pre&&o)&&(r=cc(t,e));var i=void 0,a=e.options.bindings;o&&a&&!1!==a.__isScriptSetup&&(i=function(t,e){var n=x(e),r=C(n),o=function(o){return t[e]===o?e:t[n]===o?n:t[r]===o?r:void 0},i=o("setup-const")||o("setup-reactive-const");if(i)return i;var a=o("setup-let")||o("setup-ref")||o("setup-maybe-ref");if(a)return a}(a,t.tag)),i||(i="'".concat(t.tag,"'"));var s=t.inlineTemplate?null:fc(t,e,!0);n="_c(".concat(i).concat(r?",".concat(r):"").concat(s?",".concat(s):"",")")}for(var c=0;c<e.transforms.length;c++)n=e.transforms[c](t,n);return n}return fc(t,e)||"void 0"}function rc(t,e){t.staticProcessed=!0;var n=e.pre;return t.pre&&(e.pre=t.pre),e.staticRenderFns.push("with(this){return ".concat(nc(t,e),"}")),e.pre=n,"_m(".concat(e.staticRenderFns.length-1).concat(t.staticInFor?",true":"",")")}function oc(t,e){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return ic(t,e);if(t.staticInFor){for(var n="",r=t.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o(".concat(nc(t,e),",").concat(e.onceId++,",").concat(n,")"):nc(t,e)}return rc(t,e)}function ic(t,e,n,r){return t.ifProcessed=!0,ac(t.ifConditions.slice(),e,n,r)}function ac(t,e,n,r){if(!t.length)return r||"_e()";var o=t.shift();return o.exp?"(".concat(o.exp,")?").concat(i(o.block),":").concat(ac(t,e,n,r)):"".concat(i(o.block));function i(t){return n?n(t,e):t.once?oc(t,e):nc(t,e)}}function sc(t,e,n,r){var o=t.for,i=t.alias,a=t.iterator1?",".concat(t.iterator1):"",s=t.iterator2?",".concat(t.iterator2):"";return t.forProcessed=!0,"".concat(r||"_l","((").concat(o,"),")+"function(".concat(i).concat(a).concat(s,"){")+"return ".concat((n||nc)(t,e))+"})"}function cc(t,e){var n="{",r=function(t,e){var n=t.directives;if(!n)return;var r,o,i,a,s="directives:[",c=!1;for(r=0,o=n.length;r<o;r++){i=n[r],a=!0;var u=e.directives[i.name];u&&(a=!!u(t,i,e.warn)),a&&(c=!0,s+='{name:"'.concat(i.name,'",rawName:"').concat(i.rawName,'"').concat(i.value?",value:(".concat(i.value,"),expression:").concat(JSON.stringify(i.value)):"").concat(i.arg?",arg:".concat(i.isDynamicArg?i.arg:'"'.concat(i.arg,'"')):"").concat(i.modifiers?",modifiers:".concat(JSON.stringify(i.modifiers)):"","},"))}if(c)return s.slice(0,-1)+"]"}(t,e);r&&(n+=r+","),t.key&&(n+="key:".concat(t.key,",")),t.ref&&(n+="ref:".concat(t.ref,",")),t.refInFor&&(n+="refInFor:true,"),t.pre&&(n+="pre:true,"),t.component&&(n+='tag:"'.concat(t.tag,'",'));for(var o=0;o<e.dataGenFns.length;o++)n+=e.dataGenFns[o](t);if(t.attrs&&(n+="attrs:".concat(vc(t.attrs),",")),t.props&&(n+="domProps:".concat(vc(t.props),",")),t.events&&(n+="".concat(Gs(t.events,!1),",")),t.nativeEvents&&(n+="".concat(Gs(t.nativeEvents,!0),",")),t.slotTarget&&!t.slotScope&&(n+="slot:".concat(t.slotTarget,",")),t.scopedSlots&&(n+="".concat(function(t,e,n){var r=t.for||Object.keys(e).some((function(t){var n=e[t];return n.slotTargetDynamic||n.if||n.for||uc(n)})),o=!!t.if;if(!r)for(var i=t.parent;i;){if(i.slotScope&&i.slotScope!==ws||i.for){r=!0;break}i.if&&(o=!0),i=i.parent}var a=Object.keys(e).map((function(t){return lc(e[t],n)})).join(",");return"scopedSlots:_u([".concat(a,"]").concat(r?",null,true":"").concat(!r&&o?",null,false,".concat(function(t){var e=5381,n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e>>>0}(a)):"",")")}(t,t.scopedSlots,e),",")),t.model&&(n+="model:{value:".concat(t.model.value,",callback:").concat(t.model.callback,",expression:").concat(t.model.expression,"},")),t.inlineTemplate){var i=function(t,e){var n=t.children[0];if(n&&1===n.type){var r=ec(n,e.options);return"inlineTemplate:{render:function(){".concat(r.render,"},staticRenderFns:[").concat(r.staticRenderFns.map((function(t){return"function(){".concat(t,"}")})).join(","),"]}")}}(t,e);i&&(n+="".concat(i,","))}return n=n.replace(/,$/,"")+"}",t.dynamicAttrs&&(n="_b(".concat(n,',"').concat(t.tag,'",').concat(vc(t.dynamicAttrs),")")),t.wrapData&&(n=t.wrapData(n)),t.wrapListeners&&(n=t.wrapListeners(n)),n}function uc(t){return 1===t.type&&("slot"===t.tag||t.children.some(uc))}function lc(t,e){var n=t.attrsMap["slot-scope"];if(t.if&&!t.ifProcessed&&!n)return ic(t,e,lc,"null");if(t.for&&!t.forProcessed)return sc(t,e,lc);var r=t.slotScope===ws?"":String(t.slotScope),o="function(".concat(r,"){")+"return ".concat("template"===t.tag?t.if&&n?"(".concat(t.if,")?").concat(fc(t,e)||"undefined",":undefined"):fc(t,e)||"undefined":nc(t,e),"}"),i=r?"":",proxy:true";return"{key:".concat(t.slotTarget||'"default"',",fn:").concat(o).concat(i,"}")}function fc(t,e,n,r,o){var i=t.children;if(i.length){var a=i[0];if(1===i.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag){var s=n?e.maybeComponent(a)?",1":",0":"";return"".concat((r||nc)(a,e)).concat(s)}var c=n?function(t,e){for(var n=0,r=0;r<t.length;r++){var o=t[r];if(1===o.type){if(dc(o)||o.ifConditions&&o.ifConditions.some((function(t){return dc(t.block)}))){n=2;break}(e(o)||o.ifConditions&&o.ifConditions.some((function(t){return e(t.block)})))&&(n=1)}}return n}(i,e.maybeComponent):0,u=o||pc;return"[".concat(i.map((function(t){return u(t,e)})).join(","),"]").concat(c?",".concat(c):"")}}function dc(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function pc(t,e){return 1===t.type?nc(t,e):3===t.type&&t.isComment?function(t){return"_e(".concat(JSON.stringify(t.text),")")}(t):function(t){return"_v(".concat(2===t.type?t.expression:hc(JSON.stringify(t.text)),")")}(t)}function vc(t){for(var e="",n="",r=0;r<t.length;r++){var o=t[r],i=hc(o.value);o.dynamic?n+="".concat(o.name,",").concat(i,","):e+='"'.concat(o.name,'":').concat(i,",")}return e="{".concat(e.slice(0,-1),"}"),n?"_d(".concat(e,",[").concat(n.slice(0,-1),"])"):e}function hc(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function mc(t,e){try{return new Function(t)}catch(n){return e.push({err:n,code:t}),E}}function gc(t){var e=Object.create(null);return function(n,r,o){(r=A({},r)).warn,delete r.warn;var i=r.delimiters?String(r.delimiters)+n:n;if(e[i])return e[i];var a=t(n,r),s={},c=[];return s.render=mc(a.render,c),s.staticRenderFns=a.staticRenderFns.map((function(t){return mc(t,c)})),e[i]=s}}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)");var yc,_c,bc=(yc=function(t,e){var n=Cs(t.trim(),e);!1!==e.optimize&&Hs(n,e);var r=ec(n,e);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(t){function e(e,n){var r=Object.create(t),o=[],i=[];if(n)for(var a in n.modules&&(r.modules=(t.modules||[]).concat(n.modules)),n.directives&&(r.directives=A(Object.create(t.directives||null),n.directives)),n)"modules"!==a&&"directives"!==a&&(r[a]=n[a]);r.warn=function(t,e,n){(n?i:o).push(t)};var s=yc(e.trim(),r);return s.errors=o,s.tips=i,s}return{compile:e,compileToFunctions:gc(e)}}),$c=bc(Rs).compileToFunctions;function wc(t){return(_c=_c||document.createElement("div")).innerHTML=t?'<a href="\n"/>':'<div a="\n"/>',_c.innerHTML.indexOf("&#10;")>0}var xc=!!q&&wc(!1),Cc=!!q&&wc(!0),kc=$((function(t){var e=co(t);return e&&e.innerHTML})),Sc=Er.prototype.$mount;return Er.prototype.$mount=function(t,e){if((t=t&&co(t))===document.body||t===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=kc(r));else{if(!r.nodeType)return this;r=r.innerHTML}else t&&(r=function(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}(t));if(r){var o=$c(r,{outputSourceRange:!1,shouldDecodeNewlines:xc,shouldDecodeNewlinesForHref:Cc,delimiters:n.delimiters,comments:n.comments},this),i=o.render,a=o.staticRenderFns;n.render=i,n.staticRenderFns=a}}return Sc.call(this,t,e)},Er.compile=$c,A(Er,Jn),Er.effect=function(t,e){var n=new Xn(ut,t,E,{sync:!0});e&&(n.update=function(){e((function(){return n.run()}))})},Er}));
/* <script src="https://cdn.jsdelivr.net/npm/vue@2"></script> */
