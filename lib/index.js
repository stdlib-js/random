/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* @name exponential
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/exponential}
*/
setReadOnly( ns, 'exponential', require( './../exponential' ) );

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

/**
* @name tools
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/random/tools}
*/
setReadOnly( ns, 'tools', require( './../tools' ) );

/**
* @name uniform
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/uniform}
*/
setReadOnly( ns, 'uniform', require( './../uniform' ) );


// EXPORTS //

module.exports = ns;
