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

/**
* Create an array containing pseudorandom numbers drawn from a negative binomial distribution.
*
* @module @stdlib/random/array/negative-binomial
*
* @example
* var negativeBinomial = require( '@stdlib/random/array/negative-binomial' );
*
* var arr = negativeBinomial( 10, 10, 0.5 );
* // returns <Float64Array>
*
* @example
* var negativeBinomial = require( '@stdlib/random/array/negative-binomial' );
*
* var arr = negativeBinomial( 10, 10, 0.5, {
*     'dtype': 'generic'
* });
* // returns [...]
*
* @example
* var negativeBinomial = require( '@stdlib/random/array/negative-binomial' );
*
* var rand = negativeBinomial.factory( 10, 0.5 );
* // returns <Function>
*
* var arr = rand( 10 );
* // returns <Float64Array>
*
* @example
* var negativeBinomial = require( '@stdlib/random/array/negative-binomial' );
*
* var rand = negativeBinomial.factory( 10, 0.5 );
* // returns <Function>
*
* var arr = rand( 10, {
*     'dtype': 'generic'
* });
* // returns [...]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;

// exports: { "factory": "main.factory", "assign": "main.assign" }
