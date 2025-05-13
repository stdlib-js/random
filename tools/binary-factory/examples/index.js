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

var uniform = require( './../../../base/uniform' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var createFactory = require( './../lib' );

// Create a new PRNG factory...
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );
var policies = {
	'output': 'real_floating_point_and_generic'
};
var factory = createFactory( uniform, [ idt, idt ], odt, policies );

// Create a function for generating pseudorandom numbers:
var random = factory();

// Generate a 3x3 matrix of pseudorandom numbers:
var x = random( [ 3, 3 ], 0.0, 1.0 );
console.log( ndarray2array( x ) );

// Generate another matrix with a specified data type:
x = random( [ 3, 3 ], 0.0, 1.0, {
	'dtype': 'float32'
});
console.log( ndarray2array( x ) );

// Define arrays of distribution parameters:
var param1 = new ndarray( 'generic', [ 1.0, 10.0, 100.0 ], [ 3, 1 ], [ 1, 1 ], 0, 'row-major' );
var param2 = new ndarray( 'generic', [ 2.0, 20.0, 200.0 ], [ 3, 1 ], [ 1, 1 ], 0, 'row-major' );

// Broadcast the parameters to generate another 3x3 matrix of pseudorandom numbers:
x = random( [ 3, 3 ], param1, param2 );
console.log( ndarray2array( x ) );
