/** @license Apache-2.0 */

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property/dist' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name array
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/random/array}
*/
setReadOnly( ns, 'array', require( './../array' ) );

/**
* @name base
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/random/base}
*/
setReadOnly( ns, 'base', require( './../base' ) );

/**
* @name iterators
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/random/iter}
*/
setReadOnly( ns, 'iterators', require( './../iter' ) );

/**
* @name sample
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/sample}
*/
setReadOnly( ns, 'sample', require( './../sample' ) );

/**
* @name shuffle
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/shuffle}
*/
setReadOnly( ns, 'shuffle', require( './../shuffle' ) );

/**
* @name streams
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/random/streams}
*/
setReadOnly( ns, 'streams', require( './../streams' ) );

/**
* @name strided
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/random/strided}
*/
setReadOnly( ns, 'strided', require( './../strided' ) );


// EXPORTS //

module.exports = ns;
