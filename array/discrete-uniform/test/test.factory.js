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
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var minstd = require( './../../../base/minstd' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first distribution parameter', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value, 10 );
		};
	}
});

tape( 'the function throws an error if provided an invalid first distribution parameter (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value, 10, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid second distribution parameter', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( -10, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid second distribution parameter (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( -10, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (parameters)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( -10, 10, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (no parameters)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'if provided a `prng` option which is not a function, the function throws an error (parameters)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( -10, 10, {
				'prng': value
			});
		};
	}
});

tape( 'if provided a `prng` option which is not a function, the function throws an error (no parameters)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'prng': value
			});
		};
	}
});

tape( 'if provided a `copy` option which is not a boolean, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
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

tape( 'if provided a `seed` which is not a positive integer or a non-empty array-like object, the function throws an error (parameters)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		0.0,
		-10,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( -10, 10, {
				'seed': value
			});
		};
	}
});

tape( 'if provided a `seed` which is not a positive integer or a non-empty array-like object, the function throws an error (no parameters)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		0.0,
		-10,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'seed': value
			});
		};
	}
});

tape( 'the function throws a range error if provided a `seed` which is an integer greater than the maximum unsigned 32-bit integer (parameters)', function test( t ) {
	var values;
	var i;

	values = [
		UINT32_MAX + 1,
		UINT32_MAX + 2,
		UINT32_MAX + 3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws a range error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( -10, 10, {
				'seed': value
			});
		};
	}
});

tape( 'the function throws a range error if provided a `seed` which is an integer greater than the maximum unsigned 32-bit integer (no parameters)', function test( t ) {
	var values;
	var i;

	values = [
		UINT32_MAX + 1,
		UINT32_MAX + 2,
		UINT32_MAX + 3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws a range error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'seed': value
			});
		};
	}
});

tape( 'if provided a `state` option which is not a Uint32Array, the function throws an error (parameters)', function test( t ) {
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
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( -10, 10, {
				'state': value
			});
		};
	}
});

tape( 'if provided a `state` option which is not a Uint32Array, the function throws an error (no parameters)', function test( t ) {
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
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'if provided an invalid `state` option, the function throws an error (parameters)', function test( t ) {
	var values;
	var i;

	values = [
		new Uint32Array( 0 ),
		new Uint32Array( 10 ),
		new Uint32Array( 100 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( -10, 10, {
				'state': value
			});
		};
	}
});

tape( 'if provided an invalid `state` option, the function throws an error (no parameters)', function test( t ) {
	var values;
	var i;

	values = [
		new Uint32Array( 0 ),
		new Uint32Array( 10 ),
		new Uint32Array( 100 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'if provided a `dtype` option which is not a supported data type, the function throws an error (parameters)', function test( t ) {
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
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( -10, 10, {
				'dtype': value
			});
		};
	}
});

tape( 'if provided a `dtype` option which is not a supported data type, the function throws an error (no parameters)', function test( t ) {
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
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'dtype': value
			});
		};
	}
});

tape( 'the function returns a function which throws an error if provided a first argument which is not a nonnegative integer (parameters)', function test( t ) {
	var random;
	var values;
	var i;

	random = factory();

	values = [
		'5',
		-3,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random( value, -10, 10 );
		};
	}
});

tape( 'the function returns a function which throws an error if provided a first argument which is not a nonnegative integer (parameters, options)', function test( t ) {
	var random;
	var values;
	var i;

	random = factory();

	values = [
		'5',
		-3,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random( value, -10, 10, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if provided a first argument which is not a nonnegative integer (no parameters)', function test( t ) {
	var random;
	var values;
	var i;

	random = factory( -10, 10 );

	values = [
		'5',
		-3,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random( value );
		};
	}
});

tape( 'the function returns a function which throws an error if provided a first argument which is not a nonnegative integer (no parameters, options)', function test( t ) {
	var random;
	var values;
	var i;

	random = factory( -10, 10 );

	values = [
		'5',
		-3,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random( value, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if provided a `dtype` option which is not a supported data type (parameters)', function test( t ) {
	var random;
	var values;
	var i;

	random = factory();

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random( 10, -10, 10, {
				'dtype': value
			});
		};
	}
});

tape( 'the function returns a function which throws an error if provided a `dtype` option which is not a supported data type (no parameters)', function test( t ) {
	var random;
	var values;
	var i;

	random = factory( -10, 10 );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random( 10, {
				'dtype': value
			});
		};
	}
});

