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

// MODULES //

var tape = require( 'tape' );
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isReadOnly = require( '@stdlib/ndarray/base/assert/is-read-only' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );
var Uint32Array = require( '@stdlib/array/uint32' );
var minstd = require( './../../base/minstd' );
var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
var array = require( '@stdlib/ndarray/array' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var numel = require( '@stdlib/ndarray/numel' );
var factory = require( './../lib/factory.js' );


// VARIABLES //

var PARAM1 = 0.0;
var PARAM2 = 1.0;


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
		null,
		true,
		false,
		void 0,
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

tape( 'if provided a `prng` option which is not a function, the function throws an error', function test( t ) {
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

tape( 'if provided a `seed` which is not a positive integer or a non-empty array-like object, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		0.0,
		-5.0,
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

tape( 'the function throws a range error if provided a `seed` which is an integer greater than the maximum unsigned 32-bit integer', function test( t ) {
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

tape( 'if provided a `state` option which is not a Uint32Array, the function throws an error', function test( t ) {
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

tape( 'if provided an invalid `state` option, the function throws an error', function test( t ) {
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

tape( 'the function returns a function which throws an error if provided a first argument which is not a valid shape', function test( t ) {
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
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random( value, PARAM1, PARAM2 );
		};
	}
});

tape( 'the function returns a function which throws an error if provided a first argument which is not a valid shape (options)', function test( t ) {
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
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random( value, PARAM1, PARAM2, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an options argument which is not an object', function test( t ) {
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
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random( [ 2, 2 ], PARAM1, PARAM2, value );
		};
	}
});

tape( 'the function returns a function which throws an error if provided a `dtype` option which is not a supported data type', function test( t ) {
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
			random( [ 2, 2 ], PARAM1, PARAM2, {
				'dtype': value
			});
		};
	}
});

tape( 'the function returns a function which throws an error if provided distribution parameters and the output array shape are not broadcast compatible', function test( t ) {
	var random;
	var values;
	var param1;
	var param2;
	var i;

	random = factory();

	values = [
		[ 4, 4, 4 ],
		[ 3, 3, 3, 3 ],
		[ 1, 2, 3, 4 ],
		[ 10, 10 ]
	];
	param1 = array( [ [ PARAM1, PARAM1 ] ] );
	param2 = array( [ [ PARAM2, PARAM2 ] ] );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random( value, param1, param2 );
		};
	}
});

tape( 'the function returns a function which returns an ndarray containing pseudorandom numbers (default; scalar)', function test( t ) {
	var random;
	var actual;
	var shape;
	var i;

	random = factory();

	shape = [ 3, 3 ];
	actual = random( shape, PARAM1, PARAM2 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	for ( i = 0; i < numel( actual ); i++ ) {
		t.strictEqual( isnan( actual.iget( i ) ), false, 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function returns a function which returns an ndarray containing pseudorandom numbers (default; zero-dimensional ndarray)', function test( t ) {
	var random;
	var actual;
	var param1;
	var param2;
	var shape;
	var i;

	random = factory();

	shape = [ 3, 3 ];
	param1 = scalar2ndarray( PARAM1, 'float64', 'row-major' );
	param2 = scalar2ndarray( PARAM2, 'float64', 'row-major' );

	actual = random( shape, param1, param2 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	for ( i = 0; i < numel( actual ); i++ ) {
		t.strictEqual( isnan( actual.iget( i ) ), false, 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function returns a function which returns an ndarray containing pseudorandom numbers (default; ndarray)', function test( t ) {
	var random;
	var actual;
	var param1;
	var param2;
	var shape;
	var i;

	random = factory();

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ], [ PARAM1, PARAM1 ] ] );
	param2 = array( [ [ PARAM2, PARAM2 ], [ PARAM2, PARAM2 ] ] );

	actual = random( shape, param1, param2 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	for ( i = 0; i < numel( actual ); i++ ) {
		t.strictEqual( isnan( actual.iget( i ) ), false, 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function returns a function which returns an ndarray containing pseudorandom numbers (default; broadcasted ndarray)', function test( t ) {
	var random;
	var actual;
	var param1;
	var param2;
	var shape;
	var i;

	random = factory();

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ] ] );
	param2 = array( [ [ PARAM2, PARAM2 ] ] );

	actual = random( shape, param1, param2 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	for ( i = 0; i < numel( actual ); i++ ) {
		t.strictEqual( isnan( actual.iget( i ) ), false, 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function returns a function which supports specifying the output array data type (dtype=float64; scalar)', function test( t ) {
	var random;
	var actual;
	var shape;
	var i;

	random = factory();

	shape = [ 3, 3 ];
	actual = random( shape, PARAM1, PARAM2, {
		'dtype': 'float64'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	for ( i = 0; i < numel( actual ); i++ ) {
		t.strictEqual( isnan( actual.iget( i ) ), false, 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function returns a function which supports specifying the output array data type (dtype=float64; zero-dimensional ndarray)', function test( t ) {
	var random;
	var actual;
	var param1;
	var param2;
	var shape;
	var i;

	random = factory();

	shape = [ 3, 3 ];
	param1 = scalar2ndarray( PARAM1, 'float64', 'row-major' );
	param2 = scalar2ndarray( PARAM2, 'float64', 'row-major' );

	actual = random( shape, param1, param2, {
		'dtype': 'float64'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	for ( i = 0; i < numel( actual ); i++ ) {
		t.strictEqual( isnan( actual.iget( i ) ), false, 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function returns a function which supports specifying the output array data type (dtype=float64; ndarray)', function test( t ) {
	var random;
	var actual;
	var param1;
	var param2;
	var shape;
	var i;

	random = factory();

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ], [ PARAM1, PARAM1 ] ] );
	param2 = array( [ [ PARAM2, PARAM2 ], [ PARAM2, PARAM2 ] ] );

	actual = random( shape, param1, param2, {
		'dtype': 'float64'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	for ( i = 0; i < numel( actual ); i++ ) {
		t.strictEqual( isnan( actual.iget( i ) ), false, 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function returns a function which supports specifying the output array data type (dtype=float64; broadcasted ndarray)', function test( t ) {
	var random;
	var actual;
	var param1;
	var param2;
	var shape;
	var i;

	random = factory();

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ] ] );
	param2 = array( [ [ PARAM2, PARAM2 ] ] );

	actual = random( shape, param1, param2, {
		'dtype': 'float64'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	for ( i = 0; i < numel( actual ); i++ ) {
		t.strictEqual( isnan( actual.iget( i ) ), false, 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function returns a function which supports specifying the output array data type (dtype=generic; scalar)', function test( t ) {
	var random;
	var actual;
	var shape;
	var i;

	random = factory();

	shape = [ 3, 3 ];
	actual = random( shape, PARAM1, PARAM2, {
		'dtype': 'generic'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	for ( i = 0; i < numel( actual ); i++ ) {
		t.strictEqual( isnan( actual.iget( i ) ), false, 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function returns a function which supports specifying the output array data type (dtype=generic; zero-dimensional ndarray)', function test( t ) {
	var random;
	var actual;
	var param1;
	var param2;
	var shape;
	var i;

	random = factory();

	shape = [ 3, 3 ];
	param1 = scalar2ndarray( PARAM1, 'generic', 'row-major' );
	param2 = scalar2ndarray( PARAM2, 'generic', 'row-major' );

	actual = random( shape, param1, param2, {
		'dtype': 'generic'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	for ( i = 0; i < numel( actual ); i++ ) {
		t.strictEqual( isnan( actual.iget( i ) ), false, 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function returns a function which supports specifying the output array data type (dtype=generic; ndarray)', function test( t ) {
	var random;
	var actual;
	var param1;
	var param2;
	var shape;
	var i;

	random = factory();

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ], [ PARAM1, PARAM1 ] ] );
	param2 = array( [ [ PARAM2, PARAM2 ], [ PARAM2, PARAM2 ] ] );

	actual = random( shape, param1, param2, {
		'dtype': 'generic'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	for ( i = 0; i < numel( actual ); i++ ) {
		t.strictEqual( isnan( actual.iget( i ) ), false, 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function returns a function which supports specifying the output array data type (dtype=generic; broadcasted ndarray)', function test( t ) {
	var random;
	var actual;
	var param1;
	var param2;
	var shape;
	var i;

	random = factory();

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ] ] );
	param2 = array( [ [ PARAM2, PARAM2 ] ] );

	actual = random( shape, param1, param2, {
		'dtype': 'generic'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	for ( i = 0; i < numel( actual ); i++ ) {
		t.strictEqual( isnan( actual.iget( i ) ), false, 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function returns a function which supports specifying the output array order (row-major; scalar)', function test( t ) {
	var random;
	var actual;
	var shape;

	random = factory();

	shape = [ 3, 3 ];
	actual = random( shape, PARAM1, PARAM2, {
		'order': 'row-major'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which supports specifying the output array order (row-major; zero-dimensional ndarray)', function test( t ) {
	var random;
	var actual;
	var param1;
	var param2;
	var shape;

	random = factory();

	shape = [ 3, 3 ];
	param1 = scalar2ndarray( PARAM1, 'float64', 'row-major' );
	param2 = scalar2ndarray( PARAM2, 'float64', 'row-major' );

	actual = random( shape, param1, param2, {
		'order': 'row-major'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which supports specifying the output array order (row-major; ndarray)', function test( t ) {
	var random;
	var actual;
	var param1;
	var param2;
	var shape;

	random = factory();

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ] ] );
	param2 = array( [ [ PARAM2, PARAM2 ] ] );

	actual = random( shape, param1, param2, {
		'order': 'row-major'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which supports specifying the output array order (column-major; scalar)', function test( t ) {
	var random;
	var actual;
	var shape;

	random = factory();

	shape = [ 3, 3 ];
	actual = random( shape, PARAM1, PARAM2, {
		'order': 'column-major'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'column-major', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which supports specifying the output array order (column-major; zero-dimensional ndarray)', function test( t ) {
	var random;
	var actual;
	var param1;
	var param2;
	var shape;

	random = factory();

	shape = [ 3, 3 ];
	param1 = scalar2ndarray( PARAM1, 'float64', 'row-major' );
	param2 = scalar2ndarray( PARAM2, 'float64', 'row-major' );

	actual = random( shape, param1, param2, {
		'order': 'column-major'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'column-major', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which supports specifying the output array order (column-major; ndarray)', function test( t ) {
	var random;
	var actual;
	var param1;
	var param2;
	var shape;

	random = factory();

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ] ] );
	param2 = array( [ [ PARAM2, PARAM2 ] ] );

	actual = random( shape, param1, param2, {
		'order': 'column-major'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'column-major', 'returns expected value' );
	t.deepEqual( getShape( actual ), shape, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which supports specifying whether the output array is read-only (scalar)', function test( t ) {
	var random;
	var actual;
	var shape;

	random = factory();

	shape = [ 3, 3 ];

	actual = random( shape, PARAM1, PARAM2, {
		'readonly': false
	});
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), false, 'returns expected value' );

	actual = random( shape, PARAM1, PARAM2, {
		'readonly': true
	});
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which supports specifying whether the output array is read-only (zero-dimensional ndarray)', function test( t ) {
	var random;
	var actual;
	var param1;
	var param2;
	var shape;

	random = factory();

	shape = [ 3, 3 ];
	param1 = scalar2ndarray( PARAM1, 'float64', 'row-major' );
	param2 = scalar2ndarray( PARAM2, 'float64', 'row-major' );

	actual = random( shape, param1, param2, {
		'readonly': false
	});
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), false, 'returns expected value' );

	actual = random( shape, param1, param2, {
		'readonly': true
	});
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which supports specifying whether the output array is read-only (ndarray)', function test( t ) {
	var random;
	var actual;
	var param1;
	var param2;
	var shape;

	random = factory();

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ] ] );
	param2 = array( [ [ PARAM2, PARAM2 ] ] );

	actual = random( shape, param1, param2, {
		'readonly': false
	});
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), false, 'returns expected value' );

	actual = random( shape, param1, param2, {
		'readonly': true
	});
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a PRNG seed', function test( t ) {
	var random;
	var arr1;
	var arr2;

	random = factory({
		'seed': 12345
	});
	arr1 = random( [ 3, 3 ], PARAM1, PARAM2, {
		'dtype': 'float64'
	});

	random = factory({
		'seed': 12345
	});
	arr2 = random( [ 3, 3 ], PARAM1, PARAM2, {
		'dtype': 'float64'
	});

	t.strictEqual( isSameFloat64Array( getData( arr1 ), getData( arr2 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying the generator state', function test( t ) {
	var random;
	var state;
	var arr1;
	var arr2;
	var i;

	random = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		random( [ 2 ], PARAM1, PARAM2 );
	}
	// Capture the current state:
	state = random.state;

	// Move to a future state...
	arr1 = random( [ 10 ], PARAM1, PARAM2, {
		'dtype': 'float64'
	});
	for ( i = 0; i < 100; i++ ) {
		random( [ 2 ], PARAM1, PARAM2 );
	}
	// Create another function using the captured state:
	random = factory({
		'state': state
	});

	// Replay previously generated values:
	arr2 = random( [ 10 ], PARAM1, PARAM2, {
		'dtype': 'float64'
	});
	t.strictEqual( isSameFloat64Array( getData( arr1 ), getData( arr2 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which supports setting the generator state', function test( t ) {
	var random;
	var state;
	var arr1;
	var arr2;
	var i;

	random = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		random( [ 2 ], PARAM1, PARAM2 );
	}
	// Capture the current state:
	state = random.state;

	// Move to a future state...
	arr1 = random( [ 10 ], PARAM1, PARAM2 );
	for ( i = 0; i < 100; i++ ) {
		random( [ 2 ], PARAM1, PARAM2 );
	}
	// Set the state:
	random.state = state;

	// Replay previously generated values:
	arr2 = random( [ 10 ], PARAM1, PARAM2 );
	t.strictEqual( isSameFloat64Array( getData( arr2 ), getData( arr1 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the underlying PRNG', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory({
		'prng': minstd.normalized
	});
	actual = random( [ 10 ], PARAM1, PARAM2 );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isnan( actual.iget( i ) ), false, 'returns expected value' );
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
	random1 = factory({
		'prng': randu.normalized
	});

	randu = minstd.factory({
		'seed': seed
	});
	random2 = factory({
		'prng': randu.normalized
	});

	t.notEqual( random1, random2, 'separate generators' );

	arr1 = random1( [ 10 ], PARAM1, PARAM2 );
	arr2 = random2( [ 10 ], PARAM1, PARAM2 );
	t.strictEqual( isSameFloat64Array( getData( arr1 ), getData( arr2 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'attached to the returned function is the underlying PRNG', function test( t ) {
	var random = factory();
	t.strictEqual( typeof random.PRNG, 'function', 'has property' );

	random = factory({
		'prng': minstd.normalized
	});
	t.strictEqual( random.PRNG, minstd.normalized, 'has property' );
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
		'prng': minstd.normalized
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
		'prng': minstd.normalized
	});
	t.strictEqual( random.seedLength, null, 'returns expected value' );
	t.end();
});

tape( 'attached to the returned function is the generator state', function test( t ) {
	var random = factory();
	t.strictEqual( isUint32Array( random.state ), true, 'has property' );

	random = factory({
		'prng': minstd.normalized
	});
	t.strictEqual( random.state, null, 'returns expected value' );
	t.end();
});

tape( 'attached to the returned function is the generator state length', function test( t ) {
	var random = factory();
	t.strictEqual( typeof random.stateLength, 'number', 'has property' );

	random = factory({
		'prng': minstd.normalized
	});
	t.strictEqual( random.stateLength, null, 'returns expected value' );
	t.end();
});

tape( 'attached to the returned function is the generator state size', function test( t ) {
	var random = factory();
	t.strictEqual( typeof random.byteLength, 'number', 'has property' );

	random = factory({
		'prng': minstd.normalized
	});
	t.strictEqual( random.byteLength, null, 'returns expected value' );
	t.end();
});
