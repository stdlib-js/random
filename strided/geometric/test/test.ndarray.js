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

var tape = require( 'tape' );
var zeros = require( '@stdlib/array/zeros' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var randomArray = require( './../../../array/uniform' );
var random = require( './../lib' ).ndarray;


// VARIABLES //

// Valid values for PRNG parameters:
var PARAM1 = randomArray( 10, 0.01, 0.99, {
	'dtype': 'generic'
});


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof random, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function fills a strided array with pseudorandom numbers', function test( t ) {
	var out;
	var x1;
	var N;
	var i;

	N = 10;

	x1 = [ PARAM1[ 0 ] ];
	out = zeros( N, 'generic' );

	random( N, x1, 0, 0, out, 1, 0 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out[ i ], 'number', 'returns expected value' );
	}

	x1 = randomArray( N, 0.01, 0.99, {
		'dtype': 'generic'
	});
	out = zeros( N, 'generic' );

	random( N, x1, 1, 0, out, 1, 0 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out[ i ], 'number', 'returns expected value' );
	}
	t.end();
});

tape( 'the function fills a strided array with pseudorandom numbers (accessors)', function test( t ) {
	var out;
	var x1;
	var N;
	var i;

	N = 10;

	x1 = toAccessorArray( [ PARAM1[ 0 ] ] );
	out = toAccessorArray( zeros( N, 'generic' ) );

	random( N, x1, 0, 0, out, 1, 0 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out.get( i ), 'number', 'returns expected value' );
	}

	x1 = toAccessorArray( randomArray( N, 0.01, 0.99, {
		'dtype': 'generic'
	}));
	out = toAccessorArray( zeros( N, 'generic' ) );

	random( N, x1, 1, 0, out, 1, 0 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out.get( i ), 'number', 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var actual;
	var out;
	var x1;

	x1 = [ PARAM1[ 0 ] ];
	out = zeros( 10, 'generic' );

	actual = random( out.length, x1, 0, 0, out, 1, 0 );
	t.strictEqual( actual, out, 'same reference' );

	x1 = [ PARAM1[ 0 ], PARAM1[ 1 ], PARAM1[ 2 ] ];
	out = zeros( 3, 'generic' );

	actual = random( out.length, x1, 1, 0, out, 1, 0 );
	t.strictEqual( actual, out, 'same reference' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function leaves the output array unchanged', function test( t ) {
	var expected;
	var out;
	var x1;

	x1 = [ PARAM1[ 0 ] ];
	out = zeros( 10, 'generic' );
	expected = zeros( 10, 'generic' );

	random( -1, x1, 0, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	random( 0, x1, 0, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	x1 = [ PARAM1[ 0 ], PARAM1[ 1 ], PARAM1[ 2 ] ];
	out = zeros( x1.length, 'generic' );
	expected = zeros( x1.length, 'generic' );

	random( -1, x1, 1, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	random( 0, x1, 1, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function leaves the output array unchanged (accessors)', function test( t ) {
	var expected;
	var out;
	var x1;

	x1 = toAccessorArray( [ PARAM1[ 0 ] ] );
	out = zeros( 10, 'generic' );
	expected = zeros( 10, 'generic' );

	random( -1, x1, 0, 0, toAccessorArray( out ), 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	random( 0, x1, 0, 0, toAccessorArray( out ), 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	x1 = toAccessorArray( [ PARAM1[ 0 ], PARAM1[ 1 ], PARAM1[ 2 ] ] );
	out = zeros( x1.length, 'generic' );
	expected = zeros( x1.length, 'generic' );

	random( -1, x1, 1, 0, toAccessorArray( out ), 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	random( 0, x1, 1, 0, toAccessorArray( out ), 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