tape( 'the function returns a function for creating arrays containing pseudorandom numbers (default)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory( -10, 10 );
	actual = random( 10 );

	t.strictEqual( actual instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( actual[ i ], actual[ i ], 'returns expected value for index '+i );
	}

	random = factory();
	actual = random( 10, -10, 10 );

	t.strictEqual( actual instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( actual[ i ], actual[ i ], 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'when called without distribution parameters, the function returns a function which generates `NaN` values if the first distribution parameter is `NaN`', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory();
	actual = random( 10, NaN, 10 );

	t.strictEqual( actual instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isnan( actual[ i ] ), true, 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'when called without distribution parameters, the function returns a function which generates `NaN` values if the second distribution parameter is `NaN`', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory();
	actual = random( 10, -10, NaN );

	t.strictEqual( actual instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isnan( actual[ i ] ), true, 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'when called without distribution parameters, the function returns a function which generates `NaN` values if all distribution parameters are `NaN`', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory();
	actual = random( 10, NaN, NaN );

	t.strictEqual( actual instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isnan( actual[ i ] ), true, 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying a PRNG seed', function test( t ) {
	var random;
	var arr1;
	var arr2;

	random = factory( -10, 10, {
		'seed': 12345
	});
	arr1 = random( 10 );

	t.strictEqual( arr1 instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( arr1.length, 10, 'returns expected value' );

	random = factory({
		'seed': 12345
	});
	arr2 = random( 10, -10, 10 );

	t.strictEqual( arr2 instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( arr2.length, 10, 'returns expected value' );

	t.deepEqual( arr1, arr2, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying the default output array data type (dtype=float64)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory( -10, 10, {
		'dtype': 'float64'
	});
	actual = random( 10 );

	t.strictEqual( actual instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( actual[ i ], actual[ i ], 'returns expected value for index '+i );
	}

	random = factory({
		'dtype': 'float64'
	});
	actual = random( 10, -10, 10 );

	t.strictEqual( actual instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( actual[ i ], actual[ i ], 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the default output array data type (dtype=float32)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory( -10, 10, {
		'dtype': 'float32'
	});
	actual = random( 10 );

	t.strictEqual( actual instanceof Float32Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( actual[ i ], actual[ i ], 'returns expected value for index '+i );
	}

	random = factory({
		'dtype': 'float32'
	});
	actual = random( 10, -10, 10 );

	t.strictEqual( actual instanceof Float32Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( actual[ i ], actual[ i ], 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the default output array data type (dtype=generic)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory( -10, 10, {
		'dtype': 'generic'
	});
	actual = random( 10 );

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}

	random = factory({
		'dtype': 'generic'
	});
	actual = random( 10, -10, 10 );

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the returned function supports overriding the default output array data type (dtype=generic)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory( -10, 10, {
		'dtype': 'float64'
	});
	actual = random( 10, {
		'dtype': 'generic'
	});

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}

	random = factory({
		'dtype': 'float64'
	});
	actual = random( 10, -10, 10, {
		'dtype': 'generic'
	});

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the generator state', function test( t ) {
	var random;
	var state;
	var arr;
	var i;

	random = factory( -10, 10 );

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		random( 2 );
	}
	// Capture the current state:
	state = random.state;

	// Move to a future state...
	arr = random( 10 );
	for ( i = 0; i < 100; i++ ) {
		random( 2 );
	}
	// Create another function using the captured state:
	random = factory( -10, 10, {
		'state': state
	});

	// Replay previously generated values:
	t.deepEqual( random( 10 ), arr, 'returns expected value' );

	t.end();
});

tape( 'the returned function supports setting the generator state', function test( t ) {
	var random;
	var state;
	var arr;
	var i;

	random = factory( -10, 10 );

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		random( 2 );
	}
	// Capture the current state:
	state = random.state;

	// Move to a future state...
	arr = random( 10 );
	for ( i = 0; i < 100; i++ ) {
		random( 2 );
	}
	// Set the state:
	random.state = state;

	// Replay previously generated values:
	t.deepEqual( random( 10 ), arr, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the underlying PRNG', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory( -10, 10, {
		'prng': minstd
	});
	actual = random( 10 );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports specifying the underlying PRNG (parameters)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory({
		'prng': minstd
	});
	actual = random( 10, -10, 10 );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports providing a seeded underlying PRNG', function test( t ) {
	var random1;
	var random2;
	var randu;
	var seed;
	var arr1;
	var arr2;

	seed = 12345;

	randu = minstd.factory({
		'seed': seed
	});
	random1 = factory( -10, 10, {
		'prng': randu
	});

	randu = minstd.factory({
		'seed': seed
	});
	random2 = factory( -10, 10, {
		'prng': randu
	});

	t.notEqual( random1, random2, 'separate generators' );

	arr1 = random1( 10 );
	arr2 = random2( 10 );
	t.deepEqual( arr1, arr2, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a seeded underlying PRNG (parameters)', function test( t ) {
	var random1;
	var random2;
	var randu;
	var seed;
	var arr1;
	var arr2;

	seed = 12345;

	randu = minstd.factory({
		'seed': seed
	});
	random1 = factory({
		'prng': randu
	});

	randu = minstd.factory({
		'seed': seed
	});
	random2 = factory({
		'prng': randu
	});

	t.notEqual( random1, random2, 'separate generators' );

	arr1 = random1( 10, -10, 10 );
	arr2 = random2( 10, -10, 10 );
	t.deepEqual( arr1, arr2, 'returns expected value' );

	t.end();
});

tape( 'attached to the returned function is the underlying PRNG', function test( t ) {
	var random = factory();
	t.strictEqual( typeof random.PRNG, 'function', 'has property' );

	random = factory({
		'prng': minstd
	});
	t.strictEqual( random.PRNG, minstd, 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (integer seed)', function test( t ) {
	var random = factory({
		'seed': 12345
	});
	t.strictEqual( isUint32Array( random.seed ), true, 'has property' );
	t.strictEqual( random.seed[ 0 ], 12345, 'equal to provided seed' );

	random = factory({
		'seed': 12345,
		'prng': minstd
	});
	t.strictEqual( random.seed, null, 'returns expected value' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (array seed)', function test( t ) {
	var actual;
	var rand;
	var seed;
	var i;

	seed = [ 1234, 5678 ];
	rand = factory({
		'seed': seed
	});

	actual = rand.seed;
	t.strictEqual( isUint32Array( actual ), true, 'has property' );
	for ( i = 0; i < seed.length; i++ ) {
		t.strictEqual( actual[ i ], seed[ i ], 'returns expected value for word '+i );
	}
	t.end();
});

tape( 'attached to the returned function is the generator seed length', function test( t ) {
	var random = factory();
	t.strictEqual( typeof random.seedLength, 'number', 'has property' );

	random = factory({
		'prng': minstd
	});
	t.strictEqual( random.seedLength, null, 'returns expected value' );
	t.end();
});

tape( 'attached to the returned function is the generator state', function test( t ) {
	var random = factory();
	t.strictEqual( isUint32Array( random.state ), true, 'has property' );

	random = factory({
		'prng': minstd
	});
	t.strictEqual( random.state, null, 'returns expected value' );
	t.end();
});

tape( 'attached to the returned function is the generator state length', function test( t ) {
	var random = factory();
	t.strictEqual( typeof random.stateLength, 'number', 'has property' );

	random = factory({
		'prng': minstd
	});
	t.strictEqual( random.stateLength, null, 'returns expected value' );
	t.end();
});

tape( 'attached to the returned function is the generator state size', function test( t ) {
	var random = factory();
	t.strictEqual( typeof random.byteLength, 'number', 'has property' );

	random = factory({
		'prng': minstd
	});
	t.strictEqual( random.byteLength, null, 'returns expected value' );
	t.end();
});
