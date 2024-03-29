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

var tape = require( 'tape' );
var randu = require( './../../../base/randu' ).factory;
var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var poisson = require( './../lib/rejection.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof poisson, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns Poisson distributed pseudorandom numbers', function test( t ) {
	var lambda;
	var rand;
	var r;
	var i;

	rand = randu({
		'name': 'minstd-shuffle',
		'seed': 12345
	});
	for ( i = 0; i < 1e4; i++ ) {
		// Note: `10.0` is chosen to ensure all code paths are hit.
		lambda = rand() + 10.0;
		r = poisson( rand, lambda );
		t.strictEqual( isNonNegativeInteger( r ), true, 'returns a nonnegative integer' );
	}
	t.end();
});
