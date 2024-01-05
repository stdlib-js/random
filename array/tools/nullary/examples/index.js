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

var exponential = require( './../../../../base/exponential' );
var dtypes = require( '@stdlib/array/dtypes' );
var Random = require( './../lib' );

var dt = dtypes( 'real_floating_point' );
dt.push( 'generic' );

var random = new Random( exponential.factory( 2.0 ), dt, 'float64' );

var x = random.generate( 10 );
console.log( x );
// => <Float64Array>

x = random.generate( 10, {
	'dtype': 'float32'
});
console.log( x );
// => <Float32Array>

x = random.generate( 10, {
	'dtype': 'generic'
});
console.log( x );
// => [...]
