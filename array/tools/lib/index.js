/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name binary
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/tools/binary}
*/
setReadOnly( ns, 'binary', require( './../../../array/tools/binary' ) );

/**
* @name binaryFactory
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/tools/binary-factory}
*/
setReadOnly( ns, 'binaryFactory', require( './../../../array/tools/binary-factory' ) );

/**
* @name nullary
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/tools/nullary}
*/
setReadOnly( ns, 'nullary', require( './../../../array/tools/nullary' ) );

/**
* @name ternary
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/tools/ternary}
*/
setReadOnly( ns, 'ternary', require( './../../../array/tools/ternary' ) );

/**
* @name ternaryFactory
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/tools/ternary-factory}
*/
setReadOnly( ns, 'ternaryFactory', require( './../../../array/tools/ternary-factory' ) );

/**
* @name unary
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/tools/unary}
*/
setReadOnly( ns, 'unary', require( './../../../array/tools/unary' ) );

/**
* @name unaryFactory
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/tools/unary-factory}
*/
setReadOnly( ns, 'unaryFactory', require( './../../../array/tools/unary-factory' ) );


// EXPORTS //

module.exports = ns;
