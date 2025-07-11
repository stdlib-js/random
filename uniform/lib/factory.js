/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var createFactory = require( './../../tools/binary-factory' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var base = require( './../../base/uniform' );


// VARIABLES //

var idtypes1 = dtypes( 'real_and_generic' );
var idtypes2 = dtypes( 'real_and_generic' );
var odtypes = dtypes( 'real_floating_point_and_generic' );
var policies = {
	'output': 'real_floating_point_and_generic'
};


// MAIN //

/**
* Returns a function for generating pseudorandom numbers drawn from a uniform distribution.
*
* @name factory
* @type {Function}
* @param {Options} [options] - function options
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a valid state
* @returns {Function} function for creating ndarrays
*
* @example
* var rand = factory();
* // returns <Function>
*
* var arr = rand( [ 10 ], 0.0, 1.0 );
* // returns <ndarray>
*
* @example
* var rand = factory();
* // returns <Function>
*
* var arr = rand( [ 10 ], 0.0, 1.0, {
*     'dtype': 'float32'
* });
* // returns <ndarray>
*/
var factory = createFactory( base, [ idtypes1, idtypes2 ], odtypes, policies );


// EXPORTS //

module.exports = factory;
