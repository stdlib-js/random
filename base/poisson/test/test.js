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
var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var uniform = require( './../../../base/uniform' ).factory;
var poisson = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof poisson, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to generate pseudorandom number generators', function test( t ) {
	t.equal( typeof poisson.factory, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is a method to serialize a pseudorandom number generator as JSON', function test( t ) {
	t.equal( typeof poisson.toJSON, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is the generator name', function test( t ) {
	t.equal( poisson.NAME, 'poisson', 'has property' );
	t.end();
});

tape( 'attached to the main export is the underlying PRNG', function test( t ) {
	t.equal( typeof poisson.PRNG, 'function', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator seed', function test( t ) {
	t.equal( isUint32Array( poisson.seed ), true, 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator seed length', function test( t ) {
	t.equal( typeof poisson.seedLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state', function test( t ) {
	t.equal( isUint32Array( poisson.state ), true, 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state length', function test( t ) {
	t.equal( typeof poisson.stateLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state size', function test( t ) {
	t.equal( typeof poisson.byteLength, 'number', 'has property' );
	t.end();
});

tape( 'the function returns pseudorandom numbers', function test( t ) {
	var randu;
	var r;
	var i;

	randu = uniform( 0.00000001, 10000.0 );
	for ( i = 0; i < 1e3; i++ ) {
		r = poisson( randu() );
		t.strictEqual( isNonNegativeInteger( r ), true, 'returns a nonnegative integer' );
	}
	t.end();
});

tape( 'the function supports setting the generator state', function test( t ) {
	var state;
	var arr;
	var i;

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		poisson( 10.0 );
	}
	// Capture the current state:
	state = poisson.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( poisson( 10.0 ) );
	}
	// Set the state:
	poisson.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( poisson( 10.0 ), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});
