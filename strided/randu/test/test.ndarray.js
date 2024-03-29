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

var tape = require( 'tape' );
var zeros = require( '@stdlib/array/zeros' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var prng = require( './../../../base/randu' );
var random = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof random, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function fills a strided array with pseudorandom numbers', function test( t ) {
	var out;
	var N;
	var i;

	N = 10;
	out = zeros( N, 'generic' );

	random( N, out, 1, 0 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out[ i ], 'number', 'returns a number' );
	}
	t.end();
});

tape( 'the function fills a strided array with pseudorandom numbers (accessors)', function test( t ) {
	var out;
	var N;
	var i;

	N = 10;
	out = toAccessorArray( zeros( N, 'generic' ) );

	random( N, out, 1, 0 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out.get( i ), 'number', 'returns a number' );
	}
	t.end();
});

tape( 'the function fills a strided array with pseudorandom numbers (seeded)', function test( t ) {
	var rand;
	var opts;
	var out;
	var N;
	var i;

	opts = {
		'seed': prng.seed
	};

	N = 10;
	out = zeros( N, 'generic' );

	random( N, out, 1, 0, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( out[ i ], rand(), 'returns expected value' );
	}
	t.end();
});

tape( 'the function fills a strided array with pseudorandom numbers (accessors; seeded)', function test( t ) {
	var rand;
	var opts;
	var out;
	var N;
	var i;

	opts = {
		'seed': prng.seed
	};

	N = 10;
	out = toAccessorArray( zeros( N, 'generic' ) );

	random( N, out, 1, 0, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( out.get( i ), rand(), 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports a stride for the output strided array', function test( t ) {
	var expected;
	var rand;
	var opts;
	var out;
	var N;

	N = 3;
	out = [
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	];

	opts = {
		'seed': prng.seed
	};
	random( N, out, 2, 0, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand(),
		0.0,
		rand(),
		0.0,
		rand()
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a stride for the output strided array (accessors)', function test( t ) {
	var expected;
	var rand;
	var opts;
	var out;
	var N;

	N = 3;
	out = [
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	];

	opts = {
		'seed': prng.seed
	};
	random( N, toAccessorArray( out ), 2, 0, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand(),
		0.0,
		rand(),
		0.0,
		rand()
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset for the output strided array', function test( t ) {
	var expected;
	var rand;
	var opts;
	var out;
	var N;

	N = 3;
	out = [
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	];

	opts = {
		'seed': prng.seed
	};
	random( N, out, 1, 2, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		0.0,
		0.0,
		rand(),
		rand(),
		rand()
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset for the output strided array (accessors)', function test( t ) {
	var expected;
	var rand;
	var opts;
	var out;
	var N;

	N = 3;
	out = [
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	];

	opts = {
		'seed': prng.seed
	};
	random( N, toAccessorArray( out ), 1, 2, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		0.0,
		0.0,
		rand(),
		rand(),
		rand()
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var actual;
	var out;

	out = zeros( 10, 'generic' );
	actual = random( out.length, out, 1, 0 );
	t.strictEqual( actual, out, 'same reference' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function leaves the output array unchanged', function test( t ) {
	var expected;
	var out;

	out = zeros( 10, 'generic' );
	expected = zeros( 10, 'generic' );

	random( -1, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	random( 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function leaves the output array unchanged (accessors)', function test( t ) {
	var expected;
	var out;

	out = zeros( 10, 'generic' );
	expected = zeros( 10, 'generic' );

	random( -1, toAccessorArray( out ), 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	random( 0, toAccessorArray( out ), 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var rand;
	var opts;
	var out;
	var N;

	N = 3;
	out = [
		0.0, // 2
		0.0,
		0.0, // 1
		0.0,
		0.0  // 0
	];

	opts = {
		'seed': prng.seed
	};
	random( N, out, -2, out.length-1, opts );

	rand = prng.factory({
		'seed': opts.seed
	});

	// The order in which `rand` is invoked matters as the order in which pseudorandom numbers are generated is fixed...
	expected = [
		rand(),
		rand(),
		rand()
	];
	expected = [
		expected[ 2 ],
		0.0,
		expected[ 1 ],
		0.0,
		expected[ 0 ]
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var rand;
	var opts;
	var out;
	var N;

	N = 3;
	out = [
		0.0, // 2
		0.0,
		0.0, // 1
		0.0,
		0.0  // 0
	];

	opts = {
		'seed': prng.seed
	};
	random( N, toAccessorArray( out ), -2, out.length-1, opts );

	rand = prng.factory({
		'seed': opts.seed
	});

	// The order in which `rand` is invoked matters as the order in which pseudorandom numbers are generated is fixed...
	expected = [
		rand(),
		rand(),
		rand()
	];
	expected = [
		expected[ 2 ],
		0.0,
		expected[ 1 ],
		0.0,
		expected[ 0 ]
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});
