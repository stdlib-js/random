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

var nullary = require( '@stdlib/strided/base/nullary' );
var random = require( './../../../base/mt19937' );


// MAIN //

/**
* Fills a strided array with pseudorandom numbers between `0` and `1`.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} out - output array
* @param {integer} so - `out` stride length
* @param {Options} [options] - function options
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @throws {Error} must provide valid options
* @throws {Error} must provide a valid state
* @returns {Collection} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* mt19937( out.length, out, 1 );
*/
function mt19937( N, out, so, options ) {
	var rand;
	if ( arguments.length > 3 ) {
		rand = random.factory( options );
	} else {
		rand = random;
	}
	nullary( [ out ], [ N ], [ so ], rand.normalized );
	return out;
}


// EXPORTS //

module.exports = mt19937;
