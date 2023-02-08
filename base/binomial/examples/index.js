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

var binomial = require( './../lib' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
console.log( '\nseed: %d', binomial.seed[ 0 ] );
for ( i = 0; i < 100; i++ ) {
	console.log( binomial( 20, 0.5 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = binomial.factory( 10, 0.8, {
	'seed': seed
});
console.log( '\nseed: %d', seed );
for ( i = 0; i < 100; i++ ) {
	console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = binomial.factory( 20, 0.5, {
	'seed': binomial.seed
});
console.log( '\nseed: %d', rand.seed[ 0 ] );
for ( i = 0; i < 100; i++ ) {
	console.log( rand() );
}
