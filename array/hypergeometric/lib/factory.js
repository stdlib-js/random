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

// MODULES //

var ternaryFactory = require( './../../../array/tools/ternary-factory' );
var dtypes = require( '@stdlib/array/dtypes' );
var defaults = require( '@stdlib/array/defaults' );
var base = require( './../../../base/hypergeometric' );


// VARIABLES //

var DTYPES = dtypes( 'real_and_generic' );


// MAIN //

/**
* Returns a function for creating arrays containing pseudorandom numbers drawn from a hypergeometric distribution.
*
* @name factory
* @type {Function}
* @param {NonNegativeInteger} [N] - population size
* @param {NonNegativeInteger} [K] - subpopulation size
* @param {NonNegativeInteger} [n] - number of draws
* @param {Options} [options] - function options
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @param {string} [options.dtype="float64"] - default data type
* @throws {TypeError} `N` must be a nonnegative integer
* @throws {TypeError} `K` must be a nonnegative integer
* @throws {TypeError} `n` must be a nonnegative integer
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a valid state
* @returns {Function} function for creating arrays
*
* @example
* var hypergeometric = factory( 20, 10, 7 );
* // returns <Function>
*
* var arr = hypergeometric( 10 );
* // returns <Float64Array>
*
* @example
* var hypergeometric = factory( 20, 10, 7 );
* // returns <Function>
*
* var arr = hypergeometric( 10, {
*     'dtype': 'generic'
* });
* // returns [...]
*/
var factory = ternaryFactory( base, DTYPES, defaults.get( 'dtypes.real' ) );


// EXPORTS //

module.exports = factory;
