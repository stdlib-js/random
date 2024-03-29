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
var Float64Array = require( '@stdlib/array/float64' );
var zeros = require( '@stdlib/array/zeros' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var linspace = require( '@stdlib/array/base/linspace' );
var uniform = require( './../../../base/uniform' ).factory;
var prng = require( './../../../base/gamma' );
var random = require( './../lib/main.js' );


// VARIABLES //

// Valid values for PRNG parameters:
var PARAM1 = linspace( 1.0, 5.0, 10 );
var PARAM2 = linspace( 1.0, 5.0, 10 );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof random, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function fills a strided array with pseudorandom numbers', function test( t ) {
	var out;
	var x1;
	var x2;
	var N;
	var i;

	N = 10;

	x1 = [ PARAM1[ 0 ] ];
	x2 = [ PARAM2[ 0 ] ];
	out = zeros( N, 'generic' );

	random( N, x1, 0, x2, 0, out, 1 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out[ i ], 'number', 'returns a number' );
	}

	x1 = filledarrayBy( N, 'generic', uniform( PARAM1[ 0 ], PARAM1[ 9 ] ) );
	x2 = filledarrayBy( N, 'generic', uniform( PARAM2[ 0 ], PARAM2[ 9 ] ) );
	out = zeros( N, 'generic' );

	random( N, x1, 1, x2, 1, out, 1 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out[ i ], 'number', 'returns a number' );
	}
	t.end();
});

tape( 'the function fills a strided array with pseudorandom numbers (accessors)', function test( t ) {
	var out;
	var x1;
	var x2;
	var N;
	var i;

	N = 10;

	x1 = toAccessorArray( [ PARAM1[ 0 ] ] );
	x2 = toAccessorArray( [ PARAM2[ 0 ] ] );
	out = zeros( N, 'generic' );

	random( N, x1, 0, x2, 0, out, 1 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out[ i ], 'number', 'returns a number' );
	}

	x1 = toAccessorArray( filledarrayBy( N, 'generic', uniform( PARAM1[ 0 ], PARAM1[ 9 ] ) ) );
	x2 = toAccessorArray( filledarrayBy( N, 'generic', uniform( PARAM2[ 0 ], PARAM2[ 9 ] ) ) );
	out = zeros( N, 'generic' );

	random( N, x1, 1, x2, 1, out, 1 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out[ i ], 'number', 'returns a number' );
	}
	t.end();
});

