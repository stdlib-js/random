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

/**
* Constructor for creating ndarrays filled with pseudorandom values drawn from a unary PRNG.
*
* @module @stdlib/random/tools/unary
*
* @example
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var exponential = require( '@stdlib/random/base/exponential' );
* var Random = require( '@stdlib/random/tools/unary' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'real_floating_point_and_generic' );
*
* var policies = {
*     'output': 'real_floating_point_and_generic'
* };
* var options = {
*     'order': 'row-major'
* };
*
* var rand = new Random( exponential, idt, odt, policies, options );
*
* var v = rand.generate( [ 2, 2 ], 2.0 );
* // returns <ndarray>
*
* @example
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndzeros = require( '@stdlib/ndarray/zeros' );
* var exponential = require( '@stdlib/random/base/exponential' );
* var Random = require( '@stdlib/random/tools/unary' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'real_floating_point_and_generic' );
*
* var policies = {
*     'output': 'real_floating_point_and_generic'
* };
* var options = {
*     'order': 'row-major'
* };
*
* var rand = new Random( exponential, idt, odt, policies, options );
*
* var out = ndzeros( [ 2, 2 ] );
* var v = rand.assign( 2.0, out );
* // returns <ndarray>
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
