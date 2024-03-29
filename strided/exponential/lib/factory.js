/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var unaryFactory = require( './../../../strided/tools/unary-factory' );
var base = require( './../../../base/exponential' );


// MAIN //

/**
* Returns a function for filling strided arrays containing pseudorandom numbers drawn from an exponential distribution.
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
* @returns {Function} function for filling strided arrays
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var exponential = factory();
* // returns <Function>
*
* var out = new Float64Array( 10 );
* // returns <Float64Array>
*
* var arr = exponential( out.length, [ 2.0 ], 0, out, 1 );
* // returns <Float64Array>
*
* var bool = ( arr === out );
* // returns true
*/
var factory = unaryFactory( base );


// EXPORTS //

module.exports = factory;
