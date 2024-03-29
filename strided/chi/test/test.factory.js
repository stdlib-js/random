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
var Float64Array = require( '@stdlib/array/float64' );
var zeros = require( '@stdlib/array/zeros' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var randomArray = require( './../../../array/uniform' );
var prng = require( './../../../base/chi' );
var factory = require( './../lib' ).factory;


// VARIABLES //

// Valid values for PRNG parameters:
var PARAM1 = randomArray( 10, 2.0, 5.0, {
	'dtype': 'generic'
});


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'copy': value
			});
		};
	}
});

tape( 'the function returns a function which fills a strided array with pseudorandom numbers', function test( t ) {
	var random;
	var out;
	var x1;
	var N;
	var i;

	random = factory();

	N = 10;

	x1 = [ PARAM1[ 0 ] ];
	out = zeros( N, 'generic' );

	random( N, x1, 0, out, 1 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out[ i ], 'number', 'returns expected value' );
	}

	x1 = randomArray( N, 2.0, 5.0, {
		'dtype': 'generic'
	});
	out = zeros( N, 'generic' );

	random( N, x1, 1, out, 1 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out[ i ], 'number', 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a function which fills a strided array with pseudorandom numbers (accessors)', function test( t ) {
	var random;
	var out;
	var x1;
	var N;
	var i;

	random = factory();

	N = 10;

	x1 = toAccessorArray( [ PARAM1[ 0 ] ] );
	out = zeros( N, 'generic' );

	random( N, x1, 0, out, 1 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out[ i ], 'number', 'returns expected value' );
	}

	x1 = toAccessorArray( randomArray( N, 2.0, 5.0, {
		'dtype': 'generic'
	}));
	out = zeros( N, 'generic' );

	random( N, x1, 1, out, 1 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out[ i ], 'number', 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a function which fills a strided array with pseudorandom numbers (seeded)', function test( t ) {
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;
	var i;

	opts = {
		'seed': prng.seed
	};
	random = factory( opts );

	N = 10;

	x1 = [ PARAM1[ 0 ] ];
	out = zeros( N, 'generic' );

	random( N, x1, 0, out, 1 );

	rand = prng.factory({
		'seed': opts.seed
	});
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( out[ i ], rand( x1[ 0 ] ), 'returns expected value' );
	}

	x1 = randomArray( N, 2.0, 5.0, {
		'dtype': 'generic'
	});
	out = zeros( N, 'generic' );

	random = factory( opts );
	random( N, x1, 1, out, 1 );

	rand = prng.factory({
		'seed': opts.seed
	});
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( out[ i ], rand( x1[ i ] ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function fills a strided array with pseudorandom numbers (accessors; seeded)', function test( t ) {
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;
	var i;

	opts = {
		'seed': prng.seed
	};
	random = factory( opts );

	N = 10;

	x1 = toAccessorArray( [ PARAM1[ 0 ] ] );
	out = zeros( N, 'generic' );

	random( N, x1, 0, out, 1 );

	rand = prng.factory({
		'seed': opts.seed
	});
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( out[ i ], rand( x1.get( 0 ) ), 'returns expected value' );
	}

	x1 = toAccessorArray( randomArray( N, 2.0, 5.0, {
		'dtype': 'generic'
	}));
	out = zeros( N, 'generic' );

	random = factory( opts );
	random( N, x1, 1, out, 1 );

	rand = prng.factory({
		'seed': opts.seed
	});
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( out[ i ], rand( x1.get( i ) ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a function which supports a stride for the first strided array', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = [
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ],
		PARAM1[ 2 ], // 1
		PARAM1[ 3 ],
		PARAM1[ 4 ]  // 2
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
	random = factory( opts );
	random( N, x1, 2, out, 1 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1[ 0 ] ),
		rand( x1[ 2 ] ),
		rand( x1[ 4 ] ),
		0.0,
		0.0
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function which supports a stride for the first strided array (accessors)', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = toAccessorArray([
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ],
		PARAM1[ 2 ], // 1
		PARAM1[ 3 ],
		PARAM1[ 4 ]  // 2
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
	random = factory( opts );
	random( N, x1, 2, toAccessorArray( out ), 1 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1.get( 0 ) ),
		rand( x1.get( 2 ) ),
		rand( x1.get( 4 ) ),
		0.0,
		0.0
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function which supports a stride for the output strided array', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = [
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ], // 1
		PARAM1[ 2 ], // 2
		PARAM1[ 3 ],
		PARAM1[ 4 ]
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
	random = factory( opts );
	random( N, x1, 1, out, 2 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1[ 0 ] ),
		0.0,
		rand( x1[ 1 ] ),
		0.0,
		rand( x1[ 2 ] )
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function which supports a stride for the output strided array (accessors)', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = toAccessorArray([
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ], // 1
		PARAM1[ 2 ], // 2
		PARAM1[ 3 ],
		PARAM1[ 4 ]
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
	random = factory( opts );
	random( N, x1, 1, toAccessorArray( out ), 2 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1.get( 0 ) ),
		0.0,
		rand( x1.get( 1 ) ),
		0.0,
		rand( x1.get( 2 ) )
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function which returns a reference to the output array', function test( t ) {
	var random;
	var actual;
	var out;
	var x1;

	random = factory();

	x1 = [ PARAM1[ 0 ] ];
	out = zeros( 10, 'generic' );

	actual = random( out.length, x1, 0, out, 1 );
	t.strictEqual( actual, out, 'same reference' );

	x1 = [ PARAM1[ 0 ], PARAM1[ 1 ], PARAM1[ 2 ] ];
	out = zeros( 3, 'generic' );

	actual = random( out.length, x1, 1, out, 1 );
	t.strictEqual( actual, out, 'same reference' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the returned function leaves the output array unchanged', function test( t ) {
	var expected;
	var random;
	var out;
	var x1;

	random = factory();

	x1 = [ PARAM1[ 0 ] ];
	out = zeros( 10, 'generic' );
	expected = zeros( 10, 'generic' );

	random( -1, x1, 0, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	random( 0, x1, 0, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	x1 = [ PARAM1[ 0 ], PARAM1[ 1 ], PARAM1[ 2 ] ];
	out = zeros( x1.length, 'generic' );
	expected = zeros( x1.length, 'generic' );

	random( -1, x1, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	random( 0, x1, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the returned function leaves the output array unchanged (accessors)', function test( t ) {
	var expected;
	var random;
	var out;
	var x1;

	random = factory();

	x1 = toAccessorArray( [ PARAM1[ 0 ] ] );
	out = zeros( 10, 'generic' );
	expected = zeros( 10, 'generic' );

	random( -1, x1, 0, toAccessorArray( out ), 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	random( 0, x1, 0, toAccessorArray( out ), 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	x1 = toAccessorArray( [ PARAM1[ 0 ], PARAM1[ 1 ], PARAM1[ 2 ] ] );
	out = zeros( x1.length, 'generic' );
	expected = zeros( x1.length, 'generic' );

	random( -1, x1, 1, toAccessorArray( out ), 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	random( 0, x1, 1, toAccessorArray( out ), 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which supports negative strides', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = [
		PARAM1[ 0 ], // 2
		PARAM1[ 1 ],
		PARAM1[ 2 ], // 1
		PARAM1[ 3 ],
		PARAM1[ 4 ]  // 0
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
	random = factory( opts );
	random( N, x1, -2, out, 2 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1[ 4 ] ),
		0.0,
		rand( x1[ 2 ] ),
		0.0,
		rand( x1[ 0 ] )
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function which supports negative strides (accessors)', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = toAccessorArray([
		PARAM1[ 0 ], // 2
		PARAM1[ 1 ],
		PARAM1[ 2 ], // 1
		PARAM1[ 3 ],
		PARAM1[ 4 ]  // 0
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
	random = factory( opts );
	random( N, x1, -2, toAccessorArray( out ), 2 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1.get( 4 ) ),
		0.0,
		rand( x1.get( 2 ) ),
		0.0,
		rand( x1.get( 0 ) )
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function which supports complex access patterns', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
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
	random = factory( opts );
	random( N, x1, 2, out, -2 );

	rand = prng.factory({
		'seed': opts.seed
	});

	// The order in which `rand` is invoked matters as the order in which pseudorandom numbers is generated is fixed...
	expected = [
		rand( x1[ 0 ] ),
		rand( x1[ 2 ] ),
		rand( x1[ 4 ] )
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

tape( 'the function returns a function which supports view offsets', function test( t ) {
	var expected;
	var viewOut;
	var viewX1;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
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
	viewOut = new Float64Array( out.buffer, out.BYTES_PER_ELEMENT*2 ); // begin at the 3rd element

	opts = {
		'seed': prng.seed
	};
	random = factory( opts );
	random( N, viewX1, -2, viewOut, 1 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = new Float64Array([
		0.0,
		0.0,
		rand( x1[ 5 ] ),
		rand( x1[ 3 ] ),
		rand( x1[ 1 ] ),
		0.0
	]);

	t.deepEqual( expected, out, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function having an `ndarray` method which fills a strided array with pseudorandom numbers', function test( t ) {
	var random;
	var out;
	var x1;
	var N;
	var i;

	random = factory();

	N = 10;

	x1 = [ PARAM1[ 0 ] ];
	out = zeros( N, 'generic' );

	random.ndarray( N, x1, 0, 0, out, 1, 0 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out[ i ], 'number', 'returns expected value' );
	}

	x1 = randomArray( N, 2.0, 5.0, {
		'dtype': 'generic'
	});
	out = zeros( N, 'generic' );

	random.ndarray( N, x1, 1, 0, out, 1, 0 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out[ i ], 'number', 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a function having an `ndarray` method which fills a strided array with pseudorandom numbers (accessors)', function test( t ) {
	var random;
	var out;
	var x1;
	var N;
	var i;

	random = factory();

	N = 10;

	x1 = toAccessorArray( [ PARAM1[ 0 ] ] );
	out = toAccessorArray( zeros( N, 'generic' ) );

	random.ndarray( N, x1, 0, 0, out, 1, 0 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out.get( i ), 'number', 'returns expected value' );
	}

	x1 = toAccessorArray( randomArray( N, 2.0, 5.0, {
		'dtype': 'generic'
	}));
	out = toAccessorArray( zeros( N, 'generic' ) );

	random.ndarray( N, x1, 1, 0, out, 1, 0 );
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( typeof out.get( i ), 'number', 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a function having an `ndarray` method which fills a strided array with pseudorandom numbers (seeded)', function test( t ) {
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;
	var i;

	opts = {
		'seed': prng.seed
	};
	random = factory( opts );

	N = 10;

	x1 = [ PARAM1[ 0 ] ];
	out = zeros( N, 'generic' );

	random.ndarray( N, x1, 0, 0, out, 1, 0 );

	rand = prng.factory({
		'seed': opts.seed
	});
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( out[ i ], rand( x1[ 0 ] ), 'returns expected value' );
	}

	x1 = randomArray( N, 2.0, 5.0, {
		'dtype': 'generic'
	});
	out = zeros( N, 'generic' );

	random = factory( opts );
	random.ndarray( N, x1, 1, 0, out, 1, 0 );

	rand = prng.factory({
		'seed': opts.seed
	});
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( out[ i ], rand( x1[ i ] ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a function having an `ndarray` method which fills a strided array with pseudorandom numbers (accessors; seeded)', function test( t ) {
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;
	var i;

	opts = {
		'seed': prng.seed
	};
	random = factory( opts );

	N = 10;

	x1 = toAccessorArray( [ PARAM1[ 0 ] ] );
	out = toAccessorArray( zeros( N, 'generic' ) );

	random.ndarray( N, x1, 0, 0, out, 1, 0 );

	rand = prng.factory({
		'seed': opts.seed
	});
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( out.get( i ), rand( x1.get( 0 ) ), 'returns expected value' );
	}

	x1 = toAccessorArray( randomArray( N, 2.0, 5.0, {
		'dtype': 'generic'
	}));
	out = toAccessorArray( zeros( N, 'generic' ) );

	random = factory( opts );
	random.ndarray( N, x1, 1, 0, out, 1, 0 );

	rand = prng.factory({
		'seed': opts.seed
	});
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( out.get( i ), rand( x1.get( i ) ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a function having an `ndarray` method which supports a stride for the first strided array', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = [
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ],
		PARAM1[ 2 ], // 1
		PARAM1[ 3 ],
		PARAM1[ 4 ]  // 2
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
	random = factory( opts );
	random.ndarray( N, x1, 2, 0, out, 1, 0 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1[ 0 ] ),
		rand( x1[ 2 ] ),
		rand( x1[ 4 ] ),
		0.0,
		0.0
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function having an `ndarray` method which supports a stride for the first strided array (accessors)', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = toAccessorArray([
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ],
		PARAM1[ 2 ], // 1
		PARAM1[ 3 ],
		PARAM1[ 4 ]  // 2
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
	random = factory( opts );
	random.ndarray( N, x1, 2, 0, toAccessorArray( out ), 1, 0 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1.get( 0 ) ),
		rand( x1.get( 2 ) ),
		rand( x1.get( 4 ) ),
		0.0,
		0.0
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function having an `ndarray` method which supports an offset for the first strided array', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = [
		PARAM1[ 0 ],
		PARAM1[ 1 ],
		PARAM1[ 2 ], // 0
		PARAM1[ 3 ], // 1
		PARAM1[ 4 ]  // 2
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
	random = factory( opts );
	random.ndarray( N, x1, 1, 2, out, 1, 0 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1[ 2 ] ),
		rand( x1[ 3 ] ),
		rand( x1[ 4 ] ),
		0.0,
		0.0
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function having an `ndarray` method which supports an offset for the first strided array (accessors)', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = toAccessorArray([
		PARAM1[ 0 ],
		PARAM1[ 1 ],
		PARAM1[ 2 ], // 0
		PARAM1[ 3 ], // 1
		PARAM1[ 4 ]  // 2
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
	random = factory( opts );
	random.ndarray( N, x1, 1, 2, toAccessorArray( out ), 1, 0 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1.get( 2 ) ),
		rand( x1.get( 3 ) ),
		rand( x1.get( 4 ) ),
		0.0,
		0.0
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function having an `ndarray` method which supports a stride for the output strided array', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = [
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ], // 1
		PARAM1[ 2 ], // 2
		PARAM1[ 3 ],
		PARAM1[ 4 ]
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
	random = factory( opts );
	random.ndarray( N, x1, 1, 0, out, 2, 0 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1[ 0 ] ),
		0.0,
		rand( x1[ 1 ] ),
		0.0,
		rand( x1[ 2 ] )
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function having an `ndarray` method which supports a stride for the output strided array (accessors)', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = toAccessorArray([
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ], // 1
		PARAM1[ 2 ], // 2
		PARAM1[ 3 ],
		PARAM1[ 4 ]
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
	random = factory( opts );
	random.ndarray( N, x1, 1, 0, toAccessorArray( out ), 2, 0 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1.get( 0 ) ),
		0.0,
		rand( x1.get( 1 ) ),
		0.0,
		rand( x1.get( 2 ) )
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function having an `ndarray` method which supports an offset for the output strided array', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = [
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ], // 1
		PARAM1[ 2 ], // 2
		PARAM1[ 3 ],
		PARAM1[ 4 ]
	];
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
	random = factory( opts );
	random.ndarray( N, x1, 1, 0, out, 1, 2 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		0.0,
		0.0,
		rand( x1[ 0 ] ),
		rand( x1[ 1 ] ),
		rand( x1[ 2 ] )
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function having an `ndarray` method which supports an offset for the output strided array (accessors)', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = toAccessorArray([
		PARAM1[ 0 ], // 0
		PARAM1[ 1 ], // 1
		PARAM1[ 2 ], // 2
		PARAM1[ 3 ],
		PARAM1[ 4 ]
	]);
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
	random = factory( opts );
	random.ndarray( N, x1, 1, 0, toAccessorArray( out ), 1, 2 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		0.0,
		0.0,
		rand( x1.get( 0 ) ),
		rand( x1.get( 1 ) ),
		rand( x1.get( 2 ) )
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function having an `ndarray` method which returns a reference to the output array', function test( t ) {
	var random;
	var actual;
	var out;
	var x1;

	random = factory();

	x1 = [ PARAM1[ 0 ] ];
	out = zeros( 10, 'generic' );

	actual = random.ndarray( out.length, x1, 0, 0, out, 1, 0 );
	t.strictEqual( actual, out, 'same reference' );

	x1 = [ PARAM1[ 0 ], PARAM1[ 1 ], PARAM1[ 2 ] ];
	out = zeros( 3, 'generic' );

	actual = random.ndarray( out.length, x1, 1, 0, out, 1, 0 );
	t.strictEqual( actual, out, 'same reference' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `ndarray` method on the returned function leaves the output array unchanged', function test( t ) {
	var expected;
	var random;
	var out;
	var x1;

	random = factory();

	x1 = [ PARAM1[ 0 ] ];
	out = zeros( 10, 'generic' );
	expected = zeros( 10, 'generic' );

	random.ndarray( -1, x1, 0, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	random.ndarray( 0, x1, 0, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	x1 = [ PARAM1[ 0 ], PARAM1[ 1 ], PARAM1[ 2 ] ];
	out = zeros( x1.length, 'generic' );
	expected = zeros( x1.length, 'generic' );

	random.ndarray( -1, x1, 1, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	random.ndarray( 0, x1, 1, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `ndarray` method on the returned function leaves the output array unchanged (accessors)', function test( t ) {
	var expected;
	var random;
	var out;
	var x1;

	random = factory();

	x1 = toAccessorArray( [ PARAM1[ 0 ] ] );
	out = zeros( 10, 'generic' );
	expected = zeros( 10, 'generic' );

	random.ndarray( -1, x1, 0, 0, toAccessorArray( out ), 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	random.ndarray( 0, x1, 0, 0, toAccessorArray( out ), 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	x1 = toAccessorArray( [ PARAM1[ 0 ], PARAM1[ 1 ], PARAM1[ 2 ] ] );
	out = zeros( x1.length, 'generic' );
	expected = zeros( x1.length, 'generic' );

	random.ndarray( -1, x1, 1, 0, toAccessorArray( out ), 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	random.ndarray( 0, x1, 1, 0, toAccessorArray( out ), 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function having an `ndarray` method which supports negative strides', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = [
		PARAM1[ 0 ], // 2
		PARAM1[ 1 ],
		PARAM1[ 2 ], // 1
		PARAM1[ 3 ],
		PARAM1[ 4 ]  // 0
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
	random = factory( opts );
	random.ndarray( N, x1, -2, 4, out, 2, 0 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1[ 4 ] ),
		0.0,
		rand( x1[ 2 ] ),
		0.0,
		rand( x1[ 0 ] )
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function having an `ndarray` method which supports negative strides (accessors)', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = toAccessorArray([
		PARAM1[ 0 ], // 2
		PARAM1[ 1 ],
		PARAM1[ 2 ], // 1
		PARAM1[ 3 ],
		PARAM1[ 4 ]  // 0
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
	random = factory( opts );
	random.ndarray( N, x1, -2, 4, toAccessorArray( out ), 2, 0 );

	rand = prng.factory({
		'seed': opts.seed
	});
	expected = [
		rand( x1.get( 4 ) ),
		0.0,
		rand( x1.get( 2 ) ),
		0.0,
		rand( x1.get( 0 ) )
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function having an `ndarray` method which supports complex access patterns', function test( t ) {
	var expected;
	var random;
	var rand;
	var opts;
	var out;
	var x1;
	var N;

	N = 3;
	x1 = [
		PARAM1[ 0 ],
		PARAM1[ 1 ], // 0
		PARAM1[ 2 ],
		PARAM1[ 3 ], // 1
		PARAM1[ 4 ],
		PARAM1[ 5 ]  // 2
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
	random = factory( opts );
	random.ndarray( N, x1, 2, 1, out, -2, 4 );

	rand = prng.factory({
		'seed': opts.seed
	});

	// The order in which `rand` is invoked matters as the order in which pseudorandom numbers are generated is fixed...
	expected = [
		rand( x1[ 1 ] ),
		rand( x1[ 3 ] ),
		rand( x1[ 5 ] )
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
