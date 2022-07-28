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

// MODULES //

var factory = require( './factory.js' );


// MAIN //

/**
* Returns a pseudorandom number drawn from a chi distribution with degrees of freedom `k`.
*
* @name chi
* @type {PRNG}
* @param {PositiveNumber} k - degrees of freedom
* @returns {number} pseudorandom number
*
* @example
* var v = chi( 2 );
* // returns <number>
*
* @example
* var v = chi( 0 );
* // returns NaN
*
* @example
* var v = chi( NaN );
* // returns NaN
*/
var chi = factory();


// EXPORTS //

module.exports = chi;