tape( 'the function fills a strided array with pseudorandom numbers (seeded)', function test( t ) {
	var rand;
	var opts;
	var out;
	var x1;
	var x2;
	var N;
	var i;

	opts = {
		'seed': prng.seed
	};

	N = 10;

	x1 = [ PARAM1[ 0 ] ];
	x2 = [ PARAM2[ 0 ] ];
	out = zeros( N, 'generic' );

	random( N, x1, 0, x2, 0, out, 1, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( out[ i ], rand( x1[ 0 ], x2[ 0 ] ), 'returns expected value' );
	}

	x1 = filledarrayBy( N, 'generic', uniform( PARAM1[ 0 ], PARAM1[ 9 ] ) );
	x2 = filledarrayBy( N, 'generic', uniform( PARAM2[ 0 ], PARAM2[ 9 ] ) );
	out = zeros( N, 'generic' );

	random( N, x1, 1, x2, 1, out, 1, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( out[ i ], rand( x1[ i ], x2[ i ] ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function fills a strided array with pseudorandom numbers (accessors; seeded)', function test( t ) {
	var rand;
	var opts;
	var out;
	var x1;
	var x2;
	var N;
	var i;

	opts = {
		'seed': prng.seed
	};

	N = 10;

	x1 = toAccessorArray( [ PARAM1[ 0 ] ] );
	x2 = toAccessorArray( [ PARAM2[ 0 ] ] );
	out = zeros( N, 'generic' );

	random( N, x1, 0, x2, 0, out, 1, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( out[ i ], rand( x1.get( 0 ), x2.get( 0 ) ), 'returns expected value' );
	}

	x1 = toAccessorArray( filledarrayBy( N, 'generic', uniform( PARAM1[ 0 ], PARAM1[ 9 ] ) ) );
	x2 = toAccessorArray( filledarrayBy( N, 'generic', uniform( PARAM2[ 0 ], PARAM2[ 9 ] ) ) );
	out = zeros( N, 'generic' );

	random( N, x1, 1, x2, 1, out, 1, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( out[ i ], rand( x1.get( i ), x2.get( i ) ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports a stride for the first strided array', function test( t ) {
	var expected;
	var rand;
	var opts;
	var out;
	var x1;
	var x2;
	var N;

	N = 3;
	x1 = [
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ],
		PARAM1[ 2 ], // 1
		PARAM1[ 3 ],
		PARAM1[ 4 ]  // 2
	];
	x2 = [
		PARAM2[ 0 ], // 0
		PARAM2[ 1 ], // 1
		PARAM2[ 2 ], // 2
		PARAM2[ 3 ],
		PARAM2[ 4 ]
	];
	out = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];

	opts = {
		'seed': prng.seed
	};
	random( N, x1, 2, x2, 1, out, 1, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1[ 0 ], x2[ 0 ] ),
		rand( x1[ 2 ], x2[ 1 ] ),
		rand( x1[ 4 ], x2[ 2 ] ),
		0.0,
		0.0
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a stride for the first strided array (accessors)', function test( t ) {
	var expected;
	var rand;
	var opts;
	var out;
	var x1;
	var x2;
	var N;

	N = 3;
	x1 = toAccessorArray([
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ],
		PARAM1[ 2 ], // 1
		PARAM1[ 3 ],
		PARAM1[ 4 ]  // 2
	]);
	x2 = toAccessorArray([
		PARAM2[ 0 ], // 0
		PARAM2[ 1 ], // 1
		PARAM2[ 2 ], // 2
		PARAM2[ 3 ],
		PARAM2[ 4 ]
	]);
	out = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];

	opts = {
		'seed': prng.seed
	};
	random( N, x1, 2, x2, 1, toAccessorArray( out ), 1, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1.get( 0 ), x2.get( 0 ) ),
		rand( x1.get( 2 ), x2.get( 1 ) ),
		rand( x1.get( 4 ), x2.get( 2 ) ),
		0.0,
		0.0
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a stride for the second strided array', function test( t ) {
	var expected;
	var rand;
	var opts;
	var out;
	var x1;
	var x2;
	var N;

	N = 3;
	x1 = [
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ], // 1
		PARAM1[ 2 ], // 2
		PARAM1[ 3 ],
		PARAM1[ 4 ]
	];
	x2 = [
		PARAM2[ 0 ], // 0
		PARAM2[ 1 ],
		PARAM2[ 2 ], // 1
		PARAM2[ 3 ],
		PARAM2[ 4 ]  // 2
	];
	out = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];

	opts = {
		'seed': prng.seed
	};
	random( N, x1, 1, x2, 2, out, 1, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1[ 0 ], x2[ 0 ] ),
		rand( x1[ 1 ], x2[ 2 ] ),
		rand( x1[ 2 ], x2[ 4 ] ),
		0.0,
		0.0
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a stride for the second strided array (accessors)', function test( t ) {
	var expected;
	var rand;
	var opts;
	var out;
	var x1;
	var x2;
	var N;

	N = 3;
	x1 = toAccessorArray([
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ], // 1
		PARAM1[ 2 ], // 2
		PARAM1[ 3 ],
		PARAM1[ 4 ]
	]);
	x2 = toAccessorArray([
		PARAM2[ 0 ], // 0
		PARAM2[ 1 ],
		PARAM2[ 2 ], // 1
		PARAM2[ 3 ],
		PARAM2[ 4 ]  // 2
	]);
	out = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];

	opts = {
		'seed': prng.seed
	};
	random( N, x1, 1, x2, 2, toAccessorArray( out ), 1, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1.get( 0 ), x2.get( 0 ) ),
		rand( x1.get( 1 ), x2.get( 2 ) ),
		rand( x1.get( 2 ), x2.get( 4 ) ),
		0.0,
		0.0
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a stride for the output strided array', function test( t ) {
	var expected;
	var rand;
	var opts;
	var out;
	var x1;
	var x2;
	var N;

	N = 3;
	x1 = [
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ], // 1
		PARAM1[ 2 ], // 2
		PARAM1[ 3 ],
		PARAM1[ 4 ]
	];
	x2 = [
		PARAM2[ 0 ], // 0
		PARAM2[ 1 ], // 1
		PARAM2[ 2 ], // 2
		PARAM2[ 3 ],
		PARAM2[ 4 ]
	];
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
	random( N, x1, 1, x2, 1, out, 2, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1[ 0 ], x2[ 0 ] ),
		0.0,
		rand( x1[ 1 ], x2[ 1 ] ),
		0.0,
		rand( x1[ 2 ], x2[ 2 ] )
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a stride for the output strided array (accessors)', function test( t ) {
	var expected;
	var rand;
	var opts;
	var out;
	var x1;
	var x2;
	var N;

	N = 3;
	x1 = toAccessorArray([
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ], // 1
		PARAM1[ 2 ], // 2
		PARAM1[ 3 ],
		PARAM1[ 4 ]
	]);
	x2 = toAccessorArray([
		PARAM2[ 0 ], // 0
		PARAM2[ 1 ], // 1
		PARAM2[ 2 ], // 2
		PARAM2[ 3 ],
		PARAM2[ 4 ]
	]);
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
	random( N, x1, 1, x2, 1, toAccessorArray( out ), 2, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1.get( 0 ), x2.get( 0 ) ),
		0.0,
		rand( x1.get( 1 ), x2.get( 1 ) ),
		0.0,
		rand( x1.get( 2 ), x2.get( 2 ) )
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var actual;
	var out;
	var x1;
	var x2;

	x1 = [ PARAM1[ 0 ] ];
	x2 = [ PARAM2[ 0 ] ];
	out = zeros( 10, 'generic' );

	actual = random( out.length, x1, 1, x2, 1, out, 1 );
	t.strictEqual( actual, out, 'same reference' );

	x1 = [ PARAM1[ 0 ], PARAM1[ 1 ], PARAM1[ 2 ] ];
	x2 = [ PARAM2[ 0 ], PARAM2[ 1 ], PARAM2[ 2 ] ];
	out = zeros( 3, 'generic' );

	actual = random( out.length, x1, 1, x2, 1, out, 1 );
	t.strictEqual( actual, out, 'same reference' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function leaves the output array unchanged', function test( t ) {
	var expected;
	var out;
	var x1;
	var x2;

	x1 = [ PARAM1[ 0 ] ];
	x2 = [ PARAM2[ 0 ] ];
	out = zeros( 10, 'generic' );
	expected = zeros( 10, 'generic' );

	random( -1, x1, 1, x2, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	random( 0, x1, 1, x2, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	x1 = [ PARAM1[ 0 ], PARAM1[ 1 ], PARAM1[ 2 ] ];
	x2 = [ PARAM2[ 0 ], PARAM2[ 1 ], PARAM2[ 2 ] ];
	out = zeros( x1.length, 'generic' );
	expected = zeros( x1.length, 'generic' );

	random( -1, x1, 1, x2, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	random( 0, x1, 1, x2, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function leaves the output array unchanged (accessors)', function test( t ) {
	var expected;
	var out;
	var x1;
	var x2;

	x1 = toAccessorArray( [ PARAM1[ 0 ] ] );
	x2 = toAccessorArray( [ PARAM2[ 0 ] ] );
	out = zeros( 10, 'generic' );
	expected = zeros( 10, 'generic' );

	random( -1, x1, 1, x2, 1, toAccessorArray( out ), 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	random( 0, x1, 1, x2, 1, toAccessorArray( out ), 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	x1 = toAccessorArray( [ PARAM1[ 0 ], PARAM1[ 1 ], PARAM1[ 2 ] ] );
	x2 = toAccessorArray( [ PARAM2[ 0 ], PARAM2[ 1 ], PARAM2[ 2 ] ] );
	out = zeros( x1.length, 'generic' );
	expected = zeros( x1.length, 'generic' );

	random( -1, x1, 1, x2, 1, toAccessorArray( out ), 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	random( 0, x1, 1, x2, 1, toAccessorArray( out ), 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var rand;
	var opts;
	var out;
	var x1;
	var x2;
	var N;

	N = 3;
	x1 = [
		PARAM1[ 0 ], // 2
		PARAM1[ 1 ],
		PARAM1[ 2 ], // 1
		PARAM1[ 3 ],
		PARAM1[ 4 ]  // 0
	];
	x2 = [
		PARAM2[ 0 ], // 2
		PARAM2[ 1 ], // 1
		PARAM2[ 2 ], // 0
		PARAM2[ 3 ],
		PARAM2[ 4 ]
	];
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
	random( N, x1, -2, x2, -1, out, 2, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1[ 4 ], x2[ 2 ] ),
		0.0,
		rand( x1[ 2 ], x2[ 1 ] ),
		0.0,
		rand( x1[ 0 ], x2[ 0 ] )
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var rand;
	var opts;
	var out;
	var x1;
	var x2;
	var N;

	N = 3;
	x1 = toAccessorArray([
		PARAM1[ 0 ], // 2
		PARAM1[ 1 ],
		PARAM1[ 2 ], // 1
		PARAM1[ 3 ],
		PARAM1[ 4 ]  // 0
	]);
	x2 = toAccessorArray([
		PARAM2[ 0 ], // 2
		PARAM2[ 1 ], // 1
		PARAM2[ 2 ], // 0
		PARAM2[ 3 ],
		PARAM2[ 4 ]
	]);
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
	random( N, x1, -2, x2, -1, toAccessorArray( out ), 2, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1.get( 4 ), x2.get( 2 ) ),
		0.0,
		rand( x1.get( 2 ), x2.get( 1 ) ),
		0.0,
		rand( x1.get( 0 ), x2.get( 0 ) )
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var rand;
	var opts;
	var out;
	var x1;
	var x2;
	var N;

	N = 3;
	x1 = [
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ],
		PARAM1[ 2 ], // 1
		PARAM1[ 3 ],
		PARAM1[ 4 ], // 2
		PARAM1[ 5 ]
	];
	x2 = [
		PARAM2[ 0 ],  // 2
		PARAM2[ 1 ],  // 1
		PARAM2[ 2 ],  // 0
		PARAM2[ 3 ],
		PARAM2[ 4 ],
		PARAM2[ 5 ]
	];
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
	random( N, x1, 2, x2, -1, out, -2, opts );

	rand = prng.factory({
		'seed': opts.seed
	});

	// The order in which `rand` is invoked matters as the order in which pseudorandom numbers are generated is fixed...
	expected = [
		rand( x1[ 0 ], x2[ 2 ] ),
		rand( x1[ 2 ], x2[ 1 ] ),
		rand( x1[ 4 ], x2[ 0 ] )
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

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var viewOut;
	var viewX1;
	var viewX2;
	var rand;
	var opts;
	var out;
	var x1;
	var x2;
	var N;

	N = 3;

	// Initial arrays...
	x1 = new Float64Array([
		PARAM1[ 0 ],
		PARAM1[ 1 ], // 2
		PARAM1[ 2 ],
		PARAM1[ 3 ], // 1
		PARAM1[ 4 ],
		PARAM1[ 5 ]  // 0
	]);
	x2 = new Float64Array([
		PARAM2[ 0 ],
		PARAM2[ 1 ],
		PARAM2[ 2 ],
		PARAM2[ 3 ], // 0
		PARAM2[ 4 ], // 1
		PARAM2[ 5 ]  // 2
	]);
	out = new Float64Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0
	]);

	// Create offset views...
	viewX1 = new Float64Array( x1.buffer, x1.BYTES_PER_ELEMENT*1 ); // begin at the 2nd element
	viewX2 = new Float64Array( x2.buffer, x2.BYTES_PER_ELEMENT*3 ); // begin at the 4th element
	viewOut = new Float64Array( out.buffer, out.BYTES_PER_ELEMENT*2 ); // begin at the 3rd element

	opts = {
		'seed': prng.seed
	};
	random( N, viewX1, -2, viewX2, 1, viewOut, 1, opts );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = new Float64Array([
		0.0,
		0.0,
		rand( x1[ 5 ], x2[ 3 ] ),
		rand( x1[ 3 ], x2[ 4 ] ),
		rand( x1[ 1 ], x2[ 5 ] ),
		0.0
	]);

	t.deepEqual( expected, out, 'returns expected value' );
	t.end();
});
